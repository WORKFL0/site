'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, useScroll, useTransform, useSpring } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
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
  const [isVideoLoaded, setIsVideoLoaded] = useState(false)
  const [activeService, setActiveService] = useState(0)
  const [videosInView, setVideosInView] = useState({})
  
  // Scroll-triggered animation refs
  const [heroRef, heroInView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const [statsRef, statsInView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const [servicesRef, servicesInView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const [teamRef, teamInView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const [testimonialsRef, testimonialsInView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const [industryRef, industryInView] = useInView({ triggerOnce: true, threshold: 0.1 })
  
  // Video lazy loading refs
  const [statsVideoRef, statsVideoInView] = useInView({ triggerOnce: true, threshold: 0.3 })
  const [servicesVideoRef, servicesVideoInView] = useInView({ triggerOnce: true, threshold: 0.3 })
  const [teamVideoRef, teamVideoInView] = useInView({ triggerOnce: true, threshold: 0.3 })
  const [ctaVideoRef, ctaVideoInView] = useInView({ triggerOnce: true, threshold: 0.3 })
  
  // Scroll-based animations
  const { scrollYProgress } = useScroll()
  const yRange = useTransform(scrollYProgress, [0, 1], [0, -200])
  const opacityRange = useTransform(scrollYProgress, [0, 0.2], [1, 0])
  const springConfig = { stiffness: 400, damping: 40 }
  const ySpring = useSpring(yRange, springConfig)

  useEffect(() => {
    setMounted(true)
    
    // Only run on client side
    if (typeof window === 'undefined') return

    // Animate elements on scroll
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in')
        }
      })
    }, observerOptions)

    document.querySelectorAll('.fade-in-up').forEach(el => {
      observer.observe(el)
    })

    return () => observer.disconnect()
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
      title: 'Managed IT Services',
      description: 'Complete IT-ondersteuning voor uw bedrijf met 24/7 monitoring en proactief beheer.',
      icon: "🛡️",
      highlight: "€500/maand besparing",
      outcome: "35% kostenbesparing gemiddeld",
      animation: "/videos/Workflo-code-animatie-2.mp4"
    },
    {
      title: 'Cybersecurity',
      description: 'Bescherm uw bedrijf tegen digitale dreigingen met enterprise-grade security.',
      icon: "🔒",
      highlight: "0 ransomware hits",
      outcome: "100% bescherming sinds 2015",
      animation: "/videos/Security_1.mp4"
    },
    {
      title: 'Cloud Solutions',
      description: 'Veilige en schaalbare cloud-infrastructuur die meegroeit met uw bedrijf.',
      icon: "☁️",
      highlight: "Microsoft 365 Expert",
      outcome: "99.9% uptime gegarandeerd",
      animation: "/videos/Mobile-Device-Header-1.mp4"
    },
    {
      title: 'IT Consulting',
      description: 'Strategisch IT-advies om uw technologie-investeringen te optimaliseren.',
      icon: "💡",
      highlight: "Strategic Planning",
      outcome: "Optimale IT-roadmap",
      animation: "/videos/Workflo_W_Mobile_1.mp4"
    },
    {
      title: 'GDPR & Compliance',
      description: 'Volledige GDPR-compliance en data protection voor uw organisatie.',
      icon: "📊",
      highlight: "GDPR Gecertificeerd",
      outcome: "100% compliant sinds AVG",
      animation: "/videos/Workflo-code-animatie-3.mp4"
    },
    {
      title: 'Network & Connectivity',
      description: 'Betrouwbare netwerk- en internetoplossingen voor maximale uptime.',
      icon: "📡",
      highlight: "Altijd verbonden",
      outcome: "99.97% netwerkuptime",
      animation: "/videos/Mobile-Device-Header-3.mp4"
    },
    {
      title: 'Backup & Recovery',
      description: 'Professionele backup- en disaster recovery oplossingen.',
      icon: "💾",
      highlight: "3-2-1 Backup Strategy",
      outcome: "0 dataverlies sinds 2015",
      animation: "/videos/Workflo_W_final_1.mp4"
    },
    {
      title: '24/7 Support',
      description: 'Altijd bereikbare technische ondersteuning voor uw IT-vragen.',
      icon: "📱",
      highlight: "4 min response time",
      outcome: "24/7 beschikbaarheid",
      animation: "/videos/Mobile-Device-Header-2.mp4"
    }
  ]

  // Current active clients
  const currentClients = [
    { name: "Havas Media", src: "/images/logos/havas-media.png" },
    { name: "Podimo", src: "/images/logos/podimo.png" },
    { name: "DoctorFeelgood", src: "/images/logos/doctorfeelgood.jpg" },
    { name: "Aescap", src: "/images/logos/aescap.png" },
    { name: "Hunt Amsterdam", src: "/images/logos/hunt-amsterdam.jpeg" },
    { name: "Rademakkers", src: "/images/logos/rademakkers.png" },
    { name: "Tonko", src: "/images/logos/tonko.png" },
    { name: "DMC Makelaars", src: "/images/logos/dmc.png" },
    { name: "Klaar", src: "/images/logos/klaar.jpg" },
    { name: "Dag en Nacht", src: "/images/logos/dagennacht.png" },
    { name: "Voice Industries", src: "/images/logos/voice-industries.jpeg" },
    { name: "Schulte en Lestrade", src: "/images/logos/senl.png" },
    { name: "Duwtje", src: "/images/logos/duwtje.svg" },
    { name: "Highwood", src: "/images/logos/highwood.png" },
    { name: "PR Mansion", src: "/images/logos/prmansion.png" },
    { name: "Winix", src: "/images/logos/winix.jpg" },
    { name: "WorkStuff", src: "/images/logos/workstuff.jpg" },
    { name: "Open Boek", src: "/images/logos/open-boek.png" },
    { name: "Bijvoorkeur", src: "/images/logos/bijvoorkeur.jpg" },
    { name: "BLC Financeview", src: "/images/logos/blc-financeview.png" },
    { name: "John Doornik Casting", src: "/images/logos/john-doornik.png" },
    { name: "Huisart Elings", src: "/images/logos/hap-elings.png" },
    { name: "Koschuch", src: "/images/logos/koschuch.png" }
  ]

  // Previous clients we've worked with
  const previousClients = [
    { name: "Leyden Labs", src: "/images/logos/leydenlabs_Logo.png" },
    { name: "TBWA", src: "/images/logos/tbwa_Logo.png" },
    { name: "iO Digital", src: "/images/logos/io_Logo.png" },
    { name: "Daily Paper", src: "/images/logos/dailypaper_Logo.png" },
    { name: "Greenpeace", src: "/images/logos/greenpeace.png" },
    { name: "JUMP", src: "/images/logos/jump.jpg" },
    { name: "L'Adress", src: "/images/logos/ladress.png" }
  ]

  // Combine for homepage display
  const clientLogos = currentClients

  const teamMembers = [
    {
      name: "Florian Meeuws",
      role: "Founder & CEO",
      expertise: "Strategic IT Leadership & Business Development",
      image: "/images/team/florian.jpg"
    },
    {
      name: "Namhoon Kim",
      role: "Senior Technical Engineer",
      expertise: "Network Infrastructure & Cloud Architecture",
      image: "/images/team/nam.jpg"
    },
    {
      name: "Mas",
      role: "Junior Support Engineer",
      expertise: "Security Audits & Compliance",
      image: "/images/team/mas.jpg"
    },
    {
      name: "Marcello van den Berg",
      role: "Junior Infrastructure Engineer",
      expertise: "24/7 Support & System Administration",
      image: "/images/team/marcello.jpg"
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
    <div className="min-h-screen bg-white overflow-x-hidden">

      {/* Header with Warning Tape */}
      <div className="relative h-3 bg-gradient-to-r from-primary-600 via-black to-primary-600 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse"></div>
        <div className="absolute inset-0 bg-repeating-diagonal opacity-20"></div>
      </div>
      
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center">
              <Link href="/" className="flex items-center">
                <Image
                  src="/images/logos/workflo-logo-yellow.png"
                  alt="Workflo Logo"
                  width={150}
                  height={45}
                  className="h-12 w-auto"
                />
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
        {/* Hero Section with Video Background */}
        <section className="relative min-h-screen flex items-center justify-center hero-gradient overflow-hidden mt-20">
          {/* Animated Background Pattern with parallax */}
          <motion.div 
            className="absolute inset-0 opacity-10"
            style={{ y: ySpring }}
          >
            <div className="absolute inset-0" style={{
              backgroundImage: `repeating-linear-gradient(
                45deg,
                transparent,
                transparent 35px,
                #f2f400 35px,
                #f2f400 70px
              )`
            }}></div>
          </motion.div>
          
          {/* Primary Video Background with Workflo Code Animation */}
          <motion.div 
            className="absolute inset-0 overflow-hidden"
            style={{ opacity: opacityRange }}
          >
            <video
              autoPlay
              muted
              loop
              playsInline
              className="absolute inset-0 w-full h-full object-cover opacity-20"
              onLoadedData={() => setIsVideoLoaded(true)}
              preload="metadata"
            >
              <source src="/videos/Workflo-code-animatie-3.mp4" type="video/mp4" />
              <source src="/videos/Workflo-code-animatie.mp4" type="video/mp4" />
            </video>
          </motion.div>
          
          {/* Secondary W Logo Animation Overlay */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <video
              autoPlay
              muted
              loop
              playsInline
              className="w-96 h-96 object-contain opacity-15"
              preload="metadata"
            >
              <source src="/videos/Workflo_W_final_3.mp4" type="video/mp4" />
              <source src="/videos/Workflo_W_final_1.mp4" type="video/mp4" />
            </video>
          </div>

          {/* Mobile Device Animation Corner */}
          <div className="absolute top-20 right-20 opacity-10 pointer-events-none hidden lg:block">
            <video
              autoPlay
              muted
              loop
              playsInline
              className="w-64 h-64 object-contain"
            >
              <source src="/videos/Mobile-Device-Header-2.mp4" type="video/mp4" />
            </video>
          </div>

          {/* Additional Security Animation - Bottom Left */}
          <div className="absolute bottom-20 left-20 opacity-8 pointer-events-none hidden lg:block">
            <video
              autoPlay
              muted
              loop
              playsInline
              className="w-48 h-48 object-contain"
              style={{ animationDelay: '2s' }}
            >
              <source src="/videos/Security_1.mp4" type="video/mp4" />
            </video>
          </div>

          {/* Mobile Device Animation - Top Left */}
          <div className="absolute top-32 left-10 opacity-6 pointer-events-none hidden xl:block">
            <video
              autoPlay
              muted
              loop
              playsInline
              className="w-40 h-40 object-contain"
              style={{ animationDelay: '4s' }}
            >
              <source src="/videos/Mobile-Device-Header-1.mp4" type="video/mp4" />
            </video>
          </div>

          {/* Hero Content */}
          <div className="relative z-10 container mx-auto px-4 text-center" ref={heroRef}>
            <motion.div 
              className="max-w-5xl mx-auto"
              initial={{ opacity: 0, y: 50 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              {/* Professional Badge */}
              <motion.div 
                className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-6 py-2 mb-8"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={heroInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.2 }}
                whileHover={{ scale: 1.05 }}
              >
                <span className="text-yellow-400 font-bold">✓</span>
                <span className="text-white font-medium">Amsterdam's Trusted IT Partner Since 2015</span>
              </motion.div>
              
              <motion.h1 
                className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight"
                initial={{ opacity: 0, y: 30 }}
                animate={heroInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                IT die uw bedrijf laat groeien,
                <br />
                <motion.span 
                  className="text-3xl md:text-4xl text-yellow-400"
                  initial={{ opacity: 0 }}
                  animate={heroInView ? { opacity: 1 } : {}}
                  transition={{ duration: 0.8, delay: 0.8 }}
                >
                  niet tegenhoudt
                </motion.span>
              </motion.h1>
              
              <motion.p 
                className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                animate={heroInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                Amsterdam's MKB vertrouwt op Workflo om hun IT van kostenpost naar groeifactor te transformeren.
              </motion.p>

              {/* Value Props with Facts */}
              <motion.div 
                className="grid md:grid-cols-3 gap-6 max-w-3xl mx-auto mb-12"
                initial={{ opacity: 0, y: 30 }}
                animate={heroInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 1 }}
              >
                {[
                  { value: "99.97%", label: "Uptime", subtitle: "Gemeten 2024" },
                  { value: "4 min", label: "Response Time", subtitle: "Gemiddelde telefoon" },
                  { value: "€500K+", label: "Besparingen", subtitle: "Totaal sinds 2015" }
                ].map((stat, index) => (
                  <motion.div 
                    key={index}
                    className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={heroInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 1.2 + (index * 0.1) }}
                    whileHover={{ scale: 1.05, y: -5 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <div className="text-3xl font-bold text-yellow-400">{stat.value}</div>
                    <div className="text-white font-medium">{stat.label}</div>
                    <div className="text-xs text-gray-400 mt-1">{stat.subtitle}</div>
                  </motion.div>
                ))}
              </motion.div>

              {/* Professional CTAs */}
              <motion.div 
                className="flex flex-col sm:flex-row gap-4 justify-center items-center"
                initial={{ opacity: 0, y: 20 }}
                animate={heroInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 1.5 }}
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link 
                    href="/contact" 
                    className="bg-yellow-400 text-black px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-500 transition-all shadow-lg inline-block"
                  >
                    Gratis IT-check (5 min)
                  </Link>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <a 
                    href="tel:020-3080465" 
                    className="bg-white text-black px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-all shadow-lg inline-block"
                  >
                    Bel 020 308 0465
                  </a>
                </motion.div>
              </motion.div>
              
              <motion.p 
                className="text-gray-400 mt-6 text-sm"
                initial={{ opacity: 0 }}
                animate={heroInView ? { opacity: 1 } : {}}
                transition={{ duration: 0.6, delay: 1.8 }}
              >
                ✓ Geen verplichtingen ✓ Binnen 24u reactie ✓ Gratis adviesrapport
              </motion.p>
            </motion.div>
          </div>

          {/* Scroll Indicator with enhanced animation */}
          <motion.div 
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
            animate={{
              y: [0, 10, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <motion.div 
              className="w-8 h-12 border-2 border-white/50 rounded-full flex items-start justify-center p-2"
              whileHover={{ scale: 1.1, borderColor: "rgba(255,255,255,0.8)" }}
            >
              <motion.div 
                className="w-1 h-3 bg-white rounded-full"
                animate={{
                  opacity: [1, 0.3, 1],
                  scale: [1, 0.8, 1]
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            </motion.div>
          </motion.div>
        </section>

        {/* Simplicity Message Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <motion.div 
              className="max-w-4xl mx-auto text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                IT Simpel Gemaakt. Echt Simpel.
              </h2>
              <p className="text-xl md:text-2xl text-gray-700 leading-relaxed mb-8">
                U bent ondernemer, geen IT-expert. Wij zorgen ervoor dat uw technologie gewoon werkt, zonder technische jargon of ingewikkelde contracten. IT moet uw bedrijf laten groeien, niet frustreren. Daarom maken wij het zo eenvoudig als het bestellen van een pizza.
              </p>
              <div className="grid md:grid-cols-3 gap-8 mt-12">
                <motion.div 
                  className="text-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="w-20 h-20 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-3xl">🎯</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    Één Duidelijke Prijs
                  </h3>
                  <p className="text-gray-600">
                    U weet precies wat u betaalt. Elke maand. Geen verrassingen.
                  </p>
                </motion.div>
                <motion.div 
                  className="text-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <div className="w-20 h-20 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-3xl">💬</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    Gewone Taal
                  </h3>
                  <p className="text-gray-600">
                    Wij leggen alles uit in woorden die u echt begrijpt.
                  </p>
                </motion.div>
                <motion.div 
                  className="text-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  <div className="w-20 h-20 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-3xl">✅</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    Het Werkt Gewoon
                  </h3>
                  <p className="text-gray-600">
                    Uw IT werkt. U kunt zich op uw bedrijf richten. Zo simpel is het.
                  </p>
                </motion.div>
              </div>
              <motion.div 
                className="mt-12 p-8 bg-gray-50 rounded-xl"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <p className="text-lg text-gray-700 italic">
                  "Als u online een pizza kunt bestellen, kunt u onze IT-diensten begrijpen. Dat is onze belofte."
                </p>
                <p className="text-sm text-gray-600 mt-3 font-semibold">
                  — Florian, Oprichter Workflo
                </p>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* REMOVED: Client Logos Grid Section - Duplicate with "Sector Ervaring" section below */}
        {/* Keeping only the carousel version as requested in todo2.md */}
        <section className="relative py-20 bg-gray-50 border-y-8 border-yellow-400 overflow-hidden" ref={statsRef} style={{ display: 'none' }}>
          {/* Background Video Animation */}
          <div className="absolute inset-0 pointer-events-none" ref={statsVideoRef}>
            {statsVideoInView && (
              <video
                autoPlay
                muted
                loop
                playsInline
                className="absolute inset-0 w-full h-full object-cover opacity-5"
                preload="metadata"
              >
                <source src="/videos/Workflo_W_Mobile_1.mp4" type="video/mp4" />
              </video>
            )}
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <motion.div 
              className="text-center mb-12"
              initial={{ opacity: 0, y: 50 }}
              animate={statsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              <motion.h2 
                className="text-4xl font-bold text-black mb-4"
                initial={{ opacity: 0, y: 30 }}
                animate={statsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                Vertrouwd door Amsterdam's Beste Bedrijven
              </motion.h2>
              <motion.p 
                className="text-xl text-gray-600 max-w-4xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                animate={statsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                Meer dan 100+ organisaties vertrouwen dagelijks op onze IT-expertise
              </motion.p>
            </motion.div>

            {/* Logo Grid */}
            <motion.h3 
              className="text-2xl font-bold text-center text-black mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={statsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              Huidige Klanten
            </motion.h3>
            <div className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-7 gap-4">
              {currentClients.map((logo, index) => {
                // Check if this is one of the logos that should be bigger
                const isBiggerLogo = logo.name === 'John Doornik' || 
                                     logo.name === 'DoctorFeelgood' || 
                                     logo.name === 'BLC Financeview'
                
                return (
                  <motion.div 
                    key={index}
                    className={`bg-white rounded-lg flex items-center justify-center group ${
                      isBiggerLogo ? 'h-28 p-4 shadow-lg border-2 border-yellow-400' : 'h-20 p-3'
                    }`}
                    initial={{ opacity: 0, y: 30 }}
                    animate={statsInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ 
                      duration: 0.5, 
                      delay: 0.8 + (index * 0.05),
                      ease: "easeOut"
                    }}
                    whileHover={{ 
                      y: -8, 
                      scale: isBiggerLogo ? 1.08 : 1.05,
                      boxShadow: isBiggerLogo ? "0 25px 50px rgba(242,244,0,0.3)" : "0 20px 40px rgba(0,0,0,0.15)",
                      transition: { duration: 0.3 }
                    }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <div className={`relative flex items-center justify-center ${
                      isBiggerLogo ? 'w-36 h-20' : 'w-24 h-14'
                    }`}>
                      <Image
                        src={logo.src}
                        alt={`${logo.name} logo`}
                        fill
                        className={`object-contain filter transition-all duration-300 ${
                          isBiggerLogo ? 'grayscale-0' : 'grayscale group-hover:grayscale-0'
                        }`}
                        sizes={isBiggerLogo ? '144px' : '96px'}
                        onError={(e) => {
                          e.currentTarget.style.display = 'none'
                        }}
                      />
                    </div>
                  </motion.div>
                )
              })}
            </div>

            {/* Professional Stats Bar */}
            <motion.div 
              className="mt-16 bg-black text-white rounded-2xl p-8"
              initial={{ opacity: 0, y: 50 }}
              animate={statsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 1.5 }}
            >
              <div className="grid md:grid-cols-4 gap-8 text-center">
                {[
                  { value: "€500K+", label: "Bespaard voor klanten", subtitle: "2024 resultaten" },
                  { value: "500+", label: "Incidenten voorkomen", subtitle: "Sinds 2015" },
                  { value: "4 min", label: "Response tijd", subtitle: "Gemiddeld 2024" },
                  { value: "€0", label: "Ransomware schade", subtitle: "Bij onze klanten" }
                ].map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    animate={statsInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 1.7 + (index * 0.1) }}
                    whileHover={{ 
                      scale: 1.05,
                      y: -5,
                      transition: { duration: 0.3 }
                    }}
                  >
                    <motion.div 
                      className="text-4xl font-bold text-yellow-400"
                      animate={{
                        scale: [1, 1.05, 1],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: index * 0.5
                      }}
                    >
                      {stat.value}
                    </motion.div>
                    <div className="text-gray-300">{stat.label}</div>
                    <div className="text-xs text-gray-400 mt-1">{stat.subtitle}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Services Section - Dark Background */}
        <section className="relative py-20 bg-gray-900 text-white overflow-hidden" ref={servicesRef}>
          {/* Background Video Elements */}
          <div className="absolute top-0 left-0 opacity-5 pointer-events-none" ref={servicesVideoRef}>
            {servicesVideoInView && (
              <video
                autoPlay
                muted
                loop
                playsInline
                className="w-72 h-72 object-cover"
                preload="metadata"
              >
                <source src="/videos/Workflo-code-animatie-2.mp4" type="video/mp4" />
              </video>
            )}
          </div>
          <div className="absolute bottom-20 right-0 opacity-4 pointer-events-none">
            {servicesVideoInView && (
              <video
                autoPlay
                muted
                loop
                playsInline
                className="w-80 h-80 object-contain"
                preload="metadata"
              >
                <source src="/videos/Workflo_W_final_3.mp4" type="video/mp4" />
              </video>
            )}
          </div>
          {/* Additional Floating Animations */}
          <div className="absolute top-32 right-32 opacity-3 pointer-events-none hidden lg:block">
            {servicesVideoInView && (
              <video
                autoPlay
                muted
                loop
                playsInline
                className="w-56 h-56 object-contain"
                preload="metadata"
                style={{ animationDelay: '1.5s' }}
              >
                <source src="/videos/Mobile-Device-Header-3.mp4" type="video/mp4" />
              </video>
            )}
          </div>
          <div className="absolute bottom-40 left-16 opacity-3 pointer-events-none hidden xl:block">
            {servicesVideoInView && (
              <video
                autoPlay
                muted
                loop
                playsInline
                className="w-44 h-44 object-contain"
                preload="metadata"
                style={{ animationDelay: '3s' }}
              >
                <source src="/videos/Workflo-code-animatie.mp4" type="video/mp4" />
              </video>
            )}
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: 50 }}
              animate={servicesInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              <motion.h2 
                className="text-4xl font-bold text-white mb-4"
                initial={{ opacity: 0, y: 30 }}
                animate={servicesInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                Complete IT-Oplossingen
              </motion.h2>
              <motion.p 
                className="text-xl text-gray-300 max-w-4xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                animate={servicesInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                Van managed services tot cybersecurity - alles onder één dak voor zorgeloze IT
              </motion.p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  className="group relative bg-gray-800 border border-gray-700 rounded-xl overflow-hidden cursor-pointer"
                  initial={{ opacity: 0, y: 50 }}
                  animate={servicesInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ 
                    duration: 0.6, 
                    delay: 0.6 + (index * 0.1),
                    ease: "easeOut"
                  }}
                  whileHover={{ 
                    y: -12, 
                    scale: 1.03,
                    boxShadow: "0 25px 50px rgba(0,0,0,0.3)",
                    transition: { duration: 0.3 }
                  }}
                  whileTap={{ scale: 0.98 }}
                  onMouseEnter={() => setActiveService(index)}
                >
                  {/* Service Card */}
                  <div className="p-6">
                    <div className="text-4xl mb-4">{service.icon}</div>
                    <h3 className="text-xl font-bold text-white mb-2">{service.title}</h3>
                    <p className="text-gray-300 text-sm mb-4">{service.description}</p>
                    <div className="bg-yellow-400 text-black text-xs font-bold px-3 py-1 rounded-full inline-block mb-2">
                      {service.highlight}
                    </div>
                    {service.outcome && (
                      <p className="text-green-600 text-sm font-semibold">→ {service.outcome}</p>
                    )}
                  </div>
                  
                  {/* Hover Animation/Video */}
                  {service.animation && (
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      {service.animation.endsWith('.mp4') ? (
                        <video
                          autoPlay
                          muted
                          loop
                          playsInline
                          className="w-full h-full object-cover"
                        >
                          <source src={service.animation} type="video/mp4" />
                        </video>
                      ) : (
                        <Image
                          src={service.animation}
                          alt={service.title}
                          fill
                          className="object-cover"
                        />
                      )}
                      <div className="absolute inset-0 bg-black/70"></div>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <Link 
                          href={`/diensten`}
                          className="bg-yellow-400 text-black px-6 py-3 rounded-full font-bold hover:bg-yellow-500 transition-all"
                        >
                          Meer info →
                        </Link>
                      </div>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>

            <motion.div 
              className="text-center mt-12"
              initial={{ opacity: 0, y: 30 }}
              animate={servicesInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 1.4 }}
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link 
                  href="/diensten" 
                  className="inline-flex items-center gap-2 bg-yellow-400 text-black px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-500 transition-all"
                >
                  Bekijk Alle Diensten
                  <motion.span
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                  >
                    →
                  </motion.span>
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Team Section - Light Background */}
        <section className="relative py-20 bg-gray-50 overflow-hidden" ref={teamRef}>
          {/* Background Video Animation */}
          <div className="absolute top-0 right-0 opacity-3 pointer-events-none" ref={teamVideoRef}>
            {teamVideoInView && (
              <video
                autoPlay
                muted
                loop
                playsInline
                className="w-96 h-96 object-cover"
                preload="metadata"
              >
                <source src="/videos/Mobile-Device-Header-3.mp4" type="video/mp4" />
              </video>
            )}
          </div>
          <div className="absolute bottom-0 left-0 opacity-3 pointer-events-none">
            {teamVideoInView && (
              <video
                autoPlay
                muted
                loop
                playsInline
                className="w-80 h-80 object-cover"
                preload="metadata"
              >
                <source src="/videos/Workflo_W_final_3.mp4" type="video/mp4" />
              </video>
            )}
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: 50 }}
              animate={teamInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              <motion.h2 
                className="text-4xl font-bold text-gray-900 mb-4"
                initial={{ opacity: 0, y: 30 }}
                animate={teamInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                Ontmoet Het Team
              </motion.h2>
              <motion.p 
                className="text-xl text-gray-600 max-w-3xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                animate={teamInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                Ervaren professionals die uw IT-uitdagingen begrijpen en oplossen
              </motion.p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {teamMembers.map((member, index) => (
                <motion.div 
                  key={index}
                  className="bg-white rounded-xl overflow-hidden group"
                  initial={{ opacity: 0, y: 50 }}
                  animate={teamInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ 
                    duration: 0.6, 
                    delay: 0.6 + (index * 0.1),
                    ease: "easeOut"
                  }}
                  whileHover={{ 
                    y: -12, 
                    scale: 1.03,
                    boxShadow: "0 25px 50px rgba(0,0,0,0.15)",
                    transition: { duration: 0.3 }
                  }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="relative h-64 bg-gray-200">
                    {member.image ? (
                      <Image
                        src={member.image}
                        alt={member.name}
                        fill
                        className="object-cover"
                        onError={(e) => {
                          e.currentTarget.style.display = 'none'
                        }}
                      />
                    ) : (
                      <div className="w-full h-full bg-gradient-to-br from-yellow-400 to-yellow-500 flex items-center justify-center">
                        <span className="text-6xl font-black text-black">
                          {member.name[0]}
                        </span>
                      </div>
                    )}
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
                    <p className="text-gray-600 mb-2">{member.role}</p>
                    <p className="text-sm text-yellow-600 font-medium">{member.expertise}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials - Light Background */}
        <section className="relative py-20 bg-white overflow-hidden" ref={testimonialsRef}>
          {/* Subtle Background Animation */}
          <div className="absolute top-20 right-10 opacity-2 pointer-events-none hidden lg:block">
            {testimonialsInView && (
              <video
                autoPlay
                muted
                loop
                playsInline
                className="w-64 h-64 object-contain"
                preload="metadata"
              >
                <source src="/videos/Mobile-Device-Header-1.mp4" type="video/mp4" />
              </video>
            )}
          </div>
          {/* Additional Background Elements */}
          <div className="absolute bottom-16 left-10 opacity-2 pointer-events-none hidden lg:block">
            {testimonialsInView && (
              <video
                autoPlay
                muted
                loop
                playsInline
                className="w-48 h-48 object-contain"
                preload="metadata"
                style={{ animationDelay: '2s' }}
              >
                <source src="/videos/Workflo_W_Mobile_1.mp4" type="video/mp4" />
              </video>
            )}
          </div>
          <div className="absolute top-40 left-20 opacity-1 pointer-events-none hidden xl:block">
            {testimonialsInView && (
              <video
                autoPlay
                muted
                loop
                playsInline
                className="w-36 h-36 object-contain"
                preload="metadata"
                style={{ animationDelay: '4s' }}
              >
                <source src="/videos/Workflo-code-animatie-3.mp4" type="video/mp4" />
              </video>
            )}
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center mb-16 fade-in-up">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Wat Onze Klanten Zeggen
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Meer dan 100 bedrijven vertrouwen dagelijks op onze IT-expertise
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  quote: "Workflo heeft onze IT-infrastructuur compleet getransformeerd. We besparen nu €2000 per maand en hebben geen downtime meer gehad.",
                  author: "Dr. Marcel Vrolijk",
                  role: "Eigenaar",
                  result: "€24.000 jaarlijkse besparing",
                  stats: "99.9% uptime sinds 2022",
                  rating: 5,
                  logo: '/images/logos/doctorfeelgood.jpg'
                },
                {
                  quote: "De overgang naar de cloud was naadloos. Hun 24/7 support is ongeëvenaard - elke vraag wordt binnen minuten beantwoord.",
                  author: "Sarah van der Berg",
                  role: "Operations Director",
                  result: "100% cloud migratie",
                  stats: "4 min gemiddelde response tijd",
                  rating: 5,
                  logo: '/images/logos/havas-media.png'
                },
                {
                  quote: "Eindelijk een IT-partner die begrijpt wat MKB bedrijven nodig hebben. Transparante tarieven en geen technische jargon.",
                  author: "Erik Janssen",
                  role: "Managing Director",
                  result: "35% kostenbesparing",
                  stats: "0 security incidenten sinds 2021",
                  rating: 5,
                  logo: '/images/logos/winix.jpg'
                }
              ].map((testimonial, index) => (
                <div 
                  key={index}
                  className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-8 hover-lift fade-in-up border-2 border-gray-100"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <span key={i} className="text-yellow-400 text-2xl">★</span>
                    ))}
                  </div>
                  <p className="text-gray-700 mb-6 italic text-lg leading-relaxed">
                    "{testimonial.quote}"
                  </p>
                  <div className="border-t pt-6">
                    {testimonial.logo && (
                      <div className="mb-4">
                        <div className="relative h-12 w-32">
                          <Image
                            src={testimonial.logo}
                            alt="Company logo"
                            fill
                            className="object-contain"
                            sizes="128px"
                          />
                        </div>
                      </div>
                    )}
                    <p className="font-bold text-gray-900 text-lg">{testimonial.author}</p>
                    <p className="text-gray-600 mb-3">{testimonial.role}</p>
                    <div className="bg-gray-50 border border-gray-200 rounded-lg px-4 py-3">
                      <p className="text-sm font-bold text-gray-900 mb-1">{testimonial.result}</p>
                      <p className="text-xs text-gray-600">{testimonial.stats}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* News Feed Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <NewsFeed maxItems={6} showDescription={true} />
          </div>
        </section>

        {/* Industry Experience Section - White Background */}
        <section className="relative py-16 bg-white overflow-hidden" ref={industryRef}>
          {/* Background Video Elements */}
          <div className="absolute top-10 left-10 opacity-2 pointer-events-none hidden lg:block">
            {industryInView && (
              <video
                autoPlay
                muted
                loop
                playsInline
                className="w-52 h-52 object-contain"
                preload="metadata"
              >
                <source src="/videos/Workflo_W_final_1.mp4" type="video/mp4" />
              </video>
            )}
          </div>
          <div className="absolute bottom-10 right-16 opacity-2 pointer-events-none hidden lg:block">
            {industryInView && (
              <video
                autoPlay
                muted
                loop
                playsInline
                className="w-40 h-40 object-contain"
                preload="metadata"
                style={{ animationDelay: '2.5s' }}
              >
                <source src="/videos/Mobile-Device-Header-1.mp4" type="video/mp4" />
              </video>
            )}
          </div>
          <div className="absolute top-32 right-32 opacity-1 pointer-events-none hidden xl:block">
            {industryInView && (
              <video
                autoPlay
                muted
                loop
                playsInline
                className="w-32 h-32 object-contain"
                preload="metadata"
                style={{ animationDelay: '5s' }}
              >
                <source src="/videos/Workflo-code-animatie-2.mp4" type="video/mp4" />
              </video>
            )}
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <motion.div 
              className="text-center mb-12"
              initial={{ opacity: 0, y: 50 }}
              animate={industryInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              <motion.h3 
                className="text-2xl font-semibold text-gray-900 mb-4"
                initial={{ opacity: 0, y: 30 }}
                animate={industryInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                Sector Ervaring Sinds 2015
              </motion.h3>
              <motion.p 
                className="text-gray-600 max-w-2xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                animate={industryInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                Door de jaren heen hebben we het voorrecht gehad om diverse organisaties in meerdere sectoren te bedienen, waarbij we expertise hebben opgebouwd die al onze klanten ten goede komt.
              </motion.p>
            </motion.div>
            
            {/* Horizontal scrolling logo strip */}
            <div className="relative overflow-hidden py-8">
              <div className="flex items-center space-x-12 animate-scroll" style={{ animation: 'scroll 60s linear infinite' }}>
                {[...currentClients, ...previousClients, ...currentClients, ...previousClients].map((logo, index) => (
                  <div key={index} className="flex-shrink-0">
                    <div className="relative w-36 h-20 flex items-center justify-center">
                      <Image
                        src={logo.src}
                        alt={`${logo.name} logo`}
                        fill
                        className="object-contain filter grayscale hover:grayscale-0 transition-all opacity-60 hover:opacity-100"
                        sizes="144px"
                        onError={(e) => {
                          console.warn(`Failed to load logo: ${logo.src}`)
                          e.currentTarget.style.display = 'none'
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Industry sectors */}
            <div className="mt-8 flex flex-wrap justify-center gap-2">
              <span className="px-4 py-2 bg-yellow-100 text-yellow-800 text-sm rounded-full font-medium">
                Media & Marketing
              </span>
              <span className="px-4 py-2 bg-blue-100 text-blue-800 text-sm rounded-full font-medium">
                Non-Profit
              </span>
              <span className="px-4 py-2 bg-green-100 text-green-800 text-sm rounded-full font-medium">
                Technologie
              </span>
              <span className="px-4 py-2 bg-purple-100 text-purple-800 text-sm rounded-full font-medium">
                Mode & Retail
              </span>
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

        {/* Professional CTA Section */}
        <section className="relative py-24 hero-gradient overflow-hidden">
          {/* Background Video Animation */}
          <div className="absolute inset-0 pointer-events-none" ref={ctaVideoRef}>
            {ctaVideoInView && (
              <video
                autoPlay
                muted
                loop
                playsInline
                className="absolute inset-0 w-full h-full object-cover opacity-10"
                preload="metadata"
              >
                <source src="/videos/Security_1.mp4" type="video/mp4" />
              </video>
            )}
          </div>
          <div className="absolute top-10 right-10 opacity-8 pointer-events-none">
            {ctaVideoInView && (
              <video
                autoPlay
                muted
                loop
                playsInline
                className="w-64 h-64 object-contain"
                preload="metadata"
              >
                <source src="/videos/Workflo_W_final_1.mp4" type="video/mp4" />
              </video>
            )}
          </div>
          <div className="container mx-auto px-4 text-center relative z-20">
            <h2 className="text-4xl font-bold text-white mb-6">
              Klaar om Uw IT te Transformeren?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Ontdek in 5 minuten hoe we uw IT kunnen verbeteren
            </p>
            
            <div className="bg-white/10 backdrop-blur-sm text-white rounded-2xl p-8 max-w-2xl mx-auto mb-12 border border-white/20">
              <h3 className="text-2xl font-bold mb-4">Gratis IT-Gezondheidscheck</h3>
              <p className="text-lg mb-6">
                Binnen 5 minuten weet u precies waar uw IT staat en wat er beter kan
              </p>
              <ul className="text-left max-w-md mx-auto mb-6 space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-yellow-400">✓</span>
                  <span>Security scan van uw systemen</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-yellow-400">✓</span>
                  <span>Kosten-batenanalyse</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-yellow-400">✓</span>
                  <span>Backup & recovery check</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-yellow-400">✓</span>
                  <span>Netwerk performance test</span>
                </li>
              </ul>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  href="/contact" 
                  className="bg-yellow-400 text-black px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-500 transition-all shadow-lg"
                >
                  Start Gratis Check
                </Link>
                <a 
                  href="tel:020-3080465" 
                  className="bg-white text-black px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-all shadow-lg"
                >
                  Bel 020 308 0465
                </a>
              </div>
            </div>
            
            <p className="text-gray-400 text-sm">
              ✓ Geen verplichtingen ✓ Binnen 24u reactie ✓ Gratis adviesrapport
            </p>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            <div>
              <div className="flex items-center mb-4">
                <Image
                  src="/images/logos/workflo-logo-yellow.png"
                  alt="Workflo Logo"
                  width={150}
                  height={45}
                  className="h-10 w-auto"
                />
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
              <a 
                href="https://uptime.workflo.it/status/workflo" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-gray-400 hover:text-primary-600 text-sm"
              >
                <div className="w-2 h-2 rounded-full bg-green-500"></div>
                Uptime Status
              </a>
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