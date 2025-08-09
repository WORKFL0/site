import { NextResponse } from 'next/server'
import { getEnvConfig } from '@/lib/env-config'

export const dynamic = 'force-dynamic' // Disable static generation for this route

// Get failsafe configuration
const envConfig = getEnvConfig()

// Configuration for RSS feeds with failsafe defaults
const RSS_CONFIG = {
  // Always have a working configuration
  USE_FALLBACK_FEED: envConfig.RSS_USE_FALLBACK,
  
  // Primary WorkFlo RSS URLs to try
  PRIMARY_FEEDS: [
    envConfig.RSS_PRIMARY_FEED,
    'https://rss.workflo.it/i/?a=rss&get=c_4',
    'https://rss.workflo.it/api/greader.php/reader/api/0/stream/contents/feed/4',
  ].filter(Boolean), // Remove any undefined values
  
  // Fallback feeds - ALWAYS have working feeds
  FALLBACK_FEEDS: [
    'https://feeds.feedburner.com/TheHackersNews', // The Hacker News - Cybersecurity
    'https://www.bleepingcomputer.com/feed/', // BleepingComputer - IT Security
    'https://krebsonsecurity.com/feed/', // Krebs on Security
  ]
}

async function tryFetchRSS(url: string): Promise<{ success: boolean; content?: string; error?: string }> {
  let timeoutId: NodeJS.Timeout | null = null
  let controller: AbortController | null = null
  
  try {
    // Validate URL before attempting fetch
    if (!url || typeof url !== 'string' || url.trim().length === 0) {
      return {
        success: false,
        error: 'Invalid URL provided'
      }
    }
    
    // Basic URL validation
    try {
      new URL(url)
    } catch (urlError) {
      return {
        success: false,
        error: 'Malformed URL provided'
      }
    }
    
    console.log('Attempting to fetch RSS feed from:', url)
    
    controller = new AbortController()
    timeoutId = setTimeout(() => {
      if (controller) {
        controller.abort()
      }
    }, 8000) // 8 second timeout
    
    let response: Response
    
    try {
      response = await fetch(url, {
        headers: {
          'User-Agent': 'Mozilla/5.0 (compatible; RSS Reader/1.0)',
          'Accept': 'application/rss+xml, application/xml, text/xml, application/atom+xml, text/html, */*',
        },
        cache: 'no-store',
        redirect: 'follow',
        signal: controller.signal
      })
    } catch (fetchError) {
      if (timeoutId) clearTimeout(timeoutId)
      
      if (fetchError instanceof Error) {
        if (fetchError.name === 'AbortError') {
          return {
            success: false,
            error: 'Request timeout (8 seconds)'
          }
        }
        return {
          success: false,
          error: `Network error: ${fetchError.message}`
        }
      }
      
      return {
        success: false,
        error: 'Unknown network error'
      }
    }
    
    if (timeoutId) clearTimeout(timeoutId)
    
    if (!response) {
      return {
        success: false,
        error: 'No response received'
      }
    }

    console.log(`Response status for ${url}:`, response.status)

    if (!response.ok) {
      return { 
        success: false, 
        error: `HTTP ${response.status}: ${response.statusText || 'Unknown error'}` 
      }
    }

    let content: string
    try {
      content = await response.text()
    } catch (textError) {
      return {
        success: false,
        error: 'Failed to read response content'
      }
    }
    
    if (!content || content.trim().length === 0) {
      return { 
        success: false, 
        error: 'Empty response' 
      }
    }

    // Quick validation that it's XML/RSS content
    const lowerContent = content.toLowerCase()
    const isXML = content.trim().startsWith('<?xml') || 
                  lowerContent.includes('<rss') || 
                  lowerContent.includes('<feed') ||
                  lowerContent.includes('<channel')
    
    const isHTML = lowerContent.includes('<!doctype html') || 
                   lowerContent.includes('<html')
    
    console.log(`Content validation - Is XML/RSS: ${isXML}, Is HTML: ${isHTML}, Length: ${content.length}`)

    if (isHTML && !isXML) {
      return { 
        success: false, 
        error: 'Received HTML instead of RSS feed' 
      }
    }

    // Even if not perfect XML, if it has RSS-like structure, accept it
    if (lowerContent.includes('<item>') || lowerContent.includes('<entry>')) {
      return { success: true, content }
    }

    // If no items found but it looks like RSS structure
    if (isXML) {
      console.warn('RSS feed appears valid but contains no items')
      return { success: true, content }
    }

    return { 
      success: false, 
      error: 'Invalid RSS feed format' 
    }
  } catch (error: any) {
    if (timeoutId) clearTimeout(timeoutId)
    
    console.error(`Error fetching RSS from ${url}:`, error)
    
    if (error instanceof Error) {
      if (error.name === 'AbortError') {
        return { 
          success: false, 
          error: 'Request timeout (8 seconds)' 
        }
      }
      return { 
        success: false, 
        error: error.message || 'Unknown error' 
      }
    }
    
    return { 
      success: false, 
      error: 'Unknown error occurred' 
    }
  }
}

