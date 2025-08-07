'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
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
import NewsletterFormSafe from '../components/forms/NewsletterFormSafe'
import NewsFeed from '../components/NewsFeed'

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

  const currentClients = [
    { name: 'Aescap', logo: 'aescap.png' },
    { name: 'Hunt Amsterdam', logo: 'hunt-amsterdam.jpeg' },
    { name: 'Rademakkers', logo: 'rademakkers.png' },
    { name: '\'t idee! Tonko', logo: 'tonko.png' },
    { name: 'DMC Makelaars', logo: 'dmc.png' },
    { name: 'Klaar', logo: 'klaar.jpg' },
    { name: 'Dag en Nacht', logo: 'dagennacht.png' },
    { name: 'Voice Industries', logo: 'voice-industries.jpeg' },
    { name: 'Duwtje', logo: 'duwtje.svg' },
    { name: 'Highwood', logo: 'highwood.png' },
    { name: 'PR Mansion', logo: 'prmansion.png' },
    { name: 'Podimo', logo: 'podimo.png' },
    { name: 'Havas Media Network', logo: 'havas-media.png' },
    { name: 'Winix', logo: 'winix.jpg' },
    { name: 'DoctorFeelgood', logo: 'doctorfeelgood.jpg' },
    { name: 'WorkStuff', logo: 'workstuff.jpg' },
    { name: 'Open Boek', logo: 'open-boek.png' },
    { name: 'Bijvoorkeur', logo: 'bijvoorkeur.jpg' },
    { name: 'John Doornik Casting', logo: 'john-doornik.png' },
    { name: 'Huisart Elings', logo: 'hap-elings.png' },
    { name: 'BLC Financeview', logo: 'blc-financeview.png' },
    { name: 'Koschuch', logo: 'koschuch.png' }
  ]

  const previousClients = [
    { name: 'Leyden labs', logo: 'leydenlabs_Logo.png' },
    { name: 'Jump Retail', logo: 'jump.jpg' },
    { name: 'La Dress', logo: 'ladress.png' },
    { name: 'Greenpeace', logo: 'greenpeace.png' },
    { name: 'TBWA', logo: 'tbwa_Logo.png' },
    { name: 'iO Digital', logo: 'io_Logo.png' },
    { name: 'Daily Paper', logo: 'dailypaper_Logo.png' }
  ]

  // HubSpot Contact Form Component
  const HubSpotContactForm = () => {
    const [isLoaded, setIsLoaded] = useState(false)

    useEffect(() => {
      // Load HubSpot script
      const script = document.createElement('script')
      script.src = '//js-eu1.hsforms.net/forms/embed/v2.js'
      script.charset = 'utf-8'
      script.type = 'text/javascript'
      script.async = true
      script.defer = true
      
      script.onload = () => {
        // Create form when script is loaded
        if (window.hbspt) {
          window.hbspt.forms.create({
            region: "eu1",
            portalId: "26510736",
            formId: "acf3fe0b-c542-4fc2-aa14-f3cb2fc356c0",
            target: '#hubspot-contact-form-container'
          })
        }
        setIsLoaded(true)
      }
      
      document.body.appendChild(script)
      
      return () => {
        // Cleanup
        if (document.body.contains(script)) {
          document.body.removeChild(script)
        }
      }
    }, [])

    return (
      <div className="bg-white rounded-2xl p-8 shadow-lg">
        <h3 className="text-2xl font-bold text-gray-900 mb-4">
          Neem Contact Op
        </h3>
        <p className="text-gray-700 mb-6 leading-relaxed">
          Klaar om uw IT-uitdagingen aan te pakken? Laat uw gegevens achter en we nemen binnen 24 uur contact op.
        </p>
        
        <div id="hubspot-contact-form-container">
          {!isLoaded && (
            <div className="flex items-center justify-center py-8">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary-600 mr-3"></div>
              <div className="text-gray-600">Formulier wordt geladen...</div>
            </div>
          )}
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header with Warning Tape */}
      <div className="relative h-3 bg-gradient-to-r from-primary-600 via-black to-primary-600 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse"></div>
        <div className="absolute inset-0 bg-repeating-diagonal opacity-20"></div>
      </div>
      
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center">
              <Link href="/" className="flex items-center space-x-3">
                <Image
                  src="/images/logos/workflo-logo-yellow.png"
                  alt="Workflo Logo"
                  width={40}
                  height={40}
                  className="rounded-lg"
                />
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
          {/* Background Video */}
          <div className="absolute inset-0 opacity-10">
            <video
              autoPlay
              muted
              loop
              playsInline
              className="absolute inset-0 w-full h-full object-cover"
            >
              <source src="/videos/Workflo-code-animatie-2.mp4" type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-gradient-to-br from-white/80 to-gray-50/80"></div>
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-5xl">
              <div className="inline-flex items-center bg-primary-600/10 border border-primary-600/20 text-gray-900 px-6 py-3 rounded-full text-sm font-semibold mb-8 animate-fade-in">
                <CheckCircleIcon className="w-5 h-5 mr-3 text-primary-600" />
                Amsterdam's Trusted IT Partner Since 2015
              </div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-8 leading-tight animate-slide-in">
                Your IT Should <span className="text-primary-600 relative">
                  Drive Growth
                  <div className="absolute -bottom-2 left-0 w-full h-1 bg-primary-600 opacity-30 animate-pulse"></div>
                </span>,<br />
                Not Hold You Back
              </h1>
              <p className="text-xl md:text-2xl text-gray-700 mb-12 leading-relaxed max-w-4xl animate-fade-in">
                Amsterdam's SMEs trust Workflo to transform their IT from a cost center into a growth engine. 
                <span className="font-semibold text-primary-600">Reduce IT costs by 35%</span> while increasing productivity.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 mb-16 animate-fade-in">
                <Link 
                  href="/tevredenheidscheck" 
                  className="group inline-flex items-center justify-center px-10 py-5 bg-primary-600 text-black font-bold text-lg rounded-xl hover:bg-primary-500 transform hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl border-2 border-primary-600"
                >
                  Start Gratis Tevredenheidscheck
                  <ArrowRightIcon className="w-6 h-6 ml-3 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link 
                  href="/tarieven" 
                  className="group inline-flex items-center justify-center px-10 py-5 bg-white text-gray-900 font-bold text-lg rounded-xl hover:bg-gray-50 transform hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl border-2 border-gray-300 hover:border-primary-600"
                >
                  Bekijk Tarieven
                  <ChevronRightIcon className="w-6 h-6 ml-3 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>

              {/* Trust Indicators */}
              <div className="flex flex-wrap items-center gap-8 animate-fade-in">
                <div className="flex items-center bg-white/80 backdrop-blur-sm rounded-lg px-4 py-2 shadow-md">
                  <CheckCircleIcon className="w-6 h-6 text-green-600 mr-3" />
                  <span className="text-gray-900 font-semibold">100+ Tevreden Klanten</span>
                </div>
                <div className="flex items-center bg-white/80 backdrop-blur-sm rounded-lg px-4 py-2 shadow-md">
                  <CheckCircleIcon className="w-6 h-6 text-green-600 mr-3" />
                  <span className="text-gray-900 font-semibold">24/7 Support</span>
                </div>
                <div className="flex items-center bg-white/80 backdrop-blur-sm rounded-lg px-4 py-2 shadow-md">
                  <CheckCircleIcon className="w-6 h-6 text-green-600 mr-3" />
                  <span className="text-gray-900 font-semibold">ISO Gecertificeerd</span>
                </div>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-24">
              <div className="group bg-white rounded-2xl p-8 shadow-xl border border-gray-100 hover:shadow-2xl hover:border-primary-600/20 transition-all duration-300 hover:-translate-y-1">
                <div className="text-5xl font-bold text-primary-600 mb-3 group-hover:scale-110 transition-transform">35%</div>
                <div className="text-gray-800 font-bold text-lg">Kostenbesparing</div>
                <div className="text-sm text-gray-600 mt-2">Gemiddeld per klant</div>
              </div>
              <div className="group bg-white rounded-2xl p-8 shadow-xl border border-gray-100 hover:shadow-2xl hover:border-primary-600/20 transition-all duration-300 hover:-translate-y-1">
                <div className="text-5xl font-bold text-primary-600 mb-3 group-hover:scale-110 transition-transform">99.9%</div>
                <div className="text-gray-800 font-bold text-lg">Uptime Garantie</div>
                <div className="text-sm text-gray-600 mt-2">SLA gegarandeerd</div>
              </div>
              <div className="group bg-white rounded-2xl p-8 shadow-xl border border-gray-100 hover:shadow-2xl hover:border-primary-600/20 transition-all duration-300 hover:-translate-y-1">
                <div className="text-5xl font-bold text-primary-600 mb-3 group-hover:scale-110 transition-transform">24/7</div>
                <div className="text-gray-800 font-bold text-lg">Support</div>
                <div className="text-sm text-gray-600 mt-2">Altijd bereikbaar</div>
              </div>
              <div className="group bg-white rounded-2xl p-8 shadow-xl border border-gray-100 hover:shadow-2xl hover:border-primary-600/20 transition-all duration-300 hover:-translate-y-1">
                <div className="text-5xl font-bold text-primary-600 mb-3 group-hover:scale-110 transition-transform">&lt;15min</div>
                <div className="text-gray-800 font-bold text-lg">Response Time</div>
                <div className="text-sm text-gray-600 mt-2">Gemiddeld</div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="relative py-24 bg-white overflow-hidden">
          {/* Background Video */}
          <div className="absolute inset-0 opacity-5">
            <video
              autoPlay
              muted
              loop
              playsInline
              className="absolute inset-0 w-full h-full object-cover"
            >
              <source src="/videos/Security_1.mp4" type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-white/90"></div>
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
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
                <div key={index} className="group bg-white rounded-2xl p-8 hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-primary-600/20 hover:-translate-y-2">
                  <div className="w-16 h-16 bg-primary-600/10 border-2 border-primary-600/20 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary-600 transition-all duration-300 group-hover:scale-110">
                    <service.icon className="w-8 h-8 text-primary-600 group-hover:text-black" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-primary-600 transition-colors">{service.title}</h3>
                  <p className="text-gray-700 mb-6 leading-relaxed">{service.description}</p>
                  <ul className="space-y-3 mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <CheckCircleIcon className="w-5 h-5 text-green-600 mr-3 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700 font-medium">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link href="/diensten" className="inline-flex items-center text-primary-600 font-bold text-lg hover:text-primary-700 group-hover:gap-2 transition-all">
                    Meer info
                    <ChevronRightIcon className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
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

        {/* News Feed Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Laatste IT & Security Nieuws
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Blijf op de hoogte van de laatste ontwikkelingen in de IT-wereld en cybersecurity trends.
              </p>
            </div>
            <NewsFeed maxItems={6} showDescription={true} />
          </div>
        </section>

        {/* Company Experience Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Sector Ervaring Sinds 2015
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We hebben uitgebreide ervaring met bedrijven uit verschillende sectoren
              </p>
            </div>

            {/* Current Clients */}
            <div className="mb-16">
              <h3 className="text-3xl font-bold text-gray-900 mb-12 text-center">
                Huidige Klanten
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
                {currentClients.map((client, index) => (
                  <div key={index} className="group bg-white rounded-xl p-6 shadow-lg border border-gray-100 hover:shadow-xl hover:border-primary-600/20 transition-all duration-300 hover:-translate-y-1">
                    <div className="text-center">
                      <div className="w-16 h-16 mx-auto mb-4 relative overflow-hidden rounded-lg bg-gray-50 flex items-center justify-center">
                        <Image
                          src={`/images/logos/${client.logo}`}
                          alt={`${client.name} logo`}
                          width={64}
                          height={64}
                          className="object-contain max-w-full max-h-full group-hover:scale-110 transition-transform duration-300"
                        />
                      </div>
                      <h4 className="text-sm font-semibold text-gray-900 group-hover:text-primary-600 transition-colors">{client.name}</h4>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Previous Clients */}
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-12 text-center">
                Vorige Klanten
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {previousClients.map((client, index) => (
                  <div key={index} className="group bg-white rounded-xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 opacity-80 hover:opacity-100">
                    <div className="text-center">
                      <div className="w-16 h-16 mx-auto mb-4 relative overflow-hidden rounded-lg bg-gray-50 flex items-center justify-center">
                        <Image
                          src={`/images/logos/${client.logo}`}
                          alt={`${client.name} logo`}
                          width={64}
                          height={64}
                          className="object-contain max-w-full max-h-full group-hover:scale-110 transition-transform duration-300 grayscale group-hover:grayscale-0"
                        />
                      </div>
                      <h4 className="text-sm font-semibold text-gray-700 group-hover:text-gray-900 transition-colors">{client.name}</h4>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Newsletter & Contact Forms Section */}
        <section className="relative py-24 bg-gradient-to-br from-gray-50 to-white overflow-hidden">
          {/* Background Animation */}
          <div className="absolute inset-0 opacity-10">
            <video
              autoPlay
              muted
              loop
              playsInline
              className="absolute inset-0 w-full h-full object-cover"
            >
              <source src="/videos/Mobile-Device-Header-1.mp4" type="video/mp4" />
            </video>
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Blijf Verbonden
              </h2>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                Meld u aan voor onze nieuwsbrief of neem direct contact op voor een gesprek
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border border-gray-200">
                <NewsletterFormSafe />
              </div>
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border border-gray-200">
                <HubSpotContactForm />
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative py-24 bg-primary-600 overflow-hidden">
          {/* Background Video */}
          <div className="absolute inset-0 opacity-20">
            <video
              autoPlay
              muted
              loop
              playsInline
              className="absolute inset-0 w-full h-full object-cover"
            >
              <source src="/videos/Workflo_W_Mobile_1.mp4" type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-primary-600/70"></div>
          </div>
          
          <div className="container mx-auto px-4 text-center relative z-10">
            <h2 className="text-5xl md:text-6xl font-bold text-black mb-8 animate-fade-in">
              Klaar om Uw IT te <span className="relative">
                Transformeren?
                <div className="absolute -bottom-2 left-0 w-full h-2 bg-black/20 rounded-full"></div>
              </span>
            </h2>
            <p className="text-xl md:text-2xl text-black/80 mb-12 max-w-3xl mx-auto leading-relaxed">
              Ontdek in 5 minuten hoe tevreden u bent met uw huidige IT en krijg direct advies.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center animate-fade-in">
              <Link 
                href="/tevredenheidscheck" 
                className="group inline-flex items-center justify-center px-10 py-5 bg-black text-white font-bold text-lg rounded-xl hover:bg-gray-900 transform hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl"
              >
                Start Tevredenheidscheck
                <ArrowRightIcon className="w-6 h-6 ml-3 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link 
                href="/contact" 
                className="group inline-flex items-center justify-center px-10 py-5 bg-white text-black font-bold text-lg rounded-xl hover:bg-gray-100 transform hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl border-2 border-black/10"
              >
                <PhoneIcon className="w-6 h-6 mr-3 group-hover:scale-110 transition-transform" />
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
              <div className="flex items-center space-x-3 mb-4">
                <Image
                  src="/images/logos/workflo-logo-yellow.png"
                  alt="Workflo Logo"
                  width={40}
                  height={40}
                  className="rounded-lg"
                />
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
      <div className="relative h-3 bg-gradient-to-r from-primary-600 via-black to-primary-600 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse"></div>
        <div className="absolute inset-0 bg-repeating-diagonal opacity-20"></div>
      </div>
    </div>
  )
}

// Add TypeScript declaration for HubSpot
declare global {
  interface Window {
    hbspt: any
  }
}