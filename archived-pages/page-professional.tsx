'use client'

import Image from 'next/image'
import Link from 'next/link'

/**
 * PROFESSIONAL SAFE HOMEPAGE - Beautiful AND reliable!
 * - No external dependencies that can break
 * - Pure CSS animations (no JS required)
 * - Modern gradients and typography
 * - Professional design patterns
 */
export default function HomeProfessional() {
  // Professional content with better copy
  const content = {
    hero: {
      badge: '🏆 Trusted by 200+ Amsterdam Businesses',
      title: 'De IT-Partner die',
      titleHighlight: 'Écht Levert',
      subtitle: 'Voor MKB in Amsterdam',
      description: 'Stop met IT-frustraties. Wij maken uw technologie betrouwbaar, veilig en betaalbaar. Vaste maandprijs, geen verrassingen.',
      ctaPrimary: 'Start Gratis IT-Check',
      ctaSecondary: 'Bekijk Diensten',
      stats: [
        { value: '200+', label: 'Tevreden Klanten' },
        { value: '99.9%', label: 'Uptime Garantie' },
        { value: '<15min', label: 'Response Tijd' },
        { value: '24/7', label: 'Support' }
      ]
    },
    services: [
      { 
        title: 'Managed IT Services',
        description: 'Complete IT-beheer met 24/7 monitoring en support',
        icon: '⚡',
        color: 'from-blue-400 to-blue-600',
        features: ['24/7 Monitoring', 'Helpdesk Support', 'Updates & Patches']
      },
      {
        title: 'Cloud Oplossingen', 
        description: 'Microsoft 365, backup en cloud migratie',
        icon: '☁️',
        color: 'from-purple-400 to-purple-600',
        features: ['Microsoft 365', 'Cloud Backup', 'Azure Setup']
      },
      {
        title: 'Cybersecurity',
        description: 'Bescherm uw bedrijf tegen digitale dreigingen',
        icon: '🛡️',
        color: 'from-green-400 to-green-600',
        features: ['Threat Protection', 'GDPR Compliance', 'Security Training']
      },
      {
        title: 'IT Consultancy',
        description: 'Strategisch IT-advies voor groei',
        icon: '💡',
        color: 'from-yellow-400 to-orange-500',
        features: ['IT Strategy', 'Cost Optimization', 'Digital Transformation']
      }
    ],
    testimonials: [
      { name: 'John Doornik', company: 'Casting Director', text: 'Eindelijk kunnen we ons focussen op ons werk.' },
      { name: 'Michael van der Mark', company: 'DoctorFeelgood', text: 'Professioneel, betrouwbaar en altijd bereikbaar.' },
      { name: 'Lisa Chen', company: 'BLC FinanceView', text: 'De beste IT-partner die we ooit hebben gehad.' }
    ],
    contact: {
      phone: '020-30 80 465',
      email: 'info@workflo.it',
      address: 'Koivistokade 3, 1013 AC Amsterdam'
    }
  }

  return (
    <>
      <style jsx global>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes slideIn {
          from { opacity: 0; transform: translateX(-20px); }
          to { opacity: 1; transform: translateX(0); }
        }
        
        @keyframes pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.05); }
        }
        
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        
        .animate-fadeIn {
          animation: fadeIn 0.8s ease-out forwards;
        }
        
        .animate-slideIn {
          animation: slideIn 0.6s ease-out forwards;
        }
        
        .animate-pulse-slow {
          animation: pulse 3s ease-in-out infinite;
        }
        
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 6s ease infinite;
        }
        
        .hover-lift {
          transition: all 0.3s ease;
        }
        
        .hover-lift:hover {
          transform: translateY(-4px);
          box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
        }
        
        .text-gradient {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        
        .glass-effect {
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
        }
      `}</style>

      <div className="min-h-screen bg-gradient-to-b from-gray-50 via-white to-gray-50">
        {/* Premium Header with Glass Effect */}
        <header className="glass-effect border-b border-gray-200/50 sticky top-0 z-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-20">
              <div className="flex items-center">
                <Link href="/" className="group flex items-center space-x-2">
                  <div className="w-10 h-10 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-xl flex items-center justify-center text-white font-bold text-xl animate-pulse-slow">
                    W
                  </div>
                  <span className="text-2xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                    Workflo
                  </span>
                </Link>
              </div>
              <nav className="hidden md:flex space-x-8">
                <Link href="/diensten" className="text-gray-700 hover:text-yellow-600 font-medium transition-colors">
                  Diensten
                </Link>
                <Link href="/tarieven" className="text-gray-700 hover:text-yellow-600 font-medium transition-colors">
                  Tarieven
                </Link>
                <Link href="/over-ons" className="text-gray-700 hover:text-yellow-600 font-medium transition-colors">
                  Over Ons
                </Link>
                <Link href="/contact" className="text-gray-700 hover:text-yellow-600 font-medium transition-colors">
                  Contact
                </Link>
              </nav>
              <div className="flex items-center space-x-4">
                <a 
                  href={`tel:${content.contact.phone}`} 
                  className="hidden sm:flex items-center space-x-2 text-gray-700 hover:text-yellow-600 transition-colors"
                >
                  <span className="text-sm">📞</span>
                  <span className="font-medium">{content.contact.phone}</span>
                </a>
                <Link 
                  href="/tevredenheidscheck" 
                  className="bg-gradient-to-r from-yellow-400 to-orange-400 text-black px-6 py-3 rounded-xl font-bold hover:shadow-lg transition-all hover-lift"
                >
                  Gratis Check →
                </Link>
              </div>
            </div>
          </div>
        </header>

        <main>
          {/* Hero Section with Modern Design */}
          <section className="relative py-24 overflow-hidden">
            {/* Animated Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-yellow-50 via-white to-purple-50 animate-gradient"></div>
            
            {/* Decorative Elements */}
            <div className="absolute top-20 left-10 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse-slow"></div>
            <div className="absolute bottom-20 right-10 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse-slow"></div>
            
            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center animate-fadeIn">
                {/* Trust Badge */}
                <div className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur px-4 py-2 rounded-full shadow-md mb-8">
                  <span className="text-yellow-500">{content.hero.badge}</span>
                </div>
                
                {/* Main Title */}
                <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
                  {content.hero.title}
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500">
                    {content.hero.titleHighlight}
                  </span>
                </h1>
                
                <p className="text-2xl md:text-3xl text-gray-700 font-light mb-4">
                  {content.hero.subtitle}
                </p>
                
                <p className="text-lg text-gray-600 mb-12 max-w-3xl mx-auto">
                  {content.hero.description}
                </p>
                
                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
                  <Link 
                    href="/tevredenheidscheck" 
                    className="group bg-gradient-to-r from-yellow-400 to-orange-400 text-black px-8 py-4 rounded-xl font-bold text-lg hover:shadow-xl transition-all hover-lift flex items-center justify-center"
                  >
                    {content.hero.ctaPrimary}
                    <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
                  </Link>
                  <Link 
                    href="/diensten" 
                    className="bg-white text-gray-900 border-2 border-gray-200 px-8 py-4 rounded-xl font-bold text-lg hover:border-yellow-400 hover:shadow-lg transition-all hover-lift"
                  >
                    {content.hero.ctaSecondary}
                  </Link>
                </div>
                
                {/* Stats Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
                  {content.hero.stats.map((stat, index) => (
                    <div 
                      key={index}
                      className="bg-white/80 backdrop-blur rounded-xl p-6 shadow-lg hover-lift"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500">
                        {stat.value}
                      </div>
                      <div className="text-sm text-gray-600 mt-1">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Services Section with Cards */}
          <section className="py-24 bg-gradient-to-b from-white to-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16 animate-fadeIn">
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                  Onze Expertise
                </h2>
                <p className="text-xl text-gray-600">
                  Complete IT-oplossingen voor moderne bedrijven
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {content.services.map((service, index) => (
                  <div 
                    key={index}
                    className="group relative bg-white rounded-2xl shadow-lg overflow-hidden hover-lift"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    {/* Gradient Top Bar */}
                    <div className={`h-2 bg-gradient-to-r ${service.color}`}></div>
                    
                    <div className="p-6">
                      {/* Icon */}
                      <div className="text-4xl mb-4">{service.icon}</div>
                      
                      <h3 className="text-xl font-bold text-gray-900 mb-3">
                        {service.title}
                      </h3>
                      
                      <p className="text-gray-600 mb-4">
                        {service.description}
                      </p>
                      
                      {/* Features */}
                      <ul className="space-y-2">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center text-sm text-gray-700">
                            <span className="text-green-500 mr-2">✓</span>
                            {feature}
                          </li>
                        ))}
                      </ul>
                      
                      {/* Hover Effect Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/0 to-orange-400/0 group-hover:from-yellow-400/10 group-hover:to-orange-400/10 transition-all duration-300"></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Testimonials */}
          <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                  Wat Klanten Zeggen
                </h2>
                <p className="text-xl text-gray-600">
                  Meer dan 200 tevreden bedrijven in Amsterdam
                </p>
              </div>
              
              <div className="grid md:grid-cols-3 gap-8">
                {content.testimonials.map((testimonial, index) => (
                  <div 
                    key={index}
                    className="bg-white rounded-2xl shadow-lg p-8 hover-lift"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="flex mb-4">
                      {[...Array(5)].map((_, i) => (
                        <span key={i} className="text-yellow-400 text-xl">★</span>
                      ))}
                    </div>
                    <p className="text-gray-700 mb-6 italic">"{testimonial.text}"</p>
                    <div className="border-t pt-4">
                      <p className="font-bold text-gray-900">{testimonial.name}</p>
                      <p className="text-sm text-gray-600">{testimonial.company}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Modern CTA Section */}
          <section className="py-24 bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white relative overflow-hidden">
            {/* Animated Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0" style={{
                backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(255,255,255,.1) 35px, rgba(255,255,255,.1) 70px)`
              }}></div>
            </div>
            
            <div className="relative max-w-4xl mx-auto px-4 text-center">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Klaar om te beginnen?
              </h2>
              <p className="text-xl mb-8 text-gray-300">
                Ontdek binnen 10 minuten hoe gezond uw IT is
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  href="/tevredenheidscheck" 
                  className="bg-gradient-to-r from-yellow-400 to-orange-400 text-black px-8 py-4 rounded-xl font-bold text-lg hover:shadow-2xl transition-all hover-lift"
                >
                  Start Gratis IT-Check
                </Link>
                <a 
                  href={`tel:${content.contact.phone}`} 
                  className="bg-white text-black px-8 py-4 rounded-xl font-bold text-lg hover:shadow-2xl transition-all hover-lift flex items-center justify-center"
                >
                  <span className="mr-2">📞</span>
                  Bel {content.contact.phone}
                </a>
              </div>
              
              <div className="mt-12 flex flex-wrap justify-center gap-8 text-sm">
                <div className="flex items-center">
                  <span className="text-green-400 mr-2">✓</span>
                  Geen verplichtingen
                </div>
                <div className="flex items-center">
                  <span className="text-green-400 mr-2">✓</span>
                  Direct resultaat
                </div>
                <div className="flex items-center">
                  <span className="text-green-400 mr-2">✓</span>
                  100% gratis
                </div>
              </div>
            </div>
          </section>
        </main>

        {/* Professional Footer */}
        <footer className="bg-white border-t border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="grid md:grid-cols-4 gap-8">
              <div>
                <div className="flex items-center space-x-2 mb-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-xl flex items-center justify-center text-white font-bold text-xl">
                    W
                  </div>
                  <span className="text-2xl font-bold text-gray-900">Workflo</span>
                </div>
                <p className="text-gray-600">
                  Uw betrouwbare IT-partner in Amsterdam sinds 2015.
                </p>
              </div>
              
              <div>
                <h4 className="font-bold text-gray-900 mb-4">Diensten</h4>
                <ul className="space-y-2 text-gray-600">
                  <li><Link href="/diensten/managed-it" className="hover:text-yellow-600 transition-colors">Managed IT</Link></li>
                  <li><Link href="/diensten/cloud" className="hover:text-yellow-600 transition-colors">Cloud Services</Link></li>
                  <li><Link href="/diensten/cybersecurity" className="hover:text-yellow-600 transition-colors">Cybersecurity</Link></li>
                  <li><Link href="/diensten/connectivity" className="hover:text-yellow-600 transition-colors">Connectivity</Link></li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-bold text-gray-900 mb-4">Bedrijf</h4>
                <ul className="space-y-2 text-gray-600">
                  <li><Link href="/over-ons" className="hover:text-yellow-600 transition-colors">Over Ons</Link></li>
                  <li><Link href="/contact" className="hover:text-yellow-600 transition-colors">Contact</Link></li>
                  <li><Link href="/faq" className="hover:text-yellow-600 transition-colors">FAQ</Link></li>
                  <li><Link href="/privacy" className="hover:text-yellow-600 transition-colors">Privacy</Link></li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-bold text-gray-900 mb-4">Contact</h4>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-center">
                    <span className="mr-2">📞</span>
                    <a href={`tel:${content.contact.phone}`} className="hover:text-yellow-600 transition-colors">
                      {content.contact.phone}
                    </a>
                  </li>
                  <li className="flex items-center">
                    <span className="mr-2">✉️</span>
                    <a href={`mailto:${content.contact.email}`} className="hover:text-yellow-600 transition-colors">
                      {content.contact.email}
                    </a>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 mt-1">📍</span>
                    <span>{content.contact.address}</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="mt-12 pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-600">
                © 2025 Workflo B.V. Alle rechten voorbehouden.
              </p>
              <div className="flex space-x-6 mt-4 md:mt-0">
                <Link href="/terms" className="text-gray-600 hover:text-yellow-600 transition-colors">
                  Voorwaarden
                </Link>
                <Link href="/privacy" className="text-gray-600 hover:text-yellow-600 transition-colors">
                  Privacy
                </Link>
                <Link href="/cookies" className="text-gray-600 hover:text-yellow-600 transition-colors">
                  Cookies
                </Link>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  )
}