import { NextResponse } from 'next/server'

export async function GET() {
  try {
    // Check the uptime status page for service status
    const controller = new AbortController()
    const timeoutId = setTimeout(() => controller.abort(), 10000) // 10 second timeout

    const response = await fetch('https://uptime.workflo.it/status/workflo', {
      method: 'GET',
      signal: controller.signal,
      cache: 'no-cache',
      headers: {
        'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
        'User-Agent': 'Workflo-Status-Check/1.0'
      }
    })

    clearTimeout(timeoutId)

    if (!response.ok) {
      throw new Error(`HTTP ${response.status}: ${response.statusText}`)
    }

    const html = await response.text()
    
    // Simple check for operational status indicators in the HTML
    // Looking for common uptime monitor indicators without parsing complex HTML
    const isOperational = 
      html.includes('operational') ||
      html.includes('all systems') ||
      html.includes('green') ||
      (!html.includes('down') && !html.includes('offline') && !html.includes('incident'))

    return NextResponse.json({
      isUp: isOperational,
      status: response.status,
      timestamp: new Date().toISOString(),
    })
  } catch (error) {
    // If we can't reach the uptime page, fallback to checking main site
    try {
      const fallbackResponse = await fetch('https://workflo.nl', {
        method: 'HEAD',
        cache: 'no-cache',
      })
      
      return NextResponse.json({
        isUp: fallbackResponse.ok,
        status: fallbackResponse.status,
        timestamp: new Date().toISOString(),
        fallback: true,
      })
    } catch (fallbackError) {
      return NextResponse.json({
        isUp: false,
        error: error instanceof Error ? error.message : 'Unknown error',
        timestamp: new Date().toISOString(),
      })
    }
  }
}