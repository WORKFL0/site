import { Client } from '@notionhq/client'
import { PageObjectResponse, DatabaseObjectResponse } from '@notionhq/client/build/src/api-endpoints'

// Initialize Notion client
const notion = new Client({
  auth: process.env.NOTION_API_KEY,
})

// Database IDs
const BLOG_DATABASE_ID = process.env.NOTION_BLOG_DATABASE_ID || 'f87fb961e6b74bb1894949a89abf20a0'
const NEWS_DATABASE_ID = process.env.NOTION_NEWS_DATABASE_ID || 'f87fb961e6b74bb1894949a89abf20a0'

export interface BlogPost {
  id: string
  title: string
  slug: string
  excerpt: string
  content: string
  coverImage?: string
  publishedDate: string
  author?: string
  tags: string[]
  status: 'published' | 'draft'
  linkedinUrl?: string
  category?: string
}

export interface NewsItem {
  id: string
  title: string
  description: string
  link: string
  publishedDate: string
  source: 'notion' | 'linkedin' | 'rss'
  image?: string
  category?: string
}

// Helper function to extract plain text from Notion rich text
function extractPlainText(richText: any[]): string {
  if (!richText || !Array.isArray(richText)) return ''
  return richText.map(text => text.plain_text || '').join('')
}

// Helper function to get page property value
function getPropertyValue(page: PageObjectResponse, propertyName: string): any {
  const property = page.properties[propertyName]
  if (!property) return null

  switch (property.type) {
    case 'title':
      return extractPlainText(property.title)
    case 'rich_text':
      return extractPlainText(property.rich_text)
    case 'select':
      return property.select?.name || null
    case 'multi_select':
      return property.multi_select?.map(item => item.name) || []
    case 'date':
      return property.date?.start || null
    case 'url':
      return property.url || null
    case 'files':
      const file = property.files?.[0]
      if (!file) return null
      if ('file' in file) return file.file.url
      if ('external' in file) return file.external.url
      return null
    case 'checkbox':
      return property.checkbox
    case 'status':
      return property.status?.name || null
    default:
      return null
  }
}

// Fetch blog posts from Notion
export async function getBlogPosts(limit?: number): Promise<BlogPost[]> {
  try {
    if (!process.env.NOTION_API_KEY) {
      console.warn('Notion API key not configured')
      return getMockBlogPosts()
    }

    const response = await notion.databases.query({
      database_id: BLOG_DATABASE_ID,
      page_size: limit || 100
    }).catch((error) => {
      console.error('Error querying Notion database:', error)
      return null
    })

    if (!response) {
      return getMockBlogPosts()
    }

    const posts: BlogPost[] = []
    
    for (const page of response.results) {
      if (!('properties' in page)) continue
      
      const post: BlogPost = {
        id: page.id,
        title: getPropertyValue(page as PageObjectResponse, 'Title') || 'Untitled',
        slug: getPropertyValue(page as PageObjectResponse, 'Slug') || page.id,
        excerpt: getPropertyValue(page as PageObjectResponse, 'Excerpt') || '',
        content: '', // Will be fetched separately if needed
        coverImage: getPropertyValue(page as PageObjectResponse, 'Cover Image'),
        publishedDate: getPropertyValue(page as PageObjectResponse, 'Published') || new Date().toISOString(),
        author: getPropertyValue(page as PageObjectResponse, 'Author'),
        tags: getPropertyValue(page as PageObjectResponse, 'Tags') || [],
        status: 'published',
        linkedinUrl: getPropertyValue(page as PageObjectResponse, 'LinkedIn URL'),
        category: getPropertyValue(page as PageObjectResponse, 'Category')
      }
      
      posts.push(post)
    }

    return posts
  } catch (error) {
    console.error('Error fetching blog posts from Notion:', error)
    return getMockBlogPosts()
  }
}

// Fetch single blog post with full content
export async function getBlogPost(slug: string): Promise<BlogPost | null> {
  try {
    if (!process.env.NOTION_API_KEY) {
      return getMockBlogPosts().find(post => post.slug === slug) || null
    }

    // For now, return mock data since Notion DB structure is unknown
    return getMockBlogPosts().find(post => post.slug === slug) || null

    // Removed as we're using mock data for now
  } catch (error) {
    console.error('Error fetching blog post from Notion:', error)
    return null
  }
}

// Convert Notion blocks to HTML content
async function blocksToContent(blocks: any[]): Promise<string> {
  let content = ''
  
  for (const block of blocks) {
    switch (block.type) {
      case 'paragraph':
        content += `<p>${extractPlainText(block.paragraph.rich_text)}</p>\n`
        break
      case 'heading_1':
        content += `<h1>${extractPlainText(block.heading_1.rich_text)}</h1>\n`
        break
      case 'heading_2':
        content += `<h2>${extractPlainText(block.heading_2.rich_text)}</h2>\n`
        break
      case 'heading_3':
        content += `<h3>${extractPlainText(block.heading_3.rich_text)}</h3>\n`
        break
      case 'bulleted_list_item':
        content += `<li>${extractPlainText(block.bulleted_list_item.rich_text)}</li>\n`
        break
      case 'numbered_list_item':
        content += `<li>${extractPlainText(block.numbered_list_item.rich_text)}</li>\n`
        break
      case 'quote':
        content += `<blockquote>${extractPlainText(block.quote.rich_text)}</blockquote>\n`
        break
      case 'code':
        content += `<pre><code>${extractPlainText(block.code.rich_text)}</code></pre>\n`
        break
      case 'image':
        const imageUrl = block.image.file?.url || block.image.external?.url
        if (imageUrl) {
          content += `<img src="${imageUrl}" alt="${extractPlainText(block.image.caption || [])}" />\n`
        }
        break
    }
  }
  
  return content
}

