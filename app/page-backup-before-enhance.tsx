'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
// import dynamic from 'next/dynamic' // DISABLED - causing issues
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

// ALL DYNAMIC IMPORTS REMOVED - They were causing production crashes
// Components are now rendered statically inline where needed

// Failsafe translation function
const safeTranslate = (key: string): string => {
  const translations: Record<string, string> = {
    'hero.title': 'De IT-Partner die',
    'hero.title.highlight': 'Écht Levert',
    'hero.subtitle': 'Voor MKB in Amsterdam',
    'hero.description': 'Stop met IT-frustraties. Wij maken uw technologie betrouwbaar, veilig en betaalbaar.',
    'hero.cta.primary': 'Start Gratis IT-Check',
    'hero.cta.secondary': 'Bekijk Diensten',
    'hero.stats.clients': '200+ Tevreden Klanten',
    'hero.stats.uptime': '99.9% Uptime Garantie',
    'hero.stats.response': '< 15 min Responstijd',
    'hero.guarantee.title': 'Onze Garantie',
    'hero.guarantee.1': 'Vaste maandprijs, geen verrassingen',
    'hero.guarantee.2': '24/7 monitoring en support',
    'hero.guarantee.3': 'Resultaat binnen 30 dagen',
    'services.title': 'Onze Diensten',
    'services.description': 'Complete IT-oplossingen voor uw bedrijf',
    'services.managed_it.title': 'Managed IT Services',
    'services.managed_it.description': 'Complete IT-beheer met 24/7 monitoring, updates, en gebruikersondersteuning voor een vaste maandprijs.',
    'services.cybersecurity.title': 'Cybersecurity',
    'services.cybersecurity.description': 'Bescherm uw bedrijf tegen digitale dreigingen met geavanceerde security oplossingen en GDPR compliance.',
    'services.cloud.title': 'Cloud Diensten',
    'services.cloud.description': 'Veilige cloud migratie, Microsoft 365 implementatie, en cloud backup oplossingen.',
    'services.connectivity.title': 'Connectivity',
    'services.connectivity.description': 'Betrouwbare internetverbindingen, VPN oplossingen, en netwerk infrastructuur.',
    'services.view_all': 'Bekijk Alle Diensten',
    'team.title': 'Ons Team',
    'team.description': 'Ervaren IT professionals die klaar staan voor uw bedrijf',
    'testimonials.title': 'Wat Klanten Zeggen',
    'testimonials.description': 'Meer dan 200 tevreden klanten in Amsterdam',
    'simplicity.title': 'IT Hoeft Niet Ingewikkeld Te Zijn',
    'simplicity.description': 'Wij maken complexe technologie simpel en toegankelijk',
    'industry.title': 'Ervaring in Uw Sector',
    'industry.description': 'Specialistische kennis voor verschillende branches',
    'newsletter.title': 'Blijf Op De Hoogte',
    'newsletter.description': 'Ontvang IT-tips en updates',
    'cta.title': 'Klaar om te beginnen?',
    'cta.description': 'Ontdek binnen 10 minuten hoe gezond uw IT is'
  }
  
  return translations[key] || key.split('.').pop()?.replace(/_/g, ' ') || key
}

