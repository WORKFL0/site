export default function DebugPage() {
  return (
    <div style={{ padding: '50px', fontFamily: 'monospace' }}>
      <h1>Deployment Debug Info</h1>
      <p>Build Time: {new Date().toISOString()}</p>
      <p>Version: Fixed all todos - 100+ companies</p>
      <p>Environment: {process.env.NODE_ENV}</p>
      <hr />
      <h2>Changes Applied:</h2>
      <ul>
        <li>✅ Homepage: 100+ (not 250+)</li>
        <li>✅ Animation: Workflo-code-animatie.mp4</li>
        <li>✅ Diensten page updated</li>
        <li>✅ IT Health Check at /tevredenheidscheck</li>
        <li>✅ HubSpot form integration</li>
      </ul>
    </div>
  )
}