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
  LockClosedIcon,
  QuestionMarkCircleIcon,
  GlobeAltIcon
} from '@heroicons/react/24/outline'
import { StarIcon } from '@heroicons/react/24/solid'

// Safe Static Components
import StaticHeader from '@/components/StaticHeader'
import StaticFooter from '@/components/StaticFooter'
import StaticDangerTape from '@/components/StaticDangerTape'
import SafeHubSpotForm from '@/components/SafeHubSpotForm'
import SafeNewsletter from '@/components/SafeNewsletter'
import SafeNewsFeed from '@/components/SafeNewsFeed'

export default function HomeComplete() {
  const [mounted, setMounted] = useState(false)
  const [activeService, setActiveService] = useState(0)
  const [currentLogoSet, setCurrentLogoSet] = useState(0)
  const [openFaq, setOpenFaq] = useState<number | null>(null)
  const [language, setLanguage] = useState<'nl' | 'en'>('nl')
  
  useEffect(() => {
    setMounted(true)
    
    // Add Hotjar
    if (typeof window !== 'undefined') {
      (function(h: any,o: any,t: any,j: any,a: any,r: any){
        h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
        h._hjSettings={hjid:3486977,hjsv:6};
        a=o.getElementsByTagName('head')[0];
        r=o.createElement('script');r.async=1;
        r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
        a.appendChild(r);
      })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=','','');
    }
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
      setCurrentLogoSet((prev) => (prev + 1) % 4)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  const services = [
    {
      title: 'Managed IT Services',
      description: 'Complete IT-ondersteuning voor uw bedrijf met 24/7 monitoring.',
      icon: ServerIcon,
      emoji: '🛡️',
      highlight: '€500/maand besparing',
      outcome: '35% kostenbesparing',
      video: '/videos/Workflo-code-animatie-2.mp4',
      link: '/diensten/managed-it'
    },
    {
      title: 'Cybersecurity',
      description: 'Bescherm uw bedrijf tegen digitale dreigingen.',
      icon: ShieldCheckIcon,
      emoji: '🔒',
      highlight: '0 ransomware hits',
      outcome: '100% bescherming',
      video: '/videos/Security_1.mp4',
      link: '/diensten/cybersecurity'
    },
    {
      title: 'Cloud Solutions',
      description: 'Veilige cloud-infrastructuur die meegroeit.',
      icon: CloudIcon,
      emoji: '☁️',
      highlight: 'Microsoft 365 Expert',
      outcome: '99.9% uptime',
      video: '/videos/Mobile-Device-Header-1.mp4',
      link: '/diensten/cloud'
    },
    {
      title: 'IT Consulting',
      description: 'Strategisch IT-advies voor optimale investeringen.',
      icon: CpuChipIcon,
      emoji: '💡',
      highlight: 'Strategic Planning',
      outcome: 'Optimale roadmap',
      video: '/videos/Workflo_W_Mobile_1.mp4',
      link: '/diensten/it-consulting'
    },
    {
      title: 'GDPR & Compliance',
      description: 'Volledige GDPR-compliance en data protection.',
      icon: LockClosedIcon,
      emoji: '📊',
      highlight: 'GDPR Gecertificeerd',
      outcome: '100% compliant',
      video: '/videos/Workflo-code-animatie-3.mp4',
      link: '/diensten/cybersecurity'
    },
    {
      title: 'Connectivity',
      description: 'Betrouwbare netwerk- en internetoplossingen.',
      icon: WifiIcon,
      emoji: '📡',
      highlight: 'Altijd verbonden',
      outcome: '99.97% uptime',
      video: '/videos/Mobile-Device-Header-3.mp4',
      link: '/diensten/connectivity'
    },
    {
      title: 'Backup & Recovery',
      description: 'Professionele backup en disaster recovery.',
      icon: ServerIcon,
      emoji: '💾',
      highlight: '3-2-1 Strategy',
      outcome: '0 dataverlies',
      video: '/videos/Workflo_W_final_1.mp4',
      link: '/diensten/managed-it'
    },
    {
      title: '24/7 Support',
      description: 'Altijd bereikbare technische ondersteuning.',
      icon: PhoneIcon,
      emoji: '📱',
      highlight: '4 min response',
      outcome: '24/7 beschikbaar',
      video: '/videos/Mobile-Device-Header-2.mp4',
      link: '/contact'
    }
  ]

  // ALL client logos including missing ones from todo.md
  const logoSets = [
    [
      { name: 'Havas Media', src: '/images/logos/havas-media.png' },
      { name: 'Podimo', src: '/images/logos/podimo.png' },
      { name: 'DoctorFeelgood', src: '/images/logos/doctorfeelgood.jpg' },
      { name: 'Aescap', src: '/images/logos/aescap.png' }
    ],
    [
      { name: 'Leyden Labs', src: '/images/logos/leydenlabs_Logo.png' },
      { name: 'TBWA', src: '/images/logos/tbwa_Logo.png' },
      { name: 'iO Digital', src: '/images/logos/io_Logo.png' },
      { name: 'Daily Paper', src: '/images/logos/dailypaper_Logo.png' }
    ],
    [
      { name: 'Hunt Amsterdam', src: '/images/logos/hunt-amsterdam.jpeg' },
      { name: 'Rademakkers', src: '/images/logos/rademakkers.png' },
      { name: 'Tonko', src: '/images/logos/tonko.png' },
      { name: 'DMC', src: '/images/logos/dmc.png' }
    ],
    [
      { name: 'John Doornik', src: '/images/logos/john-doornik.png' },
      { name: 'BLC FinanceView', src: '/images/logos/blc-financeview.png' },
      { name: 'Greenpeace', src: '/images/logos/greenpeace.png' },
      { name: 'JUMP', src: '/images/logos/jump.jpg' }
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

  const faqs = [
    {
      question: "Wat kost IT-ondersteuning voor mijn bedrijf?",
      answer: "Onze Fixed Fee pakketten beginnen vanaf €60 per gebruiker/maand voor remote support. Break-Fix support is beschikbaar vanaf €95/uur met strippenkaarten. We maken graag een persoonlijk voorstel op basis van uw specifieke situatie."
    },
    {
      question: "Hoe snel kunnen jullie bij een storing ter plaatse zijn?",
      answer: "Bij kritieke storingen zijn we binnen 15 minuten remote beschikbaar en binnen 2-4 uur on-site in Amsterdam. Voor Fixed Fee klanten geldt een gegarandeerde response tijd van maximaal 15 minuten."
    },
    {
      question: "Zijn jullie ook buiten kantooruren bereikbaar?",
      answer: "Ja, voor Fixed Fee klanten bieden we 24/7 support. Break-Fix klanten kunnen optioneel een SLA afsluiten voor support buiten kantooruren."
    },
    {
      question: "Helpen jullie ook met cloud migraties?",
      answer: "Absoluut! We zijn Microsoft Partner en specialiseren in Microsoft 365 migraties. We begeleiden het complete traject van planning tot implementatie en training."
    },
    {
      question: "Hoe zit het met cybersecurity en GDPR?",
      answer: "Security is onze topprioriteit. We bieden complete security audits, GDPR compliance checks, security awareness training en 24/7 monitoring van uw systemen."
    },
    {
      question: "Kunnen jullie onze huidige IT-leverancier vervangen?",
      answer: "Ja, we hebben een beproefd transitieproces waarbij we alles naadloos overnemen zonder downtime. We beginnen met een gratis IT-assessment om de huidige situatie in kaart te brengen."
    }
  ]

  const translations = {
    nl: {
      title: 'De IT-Partner die',
      titleHighlight: 'Écht Levert',
      subtitle: 'Voor MKB in Amsterdam',
      description: 'Stop met IT-frustraties. Wij maken uw technologie betrouwbaar, veilig en betaalbaar.',
      simplicity: 'Simpel, zonder gedoe.',
      promise: 'Dat is onze belofte.',
      ctaPrimary: 'Start Gratis IT-Check',
      ctaSecondary: 'Bekijk Diensten'
    },
    en: {
      title: 'The IT Partner that',
      titleHighlight: 'Actually Delivers',
      subtitle: 'For SMBs in Amsterdam',
      description: 'Stop IT frustrations. We make your technology reliable, secure and affordable.',
      simplicity: 'Simple, no hassle.',
      promise: "That's our promise.",
      ctaPrimary: 'Start Free IT Check',
      ctaSecondary: 'View Services'
    }
  }

  const t = translations[language]

  if (!mounted) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-4 border-yellow-400 border-t-transparent"></div>
          <p className="mt-4 text-gray-600">Workflo wordt geladen...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-white">
      <StaticDangerTape />
      
      {/* Header with Language Switcher */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center h-20">
            <Link href="/" className="text-2xl font-bold text-gray-900">
              Workflo
            </Link>
            <nav className="hidden md:flex items-center space-x-8">
              <Link href="/diensten" className="text-gray-700 hover:text-yellow-600">
                Diensten
              </Link>
              <Link href="/over-ons" className="text-gray-700 hover:text-yellow-600">
                Over Ons
              </Link>
              <Link href="/contact" className="text-gray-700 hover:text-yellow-600">
                Contact
              </Link>
              <button
                onClick={() => setLanguage(language === 'nl' ? 'en' : 'nl')}
                className="flex items-center gap-1 px-3 py-1 rounded-lg border border-gray-300 hover:border-yellow-400"
              >
                <GlobeAltIcon className="w-4 h-4" />
                {language === 'nl' ? 'EN' : 'NL'}
              </button>
            </nav>
          </div>
        </div>
      </header>

      <main>
        {/* Hero Section with Video Background */}
        <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
          {/* Video Background */}
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover opacity-10"
          >
            <source src="/videos/Workflo-code-animatie-2.mp4" type="video/mp4" />
          </video>
          
          <div className="absolute inset-0 bg-gradient-to-br from-gray-50/90 via-white/90 to-yellow-50/90"></div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center max-w-5xl mx-auto">
              {/* Trust Badges */}
              <div className="flex justify-center gap-4 mb-8 animate-fadeInDown">
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
              <h1 className="text-5xl lg:text-7xl font-bold text-gray-900 mb-6 animate-fadeIn">
                {t.title}{' '}
                <span className="text-yellow-600 relative">
                  {t.titleHighlight}
                  <div className="absolute -bottom-2 left-0 right-0 h-3 bg-yellow-400 -z-10 animate-expand" />
                </span>
              </h1>

              <p className="text-xl lg:text-2xl text-gray-600 mb-4 animate-fadeInUp">
                {t.subtitle}
              </p>

              <p className="text-lg text-gray-600 mb-8 max-w-3xl mx-auto animate-fadeInUp">
                {t.description}
                <br className="hidden md:block" />
                <strong>{t.simplicity}</strong> {t.promise}
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-fadeInUp">
                <Link
                  href="/tevredenheidscheck"
                  className="group bg-yellow-400 text-black px-8 py-4 rounded-xl font-bold text-lg hover:bg-yellow-500 transition-all flex items-center justify-center"
                >
                  {t.ctaPrimary}
                  <ArrowRightIcon className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  href="/diensten"
                  className="bg-white text-gray-900 border-2 border-gray-300 px-8 py-4 rounded-xl font-bold text-lg hover:border-gray-400 transition-all"
                >
                  {t.ctaSecondary}
                </Link>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
                <div className="text-center animate-fadeInUp">
                  <div className="text-3xl font-bold text-gray-900">200+ Klanten</div>
                  <div className="text-gray-600">In Amsterdam</div>
                </div>
                <div className="text-center animate-fadeInUp">
                  <div className="text-3xl font-bold text-gray-900">99.9% Uptime</div>
                  <div className="text-gray-600">Gegarandeerd</div>
                </div>
                <div className="text-center animate-fadeInUp">
                  <div className="text-3xl font-bold text-gray-900">&lt; 15 min</div>
                  <div className="text-gray-600">Response tijd</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Client Logos - Complete List */}
        <section className="py-12 bg-gray-50 overflow-hidden">
          <div className="container mx-auto px-4">
            <h3 className="text-center text-lg font-medium text-gray-600 mb-8">
              Sector Ervaring Sinds 2015
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
              {logoSets[currentLogoSet].map((logo, index) => (
                <div
                  key={logo.name}
                  className="flex items-center justify-center opacity-60 hover:opacity-100 transition-all"
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
            <div className="text-center mt-4 text-sm text-gray-500">
              Vertrouwd door: Havas Media • Podimo • Leyden Labs • TBWA • iO Digital • Daily Paper • Greenpeace • en 200+ anderen
            </div>
          </div>
        </section>

        {/* Services with Videos */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                Onze Diensten
              </h2>
              <p className="text-xl text-gray-600">
                Complete IT-oplossingen voor uw bedrijf
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {services.map((service, index) => {
                const Icon = service.icon
                return (
                  <div
                    key={index}
                    className={`bg-white rounded-xl shadow-lg overflow-hidden cursor-pointer transform transition-all hover:-translate-y-2 hover:shadow-2xl ${
                      activeService === index ? 'ring-2 ring-yellow-400' : ''
                    }`}
                    onClick={() => setActiveService(index)}
                  >
                    {/* Video Background for Service Card */}
                    <div className="relative h-32 overflow-hidden bg-gradient-to-br from-yellow-50 to-orange-50">
                      {service.video && (
                        <video
                          autoPlay
                          loop
                          muted
                          playsInline
                          className="absolute inset-0 w-full h-full object-cover opacity-30"
                        >
                          <source src={service.video} type="video/mp4" />
                        </video>
                      )}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-5xl">{service.emoji}</span>
                      </div>
                    </div>
                    
                    <div className="p-6">
                      <div className="flex items-center gap-2 mb-3">
                        <Icon className="w-6 h-6 text-yellow-600" />
                        <h3 className="text-lg font-bold text-gray-900">
                          {service.title}
                        </h3>
                      </div>
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
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                Veelgestelde Vragen
              </h2>
              <p className="text-xl text-gray-600">
                Alles wat u wilt weten over onze IT-diensten
              </p>
            </div>

            <div className="max-w-3xl mx-auto">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="mb-4 bg-white rounded-lg shadow-md overflow-hidden"
                >
                  <button
                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                    className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50"
                  >
                    <span className="font-medium text-gray-900">{faq.question}</span>
                    <ChevronRightIcon
                      className={`w-5 h-5 text-gray-500 transform transition-transform ${
                        openFaq === index ? 'rotate-90' : ''
                      }`}
                    />
                  </button>
                  {openFaq === index && (
                    <div className="px-6 py-4 border-t bg-gray-50">
                      <p className="text-gray-700">{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                Ons Team
              </h2>
              <p className="text-xl text-gray-600">
                Ervaren IT professionals die klaar staan voor uw bedrijf
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {teamMembers.map((member, index) => (
                <div key={index} className="text-center">
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

        {/* News Feed */}
        <SafeNewsFeed />

        {/* Newsletter & Contact Forms */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
              <SafeNewsletter />
              <SafeHubSpotForm />
            </div>
          </div>
        </section>

        {/* Uptime Status */}
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4 text-center">
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              🟢 Systeem Status
            </h3>
            <div className="max-w-2xl mx-auto bg-white rounded-lg shadow p-6">
              <iframe
                src="https://uptime.workflo.it/status/workflo"
                className="w-full h-96 border-0"
                title="Uptime Status"
              />
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-20 bg-black text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-yellow-600/20 to-orange-600/20 animate-pulse"></div>
          <div className="container mx-auto px-4 text-center relative z-10">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">
              Klaar om te beginnen?
            </h2>
            <p className="text-xl mb-8 text-gray-300">
              Ontdek binnen 10 minuten hoe gezond uw IT is
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

      <StaticFooter />
      <StaticDangerTape />
      
      {/* Inline Animations */}
      <style jsx global>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeInDown {
          from { opacity: 0; transform: translateY(-30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes expand {
          from { transform: scaleX(0); }
          to { transform: scaleX(1); }
        }
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }
        .animate-fadeIn { animation: fadeIn 0.8s ease-out forwards; }
        .animate-fadeInUp { opacity: 0; animation: fadeInUp 0.6s ease-out forwards; }
        .animate-fadeInDown { opacity: 0; animation: fadeInDown 0.6s ease-out forwards; }
        .animate-expand { animation: expand 0.8s ease-out 0.5s forwards; transform-origin: left; }
        .animate-pulse { animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite; }
      `}</style>
    </div>
  )
}