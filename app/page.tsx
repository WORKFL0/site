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
import dynamic from 'next/dynamic'
import NewsletterFormSafe from '../components/forms/NewsletterFormSafe'
import DangerTape from '../components/DangerTape'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import { useLanguage } from '@/context/LanguageContext'

// Import these components dynamically to avoid SSR issues
const NewsTicker = dynamic(() => import('../components/NewsTicker'), { 
  ssr: false,
  loading: () => null
})
const HelloSection = dynamic(() => import('@/components/sections/HelloSection'), {
  ssr: false,
  loading: () => null
})
const HubSpotContactForm = dynamic(() => import('@/components/forms/HubSpotContactForm'), { 
  ssr: false,
  loading: () => (
    <div className="bg-white rounded-2xl p-8 shadow-lg">
      <div className="animate-pulse">
        <div className="h-8 bg-gray-200 rounded w-1/3 mb-4"></div>
        <div className="h-4 bg-gray-200 rounded w-3/4 mb-2"></div>
        <div className="h-4 bg-gray-200 rounded w-2/3"></div>
      </div>
    </div>
  )
})
const NewsFeed = dynamic(() => import('../components/NewsFeed'), {
  ssr: false,
  loading: () => (
    <div className="bg-white rounded-2xl p-8 shadow-lg">
      <div className="animate-pulse">
        <div className="h-6 bg-gray-200 rounded w-1/4 mb-4"></div>
        <div className="space-y-3">
          <div className="h-4 bg-gray-200 rounded w-3/4"></div>
          <div className="h-4 bg-gray-200 rounded w-2/3"></div>
          <div className="h-4 bg-gray-200 rounded w-5/6"></div>
        </div>
      </div>
    </div>
  )
})