// Fetch news items from various sources
export async function getNewsItems(limit: number = 10): Promise<NewsItem[]> {
  const items: NewsItem[] = []
  
  // Fetch from Notion if configured
  try {
    const notionNews = await getNotionNews(limit)
    items.push(...notionNews)
  } catch (error) {
    console.error('Error fetching Notion news:', error)
  }
  
  // Fetch from RSS feed
  try {
    const rssNews = await getRSSNews(limit)
    items.push(...rssNews)
  } catch (error) {
    console.error('Error fetching RSS news:', error)
  }
  
  // Sort by date and limit
  return items
    .sort((a, b) => new Date(b.publishedDate).getTime() - new Date(a.publishedDate).getTime())
    .slice(0, limit)
}

// Fetch news from Notion
async function getNotionNews(limit: number): Promise<NewsItem[]> {
  if (!process.env.NOTION_API_KEY) return []
  
  try {
    const response = await notion.databases.query({
      database_id: NEWS_DATABASE_ID,
      page_size: limit
    }).catch(() => null)
    
    if (!response) return []
    
    return response.results.map((page: any) => ({
      id: page.id,
      title: getPropertyValue(page, 'Title') || 'Untitled',
      description: getPropertyValue(page, 'Description') || '',
      link: getPropertyValue(page, 'Link') || `/news/${page.id}`,
      publishedDate: getPropertyValue(page, 'Date') || new Date().toISOString(),
      source: 'notion' as const,
      image: getPropertyValue(page, 'Image'),
      category: getPropertyValue(page, 'Category')
    }))
  } catch (error) {
    console.error('Error fetching Notion news:', error)
    return []
  }
}

// Fetch news from RSS feed
async function getRSSNews(limit: number): Promise<NewsItem[]> {
  // RSS feed can only be fetched on client side
  if (typeof window === 'undefined') {
    return []
  }
  
  try {
    const response = await fetch('/api/rss-feed')
    if (!response.ok) throw new Error('Failed to fetch RSS feed')
    
    const xmlText = await response.text()
    const parser = new DOMParser()
    const xmlDoc = parser.parseFromString(xmlText, 'text/xml')
    
    const items = xmlDoc.querySelectorAll('item')
    const newsItems: NewsItem[] = []
    
    items.forEach((item, index) => {
      if (index >= limit) return
      
      const title = item.querySelector('title')?.textContent || ''
      const description = item.querySelector('description')?.textContent || ''
      const link = item.querySelector('link')?.textContent || ''
      const pubDate = item.querySelector('pubDate')?.textContent || ''
      
      newsItems.push({
        id: `rss-${index}`,
        title,
        description: description.replace(/<[^>]*>/g, '').substring(0, 200),
        link,
        publishedDate: pubDate ? new Date(pubDate).toISOString() : new Date().toISOString(),
        source: 'rss'
      })
    })
    
    return newsItems
  } catch (error) {
    console.error('Error fetching RSS news:', error)
    return []
  }
}

// Mock data for development/fallback
function getMockBlogPosts(): BlogPost[] {
  return [
    {
      id: '1',
      title: 'De Toekomst van IT-Beheer met AI',
      slug: 'toekomst-it-beheer-ai',
      excerpt: 'Ontdek hoe kunstmatige intelligentie het IT-beheer revolutioneert en wat dit betekent voor uw bedrijf.',
      content: '<p>Kunstmatige intelligentie transformeert de manier waarop we IT-infrastructuur beheren...</p>',
      coverImage: '/images/blog/ai-it-management.jpg',
      publishedDate: '2024-03-15T10:00:00Z',
      author: 'Florian van Workflo',
      tags: ['AI', 'IT Management', 'Innovation'],
      status: 'published',
      category: 'Technology'
    },
    {
      id: '2',
      title: 'Cybersecurity Best Practices voor MKB',
      slug: 'cybersecurity-best-practices-mkb',
      excerpt: 'Essentiële beveiligingsmaatregelen die elk MKB-bedrijf moet implementeren in 2024.',
      content: '<p>In het digitale tijdperk is cybersecurity geen luxe meer, maar een noodzaak...</p>',
      coverImage: '/images/blog/cybersecurity.jpg',
      publishedDate: '2024-03-10T14:30:00Z',
      author: 'Security Team Workflo',
      tags: ['Cybersecurity', 'MKB', 'Best Practices'],
      status: 'published',
      category: 'Security'
    },
    {
      id: '3',
      title: 'Microsoft 365 Migratie: Een Complete Gids',
      slug: 'microsoft-365-migratie-gids',
      excerpt: 'Stap-voor-stap handleiding voor een succesvolle migratie naar Microsoft 365.',
      content: '<p>De migratie naar Microsoft 365 kan complex lijken, maar met de juiste aanpak...</p>',
      coverImage: '/images/blog/microsoft-365.jpg',
      publishedDate: '2024-03-05T09:15:00Z',
      author: 'Cloud Team Workflo',
      tags: ['Microsoft 365', 'Cloud', 'Migration'],
      status: 'published',
      linkedinUrl: 'https://www.linkedin.com/posts/workflo_microsoft365-migration',
      category: 'Cloud'
    }
  ]
}