'use client'

import { useState } from 'react'
// import Header from '@/components/layout/Header' // REPLACED
import StaticHeader from '@/components/StaticHeader'
// import Footer from '@/components/layout/Footer' // REPLACED
import StaticFooter from '@/components/StaticFooter'
import { useLanguage } from '@/context/LanguageContext'

export default function SchedulePage() {
  const { language } = useLanguage()
  const [isIframeLoaded, setIsIframeLoaded] = useState(false)
  const [hasIframeError, setHasIframeError] = useState(false)

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
      <StaticHeader />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="bg-white py-8">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">
                {language === 'en' ? 'Schedule a Meeting' : 'Afspraak Inplannen'}
              </h1>
              <p className="text-xl text-gray-600 mb-4">
                {language === 'en' 
                  ? 'Book a convenient time to discuss your IT needs'
                  : 'Plan een geschikt moment om uw IT-behoeften te bespreken'}
              </p>
              <p className="text-gray-500">
                {language === 'en'
                  ? 'Choose from available time slots and we\'ll confirm your appointment within 1 business hour.'
                  : 'Kies uit beschikbare tijdsloten en we bevestigen uw afspraak binnen 1 werkuur.'}
              </p>
            </div>
          </div>
        </section>

        {/* Booking Iframe */}
        <section className="py-4">
          <div className="container mx-auto px-4">
            {!isIframeLoaded && !hasIframeError && (
              <div className="text-center py-16">
                <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-yellow-400"></div>
                <p className="mt-4 text-gray-600">
                  {language === 'en' ? 'Loading booking calendar...' : 'Boekingskalender wordt geladen...'}
                </p>
              </div>
            )}

            {hasIframeError && (
              <div className="text-center py-16">
                <div className="bg-red-50 border border-red-200 rounded-lg p-8 max-w-md mx-auto">
                  <svg className="w-16 h-16 text-red-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.732-.833-2.5 0L4.268 18.5c-.77.833.192 2.5 1.732 2.5z" />
                  </svg>
                  <h3 className="text-lg font-semibold text-red-800 mb-2">
                    {language === 'en' ? 'Booking calendar unavailable' : 'Boekingskalender niet beschikbaar'}
                  </h3>
                  <p className="text-red-600 mb-4">
                    {language === 'en'
                      ? 'The booking calendar cannot be loaded at this moment. Please use one of the alternatives below.'
                      : 'De boekingskalender kan momenteel niet worden geladen. Gebruik een van de onderstaande alternatieven.'}
                  </p>
                  <div className="space-y-2">
                    <a 
                      href="https://outlook.office.com/book/PlaneenafspraakmeteenITengineer@workflo.nl/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block bg-yellow-400 text-black px-4 py-2 rounded hover:bg-yellow-500 transition-colors"
                    >
                      {language === 'en' ? 'Open in new window' : 'Open in nieuw venster'}
                    </a>
                  </div>
                </div>
              </div>
            )}

            <div className="bg-white rounded-lg shadow-lg overflow-hidden" style={{ minHeight: '700px' }}>
              <iframe
                src="https://outlook.office.com/book/PlaneenafspraakmeteenITengineer@workflo.nl/"
                width="100%"
                height="700"
                style={{ border: 'none', minHeight: '700px' }}
                title="Workflo Booking Calendar"
                onLoad={handleIframeLoad}
                onError={handleIframeError}
                className={hasIframeError ? 'hidden' : 'block'}
              />
            </div>
          </div>
        </section>

        {/* Alternative Contact Options */}
        <section className="py-12 bg-gray-100">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold text-center mb-8">
              {language === 'en' ? 'Other ways to reach us' : 'Andere manieren om ons te bereiken'}
            </h2>
            
            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <div className="bg-white rounded-lg p-6 text-center shadow">
                <div className="w-12 h-12 bg-yellow-400 rounded-lg mx-auto mb-4 flex items-center justify-center">
                  <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <h3 className="font-semibold mb-2">
                  {language === 'en' ? 'Call directly' : 'Direct bellen'}
                </h3>
                <p className="text-gray-600 mb-4">
                  {language === 'en' ? 'Speak with our team immediately' : 'Spreek direct met ons team'}
                </p>
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
                <h3 className="font-semibold mb-2">
                  {language === 'en' ? 'Email us' : 'E-mail ons'}
                </h3>
                <p className="text-gray-600 mb-4">
                  {language === 'en' ? 'Get a response within 4 hours' : 'Krijg binnen 4 uur antwoord'}
                </p>
                <a 
                  href="mailto:info@workflo.nl" 
                  className="text-yellow-600 hover:text-yellow-700 font-medium"
                >
                  info@workflo.nl
                </a>
              </div>

              <div className="bg-white rounded-lg p-6 text-center shadow">
                <div className="w-12 h-12 bg-yellow-400 rounded-lg mx-auto mb-4 flex items-center justify-center">
                  <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                </div>
                <h3 className="font-semibold mb-2">WhatsApp</h3>
                <p className="text-gray-600 mb-4">
                  {language === 'en' ? 'Quick questions? Chat with us' : 'Snelle vragen? Chat met ons'}
                </p>
                <a 
                  href="https://wa.me/31203080465" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-yellow-600 hover:text-yellow-700 font-medium"
                >
                  {language === 'en' ? 'Start chat' : 'Start chat'}
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Meeting Types */}
        <section className="py-8 bg-white">
          <div className="container mx-auto px-4 text-center">
            <h3 className="text-xl font-semibold mb-4">
              {language === 'en' ? 'Meeting Options' : 'Vergaderopties'}
            </h3>
            <div className="max-w-2xl mx-auto">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-medium text-gray-900 mb-2">
                    {language === 'en' ? 'Virtual Meeting' : 'Virtuele vergadering'}
                  </h4>
                  <p className="text-gray-600">
                    {language === 'en' 
                      ? 'Video call via Microsoft Teams or Zoom'
                      : 'Videogesprek via Microsoft Teams of Zoom'}
                  </p>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900 mb-2">
                    {language === 'en' ? 'Office Visit' : 'Kantoorbezoek'}
                  </h4>
                  <p className="text-gray-600">
                    {language === 'en'
                      ? 'Meet us at our Amsterdam office'
                      : 'Ontmoet ons op ons kantoor in Amsterdam'}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <StaticFooter />
    </div>
  )
}