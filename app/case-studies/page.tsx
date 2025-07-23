'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Button from '@/components/ui/Button'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

const caseStudies = [
  {
    title: 'Marketing Bureau Amsterdam',
    industry: 'Marketing & Media',
    challenge: 'Constant crashes tijdens pitches en vertragingen in projecten',
    solution: 'Cloud-first infrastructuur met 24/7 monitoring',
    results: [
      '99.9% uptime gegarandeerd',
      '3x snellere project delivery',
      '€15.000/jaar bespaard'
    ],
    testimonial: 'Workflo heeft onze IT van een hoofdpijn naar een competitief voordeel getransformeerd.',
    link: '#'
  },
  {
    title: 'Retailketen Noord-Holland',
    industry: 'Retail',
    challenge: 'Kassasystemen vielen uit tijdens Black Friday',
    solution: 'Redundante systemen met automatische failover',
    results: [
      'Geen downtime tijdens piekdagen',
      '45% snellere transacties',
      'ROI binnen 6 maanden'
    ],
    testimonial: 'Dankzij Workflo verliezen we nooit meer omzet door technische problemen.',
    link: '#'
  },
  {
    title: 'Non-Profit Organisatie',
    industry: 'Non-Profit',
    challenge: 'Beperkt budget maar moderne IT-behoeften',
    solution: 'Microsoft 365 Non-Profit licenties + slimme automatisering',
    results: [
      '70% kostenbesparing',
      'Volledig remote werken mogelijk',
      'Betere donor communicatie'
    ],
    testimonial: 'Workflo begrijpt dat elke euro telt en heeft ons enorm geholpen.',
    link: '#'
  }
]

export default function CaseStudiesPage() {
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
                Succesverhalen van <span className="text-gradient">Tevreden Klanten</span>
              </h1>
              <p className="text-xl lg:text-2xl text-gray-600">
                Ontdek hoe Amsterdamse bedrijven hun IT-uitdagingen hebben overwonnen 
                en nu groeien met betrouwbare technologie.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Case Studies Grid */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {caseStudies.map((study, index) => (
                <motion.div
                  key={index}
                  ref={contentRef}
                  initial={{ opacity: 0, y: 20 }}
                  animate={contentInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow"
                >
                  <div className="p-8">
                    <div className="flex items-center gap-2 mb-4">
                      <span className="px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-sm font-medium">
                        {study.industry}
                      </span>
                    </div>
                    
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                      {study.title}
                    </h3>
                    
                    <div className="space-y-4 mb-6">
                      <div>
                        <p className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-1">
                          Uitdaging
                        </p>
                        <p className="text-gray-700">
                          {study.challenge}
                        </p>
                      </div>
                      
                      <div>
                        <p className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-1">
                          Oplossing
                        </p>
                        <p className="text-gray-700">
                          {study.solution}
                        </p>
                      </div>
                      
                      <div>
                        <p className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-2">
                          Resultaten
                        </p>
                        <ul className="space-y-2">
                          {study.results.map((result, idx) => (
                            <li key={idx} className="flex items-start gap-2">
                              <svg className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                              </svg>
                              <span className="text-gray-700">{result}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    
                    <blockquote className="border-l-4 border-primary-500 pl-4 mb-6">
                      <p className="text-gray-600 italic">
                        "{study.testimonial}"
                      </p>
                    </blockquote>
                    
                    <Button href={study.link} variant="outline" size="sm" className="w-full">
                      Lees het volledige verhaal
                    </Button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-primary-50">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Klaar om jouw succesverhaal te schrijven?
              </h2>
              <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                Sluit je aan bij honderden tevreden bedrijven die hun IT-zorgen 
                hebben ingeruild voor groei en innovatie.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button href="/tevredenheidscheck" size="lg">
                  Start IT Health Check
                </Button>
                <Button href="/contact" variant="outline" size="lg">
                  Vraag een gesprek aan
                </Button>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}