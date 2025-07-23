'use client'

import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import { motion } from 'framer-motion'
import { useLanguage } from '@/contexts/LanguageContext'

export default function OnboardingPage() {
  const { language } = useLanguage()

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
                {language === 'nl' ? 'Klant Onboarding' : 'Client Onboarding'}
              </h1>
              <p className="text-xl text-gray-600">
                {language === 'nl' 
                  ? 'Welkom bij Workflo! Vul het formulier in zodat we je account kunnen configureren.'
                  : 'Welcome to Workflo! Please fill out the form so we can set up your account.'
                }
              </p>
            </motion.div>
          </div>
        </section>

        {/* Onboarding Form Iframe */}
        <section className="py-4">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white rounded-2xl shadow-xl overflow-hidden max-w-4xl mx-auto"
            >
              <iframe 
                width="100%" 
                height="800px" 
                src="https://forms.office.com/e/VTeqZDGwXZ?embed=true" 
                frameBorder="0" 
                marginWidth="0" 
                marginHeight="0" 
                style={{ border: 'none', maxWidth:'100%', maxHeight:'100vh' }} 
                allowFullScreen 
                webkitallowfullscreen="true" 
                mozallowfullscreen="true" 
                msallowfullscreen="true"
                title={language === 'nl' ? 'Onboarding Formulier' : 'Onboarding Form'}
              />
            </motion.div>
          </div>
        </section>

        {/* Info Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                {language === 'nl' ? 'Wat gebeurt er daarna?' : 'What happens next?'}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">1️⃣</span>
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    {language === 'nl' ? 'Account Setup' : 'Account Setup'}
                  </h3>
                  <p className="text-gray-600">
                    {language === 'nl' 
                      ? 'We configureren je account binnen 24 uur'
                      : 'We\'ll set up your account within 24 hours'
                    }
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">2️⃣</span>
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    {language === 'nl' ? 'Kickoff Meeting' : 'Kickoff Meeting'}
                  </h3>
                  <p className="text-gray-600">
                    {language === 'nl' 
                      ? 'We plannen een kennismakingsgesprek'
                      : 'We\'ll schedule an introductory meeting'
                    }
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">3️⃣</span>
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    {language === 'nl' ? 'Aan de slag!' : 'Get Started!'}
                  </h3>
                  <p className="text-gray-600">
                    {language === 'nl' 
                      ? 'Je krijgt toegang tot alle tools en support'
                      : 'You\'ll get access to all tools and support'
                    }
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}