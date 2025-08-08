'use client'

import { useState } from 'react'
import Link from 'next/link'

/**
 * SIMPLE DEBUG - No infinite loops, just test what works
 */
export default function SimpleDebug() {
  const [testResults, setTestResults] = useState<string[]>([])
  
  const runTest = (testName: string, testFn: () => boolean) => {
    try {
      const success = testFn()
      setTestResults(prev => [...prev, `✅ ${testName}: ${success ? 'PASSED' : 'FAILED'}`])
    } catch (error) {
      setTestResults(prev => [...prev, `❌ ${testName}: ERROR - ${(error as any)?.message || 'Unknown'}`])
    }
  }

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">🔍 Simple Debug Test</h1>
        
        {/* Test Results */}
        <div className="bg-white p-4 rounded shadow mb-8">
          <h2 className="font-bold mb-2">Test Results:</h2>
          {testResults.length === 0 ? (
            <p className="text-gray-500">Click buttons below to run tests</p>
          ) : (
            <div className="space-y-1">
              {testResults.map((result, i) => (
                <div key={i} className={result.startsWith('✅') ? 'text-green-600' : 'text-red-600'}>
                  {result}
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Manual Test Buttons */}
        <div className="space-y-4">
          <button
            onClick={() => runTest('Basic Render', () => true)}
            className="bg-blue-500 text-white px-4 py-2 rounded"
          >
            Test Basic Render
          </button>
          
          <button
            onClick={() => runTest('State Update', () => {
              setTestResults(prev => [...prev, '📝 State updated'])
              return true
            })}
            className="bg-blue-500 text-white px-4 py-2 rounded ml-2"
          >
            Test State Update
          </button>
        </div>

        {/* Visual Component Tests */}
        <div className="mt-8 space-y-4">
          <h2 className="text-2xl font-bold">Visual Tests (if these show, they work):</h2>
          
          {/* Test 1: Basic HTML */}
          <div className="border-2 border-gray-300 rounded p-4">
            <h3 className="font-bold mb-2">Test 1: Basic HTML</h3>
            <div className="bg-green-100 p-2">
              If you see this green box, basic HTML works
            </div>
          </div>

          {/* Test 2: Tailwind Classes */}
          <div className="border-2 border-gray-300 rounded p-4">
            <h3 className="font-bold mb-2">Test 2: Tailwind Classes</h3>
            <div className="bg-gradient-to-r from-blue-500 to-purple-500 text-white p-2 rounded">
              If you see this gradient, Tailwind works
            </div>
          </div>

          {/* Test 3: Complex Gradient */}
          <div className="border-2 border-gray-300 rounded p-4">
            <h3 className="font-bold mb-2">Test 3: Complex Background</h3>
            <div className="bg-gradient-to-br from-yellow-50 via-white to-purple-50 p-4">
              Complex gradient background
            </div>
          </div>

          {/* Test 4: SVG Pattern */}
          <div className="border-2 border-gray-300 rounded p-4">
            <h3 className="font-bold mb-2">Test 4: SVG Pattern</h3>
            <div 
              className="p-4"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
              }}
            >
              SVG pattern background
            </div>
          </div>

          {/* Test 5: Animation */}
          <div className="border-2 border-gray-300 rounded p-4">
            <h3 className="font-bold mb-2">Test 5: CSS Animation</h3>
            <div className="animate-pulse bg-yellow-400 p-2">
              This should pulse
            </div>
          </div>

          {/* Test 6: Styled JSX */}
          <div className="border-2 border-gray-300 rounded p-4">
            <h3 className="font-bold mb-2">Test 6: Styled JSX</h3>
            <div className="test-styled p-2">
              Styled JSX test
            </div>
            <style jsx>{`
              .test-styled {
                background: linear-gradient(45deg, #ff0000, #00ff00);
                color: white;
              }
            `}</style>
          </div>

          {/* Test 7: Mix Blend */}
          <div className="border-2 border-gray-300 rounded p-4">
            <h3 className="font-bold mb-2">Test 7: Mix Blend Mode</h3>
            <div className="relative h-20">
              <div className="absolute top-0 left-0 w-16 h-16 bg-red-500 rounded-full mix-blend-multiply"></div>
              <div className="absolute top-0 left-8 w-16 h-16 bg-blue-500 rounded-full mix-blend-multiply"></div>
            </div>
          </div>

          {/* Test 8: Filter Blur */}
          <div className="border-2 border-gray-300 rounded p-4">
            <h3 className="font-bold mb-2">Test 8: Filter Blur</h3>
            <div className="w-32 h-32 bg-purple-500 filter blur-xl"></div>
          </div>

          {/* Test 9: Complex Animation */}
          <div className="border-2 border-gray-300 rounded p-4">
            <h3 className="font-bold mb-2">Test 9: Complex Animation</h3>
            <div className="relative overflow-hidden h-32">
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-orange-500 opacity-50 animate-pulse"></div>
              <div className="absolute top-0 left-0 w-32 h-32 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-bounce"></div>
              <div className="absolute bottom-0 right-0 w-32 h-32 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-ping"></div>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="mt-8 space-x-4">
          <Link href="/" className="bg-blue-500 text-white px-4 py-2 rounded inline-block">
            Back to Homepage
          </Link>
        </div>
      </div>
    </div>
  )
}