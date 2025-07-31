'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { useState } from 'react'

const pricingPlans = [
  {
    name: 'Basis',
    description: 'Voor kleine bedrijven die net beginnen met professionele IT',
    price: '495',
    users: '1-5 gebruikers',
    popular: false,
    features: [
      'Basis helpdesk ondersteuning',
      'Remote support tijdens kantooruren',
      'Maandelijkse systeem updates',
      'Basis cybersecurity bescherming',
      'E-mail support',
      'Response tijd: < 8 uur',
    ],
    notIncluded: [
      '24/7 monitoring',
      'On-site support',
      'Dedicated account manager',
      'Geavanceerde backup oplossingen',
    ]
  },
  {
    name: 'Professioneel',
    description: 'De complete IT-oplossing voor groeiende bedrijven',
    price: '1.495',
    users: '5-25 gebruikers',
    popular: true,
    features: [
      'Alles uit Basis, plus:',
      '24/7 proactieve monitoring',
      'On-site support (4x per jaar)',
      'Dedicated account manager',
      'Geavanceerde cybersecurity',
      'Dagelijkse backups',
      'Response tijd: < 2 uur',
      'Maandelijkse IT-rapportages',
      'Strategisch IT-advies',
    ],
    notIncluded: [
      'Unlimited on-site bezoeken',
      'Custom software ontwikkeling',
    ]
  },
  {
    name: 'Enterprise',
    description: 'Maatwerk IT-oplossingen voor grote organisaties',
    price: 'Custom',
    users: '25+ gebruikers',
    popular: false,
    features: [
      'Alles uit Professioneel, plus:',
      'Unlimited on-site support',
      'Dedicated IT team',
      'Custom SLA afspraken',
      'Priority support 24/7/365',
      'Response tijd: < 15 minuten',
      'Compliance management',
      'Disaster recovery planning',
      'Custom integraties',
      'Executive IT consulting',
    ],
    notIncluded: []
  }
]

const additionalServices = [
  {
    name: 'Cloud Migratie',
    description: 'Eenmalige migratie naar de cloud',
    price: 'Vanaf €2.500',
    icon: '☁️'
  },
  {
    name: 'Cybersecurity Audit',
    description: 'Uitgebreide veiligheidsanalyse',
    price: '€1.500',
    icon: '🔒'
  },
  {
    name: 'IT Projecten',
    description: 'Uurtarief voor specifieke projecten',
    price: '€125/uur',
    icon: '⚡'
  },
  {
    name: 'Hardware Installatie',
    description: 'Professionele installatie ter plaatse',
    price: '€95/uur',
    icon: '🖥️'
  }
]

