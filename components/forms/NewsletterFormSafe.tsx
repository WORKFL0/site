'use client'

import { useState, useEffect } from 'react'

export default function NewsletterFormSafe() {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    // Load HubSpot script
    const script = document.createElement('script')
    script.src = '//js-eu1.hsforms.net/forms/embed/v2.js'
    script.charset = 'utf-8'
    script.type = 'text/javascript'
    script.async = true
    script.defer = true
    
    script.onload = () => {
      // Create form when script is loaded
      if (window.hbspt) {
        window.hbspt.forms.create({
          region: "eu1",
          portalId: "26510736",
          formId: "e92de02c-71b0-4a68-aedd-3b6acb0f5f67",
          target: '#newsletter-form-container',
          onFormSubmitted: () => {
            setIsSubmitted(true)
            setTimeout(() => setIsSubmitted(false), 5000)
          }
        })
      }
      setIsLoaded(true)
    }
    
    document.body.appendChild(script)
    
    return () => {
      // Cleanup
      if (document.body.contains(script)) {
        document.body.removeChild(script)
      }
    }
  }, [])

  if (isSubmitted) {
    return (
      <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center">
        <div className="text-green-600 mb-2">
          <svg className="w-12 h-12 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
        <h3 className="text-lg font-semibold text-green-800 mb-1">
          Succesvol Aangemeld!
        </h3>
        <p className="text-green-700">
          Bedankt voor uw aanmelding voor onze nieuwsbrief.
        </p>
      </div>
    )
  }

  return (
    <div className="bg-white rounded-lg p-6">
      <h3 className="text-xl font-bold text-gray-900 mb-3">
        Blijf Op De Hoogte
      </h3>
      <p className="text-gray-600 mb-4">
        Ontvang de laatste IT-inzichten en beveiligingsupdates in uw inbox.
      </p>
      
      <div id="newsletter-form-container">
        {!isLoaded && (
          <div className="text-gray-500 text-sm">
            Formulier wordt geladen...
          </div>
        )}
      </div>
    </div>
  )
}

// Add TypeScript declaration for HubSpot
declare global {
  interface Window {
    hbspt: any
  }
}