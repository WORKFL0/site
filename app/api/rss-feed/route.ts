import { NextResponse } from 'next/server'

export const dynamic = 'force-dynamic' // Disable static generation for this route

// Configuration for RSS feeds
const RSS_CONFIG = {
  // Use environment variable or default to false
  USE_FALLBACK_FEED: process.env.RSS_USE_FALLBACK === 'true',
  
  // Primary WorkFlo RSS URLs to try
  PRIMARY_FEEDS: [
    // Use environment variable if set, otherwise use defaults
    process.env.RSS_PRIMARY_FEED || 'https://rss.workflo.it/i/?a=rss&get=c_4&rid=6893c5809212b&hours=168',
    'https://rss.workflo.it/i/?a=rss&get=c_4',
    'https://rss.workflo.it/api/greader.php/reader/api/0/stream/contents/feed/4',
  ].filter(Boolean), // Remove any undefined values
  
  // Fallback feeds (working tech news feeds for testing)
  FALLBACK_FEEDS: process.env.RSS_FALLBACK_FEEDS 
    ? process.env.RSS_FALLBACK_FEEDS.split(',').map(url => url.trim())
    : [
        'https://hnrss.org/frontpage', // Hacker News RSS
        'https://feeds.feedburner.com/TechCrunch/', // TechCrunch
        'https://www.wired.com/feed/rss', // Wired
      ]
}

async function tryFetchRSS(url: string): Promise<{ success: boolean; content?: string; error?: string }> {
  try {
    console.log('Attempting to fetch RSS feed from:', url)
    
    const controller = new AbortController()
    const timeoutId = setTimeout(() => controller.abort(), 8000) // 8 second timeout
    
    const response = await fetch(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (compatible; RSS Reader/1.0)',
        'Accept': 'application/rss+xml, application/xml, text/xml, application/atom+xml, text/html, */*',
      },
      cache: 'no-store',
      redirect: 'follow',
      signal: controller.signal
    })
    
    clearTimeout(timeoutId)

    console.log(`Response status for ${url}:`, response.status)

    if (!response.ok) {
      return { 
        success: false, 
        error: `HTTP ${response.status}: ${response.statusText}` 
      }
    }

    const content = await response.text()
    
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
    if (error.name === 'AbortError') {
      return { 
        success: false, 
        error: 'Request timeout (8 seconds)' 
      }
    }
    console.error(`Error fetching RSS from ${url}:`, error)
    return { 
      success: false, 
      error: error.message || 'Unknown error' 
    }
  }
}

export async function GET(request: Request) {
  // Check for a specific feed parameter in the URL
  const { searchParams } = new URL(request.url)
  const feedParam = searchParams.get('feed')
  const testMode = searchParams.get('test') === 'true'
  
  // Determine which feeds to try
  let feedsToTry: string[] = []
  
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
  
  console.log('RSS Feed URLs to try:', feedsToTry)
  
  // Try each RSS URL in order until one succeeds
  for (const url of feedsToTry) {
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
      console.warn(`Failed to fetch from ${url}: ${result.error}`)
    }
  }

  // All URLs failed - provide informative error RSS
  console.error('All RSS feed URLs failed.')
  
  const errorMessage = testMode 
    ? 'Test feeds are currently unavailable. Please check your internet connection.'
    : 'The WorkFlo RSS feed service is currently unavailable. This could be due to server maintenance or configuration issues.'
  
  // Return a valid RSS feed with helpful error information
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
      <description>${errorMessage} The feed URLs have been configured but are not responding. Please verify the RSS feed URL with your provider or try again later.</description>
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
    },
  })
}