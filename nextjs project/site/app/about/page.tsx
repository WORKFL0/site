'use client'

import HeroSection from '@/components/sections/HeroSection'
import TeamSection from '@/components/sections/TeamSection'
import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-grid-gray-100 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
        
        <div className="container mx-auto container-padding relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6"
            >
              Jouw Lokale <span className="text-gradient">IT Partner</span> in Amsterdam
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-xl text-gray-600 mb-8"
            >
              Al meer dan 10 jaar helpen we Amsterdamse MKB'ers groeien met slimme IT-oplossingen. 
              Van startup tot scale-up, wij kennen jouw uitdagingen.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20">
        <div className="container mx-auto container-padding">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Van IT-probleem naar groei-accelerator
              </h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  Workflo is ontstaan uit frustratie. Frustratie over IT die niet werkt, 
                  over support die je niet begrijpt, en over facturen die je niet kan controleren.
                </p>
                <p>
                  We merkten dat veel Amsterdamse ondernemers worstelden met dezelfde problemen: 
                  IT die hun groei remt in plaats van versnelt. Daarom besloten we het anders te doen.
                </p>
                <p>
                  Vandaag zijn we de vertrouwde IT-partner van meer dan 100 bedrijven in Amsterdam 
                  en omgeving. Van advocatenkantoren aan de Zuidas tot creatieve bureaus in Noord - 
                  we kennen de stad en haar ondernemers.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-primary-100 rounded-2xl p-8">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-primary-600 mb-2">100+</div>
                    <div className="text-gray-600">Tevreden klanten</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-primary-600 mb-2">10+</div>
                    <div className="text-gray-600">Jaar ervaring</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-primary-600 mb-2">24/7</div>
                    <div className="text-gray-600">Monitoring</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-primary-600 mb-2">35%</div>
                    <div className="text-gray-600">Kostenbesparing</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto container-padding">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Waarom kiezen voor Workflo?
            </h2>
            <p className="text-xl text-gray-600">
              We doen dingen anders. En dat merk je.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl p-8 shadow-lg"
            >
              <div className="w-16 h-16 bg-primary-100 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Echt lokaal</h3>
              <p className="text-gray-600">
                Kantoor aan de Koivistokade, engineers die binnen 30 minuten ter plaatse kunnen zijn. 
                We kennen Amsterdam en spreken jouw taal.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-white rounded-xl p-8 shadow-lg"
            >
              <div className="w-16 h-16 bg-primary-100 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Transparante prijzen</h3>
              <p className="text-gray-600">
                Geen verborgen kosten, geen verrassingen. Vaste maandprijzen die je begrijpt 
                en kan budgetteren.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-white rounded-xl p-8 shadow-lg"
            >
              <div className="w-16 h-16 bg-primary-100 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Proactief beheer</h3>
              <p className="text-gray-600">
                We lossen problemen op voordat je ze merkt. Dankzij 24/7 monitoring zijn we 
                altijd een stap voor.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <TeamSection />

      {/* CTA Section */}
      <section className="py-20 bg-primary-500">
        <div className="container mx-auto container-padding">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              Klaar om te groeien zonder IT-zorgen?
            </h2>
            <p className="text-xl text-primary-100 mb-8">
              Plan een vrijblijvend gesprek en ontdek hoe we jouw IT kunnen transformeren.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/schedule"
                className="px-8 py-4 bg-white text-primary-600 rounded-lg hover:bg-gray-100 transition-colors font-medium"
              >
                Plan een gesprek
              </Link>
              <Link
                href="/tevredenheidscheck"
                className="px-8 py-4 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors font-medium"
              >
                Start IT Health Check
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}