'use client'

import { useEffect, useState } from 'react'
import { EnvelopeIcon } from '@heroicons/react/24/outline'

export default function HubSpotNewsletterSignup() {
  const [loading, setLoading] = useState(true)
  const [submitted, setSubmitted] = useState(false)

  useEffect(() => {
    // Load HubSpot script
    const script = document.createElement('script')
    script.src = '//js-eu1.hsforms.net/forms/embed/v2.js'
    script.charset = 'utf-8'
    script.type = 'text/javascript'
    script.async = true
    
    script.onload = () => {
      // Wait for HubSpot to be available
      if (window.hbspt) {
        window.hbspt.forms.create({
          portalId: "26510736",
          formId: "e92de02c-71b0-4a68-aedd-3b6acb0f5f67",
          region: "eu1",
          target: '#newsletter-form',
          onFormReady: () => {
            setLoading(false)
          },
          onFormSubmitted: () => {
            setSubmitted(true)
          }
        })
      }
    }
    
    document.body.appendChild(script)
    
    return () => {
      // Cleanup
      if (document.body.contains(script)) {
        document.body.removeChild(script)
      }
    }
  }, [])

  return (
    <div className="bg-gradient-to-r from-yellow-400 to-orange-400 rounded-2xl p-8 shadow-xl">
      <div className="flex items-center gap-3 mb-4">
        <EnvelopeIcon className="w-8 h-8 text-white" />
        <h3 className="text-2xl font-bold text-white">Blijf op de hoogte</h3>
      </div>
      
      <p className="text-white/90 mb-6">
        Ontvang maandelijks IT-tips, security updates en exclusieve aanbiedingen
      </p>
      
      <div id="newsletter-form" className="min-h-[120px]">
        {loading && (
          <div className="animate-pulse">
            <div className="h-12 bg-white/20 rounded-lg mb-3"></div>
            <div className="h-12 bg-white/30 rounded-lg w-32"></div>
          </div>
        )}
      </div>
      
      {submitted && (
        <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4 mt-4">
          <p className="text-white font-semibold">✓ Bedankt voor uw aanmelding!</p>
          <p className="text-white/90 text-sm mt-1">
            U ontvangt een bevestigingsmail in uw inbox.
          </p>
        </div>
      )}
      
      <p className="text-white/70 text-xs mt-4">
        We respecteren uw privacy. Uitschrijven kan altijd.
      </p>
    </div>
  )
}

declare global {
  interface Window {
    hbspt: any
  }
}