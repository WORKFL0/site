'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useState, useEffect } from 'react'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import Button from '@/components/ui/Button'
import { useLanguage } from '@/contexts/LanguageContext'

export default function ShopPage() {
  const [heroRef, heroInView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const { t, language } = useLanguage()
  const [iframeError, setIframeError] = useState(false)

  useEffect(() => {
    // Check if iframe loads properly
    const checkIframe = setTimeout(() => {
      const iframe = document.querySelector('iframe')
      if (iframe) {
        iframe.onerror = () => setIframeError(true)
      }
    }, 1000)
    
    return () => clearTimeout(checkIframe)
  }, [])

  return (
    <>
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative min-h-[30vh] flex items-center bg-gradient-to-br from-gray-50 to-white overflow-hidden">
          <div className="absolute inset-0 bg-grid-gray-100 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
          
          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              ref={heroRef}
              initial={{ opacity: 0, y: 20 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="max-w-4xl"
            >
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                {language === 'nl' ? 'Workflo Winkel' : 'Workflo Store'}
              </h1>
              <p className="text-xl text-gray-600">
                {language === 'nl' 
                  ? 'Ontdek onze selectie van premium IT-producten en diensten'
                  : 'Discover our selection of premium IT products and services'}
              </p>
            </motion.div>
          </div>
        </section>

        {/* Shop Content */}
        <section className="py-4">
          <div className="container mx-auto px-4">
            {!iframeError ? (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-white rounded-2xl shadow-xl overflow-hidden"
                style={{ height: '80vh', minHeight: '600px' }}
              >
                <iframe
                  src="https://app.pax8.com/public/storefronts/workfloit"
                  width="100%"
                  height="100%"
                  frameBorder="0"
                  title="Workflo Store"
                  className="w-full h-full"
                  allowFullScreen
                  onError={() => setIframeError(true)}
                />
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-white rounded-2xl shadow-xl p-12 text-center"
              >
                <div className="max-w-2xl mx-auto">
                  <div className="mb-6">
                    <div className="w-20 h-20 bg-primary-100 rounded-full flex items-center justify-center mx-auto">
                      <svg className="w-10 h-10 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                    </div>
                  </div>
                  
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">
                    {language === 'nl' 
                      ? 'Onze winkel wordt momenteel bijgewerkt'
                      : 'Our store is being updated'}
                  </h2>
                  
                  <p className="text-gray-600 mb-8">
                    {language === 'nl'
                      ? 'Voor productinformatie en bestellingen kunt u direct contact met ons opnemen. Ons team helpt u graag met het vinden van de juiste IT-oplossingen voor uw bedrijf.'
                      : 'For product information and orders, please contact us directly. Our team will be happy to help you find the right IT solutions for your business.'}
                  </p>
                  
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button href="/contact" size="lg">
                      <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                      {language === 'nl' ? 'Neem contact op' : 'Contact us'}
                    </Button>
                    
                    <Button href="tel:0203080465" variant="outline" size="lg">
                      <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                      020-30 80 465
                    </Button>
                  </div>
                  
                  <div className="mt-8 text-sm text-gray-500">
                    <p>
                      {language === 'nl'
                        ? 'Of bezoek onze winkel direct op: '
                        : 'Or visit our store directly at: '}
                      <a 
                        href="https://app.pax8.com/public/storefronts/workfloit" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-primary-600 hover:text-primary-700 underline"
                      >
                        app.pax8.com/public/storefronts/workfloit
                      </a>
                    </p>
                  </div>
                </div>
              </motion.div>
            )}
          </div>
        </section>

        {/* Categories Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              {language === 'nl' ? 'Onze Product Categorieën' : 'Our Product Categories'}
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="bg-white rounded-xl p-6 shadow-lg text-center hover:shadow-xl transition-shadow"
              >
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {language === 'nl' ? 'Hardware' : 'Hardware'}
                </h3>
                <p className="text-gray-600">
                  {language === 'nl' 
                    ? 'Computers, servers, netwerkapparatuur'
                    : 'Computers, servers, network equipment'}
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="bg-white rounded-xl p-6 shadow-lg text-center hover:shadow-xl transition-shadow"
              >
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {language === 'nl' ? 'Software' : 'Software'}
                </h3>
                <p className="text-gray-600">
                  {language === 'nl' 
                    ? 'Microsoft 365, security software, backup oplossingen'
                    : 'Microsoft 365, security software, backup solutions'}
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="bg-white rounded-xl p-6 shadow-lg text-center hover:shadow-xl transition-shadow"
              >
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {language === 'nl' ? 'Cloud Diensten' : 'Cloud Services'}
                </h3>
                <p className="text-gray-600">
                  {language === 'nl' 
                    ? 'Backup, hosting, cloud opslag'
                    : 'Backup, hosting, cloud storage'}
                </p>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}