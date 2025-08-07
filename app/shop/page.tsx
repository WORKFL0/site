'use client'

import { useState } from 'react'
import Image from 'next/image'

// Self-contained Header Component
const ShopHeader = () => (
  <header className="bg-white shadow-sm fixed top-0 left-0 right-0 z-50">
    <div className="container mx-auto px-4">
      <div className="flex items-center justify-between h-16">
        <div className="flex items-center">
          <Image
            src="/images/logos/workflo-logo-yellow.png"
            alt="Workflo Logo"
            width={120}
            height={40}
            className="h-8 w-auto"
          />
        </div>
        <nav className="hidden md:flex space-x-6">
          <a href="/" className="text-gray-600 hover:text-black transition-colors">Home</a>
          <a href="/services" className="text-gray-600 hover:text-black transition-colors">Diensten</a>
          <a href="/contact" className="text-gray-600 hover:text-black transition-colors">Contact</a>
        </nav>
      </div>
    </div>
  </header>
)

// Self-contained Footer Component
const ShopFooter = () => (
  <footer style={{ backgroundColor: '#f2f400' }} className="text-black py-8">
    <div className="container mx-auto px-4">
      <div className="flex flex-col md:flex-row items-center justify-between">
        <div className="flex items-center mb-4 md:mb-0">
          <Image
            src="/images/logos/workflo-logo-yellow.png"
            alt="Workflo Logo"
            width={100}
            height={32}
            className="h-6 w-auto mr-4"
          />
          <span className="font-semibold">Workflo IT Services</span>
        </div>
        <div className="flex space-x-6 text-sm">
          <span>Amsterdam, Nederland</span>
          <a href="tel:0203080465" className="hover:text-gray-800">020-30 80 465</a>
          <a href="mailto:info@workflo.nl" className="hover:text-gray-800">info@workflo.nl</a>
        </div>
      </div>
    </div>
  </footer>
)

export default function ShopPage() {
  const [isRedirecting, setIsRedirecting] = useState(false)

  const handleShopRedirect = () => {
    setIsRedirecting(true)
    // Small delay to show the loading state
    setTimeout(() => {
      window.open('https://app.pax8.com/public/storefronts/workfloit', '_blank', 'noopener,noreferrer')
      setIsRedirecting(false)
    }, 500)
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <ShopHeader />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="bg-white py-8">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">
                Workflo Shop
              </h1>
              <p className="text-xl text-gray-600 mb-4">
                Professionele IT-producten en -diensten voor uw bedrijf
              </p>
              <p className="text-gray-500">
                Bekijk onze complete catalogus van hardware, software en IT-diensten
              </p>
            </div>
          </div>
        </section>

        {/* Shop Portal Access */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="bg-white rounded-lg shadow-lg p-8 max-w-2xl mx-auto text-center">
              <div className="w-20 h-20 rounded-full mx-auto mb-6 flex items-center justify-center" style={{ backgroundColor: '#f2f400' }}>
                <svg className="w-10 h-10 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14a1 1 0 011 1v7a1 1 0 01-1 1H5a1 1 0 01-1-1v-7a1 1 0 011-1z" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Toegang tot onze Shop
              </h2>
              <p className="text-gray-600 mb-6">
                Klik op de knop hieronder om onze complete productcatalogus te openen in een nieuw venster. Bekijk hardware, software en IT-diensten op maat voor uw bedrijf.
              </p>
              
              {isRedirecting ? (
                <div className="inline-flex items-center justify-center bg-gray-100 text-gray-600 px-8 py-4 rounded-lg font-bold text-lg">
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 mr-3" style={{ borderColor: '#f2f400' }}></div>
                  Shop wordt geopend...
                </div>
              ) : (
                <button 
                  onClick={handleShopRedirect}
                  className="inline-block text-black px-8 py-4 rounded-lg font-bold text-lg hover:opacity-90 transition-colors shadow-lg"
                  style={{ backgroundColor: '#f2f400' }}
                >
                  Open Shop →
                </button>
              )}
              
              <p className="text-sm text-gray-500 mt-4">
                Opent in een nieuw venster
              </p>
              
              <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                <p className="text-sm text-blue-800">
                  Onze shop wordt ondersteund door Pax8 - een veilig platform voor zakelijke IT-aankopen
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Alternative Shopping Options */}
        <section className="py-12 bg-gray-100">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold text-center mb-8">
              Hulp nodig bij uw bestelling?
            </h2>
            
            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <div className="bg-white rounded-lg p-6 text-center shadow">
                <div className="w-12 h-12 rounded-lg mx-auto mb-4 flex items-center justify-center" style={{ backgroundColor: '#f2f400' }}>
                  <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <h3 className="font-semibold mb-2">
                  Telefonisch bestellen
                </h3>
                <p className="text-gray-600 mb-4">
                  Bestel telefonisch bij ons verkoopteam
                </p>
                <a 
                  href="tel:0203080465" 
                  className="font-medium hover:opacity-75"
                  style={{ color: '#f2f400' }}
                >
                  020-30 80 465
                </a>
              </div>

              <div className="bg-white rounded-lg p-6 text-center shadow">
                <div className="w-12 h-12 rounded-lg mx-auto mb-4 flex items-center justify-center" style={{ backgroundColor: '#f2f400' }}>
                  <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="font-semibold mb-2">
                  Offerte via e-mail
                </h3>
                <p className="text-gray-600 mb-4">
                  Vraag een offerte op maat aan
                </p>
                <a 
                  href="mailto:sales@workflo.nl" 
                  className="font-medium hover:opacity-75"
                  style={{ color: '#f2f400' }}
                >
                  sales@workflo.nl
                </a>
              </div>

              <div className="bg-white rounded-lg p-6 text-center shadow">
                <div className="w-12 h-12 rounded-lg mx-auto mb-4 flex items-center justify-center" style={{ backgroundColor: '#f2f400' }}>
                  <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="font-semibold mb-2">
                  Productadvies
                </h3>
                <p className="text-gray-600 mb-4">
                  Krijg deskundig IT-aankoopadvies
                </p>
                <a 
                  href="/contact" 
                  className="font-medium hover:opacity-75"
                  style={{ color: '#f2f400' }}
                >
                  Contact opnemen
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Popular Products */}
        <section className="py-8 bg-white">
          <div className="container mx-auto px-4 text-center">
            <h3 className="text-xl font-semibold mb-4">
              Populaire categorieën
            </h3>
            <div className="max-w-2xl mx-auto">
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <h4 className="font-medium text-gray-900 mb-2">Hardware</h4>
                  <p className="text-gray-600">
                    Laptops, desktops, servers
                  </p>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900 mb-2">Software</h4>
                  <p className="text-gray-600">
                    Microsoft 365, beveiligingstools
                  </p>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900 mb-2">Services</h4>
                  <p className="text-gray-600">
                    Support plannen, cloud migratie
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <ShopFooter />
    </div>
  )
}