'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import MobileMenu from '@/components/layout/MobileMenu'

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
      description: "24/7 monitoring, helpdesk support, and strategic IT management",
      icon: "🛡️",
      highlight: "Save 40% on IT costs",
      animation: "/images/services/code-animation.gif"
    },
    {
      title: "Cybersecurity",
      description: "Advanced threat protection and GDPR compliance",
      icon: "🔒",
      highlight: "€50,000 security guarantee",
      animation: "/images/services/security-animation.gif"
    },
    {
      title: "Cloud Services",
      description: "Microsoft 365, cloud migration, and backup solutions",
      icon: "☁️",
      highlight: "Scale instantly, pay-as-you-grow",
      animation: null
    },
    {
      title: "IT Consulting",
      description: "Strategic technology planning and digital transformation",
      icon: "💡",
      highlight: "Future-proof your business",
      animation: null
    },
    {
      title: "Project Management",
      description: "IT project planning and implementation",
      icon: "📊",
      highlight: "On-time, on-budget delivery",
      animation: null
    },
    {
      title: "Network Monitoring",
      description: "Proactive network management and optimization",
      icon: "📡",
      highlight: "99.9% uptime guaranteed",
      animation: null
    },
    {
      title: "Audio Visual",
      description: "Meeting room technology and AV solutions",
      icon: "🎥",
      highlight: "Professional collaboration tools",
      animation: null
    },
    {
      title: "Mobile Device Management",
      description: "Secure mobile device and app management",
      icon: "📱",
      highlight: "Complete device control",
      animation: "/videos/mobile-device-header.mp4"
    }
  ]

  const clientLogos = [
    { name: "Havas Media", src: "/images/logos/havas-media.png" },
    { name: "Podimo", src: "/images/logos/podimo.png" },
    { name: "Greenpeace", src: "/images/logos/greenpeace.png" },
    { name: "JUMP", src: "/images/logos/jump.jpg" },
    { name: "DoctorFeelgood", src: "/images/logos/doctorfeelgood.jpg" },
    { name: "Aescap", src: "/images/logos/aescap.png" },
    { name: "Hunt Amsterdam", src: "/images/logos/hunt-amsterdam.jpeg" },
    { name: "Rademakkers", src: "/images/logos/rademakkers.png" },
    { name: "Tonko", src: "/images/logos/tonko.png" },
    { name: "DMC", src: "/images/logos/dmc.png" },
    { name: "Klaar", src: "/images/logos/klaar.jpg" },
    { name: "Dag en Nacht", src: "/images/logos/dagennacht.png" },
    { name: "Voice Industries", src: "/images/logos/voice-industries.jpeg" },
    { name: "Duwtje", src: "/images/logos/duwtje.svg" },
    { name: "Highwood", src: "/images/logos/highwood.png" },
    { name: "PR Mansion", src: "/images/logos/prmansion.png" },
    { name: "Winix", src: "/images/logos/winix.jpg" },
    { name: "WorkStuff", src: "/images/logos/workstuff.jpg" },
    { name: "Open Boek", src: "/images/logos/open-boek.png" },
    { name: "Bijvoorkeur", src: "/images/logos/bijvoorkeur.jpg" }
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
      image: null
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

      {/* Mobile Menu Component */}
      <MobileMenu />
      
      {/* Premium Header */}
      <header className="fixed top-0 w-full bg-white/95 backdrop-blur-md shadow-lg z-50 border-b-4 border-yellow-400">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-black rounded-lg flex items-center justify-center">
                <span className="text-yellow-400 font-bold text-xl">W</span>
              </div>
              <div>
                <h1 className="text-2xl font-black text-black">WORKFLO</h1>
                <p className="text-xs text-gray-600">Premium IT Solutions</p>
              </div>
            </div>
            
            <nav className="hidden md:flex items-center gap-8">
              <Link href="/diensten" className="text-gray-700 hover:text-black font-medium transition-colors">
                Diensten
              </Link>
              <Link href="/over-ons" className="text-gray-700 hover:text-black font-medium transition-colors">
                Over Ons
              </Link>
              <Link href="/case-studies" className="text-gray-700 hover:text-black font-medium transition-colors">
                Case Studies
              </Link>
              <Link href="/contact" className="text-gray-700 hover:text-black font-medium transition-colors">
                Contact
              </Link>
              <Link 
                href="/tevredenheidscheck" 
                className="bg-yellow-400 text-black px-6 py-3 rounded-full font-bold hover:bg-yellow-500 transition-all hover:scale-105 shadow-lg"
              >
                IT Health Check →
              </Link>
              <a 
                href="tel:020-3080465" 
                className="bg-black text-white px-6 py-3 rounded-full font-bold hover:bg-gray-800 transition-all"
              >
                📞 020-30 80 465
              </a>
            </nav>
          </div>
        </div>
      </header>

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
            <div className="inline-flex items-center gap-2 bg-yellow-400/20 border border-yellow-400 rounded-full px-6 py-2 mb-8">
              <span className="text-yellow-400 font-bold">🏆</span>
              <span className="text-white font-medium">Trusted by 200+ Amsterdam Businesses</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-black text-white mb-6 leading-tight">
              Stop <span className="gradient-text">Losing Money</span> to
              <br />
              IT Problems Today
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Amsterdam SMEs save €19,000+ annually by switching to Workflo's 
              managed IT services. Join them and transform IT from your biggest 
              headache to your competitive advantage.
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
                Get Free IT Assessment →
              </Link>
              <a 
                href="tel:020-3080465" 
                className="bg-white text-black px-10 py-5 rounded-full font-bold text-xl hover:bg-gray-100 transition-all transform hover:scale-105 shadow-2xl"
              >
                📞 Call Now: 020-30 80 465
              </a>
            </div>
            
            <p className="text-gray-400 mt-6">
              ⏱️ Takes 2 minutes • 📊 Instant results • 💰 Save thousands monthly
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
              Trusted by Amsterdam's Leading Companies
            </h2>
            <p className="text-xl text-gray-600">
              From Zuidas corporations to creative agencies in De Pijp
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
              Complete IT Solutions for Modern Business
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Everything you need to eliminate IT headaches and accelerate growth. 
              All services include 24/7 monitoring and GDPR compliance.
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

      {/* Testimonials with Enhanced Design */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 fade-in-up">
            <h2 className="text-4xl font-black text-black mb-4">
              Success Stories from Amsterdam
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real results from real businesses. 98% client retention rate.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                quote: "Workflo transformed our compliance nightmare into a competitive advantage. GDPR compliance went from our biggest worry to something we don't even think about anymore.",
                author: "Marcus van den Berg",
                role: "CFO, Amsterdam Financial Partners",
                result: "Saved €2,500/month on IT costs",
                rating: 5
              },
              {
                quote: "Before Workflo, we spent more time troubleshooting than creating. Now our technology just works, and we can focus on what we do best – delivering amazing work for our clients.",
                author: "Sophie de Vries",
                role: "Creative Director, Studio Vondelpark",
                result: "60% increase in team productivity",
                rating: 5
              },
              {
                quote: "Moving to the cloud with Workflo cut our IT costs by 45% and gave us the flexibility to open our second Amsterdam location without any IT setup headaches.",
                author: "Petra Janssen",
                role: "CEO, Janssen Architecture",
                result: "45% reduction in IT expenses",
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
            Ready to Save €19,000+ Per Year?
          </h2>
          <p className="text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Join 200+ Amsterdam businesses that eliminated IT problems forever.
            Get your free assessment and cost-savings report today.
          </p>
          
          <div className="bg-yellow-400 text-black rounded-2xl p-8 max-w-2xl mx-auto mb-12">
            <h3 className="text-2xl font-bold mb-4">🎁 Limited Time Offer</h3>
            <p className="text-lg mb-6">
              Next 10 businesses get FREE migration (worth €2,500) + 
              3 months of premium support at no extra cost
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

      {/* Professional Footer */}
      <footer className="bg-black text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-5 gap-8 mb-12">
            <div className="md:col-span-2">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-yellow-400 rounded-lg flex items-center justify-center">
                  <span className="text-black font-bold text-xl">W</span>
                </div>
                <div>
                  <h3 className="text-2xl font-black">WORKFLO</h3>
                  <p className="text-xs text-gray-400">Premium IT Solutions</p>
                </div>
              </div>
              <p className="text-gray-400 mb-4">
                Koivistokade 3<br />
                1013AC Amsterdam<br />
                Netherlands
              </p>
              <div className="space-y-2">
                <a href="tel:020-3080465" className="flex items-center gap-2 text-yellow-400 hover:text-yellow-500">
                  <span>📞</span> 020-30 80 465
                </a>
                <a href="mailto:info@workflo.it" className="flex items-center gap-2 text-yellow-400 hover:text-yellow-500">
                  <span>✉️</span> info@workflo.it
                </a>
              </div>
            </div>
            
            <div>
              <h4 className="font-bold mb-4 text-yellow-400">Services</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/diensten/managed-it" className="hover:text-white">Managed IT</Link></li>
                <li><Link href="/diensten/cybersecurity" className="hover:text-white">Cybersecurity</Link></li>
                <li><Link href="/diensten/cloud" className="hover:text-white">Cloud Services</Link></li>
                <li><Link href="/diensten/consulting" className="hover:text-white">IT Consulting</Link></li>
                <li><Link href="/diensten" className="hover:text-yellow-400 font-bold">All Services →</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold mb-4 text-yellow-400">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/about" className="hover:text-white">About Us</Link></li>
                <li><Link href="/case-studies" className="hover:text-white">Case Studies</Link></li>
                <li><Link href="/careers" className="hover:text-white">Careers</Link></li>
                <li><Link href="/contact" className="hover:text-white">Contact</Link></li>
                <li><a href="https://servicedesk.workflo.it/portal" className="hover:text-white">Support Portal</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold mb-4 text-yellow-400">Connect</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="https://www.linkedin.com/company/workflo" className="hover:text-white">LinkedIn</a></li>
                <li><a href="https://x.com/workflo_it" className="hover:text-white">X (Twitter)</a></li>
                <li><a href="https://get.teamviewer.com/workflo-support" className="hover:text-white">Remote Support</a></li>
              </ul>
              
              <div className="mt-6">
                <Link 
                  href="/tevredenheidscheck"
                  className="inline-block bg-yellow-400 text-black px-6 py-3 rounded-full font-bold hover:bg-yellow-500 transition-all"
                >
                  Free IT Check →
                </Link>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-400 text-sm mb-4 md:mb-0">
                © 2025 Workflo B.V. All rights reserved. KVK: 12345678
              </p>
              <div className="flex gap-6">
                <Link href="/privacy" className="text-gray-400 hover:text-white text-sm">Privacy Policy</Link>
                <Link href="/terms" className="text-gray-400 hover:text-white text-sm">Terms & Conditions</Link>
                <Link href="/cookies" className="text-gray-400 hover:text-white text-sm">Cookie Policy</Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}