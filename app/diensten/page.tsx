'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { PhoneIcon, EnvelopeIcon, MapPinIcon } from '@heroicons/react/24/outline'
import { 
  BuildingOfficeIcon,
  ShoppingCartIcon,
  AcademicCapIcon,
  HeartIcon,
  BanknotesIcon,
  TruckIcon,
  ChevronDownIcon,
  ExclamationCircleIcon,
  CheckCircleIcon
} from '@heroicons/react/24/outline'

export default function DienstenPage() {
  const [mounted, setMounted] = useState(false)
  const [expandedIndustry, setExpandedIndustry] = useState<string | null>(null)

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

  const industries = [
    {
      id: 'retail',
      industry: 'Retail & E-commerce',
      mainProblem: 'Uw webshop piekt tijdens sales, maar op rustige dagen betaalt u voor ongebruikte capaciteit',
      subProblems: [
        'Black Friday crasht uw site, kost u duizenden euros per minuut',
        'Voorraadsysteem loopt niet synchroon met online bestellingen',
        'Betaalprocessen haperen tijdens piekverkeer'
      ],
      emotion: 'U voelt de druk van concurrenten met betere online prestaties',
      solution: 'Workflo implementeert auto-scaling cloudinfrastructuur die meegroeit met uw drukte. Betaal alleen wat u gebruikt.',
      caseStudy: {
        client: 'Mode retailer Amsterdam',
        problem: '70% downtime tijdens sales',
        result: '99.9% uptime, 300% meer conversie'
      },
      icon: ShoppingCartIcon,
      color: 'purple',
      techStack: 'Shopify Plus integratie, Azure auto-scaling, Mollie payment gateway, real-time inventory sync'
    },
    {
      id: 'office',
      industry: 'Kantoororganisaties',
      mainProblem: 'Hybride werken zorgt voor chaos in uw IT-beheer en veiligheid',
      subProblems: [
        'Medewerkers kunnen niet bij bestanden vanaf thuis',
        'VPN verbindingen vallen constant weg',
        'Shadow IT door frustratie over trage systemen'
      ],
      emotion: 'Uw IT-afdeling is overwerkt en werknemers zijn gefrustreerd',
      solution: 'Complete Microsoft 365 transformatie met veilige cloud werkplekken. Werken alsof iedereen op kantoor zit.',
      caseStudy: {
        client: 'Advocatenkantoor Zuidas',
        problem: 'Geen veilige thuiswerkomgeving',
        result: 'Volledig hybride, ISO27001 compliant'
      },
      icon: BuildingOfficeIcon,
      color: 'blue',
      techStack: 'Microsoft 365 E5, Azure Virtual Desktop, Conditional Access, Teams Phone System'
    },
    {
      id: 'healthcare',
      industry: 'Zorg & Medisch',
      mainProblem: 'Patiëntgegevens zijn kwetsbaar en systemen voldoen niet aan NEN7510',
      subProblems: [
        'Angst voor datalek met AVG boetes tot 20 miljoen',
        'Verschillende systemen communiceren niet met elkaar',
        'Backup strategie is onduidelijk bij calamiteiten'
      ],
      emotion: 'De verantwoordelijkheid voor patiëntdata houdt u wakker',
      solution: 'NEN7510 gecertificeerde oplossingen met encrypted backups en 24/7 monitoring. Slaap weer rustig.',
      caseStudy: {
        client: 'Huisartsenpraktijk Noord-Holland',
        problem: 'Niet compliant, risico op boetes',
        result: 'Volledig NEN7510 compliant binnen 3 maanden'
      },
      icon: HeartIcon,
      color: 'red',
      techStack: 'NEN 7510 compliant hosting, encrypted backups, GDPR tools, medical device integration'
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
                IT-oplossingen voor uw sector
              </h1>
              <p className="text-xl lg:text-2xl opacity-90">
                Specifieke expertise voor uw unieke uitdagingen
              </p>
            </div>
          </div>
        </section>

        {/* Industries Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Kies uw sector
                </h2>
                <p className="text-xl text-gray-600">
                  Ontdek hoe we bedrijven zoals die van u helpen groeien
                </p>
              </div>

              <div className="space-y-8">
                {industries.map((item) => {
                  const Icon = item.icon
                  const isExpanded = expandedIndustry === item.id
                  
                  return (
                    <div 
                      key={item.id}
                      className="bg-white rounded-2xl shadow-lg overflow-hidden border-2 border-gray-100 hover:border-primary-600 transition-all duration-300"
                    >
                      <button
                        onClick={() => setExpandedIndustry(isExpanded ? null : item.id)}
                        className="w-full px-8 py-6 flex items-center justify-between hover:bg-gray-50 transition-colors"
                      >
                        <div className="flex items-center gap-4">
                          <div className={`p-3 bg-${item.color}-100 rounded-lg`}>
                            <Icon className={`w-8 h-8 text-${item.color}-600`} />
                          </div>
                          <div className="text-left">
                            <h3 className="text-2xl font-bold text-gray-900">
                              {item.industry}
                            </h3>
                            <p className="text-gray-600 mt-1">
                              {item.mainProblem}
                            </p>
                          </div>
                        </div>
                        <ChevronDownIcon className={`w-6 h-6 text-gray-400 transition-transform ${isExpanded ? 'rotate-180' : ''}`} />
                      </button>

                      {isExpanded && (
                        <div className="px-8 pb-8 border-t border-gray-100">
                          <div className="grid md:grid-cols-2 gap-8 mt-6">
                            {/* Problems */}
                            <div>
                              <h4 className="font-bold text-lg text-gray-900 mb-4 flex items-center gap-2">
                                <ExclamationCircleIcon className="w-5 h-5 text-red-500" />
                                Herkenbare problemen
                              </h4>
                              <ul className="space-y-3">
                                {item.subProblems.map((problem, idx) => (
                                  <li key={idx} className="flex items-start gap-2">
                                    <span className="text-red-500 mt-1">•</span>
                                    <span className="text-gray-700">{problem}</span>
                                  </li>
                                ))}
                              </ul>
                              <div className="mt-4 p-4 bg-yellow-50 rounded-lg border border-yellow-200">
                                <p className="text-sm text-yellow-800 italic">
                                  "{item.emotion}"
                                </p>
                              </div>
                            </div>

                            {/* Solution */}
                            <div>
                              <h4 className="font-bold text-lg text-gray-900 mb-4 flex items-center gap-2">
                                <CheckCircleIcon className="w-5 h-5 text-green-500" />
                                Onze oplossing
                              </h4>
                              <p className="text-gray-700 mb-4">
                                {item.solution}
                              </p>
                              <div className="p-4 bg-green-50 rounded-lg border border-green-200">
                                <p className="font-semibold text-green-900 mb-2">Case Study</p>
                                <p className="text-sm text-green-800">
                                  <strong>Klant:</strong> {item.caseStudy.client}<br />
                                  <strong>Probleem:</strong> {item.caseStudy.problem}<br />
                                  <strong>Resultaat:</strong> {item.caseStudy.result}
                                </p>
                              </div>
                              <div className="mt-4 p-3 bg-gray-100 rounded-lg">
                                <p className="text-xs text-gray-600">
                                  <strong>Tech Stack:</strong> {item.techStack}
                                </p>
                              </div>
                            </div>
                          </div>

                          <div className="mt-6 flex gap-4">
                            <Link 
                              href="/contact" 
                              className="px-6 py-3 bg-primary-600 text-black rounded-lg font-semibold hover:bg-primary-700 transition-colors"
                            >
                              Gratis adviesgesprek
                            </Link>
                            <Link 
                              href="/tevredenheidscheck" 
                              className="px-6 py-3 bg-white border-2 border-primary-600 text-primary-600 rounded-lg font-semibold hover:bg-primary-50 transition-colors"
                            >
                              Start IT-check
                            </Link>
                          </div>
                        </div>
                      )}
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-black text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-4">
                Niet gevonden wat u zocht?
              </h2>
              <p className="text-xl opacity-90 mb-8">
                We hebben expertise in meer dan 15 verschillende sectoren
              </p>
              <Link 
                href="/contact" 
                className="inline-block px-8 py-4 bg-primary-600 text-black rounded-lg font-semibold hover:bg-primary-700 transition-colors text-lg"
              >
                Bespreek uw specifieke situatie
              </Link>
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
                  <span className="text-sm">Koivistokade 3, 1013 AC Amsterdam</span>
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