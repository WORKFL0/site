'use client'

import { useState } from 'react'
import HubSpotForm from '@/components/forms/HubSpotFormClient'

export default function TestHubSpotPage() {
  const [formReady, setFormReady] = useState(false)
  const [formSubmitted, setFormSubmitted] = useState(false)
  const [logs, setLogs] = useState<string[]>([])

  const addLog = (message: string) => {
    const timestamp = new Date().toLocaleTimeString()
    setLogs(prev => [...prev, `[${timestamp}] ${message}`])
    console.log(`[${timestamp}] ${message}`)
  }

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">HubSpot Form Test Page</h1>
        
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-xl font-semibold mb-4">Form Configuration</h2>
          <ul className="space-y-2 text-sm">
            <li><strong>Region:</strong> eu1</li>
            <li><strong>Portal ID:</strong> 26510736</li>
            <li><strong>Form ID:</strong> acf3fe0b-c542-4fc2-aa14-f3cb2fc356c0</li>
            <li><strong>Script URL:</strong> https://js-eu1.hsforms.net/forms/embed/v2.js</li>
          </ul>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-xl font-semibold mb-4">Form Status</h2>
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <div className={`w-3 h-3 rounded-full ${formReady ? 'bg-green-500' : 'bg-gray-300'}`}></div>
              <span>Form Ready: {formReady ? 'Yes' : 'No'}</span>
            </div>
            <div className="flex items-center gap-2">
              <div className={`w-3 h-3 rounded-full ${formSubmitted ? 'bg-green-500' : 'bg-gray-300'}`}></div>
              <span>Form Submitted: {formSubmitted ? 'Yes' : 'No'}</span>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-xl font-semibold mb-4">Console Logs</h2>
          <div className="bg-gray-900 text-green-400 p-4 rounded font-mono text-xs h-40 overflow-y-auto">
            {logs.length === 0 ? (
              <div className="text-gray-500">No logs yet...</div>
            ) : (
              logs.map((log, index) => (
                <div key={index}>{log}</div>
              ))
            )}
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-xl font-semibold mb-4">HubSpot Form</h2>
          
          <HubSpotForm
            region="eu1"
            portalId="26510736"
            formId="acf3fe0b-c542-4fc2-aa14-f3cb2fc356c0"
            onFormReady={() => {
              setFormReady(true)
              addLog('Form is ready!')
            }}
            onFormSubmit={() => {
              addLog('Form is being submitted...')
            }}
            onFormSubmitted={() => {
              setFormSubmitted(true)
              addLog('Form submission completed!')
            }}
          />
        </div>

        <div className="mt-8 p-4 bg-blue-50 border border-blue-200 rounded-lg">
          <h3 className="font-semibold text-blue-900 mb-2">Testing Instructions:</h3>
          <ol className="list-decimal list-inside space-y-1 text-sm text-blue-800">
            <li>Check if the form loads (green indicator for "Form Ready")</li>
            <li>Check browser console for any errors (F12 → Console tab)</li>
            <li>Try filling and submitting the form</li>
            <li>Watch the console logs above for activity</li>
            <li>If form doesn't load, check for ad blockers or browser extensions</li>
          </ol>
        </div>

        <div className="mt-4 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
          <h3 className="font-semibold text-yellow-900 mb-2">Common Issues:</h3>
          <ul className="list-disc list-inside space-y-1 text-sm text-yellow-800">
            <li>Ad blockers may block HubSpot scripts</li>
            <li>CORS errors if region is incorrect</li>
            <li>Invalid portal ID or form ID</li>
            <li>Network connectivity issues</li>
            <li>Browser console errors provide more details</li>
          </ul>
        </div>
      </div>
    </div>
  )
}