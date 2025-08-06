'use client'

import { useEffect, useState } from 'react'

export default function DebugPage() {
  const [errors, setErrors] = useState<string[]>([])
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    
    // Capture any errors
    const handleError = (event: ErrorEvent) => {
      setErrors(prev => [...prev, `Error: ${event.message} at ${event.filename}:${event.lineno}:${event.colno}`])
    }
    
    const handleUnhandledRejection = (event: PromiseRejectionEvent) => {
      setErrors(prev => [...prev, `Unhandled Promise Rejection: ${event.reason}`])
    }
    
    window.addEventListener('error', handleError)
    window.addEventListener('unhandledrejection', handleUnhandledRejection)
    
    // Check for common issues
    const checks = []
    
    // Check if localStorage is available
    try {
      localStorage.setItem('test', 'test')
      localStorage.removeItem('test')
      checks.push('✅ localStorage is available')
    } catch (e) {
      checks.push('❌ localStorage is not available')
      setErrors(prev => [...prev, `localStorage error: ${e}`])
    }
    
    // Check if window.hbspt exists
    if (typeof window !== 'undefined') {
      checks.push(`HubSpot loaded: ${typeof (window as any).hbspt !== 'undefined' ? '✅' : '❌'}`)
    }
    
    // Log checks
    console.log('Debug checks:', checks)
    
    return () => {
      window.removeEventListener('error', handleError)
      window.removeEventListener('unhandledrejection', handleUnhandledRejection)
    }
  }, [])

  if (!mounted) {
    return <div>Loading debug info...</div>
  }

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Debug Page</h1>
        
        <div className="bg-white rounded-lg shadow p-6 mb-6">
          <h2 className="text-xl font-semibold mb-4">Environment</h2>
          <ul className="space-y-2 font-mono text-sm">
            <li>Node Env: {process.env.NODE_ENV}</li>
            <li>Browser: {typeof navigator !== 'undefined' ? navigator.userAgent : 'N/A'}</li>
            <li>Window: {typeof window !== 'undefined' ? '✅' : '❌'}</li>
            <li>Document: {typeof document !== 'undefined' ? '✅' : '❌'}</li>
          </ul>
        </div>
        
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-semibold mb-4">Captured Errors ({errors.length})</h2>
          {errors.length === 0 ? (
            <p className="text-green-600">No errors detected on this page</p>
          ) : (
            <ul className="space-y-2">
              {errors.map((error, index) => (
                <li key={index} className="text-red-600 font-mono text-sm p-2 bg-red-50 rounded">
                  {error}
                </li>
              ))}
            </ul>
          )}
        </div>
        
        <div className="mt-6 p-4 bg-blue-50 rounded-lg">
          <p className="text-sm text-blue-800">
            This debug page captures JavaScript errors. Open the browser console for more details.
          </p>
        </div>
      </div>
    </div>
  )
}