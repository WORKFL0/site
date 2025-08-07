'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { 
  ChevronRightIcon, 
  CheckCircleIcon,
  PhoneIcon,
  EnvelopeIcon,
  ClockIcon,
  ShieldCheckIcon,
  ServerIcon,
  CloudIcon,
  ArrowRightIcon,
  BuildingOfficeIcon,
  MapPinIcon,
  UserGroupIcon,
  CpuChipIcon,
  WifiIcon,
  LockClosedIcon
} from '@heroicons/react/24/outline'
import { StarIcon } from '@heroicons/react/24/solid'

export default function Home() {
  const [mounted, setMounted] = useState(false)

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

  const services = [
    {
      icon: ServerIcon,
      title: 'Managed IT Services',
      description: 'Complete IT-ondersteuning voor uw bedrijf met 24/7 monitoring en proactief beheer.',
      features: ['24/7 Monitoring', 'Help Desk Support', 'Proactief Onderhoud', 'Security Updates']
    },
    {
      icon: CloudIcon,
      title: 'Cloud Solutions',
      description: 'Veilige en schaalbare cloud-infrastructuur die meegroeit met uw bedrijf.',
      features: ['Microsoft 365', 'Cloud Backup', 'Disaster Recovery', 'Cloud Security']
    },
    {
      icon: ShieldCheckIcon,
      title: 'Cybersecurity',
      description: 'Bescherm uw bedrijf tegen digitale dreigingen met enterprise-grade security.',
      features: ['Threat Detection', 'Security Audits', 'GDPR Compliance', 'Employee Training']
    },
    {
      icon: CpuChipIcon,
      title: 'IT Consulting',
      description: 'Strategisch IT-advies om uw technologie-investeringen te optimaliseren.',
      features: ['IT Strategy', 'Digital Transformation', 'Cost Optimization', 'Technology Roadmap']
    },
    {
      icon: WifiIcon,
      title: 'Connectivity',
      description: 'Betrouwbare netwerk- en internetoplossingen voor maximale uptime.',
      features: ['Network Design', 'WiFi Solutions', 'VPN Setup', 'Bandwidth Management']
    },
    {
      icon: UserGroupIcon,
      title: 'Project Management',
      description: 'Professioneel projectmanagement voor al uw IT-implementaties.',
      features: ['Planning & Execution', 'Resource Management', 'Risk Assessment', 'Quality Control']
    }
  ]

  const testimonials = [
    {
      name: 'Jan de Vries',
      role: 'CEO',
      company: 'Tech Innovations B.V.',
      content: 'Workflo heeft onze IT-infrastructuur getransformeerd. We hebben een kostenbesparing van 35% gerealiseerd terwijl de betrouwbaarheid is verbeterd.',
      rating: 5
    },
    {
      name: 'Sarah Johnson',
      role: 'Operations Manager',
      company: 'Digital Agency Amsterdam',
      content: 'De 24/7 support is ongelooflijk. Elk probleem wordt snel opgelost, waardoor ons team productief blijft.',
      rating: 5
    },
    {
      name: 'Michael Chen',
      role: 'Finance Director',
      company: 'Growth Partners NL',
      content: 'Eindelijk een IT-partner die echt begrijpt wat MKB bedrijven nodig hebben. Workflo denkt proactief mee.',
      rating: 5
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
              <Link href="/diensten" className="text-gray-700 hover:text-primary-600 font-medium transition-colors">
                Diensten
              </Link>
              <Link href="/over-ons" className="text-gray-700 hover:text-primary-600 font-medium transition-colors">
                Over Ons
              </Link>
              <Link href="/tarieven" className="text-gray-700 hover:text-primary-600 font-medium transition-colors">
                Tarieven
              </Link>
              <Link href="/case-studies" className="text-gray-700 hover:text-primary-600 font-medium transition-colors">
                Case Studies
              </Link>
              <Link href="/contact" className="text-gray-700 hover:text-primary-600 font-medium transition-colors">
                Contact
              </Link>
              <Link 
                href="/tevredenheidscheck" 
                className="px-4 py-2 bg-primary-600 text-black font-semibold rounded-lg hover:bg-primary-500 transition-colors"
              >
                Gratis Check
              </Link>
            </nav>
          </div>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-gray-50 to-white py-20 overflow-hidden">
          <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
          <div className="container mx-auto px-4 relative">
            <div className="max-w-5xl">
              <div className="inline-flex items-center bg-primary-100 text-primary-900 px-4 py-2 rounded-full text-sm font-semibold mb-6">
                <CheckCircleIcon className="w-4 h-4 mr-2" />
                Amsterdam's Trusted IT Partner Since 2015
              </div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
                Your IT Should <span className="text-primary-600">Drive Growth</span>,<br />
                Not Hold You Back
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed">
                Amsterdam's SMEs trust Workflo to transform their IT from a cost center into a growth engine. 
                Reduce IT costs by 35% while increasing productivity.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <Link 
                  href="/tevredenheidscheck" 
                  className="inline-flex items-center justify-center px-8 py-4 bg-primary-600 text-black font-bold rounded-lg hover:bg-primary-500 transform hover:scale-105 transition-all shadow-lg"
                >
                  Start Gratis Tevredenheidscheck
                  <ArrowRightIcon className="w-5 h-5 ml-2" />
                </Link>
                <Link 
                  href="/tarieven" 
                  className="inline-flex items-center justify-center px-8 py-4 bg-white text-gray-900 font-bold rounded-lg hover:bg-gray-50 transform hover:scale-105 transition-all shadow-lg border-2 border-gray-200"
                >
                  Bekijk Tarieven
                  <ChevronRightIcon className="w-5 h-5 ml-2" />
                </Link>
              </div>

              {/* Trust Indicators */}
              <div className="flex flex-wrap items-center gap-8">
                <div className="flex items-center">
                  <CheckCircleIcon className="w-5 h-5 text-green-600 mr-2" />
                  <span className="text-gray-700">100+ Tevreden Klanten</span>
                </div>
                <div className="flex items-center">
                  <CheckCircleIcon className="w-5 h-5 text-green-600 mr-2" />
                  <span className="text-gray-700">24/7 Support</span>
                </div>
                <div className="flex items-center">
                  <CheckCircleIcon className="w-5 h-5 text-green-600 mr-2" />
                  <span className="text-gray-700">ISO Gecertificeerd</span>
                </div>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-20">
              <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
                <div className="text-4xl font-bold text-primary-600 mb-2">35%</div>
                <div className="text-gray-700 font-medium">Kostenbesparing</div>
                <div className="text-sm text-gray-500 mt-1">Gemiddeld per klant</div>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
                <div className="text-4xl font-bold text-primary-600 mb-2">99.9%</div>
                <div className="text-gray-700 font-medium">Uptime Garantie</div>
                <div className="text-sm text-gray-500 mt-1">SLA gegarandeerd</div>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
                <div className="text-4xl font-bold text-primary-600 mb-2">24/7</div>
                <div className="text-gray-700 font-medium">Support</div>
                <div className="text-sm text-gray-500 mt-1">Altijd bereikbaar</div>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
                <div className="text-4xl font-bold text-primary-600 mb-2">&lt;15min</div>
                <div className="text-gray-700 font-medium">Response Time</div>
                <div className="text-sm text-gray-500 mt-1">Gemiddeld</div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Complete IT-Oplossingen voor Uw Bedrijf
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Van managed services tot cybersecurity, wij hebben alle expertise in huis om uw IT zorgeloos te maken.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div key={index} className="bg-gray-50 rounded-xl p-6 hover:shadow-xl transition-all group">
                  <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary-600 transition-colors">
                    <service.icon className="w-6 h-6 text-primary-900 group-hover:text-black" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <CheckCircleIcon className="w-5 h-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link href="/diensten" className="inline-flex items-center text-primary-600 font-semibold mt-4 hover:text-primary-700">
                    Meer info
                    <ChevronRightIcon className="w-4 h-4 ml-1" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Wat Onze Klanten Zeggen
              </h2>
              <p className="text-xl text-gray-600">
                Meer dan 100 bedrijven vertrouwen op Workflo voor hun IT
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-white rounded-xl p-8 shadow-lg">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <StarIcon key={i} className="w-5 h-5 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-6 italic">"{testimonial.content}"</p>
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.name}</div>
                    <div className="text-sm text-gray-600">{testimonial.role}</div>
                    <div className="text-sm text-primary-600">{testimonial.company}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-primary-600">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
              Klaar om Uw IT te Transformeren?
            </h2>
            <p className="text-xl text-gray-900 mb-8 max-w-2xl mx-auto">
              Ontdek in 5 minuten hoe tevreden u bent met uw huidige IT en krijg direct advies.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/tevredenheidscheck" 
                className="inline-flex items-center justify-center px-8 py-4 bg-black text-white font-bold rounded-lg hover:bg-gray-900 transform hover:scale-105 transition-all"
              >
                Start Tevredenheidscheck
                <ArrowRightIcon className="w-5 h-5 ml-2" />
              </Link>
              <Link 
                href="/contact" 
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-black font-bold rounded-lg hover:bg-gray-100 transform hover:scale-105 transition-all"
              >
                <PhoneIcon className="w-5 h-5 mr-2" />
                Bel 020 308 0465
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
              <h3 className="font-bold text-lg mb-4">Diensten</h3>
              <ul className="space-y-2">
                <li><Link href="/diensten/managed-it" className="text-gray-400 hover:text-primary-600">Managed IT</Link></li>
                <li><Link href="/diensten/cloud" className="text-gray-400 hover:text-primary-600">Cloud Solutions</Link></li>
                <li><Link href="/diensten/cybersecurity" className="text-gray-400 hover:text-primary-600">Cybersecurity</Link></li>
                <li><Link href="/diensten/connectivity" className="text-gray-400 hover:text-primary-600">Connectivity</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-lg mb-4">Bedrijf</h3>
              <ul className="space-y-2">
                <li><Link href="/over-ons" className="text-gray-400 hover:text-primary-600">Over Ons</Link></li>
                <li><Link href="/case-studies" className="text-gray-400 hover:text-primary-600">Case Studies</Link></li>
                <li><Link href="/careers" className="text-gray-400 hover:text-primary-600">Werken Bij</Link></li>
                <li><Link href="/contact" className="text-gray-400 hover:text-primary-600">Contact</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-lg mb-4">Resources</h3>
              <ul className="space-y-2">
                <li><Link href="/tevredenheidscheck" className="text-gray-400 hover:text-primary-600">Tevredenheidscheck</Link></li>
                <li><Link href="/tarieven" className="text-gray-400 hover:text-primary-600">Tarieven</Link></li>
                <li><Link href="/faq" className="text-gray-400 hover:text-primary-600">FAQ</Link></li>
                <li><Link href="/support" className="text-gray-400 hover:text-primary-600">Support</Link></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              &copy; 2025 Workflo B.V. Alle rechten voorbehouden.
            </p>
            <div className="flex space-x-6">
              <Link href="/privacy" className="text-gray-400 hover:text-primary-600 text-sm">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-gray-400 hover:text-primary-600 text-sm">
                Algemene Voorwaarden
              </Link>
              <Link href="/cookies" className="text-gray-400 hover:text-primary-600 text-sm">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </footer>

      {/* Warning Tape Bottom */}
      <div className="bg-gradient-to-r from-warning-yellow via-warning-black to-warning-yellow h-2"></div>
    </div>
  )
}