'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, useScroll, useTransform, useSpring } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import MobileMenu from '@/components/layout/MobileMenu'
import PricingCalculator from '@/components/PricingCalculator'
import { useLanguage } from '@/context/LanguageContext'

export default function Home() {
  const { t, language } = useLanguage()
  const [isVideoLoaded, setIsVideoLoaded] = useState(false)
  const [activeService, setActiveService] = useState(0)
  
  // Scroll-triggered animation refs
  const [heroRef, heroInView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const [statsRef, statsInView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const [servicesRef, servicesInView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const [teamRef, teamInView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const [testimonialsRef, testimonialsInView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const [industryRef, industryInView] = useInView({ triggerOnce: true, threshold: 0.1 })
  
  // Scroll-based animations
  const { scrollYProgress } = useScroll()
  const yRange = useTransform(scrollYProgress, [0, 1], [0, -200])
  const opacityRange = useTransform(scrollYProgress, [0, 0.2], [1, 0])
  const springConfig = { stiffness: 400, damping: 40 }
  const ySpring = useSpring(yRange, springConfig)

  useEffect(() => {
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

  const services = [
    {
      title: t('services.managed_it.title'),
      description: t('services.managed_it.description'),
      icon: "🛡️",
      highlight: t('services.managed_it.highlight'),
      outcome: t('services.managed_it.outcome'),
      animation: "/videos/workflo-code-animation.mp4"
    },
    {
      title: t('services.cybersecurity.title'),
      description: t('services.cybersecurity.description'),
      icon: "🔒",
      highlight: t('services.cybersecurity.highlight'),
      outcome: t('services.cybersecurity.outcome'),
      animation: "/videos/security-animation.gif"
    },
    {
      title: t('services.cloud.title'),
      description: t('services.cloud.description'),
      icon: "☁️",
      highlight: t('services.cloud.highlight'),
      outcome: t('services.cloud.outcome'),
      animation: "/videos/mobile-device-animation.mp4"
    },
    {
      title: t('services.consulting.title'),
      description: t('services.consulting.description'),
      icon: "💡",
      highlight: t('services.consulting.highlight'),
      outcome: t('services.consulting.outcome'),
      animation: "/videos/workflo-w-animation.mp4"
    },
    {
      title: t('services.gdpr.title'),
      description: t('services.gdpr.description'),
      icon: "📊",
      highlight: t('services.gdpr.highlight'),
      outcome: t('services.gdpr.outcome'),
      animation: null
    },
    {
      title: t('services.network.title'),
      description: t('services.network.description'),
      icon: "📡",
      highlight: t('services.network.highlight'),
      outcome: t('services.network.outcome'),
      animation: null
    },
    {
      title: t('services.backup.title'),
      description: t('services.backup.description'),
      icon: "💾",
      highlight: t('services.backup.highlight'),
      outcome: t('services.backup.outcome'),
      animation: null
    },
    {
      title: t('services.support.title'),
      description: t('services.support.description'),
      icon: "📱",
      highlight: t('services.support.highlight'),
      outcome: t('services.support.outcome'),
      animation: "/videos/mobile-device-header.mp4"
    }
  ]

  // Current active clients
  const currentClients = [
    { name: "Havas Media", src: "/images/logos/Havas_Media.png" },
    { name: "Podimo", src: "/images/logos/Podimo_Logo.png" },
    { name: "DoctorFeelgood", src: "/images/logos/doctorfeelgood_Logo.jpg" },
    { name: "Aescap", src: "/images/logos/Aescap2_Logo.png" },
    { name: "Hunt Amsterdam", src: "/images/logos/huntamsterdam_logo.jpeg" },
    { name: "Rademakkers", src: "/images/logos/Rademakkers_Logo.png" },
    { name: "Tonko", src: "/images/logos/tonko_Logo.png" },
    { name: "DMC", src: "/images/logos/DMC_Logo.png" },
    { name: "Klaar", src: "/images/logos/Klaar_Logo.jpg" },
    { name: "Dag en Nacht", src: "/images/logos/Dagennacht_Logo.png" },
    { name: "Voice Industries", src: "/images/logos/voice.industries_Logo.jpeg" },
    { name: "Duwtje", src: "/images/logos/duwtje.svg" },
    { name: "Highwood", src: "/images/logos/highwood.png" },
    { name: "PR Mansion", src: "/images/logos/prmansion.png" },
    { name: "Winix", src: "/images/logos/Winix_Logo.jpg" },
    { name: "WorkStuff", src: "/images/logos/workstuff_Logo.jpg" },
    { name: "Open Boek", src: "/images/logos/open-boek_Logo.png" },
    { name: "Bijvoorkeur", src: "/images/logos/Bijvoorkeur_Logo.jpg" },
    { name: "BLC Financeview", src: "/images/logos/blc-financeview.png" },
    { name: "John Doornik", src: "/images/logos/john-doornik.png" },
    { name: "Koschuch", src: "/images/logos/koschuch.png" }
  ]

  // Previous clients we've worked with
  const previousClients = [
    { name: "Leyden Labs", src: "/images/logos/leydenlabs_Logo.png" },
    { name: "TBWA", src: "/images/logos/tbwa_Logo.png" },
    { name: "iO Digital", src: "/images/logos/io_Logo.png" },
    { name: "Daily Paper", src: "/images/logos/dailypaper_Logo.png" },
    { name: "Greenpeace", src: "/images/logos/Greenpeace_logo.png" },
    { name: "JUMP", src: "/images/logos/JUMP_Logo.jpg" },
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
      image: "/images/team/mas.jpg"
    },
    {
      name: t('team.marcello.name'),
      role: t('team.marcello.role'),
      expertise: t('team.marcello.expertise'),
      image: "/images/team/marcello.jpg"
    }
  ]

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <style jsx global>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
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
        
        @keyframes pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.05); }
        }
        
        .animate-scroll {
          animation: scroll 20s linear infinite;
        }
        
        .fade-in-up {
          opacity: 0;
          transform: translateY(30px);
        }
        
        .animate-in {
          animation: fadeInUp 0.8s ease forwards;
        }
        
        .hover-lift {
          transition: all 0.3s ease;
        }
        
        .hover-lift:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 40px rgba(0,0,0,0.15);
        }
        
        .pulse-animation {
          animation: pulse 2s ease infinite;
        }
        
        .gradient-text {
          background: linear-gradient(135deg, #f2f400 0%, #ffd700 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        
        .hero-gradient {
          background: linear-gradient(135deg, #000000 0%, #1a1a1a 50%, #000000 100%);
        }
        
        .warning-tape {
          background-image: repeating-linear-gradient(
            45deg,
            #f2f400,
            #f2f400 20px,
            #000000 20px,
            #000000 40px
          );
        }
      `}</style>

      {/* Header Component */}
      <Header />
      
      {/* Mobile Menu Component */}
      <MobileMenu />

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
        
        {/* Video Background with Workflo Animation */}
        <motion.div 
          className="absolute inset-0 overflow-hidden"
          style={{ opacity: opacityRange }}
        >
          <video
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 w-full h-full object-cover opacity-30"
            onLoadedData={() => setIsVideoLoaded(true)}
          >
            <source src="/videos/workflo-code-animation.mp4" type="video/mp4" />
          </video>
        </motion.div>
        
        {/* Additional W Animation Overlay */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-96 h-96 object-contain opacity-10"
          >
            <source src="/videos/workflo-w-animation.mp4" type="video/mp4" />
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
                { value: "€500K+", label: t('hero.benefit.savings'), subtitle: t('stats.total_savings') }
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
                  <span className="ml-2 text-sm">({t('hero.cta.time')})</span>
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
          </div>
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

      {/* Client Logos Section - Light with Yellow Border */}
      <section className="py-20 bg-gray-50 border-y-8 border-yellow-400" ref={statsRef}>
        <div className="container mx-auto px-4">
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
              {t('stats.title')}
            </motion.h2>
            <motion.p 
              className="text-xl text-gray-600 max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={statsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              {t('stats.description')}
            </motion.p>
          </motion.div>

          {/* Logo Grid */}
          <motion.h3 
            className="text-2xl font-bold text-center text-black mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={statsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            {language === 'en' ? 'Current Clients' : 'Huidige Klanten'}
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
                  className={`bg-white rounded-lg p-3 flex items-center justify-center group ${
                    isBiggerLogo ? 'h-28 md:col-span-2' : 'h-20'
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
                    scale: 1.05,
                    boxShadow: "0 20px 40px rgba(0,0,0,0.15)",
                    transition: { duration: 0.3 }
                  }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className={`relative flex items-center justify-center ${
                    isBiggerLogo ? 'w-32 h-20' : 'w-24 h-14'
                  }`}>
                    <Image
                      src={logo.src}
                      alt={`${logo.name} logo`}
                      fill
                      className="object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
                      sizes={isBiggerLogo ? '128px' : '96px'}
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
                { value: "€500K+", label: t('stats.saved'), subtitle: "2024 results" },
                { value: "500+", label: t('stats.prevented'), subtitle: t('stats.since_2015') },
                { value: "4 min", label: t('stats.response'), subtitle: t('stats.average_2024') },
                { value: "€0", label: t('stats.ransomware'), subtitle: t('stats.protected') }
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
      <section className="py-20 bg-gray-900 text-white" ref={servicesRef}>
        <div className="container mx-auto px-4">
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
                        href={`/diensten/${service.title.toLowerCase().replace(/\s+/g, '-')}`}
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
      <section className="py-20 bg-gray-50" ref={teamRef}>
        <div className="container mx-auto px-4">
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

      {/* Pricing Calculator Section - Dark Background */}
      <section className="py-20 bg-black">
        <PricingCalculator />
      </section>

      {/* Testimonials - Light Background */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
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
                logo: '/images/logos/doctorfeelgood_Logo.jpg'
              },
              {
                quote: t('testimonials.quote2'),
                author: t('testimonials.author2'),
                role: t('testimonials.role2'),
                result: t('testimonials.result2'),
                stats: t('testimonials.stats2'),
                rating: 5,
                logo: '/images/logos/Havas_Media.png'
              },
              {
                quote: t('testimonials.quote3'),
                author: t('testimonials.author3'),
                role: t('testimonials.role3'),
                result: t('testimonials.result3'),
                stats: t('testimonials.stats3'),
                rating: 5,
                logo: '/images/logos/Winix_Logo.jpg'
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

      {/* Industry Experience Section - White Background */}
      <section className="py-16 bg-white" ref={industryRef}>
        <div className="container mx-auto px-4">
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
              {language === 'en' ? 'Industry Experience Since 2015' : 'Sector Ervaring Sinds 2015'}
            </motion.h3>
            <motion.p 
              className="text-gray-600 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={industryInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              {language === 'en' 
                ? "Over the years, we've had the privilege of serving diverse organizations across multiple sectors, building expertise that benefits all our clients."
                : "Door de jaren heen hebben we het voorrecht gehad om diverse organisaties in meerdere sectoren te bedienen, waarbij we expertise hebben opgebouwd die al onze klanten ten goede komt."}
            </motion.p>
          </motion.div>
          
          {/* Horizontal scrolling logo strip */}
          <div className="relative overflow-hidden py-8">
            <div className="flex items-center space-x-12 animate-scroll" style={{ animation: 'scroll 30s linear infinite' }}>
              {[...previousClients, ...previousClients].map((logo, index) => (
                <div key={index} className="flex-shrink-0">
                  <div className="relative w-32 h-16 flex items-center justify-center">
                    {logo.src && (logo.src.includes('JUMP') || logo.src.includes('ladress') || logo.src.includes('Greenpeace')) ? (
                      <Image
                        src={logo.src}
                        alt={`${logo.name} logo`}
                        fill
                        className="object-contain filter grayscale hover:grayscale-0 transition-all opacity-40 hover:opacity-70"
                        sizes="128px"
                        onError={(e) => {
                          e.currentTarget.style.display = 'none'
                        }}
                      />
                    ) : (
                      <div className="group relative">
                        {/* Professional text-based logo placeholder */}
                        <div className={`
                          relative px-4 py-3 rounded-lg transition-all duration-300 group-hover:shadow-md
                          ${logo.name === 'Leyden Labs' ? 'bg-gradient-to-r from-blue-600 to-blue-700 text-white' :
                            logo.name === 'TBWA' ? 'bg-gradient-to-r from-red-600 to-red-700 text-white' :
                            logo.name === 'iO Digital' ? 'bg-gradient-to-r from-green-600 to-green-700 text-white' :
                            logo.name === 'Daily Paper' ? 'bg-gradient-to-r from-purple-600 to-purple-700 text-white' :
                            'bg-gradient-to-r from-gray-600 to-gray-700 text-white'
                          }
                        `}>
                          <div className="font-bold text-sm tracking-wider uppercase">
                            {logo.name === 'Leyden Labs' ? 'LEYDEN' :
                             logo.name === 'TBWA' ? 'TBWA\\' :
                             logo.name === 'iO Digital' ? 'iO' :
                             logo.name === 'Daily Paper' ? 'DAILY' :
                             logo.name}
                          </div>
                          {logo.name === 'Leyden Labs' && (
                            <div className="text-xs opacity-90 -mt-1">LABS</div>
                          )}
                          {logo.name === 'iO Digital' && (
                            <div className="text-xs opacity-90 -mt-1">DIGITAL</div>
                          )}
                          {logo.name === 'Daily Paper' && (
                            <div className="text-xs opacity-90 -mt-1">PAPER</div>
                          )}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Industry sectors */}
          <div className="mt-8 flex flex-wrap justify-center gap-2">
            <span className="px-4 py-2 bg-yellow-100 text-yellow-800 text-sm rounded-full font-medium">
              {language === 'en' ? 'Media & Marketing' : 'Media & Marketing'}
            </span>
            <span className="px-4 py-2 bg-blue-100 text-blue-800 text-sm rounded-full font-medium">
              {language === 'en' ? 'Non-Profit' : 'Non-Profit'}
            </span>
            <span className="px-4 py-2 bg-green-100 text-green-800 text-sm rounded-full font-medium">
              {language === 'en' ? 'Technology' : 'Technologie'}
            </span>
            <span className="px-4 py-2 bg-purple-100 text-purple-800 text-sm rounded-full font-medium">
              {language === 'en' ? 'Fashion & Retail' : 'Mode & Retail'}
            </span>
          </div>
        </div>
      </section>

      {/* Professional CTA Section */}
      <section className="relative py-24 hero-gradient">
        <div className="container mx-auto px-4 text-center relative z-10">
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

      {/* Footer Component */}
      <Footer />
    </div>
  )
}