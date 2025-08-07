'use client'

import { useState, useEffect } from 'react'

export default function TestDiagnosticsPage() {
  const [info, setInfo] = useState<any>({})
  
  useEffect(() => {
    const diagnostics: any = {
      browser: typeof window !== 'undefined',
      localStorage: typeof localStorage !== 'undefined',
      sessionStorage: typeof sessionStorage !== 'undefined',
      navigator: typeof navigator !== 'undefined',
      document: typeof document !== 'undefined',
      userAgent: typeof navigator !== 'undefined' ? navigator.userAgent : 'N/A',
      url: typeof window !== 'undefined' ? window.location.href : 'N/A',
      timestamp: new Date().toISOString()
    }
    
    // Test localStorage
    try {
      localStorage.setItem('test', 'test')
      localStorage.removeItem('test')
      diagnostics.localStorageWorks = true
    } catch (e) {
      diagnostics.localStorageWorks = false
      diagnostics.localStorageError = (e as Error).message
    }
    
    setInfo(diagnostics)
  }, [])
  
  return (
    <div style={{ padding: '20px', fontFamily: 'system-ui' }}>
      <h1>Minimal Diagnostics</h1>
      <pre style={{ background: '#f5f5f5', padding: '10px' }}>
        {JSON.stringify(info, null, 2)}
      </pre>
    </div>
  )
}