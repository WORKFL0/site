'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import { useLanguage } from '@/contexts/LanguageContext'

export default function ShopPage() {
  const [heroRef, heroInView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const { t, language } = useLanguage()

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

        {/* Shop Iframe Section */}
        <section className="py-4">
          <div className="container mx-auto px-4">
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
              />
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}