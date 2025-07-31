'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false)
  const [isClosing, setIsClosing] = useState(false)

  useEffect(() => {
    // Check if user has already made a choice
    const consent = localStorage.getItem('cookieConsent')
    if (!consent) {
      // Show banner after a small delay
      const timer = setTimeout(() => setShowBanner(true), 1000)
      return () => clearTimeout(timer)
    }
  }, [])

  const handleAccept = () => {
    localStorage.setItem('cookieConsent', 'accepted')
    localStorage.setItem('cookieConsentDate', new Date().toISOString())
    setIsClosing(true)
    setTimeout(() => setShowBanner(false), 300)
    
    // Enable analytics and other cookies
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('consent', 'update', {
        'analytics_storage': 'granted',
        'ad_storage': 'granted'
      })
    }
  }

  const handleReject = () => {
    localStorage.setItem('cookieConsent', 'rejected')
    localStorage.setItem('cookieConsentDate', new Date().toISOString())
    setIsClosing(true)
    setTimeout(() => setShowBanner(false), 300)
    
    // Disable analytics and other cookies
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('consent', 'update', {
        'analytics_storage': 'denied',
        'ad_storage': 'denied'
      })
    }
  }

  if (!showBanner) return null

  return (
    <div 
      className={`fixed bottom-0 left-0 right-0 z-50 transition-transform duration-300 ${
        isClosing ? 'translate-y-full' : 'translate-y-0'
      }`}
    >
      <div className="bg-white border-t-4 border-primary-500 shadow-2xl">
        <div className="container mx-auto container-padding py-6">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4">
            <div className="flex-1">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                🍪 Deze website gebruikt cookies
              </h3>
              <p className="text-gray-600 text-sm">
                Wij gebruiken cookies om je ervaring te verbeteren, het verkeer te analyseren en voor beveiligingsdoeleinden. 
                Door te accepteren, stem je in met ons gebruik van cookies volgens ons{' '}
                <Link href="/cookie-policy" className="text-primary-600 hover:text-primary-700 underline">
                  cookiebeleid
                </Link>
                {' '}en{' '}
                <Link href="/privacy" className="text-primary-600 hover:text-primary-700 underline">
                  privacybeleid
                </Link>.
              </p>
            </div>
            
            <div className="flex items-center gap-3">
              <button
                onClick={handleReject}
                className="px-6 py-2.5 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors font-medium"
              >
                Weigeren
              </button>
              <button
                onClick={handleAccept}
                className="px-6 py-2.5 bg-primary-500 text-white rounded-lg hover:bg-primary-600 transition-colors font-medium"
              >
                Accepteren
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}