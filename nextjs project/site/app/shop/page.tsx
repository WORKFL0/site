'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'

export default function ShopPage() {
  const [isLoading, setIsLoading] = useState(true)
  const [hasError, setHasError] = useState(false)

  useEffect(() => {
    // Set a timeout to handle if the iframe doesn't load
    const timeout = setTimeout(() => {
      setIsLoading(false)
      // If still loading after timeout, show error
      if (isLoading) {
        setHasError(true)
      }
    }, 10000) // Increased timeout to 10 seconds

    return () => clearTimeout(timeout)
  }, [])

  const handleIframeLoad = () => {
    setIsLoading(false)
  }

  const handleIframeError = () => {
    setIsLoading(false)
    setHasError(true)
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="relative py-10 overflow-hidden">
        <div className="absolute inset-0 bg-grid-gray-100 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
        
        <div className="container mx-auto container-padding relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Workflo <span className="text-gradient">Shop</span>
            </h1>
            <p className="text-xl text-gray-600 mb-6">
              Bestel direct de beste IT-producten en diensten voor jouw bedrijf
            </p>
            <div className="flex items-center justify-center gap-4 text-sm text-gray-500">
              <span className="flex items-center gap-2">
                <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Veilig betalen
              </span>
              <span className="flex items-center gap-2">
                <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Snelle levering
              </span>
              <span className="flex items-center gap-2">
                <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Zakelijke prijzen
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Shop iframe Section */}
      <section className="pb-20">
        <div className="container mx-auto container-padding">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden relative">
            {/* Loading State */}
            {isLoading && (
              <div className="absolute inset-0 bg-white z-10 flex flex-col items-center justify-center">
                <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-primary-500 mb-4"></div>
                <p className="text-gray-600">Shop wordt geladen...</p>
              </div>
            )}

            {/* Error State */}
            {hasError && (
              <div className="absolute inset-0 bg-white z-10 flex flex-col items-center justify-center p-8 text-center">
                <svg className="w-16 h-16 text-red-500 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Shop tijdelijk niet beschikbaar</h3>
                <p className="text-gray-600 mb-6 max-w-md">
                  De externe shop kan momenteel niet worden geladen. 
                  Dit kan komen door beveiligingsinstellingen of tijdelijke onbeschikbaarheid.
                </p>
                <div className="flex gap-4">
                  <Link
                    href="/contact"
                    className="px-6 py-2 bg-primary-500 text-white rounded-lg hover:bg-primary-600 transition-colors"
                  >
                    Contact
                  </Link>
                  <button
                    onClick={() => window.location.reload()}
                    className="px-6 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    Probeer opnieuw
                  </button>
                </div>
              </div>
            )}

            {/* Pax8 Store iframe with sandbox for security */}
            <iframe
              src="https://app.pax8.com/public/storefronts/workfloit"
              width="100%"
              height="800"
              style={{ border: 0, minHeight: '800px' }}
              onLoad={handleIframeLoad}
              onError={handleIframeError}
              title="Workflo Shop - Pax8 Storefront"
              className="w-full"
              sandbox="allow-same-origin allow-scripts allow-forms allow-popups"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          {/* Info Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            <div className="bg-white rounded-xl shadow-lg p-6 text-center">
              <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Veilig & Betrouwbaar</h3>
              <p className="text-gray-600 text-sm">
                Alle transacties zijn beveiligd en worden verwerkt via onze vertrouwde partner Pax8.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6 text-center">
              <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Direct Activeren</h3>
              <p className="text-gray-600 text-sm">
                Software licenties worden direct geactiveerd. Hardware wordt binnen 1-3 werkdagen geleverd.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6 text-center">
              <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Support Inbegrepen</h3>
              <p className="text-gray-600 text-sm">
                Bij elke aankoop krijg je toegang tot onze professionele support voor installatie en configuratie.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}