'use client'

import { useEffect } from 'react'
import { errorLogger } from '@/lib/error-logger'

export default function HubSpotScript() {
  useEffect(() => {
    // Only run on client side
    if (typeof window === 'undefined') return
    
    try {
      // Check if HubSpot script is already loaded
      if ((window as any).hbspt) return

      // Create and append HubSpot script
      const script = document.createElement('script')
      script.src = '//js-eu1.hsforms.net/forms/embed/v2.js'
      script.charset = 'utf-8'
      script.type = 'text/javascript'
      script.async = true
      script.defer = true

      script.onload = () => {
        errorLogger.logInfo('HubSpot script loaded successfully', 'HubSpotScript')
        
        // Dispatch custom event when HubSpot is ready
        window.dispatchEvent(new Event('hubspot-ready'))
      }

      script.onerror = () => {
        errorLogger.logError(
          new Error('Failed to load HubSpot script'),
          'HubSpotScript',
          { src: script.src }
        )
      }

      document.head.appendChild(script)

      return () => {
        // Cleanup if needed
        if (script.parentNode) {
          try {
            script.parentNode.removeChild(script)
          } catch (e) {
            // Ignore cleanup errors
          }
        }
      }
    } catch (error) {
      errorLogger.logError(
        error as Error,
        'HubSpotScript',
        { context: 'initialization' }
      )
    }
  }, [])

  return null
}

