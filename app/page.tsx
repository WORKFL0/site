'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import MobileMenu from '@/components/layout/MobileMenu'
import PricingCalculator from '@/components/PricingCalculator'
import NewsFeed from '@/components/NewsFeed'
import SafeErrorBoundary from '@/components/SafeErrorBoundary'
import { useLanguage } from '@/context/LanguageContext'
import { useHydration } from '@/components/HydrationProvider'

export default function Home() {
  const { t, language } = useLanguage()
  const { isHydrated, isStageComplete } = useHydration()
  const [activeService, setActiveService] = useState(0)
  
  // CRITICAL FIX: Simplified animation control - only enable after full hydration
  const animationsEnabled = isHydrated && isStageComplete('animations')
  const [sectionsVisible, setSectionsVisible] = useState({
    hero: false,
    stats: false,
    services: false,
    team: false,
    testimonials: false,
    industry: false
  })

  // SIMPLIFIED: Single effect to progressively show sections without complex intersection observer
  useEffect(() => {
    if (!isHydrated) return

    // Progressive section reveal with simple timeouts instead of complex intersection observers
    const timeouts: NodeJS.Timeout[] = []
    
    timeouts.push(setTimeout(() => setSectionsVisible(prev => ({ ...prev, hero: true })), 100))
    timeouts.push(setTimeout(() => setSectionsVisible(prev => ({ ...prev, stats: true })), 300))
    timeouts.push(setTimeout(() => setSectionsVisible(prev => ({ ...prev, services: true })), 600))
    timeouts.push(setTimeout(() => setSectionsVisible(prev => ({ ...prev, team: true })), 900))
    timeouts.push(setTimeout(() => setSectionsVisible(prev => ({ ...prev, testimonials: true })), 1200))
    timeouts.push(setTimeout(() => setSectionsVisible(prev => ({ ...prev, industry: true })), 1500))
    
    return () => {
      timeouts.forEach(clearTimeout)
    }
  }, [isHydrated])

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

  // Current active clients
  const currentClients = [
    { name: "Havas Media", src: "/images/logos/Havas_Media.png" },
    { name: "Havas Lemz", src: "/images/logos/Havas_Media.png" }, // Using same logo as Havas Media for now
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
      image: "/images/team/samir.jpg"
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

      {/* Header Component */}
      <Header />
      
      {/* Mobile Menu Component */}
      <MobileMenu />

      {/* Hero Section - Simplified without complex video backgrounds */}
      <section className="relative min-h-screen flex items-center justify-center hero-gradient overflow-hidden mt-20">
        {/* Simplified Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `repeating-linear-gradient(
              45deg,
              transparent,
              transparent 35px,
              #f2f400 35px,
              #f2f400 70px
            )`
          }}></div>
        </div>
        
        {/* SIMPLIFIED: Only load video after section is visible and hydration is complete */}
        {sectionsVisible.hero && isStageComplete('external') && (
          <div className="absolute inset-0 overflow-hidden">
            <video
              autoPlay
              muted
              loop
              playsInline
              className="absolute inset-0 w-full h-full object-cover opacity-20"
              preload="none"
            >
              <source src="/videos/Workflo-code-animatie-3.mp4" type="video/mp4" />
            </video>
          </div>
        )}

        {/* Hero Content - Simplified animation logic */}
        <div className="relative z-10 container mx-auto px-4 text-center">
          <div 
            className={`max-w-5xl mx-auto transition-all duration-1000 ${
              sectionsVisible.hero ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            {/* Professional Badge - Simplified */}
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-6 py-2 mb-8">
              <span className="text-yellow-400 font-bold">✓</span>
              <span className="text-white font-medium">{t('hero.badge.text')}</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
              {t('hero.title')}
              <br />
              <span className="text-3xl md:text-4xl text-yellow-400">
                {t('hero.subtitle')}
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              {t('hero.description')}
            </p>

            {/* Value Props with Facts - Simplified */}
            <div className="grid md:grid-cols-3 gap-6 max-w-3xl mx-auto mb-12">
              {[
                { value: "99.97%", label: t('hero.benefit.uptime'), subtitle: t('stats.measured') },
                { value: "4 min", label: t('hero.benefit.response'), subtitle: t('stats.phone_response') },
                { value: "€500K+", label: t('hero.benefit.savings'), subtitle: t('stats.total_savings') }
              ].map((stat, index) => (
                <div 
                  key={index}
                  className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-4 hover:scale-105 transition-transform duration-300"
                >
                  <div className="text-3xl font-bold text-yellow-400">{stat.value}</div>
                  <div className="text-white font-medium">{stat.label}</div>
                  <div className="text-xs text-gray-400 mt-1">{stat.subtitle}</div>
                </div>
              ))}
            </div>

            {/* Professional CTAs - Simplified */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link 
                href="/contact" 
                className="bg-yellow-400 text-black px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-500 transition-all shadow-lg inline-block hover:scale-105"
              >
                {t('hero.cta.primary')}
                <span className="ml-2 text-sm">({t('hero.cta.time')})</span>
              </Link>
              <a 
                href="tel:020-3080465" 
                className="bg-white text-black px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-all shadow-lg inline-block hover:scale-105"
              >
                {t('hero.cta.secondary')}
              </a>
            </div>
            
            <p className="text-gray-400 mt-6 text-sm">
              {t('hero.bottom.guarantee')}
            </p>
          </div>
        </div>

        {/* Simplified Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-8 h-12 border-2 border-white/50 rounded-full flex items-start justify-center p-2">
            <div className="w-1 h-3 bg-white rounded-full animate-pulse" />
          </div>
        </div>
      </section>

      {/* Simplicity Message Section - New */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              {language === 'en' 
                ? 'IT Made Simple. Really Simple.' 
                : 'IT Simpel Gemaakt. Echt Simpel.'}
            </h2>
            <p className="text-xl md:text-2xl text-gray-700 leading-relaxed mb-8">
              {language === 'en'
                ? "We know you didn't start your business to become an IT expert. That's why we've stripped away all the technical jargon and complicated contracts. No confusing terms, no hidden fees, no 200-page manuals."
                : "We weten dat je je bedrijf niet bent gestart om IT-expert te worden. Daarom hebben we alle technische jargon en ingewikkelde contracten weggelaten. Geen verwarrende termen, geen verborgen kosten, geen handleidingen van 200 pagina's."}
            </p>
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <div className="text-center">
                <div className="w-20 h-20 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">🎯</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {language === 'en' ? 'One Clear Price' : 'Één Duidelijke Prijs'}
                </h3>
                <p className="text-gray-600">
                  {language === 'en' 
                    ? 'You know exactly what you pay. Every month. No surprises.'
                    : 'Je weet precies wat je betaalt. Elke maand. Geen verrassingen.'}
                </p>
              </div>
              <div className="text-center">
                <div className="w-20 h-20 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">💬</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {language === 'en' ? 'Plain Language' : 'Gewone Taal'}
                </h3>
                <p className="text-gray-600">
                  {language === 'en' 
                    ? 'We explain everything in words you actually understand.'
                    : 'We leggen alles uit in woorden die je echt begrijpt.'}
                </p>
              </div>
              <div className="text-center">
                <div className="w-20 h-20 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">✅</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {language === 'en' ? 'It Just Works' : 'Het Werkt Gewoon'}
                </h3>
                <p className="text-gray-600">
                  {language === 'en' 
                    ? 'Your IT works. You can focus on your business. Simple as that.'
                    : 'Je IT werkt. Jij kunt je op je bedrijf richten. Zo simpel is het.'}
                </p>
              </div>
            </div>
            <div className="mt-12 p-8 bg-gray-50 rounded-xl">
              <p className="text-lg text-gray-700 italic">
                {language === 'en'
                  ? '"If you can order a pizza online, you can understand our IT services. That\'s our promise."'
                  : '"Als je online een pizza kunt bestellen, kun je onze IT-diensten begrijpen. Dat is onze belofte."'}
              </p>
              <p className="text-sm text-gray-600 mt-3 font-semibold">
                — Florian, {language === 'en' ? 'Founder Workflo' : 'Oprichter Workflo'}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Client Logos Section - Simplified */}
      <section className="relative py-20 bg-gray-50 border-y-8 border-yellow-400 overflow-hidden">
        {/* Simplified background video - only load when section is visible */}
        {sectionsVisible.stats && isStageComplete('external') && (
          <div className="absolute inset-0 pointer-events-none">
            <video
              autoPlay
              muted
              loop
              playsInline
              className="absolute inset-0 w-full h-full object-cover opacity-5"
              preload="none"
            >
              <source src="/videos/Workflo_W_Mobile_1.mp4" type="video/mp4" />
            </video>
          </div>
        )}
        <div className="container mx-auto px-4 relative z-10">
          <div 
            className={`text-center mb-12 transition-all duration-1000 ${
              sectionsVisible.stats ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <h2 className="text-4xl font-bold text-black mb-4">
              {t('stats.title')}
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              {t('stats.description')}
            </p>
          </div>

          {/* Logo Grid - Simplified */}
          <h3 className="text-2xl font-bold text-center text-black mb-8">
            {language === 'en' ? 'Current Clients' : 'Huidige Klanten'}
          </h3>
          <div className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-7 gap-4">
            {currentClients.map((logo, index) => {
              // Check if this is one of the logos that should be bigger
              const isBiggerLogo = logo.name === 'John Doornik' || 
                                   logo.name === 'DoctorFeelgood' || 
                                   logo.name === 'BLC Financeview'
              
              return (
                <div 
                  key={index}
                  className={`bg-white rounded-lg flex items-center justify-center group hover:-translate-y-2 transition-all duration-300 ${
                    isBiggerLogo ? 'h-28 p-4 shadow-lg border-2 border-yellow-400 hover:scale-108' : 'h-20 p-3 hover:scale-105'
                  }`}
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
                </div>
              )
            })}
          </div>


          {/* Professional Stats Bar - Simplified */}
          <div className="mt-16 bg-black text-white rounded-2xl p-8">
            <div className="grid md:grid-cols-4 gap-8 text-center">
              {[
                { value: "€500K+", label: t('stats.saved'), subtitle: "2024 results" },
                { value: "500+", label: t('stats.prevented'), subtitle: t('stats.since_2015') },
                { value: "4 min", label: t('stats.response'), subtitle: t('stats.average_2024') },
                { value: "€0", label: t('stats.ransomware'), subtitle: t('stats.protected') }
              ].map((stat, index) => (
                <div
                  key={index}
                  className="hover:scale-105 hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="text-4xl font-bold text-yellow-400 animate-pulse">
                    {stat.value}
                  </div>
                  <div className="text-gray-300">{stat.label}</div>
                  <div className="text-xs text-gray-400 mt-1">{stat.subtitle}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Section - Simplified */}
      <section className="relative py-20 bg-gray-900 text-white overflow-hidden">
        {/* Simplified background video - only one, loads when section visible */}
        {sectionsVisible.services && isStageComplete('external') && (
          <div className="absolute top-0 left-0 opacity-5 pointer-events-none">
            <video
              autoPlay
              muted
              loop
              playsInline
              className="w-72 h-72 object-cover"
              preload="none"
            >
              <source src="/videos/Workflo-code-animatie-2.mp4" type="video/mp4" />
            </video>
          </div>
        )}
        <div className="container mx-auto px-4 relative z-10">
          <div 
            className={`text-center mb-16 transition-all duration-1000 ${
              sectionsVisible.services ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              {t('services.title')}
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto">
              {t('services.description')}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="group relative bg-gray-800 border border-gray-700 rounded-xl overflow-hidden cursor-pointer hover:-translate-y-3 hover:scale-103 hover:shadow-2xl transition-all duration-300"
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
                
                {/* Simplified hover overlay - no video */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
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
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link 
              href="/diensten" 
              className="inline-flex items-center gap-2 bg-yellow-400 text-black px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-500 transition-all hover:scale-105"
            >
              {t('services.view_all')}
              <span className="animate-pulse">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Team Section - Simplified */}
      <section className="relative py-20 bg-gray-50 overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div 
            className={`text-center mb-16 transition-all duration-1000 ${
              sectionsVisible.team ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              {t('team.title')}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t('team.description')}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div 
                key={index}
                className="bg-white rounded-xl overflow-hidden group hover:-translate-y-3 hover:scale-103 hover:shadow-2xl transition-all duration-300"
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
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Calculator Section - Dark Background */}
      <section className="py-20 bg-black">
        <SafeErrorBoundary componentName="PricingCalculator">
          <PricingCalculator />
        </SafeErrorBoundary>
      </section>

      {/* Testimonials - Simplified */}
      <section className="relative py-20 bg-white overflow-hidden">
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

      {/* Industry News Feed - Simplified and Safe */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <SafeErrorBoundary 
            componentName="NewsFeed"
            fallback={
              <div className="text-center py-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Latest Industry News</h2>
                <div className="text-gray-600 bg-white rounded-lg p-8 max-w-md mx-auto">
                  <div className="text-gray-400 mb-4">📰</div>
                  <p>News feed temporarily unavailable. Please check back later.</p>
                </div>
              </div>
            }
          >
            <NewsFeed maxItems={6} showDescription={true} />
          </SafeErrorBoundary>
        </div>
      </section>

      {/* Industry Experience Section - Simplified */}
      <section className="relative py-16 bg-white overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div 
            className={`text-center mb-12 transition-all duration-1000 ${
              sectionsVisible.industry ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              {language === 'en' ? 'Industry Experience Since 2015' : 'Sector Ervaring Sinds 2015'}
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              {language === 'en' 
                ? "Over the years, we've had the privilege of serving diverse organizations across multiple sectors, building expertise that benefits all our clients."
                : "Door de jaren heen hebben we het voorrecht gehad om diverse organisaties in meerdere sectoren te bedienen, waarbij we expertise hebben opgebouwd die al onze klanten ten goede komt."}
            </p>
          </div>
          
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
      <section className="relative py-24 hero-gradient overflow-hidden">
        {/* Background Video Animation - Simplified without refs */}
        {isStageComplete('external') && (
          <div className="absolute inset-0 pointer-events-none">
            <video
              autoPlay
              muted
              loop
              playsInline
              className="absolute inset-0 w-full h-full object-cover opacity-10"
              preload="none"
            >
              <source src="/videos/Security_1.mp4" type="video/mp4" />
            </video>
          </div>
        )}
        {isStageComplete('external') && (
          <div className="absolute top-10 right-10 opacity-8 pointer-events-none">
            <video
              autoPlay
              muted
              loop
              playsInline
              className="w-64 h-64 object-contain"
              preload="none"
            >
              <source src="/videos/Workflo_W_final_1.mp4" type="video/mp4" />
            </video>
          </div>
        )}
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

      {/* Footer Component */}
      <Footer />
    </div>
  )
}