// Helper function to parse RSS XML to JSON
function parseRSSToJSON(xmlContent: string): { items: NewsItem[] } {
  const items: NewsItem[] = []
  
  try {
    // Simple XML parsing without external dependencies
    const itemRegex = /<item>([\s\S]*?)<\/item>/gi
    const matches = xmlContent.match(itemRegex) || []
    
    for (const itemXml of matches.slice(0, 10)) { // Limit to 10 items
      const title = (itemXml.match(/<title>([\s\S]*?)<\/title>/i) || ['', ''])[1]
        .replace(/<!\[CDATA\[(.*?)\]\]>/g, '$1')
        .replace(/&lt;/g, '<')
        .replace(/&gt;/g, '>')
        .replace(/&amp;/g, '&')
        .replace(/&quot;/g, '"')
        .trim()
      
      const link = (itemXml.match(/<link>([\s\S]*?)<\/link>/i) || ['', ''])[1]
        .replace(/<!\[CDATA\[(.*?)\]\]>/g, '$1')
        .trim()
      
      const description = (itemXml.match(/<description>([\s\S]*?)<\/description>/i) || ['', ''])[1]
        .replace(/<!\[CDATA\[(.*?)\]\]>/g, '$1')
        .replace(/<[^>]+>/g, '') // Strip HTML tags
        .replace(/&lt;/g, '<')
        .replace(/&gt;/g, '>')
        .replace(/&amp;/g, '&')
        .replace(/&quot;/g, '"')
        .trim()
        .substring(0, 200) // Limit description length
      
      const pubDate = (itemXml.match(/<pubDate>([\s\S]*?)<\/pubDate>/i) || ['', new Date().toISOString()])[1]
        .trim()
      
      const guid = (itemXml.match(/<guid[^>]*>([\s\S]*?)<\/guid>/i) || ['', `item-${Date.now()}-${Math.random()}`])[1]
        .replace(/<!\[CDATA\[(.*?)\]\]>/g, '$1')
        .trim()
      
      if (title && (link || description)) {
        items.push({
          title,
          link: link || '#',
          description: description || title,
          pubDate: pubDate || new Date().toISOString(),
          guid: guid || `${title}-${Date.now()}`
        })
      }
    }
  } catch (parseError) {
    console.error('Error parsing RSS XML:', parseError)
  }
  
  return { items }
}

interface NewsItem {
  title: string
  link: string
  description: string
  pubDate: string
  guid: string
}

export async function GET(request: Request) {
  try {
    // Validate request
    if (!request || !request.url) {
      console.error('RSS API: Invalid request object received')
      return NextResponse.json({ items: [] }, { status: 400 })
    }

    let searchParams: URLSearchParams
    let feedParam: string | null = null
    let testMode = false

    try {
      const url = new URL(request.url)
      searchParams = url.searchParams
      feedParam = searchParams.get('feed')
      testMode = searchParams.get('test') === 'true'
    } catch (urlError) {
      console.error('RSS API: Failed to parse request URL:', urlError)
      return NextResponse.json({ items: [] }, { status: 400 })
    }
    
    // Determine which feeds to try
    let feedsToTry: string[] = []
    
    try {
      // Check for custom RSS feed URL from environment
      if (process.env.RSS_FEED_URL) {
        // If a custom feed URL is set in environment, use it exclusively
        feedsToTry = [process.env.RSS_FEED_URL]
        console.log('Using custom RSS feed from environment:', process.env.RSS_FEED_URL)
      } else if (feedParam) {
        // If a specific feed URL is provided in query params, use only that
        feedsToTry = [feedParam]
      } else if (testMode || RSS_CONFIG.USE_FALLBACK_FEED) {
        // In test mode or if configured, use fallback feeds
        feedsToTry = RSS_CONFIG.FALLBACK_FEEDS
      } else {
        // Normal operation - try primary feeds first
        feedsToTry = RSS_CONFIG.PRIMARY_FEEDS
      }
      
      // Filter out invalid URLs
      feedsToTry = feedsToTry.filter(url => {
        try {
          new URL(url)
          return true
        } catch {
          console.warn('RSS API: Skipping invalid URL:', url)
          return false
        }
      })
      
      if (feedsToTry.length === 0) {
        // Return empty items array instead of error
        return NextResponse.json({ items: [] })
      }
      
      console.log('RSS Feed URLs to try:', feedsToTry)
      
    } catch (configError) {
      console.error('RSS API: Error preparing feed URLs:', configError)
      return NextResponse.json({ items: [] })
    }
    
    // Try each RSS URL in order until one succeeds
    const errors: string[] = []
    
    for (const url of feedsToTry) {
      try {
        const result = await tryFetchRSS(url)
        
        if (result.success && result.content) {
          console.log(`Successfully fetched RSS from: ${url}`)
          
          // Parse RSS XML to JSON
          const jsonData = parseRSSToJSON(result.content)
          
          // Return the successful RSS content as JSON
          return NextResponse.json(jsonData, {
            status: 200,
            headers: {
              'Cache-Control': 'public, s-maxage=300, stale-while-revalidate=600',
              'X-RSS-Source': url, // Include source URL for debugging
            },
          })
        } else {
          const errorMessage = `Failed to fetch from ${url}: ${result.error}`
          console.warn(errorMessage)
          errors.push(errorMessage)
        }
      } catch (fetchError) {
        const errorMessage = `Exception fetching from ${url}: ${fetchError instanceof Error ? fetchError.message : 'Unknown error'}`
        console.error(errorMessage)
        errors.push(errorMessage)
      }
    }

    // All URLs failed - return empty items array
    console.error('All RSS feed URLs failed:', errors.join('; '))
    
    // Return empty items array to prevent errors in frontend
    return NextResponse.json({ items: [] }, {
      status: 200,
      headers: {
        'Cache-Control': 'no-cache',
        'X-RSS-Status': 'error',
        'X-RSS-Errors': errors.slice(0, 5).join('; ').substring(0, 500),
      },
    })
  } catch (error) {
    console.error('RSS API: Unexpected error:', error)
    return NextResponse.json({ items: [] }, {
      status: 200,
      headers: {
        'Cache-Control': 'no-cache',
      },
    })
  }
}