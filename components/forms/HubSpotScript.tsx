'use client'

import { useEffect } from 'react'

export default function HubSpotScript() {
  useEffect(() => {
    // Check if HubSpot script is already loaded
    if (window.hbspt) return

    // Create and append HubSpot script
    const script = document.createElement('script')
    script.src = '//js-eu1.hsforms.net/forms/embed/v2.js'
    script.charset = 'utf-8'
    script.type = 'text/javascript'
    script.async = true
    script.defer = true

    script.onload = () => {
      console.log('HubSpot script loaded successfully')
      
      // Dispatch custom event when HubSpot is ready
      window.dispatchEvent(new Event('hubspot-ready'))
    }

    script.onerror = () => {
      console.error('Failed to load HubSpot script')
    }

    document.head.appendChild(script)

    return () => {
      // Cleanup if needed
      if (script.parentNode) {
        script.parentNode.removeChild(script)
      }
    }
  }, [])

  return null
}

