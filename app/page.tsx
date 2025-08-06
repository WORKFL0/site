'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import MobileMenu from '@/components/layout/MobileMenu'
import PricingCalculator from '@/components/PricingCalculator'
import { useLanguage } from '@/context/LanguageContext'

export default function Home() {
  const { t } = useLanguage()
  const [isVideoLoaded, setIsVideoLoaded] = useState(false)
  const [activeService, setActiveService] = useState(0)

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
      title: "Managed IT Services",
      description: "Complete IT support that costs less than hiring one full-time employee",
      icon: "🛡️",
      highlight: "60% cost reduction",
      outcome: "Focus on business growth",
      animation: "/videos/code-animation.mp4"
    },
    {
      title: "Cybersecurity",
      description: "Professional security monitoring and threat protection for your business",
      icon: "🔒",
      highlight: "24/7 monitoring",
      outcome: "Data stays secure",
      animation: "/videos/security-animation.mp4"
    },
    {
      title: "Cloud Services",
      description: "Modern cloud infrastructure that supports remote work and business flexibility",
      icon: "☁️",
      highlight: "45% infrastructure savings",
      outcome: "Work from anywhere",
      animation: null
    },
    {
      title: "IT Consulting",
      description: "Strategic technology guidance to support business objectives and growth",
      icon: "💡",
      highlight: "Business-aligned IT",
      outcome: "Technology that works",
      animation: null
    },
    {
      title: "GDPR Compliance",
      description: "Complete privacy compliance support for Amsterdam businesses",
      icon: "📊",
      highlight: "Full compliance",
      outcome: "Peace of mind",
      animation: null
    },
    {
      title: "Network Infrastructure",
      description: "Reliable networking solutions that keep your business connected",
      icon: "📡",
      highlight: "99.97% uptime",
      outcome: "Consistent connectivity",
      animation: null
    },
    {
      title: "Data Backup & Recovery",
      description: "Comprehensive backup solutions with quick data recovery when needed",
      icon: "💾",
      highlight: "Daily backups",
      outcome: "Data protection",
      animation: null
    },
    {
      title: "24/7 Support",
      description: "Local Amsterdam team available when you need technical assistance",
      icon: "📱",
      highlight: "4-minute response",
      outcome: "Help when you need it",
      animation: "/videos/mobile-device-header.mp4"
    }
  ]

  const clientLogos = [
    { name: "Havas Media", src: "/images/logos/Havas_Media.png" },
    { name: "Podimo", src: "/images/logos/Podimo_Logo.png" },
    { name: "Greenpeace", src: "/images/logos/Greenpeace_logo.png" },
    { name: "JUMP", src: "/images/logos/JUMP_Logo.jpg" },
    { name: "DoctorFeelgood", src: "/images/logos/doctorfeelgood_Logo.jpg" },
    { name: "Aescap", src: "/images/logos/Aescap2_Logo.png" },
    { name: "Hunt Amsterdam", src: "/images/logos/huntamsterdam_logo.jpeg" },
    { name: "Rademakkers", src: "/images/logos/Rademakkers_Logo.png" },
    { name: "Tonko", src: "/images/logos/tonko_Logo.png" },
    { name: "DMC", src: "/images/logos/DMC_Logo.png" },
    { name: "Klaar", src: "/images/logos/Klaar_Logo.jpg" },
    { name: "Dag en Nacht", src: "/images/logos/Dagennacht_Logo.png" },
    { name: "Voice Industries", src: "/images/logos/voice.industries_Logo.jpeg" },
    { name: "Duwtje", src: "/images/logos/Duwtje.svg" },
    { name: "Highwood", src: "/images/logos/HighWood.png" },
    { name: "PR Mansion", src: "/images/logos/prmansion.png" },
    { name: "Winix", src: "/images/logos/Winix_Logo.jpg" },
    { name: "WorkStuff", src: "/images/logos/workstuff_Logo.jpg" },
    { name: "Open Boek", src: "/images/logos/open-boek_Logo.png" },
    { name: "Bijvoorkeur", src: "/images/logos/Bijvoorkeur_Logo.jpg" }
  ]

  const teamMembers = [
    {
      name: "Florian",
      role: "Founder & CEO",
      expertise: "Strategic IT Leadership",
      image: "/images/team/florian.jpg"
    },
    {
      name: "Nam-Hoon",
      role: "Technical Director",
      expertise: "Infrastructure & Security",
      image: "/images/team/nam.jpg"
    },
    {
      name: "Samir",
      role: "Operations Manager",
      expertise: "Service Delivery Excellence",
      image: "/images/team/samir.jpg"
    },
    {
      name: "Marcello",
      role: "Solutions Architect",
      expertise: "Cloud & Innovation",
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
        {/* Animated Background Pattern */}
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
        
        {/* Video Background */}
        <div className="absolute inset-0 overflow-hidden">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 w-full h-full object-cover opacity-20"
            onLoadedData={() => setIsVideoLoaded(true)}
          >
            <source src="/videos/hero-video.mp4" type="video/mp4" />
          </video>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 container mx-auto px-4 text-center">
          <div className="max-w-5xl mx-auto">
            {/* Professional Badge */}
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-6 py-2 mb-8">
              <span className="text-yellow-400 font-bold">✓</span>
              <span className="text-white font-medium">Serving 200+ Amsterdam businesses since 2015</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
              {t('hero.title')}
              <br />
              <span className="text-3xl md:text-4xl text-yellow-400">{t('hero.subtitle')}</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              {t('hero.description')}
            </p>

            {/* Value Props with Facts */}
            <div className="grid md:grid-cols-3 gap-6 max-w-3xl mx-auto mb-12">
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-4">
                <div className="text-3xl font-bold text-yellow-400">99.97%</div>
                <div className="text-white font-medium">{t('hero.benefit.uptime')}</div>
                <div className="text-xs text-gray-400 mt-1">Measured over 12 months</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-4">
                <div className="text-3xl font-bold text-yellow-400">4 min</div>
                <div className="text-white font-medium">{t('hero.benefit.response')}</div>
                <div className="text-xs text-gray-400 mt-1">Average phone response</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-4">
                <div className="text-3xl font-bold text-yellow-400">€2.5M+</div>
                <div className="text-white font-medium">{t('hero.benefit.savings')}</div>
                <div className="text-xs text-gray-400 mt-1">Total client savings 2024</div>
              </div>
            </div>

            {/* Professional CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link 
                href="/tevredenheidscheck" 
                className="bg-yellow-400 text-black px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-500 transition-all shadow-lg"
              >
                {t('hero.cta.primary')}
                <span className="ml-2 text-sm">({t('hero.cta.time')})</span>
              </Link>
              <a 
                href="tel:020-3080465" 
                className="bg-white text-black px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-all shadow-lg"
              >
                {t('hero.cta.secondary')}
              </a>
            </div>
            
            <p className="text-gray-400 mt-6 text-sm">
              Free consultation • No obligations • Local Amsterdam team
            </p>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-8 h-12 border-2 border-white/50 rounded-full flex items-start justify-center p-2">
            <div className="w-1 h-3 bg-white rounded-full animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Client Logos Section */}
      <section className="py-20 bg-gray-50 border-y-8 border-yellow-400">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 fade-in-up">
            <h2 className="text-4xl font-bold text-black mb-4">
              {t('stats.title')}
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              {t('stats.description')}
            </p>
          </div>

          {/* Logo Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 items-center">
            {clientLogos.map((logo, index) => (
              <div 
                key={index}
                className="bg-white rounded-lg p-6 flex items-center justify-center hover-lift h-32 fade-in-up"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <Image
                  src={logo.src}
                  alt={`${logo.name} logo`}
                  width={150}
                  height={80}
                  className="object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none'
                  }}
                />
              </div>
            ))}
          </div>

          {/* Professional Stats Bar */}
          <div className="mt-16 bg-black text-white rounded-2xl p-8 fade-in-up">
            <div className="grid md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold text-yellow-400">€2.5M+</div>
                <div className="text-gray-300">{t('stats.saved')}</div>
                <div className="text-xs text-gray-400 mt-1">2024 results</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-yellow-400">1,200+</div>
                <div className="text-gray-300">{t('stats.prevented')}</div>
                <div className="text-xs text-gray-400 mt-1">Since 2015</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-yellow-400">4 min</div>
                <div className="text-gray-300">{t('stats.response')}</div>
                <div className="text-xs text-gray-400 mt-1">Average in 2024</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-yellow-400">€0</div>
                <div className="text-gray-300">{t('stats.ransomware')}</div>
                <div className="text-xs text-gray-400 mt-1">{t('stats.protected')}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section with Animations */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 fade-in-up">
            <h2 className="text-4xl font-bold text-black mb-4">
              {t('services.title')}
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              {t('services.description')}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="group relative bg-gray-50 rounded-xl overflow-hidden hover-lift fade-in-up cursor-pointer"
                style={{ animationDelay: `${index * 0.1}s` }}
                onMouseEnter={() => setActiveService(index)}
              >
                {/* Service Card */}
                <div className="p-6">
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <h3 className="text-xl font-bold text-black mb-2">{service.title}</h3>
                  <p className="text-gray-600 text-sm mb-4">{service.description}</p>
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
                        Learn More →
                      </Link>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link 
              href="/diensten" 
              className="inline-flex items-center gap-2 bg-black text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-800 transition-all"
            >
              {t('services.view_all')}
              <span className="text-yellow-400">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Team Section with Real Photos */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 fade-in-up">
            <h2 className="text-4xl font-bold text-black mb-4">
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
                className="bg-white rounded-xl overflow-hidden hover-lift fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
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
                  <h3 className="text-xl font-bold text-black mb-1">{member.name}</h3>
                  <p className="text-gray-600 mb-2">{member.role}</p>
                  <p className="text-sm text-yellow-600 font-medium">{member.expertise}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Calculator Section */}
      <section className="py-20 bg-gray-50">
        <PricingCalculator />
      </section>

      {/* Testimonials with Enhanced Design */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 fade-in-up">
            <h2 className="text-4xl font-bold text-black mb-4">
              {t('testimonials.title')}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t('testimonials.description')}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                quote: "We needed reliable IT support as we grew from 15 to 50 employees. Workflo provided excellent service throughout our expansion, handling all technical challenges professionally. Their proactive approach helped us avoid downtime during critical client presentations.",
                author: "Marcus van den Berg",
                role: "CEO, Amsterdam Financial Partners",
                result: "Smooth business growth",
                stats: "0 downtime during expansion • Professional support",
                rating: 5
              },
              {
                quote: "Moving to Workflo reduced our IT costs by nearly 40% while significantly improving our system reliability. They provide clear communication and solve issues quickly. Our team can focus on development instead of technical problems.",
                author: "Sophie de Vries",
                role: "CTO, TechStart Amsterdam",
                result: "40% cost reduction + improved reliability",
                stats: "Faster issue resolution • Better system stability",
                rating: 5
              },
              {
                quote: "Workflo helped us scale from 15 to 75 employees without the usual IT complications. Their managed services approach means we have enterprise-level support at a fraction of the cost of an internal IT department.",
                author: "Maria van den Berg",
                role: "Founder, Creative Agency Oost",
                result: "Enterprise IT at SME cost",
                stats: "5x team growth • Managed IT services • Cost-effective",
                rating: 5
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
                  <p className="font-bold text-black text-lg">{testimonial.author}</p>
                  <p className="text-gray-600 mb-3">{testimonial.role}</p>
                  <div className="bg-gray-50 border border-gray-200 rounded-lg px-4 py-3">
                    <p className="text-sm font-bold text-black mb-1">{testimonial.result}</p>
                    <p className="text-xs text-gray-600">{testimonial.stats}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Professional CTA Section */}
      <section className="relative py-24 hero-gradient">
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Optimize Your IT Infrastructure?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Join 200+ Amsterdam businesses that have improved their operations and reduced IT costs with our professional services.
          </p>
          
          <div className="bg-white/10 backdrop-blur-sm text-white rounded-2xl p-8 max-w-2xl mx-auto mb-12 border border-white/20">
            <h3 className="text-2xl font-bold mb-4">Free IT Assessment</h3>
            <p className="text-lg mb-6">
              Get a comprehensive review of your current IT infrastructure and discover optimization opportunities:
            </p>
            <ul className="text-left max-w-md mx-auto mb-6 space-y-2">
              <li className="flex items-start gap-2">
                <span className="text-yellow-400">✓</span>
                <span>Security assessment and recommendations</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-yellow-400">✓</span>
                <span>Cost optimization analysis</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-yellow-400">✓</span>
                <span>Backup and recovery evaluation</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-yellow-400">✓</span>
                <span>Network performance review</span>
              </li>
            </ul>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/tevredenheidscheck" 
                className="bg-yellow-400 text-black px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-500 transition-all shadow-lg"
              >
                Start Free Assessment
              </Link>
              <a 
                href="tel:020-3080465" 
                className="bg-white text-black px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-all shadow-lg"
              >
                Call Us Today
              </a>
            </div>
          </div>
          
          <p className="text-gray-400 text-sm">
            No obligations • Professional consultation • Local Amsterdam team
          </p>
        </div>
      </section>

      {/* Footer Component */}
      <Footer />
    </div>
  )
}