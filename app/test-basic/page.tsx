export default function TestBasicPage() {
  return (
    <div style={{ padding: '20px', fontFamily: 'system-ui' }}>
      <h1>Basic Test Page</h1>
      <p>If you can see this, the basic rendering works.</p>
      <p>Time: {new Date().toISOString()}</p>
    </div>
  )
}