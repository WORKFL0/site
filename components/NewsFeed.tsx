'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { CalendarIcon, ArrowTopRightOnSquareIcon } from '@heroicons/react/24/outline'

interface NewsItem {
  title: string
  description: string
  link: string
  pubDate: string
  guid: string
}

interface NewsFeedProps {
  maxItems?: number
  showDescription?: boolean
  className?: string
}

const NewsFeed = ({ 
  maxItems = 6, 
  showDescription = true,
  className = ''
}: NewsFeedProps) => {
  const [newsItems, setNewsItems] = useState<NewsItem[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  useEffect(() => {
    const fetchRSSFeed = async () => {
      try {
        setLoading(true)
        setError(null)
        
        // Fetch RSS feed via our API endpoint (handles CORS server-side)
        const response = await fetch('/api/rss-feed', {
          cache: 'no-store',
          headers: {
            'Accept': 'application/xml, text/xml, application/rss+xml'
          }
        })
        
        if (!response.ok) {
          throw new Error(`Failed to fetch RSS feed: ${response.status} ${response.statusText}`)
        }
        
        // Check which RSS source was used (for debugging)
        const rssSource = response.headers.get('X-RSS-Source')
        if (rssSource) {
          console.log('RSS feed source:', rssSource)
        }
        
        const xmlContent = await response.text()
        
        if (!xmlContent) {
          throw new Error('No RSS content available')
        }
        
        console.log('Received RSS content length:', xmlContent.length)
        console.log('First 200 chars:', xmlContent.substring(0, 200))
        
        const parser = new DOMParser()
        const xmlDoc = parser.parseFromString(xmlContent, 'text/xml')
        
        // Check for parsing errors
        const parserError = xmlDoc.querySelector('parsererror')
        if (parserError) {
          console.error('XML parsing error:', parserError.textContent)
          // Try to recover by checking if it's a valid RSS structure despite the error
          if (!xmlContent.includes('<item>') && !xmlContent.includes('<entry>')) {
            throw new Error('Invalid RSS feed format')
          }
        }
        
        // Try both RSS and Atom feed formats
        let items = xmlDoc.querySelectorAll('item')
        if (items.length === 0) {
          items = xmlDoc.querySelectorAll('entry') // Atom format
        }
        
        console.log(`Found ${items.length} items in RSS feed`)
        
        const newsData: NewsItem[] = []
        
        items.forEach((item, index) => {
          if (index < maxItems) {
            // Handle both RSS and Atom formats
            const title = item.querySelector('title')?.textContent || ''
            const description = item.querySelector('description')?.textContent || 
                              item.querySelector('summary')?.textContent || 
                              item.querySelector('content')?.textContent || ''
            const link = item.querySelector('link')?.textContent || 
                        item.querySelector('link')?.getAttribute('href') || ''
            const pubDate = item.querySelector('pubDate')?.textContent || 
                           item.querySelector('published')?.textContent || 
                           item.querySelector('updated')?.textContent || ''
            const guid = item.querySelector('guid')?.textContent || 
                        item.querySelector('id')?.textContent || 
                        `item-${index}`
            
            // Check for special error message items or non-article content
            const isErrorItem = title.includes('RSS Feed Temporarily Unavailable') || 
                               title.includes('Feed Unavailable') ||
                               title.includes('RSS Feed Service Status') ||
                               title.includes('Alternative: Enable Test Mode')
            
            // Filter out any non-article content
            const isValidArticle = title && 
                                  !isErrorItem && 
                                  link && 
                                  !link.startsWith('/api/') // Exclude internal API links
            
            // Only add real content items (not error messages) that have at least a title and valid link
            if (isValidArticle) {
              // Clean up description - remove HTML tags and decode entities
              const cleanDescription = description
                .replace(/<[^>]*>/g, '') // Remove HTML tags
                .replace(/&nbsp;/g, ' ')  // Replace nbsp
                .replace(/&amp;/g, '&')   // Decode ampersand
                .replace(/&lt;/g, '<')    // Decode less than
                .replace(/&gt;/g, '>')    // Decode greater than
                .replace(/&quot;/g, '"')  // Decode quotes
                .replace(/&#39;/g, "'")   // Decode apostrophe
                .trim()
              
              newsData.push({
                title: title.trim(),
                description: cleanDescription,
                link: link.trim(),
                pubDate: pubDate.trim(),
                guid: guid.trim()
              })
              
              console.log(`Added item ${index + 1}: ${title.substring(0, 50)}...`)
            } else if (isErrorItem) {
              console.warn('RSS feed returned an error item:', title)
              setError('RSS feed is temporarily unavailable. Please try again later.')
            }
          }
        })
        
        console.log(`Processed ${newsData.length} valid news items`)
        
        if (newsData.length === 0) {
          console.warn('No valid news items found in RSS feed')
          setError('No articles available from the RSS feed at the moment.')
        }
        
        setNewsItems(newsData)
      } catch (err) {
        console.error('Error fetching RSS feed:', err)
        setError(err instanceof Error ? err.message : 'Failed to load news feed')
        setNewsItems([])
      } finally {
        setLoading(false)
      }
    }

    fetchRSSFeed()
  }, [maxItems])

  const formatDate = (dateString: string) => {
    try {
      const date = new Date(dateString)
      return date.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric'
      })
    } catch {
      return 'Recent'
    }
  }

  const truncateText = (text: string, maxLength: number) => {
    if (text.length <= maxLength) return text
    return text.substring(0, maxLength).trim() + '...'
  }

  if (loading) {
    return (
      <div className={`w-full ${className}`}>
        <div className="animate-pulse">
          <div className="h-8 bg-gray-200 rounded mb-6 w-48"></div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[...Array(6)].map((_, index) => (
              <div key={index} className="bg-white rounded-lg border p-6">
                <div className="h-4 bg-gray-200 rounded w-3/4 mb-3"></div>
                <div className="h-3 bg-gray-200 rounded w-1/2 mb-4"></div>
                <div className="space-y-2">
                  <div className="h-3 bg-gray-200 rounded"></div>
                  <div className="h-3 bg-gray-200 rounded w-5/6"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }

  // Show error or no items message
  if ((newsItems.length === 0 || error) && !loading) {
    return (
      <div className={`w-full ${className}`}>
        <motion.div 
          className="text-center py-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="bg-gray-50 rounded-lg p-8 max-w-md mx-auto">
            <div className="text-gray-400 mb-4">
              <svg className="w-16 h-16 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">RSS Feed Unavailable</h3>
            <p className="text-gray-600">
              {error || 'No articles available from the RSS feed at the moment. Please check back later.'}
            </p>
          </div>
        </motion.div>
      </div>
    )
  }

  return (
    <div className={`w-full ${className}`} ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
      >
        <div className="flex items-center justify-between mb-8">
          <motion.h2 
            className="text-3xl font-bold text-gray-900"
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Latest Industry News
          </motion.h2>
          <motion.div 
            className="flex items-center gap-2 text-gray-500 text-sm"
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            Live Feed
          </motion.div>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {newsItems.map((item, index) => (
            <motion.article
              key={item.guid}
              className="group bg-white rounded-lg border border-gray-200 hover:border-yellow-400 transition-all duration-300 hover:shadow-lg overflow-hidden"
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ 
                duration: 0.6, 
                delay: 0.4 + (index * 0.1),
                ease: "easeOut"
              }}
              whileHover={{ 
                y: -8, 
                scale: 1.02,
                transition: { duration: 0.3 }
              }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="p-6">
                {/* Date */}
                <div className="flex items-center gap-2 text-gray-500 text-sm mb-3">
                  <CalendarIcon className="w-4 h-4" />
                  <time dateTime={item.pubDate}>
                    {formatDate(item.pubDate)}
                  </time>
                </div>

                {/* Title */}
                <h3 className="font-bold text-lg text-gray-900 mb-3 group-hover:text-yellow-600 transition-colors duration-300">
                  {truncateText(item.title, 80)}
                </h3>

                {/* Description */}
                {showDescription && item.description && (
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                    {truncateText(item.description.replace(/<[^>]*>/g, ''), 120)}
                  </p>
                )}

                {/* Read More Link */}
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-yellow-600 font-medium text-sm hover:text-yellow-700 transition-colors duration-200"
                >
                  Read More
                  <ArrowTopRightOnSquareIcon className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
                </a>
              </div>

              {/* Hover indicator */}
              <div className="h-1 bg-gradient-to-r from-yellow-400 to-yellow-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
            </motion.article>
          ))}
        </div>

        {/* View More Link */}
        <motion.div 
          className="text-center mt-8"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 1.2 }}
        >
          <a
            href="https://rss.workflo.it/i/?a=rss&get=c_4&rid=6893c5809212b&hours=168"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-yellow-400 text-black px-6 py-3 rounded-lg font-medium hover:bg-yellow-500 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            View All News
            <ArrowTopRightOnSquareIcon className="w-4 h-4" />
          </a>
        </motion.div>
      </motion.div>
    </div>
  )
}

export default NewsFeed