'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import Button from '@/components/ui/Button'
import { useLanguage } from '@/contexts/LanguageContext'

export default function TarievenPage() {
  const [heroRef, heroInView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const [pricingRef, pricingInView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const { t, language } = useLanguage()

  const pricingPlans = [
    {
      name: language === 'nl' ? 'Basis' : 'Basic',
      price: '€ 149',
      period: language === 'nl' ? 'per maand' : 'per month',
      description: language === 'nl' 
        ? 'Perfect voor kleine bedrijven die net beginnen'
        : 'Perfect for small businesses just getting started',
      features: [
        language === 'nl' ? 'Basis IT-ondersteuning' : 'Basic IT support',
        language === 'nl' ? 'Maandelijkse check-ins' : 'Monthly check-ins',
        language === 'nl' ? 'E-mail support' : 'Email support',
        language === 'nl' ? 'Responstijd: 24 uur' : 'Response time: 24 hours',
        language === 'nl' ? 'Basis security scan' : 'Basic security scan',
      ],
      color: 'from-gray-400 to-gray-600',
      recommended: false,
    },
    {
      name: language === 'nl' ? 'Professioneel' : 'Professional',
      price: '€ 399',
      period: language === 'nl' ? 'per maand' : 'per month',
      description: language === 'nl' 
        ? 'Meest gekozen voor groeiende bedrijven'
        : 'Most popular for growing businesses',
      features: [
        language === 'nl' ? 'Volledige beheerde IT-diensten' : 'Complete managed IT services',
        language === 'nl' ? '24/7 monitoring' : '24/7 monitoring',
        language === 'nl' ? 'Telefoon & e-mail support' : 'Phone & email support',
        language === 'nl' ? 'Responstijd: 4 uur' : 'Response time: 4 hours',
        language === 'nl' ? 'Geavanceerde cybersecurity' : 'Advanced cybersecurity',
        language === 'nl' ? 'Cloud backup inbegrepen' : 'Cloud backup included',
        language === 'nl' ? 'Maandelijkse rapportages' : 'Monthly reports',
      ],
      color: 'from-primary-400 to-primary-600',
      recommended: true,
    },
    {
      name: language === 'nl' ? 'Enterprise' : 'Enterprise',
      price: language === 'nl' ? 'Op maat' : 'Custom',
      period: '',
      description: language === 'nl' 
        ? 'Maatwerk voor grote organisaties'
        : 'Tailored for large organizations',
      features: [
        language === 'nl' ? 'Dedicated account manager' : 'Dedicated account manager',
        language === 'nl' ? '24/7 prioriteit support' : '24/7 priority support',
        language === 'nl' ? 'Responstijd: 1 uur' : 'Response time: 1 hour',
        language === 'nl' ? 'On-site support' : 'On-site support',
        language === 'nl' ? 'Compliance management' : 'Compliance management',
        language === 'nl' ? 'Disaster recovery' : 'Disaster recovery',
        language === 'nl' ? 'Strategisch IT-advies' : 'Strategic IT consulting',
        language === 'nl' ? 'SLA op maat' : 'Custom SLA',
      ],
      color: 'from-purple-400 to-purple-600',
      recommended: false,
    },
  ]

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
                {language === 'nl' ? 'Transparante IT-Tarieven' : 'Transparent IT Pricing'}
              </h1>
              <p className="text-xl lg:text-2xl text-gray-600">
                {language === 'nl' 
                  ? 'Geen verborgen kosten, geen verrassingen. Kies het pakket dat bij jouw bedrijf past.'
                  : 'No hidden costs, no surprises. Choose the package that fits your business.'}
              </p>
            </motion.div>
          </div>
        </section>

        {/* Pricing Cards */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <motion.div
              ref={pricingRef}
              initial={{ opacity: 0 }}
              animate={pricingInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-8"
            >
              {pricingPlans.map((plan, index) => (
                <motion.div
                  key={plan.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={pricingInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`relative bg-white rounded-2xl shadow-xl overflow-hidden ${
                    plan.recommended ? 'scale-105 border-2 border-primary-500' : ''
                  }`}
                >
                  {plan.recommended && (
                    <div className="absolute top-0 right-0 bg-primary-500 text-white text-sm font-semibold px-4 py-1 rounded-bl-lg">
                      {language === 'nl' ? 'Aanbevolen' : 'Recommended'}
                    </div>
                  )}
                  
                  <div className={`h-2 bg-gradient-to-r ${plan.color}`}></div>
                  
                  <div className="p-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                    <div className="mb-4">
                      <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                      {plan.period && <span className="text-gray-600 ml-2">{plan.period}</span>}
                    </div>
                    <p className="text-gray-600 mb-6">{plan.description}</p>
                    
                    <ul className="space-y-3 mb-8">
                      {plan.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <svg className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <Button 
                      href="/contact" 
                      variant={plan.recommended ? 'primary' : 'outline'} 
                      className="w-full"
                    >
                      {language === 'nl' ? 'Kies dit pakket' : 'Choose this package'}
                    </Button>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Custom Quote Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                {language === 'nl' 
                  ? 'Niet gevonden wat je zocht?'
                  : 'Didn\'t find what you\'re looking for?'}
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                {language === 'nl'
                  ? 'We maken graag een pakket op maat voor jouw specifieke situatie. Neem contact op voor een vrijblijvend adviesgesprek.'
                  : 'We\'d be happy to create a custom package for your specific situation. Contact us for a free consultation.'}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button href="/contact" size="lg">
                  {language === 'nl' ? 'Vraag offerte aan' : 'Request quote'}
                </Button>
                <Button href="/tevredenheidscheck" variant="outline" size="lg">
                  {language === 'nl' ? 'Doe gratis IT-scan' : 'Take free IT scan'}
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-12 text-center">
              {language === 'nl' ? 'Veelgestelde vragen' : 'Frequently asked questions'}
            </h2>
            
            <div className="max-w-3xl mx-auto space-y-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="bg-white rounded-lg shadow-md p-6"
              >
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {language === 'nl' 
                    ? 'Kan ik later overstappen naar een ander pakket?'
                    : 'Can I switch to a different package later?'}
                </h3>
                <p className="text-gray-600">
                  {language === 'nl'
                    ? 'Ja, je kunt op elk moment upgraden of downgraden. We passen je factuur pro-rata aan.'
                    : 'Yes, you can upgrade or downgrade at any time. We\'ll adjust your invoice pro-rata.'}
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="bg-white rounded-lg shadow-md p-6"
              >
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {language === 'nl' 
                    ? 'Zijn er opstartkosten?'
                    : 'Are there setup costs?'}
                </h3>
                <p className="text-gray-600">
                  {language === 'nl'
                    ? 'Voor het Basis pakket zijn er geen opstartkosten. Voor Professioneel en Enterprise pakketten maken we eerst een inventarisatie, de kosten hiervoor bespreken we vooraf.'
                    : 'For the Basic package there are no setup costs. For Professional and Enterprise packages we first make an inventory, we\'ll discuss the costs beforehand.'}
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-white rounded-lg shadow-md p-6"
              >
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {language === 'nl' 
                    ? 'Wat is de opzegtermijn?'
                    : 'What\'s the cancellation period?'}
                </h3>
                <p className="text-gray-600">
                  {language === 'nl'
                    ? 'Je kunt maandelijks opzeggen met een opzegtermijn van 30 dagen. Geen lange contracten, wel zekerheid.'
                    : 'You can cancel monthly with a 30-day notice period. No long contracts, but certainty.'}
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