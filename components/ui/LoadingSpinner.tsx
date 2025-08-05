export default function LoadingSpinner() {
  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center">
      <div className="bg-white rounded-2xl p-8 shadow-2xl">
        <div className="relative w-20 h-20">
          <div className="absolute inset-0 border-4 border-yellow-400/30 rounded-full"></div>
          <div className="absolute inset-0 border-4 border-yellow-400 rounded-full border-t-transparent animate-spin"></div>
        </div>
        <p className="text-black font-bold mt-4 text-center">Loading...</p>
      </div>
    </div>
  )
}