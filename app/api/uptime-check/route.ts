import { NextResponse } from 'next/server'

export async function GET() {
  try {
    // Simple check to see if workflo.nl is reachable
    const controller = new AbortController()
    const timeoutId = setTimeout(() => controller.abort(), 5000) // 5 second timeout

    const response = await fetch('https://workflo.nl', {
      method: 'HEAD',
      signal: controller.signal,
      cache: 'no-cache',
    })

    clearTimeout(timeoutId)

    const isUp = response.ok && response.status < 400

    return NextResponse.json({
      isUp,
      status: response.status,
      statusText: response.statusText,
      timestamp: new Date().toISOString(),
    })
  } catch (error) {
    // If we can't reach the site, assume it's down
    return NextResponse.json({
      isUp: false,
      error: error instanceof Error ? error.message : 'Unknown error',
      timestamp: new Date().toISOString(),
    })
  }
}