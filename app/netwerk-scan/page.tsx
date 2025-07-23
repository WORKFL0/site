'use client'

import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import Button from '@/components/ui/Button'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useLanguage } from '@/contexts/LanguageContext'

export default function NetwerkScanPage() {
  const { language } = useLanguage()
  const [heroRef, heroInView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const [featuresRef, featuresInView] = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <>
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative min-h-[60vh] flex items-center bg-gradient-to-br from-primary-50 to-white overflow-hidden">
          <div className="absolute inset-0 bg-grid-gray-100 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
          
          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              ref={heroRef}
              initial={{ opacity: 0, y: 20 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="max-w-4xl mx-auto text-center"
            >
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                {language === 'nl' ? 'Gratis* Netwerk-scan' : 'Free* Network Scan'}
                <span className="text-primary-500">*</span>
              </h1>
              <p className="text-xl lg:text-2xl text-gray-600 mb-8">
                {language === 'nl' 
                  ? 'Ontdek wat er écht in je IT-infrastructuur gebeurt. Krijg inzicht zonder verplichtingen.'
                  : 'Discover what\'s really happening in your IT infrastructure. Get insights without obligations.'
                }
              </p>
              <Button href="/contact" size="lg">
                {language === 'nl' ? 'Start je gratis scan' : 'Start your free scan'}
              </Button>
            </motion.div>
          </div>
        </section>

        {/* How it works */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              ref={featuresRef}
              initial={{ opacity: 0, y: 20 }}
              animate={featuresInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                {language === 'nl' ? 'Hoe werkt het?' : 'How does it work?'}
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                {language === 'nl' 
                  ? 'In drie simpele stappen krijg je volledig inzicht in je IT-landschap'
                  : 'In three simple steps, you\'ll gain complete insight into your IT landscape'
                }
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={featuresInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-center"
              >
                <div className="w-20 h-20 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-3xl font-bold text-primary-600">1</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {language === 'nl' ? 'Inventarisatie' : 'Inventory'}
                </h3>
                <p className="text-gray-600">
                  {language === 'nl' 
                    ? 'We maken een complete inventaris van je huidige IT-infrastructuur. Wat voor "vlees zit er in de kuip"?'
                    : 'We create a complete inventory of your current IT infrastructure. What exactly do you have?'
                  }
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={featuresInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-center"
              >
                <div className="w-20 h-20 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-3xl font-bold text-primary-600">2</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {language === 'nl' ? 'Analyse & Rapport' : 'Analysis & Report'}
                </h3>
                <p className="text-gray-600">
                  {language === 'nl' 
                    ? 'We analyseren de gegevens en maken een duidelijk rapport met concrete aanbevelingen voor verbetering.'
                    : 'We analyze the data and create a clear report with concrete recommendations for improvement.'
                  }
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={featuresInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-center"
              >
                <div className="w-20 h-20 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-3xl font-bold text-primary-600">3</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {language === 'nl' ? 'Vrijblijvend Advies' : 'Non-binding Advice'}
                </h3>
                <p className="text-gray-600">
                  {language === 'nl' 
                    ? 'Je krijgt het rapport en bent vrij om ermee te doen wat je wilt - zonder enige verplichting.'
                    : 'You receive the report and are free to do with it as you please - without any obligation.'
                  }
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* What's included */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-12 text-center">
              {language === 'nl' ? 'Wat zit er in de scan?' : 'What\'s included in the scan?'}
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {[
                {
                  icon: '🖥️',
                  title: language === 'nl' ? 'Hardware Inventaris' : 'Hardware Inventory',
                  desc: language === 'nl' 
                    ? 'Complete lijst van alle computers, servers, netwerkapparatuur'
                    : 'Complete list of all computers, servers, network equipment'
                },
                {
                  icon: '💾',
                  title: language === 'nl' ? 'Software Licenties' : 'Software Licenses',
                  desc: language === 'nl' 
                    ? 'Overzicht van alle software en bijbehorende licenties'
                    : 'Overview of all software and associated licenses'
                },
                {
                  icon: '🔒',
                  title: language === 'nl' ? 'Security Check' : 'Security Check',
                  desc: language === 'nl' 
                    ? 'Basis veiligheidscontrole van je netwerk en systemen'
                    : 'Basic security check of your network and systems'
                },
                {
                  icon: '📊',
                  title: language === 'nl' ? 'Performance Analyse' : 'Performance Analysis',
                  desc: language === 'nl' 
                    ? 'Identificatie van bottlenecks en verbeterpunten'
                    : 'Identification of bottlenecks and areas for improvement'
                },
                {
                  icon: '💰',
                  title: language === 'nl' ? 'Kostenoverzicht' : 'Cost Overview',
                  desc: language === 'nl' 
                    ? 'Inzicht in huidige IT-kosten en besparingspotentieel'
                    : 'Insight into current IT costs and savings potential'
                },
                {
                  icon: '📈',
                  title: language === 'nl' ? 'Groeiadvies' : 'Growth Advice',
                  desc: language === 'nl' 
                    ? 'Aanbevelingen voor toekomstbestendige IT'
                    : 'Recommendations for future-proof IT'
                }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow"
                >
                  <div className="flex items-start gap-4">
                    <div className="text-4xl">{item.icon}</div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                      <p className="text-gray-600">{item.desc}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section className="py-20 bg-primary-50">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-8">
                {language === 'nl' ? 'Transparante Voorwaarden' : 'Transparent Terms'}
              </h2>
              
              <div className="bg-white rounded-2xl p-8 shadow-xl">
                <div className="text-6xl mb-6">🎯</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {language === 'nl' ? 'Gratis* Netwerk-scan' : 'Free* Network Scan'}
                </h3>
                
                <div className="space-y-4 text-left max-w-xl mx-auto mb-8">
                  <div className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <p className="text-gray-700">
                      {language === 'nl' 
                        ? 'Volledig gratis bij samenwerking'
                        : 'Completely free with collaboration'
                      }
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <p className="text-gray-700">
                      {language === 'nl' 
                        ? 'Geen samenwerking? Dan €295,- voor de geïnvesteerde tijd'
                        : 'No collaboration? Then €295 for the invested time'
                      }
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <p className="text-gray-700">
                      {language === 'nl' 
                        ? 'Rapport blijft van jou - gebruik het waar je wilt'
                        : 'Report remains yours - use it wherever you want'
                      }
                    </p>
                  </div>
                </div>

                <p className="text-sm text-gray-500 italic mb-8">
                  {language === 'nl' 
                    ? '* Scan is gratis wanneer je ervoor kiest om met ons samen te werken. Anders rekenen we €295,- voor de geïnvesteerde tijd.'
                    : '* Scan is free when you choose to work with us. Otherwise, we charge €295 for the invested time.'
                  }
                </p>

                <Button href="/contact" size="lg" className="mx-auto">
                  {language === 'nl' ? 'Vraag je scan aan' : 'Request your scan'}
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-gradient-to-r from-primary-500 to-primary-600">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              {language === 'nl' 
                ? 'Klaar om te ontdekken wat er écht in je IT gebeurt?'
                : 'Ready to discover what\'s really happening in your IT?'
              }
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              {language === 'nl' 
                ? 'Geen verborgen kosten, geen verplichtingen. Gewoon eerlijk advies.'
                : 'No hidden costs, no obligations. Just honest advice.'
              }
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="/contact" size="lg" variant="secondary">
                {language === 'nl' ? 'Start Netwerk-scan' : 'Start Network Scan'}
              </Button>
              <Button href="/tevredenheidscheck" size="lg" variant="outline" className="bg-white/10 text-white border-white hover:bg-white hover:text-primary-600">
                {language === 'nl' ? 'Doe eerst de IT-check' : 'Try the IT check first'}
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}