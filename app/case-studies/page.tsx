'use client'

import { motion } from 'framer-motion'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import { useLanguage } from '@/context/LanguageContext'
import Link from 'next/link'
import Image from 'next/image'

export default function CaseStudiesPage() {
  const { language } = useLanguage()

  const caseStudies = [
    {
      client: 'Schulte & Lestraden',
      industry: language === 'en' ? 'Installation Services' : 'Installatie Diensten',
      logo: '/images/logos/SchulteLestrade_Logo.jpg',
      duration: '70+ years in business',
      challenge: language === 'en'
        ? 'A well-established installation company with over 70 years of experience needed a complete IT infrastructure installation and ongoing second-line support to modernize their operations.'
        : 'Een gevestigd installatiebedrijf met meer dan 70 jaar ervaring had een complete IT-infrastructuur installatie en doorlopende tweedelijns ondersteuning nodig om hun activiteiten te moderniseren.',
      solution: language === 'en'
        ? 'WORKFLO provided comprehensive IT environment installation including network setup, server configuration, and workstation deployment. We also established a second-line support system to ensure continuous operations.'
        : 'WORKFLO leverde een uitgebreide IT-omgeving installatie inclusief netwerk setup, server configuratie en werkstation uitrol. We hebben ook een tweedelijns ondersteuningssysteem opgezet om continue bedrijfsvoering te garanderen.',
      results: [
        language === 'en' ? 'Complete IT infrastructure modernization' : 'Complete IT-infrastructuur modernisering',
        language === 'en' ? 'Reliable second-line support system' : 'Betrouwbaar tweedelijns ondersteuningssysteem',
        language === 'en' ? 'Improved operational efficiency' : 'Verbeterde operationele efficiëntie',
        language === 'en' ? 'Reduced IT-related downtime' : 'Verminderde IT-gerelateerde downtime'
      ],
      testimonial: language === 'en'
        ? '"WORKFLO helped us modernize our entire IT infrastructure. Their expertise and support have been invaluable to our operations."'
        : '"WORKFLO heeft ons geholpen onze hele IT-infrastructuur te moderniseren. Hun expertise en ondersteuning zijn van onschatbare waarde voor onze activiteiten."'
    },
    {
      client: 'Duwtje',
      industry: language === 'en' ? 'Scientific & Creative Agency' : 'Wetenschappelijk & Creatief Bureau',
      logo: '/images/logos/duwtje.svg',
      duration: '2+ years partnership',
      challenge: language === 'en'
        ? 'A scientific and creative behavioral agency needed a reliable IT partner to support their innovative work and ensure their digital infrastructure could keep pace with their creative processes.'
        : 'Een wetenschappelijk en creatief gedragsbureau had een betrouwbare IT-partner nodig om hun innovatieve werk te ondersteunen en ervoor te zorgen dat hun digitale infrastructuur gelijke tred kon houden met hun creatieve processen.',
      solution: language === 'en'
        ? 'WORKFLO became their dedicated IT partner, providing comprehensive managed IT services, cloud solutions, and proactive monitoring to ensure their creative teams could work without interruption.'
        : 'WORKFLO werd hun toegewijde IT-partner en leverde uitgebreide beheerde IT-diensten, cloudoplossingen en proactieve monitoring om ervoor te zorgen dat hun creatieve teams zonder onderbreking konden werken.',
      results: [
        language === 'en' ? 'Seamless cloud collaboration' : 'Naadloze cloud samenwerking',
        language === 'en' ? '99.9% uptime achieved' : '99,9% uptime bereikt',
        language === 'en' ? 'Enhanced creative workflow' : 'Verbeterde creatieve workflow',
        language === 'en' ? 'Scalable IT infrastructure' : 'Schaalbare IT-infrastructuur'
      ],
      testimonial: language === 'en'
        ? '"The importance of a reliable IT partner cannot be overstated. WORKFLO has been instrumental in keeping our creative processes running smoothly."'
        : '"Het belang van een betrouwbare IT-partner kan niet genoeg benadrukt worden. WORKFLO is essentieel geweest voor het soepel laten verlopen van onze creatieve processen."'
    },
    {
      client: 'Havas Media',
      industry: language === 'en' ? 'Media & Advertising' : 'Media & Reclame',
      logo: '/images/logos/Havas_Media.png',
      duration: '3+ years partnership',
      challenge: language === 'en'
        ? 'A global media network needed local IT support that could match their fast-paced environment and provide immediate assistance for their Amsterdam office.'
        : 'Een wereldwijd medianetwerk had lokale IT-ondersteuning nodig die kon meegaan met hun snelle omgeving en directe hulp kon bieden voor hun kantoor in Amsterdam.',
      solution: language === 'en'
        ? 'WORKFLO implemented a Fixed Fee Onsite Support package, providing unlimited on-site visits, proactive monitoring, and a dedicated account manager to ensure zero disruption to their media operations.'
        : 'WORKFLO implementeerde een Fixed Fee Onsite Support pakket, met onbeperkte bezoeken ter plaatse, proactieve monitoring en een toegewijde accountmanager om geen verstoring van hun media-activiteiten te garanderen.',
      results: [
        language === 'en' ? '40% reduction in IT incidents' : '40% reductie in IT-incidenten',
        language === 'en' ? '1-hour response time guarantee' : '1 uur reactietijd garantie',
        language === 'en' ? 'Predictable IT costs' : 'Voorspelbare IT-kosten',
        language === 'en' ? 'Improved team productivity' : 'Verbeterde teamproductiviteit'
      ],
      testimonial: language === 'en'
        ? '"WORKFLO\'s proactive approach has transformed how we handle IT. Issues are often resolved before we even notice them."'
        : '"De proactieve aanpak van WORKFLO heeft getransformeerd hoe we met IT omgaan. Problemen worden vaak opgelost voordat we ze zelfs opmerken."'
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="pt-24 pb-16">
        {/* Hero Section */}
        <section className="bg-white py-16">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-5xl font-bold text-gray-900 mb-4">
                {language === 'en' ? 'Client Success Stories' : 'Klantsuccessen'}
              </h1>
              <p className="text-xl text-gray-600">
                {language === 'en' 
                  ? 'See how we\'ve helped Amsterdam businesses transform their IT infrastructure and achieve their goals.'
                  : 'Zie hoe we Amsterdamse bedrijven hebben geholpen hun IT-infrastructuur te transformeren en hun doelen te bereiken.'}
              </p>
            </div>
          </div>
        </section>

        {/* Case Studies */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="space-y-16">
              {caseStudies.map((study, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="bg-white rounded-2xl shadow-xl overflow-hidden"
                >
                  <div className="grid md:grid-cols-2">
                    {/* Content Side */}
                    <div className="p-8 lg:p-12">
                      <div className="flex items-center gap-4 mb-6">
                        {study.logo && (
                          <div className="relative w-32 h-16">
                            <Image
                              src={study.logo}
                              alt={study.client}
                              fill
                              className="object-contain"
                            />
                          </div>
                        )}
                        <div>
                          <h2 className="text-2xl font-bold text-gray-900">{study.client}</h2>
                          <p className="text-gray-600">{study.industry}</p>
                        </div>
                      </div>

                      <div className="space-y-6">
                        <div>
                          <h3 className="text-lg font-semibold text-gray-900 mb-2">
                            {language === 'en' ? 'The Challenge' : 'De Uitdaging'}
                          </h3>
                          <p className="text-gray-600">{study.challenge}</p>
                        </div>

                        <div>
                          <h3 className="text-lg font-semibold text-gray-900 mb-2">
                            {language === 'en' ? 'Our Solution' : 'Onze Oplossing'}
                          </h3>
                          <p className="text-gray-600">{study.solution}</p>
                        </div>

                        <div className="bg-gray-50 rounded-xl p-6">
                          <p className="text-gray-700 italic text-lg mb-4">
                            {study.testimonial}
                          </p>
                          <p className="text-sm text-gray-500">
                            — {study.client} {language === 'en' ? 'Team' : 'Team'}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Results Side */}
                    <div className="bg-gradient-to-br from-yellow-400 to-yellow-500 p-8 lg:p-12">
                      <h3 className="text-2xl font-bold text-black mb-6">
                        {language === 'en' ? 'Results Achieved' : 'Behaalde Resultaten'}
                      </h3>
                      <div className="space-y-4">
                        {study.results.map((result, idx) => (
                          <div key={idx} className="flex items-start gap-3">
                            <svg className="w-6 h-6 text-black mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                            </svg>
                            <span className="text-black font-medium">{result}</span>
                          </div>
                        ))}
                      </div>

                      <div className="mt-8 bg-black/10 rounded-lg p-4">
                        <p className="text-black font-semibold">
                          {language === 'en' ? 'Partnership Duration:' : 'Duur Partnerschap:'}
                        </p>
                        <p className="text-black">{study.duration}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* CTA Section */}
            <div className="mt-16 text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                {language === 'en' 
                  ? 'Ready to Be Our Next Success Story?'
                  : 'Klaar om Ons Volgende Succesverhaal te Worden?'}
              </h2>
              <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                {language === 'en'
                  ? 'Join over 100 Amsterdam businesses that trust WORKFLO with their IT infrastructure.'
                  : 'Sluit u aan bij meer dan 100 Amsterdamse bedrijven die WORKFLO vertrouwen met hun IT-infrastructuur.'}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/tevredenheidscheck"
                  className="bg-yellow-400 text-black px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-500 transition-all inline-block"
                >
                  {language === 'en' ? 'Start Your IT Assessment' : 'Start Uw IT-Assessment'}
                </Link>
                <Link
                  href="/contact"
                  className="bg-black text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-800 transition-all inline-block"
                >
                  {language === 'en' ? 'Contact Our Team' : 'Contact Ons Team'}
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}