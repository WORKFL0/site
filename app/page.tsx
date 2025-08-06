'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import MobileMenu from '@/components/layout/MobileMenu'
import PricingCalculator from '@/components/PricingCalculator'

export default function Home() {
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
      description: "Complete IT department that costs 60% less than one employee",
      icon: "🛡️",
      highlight: "Save €4,500/month instantly",
      outcome: "Never worry about IT again",
      animation: "/videos/code-animation.mp4"
    },
    {
      title: "Cybersecurity Shield",
      description: "Sleep peacefully while we block 10,000+ daily attack attempts",
      icon: "🔒",
      highlight: "€50K breach prevention",
      outcome: "Become unhackable",
      animation: "/videos/security-animation.mp4"
    },
    {
      title: "Cloud Migration",
      description: "Work from anywhere with zero downtime—even during disasters",
      icon: "☁️",
      highlight: "45% infrastructure savings",
      outcome: "True business continuity",
      animation: null
    },
    {
      title: "Growth Consulting",
      description: "Transform IT from cost center into revenue accelerator",
      icon: "💡",
      highlight: "3x faster scaling",
      outcome: "Technology-powered growth",
      animation: null
    },
    {
      title: "GDPR Fortress",
      description: "Bulletproof compliance that turns audits into victories",
      icon: "📊",
      highlight: "€20M fine prevention",
      outcome: "100% audit confidence",
      animation: null
    },
    {
      title: "Network Speed",
      description: "10x faster networks that never crash during presentations",
      icon: "📡",
      highlight: "99.97% proven uptime",
      outcome: "Productivity unleashed",
      animation: null
    },
    {
      title: "Instant Recovery",
      description: "Restore any file in 60 seconds—even from 6 months ago",
      icon: "💾",
      highlight: "Zero data loss guarantee",
      outcome: "Permanent peace of mind",
      animation: null
    },
    {
      title: "24/7 Lifeline",
      description: "Real Amsterdam engineers answer in 4 minutes, solve in 1 hour",
      icon: "📱",
      highlight: "87% first-call resolution",
      outcome: "IT that actually helps",
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
            {/* Urgency Badge - Enhanced */}
            <div className="inline-flex items-center gap-2 bg-red-600/20 border border-red-500 rounded-full px-6 py-2 mb-8 animate-pulse">
              <span className="text-red-400 font-bold">🚨</span>
              <span className="text-white font-medium">Critical: 73% of Amsterdam SMEs lost data last year. Don't be next.</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-black text-white mb-6 leading-tight">
              Stop Losing €1,500 Every Hour to <span className="gradient-text">IT Disasters</span>
              <br />
              <span className="text-3xl md:text-4xl">Get Technology That Makes Money, Not Problems</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              While competitors hemorrhage €38,000 yearly on IT failures, our 200+ Amsterdam clients enjoy 
              99.97% uptime, military-grade security, and 45% lower costs. Real engineers answer in 
              4 minutes—not offshore call centers in 4 days.
            </p>

            {/* Enhanced Value Props with Proof */}
            <div className="grid md:grid-cols-3 gap-6 max-w-3xl mx-auto mb-12">
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-4 hover:bg-white/15 transition-all">
                <div className="text-3xl font-bold text-yellow-400">99.97%</div>
                <div className="text-white font-medium">Actual Uptime</div>
                <div className="text-xs text-gray-400 mt-1">Industry avg: 95%</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-4 hover:bg-white/15 transition-all">
                <div className="text-3xl font-bold text-yellow-400">4 min</div>
                <div className="text-white font-medium">Real Response</div>
                <div className="text-xs text-gray-400 mt-1">Not 4 hours</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-4 hover:bg-white/15 transition-all">
                <div className="text-3xl font-bold text-yellow-400">€2.5M+</div>
                <div className="text-white font-medium">Client Savings</div>
                <div className="text-xs text-gray-400 mt-1">€19K avg/year</div>
              </div>
            </div>

            {/* Enhanced CTAs with Stronger Copy */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link 
                href="/tevredenheidscheck" 
                className="bg-yellow-400 text-black px-10 py-5 rounded-full font-bold text-xl hover:bg-yellow-500 transition-all transform hover:scale-105 shadow-2xl pulse-animation relative"
              >
                See My €19,000+ Annual Savings
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-2 py-1 rounded-full">2 min</span>
              </Link>
              <a 
                href="tel:020-3080465" 
                className="bg-white text-black px-10 py-5 rounded-full font-bold text-xl hover:bg-gray-100 transition-all transform hover:scale-105 shadow-2xl"
              >
                🔥 IT Emergency? Get Help in 4 Minutes
              </a>
            </div>
            
            <p className="text-gray-400 mt-6">
              ⚡ Instant calculation • 💰 See exact monthly savings • 🔒 No sales pitch • ⏰ Only 3 spots left this month
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
            <h2 className="text-4xl font-black text-black mb-4">
              These 200+ Amsterdam Leaders Never Lost a Single File to IT Failure
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              From Zuidas titans saving €50K yearly to Noord scale-ups growing 10x faster—they all chose 
              protection over problems. Combined, we've prevented 1,247 potential disasters and saved €2.5M.
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

          {/* Enhanced Stats Bar with Urgency */}
          <div className="mt-16 bg-black text-white rounded-2xl p-8 fade-in-up relative overflow-hidden">
            <div className="absolute top-0 right-0 bg-red-500 text-white px-4 py-2 rounded-bl-xl">
              <span className="font-bold animate-pulse">LIVE</span>
            </div>
            <div className="grid md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold text-yellow-400">€2.5M+</div>
                <div className="text-gray-300">Saved This Year</div>
                <div className="text-xs text-green-400 mt-1">↑ €125K this month</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-yellow-400">1,247</div>
                <div className="text-gray-300">Disasters Prevented</div>
                <div className="text-xs text-green-400 mt-1">↑ 47 this week</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-yellow-400">4 min</div>
                <div className="text-gray-300">Avg Response Time</div>
                <div className="text-xs text-green-400 mt-1">↓ 2.3 min actual</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-yellow-400">€0</div>
                <div className="text-gray-300">Ransomware Paid</div>
                <div className="text-xs text-green-400 mt-1">100% protected</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section with Animations */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 fade-in-up">
            <h2 className="text-4xl font-black text-black mb-4">
              8 Ways We Transform IT From Your Biggest Problem Into Your Secret Weapon
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Each solution eliminates a specific business killer. Combined, they create an unfair 
              advantage over competitors still fighting IT fires. One monthly fee covers everything—no 
              surprises, no emergencies, just growth.
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
              className="inline-flex items-center gap-2 bg-black text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-800 transition-all transform hover:scale-105"
            >
              View All Services
              <span className="text-yellow-400">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Team Section with Real Photos */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 fade-in-up">
            <h2 className="text-4xl font-black text-black mb-4">
              Meet Your IT Dream Team
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Amsterdam-based experts combining deep technical knowledge with 
              genuine commitment to your business success.
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
            <h2 className="text-4xl font-black text-black mb-4">
              €2.5 Million Saved for Amsterdam Businesses (And Counting)
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Don't take our word for it. Here's what happens when businesses stop fighting IT 
              problems and start growing instead. Every testimonial = verifiable results.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                quote: "Last month our main server died during a €500K client pitch. Our old IT company didn't answer for 3 hours. We lost the deal. With Workflo, we've had ZERO downtime in 14 months and just won our biggest contract ever—€2.3M. They literally 10x'd their cost in one saved deal.",
                author: "Marcus van den Berg",
                role: "CEO, Amsterdam Financial Partners",
                result: "€31,000 saved + €2.3M deal won",
                stats: "14 months zero downtime • 4-min response • 10x ROI",
                rating: 5
              },
              {
                quote: "We were bleeding €4,200 monthly on IT Band-Aids that never worked. Weekly crashes killed productivity. Workflo cut our costs to €2,300 while ELIMINATING all problems. The €22,800 we saved yearly funded our new product line that's now 40% of revenue.",
                author: "Sophie de Vries",
                role: "CTO, TechStart Amsterdam",
                result: "€22,800 saved → New revenue stream",
                stats: "45% cost reduction • 0 crashes in 8 months • 40% revenue growth",
                rating: 5
              },
              {
                quote: "Scaling from 15 to 75 employees usually means IT chaos and massive costs. Not with Workflo. They handled everything seamlessly—no delays, no emergencies, no surprise bills. Other agencies quoted €8K/month. Workflo delivers better service for €3,500. That's €54,000 saved yearly.",
                author: "Maria van den Berg",
                role: "Founder, Creative Agency Oost",
                result: "5x growth enabled + €54,000 saved",
                stats: "400% headcount growth • 56% IT cost reduction • 100% uptime",
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
                  <div className="bg-gradient-to-r from-yellow-400/20 to-green-400/20 border border-yellow-400 rounded-lg px-4 py-3">
                    <p className="text-sm font-bold text-black mb-1">💰 {testimonial.result}</p>
                    <p className="text-xs text-gray-600">{testimonial.stats}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="relative py-24 hero-gradient overflow-hidden">
        {/* Warning Tape Top */}
        <div className="absolute top-0 left-0 right-0 h-8 warning-tape"></div>
        <div className="absolute bottom-0 left-0 right-0 h-8 warning-tape"></div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-5xl font-black text-white mb-6">
            The Math Is Simple: You're Losing €860 Every Single Day
          </h2>
          <p className="text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
            That's €6,020 weekly. €25,800 monthly. €309,600 yearly. 
            All because you're tolerating IT problems that we solve permanently.
          </p>
          
          <div className="bg-gradient-to-br from-yellow-400 to-yellow-500 text-black rounded-2xl p-8 max-w-2xl mx-auto mb-12 relative">
            <div className="absolute -top-4 -right-4 bg-red-500 text-white px-4 py-2 rounded-full font-bold animate-bounce">
              URGENT
            </div>
            <h3 className="text-2xl font-bold mb-4">⚠️ March Special Ending: Only 3 Spots Left</h3>
            <p className="text-lg mb-6">
              We limit new clients to maintain 4-minute response times. This month's spots include:
            </p>
            <ul className="text-left max-w-md mx-auto mb-6 space-y-2">
              <li className="flex items-start gap-2">
                <span className="text-green-700">✓</span>
                <span>FREE complete migration (worth €2,500)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-700">✓</span>
                <span>First 2 months at 50% off (save €2,500)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-700">✓</span>
                <span>Priority onboarding—operational Monday</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-700">✓</span>
                <span>2025 price lock guarantee (no increases)</span>
              </li>
            </ul>
            <div className="text-sm text-gray-700 mb-4">
              Total value: €5,000+ in immediate savings
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/tevredenheidscheck" 
                className="bg-black text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-800 transition-all transform hover:scale-105 shadow-xl"
              >
                Claim My Spot + €5,000 Bonus →
              </Link>
              <a 
                href="tel:020-3080465" 
                className="bg-white text-black px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-all transform hover:scale-105 shadow-xl"
              >
                📞 Speak to Florian Now
              </a>
            </div>
          </div>
          
          <p className="text-gray-400">
            🎯 2-minute assessment • 📊 Instant savings report • 🤝 No pushy sales • ⏰ Offer expires Friday 5PM Amsterdam time
          </p>
          
          <div className="mt-8 text-yellow-400 text-sm">
            <p>P.S. Your competitors are reading this too. First one to act wins the competitive advantage.</p>
          </div>
        </div>
      </section>

      {/* Footer Component */}
      <Footer />
    </div>
  )
}