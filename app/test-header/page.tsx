'use client'

import Header from '@/components/layout/Header'

export default function TestHeaderPage() {
  return (
    <div>
      <Header />
      <div style={{ padding: '100px 20px', fontFamily: 'system-ui' }}>
        <h1>Header Test</h1>
        <p>If you can see this with the header above, the Header component works.</p>
      </div>
    </div>
  )
}