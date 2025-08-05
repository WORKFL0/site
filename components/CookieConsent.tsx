'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false)
  const [showDetails, setShowDetails] = useState(false)

  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent')
    if (!consent) {
      setShowBanner(true)
    }
  }, [])

  const handleAcceptAll = () => {
    localStorage.setItem('cookieConsent', 'accepted')
    localStorage.setItem('cookiePreferences', JSON.stringify({
      essential: true,
      functional: true,
      analytics: true,
      marketing: true
    }))
    setShowBanner(false)
  }

  const handleRejectNonEssential = () => {
    localStorage.setItem('cookieConsent', 'partial')
    localStorage.setItem('cookiePreferences', JSON.stringify({
      essential: true,
      functional: false,
      analytics: false,
      marketing: false
    }))
    setShowBanner(false)
  }

  const handleCustomize = () => {
    setShowDetails(!showDetails)
  }

  if (!showBanner) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-gray-900 text-white shadow-lg z-50">
      <div className="container mx-auto p-4">
        <div className="flex flex-col space-y-4">
          <div className="flex items-start gap-3">
            <div className="flex-shrink-0 mt-1">
              <svg className="w-6 h-6 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div className="flex-grow">
              <h3 className="font-semibold mb-2">Cookie-instellingen</h3>
              <p className="text-sm text-gray-300 mb-4">
                Deze website gebruikt cookies om uw ervaring te verbeteren en onze diensten te analyseren. 
                Sommige cookies zijn essentieel voor de werking van de website.{' '}
                <Link href="/cookies" className="text-yellow-400 hover:text-yellow-300 underline">
                  Meer informatie
                </Link>
              </p>
              
              {showDetails && (
                <div className="bg-gray-800 rounded-lg p-4 mb-4 space-y-3">
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="font-medium">Essentiële cookies</span>
                      <p className="text-xs text-gray-400">Noodzakelijk voor de werking van de website</p>
                    </div>
                    <div className="text-green-400 text-sm font-medium">Altijd aan</div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="font-medium">Functionele cookies</span>
                      <p className="text-xs text-gray-400">Verbeteren de functionaliteit van de website</p>
                    </div>
                    <input type="checkbox" className="toggle" defaultChecked />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="font-medium">Analytische cookies</span>
                      <p className="text-xs text-gray-400">Helpen ons de website te verbeteren</p>
                    </div>
                    <input type="checkbox" className="toggle" defaultChecked />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="font-medium">Marketing cookies</span>
                      <p className="text-xs text-gray-400">Voor gepersonaliseerde advertenties</p>
                    </div>
                    <input type="checkbox" className="toggle" defaultChecked />
                  </div>
                </div>
              )}
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-3 justify-end">
            <button
              onClick={handleCustomize}
              className="px-4 py-2 text-sm border border-gray-600 rounded hover:bg-gray-800 transition-colors"
            >
              {showDetails ? 'Verberg details' : 'Aanpassen'}
            </button>
            <button
              onClick={handleRejectNonEssential}
              className="px-4 py-2 text-sm border border-gray-600 rounded hover:bg-gray-800 transition-colors"
            >
              Alleen essentiële
            </button>
            <button
              onClick={handleAcceptAll}
              className="px-6 py-2 text-sm bg-yellow-400 text-black rounded font-medium hover:bg-yellow-500 transition-colors"
            >
              Alles accepteren
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}