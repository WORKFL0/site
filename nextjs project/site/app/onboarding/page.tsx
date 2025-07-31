'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'

export default function OnboardingPage() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Set loading to false after a short delay
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 1000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-grid-gray-100 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
        
        <div className="container mx-auto container-padding relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Welkom bij <span className="text-gradient">Workflo</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Start hier jouw IT-onboarding proces. In enkele stappen zorgen we ervoor dat alles perfect is ingesteld.
            </p>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              Duurt ongeveer 10-15 minuten
            </div>
          </div>
        </div>
      </section>

      {/* Onboarding Form Section */}
      <section className="pb-20">
        <div className="container mx-auto container-padding">
          <div className="max-w-5xl mx-auto">
            {/* Progress Steps */}
            <div className="mb-12">
              <div className="flex items-center justify-center">
                <div className="flex items-center">
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-primary-500 text-white rounded-full flex items-center justify-center font-bold">
                      1
                    </div>
                    <span className="ml-3 text-gray-900 font-medium">Bedrijfsgegevens</span>
                  </div>
                  <div className="w-20 h-1 bg-gray-300 mx-4"></div>
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-gray-300 text-gray-600 rounded-full flex items-center justify-center font-bold">
                      2
                    </div>
                    <span className="ml-3 text-gray-600">IT Requirements</span>
                  </div>
                  <div className="w-20 h-1 bg-gray-300 mx-4"></div>
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-gray-300 text-gray-600 rounded-full flex items-center justify-center font-bold">
                      3
                    </div>
                    <span className="ml-3 text-gray-600">Bevestiging</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Form Container */}
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden relative">
              {/* Loading State */}
              {isLoading && (
                <div className="absolute inset-0 bg-white z-10 flex flex-col items-center justify-center">
                  <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-primary-500 mb-4"></div>
                  <p className="text-gray-600">Formulier wordt geladen...</p>
                </div>
              )}

              {/* Microsoft Forms iframe */}
              <iframe 
                width="100%" 
                height="800px" 
                src="https://forms.office.com/e/VTeqZDGwXZ?embed=true" 
                frameBorder="0" 
                marginWidth="0" 
                marginHeight="0" 
                style={{ border: 'none', maxWidth:'100%', maxHeight:'100vh' }} 
                allowFullScreen 
                onLoad={() => setIsLoading(false)}
              >
              </iframe>
            </div>

            {/* Info Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
              <div className="bg-white rounded-xl shadow-lg p-6">
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Veilige Gegevensverwerking</h3>
                <p className="text-gray-600 text-sm">
                  Al jouw gegevens worden veilig verwerkt volgens AVG-richtlijnen.
                </p>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-6">
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Snelle Opstart</h3>
                <p className="text-gray-600 text-sm">
                  Na het invullen beginnen we direct met de setup van jouw IT-omgeving.
                </p>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-6">
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Persoonlijke Begeleiding</h3>
                <p className="text-gray-600 text-sm">
                  Een dedicated engineer begeleidt je door het hele proces.
                </p>
              </div>
            </div>

            {/* Contact Support */}
            <div className="text-center mt-12 p-8 bg-gray-50 rounded-2xl">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Hulp nodig?</h3>
              <p className="text-gray-600 mb-4">
                Onze support team staat klaar om je te helpen met het onboarding proces.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:0203080465"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  020-30 80 465
                </a>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary-500 text-white rounded-lg hover:bg-primary-600 transition-colors"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  Stuur een bericht
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}