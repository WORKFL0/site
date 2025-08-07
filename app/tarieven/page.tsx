'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { PhoneIcon, EnvelopeIcon, MapPinIcon, CheckIcon } from '@heroicons/react/24/outline'
import PricingCalculator from '@/components/PricingCalculator'

export default function PricingPage() {
  const [mounted, setMounted] = useState(false)
  const [billingPeriod, setBillingPeriod] = useState<'monthly' | 'yearly'>('monthly')

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading...</p>
        </div>
      </div>
    )
  }

  const packages = [
    {
      name: 'Fixed Fee Onsite Support',
      description: 'Onbeperkte hulp op locatie + remote, volledig beheerde IT',
      monthlyPrice: 90,
      yearlyPrice: 972,
      perUnit: 'per gebruiker/server per maand',
      features: [
        'Onbeperkte locatiebezoeken',
        'Alles van remote support inbegrepen',
        'Prioriteit reactie (1 uur)',
        'Dedicated accountmanager',
        'Kwartaal business reviews',
        'Strategische IT planning'
      ],
      highlight: true,
      badge: 'Meest Compleet',
      targetAudience: 'Ambitieuze bedrijven die alles uitbesteden willen'
    },
    {
      name: 'Fixed Fee Remote Support',
      description: 'Onbeperkte remote hulp met proactieve monitoring',
      monthlyPrice: 60,
      yearlyPrice: 648,
      perUnit: 'per gebruiker/server per maand',
      features: [
        'Onbeperkte remote support',
        '24/7 monitoring systemen',
        'Patch management',
        'Antivirus & malware bescherming',
        'Backup monitoring',
        'Maandelijkse rapportages'
      ],
      highlight: false,
      badge: null,
      targetAudience: 'MKB met beperkt budget, maar wel professionele IT'
    },
    {
      name: 'Break/Fix Support',
      description: 'Betaal alleen wanneer u ons nodig heeft',
      monthlyPrice: null,
      yearlyPrice: null,
      perUnit: '€125 per uur',
      features: [
        'Geen contractverplichtingen',
        'Betaal per incident',
        'Reactie binnen 4 uur',
        'Remote of onsite mogelijk',
        'Transparante uurtarieven'
      ],
      highlight: false,
      badge: null,
      targetAudience: 'Kleine bedrijven met incidentele IT-problemen'
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Header with Warning Tape */}
      <div className="bg-gradient-to-r from-warning-yellow via-warning-black to-warning-yellow h-2"></div>
      
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center">
              <Link href="/" className="flex items-center space-x-2">
                <div className="w-10 h-10 bg-primary-600 rounded-lg flex items-center justify-center">
                  <span className="text-black font-bold text-xl">W</span>
                </div>
                <span className="text-2xl font-bold text-gray-900">Workflo</span>
              </Link>
            </div>
            <nav className="hidden md:flex items-center space-x-8">
              <Link href="/" className="text-gray-700 hover:text-primary-600 font-medium transition-colors">
                Home
              </Link>
              <Link href="/diensten" className="text-gray-700 hover:text-primary-600 font-medium transition-colors">
                Diensten
              </Link>
              <Link href="/over-ons" className="text-gray-700 hover:text-primary-600 font-medium transition-colors">
                Over Ons
              </Link>
              <Link href="/contact" className="text-gray-700 hover:text-primary-600 font-medium transition-colors">
                Contact
              </Link>
            </nav>
          </div>
        </div>
      </header>

      <main className="pt-8 pb-16">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-gray-900 to-black text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl lg:text-6xl font-bold mb-6">
                Transparante IT-tarieven
              </h1>
              <p className="text-xl lg:text-2xl opacity-90 mb-8">
                Geen verrassingen, geen verborgen kosten
              </p>
              
              {/* Billing Toggle */}
              <div className="inline-flex items-center bg-gray-800 rounded-lg p-1">
                <button
                  onClick={() => setBillingPeriod('monthly')}
                  className={`px-6 py-2 rounded-md transition-all ${
                    billingPeriod === 'monthly' 
                      ? 'bg-primary-600 text-black font-semibold' 
                      : 'text-gray-400 hover:text-white'
                  }`}
                >
                  Maandelijks
                </button>
                <button
                  onClick={() => setBillingPeriod('yearly')}
                  className={`px-6 py-2 rounded-md transition-all ${
                    billingPeriod === 'yearly' 
                      ? 'bg-primary-600 text-black font-semibold' 
                      : 'text-gray-400 hover:text-white'
                  }`}
                >
                  Jaarlijks (-10%)
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Cards */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid md:grid-cols-3 gap-8">
                {packages.map((pkg, index) => (
                  <div
                    key={index}
                    className={`relative bg-white rounded-2xl shadow-xl overflow-hidden ${
                      pkg.highlight ? 'ring-4 ring-primary-600 transform scale-105' : ''
                    }`}
                  >
                    {pkg.badge && (
                      <div className="absolute top-0 right-0 bg-primary-600 text-black px-4 py-1 rounded-bl-lg font-semibold">
                        {pkg.badge}
                      </div>
                    )}
                    
                    <div className="p-8">
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">{pkg.name}</h3>
                      <p className="text-gray-600 mb-6">{pkg.description}</p>
                      
                      <div className="mb-6">
                        {pkg.monthlyPrice ? (
                          <>
                            <div className="flex items-baseline">
                              <span className="text-4xl font-bold text-gray-900">
                                €{billingPeriod === 'monthly' ? pkg.monthlyPrice : Math.floor(pkg.yearlyPrice / 12)}
                              </span>
                              <span className="text-gray-600 ml-2">/maand</span>
                            </div>
                            <p className="text-sm text-gray-500 mt-1">{pkg.perUnit}</p>
                          </>
                        ) : (
                          <div className="text-3xl font-bold text-gray-900">{pkg.perUnit}</div>
                        )}
                      </div>
                      
                      <ul className="space-y-3 mb-8">
                        {pkg.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <CheckIcon className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-700">{feature}</span>
                          </li>
                        ))}
                      </ul>
                      
                      <div className="border-t pt-6">
                        <p className="text-sm text-gray-600 italic mb-4">{pkg.targetAudience}</p>
                        <Link
                          href="/contact"
                          className={`block w-full text-center px-6 py-3 rounded-lg font-semibold transition-colors ${
                            pkg.highlight
                              ? 'bg-primary-600 text-black hover:bg-primary-700'
                              : 'bg-gray-900 text-white hover:bg-gray-800'
                          }`}
                        >
                          Offerte aanvragen
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Calculator Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center text-gray-900 mb-4">
                Bereken uw investering
              </h2>
              <p className="text-xl text-center text-gray-600 mb-12">
                Krijg direct inzicht in uw maandelijkse IT-kosten
              </p>
              <PricingCalculator />
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
                Veelgestelde vragen
              </h2>
              <div className="space-y-6">
                <div className="bg-white rounded-lg shadow-md p-6">
                  <h3 className="font-bold text-lg text-gray-900 mb-2">
                    Wat is het verschil tussen Fixed Fee en Break/Fix?
                  </h3>
                  <p className="text-gray-700">
                    Fixed Fee betekent een vast maandbedrag voor onbeperkte support. U weet precies waar u aan toe bent. 
                    Break/Fix betekent dat u alleen betaalt wanneer er iets kapot is. Fixed Fee is voordeliger bij regelmatig gebruik.
                  </p>
                </div>
                <div className="bg-white rounded-lg shadow-md p-6">
                  <h3 className="font-bold text-lg text-gray-900 mb-2">
                    Zijn er opstartkosten?
                  </h3>
                  <p className="text-gray-700">
                    Voor nieuwe klanten rekenen we eenmalig onboarding kosten om uw systemen in kaart te brengen en te optimaliseren. 
                    Dit bedrag is afhankelijk van de grootte en complexiteit van uw infrastructuur.
                  </p>
                </div>
                <div className="bg-white rounded-lg shadow-md p-6">
                  <h3 className="font-bold text-lg text-gray-900 mb-2">
                    Kan ik tussentijds overstappen naar een ander pakket?
                  </h3>
                  <p className="text-gray-700">
                    Ja, u kunt maandelijks upgraden naar een uitgebreider pakket. Downgraden kan na de initiële contractperiode van 12 maanden.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-black text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-4">
                Klaar voor zorgeloze IT?
              </h2>
              <p className="text-xl opacity-90 mb-8">
                Laat ons een voorstel op maat maken voor uw organisatie
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  href="/contact" 
                  className="inline-block px-8 py-4 bg-primary-600 text-black rounded-lg font-semibold hover:bg-primary-700 transition-colors text-lg"
                >
                  Vraag offerte aan
                </Link>
                <Link 
                  href="/tevredenheidscheck" 
                  className="inline-block px-8 py-4 bg-white text-black rounded-lg font-semibold hover:bg-gray-100 transition-colors text-lg"
                >
                  Start gratis IT-check
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-10 h-10 bg-primary-600 rounded-lg flex items-center justify-center">
                  <span className="text-black font-bold text-xl">W</span>
                </div>
                <span className="text-2xl font-bold">Workflo</span>
              </div>
              <p className="text-gray-400 mb-4">
                Uw betrouwbare IT-partner in Amsterdam sinds 2015.
              </p>
              <div className="space-y-2">
                <div className="flex items-center">
                  <MapPinIcon className="w-5 h-5 text-primary-600 mr-2" />
                  <span className="text-sm">Koivistokade 3, Amsterdam</span>
                </div>
                <div className="flex items-center">
                  <PhoneIcon className="w-5 h-5 text-primary-600 mr-2" />
                  <span className="text-sm">020 308 0465</span>
                </div>
                <div className="flex items-center">
                  <EnvelopeIcon className="w-5 h-5 text-primary-600 mr-2" />
                  <span className="text-sm">info@workflo.it</span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="font-bold text-lg mb-4">Legal</h3>
              <ul className="space-y-2">
                <li><Link href="/privacy" className="text-gray-400 hover:text-primary-600">Privacy Policy</Link></li>
                <li><Link href="/terms" className="text-gray-400 hover:text-primary-600">Terms of Service</Link></li>
                <li><Link href="/cookies" className="text-gray-400 hover:text-primary-600">Cookie Policy</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-lg mb-4">Company</h3>
              <ul className="space-y-2">
                <li><Link href="/over-ons" className="text-gray-400 hover:text-primary-600">Over Ons</Link></li>
                <li><Link href="/contact" className="text-gray-400 hover:text-primary-600">Contact</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-lg mb-4">Services</h3>
              <ul className="space-y-2">
                <li><Link href="/diensten" className="text-gray-400 hover:text-primary-600">All Services</Link></li>
                <li><Link href="/tarieven" className="text-gray-400 hover:text-primary-600">Tarieven</Link></li>
                <li><Link href="/tevredenheidscheck" className="text-gray-400 hover:text-primary-600">Satisfaction Check</Link></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              &copy; 2025 Workflo B.V. All rights reserved.
            </p>
          </div>
        </div>
      </footer>

      {/* Warning Tape Bottom */}
      <div className="bg-gradient-to-r from-warning-yellow via-warning-black to-warning-yellow h-2"></div>
    </div>
  )
}