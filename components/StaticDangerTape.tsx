'use client'

// STATIC VERSION - No dynamic imports, no crashes
export default function StaticDangerTape() {
  return (
    <div className="h-3 bg-yellow-400 relative overflow-hidden">
      <div 
        className="absolute inset-0 flex"
        style={{
          backgroundImage: 'repeating-linear-gradient(45deg, #000 0px, #000 10px, #facc15 10px, #facc15 20px)',
          animation: 'slide 20s linear infinite'
        }}
      />
      <style jsx>{`
        @keyframes slide {
          from { transform: translateX(0); }
          to { transform: translateX(28px); }
        }
      `}</style>
    </div>
  )
}