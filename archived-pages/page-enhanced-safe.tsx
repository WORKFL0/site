'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
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

// Import animations CSS
import '../styles/animations.css'

// Safe Static Components (no dynamic imports!)
import StaticHeader from '@/components/StaticHeader'
import StaticFooter from '@/components/StaticFooter'
import StaticDangerTape from '@/components/StaticDangerTape'

export default function HomeEnhancedSafe() {
  const [mounted, setMounted] = useState(false)
  const [activeService, setActiveService] = useState(0)
  const [currentLogoSet, setCurrentLogoSet] = useState(0)
  
  useEffect(() => {
    setMounted(true)
  }, [])

  // Service rotation
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveService((prev) => (prev + 1) % 8)
    }, 4000)
    return () => clearInterval(interval)
  }, [])

  // Logo carousel rotation
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentLogoSet((prev) => (prev + 1) % 3)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  const services = [
    {
      title: 'Managed IT Services',
      description: 'Complete IT-ondersteuning voor uw bedrijf met 24/7 monitoring en proactief beheer.',
      icon: ServerIcon,
      emoji: '🛡️',
      highlight: '€500/maand besparing',
      outcome: '35% kostenbesparing gemiddeld',
      link: '/diensten/managed-it'
    },
    {
      title: 'Cybersecurity',
      description: 'Bescherm uw bedrijf tegen digitale dreigingen met enterprise-grade security.',
      icon: ShieldCheckIcon,
      emoji: '🔒',
      highlight: '0 ransomware hits',
      outcome: '100% bescherming sinds 2015',
      link: '/diensten/cybersecurity'
    },
    {
      title: 'Cloud Solutions',
      description: 'Veilige en schaalbare cloud-infrastructuur die meegroeit met uw bedrijf.',
      icon: CloudIcon,
      emoji: '☁️',
      highlight: 'Microsoft 365 Expert',
      outcome: '99.9% uptime gegarandeerd',
      link: '/diensten/cloud'
    },
    {
      title: 'IT Consulting',
      description: 'Strategisch IT-advies om uw technologie-investeringen te optimaliseren.',
      icon: CpuChipIcon,
      emoji: '💡',
      highlight: 'Strategic Planning',
      outcome: 'Optimale IT-roadmap',
      link: '/diensten/it-consulting'
    },
    {
      title: 'GDPR & Compliance',
      description: 'Volledige GDPR-compliance en data protection voor uw organisatie.',
      icon: LockClosedIcon,
      emoji: '📊',
      highlight: 'GDPR Gecertificeerd',
      outcome: '100% compliant sinds AVG',
      link: '/diensten/cybersecurity'
    },
    {
      title: 'Network & Connectivity',
      description: 'Betrouwbare netwerk- en internetoplossingen voor maximale uptime.',
      icon: WifiIcon,
      emoji: '📡',
      highlight: 'Altijd verbonden',
      outcome: '99.97% netwerkuptime',
      link: '/diensten/connectivity'
    },
    {
      title: 'Backup & Recovery',
      description: 'Professionele backup- en disaster recovery oplossingen.',
      icon: ServerIcon,
      emoji: '💾',
      highlight: '3-2-1 Backup Strategy',
      outcome: '0 dataverlies sinds 2015',
      link: '/diensten/managed-it'
    },
    {
      title: '24/7 Support',
      description: 'Altijd bereikbare technische ondersteuning voor uw IT-vragen.',
      icon: PhoneIcon,
      emoji: '📱',
      highlight: '4 min response time',
      outcome: '24/7 beschikbaarheid',
      link: '/contact'
    }
  ]

  // Client logos in sets for carousel
  const logoSets = [
    [
      { name: 'Havas Media', src: '/images/logos/havas-media.png' },
      { name: 'Podimo', src: '/images/logos/podimo.png' },
      { name: 'DoctorFeelgood', src: '/images/logos/doctorfeelgood.jpg' },
      { name: 'BLC FinanceView', src: '/images/logos/blc-financeview.png' }
    ],
    [
      { name: 'Leyden Labs', src: '/images/logos/leydenlabs_Logo.png' },
      { name: 'TBWA', src: '/images/logos/tbwa_Logo.png' },
      { name: 'iO Digital', src: '/images/logos/io_Logo.png' },
      { name: 'Daily Paper', src: '/images/logos/dailypaper_Logo.png' }
    ],
    [
      { name: 'Greenpeace', src: '/images/logos/greenpeace.png' },
      { name: 'JUMP', src: '/images/logos/jump.jpg' },
      { name: 'Hunt Amsterdam', src: '/images/logos/hunt-amsterdam.jpeg' },
      { name: 'DMC', src: '/images/logos/dmc.png' }
    ]
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
      role: 'Junior Infrastructure Engineer',
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
      name: 'Mas Samir',
      role: 'Junior Support Engineer',
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

  if (!mounted) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <div className="animate-rotate inline-block">
            <div className="w-12 h-12 border-4 border-yellow-400 border-t-transparent rounded-full"></div>
          </div>
          <p className="mt-4 text-gray-600">Workflo wordt geladen...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-white">
      <StaticDangerTape />
      <StaticHeader />

      <main>
        {/* Hero Section with Beautiful Animations */}
        <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-50 via-white to-yellow-50">
          {/* Animated Background Pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute inset-0" style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
            }} />
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center max-w-5xl mx-auto">
              {/* Trust Badges */}
              <div className="flex justify-center gap-4 mb-8 animate-fadeInDown">
                <span className="bg-white px-3 py-1 rounded-full text-sm font-medium shadow-md stagger-1">
                  ✓ Microsoft Partner
                </span>
                <span className="bg-white px-3 py-1 rounded-full text-sm font-medium shadow-md stagger-2">
                  ✓ ISO Certified
                </span>
                <span className="bg-white px-3 py-1 rounded-full text-sm font-medium shadow-md stagger-3">
                  ✓ GDPR Compliant
                </span>
              </div>

              {/* Main Title */}
              <h1 className="text-5xl lg:text-7xl font-bold text-gray-900 mb-6 animate-fadeIn">
                De IT-Partner die{' '}
                <span className="text-yellow-600 relative">
                  Écht Levert
                  <div className="absolute -bottom-2 left-0 right-0 h-3 bg-yellow-400 -z-10 animate-expand" />
                </span>
              </h1>

              <p className="text-xl lg:text-2xl text-gray-600 mb-4 animate-fadeInUp stagger-1">
                Voor MKB in Amsterdam
              </p>

              <p className="text-lg text-gray-600 mb-8 max-w-3xl mx-auto animate-fadeInUp stagger-2">
                Stop met IT-frustraties. Wij maken uw technologie betrouwbaar, veilig en betaalbaar.
                <br className="hidden md:block" />
                <strong>Simpel, zonder gedoe.</strong> Dat is onze belofte.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-fadeInUp stagger-3">
                <Link
                  href="/tevredenheidscheck"
                  className="group bg-yellow-400 text-black px-8 py-4 rounded-xl font-bold text-lg hover:bg-yellow-500 transition-all flex items-center justify-center hover-lift"
                >
                  Start Gratis IT-Check
                  <ArrowRightIcon className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  href="/diensten"
                  className="bg-white text-gray-900 border-2 border-gray-300 px-8 py-4 rounded-xl font-bold text-lg hover:border-gray-400 transition-all flex items-center justify-center hover-lift"
                >
                  Bekijk Diensten
                </Link>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
                <div className="text-center animate-fadeInUp stagger-4">
                  <div className="text-3xl font-bold text-gray-900">200+ Klanten</div>
                  <div className="text-gray-600">In Amsterdam</div>
                </div>
                <div className="text-center animate-fadeInUp stagger-5">
                  <div className="text-3xl font-bold text-gray-900">99.9% Uptime</div>
                  <div className="text-gray-600">Gegarandeerd</div>
                </div>
                <div className="text-center animate-fadeInUp stagger-6">
                  <div className="text-3xl font-bold text-gray-900">&lt; 15 min</div>
                  <div className="text-gray-600">Response tijd</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Client Logos Carousel */}
        <section className="py-12 bg-gray-50 overflow-hidden">
          <div className="container mx-auto px-4">
            <h3 className="text-center text-lg font-medium text-gray-600 mb-8 animate-fadeIn">
              Vertrouwd door 200+ bedrijven sinds 2015
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
              {logoSets[currentLogoSet].map((logo, index) => (
                <div
                  key={logo.name}
                  className={`flex items-center justify-center opacity-60 hover:opacity-100 transition-all animate-fadeInUp stagger-${index + 1}`}
                >
                  <Image
                    src={logo.src}
                    alt={logo.name}
                    width={120}
                    height={60}
                    className="max-h-12 w-auto object-contain"
                    onError={(e) => {
                      e.currentTarget.src = '/images/placeholder-logo.png'
                    }}
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4 animate-fadeIn">
                Onze Diensten
              </h2>
              <p className="text-xl text-gray-600 animate-fadeInUp">
                Complete IT-oplossingen voor uw bedrijf
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {services.slice(0, 8).map((service, index) => {
                const Icon = service.icon
                return (
                  <div
                    key={index}
                    className={`bg-white rounded-xl p-6 shadow-lg service-card cursor-pointer animate-fadeInUp stagger-${(index % 4) + 1} ${
                      activeService === index ? 'ring-2 ring-yellow-400 scale-105' : ''
                    }`}
                    onClick={() => setActiveService(index)}
                  >
                    <div className="text-4xl mb-4">{service.emoji}</div>
                    <Icon className="w-8 h-8 text-yellow-600 mb-4" />
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4">
                      {service.description}
                    </p>
                    <div className="space-y-2 mb-4">
                      <div className="text-sm text-yellow-600 font-medium">
                        ✓ {service.highlight}
                      </div>
                      <div className="text-xs text-gray-500">
                        {service.outcome}
                      </div>
                    </div>
                    <Link
                      href={service.link}
                      className="text-yellow-600 hover:text-yellow-700 font-medium text-sm flex items-center"
                    >
                      Meer info
                      <ChevronRightIcon className="w-4 h-4 ml-1" />
                    </Link>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4 animate-fadeIn">
                Ons Team
              </h2>
              <p className="text-xl text-gray-600 animate-fadeInUp">
                Ervaren IT professionals die klaar staan voor uw bedrijf
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {teamMembers.map((member, index) => (
                <div
                  key={index}
                  className={`text-center animate-fadeInUp stagger-${index + 1}`}
                >
                  <div className="relative w-48 h-48 mx-auto mb-4 rounded-full overflow-hidden bg-gray-200 hover-grow">
                    {member.image ? (
                      <Image
                        src={member.image}
                        alt={member.name}
                        fill
                        className="object-cover"
                        onError={(e) => {
                          e.currentTarget.src = '/images/placeholder-avatar.jpg'
                        }}
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
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4 animate-fadeIn">
                Wat Klanten Zeggen
              </h2>
              <p className="text-xl text-gray-600 animate-fadeInUp">
                Meer dan 200 tevreden klanten in Amsterdam
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div 
                  key={index} 
                  className={`bg-white rounded-xl p-6 shadow-lg hover-lift animate-fadeInUp stagger-${index + 1}`}
                >
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

        {/* Final CTA */}
        <section className="py-20 bg-black text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-yellow-600/20 to-orange-600/20 animate-pulse"></div>
          <div className="container mx-auto px-4 text-center relative z-10">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4 animate-fadeIn">
              Klaar om te beginnen?
            </h2>
            <p className="text-xl mb-8 text-gray-300 animate-fadeInUp">
              Ontdek binnen 10 minuten hoe gezond uw IT is
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fadeInUp stagger-2">
              <Link
                href="/tevredenheidscheck"
                className="bg-yellow-400 text-black px-8 py-4 rounded-xl font-bold text-lg hover:bg-yellow-500 transition-all hover-lift"
              >
                Start Gratis IT-Check
              </Link>
              <a
                href="tel:0203080465"
                className="bg-white text-black px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-all hover-lift"
              >
                Bel 020-30 80 465
              </a>
            </div>
          </div>
        </section>
      </main>

      <StaticFooter />
      <StaticDangerTape />
    </div>
  )
}