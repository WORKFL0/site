'use client'

import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import { motion } from 'framer-motion'
import { useLanguage } from '@/contexts/LanguageContext'

export default function BookingPage() {
  const { t, language } = useLanguage()

  return (
    <>
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative py-16 bg-gradient-to-br from-primary-50 to-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-3xl mx-auto"
            >
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                {language === 'nl' ? 'Plan een Afspraak' : 'Schedule an Appointment'}
              </h1>
              <p className="text-xl text-gray-600">
                {language === 'nl' 
                  ? 'Kies een geschikt moment voor een gesprek met een van onze IT-engineers'
                  : 'Choose a convenient time for a meeting with one of our IT engineers'
                }
              </p>
            </motion.div>
          </div>
        </section>

        {/* Booking Iframe */}
        <section className="py-4">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white rounded-2xl shadow-xl overflow-hidden"
              style={{ height: '800px' }}
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

        {/* Additional Info */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {language === 'nl' ? 'Flexibele tijden' : 'Flexible hours'}
                </h3>
                <p className="text-gray-600">
                  {language === 'nl' 
                    ? 'Afspraken mogelijk tussen 9:00 - 17:00'
                    : 'Appointments available between 9:00 AM - 5:00 PM'
                  }
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {language === 'nl' ? 'Online of op locatie' : 'Online or on-site'}
                </h3>
                <p className="text-gray-600">
                  {language === 'nl' 
                    ? 'Video call of persoonlijk gesprek mogelijk'
                    : 'Video call or in-person meeting available'
                  }
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {language === 'nl' ? 'Direct bevestiging' : 'Instant confirmation'}
                </h3>
                <p className="text-gray-600">
                  {language === 'nl' 
                    ? 'Ontvang direct een bevestiging per e-mail'
                    : 'Receive confirmation via email immediately'
                  }
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