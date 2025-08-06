'use client'

import { useEffect, useState } from 'react'

declare global {
  interface Window {
    hbspt: any
  }
}

export default function HubSpotDiagnosticPage() {
  const [diagnostics, setDiagnostics] = useState({
    scriptLoaded: false,
    formsApiAvailable: false,
    networkRequests: [] as string[],
    consoleErrors: [] as string[],
    formCreated: false
  })

  useEffect(() => {
    // Override console.error to capture HubSpot errors
    const originalConsoleError = console.error
    console.error = (...args) => {
      const errorMessage = args.join(' ')
      if (errorMessage.toLowerCase().includes('hubspot')) {
        setDiagnostics(prev => ({
          ...prev,
          consoleErrors: [...prev.consoleErrors, errorMessage]
        }))
      }
      originalConsoleError(...args)
    }

    // Check if HubSpot script is already loaded
    const checkHubSpot = () => {
      const scriptExists = document.querySelector('script[src*="hsforms.net"]')
      const hbsptAvailable = typeof window.hbspt !== 'undefined'
      const formsAvailable = hbsptAvailable && typeof window.hbspt.forms !== 'undefined'
      
      setDiagnostics(prev => ({
        ...prev,
        scriptLoaded: !!scriptExists,
        formsApiAvailable: formsAvailable
      }))

      if (formsAvailable) {
        // Try to create a test form
        try {
          window.hbspt.forms.create({
            region: 'eu1',
            portalId: '26510736',
            formId: 'e92de02c-71b0-4a68-aedd-3b6acb0f5f67',
            target: '#test-form-container',
            onFormReady: () => {
              setDiagnostics(prev => ({
                ...prev,
                formCreated: true
              }))
            }
          })
        } catch (error) {
          console.error('Failed to create HubSpot form:', error)
        }
      } else {
        // Load HubSpot script if not available
        const script = document.createElement('script')
        script.src = 'https://js-eu1.hsforms.net/forms/embed/v2.js'
        script.defer = true
        script.onload = () => {
          setTimeout(() => {
            checkHubSpot()
          }, 100)
        }
        document.body.appendChild(script)
      }
    }

    // Monitor network requests
    const originalFetch = window.fetch
    window.fetch = (...args) => {
      const url = args[0]?.toString() || ''
      if (url.includes('hsforms.net') || url.includes('hubspot')) {
        setDiagnostics(prev => ({
          ...prev,
          networkRequests: [...prev.networkRequests, `FETCH: ${url}`]
        }))
      }
      return originalFetch(...args)
    }

    checkHubSpot()

    return () => {
      console.error = originalConsoleError
      window.fetch = originalFetch
    }
  }, [])

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-3xl font-bold text-gray-900 mb-8 text-center">
          HubSpot Integration Diagnostic
        </h1>
        
        <div className="grid gap-6">
          {/* Status Overview */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold mb-4">Status Overview</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className={`p-3 rounded-lg text-center ${diagnostics.scriptLoaded ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                <div className="font-semibold">Script Loaded</div>
                <div className="text-lg">{diagnostics.scriptLoaded ? '✅' : '❌'}</div>
              </div>
              <div className={`p-3 rounded-lg text-center ${diagnostics.formsApiAvailable ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                <div className="font-semibold">Forms API</div>
                <div className="text-lg">{diagnostics.formsApiAvailable ? '✅' : '❌'}</div>
              </div>
              <div className={`p-3 rounded-lg text-center ${diagnostics.formCreated ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'}`}>
                <div className="font-semibold">Form Created</div>
                <div className="text-lg">{diagnostics.formCreated ? '✅' : '⏳'}</div>
              </div>
              <div className={`p-3 rounded-lg text-center ${diagnostics.consoleErrors.length === 0 ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                <div className="font-semibold">No Errors</div>
                <div className="text-lg">{diagnostics.consoleErrors.length === 0 ? '✅' : '❌'}</div>
              </div>
            </div>
          </div>

          {/* Configuration Details */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold mb-4">Configuration</h2>
            <div className="bg-gray-50 p-4 rounded-lg font-mono text-sm">
              <div><strong>Portal ID:</strong> 26510736</div>
              <div><strong>Form ID:</strong> e92de02c-71b0-4a68-aedd-3b6acb0f5f67</div>
              <div><strong>Region:</strong> eu1</div>
              <div><strong>Script URL:</strong> https://js-eu1.hsforms.net/forms/embed/v2.js</div>
            </div>
          </div>

          {/* Test Form */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold mb-4">Test Form</h2>
            <div id="test-form-container" className="min-h-[300px] border border-gray-200 rounded-lg p-4">
              {!diagnostics.formCreated && (
                <div className="flex items-center justify-center h-64 text-gray-500">
                  <div className="text-center">
                    <div className="animate-spin w-8 h-8 border-4 border-blue-500 border-t-transparent rounded-full mx-auto mb-4"></div>
                    <div>Loading HubSpot form...</div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Network Requests */}
          {diagnostics.networkRequests.length > 0 && (
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-semibold mb-4">Network Requests</h2>
              <div className="space-y-2">
                {diagnostics.networkRequests.map((request, index) => (
                  <div key={index} className="bg-green-50 border border-green-200 rounded p-2 text-sm font-mono">
                    {request}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Console Errors */}
          {diagnostics.consoleErrors.length > 0 && (
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-semibold mb-4 text-red-600">Console Errors</h2>
              <div className="space-y-2">
                {diagnostics.consoleErrors.map((error, index) => (
                  <div key={index} className="bg-red-50 border border-red-200 rounded p-2 text-sm font-mono text-red-800">
                    {error}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Instructions */}
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-4 text-blue-800">Diagnostic Instructions</h2>
            <ul className="space-y-2 text-blue-700">
              <li>• All status indicators should show green checkmarks when working properly</li>
              <li>• The test form should load and display the newsletter signup form</li>
              <li>• Network requests should show successful calls to HubSpot servers</li>
              <li>• No console errors should appear related to HubSpot</li>
              <li>• If errors persist, check the HubSpot form settings in portal 26510736</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}