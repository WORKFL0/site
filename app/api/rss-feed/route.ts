import { NextResponse } from 'next/server'

export const dynamic = 'force-dynamic' // Disable static generation for this route

export async function GET() {
  try {
    // The RSS feed URL provided by the client
    const rssUrl = 'https://rss.workflo.it/i/?a=rss&get=c_4&rid=6893c5809212b&hours=168'
    
    // Fetch the RSS feed directly from the server (no CORS issues)
    const response = await fetch(rssUrl, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36',
        'Accept': 'application/rss+xml, application/xml, text/xml, text/html, */*',
        'Referer': 'https://rss.workflo.it/'
      },
      cache: 'no-store', // Disable caching during fetch
      redirect: 'follow' // Follow redirects
    })

    if (!response.ok) {
      throw new Error(`RSS feed returned status: ${response.status}`)
    }

    const content = await response.text()
    
    // Log the first 500 characters for debugging
    console.log('RSS Feed Response (first 500 chars):', content.substring(0, 500))
    console.log('Response headers:', response.headers)

    // Check if we got actual RSS content
    if (!content || content.trim().length === 0) {
      throw new Error('RSS feed returned empty content')
    }

    // The feed might return HTML with embedded RSS or pure RSS
    // Return the content as-is and let the client parse it
    return new NextResponse(content, {
      status: 200,
      headers: {
        'Content-Type': 'application/xml; charset=utf-8',
        'Cache-Control': 'public, s-maxage=300, stale-while-revalidate=600',
      },
    })
  } catch (error) {
    console.error('Error fetching RSS feed:', error)
    
    // Return empty RSS feed on error to prevent build failures
    const emptyRss = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0">
  <channel>
    <title>RSS Feed</title>
    <description>RSS Feed</description>
    <link>https://rss.workflo.it</link>
  </channel>
</rss>`
    
    return new NextResponse(emptyRss, {
      status: 200,
      headers: {
        'Content-Type': 'application/xml; charset=utf-8',
      },
    })
  }
}