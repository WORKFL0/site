'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useLanguage } from '@/contexts/LanguageContext'

interface CookiePreferences {
  necessary: boolean
  analytics: boolean
  marketing: boolean
}

export default function CookieBanner() {
  const [showBanner, setShowBanner] = useState(false)
  const [showDetails, setShowDetails] = useState(false)
  const [preferences, setPreferences] = useState<CookiePreferences>({
    necessary: true,
    analytics: false,
    marketing: false,
  })
  const { t } = useLanguage()

  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent')
    if (!consent) {
      setShowBanner(true)
    }
  }, [])

  const acceptAll = () => {
    const allAccepted = { necessary: true, analytics: true, marketing: true }
    localStorage.setItem('cookieConsent', JSON.stringify(allAccepted))
    setShowBanner(false)
    // Initialize analytics if accepted
    if (allAccepted.analytics) {
      // Initialize Vercel Analytics or other analytics
    }
  }

  const acceptSelected = () => {
    localStorage.setItem('cookieConsent', JSON.stringify(preferences))
    setShowBanner(false)
    // Initialize analytics if accepted
    if (preferences.analytics) {
      // Initialize Vercel Analytics or other analytics
    }
  }

  const rejectAll = () => {
    const rejected = { necessary: true, analytics: false, marketing: false }
    localStorage.setItem('cookieConsent', JSON.stringify(rejected))
    setShowBanner(false)
  }

  if (!showBanner) return null

  return (
    <AnimatePresence>
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 100, opacity: 0 }}
        className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-gray-200 shadow-lg"
      >
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col gap-4">
            <div className="flex items-start justify-between gap-4">
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {t.cookies.title}
                </h3>
                <p className="text-sm text-gray-600">
                  {t.cookies.description}
                </p>
              </div>
              <button
                onClick={() => setShowDetails(!showDetails)}
                className="text-sm text-primary-600 hover:text-primary-700 font-medium"
              >
                {showDetails ? 'Verberg details' : 'Toon details'}
              </button>
            </div>

            {showDetails && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                className="space-y-3 border-t pt-4"
              >
                <label className="flex items-start gap-3">
                  <input
                    type="checkbox"
                    checked={preferences.necessary}
                    disabled
                    className="mt-1"
                  />
                  <div className="flex-1">
                    <p className="font-medium text-gray-900">{t.cookies.necessary}</p>
                    <p className="text-sm text-gray-600">{t.cookies.necessaryDesc}</p>
                  </div>
                </label>

                <label className="flex items-start gap-3">
                  <input
                    type="checkbox"
                    checked={preferences.analytics}
                    onChange={(e) => setPreferences({ ...preferences, analytics: e.target.checked })}
                    className="mt-1"
                  />
                  <div className="flex-1">
                    <p className="font-medium text-gray-900">{t.cookies.analytics}</p>
                    <p className="text-sm text-gray-600">{t.cookies.analyticsDesc}</p>
                  </div>
                </label>

                <label className="flex items-start gap-3">
                  <input
                    type="checkbox"
                    checked={preferences.marketing}
                    onChange={(e) => setPreferences({ ...preferences, marketing: e.target.checked })}
                    className="mt-1"
                  />
                  <div className="flex-1">
                    <p className="font-medium text-gray-900">{t.cookies.marketing}</p>
                    <p className="text-sm text-gray-600">{t.cookies.marketingDesc}</p>
                  </div>
                </label>
              </motion.div>
            )}

            <div className="flex flex-wrap gap-3">
              <button
                onClick={acceptAll}
                className="px-6 py-2.5 bg-primary-500 text-white rounded-lg hover:bg-primary-600 transition-colors font-medium"
              >
                {t.cookies.acceptAll}
              </button>
              {showDetails && (
                <button
                  onClick={acceptSelected}
                  className="px-6 py-2.5 bg-gray-200 text-gray-900 rounded-lg hover:bg-gray-300 transition-colors font-medium"
                >
                  {t.cookies.acceptSelected}
                </button>
              )}
              <button
                onClick={rejectAll}
                className="px-6 py-2.5 bg-white text-gray-700 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors font-medium"
              >
                {t.cookies.rejectAll}
              </button>
            </div>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  )
}