export default function Home() {
  const { t } = useLanguage()
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
      title: t('services.managed_it.title'),
      description: t('services.managed_it.description'),
      icon: "🛡️",
      highlight: t('services.managed_it.highlight'),
      outcome: t('services.managed_it.outcome'),
      animation: "/videos/Workflo-code-animatie-2.mp4"
    },
    {
      title: t('services.cybersecurity.title'),
      description: t('services.cybersecurity.description'),
      icon: "🔒",
      highlight: t('services.cybersecurity.highlight'),
      outcome: t('services.cybersecurity.outcome'),
      animation: "/videos/Security_1.mp4"
    },
    {
      title: t('services.cloud.title'),
      description: t('services.cloud.description'),
      icon: "☁️",
      highlight: t('services.cloud.highlight'),
      outcome: t('services.cloud.outcome'),
      animation: "/videos/Mobile-Device-Header-1.mp4"
    },
    {
      title: t('services.consulting.title'),
      description: t('services.consulting.description'),
      icon: "💡",
      highlight: t('services.consulting.highlight'),
      outcome: t('services.consulting.outcome'),
      animation: "/videos/Workflo_W_Mobile_1.mp4"
    },
    {
      title: t('services.gdpr.title'),
      description: t('services.gdpr.description'),
      icon: "📊",
      highlight: t('services.gdpr.highlight'),
      outcome: t('services.gdpr.outcome'),
      animation: "/videos/Workflo-code-animatie-3.mp4"
    },
    {
      title: t('services.network.title'),
      description: t('services.network.description'),
      icon: "📡",
      highlight: t('services.network.highlight'),
      outcome: t('services.network.outcome'),
      animation: "/videos/Mobile-Device-Header-3.mp4"
    },
    {
      title: t('services.backup.title'),
      description: t('services.backup.description'),
      icon: "💾",
      highlight: t('services.backup.highlight'),
      outcome: t('services.backup.outcome'),
      animation: "/videos/Workflo_W_final_1.mp4"
    },
    {
      title: t('services.support.title'),
      description: t('services.support.description'),
      icon: "📱",
      highlight: t('services.support.highlight'),
      outcome: t('services.support.outcome'),
      animation: "/videos/Mobile-Device-Header-2.mp4"
    }
  ]

  // Current active clients - Updated with all logos from folder
  const currentClients = [
    { name: "Havas Media", src: "/images/logos/Havas_Media.png" },
    { name: "Podimo", src: "/images/logos/Podimo_Logo.png" },
    { name: "DoctorFeelgood", src: "/images/logos/doctorfeelgood_Logo.jpg" },
    { name: "Aescap", src: "/images/logos/Aescap2_Logo.png" },
    { name: "Hunt Amsterdam", src: "/images/logos/huntamsterdam_logo.jpeg" },
    { name: "Rademakkers", src: "/images/logos/Rademakkers_Logo.png" },
    { name: "Tonko", src: "/images/logos/tonko_Logo.png" },
    { name: "DMC Makelaars", src: "/images/logos/DMC_Logo.png" },
    { name: "Klaar", src: "/images/logos/Klaar_Logo.jpg" },
    { name: "Dag en Nacht", src: "/images/logos/Dagennacht_Logo.png" },
    { name: "Voice Industries", src: "/images/logos/voice.industries_Logo.jpeg" },
    { name: "Schulte en Lestrade", src: "/images/logos/senl.png" },
    { name: "Duwtje", src: "/images/logos/duwtje.svg" },
    { name: "Highwood", src: "/images/logos/highwood.png" },
    { name: "PR Mansion", src: "/images/logos/prmansion.png" },
    { name: "Winix", src: "/images/logos/Winix_Logo.jpg" },
    { name: "WorkStuff", src: "/images/logos/workstuff_Logo.jpg" },
    { name: "Open Boek", src: "/images/logos/open-boek_Logo.png" },
    { name: "Bijvoorkeur", src: "/images/logos/Bijvoorkeur_Logo.jpg" },
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
      name: t('team.florian.name'),
      role: t('team.florian.role'),
      expertise: t('team.florian.expertise'),
      image: "/images/team/florian.jpg"
    },
    {
      name: t('team.namhoon.name'),
      role: t('team.namhoon.role'),
      expertise: t('team.namhoon.expertise'),
      image: "/images/team/nam.jpg"
    },
    {
      name: t('team.mas.name'),
      role: t('team.mas.role'),
      expertise: t('team.mas.expertise'),
      image: "" // Removed - photo was of Samir, not Mas
    },
    {
      name: t('team.marcello.name'),
      role: t('team.marcello.role'),
      expertise: t('team.marcello.expertise'),
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

  // HubSpot form is now imported as a component

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">

      {/* Header with Warning Tape */}
      <DangerTape height="h-3" showText={false} />
      
      <Header />

      {/* News Ticker */}
      <NewsTicker />

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
                <span className="text-white font-medium">{t('hero.badge.text')}</span>
              </motion.div>
              
              <motion.h1 
                className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight"
                initial={{ opacity: 0, y: 30 }}
                animate={heroInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                {t('hero.title')}
                <br />
                <motion.span 
                  className="text-3xl md:text-4xl text-yellow-400"
                  initial={{ opacity: 0 }}
                  animate={heroInView ? { opacity: 1 } : {}}
                  transition={{ duration: 0.8, delay: 0.8 }}
                >
                  {t('hero.subtitle')}
                </motion.span>
              </motion.h1>
              
              <motion.p 
                className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                animate={heroInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                {t('hero.description')}
              </motion.p>

              {/* Value Props with Facts */}
              <motion.div 
                className="grid md:grid-cols-3 gap-6 max-w-3xl mx-auto mb-12"
                initial={{ opacity: 0, y: 30 }}
                animate={heroInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 1 }}
              >
                {[
                  { value: "99.97%", label: t('hero.benefit.uptime'), subtitle: t('stats.measured') },
                  { value: "4 min", label: t('hero.benefit.response'), subtitle: t('stats.phone_response') },
                  { value: "€500K+", label: t('hero.benefit.savings'), subtitle: t('stats.since_2015') }
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
                    {t('hero.cta.primary')}
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
                    {t('hero.cta.secondary')}
                  </a>
                </motion.div>
              </motion.div>
              
              <motion.p 
                className="text-gray-400 mt-6 text-sm"
                initial={{ opacity: 0 }}
                animate={heroInView ? { opacity: 1 } : {}}
                transition={{ duration: 0.6, delay: 1.8 }}
              >
                {t('hero.bottom.guarantee')}
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

        {/* Apple-inspired Hello Section */}
        <HelloSection />

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
                {t('simplicity.title')}
              </h2>
              <p className="text-xl md:text-2xl text-gray-700 leading-relaxed mb-8">
                {t('simplicity.description')}
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
                    {t('simplicity.price.title')}
                  </h3>
                  <p className="text-gray-600">
                    {t('simplicity.price.description')}
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
                    {t('simplicity.language.title')}
                  </h3>
                  <p className="text-gray-600">
                    {t('simplicity.language.description')}
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
                    {t('simplicity.works.title')}
                  </h3>
                  <p className="text-gray-600">
                    {t('simplicity.works.description')}
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
                  {t('simplicity.quote.text')}
                </p>
                <p className="text-sm text-gray-600 mt-3 font-semibold">
                  {t('simplicity.quote.author')}
                </p>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* REMOVED: Client Logos Grid Section - Duplicate with "Sector Ervaring" section below */}
        {/* Keeping only the carousel version as requested in todo2.md */}
        {/* REMOVED: Stats section completely to avoid any layout issues */}

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
                {t('services.title')}
              </motion.h2>
              <motion.p 
                className="text-xl text-gray-300 max-w-4xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                animate={servicesInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                {t('services.description')}
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
                          {t('services.learn_more')} →
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
                  {t('services.view_all')}
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
                {t('team.title')}
              </motion.h2>
              <motion.p 
                className="text-xl text-gray-600 max-w-3xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                animate={teamInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                {t('team.description')}
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
                {t('testimonials.title')}
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                {t('testimonials.description')}
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  quote: t('testimonials.quote1'),
                  author: t('testimonials.author1'),
                  role: t('testimonials.role1'),
                  result: t('testimonials.result1'),
                  stats: t('testimonials.stats1'),
                  rating: 5,
                  logo: '/images/logos/doctorfeelgood.jpg'
                },
                {
                  quote: t('testimonials.quote2'),
                  author: t('testimonials.author2'),
                  role: t('testimonials.role2'),
                  result: t('testimonials.result2'),
                  stats: t('testimonials.stats2'),
                  rating: 5,
                  logo: '/images/logos/havas-media.png'
                },
                {
                  quote: t('testimonials.quote3'),
                  author: t('testimonials.author3'),
                  role: t('testimonials.role3'),
                  result: t('testimonials.result3'),
                  stats: t('testimonials.stats3'),
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

        {/* News Feed Section - Temporarily hidden to avoid white space */}
        {/*
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <NewsFeed maxItems={6} showDescription={true} />
          </div>
        </section>
        */}

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
                {t('industry.title')}
              </motion.h3>
              <motion.p 
                className="text-gray-600 max-w-2xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                animate={industryInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                {t('industry.description')}
              </motion.p>
            </motion.div>
            
            {/* Horizontal scrolling logo strip */}
            <div className="relative overflow-hidden py-8">
              <div className="flex items-center space-x-12 animate-scroll" style={{ animation: 'scroll 60s linear infinite' }}>
                {[...currentClients, ...previousClients, ...currentClients, ...previousClients].map((logo, index) => {
                  // Make specific logos smaller to fit better
                  const needsResize = logo.name === 'John Doornik Casting' || 
                                     logo.name === 'DoctorFeelgood' || 
                                     logo.name === 'BLC Financeview'
                  
                  return (
                    <div key={index} className="flex-shrink-0">
                      <div className={`relative flex items-center justify-center ${needsResize ? 'w-28 h-16' : 'w-36 h-20'}`}>
                        <Image
                          src={logo.src}
                          alt={`${logo.name} logo`}
                          fill
                          className="object-contain filter grayscale hover:grayscale-0 transition-all opacity-60 hover:opacity-100"
                          sizes={needsResize ? "112px" : "144px"}
                          onError={(e) => {
                            console.warn(`Failed to load logo: ${logo.src}`)
                            e.currentTarget.style.display = 'none'
                          }}
                        />
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
            
            {/* Industry sectors */}
            <div className="mt-8 flex flex-wrap justify-center gap-2">
              <span className="px-4 py-2 bg-yellow-100 text-yellow-800 text-sm rounded-full font-medium">
                {t('industry.media')}
              </span>
              <span className="px-4 py-2 bg-blue-100 text-blue-800 text-sm rounded-full font-medium">
                {t('industry.nonprofit')}
              </span>
              <span className="px-4 py-2 bg-green-100 text-green-800 text-sm rounded-full font-medium">
                {t('industry.technology')}
              </span>
              <span className="px-4 py-2 bg-purple-100 text-purple-800 text-sm rounded-full font-medium">
                {t('industry.retail')}
              </span>
            </div>
          </div>
        </section>

        {/* Newsletter & Contact Forms Section */}
        <section className="relative py-12 bg-gradient-to-br from-gray-50 to-white overflow-hidden">
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
                {t('newsletter.title')}
              </h2>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                {t('newsletter.description')}
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
        <section className="relative py-16 hero-gradient overflow-hidden">
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
              {t('cta.ready_title')}
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              {t('cta.ready_description')}
            </p>
            
            <div className="bg-white/10 backdrop-blur-sm text-white rounded-2xl p-8 max-w-2xl mx-auto mb-12 border border-white/20">
              <h3 className="text-2xl font-bold mb-4">{t('cta.assessment_title')}</h3>
              <p className="text-lg mb-6">
                {t('cta.assessment_description')}
              </p>
              <ul className="text-left max-w-md mx-auto mb-6 space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-yellow-400">✓</span>
                  <span>{t('cta.assessment.security')}</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-yellow-400">✓</span>
                  <span>{t('cta.assessment.cost')}</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-yellow-400">✓</span>
                  <span>{t('cta.assessment.backup')}</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-yellow-400">✓</span>
                  <span>{t('cta.assessment.network')}</span>
                </li>
              </ul>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  href="/contact" 
                  className="bg-yellow-400 text-black px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-500 transition-all shadow-lg"
                >
                  {t('cta.start_assessment')}
                </Link>
                <a 
                  href="tel:020-3080465" 
                  className="bg-white text-black px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-all shadow-lg"
                >
                  {t('cta.call_today')}
                </a>
              </div>
            </div>
            
            <p className="text-gray-400 text-sm">
              {t('cta.no_obligations')}
            </p>
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer />

      {/* Warning Tape Bottom */}
      <DangerTape height="h-3" showText={false} />
    </div>
  )
}

// Add TypeScript declaration for HubSpot
declare global {
  interface Window {
    hbspt: any
  }
}