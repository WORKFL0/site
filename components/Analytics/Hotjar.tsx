'use client'

import { useEffect } from 'react'

// Type declarations moved to component file to avoid conflicts

export default function Hotjar() {
  useEffect(() => {
    // Only load in production
    if (process.env.NODE_ENV !== 'production') return
    
    const hjid = process.env.NEXT_PUBLIC_HOTJAR_ID || '5205632'
    const hjsv = 6
    
    if (!hjid) return
    
    // Hotjar tracking code
    ;(function(h: any, o: any, t: any, j: any, a?: any, r?: any) {
      h.hj = h.hj || function() {
        (h.hj.q = h.hj.q || []).push(arguments)
      }
      h._hjSettings = { hjid: parseInt(hjid), hjsv }
      a = o.getElementsByTagName('head')[0]
      r = o.createElement('script')
      r.async = true
      r.src = t + h._hjSettings.hjid + j + h._hjSettings.hjsv
      a.appendChild(r)
    })(window as any, document, 'https://static.hotjar.com/c/hotjar-', '.js?sv=')
  }, [])
  
  return null
}