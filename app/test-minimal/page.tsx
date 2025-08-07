export default function TestMinimal() {
  return (
    <div style={{ padding: '20px', fontFamily: 'system-ui' }}>
      <h1>Minimal Test Page</h1>
      <p>If you can see this, the basic Next.js app is working.</p>
      <p>Time: {new Date().toISOString()}</p>
    </div>
  )
}