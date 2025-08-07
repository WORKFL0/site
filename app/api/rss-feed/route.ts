import { NextResponse } from 'next/server'

export const dynamic = 'force-dynamic' // Disable static generation for this route

// Configuration for RSS feeds
const RSS_CONFIG = {
  // Use environment variable or default to true (temporarily until WorkFlo RSS is fixed)
  USE_FALLBACK_FEED: process.env.RSS_USE_FALLBACK !== 'false',
  
  // Primary WorkFlo RSS URLs to try
  PRIMARY_FEEDS: [
    // Use environment variable if set, otherwise use defaults
    process.env.RSS_PRIMARY_FEED || 'https://rss.workflo.it/i/?a=rss&get=c_4&rid=6893c5809212b&hours=168',
    'https://rss.workflo.it/i/?a=rss&get=c_4',
    'https://rss.workflo.it/api/greader.php/reader/api/0/stream/contents/feed/4',
  ].filter(Boolean), // Remove any undefined values
  
  // Fallback feeds (IT and cybersecurity news feeds)
  FALLBACK_FEEDS: process.env.RSS_FALLBACK_FEEDS 
    ? process.env.RSS_FALLBACK_FEEDS.split(',').map(url => url.trim())
    : [
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

export async function GET(request: Request) {
  try {
    // Validate request
    if (!request || !request.url) {
      console.error('RSS API: Invalid request object received')
      return new NextResponse('Invalid request', { status: 400 })
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
      return new NextResponse('Invalid request URL', { status: 400 })
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
        throw new Error('No valid RSS feed URLs available')
      }
      
      console.log('RSS Feed URLs to try:', feedsToTry)
      
    } catch (configError) {
      console.error('RSS API: Error preparing feed URLs:', configError)
      return new NextResponse('Configuration error', { status: 500 })
    }
    
    // Try each RSS URL in order until one succeeds
    const errors: string[] = []
    
    for (const url of feedsToTry) {
      try {
        const result = await tryFetchRSS(url)
        
        if (result.success && result.content) {
          console.log(`Successfully fetched RSS from: ${url}`)
          
          // Return the successful RSS content
          return new NextResponse(result.content, {
            status: 200,
            headers: {
              'Content-Type': 'application/xml; charset=utf-8',
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

    // All URLs failed - provide informative error RSS
    console.error('All RSS feed URLs failed:', errors.join('; '))
    
    const errorMessage = testMode 
      ? 'Test feeds are currently unavailable. Please check your internet connection.'
      : 'The WorkFlo RSS feed service is currently unavailable. This could be due to server maintenance or configuration issues.'
    
    // Return a valid RSS feed with helpful error information
    try {
      const errorRss = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>WorkFlo News Feed</title>
    <description>Latest industry news and updates</description>
    <link>https://rss.workflo.it</link>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <generator>WorkFlo RSS Service</generator>
    <item>
      <title>RSS Feed Service Status</title>
      <description>${errorMessage.replace(/[<>&"]/g, (match) => {
        const entityMap: { [key: string]: string } = {
          '<': '&lt;',
          '>': '&gt;',
          '&': '&amp;',
          '"': '&quot;'
        }
        return entityMap[match] || match
      })} The feed URLs have been configured but are not responding. Please verify the RSS feed URL with your provider or try again later.</description>
      <link>https://rss.workflo.it</link>
      <guid isPermaLink="false">status-${Date.now()}</guid>
      <pubDate>${new Date().toUTCString()}</pubDate>
    </item>
    <item>
      <title>Alternative: Enable Test Mode</title>
      <description>To test the RSS feed functionality with working feeds, you can append ?test=true to the API endpoint, or set USE_FALLBACK_FEED to true in the configuration.</description>
      <link>/api/rss-feed?test=true</link>
      <guid isPermaLink="false">help-${Date.now()}</guid>
      <pubDate>${new Date().toUTCString()}</pubDate>
    </item>
  </channel>
</rss>`
      
      return new NextResponse(errorRss, {
        status: 200, // Return 200 to prevent client errors
        headers: {
          'Content-Type': 'application/xml; charset=utf-8',
          'Cache-Control': 'no-cache', // Don't cache error responses
          'X-RSS-Status': 'error', // Signal error state
          'X-RSS-Errors': errors.slice(0, 5).join('; ').substring(0, 500), // Include error details (truncated)
        },
      })
    } catch (rssGenerationError) {
      console.error('RSS API: Failed to generate error RSS:', rssGenerationError)
      return new NextResponse('RSS feed service unavailable', {
        status: 503,
        headers: {
          'Content-Type': 'text/plain',
          'Cache-Control': 'no-cache',
        },
      })
    }
  } catch (error) {
    console.error('RSS API: Unexpected error:', error)
    return new NextResponse('Internal server error', {
      status: 500,
      headers: {
        'Content-Type': 'text/plain',
        'Cache-Control': 'no-cache',
      },
    })
  }
}