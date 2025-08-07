'use client'

import { LanguageProvider } from '@/context/LanguageContext'

export default function TestLayoutPage() {
  return (
    <LanguageProvider>
      <div style={{ padding: '20px', fontFamily: 'system-ui' }}>
        <h1>Language Provider Test</h1>
        <p>If you can see this, the LanguageProvider works.</p>
      </div>
    </LanguageProvider>
  )
}