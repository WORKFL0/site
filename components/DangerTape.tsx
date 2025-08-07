import React from 'react'

interface DangerTapeProps {
  className?: string
  height?: string
  showText?: boolean
}

export default function DangerTape({ 
  className = '', 
  height = 'h-4',
  showText = false 
}: DangerTapeProps) {
  return (
    <div 
      className={`${height} relative overflow-hidden ${className}`}
      style={{
        background: `repeating-linear-gradient(
          -45deg,
          #f2f400 0px,
          #f2f400 15px,
          #000000 15px,
          #000000 30px
        )`,
        boxShadow: 'inset 0 2px 4px rgba(0,0,0,0.1), inset 0 -2px 4px rgba(0,0,0,0.1)'
      }}
    >
      {/* Texture overlay */}
      <div 
        className="absolute inset-0"
        style={{
          background: `repeating-linear-gradient(
            45deg,
            transparent 0px,
            transparent 7px,
            rgba(0,0,0,0.15) 7px,
            rgba(0,0,0,0.15) 8px
          )`
        }}
      />
      
      {showText && (
        <div className="absolute inset-0 flex items-center overflow-hidden">
          <div 
            className="whitespace-nowrap animate-scroll-text text-xs font-bold tracking-wider"
            style={{
              animation: 'scroll-text 20s linear infinite',
              color: '#000',
              opacity: 0.7,
              textTransform: 'uppercase',
              letterSpacing: '1px'
            }}
          >
            CAUTION • WERKZAAMHEDEN • ATTENTION • CAUTION • WERKZAAMHEDEN • ATTENTION • 
            CAUTION • WERKZAAMHEDEN • ATTENTION • CAUTION • WERKZAAMHEDEN • ATTENTION • 
          </div>
        </div>
      )}
    </div>
  )
}

export function DangerTapeBorder({ children, className = '' }: { children: React.ReactNode, className?: string }) {
  return (
    <div className={`relative ${className}`}>
      <DangerTape height="h-2" className="absolute top-0 left-0 right-0 z-10" />
      <DangerTape height="h-2" className="absolute bottom-0 left-0 right-0 z-10" />
      {children}
    </div>
  )
}