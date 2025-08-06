import { NextResponse } from 'next/server'

export async function GET() {
  let timeoutId: NodeJS.Timeout | null = null
  let controller: AbortController | null = null
  
  try {
    // Check the uptime status page for service status
    controller = new AbortController()
    timeoutId = setTimeout(() => {
      if (controller) {
        controller.abort()
      }
    }, 10000) // 10 second timeout

    let response: Response
    
    try {
      response = await fetch('https://uptime.workflo.it/status/workflo', {
        method: 'GET',
        signal: controller.signal,
        cache: 'no-cache',
        headers: {
          'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
          'User-Agent': 'Workflo-Status-Check/1.0'
        }
      })
    } catch (fetchError) {
      if (timeoutId) clearTimeout(timeoutId)
      throw fetchError
    }

    if (timeoutId) clearTimeout(timeoutId)

    if (!response) {
      throw new Error('No response received from uptime service')
    }

    if (!response.ok) {
      throw new Error(`HTTP ${response.status}: ${response.statusText || 'Unknown error'}`)
    }

    let html: string
    try {
      html = await response.text()
    } catch (textError) {
      throw new Error('Failed to read response from uptime service')
    }
    
    if (!html || typeof html !== 'string') {
      throw new Error('Invalid response content from uptime service')
    }
    
    // Simple check for operational status indicators in the HTML
    // Looking for common uptime monitor indicators without parsing complex HTML
    const lowerHtml = html.toLowerCase()
    const isOperational = 
      lowerHtml.includes('operational') ||
      lowerHtml.includes('all systems') ||
      lowerHtml.includes('green') ||
      (!lowerHtml.includes('down') && !lowerHtml.includes('offline') && !lowerHtml.includes('incident'))

    return NextResponse.json({
      isUp: isOperational,
      status: response.status,
      timestamp: new Date().toISOString(),
    })
  } catch (error) {
    if (timeoutId) clearTimeout(timeoutId)
    
    console.warn('Uptime check failed, trying fallback:', error instanceof Error ? error.message : 'Unknown error')
    
    // If we can't reach the uptime page, fallback to checking main site
    let fallbackTimeoutId: NodeJS.Timeout | null = null
    let fallbackController: AbortController | null = null
    
    try {
      fallbackController = new AbortController()
      fallbackTimeoutId = setTimeout(() => {
        if (fallbackController) {
          fallbackController.abort()
        }
      }, 5000) // 5 second timeout for fallback
      
      const fallbackResponse = await fetch('https://workflo.nl', {
        method: 'HEAD',
        cache: 'no-cache',
        signal: fallbackController.signal,
      })
      
      if (fallbackTimeoutId) clearTimeout(fallbackTimeoutId)
      
      return NextResponse.json({
        isUp: fallbackResponse?.ok || false,
        status: fallbackResponse?.status || 0,
        timestamp: new Date().toISOString(),
        fallback: true,
      })
    } catch (fallbackError) {
      if (fallbackTimeoutId) clearTimeout(fallbackTimeoutId)
      
      console.error('Both uptime check and fallback failed:', {
        original: error instanceof Error ? error.message : 'Unknown error',
        fallback: fallbackError instanceof Error ? fallbackError.message : 'Unknown fallback error'
      })
      
      return NextResponse.json({
        isUp: false,
        error: error instanceof Error ? error.message : 'Unknown error',
        fallbackError: fallbackError instanceof Error ? fallbackError.message : 'Unknown fallback error',
        timestamp: new Date().toISOString(),
      }, {
        status: 503 // Service unavailable
      })
    }
  }
}