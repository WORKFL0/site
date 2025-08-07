'use client'

import { useEffect, useState } from 'react'

declare global {
  interface Window {
    hbspt: any
  }
}

interface HubSpotContactFormProps {
  formId?: string
  portalId?: string
  region?: string
}

export default function HubSpotContactForm({ 
  formId = "acf3fe0b-c542-4fc2-aa14-f3cb2fc356c0", // From the share link
  portalId = "26510736",
  region = "eu1"
}: HubSpotContactFormProps) {
  const [isLoaded, setIsLoaded] = useState(false)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    // Create unique container ID
    const containerId = `hubspot-form-${formId}-${Date.now()}`
    
    // Load HubSpot script
    const loadScript = () => {
      // Check if script already exists
      const existingScript = document.querySelector('script[src*="hsforms.net"]')
      
      if (existingScript) {
        // Script already loaded, try to create form
        createForm()
        return
      }

      const script = document.createElement('script')
      script.src = '//js-eu1.hsforms.net/forms/embed/v2.js'
      script.charset = 'utf-8'
      script.type = 'text/javascript'
      script.async = true
      script.defer = true
      
      script.onload = () => {
        createForm()
      }
      
      script.onerror = () => {
        setError('Failed to load HubSpot form script')
        setIsLoaded(true)
      }
      
      document.body.appendChild(script)
    }

    const createForm = () => {
      // Wait for HubSpot API to be available
      let attempts = 0
      const maxAttempts = 10
      
      const tryCreateForm = () => {
        if (window.hbspt && window.hbspt.forms) {
          try {
            window.hbspt.forms.create({
              region: region,
              portalId: portalId,
              formId: formId,
              target: `#${containerId}`,
              onFormReady: () => {
                console.log('HubSpot form loaded successfully')
                setIsLoaded(true)
              },
              onFormSubmit: () => {
                console.log('HubSpot form submitted')
              },
              onFormSubmitSuccess: () => {
                console.log('HubSpot form submission successful')
              }
            })
          } catch (err) {
            console.error('Error creating HubSpot form:', err)
            setError('Failed to create HubSpot form')
            setIsLoaded(true)
          }
        } else if (attempts < maxAttempts) {
          attempts++
          setTimeout(tryCreateForm, 500)
        } else {
          setError('HubSpot API not available')
          setIsLoaded(true)
        }
      }
      
      tryCreateForm()
    }

    // Set container ID on the div
    const container = document.getElementById('hubspot-contact-form-container')
    if (container) {
      container.id = containerId
    }

    // Load the script
    loadScript()

    return () => {
      // Cleanup is handled by React
    }
  }, [formId, portalId, region])

  return (
    <div className="bg-white rounded-2xl p-8 shadow-lg">
      <h3 className="text-2xl font-bold text-gray-900 mb-4">
        Neem Contact Op
      </h3>
      <p className="text-gray-700 mb-6 leading-relaxed">
        Klaar om uw IT-uitdagingen aan te pakken? Laat uw gegevens achter en we nemen binnen 24 uur contact op.
      </p>
      
      <div id="hubspot-contact-form-container">
        {!isLoaded && !error && (
          <div className="flex items-center justify-center py-8">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary-600 mr-3"></div>
            <span className="text-gray-600">Formulier laden...</span>
          </div>
        )}
        {error && (
          <div className="bg-red-50 border border-red-200 rounded-lg p-4">
            <p className="text-red-600 text-sm">{error}</p>
            <p className="text-gray-600 text-sm mt-2">
              Probeer de pagina te vernieuwen of neem contact op via{' '}
              <a href="mailto:info@workflo.nl" className="text-primary-600 hover:underline">
                info@workflo.nl
              </a>
            </p>
          </div>
        )}
      </div>
    </div>
  )
}