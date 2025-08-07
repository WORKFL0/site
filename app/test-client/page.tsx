'use client'

import { useState } from 'react'

export default function TestClientPage() {
  const [count, setCount] = useState(0)
  
  return (
    <div style={{ padding: '20px', fontFamily: 'system-ui' }}>
      <h1>Client Component Test</h1>
      <p>If you can see this, client components work.</p>
      <button 
        onClick={() => setCount(count + 1)}
        style={{ padding: '10px', marginTop: '10px' }}
      >
        Clicked: {count} times
      </button>
    </div>
  )
}