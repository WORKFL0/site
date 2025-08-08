'use client'

import { useState, useEffect } from 'react'

export default function SafeHubSpotForm() {
  const [isLoaded, setIsLoaded] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (!mounted) return

    // Ensure we only load once
    if (window.hbspt) {
      window.hbspt.forms.create({
        region: "eu1",
        portalId: "26510736",
        formId: "acf3fe0b-c542-4fc2-aa14-f3cb2fc356c0",
        target: '#hubspot-form-container'
      })
      setIsLoaded(true)
      return
    }

    const script = document.createElement('script')
    script.src = '//js-eu1.hsforms.net/forms/embed/v2.js'
    script.charset = 'utf-8'
    script.type = 'text/javascript'
    script.async = true
    script.defer = true
    
    script.onload = () => {
      if (window.hbspt) {
        window.hbspt.forms.create({
          region: "eu1",
          portalId: "26510736",
          formId: "acf3fe0b-c542-4fc2-aa14-f3cb2fc356c0",
          target: '#hubspot-form-container'
        })
        setIsLoaded(true)
      }
    }
    
    document.body.appendChild(script)
    
    return () => {
      // Don't remove script as it might be used by other components
    }
  }, [mounted])

  if (!mounted) {
    return (
      <div className="bg-white rounded-2xl p-8 shadow-lg">
        <h3 className="text-2xl font-bold text-gray-900 mb-4">Contact Formulier</h3>
        <div className="h-64 bg-gray-100 animate-pulse rounded"></div>
      </div>
    )
  }

  return (
    <div className="bg-white rounded-2xl p-8 shadow-lg">
      <h3 className="text-2xl font-bold text-gray-900 mb-4">
        Direct Contact
      </h3>
      <p className="text-gray-600 mb-6">
        Vul het formulier in of bel ons direct op 020-30 80 465
      </p>
      <div id="hubspot-form-container">
        {!isLoaded && (
          <div className="text-center py-8">
            <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-yellow-400"></div>
            <p className="mt-4 text-gray-600">Formulier wordt geladen...</p>
          </div>
        )}
      </div>
    </div>
  )
}

// Declare global window property
declare global {
  interface Window {
    hbspt: any
  }
}