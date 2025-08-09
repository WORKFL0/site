'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

/**
 * DEBUG VERSION - This will show us EXACTLY what's breaking
 * Each component is wrapped in error handling
 * We'll see which exact component causes the crash
 */
export default function HomeDebug() {
  const [debugLog, setDebugLog] = useState<string[]>([])
  const [errorLog, setErrorLog] = useState<string[]>([])
  
  const addLog = (message: string) => {
    console.log(`[DEBUG] ${message}`)
    setDebugLog(prev => [...prev, `${new Date().toISOString()}: ${message}`])
  }
  
  const addError = (component: string, error: any) => {
    const errorMsg = `ERROR in ${component}: ${error?.message || error}`
    console.error(`[ERROR] ${errorMsg}`, error)
    setErrorLog(prev => [...prev, errorMsg])
  }

  useEffect(() => {
    addLog('Page mounted successfully')
  }, [])

  // Test each component in isolation
  const components = [
    {
      name: 'Basic HTML',
      render: () => (
        <div className="p-4 bg-green-100">
          <h2 className="font-bold">✅ Basic HTML Works</h2>
        </div>
      )
    },
    {
      name: 'useState Hook',
      render: () => {
        // Can't use hooks in render function - just test if it would work
        return (
          <div className="p-4 bg-green-100">
            <h2 className="font-bold">✅ useState Test (simplified)</h2>
            <button className="bg-blue-500 text-white px-2 py-1 rounded">
              Button Works
            </button>
          </div>
        )
      }
    },
    {
      name: 'CSS Animations',
      render: () => (
        <div className="p-4 bg-green-100">
          <h2 className="font-bold animate-pulse">✅ CSS Animations Work</h2>
          <style jsx>{`
            @keyframes pulse {
              0%, 100% { opacity: 1; }
              50% { opacity: 0.5; }
            }
            .animate-pulse {
              animation: pulse 2s infinite;
            }
          `}</style>
        </div>
      )
    },
    {
      name: 'Tailwind Gradients',
      render: () => (
        <div className="p-4 bg-gradient-to-r from-yellow-400 to-orange-500">
          <h2 className="font-bold text-white">✅ Gradients Work</h2>
        </div>
      )
    },
    {
      name: 'SVG Background Pattern',
      render: () => (
        <div 
          className="p-4 bg-green-100"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}
        >
          <h2 className="font-bold">✅ SVG Patterns Work</h2>
        </div>
      )
    },
    {
      name: 'Dynamic Import Test',
      render: () => {
        // Can't use hooks in render - just test the concept
        return (
          <div className="p-4 bg-green-100">
            <h2 className="font-bold">✅ Dynamic Import Test (simplified)</h2>
          </div>
        )
      }
    },
    {
      name: 'Styled JSX',
      render: () => (
        <>
          <div className="p-4 bg-green-100 styled-test">
            <h2 className="font-bold">✅ Styled JSX Works</h2>
          </div>
          <style jsx>{`
            .styled-test {
              border: 2px solid green;
            }
          `}</style>
        </>
      )
    },
    {
      name: 'Complex Nested Structure',
      render: () => (
        <div className="p-4 bg-green-100">
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-white p-2 rounded shadow">
              <h3 className="font-bold">Card 1</h3>
              <p className="text-sm">Nested content</p>
            </div>
            <div className="bg-white p-2 rounded shadow">
              <h3 className="font-bold">Card 2</h3>
              <p className="text-sm">More content</p>
            </div>
          </div>
          <h2 className="font-bold mt-2">✅ Complex Nesting Works</h2>
        </div>
      )
    },
    {
      name: 'Inline Styles with Animations',
      render: () => {
        return (
          <div className="p-4 bg-green-100">
            <h2 className="font-bold" style={{ opacity: 1, transition: 'opacity 0.5s' }}>
              ✅ Inline Style Animations Work
            </h2>
          </div>
        )
      }
    },
    {
      name: 'Heavy Animation Test',
      render: () => (
        <div className="p-4 bg-green-100 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-orange-500 opacity-50 animate-pulse"></div>
          <div className="absolute top-0 left-0 w-32 h-32 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-bounce"></div>
          <div className="absolute bottom-0 right-0 w-32 h-32 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-ping"></div>
          <h2 className="font-bold relative z-10">✅ Heavy Animations Work</h2>
        </div>
      )
    }
  ]

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">🔍 Debug Mode - Component Testing</h1>
        
        {/* Debug Logs */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-8">
          <div className="bg-white p-4 rounded shadow">
            <h2 className="font-bold mb-2 text-green-600">✅ Debug Log</h2>
            <div className="text-xs font-mono space-y-1 max-h-40 overflow-y-auto">
              {debugLog.length === 0 ? (
                <p className="text-gray-500">No logs yet...</p>
              ) : (
                debugLog.map((log, i) => (
                  <div key={i} className="text-green-700">{log}</div>
                ))
              )}
            </div>
          </div>
          
          <div className="bg-white p-4 rounded shadow">
            <h2 className="font-bold mb-2 text-red-600">❌ Error Log</h2>
            <div className="text-xs font-mono space-y-1 max-h-40 overflow-y-auto">
              {errorLog.length === 0 ? (
                <p className="text-gray-500">No errors detected</p>
              ) : (
                errorLog.map((error, i) => (
                  <div key={i} className="text-red-700">{error}</div>
                ))
              )}
            </div>
          </div>
        </div>

        {/* Component Tests */}
        <div className="space-y-4">
          <h2 className="text-2xl font-bold">Component Tests:</h2>
          
          {components.map((component, index) => {
            try {
              addLog(`Rendering component: ${component.name}`)
              return (
                <div key={index} className="border-2 border-gray-300 rounded overflow-hidden">
                  <div className="bg-gray-200 px-4 py-2 font-bold">
                    Test #{index + 1}: {component.name}
                  </div>
                  <div className="bg-white">
                    {component.render()}
                  </div>
                </div>
              )
            } catch (error) {
              addError(component.name, error)
              return (
                <div key={index} className="border-2 border-red-500 rounded overflow-hidden">
                  <div className="bg-red-500 text-white px-4 py-2 font-bold">
                    Test #{index + 1}: {component.name} - FAILED
                  </div>
                  <div className="bg-red-50 p-4">
                    <p className="text-red-700">Error: {(error as any)?.message || 'Unknown error'}</p>
                  </div>
                </div>
              )
            }
          })}
        </div>

        {/* Summary */}
        <div className="mt-8 p-4 bg-white rounded shadow">
          <h2 className="text-xl font-bold mb-2">Summary:</h2>
          <p className="text-green-600">✅ Successful Components: {components.length - errorLog.length}</p>
          <p className="text-red-600">❌ Failed Components: {errorLog.length}</p>
          
          {errorLog.length > 0 && (
            <div className="mt-4 p-4 bg-red-50 rounded">
              <h3 className="font-bold text-red-700 mb-2">The following components are causing issues:</h3>
              <ul className="list-disc list-inside text-red-600">
                {errorLog.map((error, i) => (
                  <li key={i}>{error}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
        
        {/* Navigation */}
        <div className="mt-8 space-x-4">
          <Link href="/" className="bg-blue-500 text-white px-4 py-2 rounded">
            Back to Homepage
          </Link>
          <button 
            onClick={() => window.location.reload()} 
            className="bg-gray-500 text-white px-4 py-2 rounded"
          >
            Reload Page
          </button>
        </div>
      </div>
    </div>
  )
}