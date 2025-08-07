'use client'

export default function TestMain() {
  // Try to render the main page content step by step
  const components = []
  
  try {
    components.push(<div key="1">✅ Basic render works</div>)
  } catch (e: any) {
    components.push(<div key="1" style={{color: 'red'}}>❌ Basic render failed: {e.message}</div>)
  }

  // Test if we can use useState
  try {
    const { useState } = require('react')
    const [test] = useState('test')
    components.push(<div key="2">✅ useState works: {test}</div>)
  } catch (e: any) {
    components.push(<div key="2" style={{color: 'red'}}>❌ useState failed: {e.message}</div>)
  }

  // Test if we can use useEffect
  try {
    const { useEffect } = require('react')
    useEffect(() => {
      console.log('Effect ran')
    }, [])
    components.push(<div key="3">✅ useEffect works</div>)
  } catch (e: any) {
    components.push(<div key="3" style={{color: 'red'}}>❌ useEffect failed: {e.message}</div>)
  }

  // Test if we can access process.env
  try {
    const hotjarId = process.env.NEXT_PUBLIC_HOTJAR_ID
    components.push(<div key="4">✅ Environment variables accessible: {hotjarId ? 'Hotjar configured' : 'No Hotjar'}</div>)
  } catch (e: any) {
    components.push(<div key="4" style={{color: 'red'}}>❌ Env vars failed: {e.message}</div>)
  }

  return (
    <div style={{ padding: '20px', fontFamily: 'system-ui' }}>
      <h1>Main Page Component Test</h1>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        {components}
      </div>
      <hr style={{ margin: '20px 0' }} />
      <p>If all tests pass above, the issue is with imported components.</p>
    </div>
  )
}