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
      description: "Your complete IT department for less than one IT salary",
      icon: "🛡️",
      highlight: "Save €2,000+ monthly",
      animation: "/videos/code-animation.mp4"
    },
    {
      title: "Cybersecurity",
      description: "Sleep soundly with military-grade protection against hackers",
      icon: "🔒",
      highlight: "Block 99.9% of threats",
      animation: "/videos/security-animation.mp4"
    },
    {
      title: "Cloud Services",
      description: "Work from anywhere with zero downtime or data loss",
      icon: "☁️",
      highlight: "45% lower costs vs on-premise",
      animation: null
    },
    {
      title: "IT Consulting",
      description: "Transform technology from cost center to profit driver",
      icon: "💡",
      highlight: "ROI within 6 months",
      animation: null
    },
    {
      title: "GDPR Compliance",
      description: "Avoid €20M fines with bulletproof data protection",
      icon: "📊",
      highlight: "100% compliance guaranteed",
      animation: null
    },
    {
      title: "Network Infrastructure",
      description: "Lightning-fast, rock-solid networks that never fail",
      icon: "📡",
      highlight: "99.9% uptime SLA",
      animation: null
    },
    {
      title: "Backup & Recovery",
      description: "Never lose a file again with automated hourly backups",
      icon: "💾",
      highlight: "60-second recovery time",
      animation: null
    },
    {
      title: "24/7 Support",
      description: "Real humans answer in 4 minutes, not 4 hours",
      icon: "📱",
      highlight: "4-minute response time",
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
            {/* Trust Badge */}
            <div className="inline-flex items-center gap-2 bg-yellow-400/20 border border-yellow-400 rounded-full px-6 py-2 mb-8 animate-pulse">
              <span className="text-yellow-400 font-bold">⚠️</span>
              <span className="text-white font-medium">Warning: Every hour of downtime costs you €1,500</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-black text-white mb-6 leading-tight">
              Your IT Problems <span className="gradient-text">End Today</span>.
              <br />
              <span className="text-3xl md:text-4xl">Finally Get Technology That Works FOR You</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              While your competitors lose €1,500 hourly to downtime, you'll enjoy 99.9% uptime, 
              bulletproof security, and 40% lower IT costs. All backed by Amsterdam experts who 
              answer in minutes, not days.
            </p>

            {/* Value Props */}
            <div className="grid md:grid-cols-3 gap-6 max-w-3xl mx-auto mb-12">
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-4">
                <div className="text-3xl font-bold text-yellow-400">99.9%</div>
                <div className="text-white font-medium">Uptime SLA</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-4">
                <div className="text-3xl font-bold text-yellow-400">4 hrs</div>
                <div className="text-white font-medium">Response Time</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-4">
                <div className="text-3xl font-bold text-yellow-400">40%</div>
                <div className="text-white font-medium">Cost Savings</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link 
                href="/tevredenheidscheck" 
                className="bg-yellow-400 text-black px-10 py-5 rounded-full font-bold text-xl hover:bg-yellow-500 transition-all transform hover:scale-105 shadow-2xl pulse-animation"
              >
                Calculate My IT Savings Now →
              </Link>
              <a 
                href="tel:020-3080465" 
                className="bg-white text-black px-10 py-5 rounded-full font-bold text-xl hover:bg-gray-100 transition-all transform hover:scale-105 shadow-2xl"
              >
                🚨 Emergency IT Help: 020-30 80 465
              </a>
            </div>
            
            <p className="text-gray-400 mt-6">
              ✓ See exact savings in 2 minutes • ✓ No commitment required • ✓ €19,000 average annual savings
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
              200+ Amsterdam Businesses Never Worry About IT Again
            </h2>
            <p className="text-xl text-gray-600">
              From Zuidas corporations saving €50K yearly to Noord startups scaling 10x faster
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

          {/* Stats Bar */}
          <div className="mt-16 bg-black text-white rounded-2xl p-8 fade-in-up">
            <div className="grid md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold text-yellow-400">200+</div>
                <div className="text-gray-300">Active Clients</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-yellow-400">€2.5M+</div>
                <div className="text-gray-300">Saved for Clients</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-yellow-400">10 Years</div>
                <div className="text-gray-300">Industry Experience</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-yellow-400">24/7</div>
                <div className="text-gray-300">Support Available</div>
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
              Turn IT From Your Biggest Problem Into Your Secret Weapon
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              One monthly fee covers everything. No surprises, no emergencies, no headaches. 
              Just IT that works 99.9% of the time, guaranteed.
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
                  <div className="bg-yellow-400 text-black text-xs font-bold px-3 py-1 rounded-full inline-block">
                    {service.highlight}
                  </div>
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
              problems and start growing instead.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                quote: "Our previous IT company left us stranded during a critical client presentation. Workflo responded in 20 minutes, saved the meeting, and we signed a €500K contract. They literally paid for themselves 100x over.",
                author: "Marcus van den Berg",
                role: "CEO, Amsterdam Financial Partners",
                result: "€31,000 annual savings + €500K deal saved",
                rating: 5
              },
              {
                quote: "We were hemorrhaging money on IT - €4,000+ monthly with weekly crashes. Workflo cut our costs by 45% AND eliminated all problems. In 12 months, we saved enough to hire two new developers.",
                author: "Sophie de Vries",
                role: "CTO, TechStart Amsterdam",
                result: "Zero downtime in 8 months + €26,000 saved",
                rating: 5
              },
              {
                quote: "Workflo handled our 15-to-75 employee growth seamlessly. No delays, no problems, no massive IT investments. They're not a vendor - they're our technology growth partner.",
                author: "Maria van den Berg",
                role: "Founder, Creative Agency Oost",
                result: "5x growth supported + 30% IT cost reduction",
                rating: 5
              }
            ].map((testimonial, index) => (
              <div 
                key={index}
                className="bg-gray-50 rounded-xl p-8 hover-lift fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-2xl">★</span>
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic text-lg">
                  "{testimonial.quote}"
                </p>
                <div className="border-t pt-6">
                  <p className="font-bold text-black text-lg">{testimonial.author}</p>
                  <p className="text-gray-600 mb-3">{testimonial.role}</p>
                  <div className="bg-yellow-400/20 border border-yellow-400 rounded-full px-4 py-2 inline-block">
                    <p className="text-sm font-bold text-black">✓ {testimonial.result}</p>
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
            Every Day You Wait Costs You €860
          </h2>
          <p className="text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
            That's €285 in lost productivity, €450 in security risks, and €125 in overpaid services.
            Stop the bleeding now with your free IT cost analysis.
          </p>
          
          <div className="bg-yellow-400 text-black rounded-2xl p-8 max-w-2xl mx-auto mb-12">
            <h3 className="text-2xl font-bold mb-4">⚠️ Only 3 Spots Left This Month</h3>
            <p className="text-lg mb-6">
              We only accept 5 new clients monthly to maintain our 4-minute response times.
              March spots include FREE migration (worth €2,500) + first month 50% off.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/tevredenheidscheck" 
                className="bg-black text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-800 transition-all transform hover:scale-105"
              >
                Claim Your Free Assessment →
              </Link>
              <a 
                href="tel:020-3080465" 
                className="bg-white text-black px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-all transform hover:scale-105"
              >
                📞 020-30 80 465
              </a>
            </div>
          </div>
          
          <p className="text-gray-400">
            ✓ 2-minute assessment • ✓ No obligations • ✓ Instant savings report
          </p>
        </div>
      </section>

      {/* Footer Component */}
      <Footer />
    </div>
  )
}