export default function HomeOriginalFixed() {
  const [activeService, setActiveService] = useState(0)
  
  // Use failsafe translation
  const t = safeTranslate
  
  // Service rotation - starts immediately, no mounting check
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveService((prev) => (prev + 1) % 4)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  const services = [
    {
      icon: ServerIcon,
      title: t('services.managed_it.title'),
      description: t('services.managed_it.description'),
      features: ['24/7 Monitoring', 'Helpdesk Support', 'Patch Management'],
      link: '/diensten/managed-it'
    },
    {
      icon: ShieldCheckIcon,
      title: t('services.cybersecurity.title'),
      description: t('services.cybersecurity.description'),
      features: ['Threat Protection', 'GDPR Compliance', 'Security Training'],
      link: '/diensten/cybersecurity'
    },
    {
      icon: CloudIcon,
      title: t('services.cloud.title'),
      description: t('services.cloud.description'),
      features: ['Microsoft 365', 'Cloud Backup', 'Azure Solutions'],
      link: '/diensten/cloud'
    },
    {
      icon: WifiIcon,
      title: t('services.connectivity.title'),
      description: t('services.connectivity.description'),
      features: ['Business Internet', 'VPN Setup', 'Network Design'],
      link: '/diensten/connectivity'
    }
  ]

  const teamMembers = [
    {
      name: 'Florian Wolff',
      role: 'Founder & CEO',
      image: '/images/team/florian.jpg',
      description: '15+ jaar ervaring in enterprise IT'
    },
    {
      name: 'Marcello',
      role: 'Lead Engineer',
      image: '/images/team/marcello.jpg',
      description: 'Microsoft & cloud specialist'
    },
    {
      name: 'Nam',
      role: 'Support Manager',
      image: '/images/team/nam.jpg',
      description: 'Customer success expert'
    },
    {
      name: 'Samir',
      role: 'Security Specialist',
      image: '/images/team/samir.jpg',
      description: 'Cybersecurity & compliance'
    }
  ]

  const testimonials = [
    {
      name: 'John Doornik',
      company: 'Casting Director',
      text: 'Workflo heeft onze IT volledig getransformeerd. Eindelijk kunnen we ons focussen op ons werk.',
      rating: 5
    },
    {
      name: 'Michael van der Mark',
      company: 'DoctorFeelgood',
      text: 'Professioneel, betrouwbaar en altijd bereikbaar. Exact wat we zochten.',
      rating: 5
    },
    {
      name: 'Lisa Chen',
      company: 'BLC FinanceView',
      text: 'De beste IT-partner die we ooit hebben gehad. Aanrader!',
      rating: 5
    }
  ]

  // NO MOUNTED CHECK - Show content immediately
  return (
    <div className="min-h-screen bg-white">
      {/* ALL DYNAMIC COMPONENTS DISABLED FOR STABILITY */}
      {/* <DangerTape /> */}
      {/* <Header /> */}
      {/* <NewsTicker /> */}
      
      {/* Static header replacement */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center h-20">
            <Link href="/" className="text-2xl font-bold text-gray-900">Workflo</Link>
            <nav className="hidden md:flex space-x-8">
              <Link href="/diensten" className="text-gray-700 hover:text-yellow-600 transition-colors">Diensten</Link>
              <Link href="/over-ons" className="text-gray-700 hover:text-yellow-600 transition-colors">Over Ons</Link>
              <Link href="/contact" className="text-gray-700 hover:text-yellow-600 transition-colors">Contact</Link>
            </nav>
            <Link href="/contact" className="md:hidden text-gray-700">
              <PhoneIcon className="w-6 h-6" />
            </Link>
          </div>
        </div>
      </header>

      <main>
        {/* Hero Section - NO FRAMER MOTION, pure CSS animations */}
        <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-50 via-white to-yellow-50">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute inset-0" style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
            }} />
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center max-w-5xl mx-auto animate-fadeIn">
              {/* Trust Badges */}
              <div className="flex justify-center gap-4 mb-8">
                <span className="bg-white px-3 py-1 rounded-full text-sm font-medium shadow-md">
                  ✓ Microsoft Partner
                </span>
                <span className="bg-white px-3 py-1 rounded-full text-sm font-medium shadow-md">
                  ✓ ISO Certified
                </span>
                <span className="bg-white px-3 py-1 rounded-full text-sm font-medium shadow-md">
                  ✓ GDPR Compliant
                </span>
              </div>

              {/* Main Title */}
              <h1 className="text-5xl lg:text-7xl font-bold text-gray-900 mb-6">
                {t('hero.title')}{' '}
                <span className="text-yellow-600 relative">
                  {t('hero.title.highlight')}
                  <div className="absolute -bottom-2 left-0 right-0 h-3 bg-yellow-400 -z-10 animate-expand" />
                </span>
              </h1>

              <p className="text-xl lg:text-2xl text-gray-600 mb-4">
                {t('hero.subtitle')}
              </p>

              <p className="text-lg text-gray-600 mb-8 max-w-3xl mx-auto">
                {t('hero.description')}
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <Link
                  href="/tevredenheidscheck"
                  className="group bg-yellow-400 text-black px-8 py-4 rounded-xl font-bold text-lg hover:bg-yellow-500 transition-all flex items-center justify-center"
                >
                  {t('hero.cta.primary')}
                  <ArrowRightIcon className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  href="/diensten"
                  className="bg-white text-gray-900 border-2 border-gray-300 px-8 py-4 rounded-xl font-bold text-lg hover:border-gray-400 transition-all flex items-center justify-center"
                >
                  {t('hero.cta.secondary')}
                </Link>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
                <div className="text-center animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
                  <div className="text-3xl font-bold text-gray-900">{t('hero.stats.clients')}</div>
                  <div className="text-gray-600">In Amsterdam</div>
                </div>
                <div className="text-center animate-fadeInUp" style={{ animationDelay: '0.3s' }}>
                  <div className="text-3xl font-bold text-gray-900">{t('hero.stats.uptime')}</div>
                  <div className="text-gray-600">Gegarandeerd</div>
                </div>
                <div className="text-center animate-fadeInUp" style={{ animationDelay: '0.4s' }}>
                  <div className="text-3xl font-bold text-gray-900">{t('hero.stats.response')}</div>
                  <div className="text-gray-600">Bij spoed</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Apple-inspired Hello Section - TEMPORARILY DISABLED FOR DEBUGGING */}
        {/* <HelloSection /> */}

        {/* Services Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12 animate-fadeIn">
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                {t('services.title')}
              </h2>
              <p className="text-xl text-gray-600">
                {t('services.description')}
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {services.map((service, index) => (
                <div
                  key={index}
                  className={`bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all cursor-pointer transform hover:-translate-y-1 animate-fadeInUp ${
                    activeService === index ? 'ring-2 ring-yellow-400 scale-105' : ''
                  }`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                  onClick={() => setActiveService(index)}
                >
                  <service.icon className="w-12 h-12 text-yellow-600 mb-4" />
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {service.description}
                  </p>
                  <ul className="space-y-2 mb-4">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <CheckCircleIcon className="w-5 h-5 text-green-500 mr-2 flex-shrink-0" />
                        <span className="text-sm text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    href={service.link}
                    className="text-yellow-600 hover:text-yellow-700 font-medium flex items-center"
                  >
                    Meer info
                    <ChevronRightIcon className="w-4 h-4 ml-1" />
                  </Link>
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <Link
                href="/diensten"
                className="inline-flex items-center bg-yellow-400 text-black px-6 py-3 rounded-lg font-bold hover:bg-yellow-500 transition-all"
              >
                {t('services.view_all')}
                <ArrowRightIcon className="w-5 h-5 ml-2" />
              </Link>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12 animate-fadeIn">
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                {t('team.title')}
              </h2>
              <p className="text-xl text-gray-600">
                {t('team.description')}
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {teamMembers.map((member, index) => (
                <div
                  key={index}
                  className="text-center animate-fadeInUp"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="relative w-48 h-48 mx-auto mb-4 rounded-full overflow-hidden bg-gray-200">
                    {member.image ? (
                      <Image
                        src={member.image}
                        alt={member.name}
                        fill
                        className="object-cover"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-4xl text-gray-400">
                        👤
                      </div>
                    )}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">{member.name}</h3>
                  <p className="text-yellow-600 font-medium">{member.role}</p>
                  <p className="text-gray-600 text-sm mt-2">{member.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                {t('testimonials.title')}
              </h2>
              <p className="text-xl text-gray-600">
                {t('testimonials.description')}
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-lg animate-fadeInUp" style={{ animationDelay: `${index * 0.1}s` }}>
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <StarIcon key={i} className="w-5 h-5 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-4 italic">"{testimonial.text}"</p>
                  <div>
                    <p className="font-bold text-gray-900">{testimonial.name}</p>
                    <p className="text-sm text-gray-600">{testimonial.company}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter & Contact - TEMPORARILY DISABLED FOR DEBUGGING */}
        {/* <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
              <div className="bg-white rounded-2xl shadow-xl border border-gray-200">
                <NewsletterFormSafe />
              </div>
              <div>
                <HubSpotContactForm />
              </div>
            </div>
          </div>
        </section> */}

        {/* News Feed - TEMPORARILY DISABLED FOR DEBUGGING */}
        {/* <NewsFeed /> */}

        {/* Final CTA */}
        <section className="py-20 bg-black text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">
              {t('cta.title')}
            </h2>
            <p className="text-xl mb-8 text-gray-300">
              {t('cta.description')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/tevredenheidscheck"
                className="bg-yellow-400 text-black px-8 py-4 rounded-xl font-bold text-lg hover:bg-yellow-500 transition-all"
              >
                Start Gratis IT-Check
              </Link>
              <a
                href="tel:0203080465"
                className="bg-white text-black px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-all"
              >
                Bel 020-30 80 465
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* <Footer /> */}
      {/* <DangerTape /> */}
      
      {/* Static footer replacement */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Workflo</h3>
              <p className="text-gray-400">De IT-Partner die Écht Levert</p>
            </div>
            <div>
              <h4 className="font-bold mb-3">Diensten</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/diensten/managed-it" className="hover:text-yellow-400">Managed IT</Link></li>
                <li><Link href="/diensten/cybersecurity" className="hover:text-yellow-400">Cybersecurity</Link></li>
                <li><Link href="/diensten/cloud" className="hover:text-yellow-400">Cloud</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-3">Contact</h4>
              <ul className="space-y-2 text-gray-400">
                <li>020-30 80 465</li>
                <li>info@workflo.it</li>
                <li>Amsterdam, NL</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-3">Legal</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/privacy" className="hover:text-yellow-400">Privacy Policy</Link></li>
                <li><Link href="/terms" className="hover:text-yellow-400">Terms</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 Workflo B.V. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Add CSS animations */}
      <style jsx global>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes expand {
          from {
            transform: scaleX(0);
          }
          to {
            transform: scaleX(1);
          }
        }
        
        .animate-fadeIn {
          animation: fadeIn 0.8s ease-out forwards;
        }
        
        .animate-fadeInUp {
          opacity: 0;
          animation: fadeInUp 0.6s ease-out forwards;
        }
        
        .animate-expand {
          animation: expand 0.8s ease-out 0.5s forwards;
          transform-origin: left;
        }
      `}</style>
    </div>
  )
}