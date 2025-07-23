'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import { useLanguage } from '@/contexts/LanguageContext'

export default function BookingPage() {
  const [heroRef, heroInView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const { language } = useLanguage()

  return (
    <>
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative min-h-[30vh] flex items-center bg-gradient-to-br from-primary-50 to-white overflow-hidden">
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
                {language === 'nl' ? 'Plan een Afspraak' : 'Schedule an Appointment'}
              </h1>
              <p className="text-xl text-gray-600">
                {language === 'nl' 
                  ? 'Kies een geschikt moment voor een persoonlijk gesprek met onze IT-engineers'
                  : 'Choose a convenient time for a personal consultation with our IT engineers'}
              </p>
            </motion.div>
          </div>
        </section>

        {/* Booking Iframe Section */}
        <section className="py-8">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white rounded-2xl shadow-xl overflow-hidden"
              style={{ height: '80vh', minHeight: '600px' }}
            >
              <iframe 
                src='https://outlook.office.com/book/PlaneenafspraakmeteenITengineer@workflo.nl/?ismsaljsauthenabled' 
                width='100%' 
                height='100%' 
                scrolling='yes' 
                style={{ border: 0 }}
                title={language === 'nl' ? 'Plan een afspraak' : 'Schedule appointment'}
              />
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}