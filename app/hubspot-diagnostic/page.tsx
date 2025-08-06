'use client'

import { useState, useEffect } from 'react'
import { debugHubSpot } from '@/utils/hubspot-debug'

export default function HubSpotDiagnosticPage() {
  const [debugInfo, setDebugInfo] = useState<any>(null)
  const [formId, setFormId] = useState('acf3fe0b-c542-4fc2-aa14-f3cb2fc356c0')
  const [testResult, setTestResult] = useState<'idle' | 'testing' | 'success' | 'failed'>('idle')
  
  // Portal ID from client's working scripts
  const portalId = '26510736'
  const region = 'eu1'
  
  useEffect(() => {
    // Run debug check on mount
    const info = debugHubSpot()
    setDebugInfo(info)
  }, [])
  
  const testForm = async () => {
    setTestResult('testing')
    
    // Clear existing test container
    const container = document.getElementById('test-form-container')
    if (container) {
      container.innerHTML = ''
    }
    
    // Load script if not already loaded
    let script = document.querySelector('script[src*="hsforms.net"]')
    
    if (!script) {
      script = document.createElement('script')
      script.src = `https://js-${region}.hsforms.net/forms/embed/v2.js`
      script.defer = true
      document.body.appendChild(script)
    }
    
    // Wait for HubSpot to be ready
    let attempts = 0
    const maxAttempts = 30
    
    const checkAndCreate = () => {
      attempts++
      
      if (window.hbspt && window.hbspt.forms) {
        try {
          window.hbspt.forms.create({
            region,
            portalId,
            formId,
            target: '#test-form-container',
            onFormReady: () => {
              console.log('Form ready with ID:', formId)
              setTestResult('success')
            }
          })
        } catch (error) {
          console.error('Error creating form:', error)
          setTestResult('failed')
        }
      } else if (attempts < maxAttempts) {
        setTimeout(checkAndCreate, 200)
      } else {
        setTestResult('failed')
      }
    }
    
    setTimeout(checkAndCreate, 100)
  }
  
  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">HubSpot Form Diagnostic Tool</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Configuration Panel */}
          <div className="space-y-6">
            {/* Client Information */}
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
              <h2 className="text-xl font-semibold mb-4 text-blue-900">Client's Working Configuration</h2>
              <div className="space-y-2 text-sm">
                <div><strong>Portal ID:</strong> 26510736</div>
                <div><strong>Region:</strong> eu1</div>
                <div><strong>Scripts from old site:</strong></div>
                <ul className="ml-4 list-disc text-xs font-mono">
                  <li>https://js-eu1.hsforms.net/forms/embed/v2.js</li>
                  <li>https://js-eu1.hsforms.net/forms/embed/26510736.js</li>
                </ul>
                <div className="mt-3 pt-3 border-t border-blue-200">
                  <strong>Share Link:</strong>
                  <div className="text-xs font-mono break-all">
                    https://share-eu1.hsforms.com/1rP7I-sWWT-CqFO1L9Ctvcwfs7tc
                  </div>
                </div>
              </div>
            </div>
            
            {/* Form ID Tester */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h2 className="text-xl font-semibold mb-4">Test Form ID</h2>
              <p className="text-sm text-gray-600 mb-4">
                Enter a form ID to test if it loads correctly with the portal ID 26510736:
              </p>
              <input
                type="text"
                value={formId}
                onChange={(e) => setFormId(e.target.value)}
                placeholder="Enter form ID (UUID format)"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg mb-4"
              />
              <button
                onClick={testForm}
                disabled={testResult === 'testing'}
                className="w-full px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 disabled:bg-gray-400"
              >
                {testResult === 'testing' ? 'Testing...' : 'Test Form ID'}
              </button>
              
              {testResult !== 'idle' && (
                <div className={`mt-4 p-3 rounded-lg ${
                  testResult === 'success' ? 'bg-green-100 text-green-800' :
                  testResult === 'failed' ? 'bg-red-100 text-red-800' :
                  'bg-yellow-100 text-yellow-800'
                }`}>
                  {testResult === 'success' && 'Form loaded successfully!'}
                  {testResult === 'failed' && 'Failed to load form. Check console for errors.'}
                  {testResult === 'testing' && 'Testing form configuration...'}
                </div>
              )}
            </div>
            
            {/* Debug Information */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h2 className="text-xl font-semibold mb-4">System Status</h2>
              {debugInfo && (
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>Script Loaded:</span>
                    <span className={debugInfo.scriptLoaded ? 'text-green-600' : 'text-red-600'}>
                      {debugInfo.scriptLoaded ? 'Yes' : 'No'}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span>API Available:</span>
                    <span className={debugInfo.apiAvailable ? 'text-green-600' : 'text-red-600'}>
                      {debugInfo.apiAvailable ? 'Yes' : 'No'}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span>Forms API:</span>
                    <span className={debugInfo.formsApiAvailable ? 'text-green-600' : 'text-red-600'}>
                      {debugInfo.formsApiAvailable ? 'Yes' : 'No'}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span>Network:</span>
                    <span className={debugInfo.networkStatus === 'online' ? 'text-green-600' : 'text-red-600'}>
                      {debugInfo.networkStatus}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span>Ad Blocker:</span>
                    <span className={debugInfo.blockedByAdBlocker ? 'text-red-600' : 'text-green-600'}>
                      {debugInfo.blockedByAdBlocker ? 'Detected' : 'Not Detected'}
                    </span>
                  </div>
                  
                  {debugInfo.errors.length > 0 && (
                    <div className="mt-3 pt-3 border-t">
                      <strong className="text-red-600">Errors:</strong>
                      <ul className="mt-1 text-xs">
                        {debugInfo.errors.map((error: string, i: number) => (
                          <li key={i} className="text-red-600">{error}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                  
                  {debugInfo.warnings.length > 0 && (
                    <div className="mt-3 pt-3 border-t">
                      <strong className="text-yellow-600">Warnings:</strong>
                      <ul className="mt-1 text-xs">
                        {debugInfo.warnings.map((warning: string, i: number) => (
                          <li key={i} className="text-yellow-600">{warning}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              )}
              
              <button
                onClick={() => setDebugInfo(debugHubSpot())}
                className="mt-4 w-full px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700"
              >
                Refresh Debug Info
              </button>
            </div>
          </div>
          
          {/* Form Test Container */}
          <div>
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h2 className="text-xl font-semibold mb-4">Form Test Container</h2>
              <div id="test-form-container" className="min-h-[400px]">
                <div className="text-gray-500 text-center py-8">
                  Enter a form ID and click "Test Form ID" to load a form here
                </div>
              </div>
            </div>
            
            {/* Instructions */}
            <div className="mt-6 bg-yellow-50 border border-yellow-200 rounded-lg p-6">
              <h3 className="font-semibold text-yellow-900 mb-3">How to Find the Correct Form ID:</h3>
              <ol className="list-decimal list-inside space-y-2 text-sm text-yellow-800">
                <li>Log into HubSpot account (Portal ID: 26510736)</li>
                <li>Navigate to Marketing → Forms</li>
                <li>Find the contact form you want to use</li>
                <li>Click on the form to open it</li>
                <li>Look for the form ID in:
                  <ul className="ml-6 mt-1 list-disc">
                    <li>The URL (might be in the address bar)</li>
                    <li>The "Share" or "Embed" options</li>
                    <li>Form settings or properties</li>
                  </ul>
                </li>
                <li>The form ID should be in UUID format (e.g., xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx)</li>
              </ol>
              
              <div className="mt-4 pt-4 border-t border-yellow-200">
                <p className="text-sm text-yellow-800">
                  <strong>Note:</strong> The share link token "rP7I-sWWT-CqFO1L9Ctvcwfs7tc" is not the form ID. 
                  It's an encoded reference that HubSpot uses internally.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

// Declare global window type
declare global {
  interface Window {
    hbspt: any
  }
}