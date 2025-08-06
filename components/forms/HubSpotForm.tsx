'use client'

import { useEffect, useState } from 'react'

interface HubSpotFormProps {
  region?: string
  portalId: string
  formId: string
  className?: string
  onFormReady?: () => void
  onFormSubmit?: () => void
  onFormSubmitted?: () => void
}

declare global {
  interface Window {
    hbspt: any
  }
}

export default function HubSpotForm({
  region = 'eu1',
  portalId,
  formId,
  className = '',
  onFormReady,
  onFormSubmit,
  onFormSubmitted
}: HubSpotFormProps) {
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const containerId = `hubspot-form-${formId}`

  useEffect(() => {
    // Only run on client side
    if (typeof window === 'undefined') return
    
    let mounted = true
    let retryCount = 0
    const maxRetries = 3
    let retryTimeout: NodeJS.Timeout

    const createForm = () => {
      if (!mounted) return false

      const container = document.getElementById(containerId)
      if (!container) {
        console.error('HubSpot form container not found')
        return false
      }

      if (!window.hbspt || !window.hbspt.forms) {
        console.error('HubSpot forms API not available')
        return false
      }

      try {
        // Clear loading state
        container.innerHTML = ''
        
        console.log(`Creating HubSpot form with Portal: ${portalId}, Form: ${formId}, Region: ${region}`)
        
        window.hbspt.forms.create({
          region,
          portalId,
          formId,
          target: `#${containerId}`,
          css: '',  // Disable default HubSpot styles to use our custom ones
          onFormReady: (form: any) => {
            console.log(`HubSpot form ${formId} ready`)
            if (mounted) {
              setLoading(false)
              setError(null)
              onFormReady?.()
              
              // Add custom styles
              addCustomStyles()
            }
          },
          onFormSubmit: (form: any) => {
            console.log(`HubSpot form ${formId} submitted`)
            onFormSubmit?.()
          },
          onFormSubmitted: (form: any) => {
            console.log(`HubSpot form ${formId} submission completed`)
            onFormSubmitted?.()
          }
        })
        
        return true
      } catch (err) {
        console.error('Error creating HubSpot form:', err)
        if (mounted) {
          setError('Failed to create form')
        }
        return false
      }
    }

    const addCustomStyles = () => {
      const styleId = `hubspot-styles-${formId}`
      if (!document.getElementById(styleId)) {
        const style = document.createElement('style')
        style.id = styleId
        style.textContent = `
          #${containerId} .hs-form-field label {
            font-size: 0.875rem;
            font-weight: 500;
            color: #374151;
            margin-bottom: 0.5rem;
            display: block;
          }
          #${containerId} .hs-input {
            width: 100%;
            padding: 0.75rem 1rem;
            border: 1px solid #d1d5db;
            border-radius: 0.5rem;
            transition: all 0.2s;
            font-size: 1rem;
          }
          #${containerId} .hs-input:focus {
            outline: none;
            border-color: #f16e13;
            box-shadow: 0 0 0 3px rgba(241, 110, 19, 0.1);
          }
          #${containerId} .hs-form-field {
            margin-bottom: 1.5rem;
          }
          #${containerId} .hs-button {
            width: 100%;
            padding: 0.875rem 1.5rem;
            background-color: #f16e13;
            color: white;
            border: none;
            border-radius: 0.5rem;
            font-size: 1.125rem;
            font-weight: 500;
            cursor: pointer;
            transition: background-color 0.2s;
          }
          #${containerId} .hs-button:hover {
            background-color: #e54f0d;
          }
          #${containerId} .hs-error-msgs {
            margin-top: 0.5rem;
            color: #dc2626;
            font-size: 0.875rem;
          }
          #${containerId} .submitted-message {
            padding: 1rem;
            background-color: #d1fae5;
            border: 1px solid #6ee7b7;
            border-radius: 0.5rem;
            color: #065f46;
          }
        `
        document.head.appendChild(style)
      }
    }

    const loadScript = () => {
      // Check if script already exists
      const existingScript = document.querySelector('script[src*="hsforms.net"]')
      
      if (existingScript) {
        // Script exists, wait for HubSpot to be ready
        const checkHubSpot = () => {
          if (window.hbspt && window.hbspt.forms) {
            createForm()
          } else if (retryCount < maxRetries && mounted) {
            retryCount++
            retryTimeout = setTimeout(checkHubSpot, 1000)
          } else if (mounted) {
            setError('HubSpot API not available')
            setLoading(false)
          }
        }
        checkHubSpot()
        return
      }

      // Load the script with defer attribute as in the client's working site
      const script = document.createElement('script')
      script.src = `https://js-${region}.hsforms.net/forms/embed/v2.js`
      script.defer = true
      script.charset = 'utf-8'
      script.type = 'text/javascript'
      script.id = 'hs-script-loader'
      
      script.onload = () => {
        if (!mounted) return
        
        const waitForHubSpot = () => {
          if (window.hbspt && window.hbspt.forms) {
            const success = createForm()
            if (!success && retryCount < maxRetries && mounted) {
              retryCount++
              retryTimeout = setTimeout(waitForHubSpot, 1000)
            } else if (!success && mounted) {
              setError('Failed to create form after retries')
              setLoading(false)
            }
          } else if (retryCount < maxRetries && mounted) {
            retryCount++
            retryTimeout = setTimeout(waitForHubSpot, 1000)
          } else if (mounted) {
            setError('HubSpot API not loaded')
            setLoading(false)
          }
        }
        
        setTimeout(waitForHubSpot, 100)
      }
      
      script.onerror = () => {
        if (mounted) {
          setError('Failed to load HubSpot script')
          setLoading(false)
        }
      }
      
      document.body.appendChild(script)
    }

    // Start loading process
    const initTimeout = setTimeout(loadScript, 100)

    return () => {
      mounted = false
      clearTimeout(initTimeout)
      clearTimeout(retryTimeout)
      
      // Clean up styles
      const style = document.getElementById(`hubspot-styles-${formId}`)
      if (style) {
        style.remove()
      }
    }
  }, [region, portalId, formId, containerId, onFormReady, onFormSubmit, onFormSubmitted])

  return (
    <div className={className}>
      <div id={containerId} className="min-h-[400px]">
        {loading && (
          <div className="animate-pulse">
            <div className="h-10 bg-gray-200 rounded mb-4"></div>
            <div className="h-10 bg-gray-200 rounded mb-4"></div>
            <div className="h-10 bg-gray-200 rounded mb-4"></div>
            <div className="h-20 bg-gray-200 rounded mb-4"></div>
            <div className="h-12 bg-gray-300 rounded w-32"></div>
          </div>
        )}
        
        {error && (
          <div className="bg-red-50 border border-red-200 rounded-lg p-4">
            <p className="text-red-600 mb-3">Het contactformulier kon niet worden geladen.</p>
            <p className="text-sm text-gray-600 mb-3">U kunt ons bereiken via:</p>
            <a href="tel:0203080465" className="block text-primary-600 hover:underline mb-2">
              Tel: 020-30 80 465
            </a>
            <a href="mailto:info@workflo.nl" className="block text-primary-600 hover:underline">
              Email: info@workflo.nl
            </a>
            <details className="mt-4">
              <summary className="text-xs text-gray-500 cursor-pointer">Technische details</summary>
              <p className="text-xs text-gray-500 mt-2">{error}</p>
              <p className="text-xs text-gray-500 mt-1">Portal: {portalId} | Form: {formId}</p>
            </details>
          </div>
        )}
      </div>
    </div>
  )
}