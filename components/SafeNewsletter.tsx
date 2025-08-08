'use client'

import { useState, useEffect } from 'react'

export default function SafeNewsletter() {
  const [mounted, setMounted] = useState(false)
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (!mounted) return

    // Check if already loaded
    if (window.hbspt) {
      window.hbspt.forms.create({
        region: "eu1",
        portalId: "26510736",
        formId: "e92de02c-71b0-4a68-aedd-3b6acb0f5f67",
        target: '#newsletter-form-container'
      })
      setIsLoaded(true)
      return
    }

    const script = document.createElement('script')
    script.src = '//js-eu1.hsforms.net/forms/embed/v2.js'
    script.charset = 'utf-8'
    script.type = 'text/javascript'
    script.async = true
    
    script.onload = () => {
      if (window.hbspt) {
        window.hbspt.forms.create({
          region: "eu1",
          portalId: "26510736",
          formId: "e92de02c-71b0-4a68-aedd-3b6acb0f5f67",
          target: '#newsletter-form-container'
        })
        setIsLoaded(true)
      }
    }
    
    document.body.appendChild(script)
  }, [mounted])

  if (!mounted) {
    return (
      <div className="bg-yellow-50 rounded-2xl p-8">
        <h3 className="text-2xl font-bold text-gray-900 mb-4">Blijf Op De Hoogte</h3>
        <div className="h-32 bg-yellow-100 animate-pulse rounded"></div>
      </div>
    )
  }

  return (
    <div className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-2xl p-8 shadow-xl border border-yellow-200">
      <div className="text-center mb-6">
        <h3 className="text-2xl font-bold text-gray-900 mb-2">
          📧 Blijf Op De Hoogte
        </h3>
        <p className="text-gray-600">
          Ontvang maandelijks IT-tips, security updates en Workflo nieuws
        </p>
      </div>
      
      <div id="newsletter-form-container" className="min-h-[150px]">
        {!isLoaded && (
          <div className="text-center py-8">
            <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-yellow-400"></div>
            <p className="mt-4 text-gray-600">Nieuwsbrief formulier laden...</p>
          </div>
        )}
      </div>
      
      <div className="text-center mt-4 text-xs text-gray-500">
        We respecteren uw privacy. Uitschrijven kan altijd.
      </div>
    </div>
  )
}

declare global {
  interface Window {
    hbspt: any
  }
}