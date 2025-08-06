'use client'

import { useEffect, useState } from 'react'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

export default function SupportPage() {
  const [isIframeLoaded, setIsIframeLoaded] = useState(false)
  const [hasIframeError, setHasIframeError] = useState(false)

  useEffect(() => {
    // Handle iframe timeout
    const timeout = setTimeout(() => {
      if (!isIframeLoaded) {
        setHasIframeError(true)
      }
    }, 10000) // 10 second timeout

    return () => clearTimeout(timeout)
  }, [isIframeLoaded])

  const handleIframeLoad = () => {
    setIsIframeLoaded(true)
    setHasIframeError(false)
  }

  const handleIframeError = () => {
    setHasIframeError(true)
    setIsIframeLoaded(false)
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="bg-white py-8">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">
                IT Support Portal
              </h1>
              <p className="text-xl text-gray-600 mb-4">
                Toegang tot ons complete support portaal
              </p>
              <p className="text-gray-500">
                Dien tickets in, volg de status van uw aanvragen en krijg direct hulp van ons support team.
              </p>
            </div>
          </div>
        </section>

        {/* Support Portal Link */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="bg-white rounded-lg shadow-lg p-8 max-w-2xl mx-auto text-center">
              <div className="w-20 h-20 bg-yellow-400 rounded-full mx-auto mb-6 flex items-center justify-center">
                <svg className="w-10 h-10 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Toegang tot Support Portal
              </h2>
              <p className="text-gray-600 mb-6">
                Klik op de knop hieronder om ons support portal te openen in een nieuw venster. 
                Hier kunt u tickets indienen, de status van uw aanvragen volgen en documentatie raadplegen.
              </p>
              <a 
                href="https://servicedesk.workflo.it/portal/" 
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-yellow-400 text-black px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-500 transition-colors shadow-lg"
              >
                Open Support Portal →
              </a>
              <p className="text-sm text-gray-500 mt-4">
                Opens in een nieuw venster
              </p>
            </div>
          </div>
        </section>

        {/* Alternative Support Options */}
        <section className="py-12 bg-gray-100">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold text-center mb-8">Andere manieren om hulp te krijgen</h2>
            
            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <div className="bg-white rounded-lg p-6 text-center shadow">
                <div className="w-12 h-12 bg-yellow-400 rounded-lg mx-auto mb-4 flex items-center justify-center">
                  <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <h3 className="font-semibold mb-2">Telefonische Support</h3>
                <p className="text-gray-600 mb-4">Bel ons direct voor urgente zaken</p>
                <a 
                  href="tel:0203080465" 
                  className="text-yellow-600 hover:text-yellow-700 font-medium"
                >
                  020-30 80 465
                </a>
              </div>

              <div className="bg-white rounded-lg p-6 text-center shadow">
                <div className="w-12 h-12 bg-yellow-400 rounded-lg mx-auto mb-4 flex items-center justify-center">
                  <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="font-semibold mb-2">E-mail Support</h3>
                <p className="text-gray-600 mb-4">Stuur ons een gedetailleerde beschrijving</p>
                <a 
                  href="mailto:support@workflo.nl" 
                  className="text-yellow-600 hover:text-yellow-700 font-medium"
                >
                  support@workflo.nl
                </a>
              </div>

              <div className="bg-white rounded-lg p-6 text-center shadow">
                <div className="w-12 h-12 bg-yellow-400 rounded-lg mx-auto mb-4 flex items-center justify-center">
                  <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                  </svg>
                </div>
                <h3 className="font-semibold mb-2">Remote Support</h3>
                <p className="text-gray-600 mb-4">Directe hulp via scherm delen</p>
                <a 
                  href="https://get.teamviewer.com/workflo-support" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-yellow-600 hover:text-yellow-700 font-medium"
                >
                  Start sessie
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Support Hours */}
        <section className="py-8 bg-white">
          <div className="container mx-auto px-4 text-center">
            <h3 className="text-xl font-semibold mb-4">Support Beschikbaarheid</h3>
            <div className="max-w-2xl mx-auto">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-medium text-gray-900 mb-2">Standaard Support</h4>
                  <p className="text-gray-600">
                    Maandag t/m Vrijdag<br />
                    08:00 - 18:00 CET
                  </p>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900 mb-2">24/7 Support</h4>
                  <p className="text-gray-600">
                    Beschikbaar voor kritieke systemen<br />
                    (Premium Support klanten)
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}