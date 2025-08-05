'use client'

import { useEffect, useState } from 'react'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

export default function ShopPage() {
  const [isLoading, setIsLoading] = useState(true)
  const [hasError, setHasError] = useState(false)

  useEffect(() => {
    // Simulate iframe loading timeout check
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 3000)

    // Error handling for iframe timeout
    const errorTimer = setTimeout(() => {
      setHasError(true)
      setIsLoading(false)
    }, 10000)

    return () => {
      clearTimeout(timer)
      clearTimeout(errorTimer)
    }
  }, [])

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="bg-white py-16">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">
                Workflo Shop
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Professionele IT-producten en -diensten voor uw bedrijf
              </p>
            </div>
          </div>
        </section>

        {/* Shop Content */}
        <section className="py-8">
          <div className="container mx-auto px-4">
            {isLoading && !hasError && (
              <div className="text-center py-16">
                <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-yellow-400"></div>
                <p className="mt-4 text-gray-600">Shop wordt geladen...</p>
              </div>
            )}

            {hasError && (
              <div className="text-center py-16">
                <div className="bg-red-50 border border-red-200 rounded-lg p-8 max-w-md mx-auto">
                  <svg className="w-16 h-16 text-red-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.732-.833-2.5 0L4.268 18.5c-.77.833.192 2.5 1.732 2.5z" />
                  </svg>
                  <h3 className="text-lg font-semibold text-red-800 mb-2">Shop tijdelijk niet beschikbaar</h3>
                  <p className="text-red-600 mb-4">
                    De shop kan momenteel niet geladen worden. Probeer het later opnieuw of neem contact met ons op.
                  </p>
                  <div className="space-y-2">
                    <a 
                      href="mailto:info@workflo.nl" 
                      className="inline-block bg-red-100 text-red-800 px-4 py-2 rounded hover:bg-red-200 transition-colors"
                    >
                      E-mail ons
                    </a>
                    <a 
                      href="tel:0203080465" 
                      className="inline-block bg-red-100 text-red-800 px-4 py-2 rounded hover:bg-red-200 transition-colors ml-2"
                    >
                      Bel ons
                    </a>
                  </div>
                </div>
              </div>
            )}

            {!isLoading && !hasError && (
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="p-6 border-b border-gray-200">
                  <h2 className="text-2xl font-bold text-gray-900">IT-Producten en Diensten</h2>
                  <p className="text-gray-600 mt-2">
                    Ontdek ons complete aanbod van professionele IT-oplossingen
                  </p>
                </div>
                
                {/* Product Categories */}
                <div className="p-6">
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div className="bg-gray-50 rounded-lg p-6">
                      <h3 className="font-semibold text-lg mb-3">Hardware</h3>
                      <ul className="space-y-2 text-gray-600">
                        <li>• Laptops & Desktops</li>
                        <li>• Servers & Storage</li>
                        <li>• Netwerk Equipment</li>
                        <li>• Security Hardware</li>
                      </ul>
                    </div>
                    
                    <div className="bg-gray-50 rounded-lg p-6">
                      <h3 className="font-semibold text-lg mb-3">Software</h3>
                      <ul className="space-y-2 text-gray-600">
                        <li>• Microsoft 365</li>
                        <li>• Security Software</li>
                        <li>• Backup Solutions</li>
                        <li>• Productivity Tools</li>
                      </ul>
                    </div>
                    
                    <div className="bg-gray-50 rounded-lg p-6">
                      <h3 className="font-semibold text-lg mb-3">Services</h3>
                      <ul className="space-y-2 text-gray-600">
                        <li>• IT Support Abonnementen</li>
                        <li>• Cloud Migratie</li>
                        <li>• Security Audits</li>
                        <li>• Training & Consultancy</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Contact for Pricing */}
                <div className="bg-yellow-50 p-6 text-center">
                  <h3 className="text-xl font-semibold mb-2">Op maat gemaakte oplossingen</h3>
                  <p className="text-gray-600 mb-4">
                    Elke organisatie is uniek. Wij bieden maatwerk voor uw specifieke IT-behoeften.
                  </p>
                  <div className="space-x-4">
                    <a 
                      href="/contact" 
                      className="inline-block bg-yellow-400 text-black px-6 py-3 rounded-lg font-semibold hover:bg-yellow-500 transition-colors"
                    >
                      Vraag offerte aan
                    </a>
                    <a 
                      href="/tevredenheidscheck" 
                      className="inline-block bg-white text-gray-700 px-6 py-3 rounded-lg font-semibold border border-gray-300 hover:bg-gray-50 transition-colors"
                    >
                      Start IT Health Check
                    </a>
                  </div>
                </div>
              </div>
            )}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}