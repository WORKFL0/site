'use client'

import { useEffect } from 'react'

export default function HubSpotScript() {
  useEffect(() => {
    // Only run on client side
    if (typeof window === 'undefined') return
    
    try {
      // Check if HubSpot script is already loaded
      if ((window as any).hbspt) return

      // Create and append HubSpot scripts as per old site
      const scripts = [
        {
          src: 'https://js-eu1.hsforms.net/forms/embed/v2.js',
          id: 'leadin-forms-v2-js'
        },
        {
          src: 'https://js-eu1.hsforms.net/forms/embed/26510736.js',
          id: 'leadin-forms-v4-js'
        }
      ]

      let loadedCount = 0
      const totalScripts = scripts.length

      scripts.forEach((scriptConfig) => {
        const script = document.createElement('script')
        script.src = scriptConfig.src
        script.id = scriptConfig.id
        script.charset = 'utf-8'
        script.type = 'text/javascript'
        script.defer = true

        script.onload = () => {
          loadedCount++
          console.log(`HubSpot script loaded: ${scriptConfig.id}`)
          
          // Dispatch custom event when all scripts are ready
          if (loadedCount === totalScripts) {
            window.dispatchEvent(new Event('hubspot-ready'))
          }
        }

        script.onerror = () => {
          console.error(`Failed to load HubSpot script: ${scriptConfig.id}`, script.src)
        }

        document.head.appendChild(script)
      })

      return () => {
        // Cleanup if needed
        scripts.forEach((scriptConfig) => {
          const script = document.getElementById(scriptConfig.id)
          if (script && script.parentNode) {
            try {
              script.parentNode.removeChild(script)
            } catch (e) {
              // Ignore cleanup errors
            }
          }
        })
      }
    } catch (error) {
      console.error('HubSpotScript initialization error:', error)
    }
  }, [])

  return null
}

