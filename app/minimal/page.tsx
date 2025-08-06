export default function MinimalPage() {
  return (
    <div className="min-h-screen bg-white p-8">
      <h1 className="text-3xl font-bold">Minimal Test Page</h1>
      <p className="mt-4">If you can see this page without errors, the issue is in other components.</p>
      <div className="mt-8 space-y-2">
        <p>Test links:</p>
        <ul className="list-disc list-inside space-y-1">
          <li><a href="/" className="text-blue-600 hover:underline">Home (with all components)</a></li>
          <li><a href="/debug" className="text-blue-600 hover:underline">Debug page</a></li>
          <li><a href="/about" className="text-blue-600 hover:underline">About page</a></li>
          <li><a href="/contact" className="text-blue-600 hover:underline">Contact page</a></li>
        </ul>
      </div>
    </div>
  )
}