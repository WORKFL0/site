'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function NetworkScanPage() {
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
              Gratis* <span className="text-gradient">Netwerk Scan</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-xl text-gray-600 mb-8"
            >
              Ontdek wat er écht in jouw IT-infrastructuur gebeurt. Krijg inzicht in je netwerk, 
              systemen en mogelijke verbeterpunten - zonder verplichtingen.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              100% Vrijblijvend
            </motion.div>
          </div>
        </div>
      </section>

      {/* How it Works Section */}
      <section className="py-20">
        <div className="container mx-auto container-padding">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 text-center mb-16">
              Hoe werkt de <span className="text-gradient">Netwerk Scan</span>?
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-20 h-20 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-3xl font-bold text-primary-600">1</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Inventarisatie</h3>
                <p className="text-gray-600">
                  We maken een complete inventaris van jouw IT-omgeving. Welke apparaten, 
                  software en diensten gebruik je? We brengen alles in kaart.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-center"
              >
                <div className="w-20 h-20 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-3xl font-bold text-primary-600">2</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Analyse</h3>
                <p className="text-gray-600">
                  Onze experts analyseren je netwerk op veiligheid, prestaties en efficiëntie. 
                  We identificeren kwetsbaarheden en verbeterpunten.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-center"
              >
                <div className="w-20 h-20 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-3xl font-bold text-primary-600">3</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Adviesrapport</h3>
                <p className="text-gray-600">
                  Je ontvangt een helder rapport met concrete aanbevelingen. 
                  Geen technisch jargon, maar duidelijke actiepunten.
                </p>
              </motion.div>
            </div>

            {/* Warning Tape Divider */}
            <div className="warning-tape h-4 my-12"></div>

            {/* What We Check */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Wat onderzoeken we tijdens de scan?
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-primary-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <div>
                      <h4 className="font-semibold text-gray-900">Netwerkarchitectuur</h4>
                      <p className="text-gray-600 text-sm">Hoe is je netwerk opgebouwd en zijn er bottlenecks?</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-primary-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <div>
                      <h4 className="font-semibold text-gray-900">Beveiliging</h4>
                      <p className="text-gray-600 text-sm">Firewall, antivirus, backup - is alles op orde?</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-primary-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <div>
                      <h4 className="font-semibold text-gray-900">Hardware & Software</h4>
                      <p className="text-gray-600 text-sm">Zijn je systemen up-to-date en optimaal geconfigureerd?</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-primary-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <div>
                      <h4 className="font-semibold text-gray-900">Licenties & Compliance</h4>
                      <p className="text-gray-600 text-sm">Zijn alle licenties geldig en voldoe je aan wet- en regelgeving?</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-primary-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <div>
                      <h4 className="font-semibold text-gray-900">Performance & Capaciteit</h4>
                      <p className="text-gray-600 text-sm">Presteert je infrastructuur optimaal voor jouw bedrijf?</p>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="bg-primary-50 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Wat krijg je van ons?
                </h3>
                <div className="space-y-4">
                  <div className="bg-white rounded-lg p-4">
                    <h4 className="font-semibold text-gray-900 mb-1">Uitgebreid rapport</h4>
                    <p className="text-gray-600 text-sm">
                      Een compleet overzicht van je IT-infrastructuur met alle bevindingen
                    </p>
                  </div>
                  <div className="bg-white rounded-lg p-4">
                    <h4 className="font-semibold text-gray-900 mb-1">Prioriteitenlijst</h4>
                    <p className="text-gray-600 text-sm">
                      Welke zaken verdienen direct aandacht en wat kan wachten?
                    </p>
                  </div>
                  <div className="bg-white rounded-lg p-4">
                    <h4 className="font-semibold text-gray-900 mb-1">Kostenoverzicht</h4>
                    <p className="text-gray-600 text-sm">
                      Transparant inzicht in mogelijke besparingen en investeringen
                    </p>
                  </div>
                  <div className="bg-white rounded-lg p-4">
                    <h4 className="font-semibold text-gray-900 mb-1">Persoonlijk advies</h4>
                    <p className="text-gray-600 text-sm">
                      Een-op-een gesprek met onze IT-expert over de resultaten
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Free* Explanation Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto container-padding">
          <div className="max-w-3xl mx-auto">
            <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
                Waarom <span className="text-gradient">Gratis*</span>?
              </h2>
              
              <div className="prose prose-lg text-gray-600 max-w-none">
                <p className="mb-6">
                  We geloven in transparantie en eerlijk advies. Daarom bieden we onze 
                  netwerk scan gratis* aan. Je bent tot niets verplicht en het rapport 
                  is van jou - ook als je besluit om met een andere partij in zee te gaan.
                </p>
                
                <div className="bg-primary-50 rounded-lg p-6 mb-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    Hoe zit het precies?
                  </h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start gap-2">
                      <span className="text-primary-600 font-bold">•</span>
                      <span>De scan en het rapport zijn <strong>100% gratis</strong> als je met ons verder gaat</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary-600 font-bold">•</span>
                      <span>Kies je voor een andere partij? Dan rekenen we alleen de <strong>bestede tijd</strong> door</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary-600 font-bold">•</span>
                      <span>Geen verborgen kosten, geen kleine lettertjes</span>
                    </li>
                  </ul>
                </div>

                <p className="text-center">
                  <strong>Kortom:</strong> Je krijgt professioneel advies zonder risico. 
                  We investeren graag in een mogelijke samenwerking!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary-500">
        <div className="container mx-auto container-padding">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              Klaar voor inzicht in jouw IT?
            </h2>
            <p className="text-xl text-primary-100 mb-8">
              Plan vandaag nog een afspraak en ontvang binnen 5 werkdagen je complete netwerk scan rapport.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/schedule"
                className="px-8 py-4 bg-white text-primary-600 rounded-lg hover:bg-gray-100 transition-colors font-medium inline-flex items-center justify-center gap-2"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                Plan netwerk scan
              </Link>
              <Link
                href="/contact"
                className="px-8 py-4 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors font-medium"
              >
                Meer informatie
              </Link>
            </div>
            <p className="text-primary-100 text-sm mt-6">
              * Gratis bij afname van onze diensten. Anders alleen verrekening van bestede tijd.
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}