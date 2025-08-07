'use client'

import { useState, useEffect } from 'react'

export default function TestDiagnostic() {
  const [status, setStatus] = useState<string[]>(['Page loaded'])
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const tests: string[] = []
    
    // Test 1: Basic React hooks
    try {
      tests.push('✅ React hooks working')
    } catch (e) {
      tests.push(`❌ React hooks error: ${e}`)
    }

    // Test 2: Check window object
    try {
      if (typeof window !== 'undefined') {
        tests.push('✅ Window object available')
      } else {
        tests.push('⚠️ Window object not available')
      }
    } catch (e) {
      tests.push(`❌ Window check error: ${e}`)
    }

    // Test 3: Check environment variables
    try {
      const hasHotjar = process.env.NEXT_PUBLIC_HOTJAR_ID
      tests.push(hasHotjar ? '✅ Hotjar ID configured' : '⚠️ Hotjar ID not found')
    } catch (e) {
      tests.push(`❌ Env var error: ${e}`)
    }

    // Test 4: Try importing components one by one
    Promise.all([
      import('@/components/layout/Header').then(() => '✅ Header imports').catch(e => `❌ Header error: ${e.message}`),
      import('@/components/layout/Footer').then(() => '✅ Footer imports').catch(e => `❌ Footer error: ${e.message}`),
      import('@/components/HydrationProvider').then(() => '✅ HydrationProvider imports').catch(e => `❌ HydrationProvider error: ${e.message}`),
      import('@/context/LanguageContext').then(() => '✅ LanguageContext imports').catch(e => `❌ LanguageContext error: ${e.message}`),
    ]).then(results => {
      setStatus(prev => [...prev, ...tests, ...results])
    }).catch(err => {
      setError(`Import test failed: ${err}`)
    })
  }, [])

  return (
    <div style={{ padding: '20px', fontFamily: 'monospace' }}>
      <h1>Diagnostic Test Page</h1>
      <h2>Status:</h2>
      <ul>
        {status.map((s, i) => (
          <li key={i}>{s}</li>
        ))}
      </ul>
      {error && (
        <div style={{ color: 'red', marginTop: '20px' }}>
          <h2>Error:</h2>
          <pre>{error}</pre>
        </div>
      )}
    </div>
  )
}