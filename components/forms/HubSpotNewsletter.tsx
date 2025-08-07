'use client'

import { useEffect, useState } from 'react'
import Script from 'next/script'

interface HubSpotNewsletterProps {
  className?: string
  title?: string
  description?: string
}

export default function HubSpotNewsletter({ 
  className = '',
  title = 'Blijf op de hoogte',
  description = 'Ontvang het laatste nieuws en tips direct in uw inbox'
}: HubSpotNewsletterProps) {
  const [isLoaded, setIsLoaded] = useState(false)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    // Check if HubSpot script is already loaded
    if ((window as any).hbspt) {
      try {
        (window as any).hbspt.forms.create({
          portalId: "26510736",
          formId: "e92de02c-71b0-4a68-aedd-3b6acb0f5f67",
          region: "eu1",
          target: '#hubspot-newsletter-form',
          onFormReady: () => {
            console.log('HubSpot newsletter form ready')
            setIsLoaded(true)
          },
          onFormSubmit: () => {
            console.log('Newsletter form submitted')
          },
          onFormSubmitted: () => {
            console.log('Newsletter subscription successful')
          }
        })
      } catch (err) {
        console.error('Error creating HubSpot newsletter form:', err)
        setError('Could not load newsletter form')
      }
    }
  }, [])

  const handleScriptLoad = () => {
    try {
      if ((window as any).hbspt) {
        (window as any).hbspt.forms.create({
          portalId: "26510736",
          formId: "e92de02c-71b0-4a68-aedd-3b6acb0f5f67",
          region: "eu1",
          target: '#hubspot-newsletter-form',
          onFormReady: () => {
            console.log('HubSpot newsletter form ready')
            setIsLoaded(true)
          },
          onFormSubmit: () => {
            console.log('Newsletter form submitted')
          },
          onFormSubmitted: () => {
            console.log('Newsletter subscription successful')
          }
        })
      }
    } catch (err) {
      console.error('Error loading HubSpot newsletter form:', err)
      setError('Could not load newsletter form')
    }
  }

  return (
    <div className={`hubspot-newsletter-container ${className}`}>
      <Script
        src="//js-eu1.hsforms.net/forms/embed/v2.js"
        strategy="lazyOnload"
        onLoad={handleScriptLoad}
        onError={() => setError('Failed to load form script')}
      />
      
      <div className="bg-primary-50 rounded-2xl p-8">
        <div className="max-w-2xl mx-auto text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-3">{title}</h3>
          <p className="text-gray-600 mb-6">{description}</p>
          
          <div id="hubspot-newsletter-form" className="newsletter-form-container">
            {!isLoaded && !error && (
              <div className="animate-pulse">
                <div className="h-12 bg-gray-200 rounded mb-4"></div>
                <div className="h-12 bg-primary-200 rounded"></div>
              </div>
            )}
            {error && (
              <div className="text-red-600 p-4 bg-red-50 rounded-lg">
                {error}
              </div>
            )}
          </div>
        </div>
      </div>

      <style jsx>{`
        .newsletter-form-container :global(.hs-form) {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }
        
        .newsletter-form-container :global(.hs-form-field) {
          margin: 0;
        }
        
        .newsletter-form-container :global(.hs-input) {
          width: 100%;
          padding: 0.75rem 1rem;
          border: 1px solid #e5e7eb;
          border-radius: 0.5rem;
          font-size: 1rem;
          transition: all 0.2s;
        }
        
        .newsletter-form-container :global(.hs-input:focus) {
          outline: none;
          border-color: #f2f400;
          box-shadow: 0 0 0 3px rgba(242, 244, 0, 0.1);
        }
        
        .newsletter-form-container :global(.hs-button) {
          background: #f2f400;
          color: black;
          padding: 0.75rem 2rem;
          border: none;
          border-radius: 0.5rem;
          font-weight: bold;
          font-size: 1rem;
          cursor: pointer;
          transition: all 0.2s;
        }
        
        .newsletter-form-container :global(.hs-button:hover) {
          background: #d9db00;
          transform: translateY(-1px);
          box-shadow: 0 4px 12px rgba(0,0,0,0.15);
        }
        
        .newsletter-form-container :global(.hs-error-msgs) {
          color: #ef4444;
          font-size: 0.875rem;
          margin-top: 0.25rem;
        }
        
        .newsletter-form-container :global(.submitted-message) {
          background: #10b981;
          color: white;
          padding: 1rem;
          border-radius: 0.5rem;
          font-weight: 500;
        }
      `}</style>
    </div>
  )
}