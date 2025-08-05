export default function TestPage() {
  return (
    <div className="min-h-screen bg-yellow-400 flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-black mb-4">TEST PAGE WORKING</h1>
        <p className="text-2xl text-black">If you see this with yellow background, the deployment is working!</p>
        <div className="mt-8 p-4 bg-black text-yellow-400 rounded">
          <p>Components are loading correctly</p>
          <p>Tailwind is working</p>
          <p>Build successful</p>
        </div>
      </div>
    </div>
  )
}