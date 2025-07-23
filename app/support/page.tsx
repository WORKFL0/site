'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import Button from '@/components/ui/Button'

export default function SupportPage() {
  const [heroRef, heroInView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const [contentRef, contentInView] = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <>
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative min-h-[40vh] flex items-center bg-gradient-to-br from-primary-50 to-white overflow-hidden">
          <div className="absolute inset-0 bg-grid-gray-100 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
          
          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              ref={heroRef}
              initial={{ opacity: 0, y: 20 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="max-w-4xl"
            >
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                24/7 <span className="text-gradient">IT Support</span> Voor Jouw Bedrijf
              </h1>
              <p className="text-xl lg:text-2xl text-gray-600">
                Direct hulp nodig? Gebruik onze remote support tool of neem contact op voor persoonlijke ondersteuning.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Support Options */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Remote Support */}
              <motion.div
                ref={contentRef}
                initial={{ opacity: 0, x: -20 }}
                animate={contentInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6 }}
                className="bg-white rounded-2xl shadow-xl p-8"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z" />
                    </svg>
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900">Remote Support</h2>
                </div>
                
                <p className="text-gray-600 mb-6">
                  Download onze TeamViewer QuickSupport module voor directe hulp. 
                  Onze engineers kunnen veilig meekijken en problemen direct oplossen.
                </p>

                <div className="space-y-4">
                  <a
                    href="https://get.teamviewer.com/workflo-support"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full px-6 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium flex items-center justify-center gap-3"
                  >
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M10 2v2.26l2 1.33V2h10v10h-4.59l1.33 2H22V2H10zM2 4v16h16v-7.59l2-1.33V22H0V4h2zm7.59 4l-2-2H4v10h10v-3.59l-2-2v1.59H8V8zM10 8.91V12h3.09L10 8.91z"/>
                    </svg>
                    Download TeamViewer Support
                  </a>
                  
                  <div className="bg-blue-50 rounded-lg p-4">
                    <p className="text-sm text-blue-900">
                      <strong>Support ID:</strong> Deel je TeamViewer ID met onze support engineer
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Contact Support */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={contentInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="bg-white rounded-2xl shadow-xl p-8"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-primary-600" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                    </svg>
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900">Contact Support</h2>
                </div>
                
                <p className="text-gray-600 mb-6">
                  Liever persoonlijk contact? Onze support engineers staan klaar om je te helpen.
                </p>

                <div className="space-y-4">
                  <a
                    href="tel:0203080465"
                    className="w-full px-6 py-4 bg-primary-500 text-white rounded-lg hover:bg-primary-600 transition-colors font-medium flex items-center justify-center gap-3"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    Bel 020-30 80 465
                  </a>
                  
                  <a
                    href="mailto:support@workflo.nl"
                    className="w-full px-6 py-4 bg-gray-100 text-gray-900 rounded-lg hover:bg-gray-200 transition-colors font-medium flex items-center justify-center gap-3"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    Email support@workflo.nl
                  </a>
                  
                  <div className="bg-green-50 rounded-lg p-4">
                    <p className="text-sm text-green-900">
                      <strong>Gemiddelde reactietijd:</strong> 15 minuten tijdens kantooruren
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Support Hours */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={contentInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-12 bg-gray-50 rounded-2xl p-8 text-center"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Support Tijden</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Standaard Support</h4>
                  <p className="text-gray-600">Ma-Vr: 9:00 - 17:00</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Contract Klanten</h4>
                  <p className="text-gray-600">24/7 beschikbaar</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Noodgevallen</h4>
                  <p className="text-gray-600">Altijd bereikbaar</p>
                </div>
              </div>
            </motion.div>

            {/* Support Portal Iframe */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={contentInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-12"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Support Portal</h3>
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
                <iframe
                  src="https://servicedesk.workflo.it/portal"
                  width="100%"
                  height="600"
                  frameBorder="0"
                  title="Workflo Support Portal"
                  className="w-full"
                />
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}