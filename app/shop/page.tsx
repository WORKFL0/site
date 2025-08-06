'use client'

import { useState } from 'react'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import { useLanguage } from '@/context/LanguageContext'

export default function ShopPage() {
  const [isRedirecting, setIsRedirecting] = useState(false)
  const { language } = useLanguage()

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
      <Header />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="bg-white py-8">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">
                Workflo Shop
              </h1>
              <p className="text-xl text-gray-600 mb-4">
                {language === 'en' 
                  ? 'Professional IT products and services for your business'
                  : 'Professionele IT-producten en -diensten voor uw bedrijf'}
              </p>
              <p className="text-gray-500">
                {language === 'en'
                  ? 'Browse our complete catalog of hardware, software, and IT services'
                  : 'Bekijk onze complete catalogus van hardware, software en IT-diensten'}
              </p>
            </div>
          </div>
        </section>

        {/* Shop Portal Access */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="bg-white rounded-lg shadow-lg p-8 max-w-2xl mx-auto text-center">
              <div className="w-20 h-20 bg-yellow-400 rounded-full mx-auto mb-6 flex items-center justify-center">
                <svg className="w-10 h-10 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14a1 1 0 011 1v7a1 1 0 01-1 1H5a1 1 0 01-1-1v-7a1 1 0 011-1z" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                {language === 'en' ? 'Access Our Shop' : 'Toegang tot onze Shop'}
              </h2>
              <p className="text-gray-600 mb-6">
                {language === 'en' 
                  ? 'Click the button below to open our complete product catalog in a new window. Browse hardware, software, and IT services tailored for your business.'
                  : 'Klik op de knop hieronder om onze complete productcatalogus te openen in een nieuw venster. Bekijk hardware, software en IT-diensten op maat voor uw bedrijf.'}
              </p>
              
              {isRedirecting ? (
                <div className="inline-flex items-center justify-center bg-gray-100 text-gray-600 px-8 py-4 rounded-lg font-bold text-lg">
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-yellow-400 mr-3"></div>
                  {language === 'en' ? 'Opening shop...' : 'Shop wordt geopend...'}
                </div>
              ) : (
                <button 
                  onClick={handleShopRedirect}
                  className="inline-block bg-yellow-400 text-black px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-500 transition-colors shadow-lg"
                >
                  {language === 'en' ? 'Open Shop →' : 'Open Shop →'}
                </button>
              )}
              
              <p className="text-sm text-gray-500 mt-4">
                {language === 'en' ? 'Opens in a new window' : 'Opent in een nieuw venster'}
              </p>
              
              <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                <p className="text-sm text-blue-800">
                  {language === 'en' 
                    ? 'Our shop is powered by Pax8 - a secure platform for business IT purchases'
                    : 'Onze shop wordt ondersteund door Pax8 - een veilig platform voor zakelijke IT-aankopen'}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Alternative Shopping Options */}
        <section className="py-12 bg-gray-100">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold text-center mb-8">
              {language === 'en' ? 'Need Help with Your Order?' : 'Hulp nodig bij uw bestelling?'}
            </h2>
            
            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <div className="bg-white rounded-lg p-6 text-center shadow">
                <div className="w-12 h-12 bg-yellow-400 rounded-lg mx-auto mb-4 flex items-center justify-center">
                  <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <h3 className="font-semibold mb-2">
                  {language === 'en' ? 'Phone Orders' : 'Telefonisch bestellen'}
                </h3>
                <p className="text-gray-600 mb-4">
                  {language === 'en' ? 'Order by phone with our sales team' : 'Bestel telefonisch bij ons verkoopteam'}
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
                  {language === 'en' ? 'Email Quote' : 'Offerte via e-mail'}
                </h3>
                <p className="text-gray-600 mb-4">
                  {language === 'en' ? 'Request a custom quote' : 'Vraag een offerte op maat aan'}
                </p>
                <a 
                  href="mailto:sales@workflo.nl" 
                  className="text-yellow-600 hover:text-yellow-700 font-medium"
                >
                  sales@workflo.nl
                </a>
              </div>

              <div className="bg-white rounded-lg p-6 text-center shadow">
                <div className="w-12 h-12 bg-yellow-400 rounded-lg mx-auto mb-4 flex items-center justify-center">
                  <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="font-semibold mb-2">
                  {language === 'en' ? 'Product Advice' : 'Productadvies'}
                </h3>
                <p className="text-gray-600 mb-4">
                  {language === 'en' ? 'Get expert IT purchasing advice' : 'Krijg deskundig IT-aankoopadvies'}
                </p>
                <a 
                  href="/contact" 
                  className="text-yellow-600 hover:text-yellow-700 font-medium"
                >
                  {language === 'en' ? 'Contact us' : 'Contact opnemen'}
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Popular Products */}
        <section className="py-8 bg-white">
          <div className="container mx-auto px-4 text-center">
            <h3 className="text-xl font-semibold mb-4">
              {language === 'en' ? 'Popular Categories' : 'Populaire categorieën'}
            </h3>
            <div className="max-w-2xl mx-auto">
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <h4 className="font-medium text-gray-900 mb-2">Hardware</h4>
                  <p className="text-gray-600">
                    {language === 'en' 
                      ? 'Laptops, desktops, servers'
                      : 'Laptops, desktops, servers'}
                  </p>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900 mb-2">Software</h4>
                  <p className="text-gray-600">
                    {language === 'en'
                      ? 'Microsoft 365, security tools'
                      : 'Microsoft 365, beveiligingstools'}
                  </p>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900 mb-2">Services</h4>
                  <p className="text-gray-600">
                    {language === 'en'
                      ? 'Support plans, cloud migration'
                      : 'Support plannen, cloud migratie'}
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