export default function TarievenPage() {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('monthly')

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
              Transparante <span className="text-gradient">Tarieven</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-xl text-gray-600 mb-8"
            >
              Geen verborgen kosten, geen verrassingen. Kies het pakket dat bij jouw bedrijf past.
            </motion.p>

            {/* Billing Toggle */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-4 bg-gray-100 rounded-lg p-1"
            >
              <button
                onClick={() => setBillingCycle('monthly')}
                className={`px-6 py-2 rounded-md font-medium transition-all ${
                  billingCycle === 'monthly'
                    ? 'bg-white text-gray-900 shadow-sm'
                    : 'text-gray-600'
                }`}
              >
                Per maand
              </button>
              <button
                onClick={() => setBillingCycle('yearly')}
                className={`px-6 py-2 rounded-md font-medium transition-all ${
                  billingCycle === 'yearly'
                    ? 'bg-white text-gray-900 shadow-sm'
                    : 'text-gray-600'
                }`}
              >
                Per jaar
                <span className="ml-2 text-green-600 text-sm">-10%</span>
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="py-20">
        <div className="container mx-auto container-padding">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className={`relative bg-white rounded-2xl shadow-xl overflow-hidden ${
                  plan.popular ? 'ring-4 ring-primary-500' : ''
                }`}
              >
                {plan.popular && (
                  <div className="absolute top-0 right-0 bg-primary-500 text-white px-4 py-1 text-sm font-medium rounded-bl-lg">
                    Meest gekozen
                  </div>
                )}

                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                  <p className="text-gray-600 mb-6">{plan.description}</p>
                  
                  <div className="mb-6">
                    {plan.price === 'Custom' ? (
                      <div className="text-4xl font-bold text-gray-900">Op maat</div>
                    ) : (
                      <>
                        <span className="text-4xl font-bold text-gray-900">
                          €{billingCycle === 'yearly' 
                            ? Math.round(parseInt(plan.price) * 0.9) 
                            : plan.price}
                        </span>
                        <span className="text-gray-600 ml-2">/maand</span>
                      </>
                    )}
                    <p className="text-sm text-gray-500 mt-2">{plan.users}</p>
                  </div>

                  <Link
                    href="/contact"
                    className={`block w-full text-center px-6 py-3 rounded-lg font-medium transition-colors mb-8 ${
                      plan.popular
                        ? 'bg-primary-500 text-white hover:bg-primary-600'
                        : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                    }`}
                  >
                    {plan.price === 'Custom' ? 'Contact opnemen' : 'Aan de slag'}
                  </Link>

                  <div className="space-y-3">
                    <p className="font-semibold text-gray-900 mb-2">Inbegrepen:</p>
                    {plan.features.map((feature) => (
                      <div key={feature} className="flex items-start gap-3">
                        <svg className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span className="text-gray-700 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {plan.notIncluded.length > 0 && (
                    <div className="mt-6 pt-6 border-t space-y-3">
                      <p className="font-semibold text-gray-500 mb-2">Niet inbegrepen:</p>
                      {plan.notIncluded.map((feature) => (
                        <div key={feature} className="flex items-start gap-3">
                          <svg className="w-5 h-5 text-gray-400 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                          </svg>
                          <span className="text-gray-500 text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto container-padding">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Aanvullende Diensten
            </h2>
            <p className="text-xl text-gray-600">
              Voor specifieke projecten en eenmalige werkzaamheden
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {additionalServices.map((service, index) => (
              <motion.div
                key={service.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="font-semibold text-gray-900 mb-2">{service.name}</h3>
                <p className="text-gray-600 text-sm mb-4">{service.description}</p>
                <p className="text-primary-600 font-bold">{service.price}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="container mx-auto container-padding">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
              Veelgestelde vragen
            </h2>

            <div className="space-y-6">
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <h3 className="font-semibold text-gray-900 mb-2">
                  Zijn er opstartkosten?
                </h3>
                <p className="text-gray-600">
                  Nee, we rekenen geen opstartkosten. Je betaalt alleen het maandelijkse abonnement.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg">
                <h3 className="font-semibold text-gray-900 mb-2">
                  Kan ik maandelijks opzeggen?
                </h3>
                <p className="text-gray-600">
                  Ja, al onze abonnementen zijn maandelijks opzegbaar met een opzegtermijn van 30 dagen.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg">
                <h3 className="font-semibold text-gray-900 mb-2">
                  Wat als ik meer gebruikers nodig heb?
                </h3>
                <p className="text-gray-600">
                  Je kunt altijd upgraden naar een hoger pakket. We berekenen alleen het verschil en je behoudt al je data en instellingen.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg">
                <h3 className="font-semibold text-gray-900 mb-2">
                  Is hardware inbegrepen?
                </h3>
                <p className="text-gray-600">
                  Hardware is niet inbegrepen in de abonnementen, maar we kunnen wel zorgen voor scherpe prijzen via onze partners. 
                  Check onze <Link href="/shop" className="text-primary-600 hover:text-primary-700 font-medium">shop</Link> voor actuele aanbiedingen.
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
              Niet zeker welk pakket bij je past?
            </h2>
            <p className="text-xl text-primary-100 mb-8">
              Onze IT-experts helpen je graag met een persoonlijk advies. 
              Start met een gratis IT Health Check en ontdek wat jouw bedrijf nodig heeft.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/tevredenheidscheck"
                className="px-8 py-4 bg-white text-primary-600 rounded-lg hover:bg-gray-100 transition-colors font-medium"
              >
                Start gratis IT Health Check
              </Link>
              <Link
                href="/contact"
                className="px-8 py-4 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors font-medium"
              >
                Direct contact
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}