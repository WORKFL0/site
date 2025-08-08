'use client'

import Image from 'next/image'
import Link from 'next/link'

/**
 * ULTRA SAFE HOMEPAGE - This will ALWAYS load, no matter what!
 * No dependencies on environment variables, context providers, or external data
 */
export default function HomeSafe() {
  // No mounted state needed - render immediately

  // Basic content that always works
  const content = {
    hero: {
      title: 'Workflo IT Services Amsterdam',
      subtitle: 'Professional IT Support for Your Business',
      description: 'Transform your business with reliable IT solutions. 24/7 support, cloud services, and cybersecurity.',
      ctaPrimary: 'Get Started',
      ctaSecondary: 'Learn More'
    },
    services: [
      { 
        title: 'Managed IT Services',
        description: '24/7 monitoring and support for your IT infrastructure',
        icon: '🖥️'
      },
      {
        title: 'Cloud Solutions', 
        description: 'Secure cloud migration and management services',
        icon: '☁️'
      },
      {
        title: 'Cybersecurity',
        description: 'Protect your business from digital threats',
        icon: '🔒'
      },
      {
        title: 'IT Consulting',
        description: 'Strategic IT planning and implementation',
        icon: '💡'
      }
    ],
    contact: {
      phone: '020-30 80 465',
      email: 'info@workflo.nl',
      address: 'Koivistokade 3, 1013 AC Amsterdam'
    }
  }

  // Remove mounted gate - show content immediately
  // This was causing the "Loading..." issue in production

  return (
    <div className="min-h-screen bg-white">
      {/* Simple Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Link href="/" className="text-2xl font-bold text-gray-900">
                Workflo
              </Link>
            </div>
            <nav className="hidden md:flex space-x-8">
              <Link href="/diensten" className="text-gray-700 hover:text-gray-900">Services</Link>
              <Link href="/tarieven" className="text-gray-700 hover:text-gray-900">Pricing</Link>
              <Link href="/about" className="text-gray-700 hover:text-gray-900">About</Link>
              <Link href="/contact" className="text-gray-700 hover:text-gray-900">Contact</Link>
            </nav>
            <div className="flex items-center space-x-4">
              <a href={`tel:${content.contact.phone}`} className="bg-yellow-400 text-black px-4 py-2 rounded-lg font-medium hover:bg-yellow-500">
                Call Now
              </a>
            </div>
          </div>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                {content.hero.title}
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 mb-4">
                {content.hero.subtitle}
              </p>
              <p className="text-lg text-gray-600 mb-8 max-w-3xl mx-auto">
                {content.hero.description}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="bg-yellow-400 text-black px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-500">
                  {content.hero.ctaPrimary}
                </Link>
                <Link href="/diensten" className="bg-white text-gray-900 border-2 border-gray-300 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-50">
                  {content.hero.ctaSecondary}
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Our Services
              </h2>
              <p className="text-lg text-gray-600">
                Complete IT solutions for your business
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {content.services.map((service, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {service.title}
                  </h3>
                  <p className="text-gray-600">
                    {service.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">
                    Ready to Get Started?
                  </h2>
                  <p className="text-lg text-gray-600 mb-8">
                    Contact us today for a free consultation and discover how we can transform your IT infrastructure.
                  </p>
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <span className="text-2xl mr-4">📞</span>
                      <div>
                        <div className="text-sm text-gray-600">Call us</div>
                        <a href={`tel:${content.contact.phone}`} className="text-xl font-bold text-gray-900 hover:text-yellow-600">
                          {content.contact.phone}
                        </a>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <span className="text-2xl mr-4">✉️</span>
                      <div>
                        <div className="text-sm text-gray-600">Email us</div>
                        <a href={`mailto:${content.contact.email}`} className="text-xl font-bold text-gray-900 hover:text-yellow-600">
                          {content.contact.email}
                        </a>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <span className="text-2xl mr-4">📍</span>
                      <div>
                        <div className="text-sm text-gray-600">Visit us</div>
                        <div className="text-xl font-bold text-gray-900">
                          {content.contact.address}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-yellow-50 rounded-xl p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    Why Choose Workflo?
                  </h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2">✓</span>
                      <span className="text-gray-700">24/7 Support Available</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2">✓</span>
                      <span className="text-gray-700">Fixed Monthly Pricing</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2">✓</span>
                      <span className="text-gray-700">Local Amsterdam Team</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2">✓</span>
                      <span className="text-gray-700">GDPR Compliant</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2">✓</span>
                      <span className="text-gray-700">10+ Years Experience</span>
                    </li>
                  </ul>
                  <Link href="/contact" className="mt-6 w-full bg-yellow-400 text-black px-6 py-3 rounded-lg font-bold hover:bg-yellow-500 inline-block text-center">
                    Get Free Consultation
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Simple Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Workflo</h3>
              <p className="text-gray-400">
                Your trusted IT partner in Amsterdam since 2015.
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Services</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/diensten" className="hover:text-white">Managed IT</Link></li>
                <li><Link href="/diensten" className="hover:text-white">Cloud Services</Link></li>
                <li><Link href="/diensten" className="hover:text-white">Cybersecurity</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/about" className="hover:text-white">About Us</Link></li>
                <li><Link href="/contact" className="hover:text-white">Contact</Link></li>
                <li><Link href="/faq" className="hover:text-white">FAQ</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Contact</h4>
              <ul className="space-y-2 text-gray-400">
                <li>{content.contact.phone}</li>
                <li>{content.contact.email}</li>
                <li>{content.contact.address}</li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
            <p>&copy; 2025 Workflo B.V. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}