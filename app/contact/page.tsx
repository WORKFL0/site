'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { PhoneIcon, EnvelopeIcon, MapPinIcon } from '@heroicons/react/24/outline'

// TypeScript declaration for HubSpot
declare global {
  interface Window {
    hbspt: any
  }
}

export default function ContactPage() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    
    // Load HubSpot form script
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
          target: '#hubspot-contact-form'
        })
      }
    }
    
    document.body.appendChild(script)
    
    return () => {
      // Cleanup
      if (document.body.contains(script)) {
        document.body.removeChild(script)
      }
    }
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

  return (
    <div className="min-h-screen bg-white">
      {/* Header with Warning Tape */}
      <div className="bg-gradient-to-r from-warning-yellow via-warning-black to-warning-yellow h-2"></div>
      
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center">
              <Link href="/" className="flex items-center space-x-2">
                <div className="w-10 h-10 bg-primary-600 rounded-lg flex items-center justify-center">
                  <span className="text-black font-bold text-xl">W</span>
                </div>
                <span className="text-2xl font-bold text-gray-900">Workflo</span>
              </Link>
            </div>
            <nav className="hidden md:flex items-center space-x-8">
              <Link href="/" className="text-gray-700 hover:text-primary-600 font-medium transition-colors">
                Home
              </Link>
              <Link href="/diensten" className="text-gray-700 hover:text-primary-600 font-medium transition-colors">
                Diensten
              </Link>
              <Link href="/over-ons" className="text-gray-700 hover:text-primary-600 font-medium transition-colors">
                Over Ons
              </Link>
              <Link href="/contact" className="text-gray-700 hover:text-primary-600 font-medium transition-colors">
                Contact
              </Link>
            </nav>
          </div>
        </div>
      </header>

      <main className="pt-8 pb-16">
        {/* Hero Section */}
        <section className="py-12 bg-gradient-to-br from-primary-50 to-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl">
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                Neem Contact Op
              </h1>
              <p className="text-xl lg:text-2xl text-gray-600">
                We staan klaar om uw IT-uitdagingen op te lossen
              </p>
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div>
                <div className="bg-white rounded-2xl shadow-xl p-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Stuur ons een bericht</h2>
                  <p className="text-gray-600 mb-8">
                    Vul het formulier in en we nemen binnen 24 uur contact met u op.
                  </p>
                  
                  {/* HubSpot Form Container */}
                  <div id="hubspot-contact-form" className="hubspot-form-container">
                    <div className="text-gray-500 text-sm">Formulier wordt geladen...</div>
                  </div>
                </div>
              </div>
              
              {/* Contact Information */}
              <div className="space-y-8">
                {/* Direct Contact Card */}
                <div className="bg-black rounded-2xl p-6 text-white relative overflow-hidden">
                  {/* Danger Tape Stripe */}
                  <div className="absolute top-0 left-0 right-0 h-3" style={{
                    backgroundImage: `repeating-linear-gradient(
                      45deg,
                      #f2f400,
                      #f2f400 15px,
                      #000000 15px,
                      #000000 30px
                    )`
                  }}></div>
                  <div className="pt-2">
                    <h3 className="text-xl font-bold mb-4 text-primary-600">Direct Contact</h3>
                    <div className="space-y-4">
                      <a href="tel:0203080465" className="flex items-center gap-3 hover:underline group">
                        <div className="p-3 bg-primary-600/20 rounded-lg group-hover:bg-primary-600/30 transition-colors">
                          <PhoneIcon className="w-6 h-6" />
                        </div>
                        <div>
                          <div className="text-sm opacity-90">Bel ons direct</div>
                          <div className="text-xl font-semibold">020-30 80 465</div>
                        </div>
                      </a>
                      
                      <a href="mailto:info@workflo.nl" className="flex items-center gap-3 hover:underline group">
                        <div className="p-3 bg-primary-600/20 rounded-lg group-hover:bg-primary-600/30 transition-colors">
                          <EnvelopeIcon className="w-6 h-6" />
                        </div>
                        <div>
                          <div className="text-sm opacity-90">Email ons</div>
                          <div className="text-xl font-semibold">info@workflo.nl</div>
                        </div>
                      </a>
                    </div>
                    
                    <div className="mt-6 pt-6 border-t border-white/20">
                      <p className="text-sm opacity-90 mb-2">Spoed? Bel direct!</p>
                      <p className="font-semibold">Reactie binnen 15 minuten</p>
                    </div>
                  </div>
                </div>
                
                {/* Office Info */}
                <div className="bg-gray-50 rounded-2xl p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Ons Kantoor</h3>
                  
                  {/* Building Photo */}
                  <div className="mb-6">
                    <div className="rounded-lg overflow-hidden shadow-lg bg-gray-200 h-48 flex items-center justify-center">
                      <span className="text-gray-500">Kantoor Amsterdam</span>
                    </div>
                  </div>
                  
                  {/* Address Information */}
                  <div className="bg-white rounded-lg p-6 border-l-4 border-primary-600 shadow-sm mb-4">
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-primary-100 rounded-lg">
                        <MapPinIcon className="w-6 h-6 text-primary-600" />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-lg font-semibold text-gray-900 mb-2">Workflo B.V.</h4>
                        <div className="text-gray-700 space-y-1">
                          <div className="font-medium">Koivistokade 3</div>
                          <div>1013AC Amsterdam</div>
                          <div>Nederland</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-primary-600 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <div>
                        <p className="text-gray-900 font-medium">Kantoor Uren</p>
                        <p className="text-gray-600">
                          Ma-Vr: 8:00 - 18:00<br />
                          24/7 Support voor contractklanten
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <a 
                    href="https://maps.google.com/maps?q=Koivistokade+3+Amsterdam" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-block w-full mt-6 px-4 py-2 bg-white border border-primary-600 text-primary-600 rounded-lg text-center hover:bg-primary-50 transition-colors"
                  >
                    Route plannen
                  </a>
                </div>
                
                {/* Quick Help */}
                <div className="bg-primary-50 rounded-2xl p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Hulp Nodig?</h3>
                  <p className="text-gray-700 mb-4">
                    Test direct de gezondheid van uw IT-infrastructuur met onze gratis check.
                  </p>
                  <Link 
                    href="/tevredenheidscheck" 
                    className="inline-block w-full px-4 py-2 bg-white border border-primary-600 text-primary-600 rounded-lg text-center hover:bg-primary-50 transition-colors"
                  >
                    Start IT-check
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Vind Ons in Amsterdam
            </h2>
            
            <div className="max-w-6xl mx-auto">
              <div className="bg-white rounded-2xl overflow-hidden shadow-xl">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2435.603659021858!2d4.888571976608!3d52.38495507204196!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c609c0c0000001%3A0xd7c8f4e8a1234567!2sKoivistokade%203%2C%201013%20AM%20Amsterdam%2C%20Nederland!5e0!3m2!1snl!2snl!4v1635789012345!5m2!1snl!2snl"
                  width="100%"
                  height="500"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Workflo Kantoorlocatie"
                />
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-10 h-10 bg-primary-600 rounded-lg flex items-center justify-center">
                  <span className="text-black font-bold text-xl">W</span>
                </div>
                <span className="text-2xl font-bold">Workflo</span>
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
              <h3 className="font-bold text-lg mb-4">Legal</h3>
              <ul className="space-y-2">
                <li><Link href="/privacy" className="text-gray-400 hover:text-primary-600">Privacy Policy</Link></li>
                <li><Link href="/terms" className="text-gray-400 hover:text-primary-600">Terms of Service</Link></li>
                <li><Link href="/cookies" className="text-gray-400 hover:text-primary-600">Cookie Policy</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-lg mb-4">Company</h3>
              <ul className="space-y-2">
                <li><Link href="/over-ons" className="text-gray-400 hover:text-primary-600">Over Ons</Link></li>
                <li><Link href="/contact" className="text-gray-400 hover:text-primary-600">Contact</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-lg mb-4">Services</h3>
              <ul className="space-y-2">
                <li><Link href="/diensten" className="text-gray-400 hover:text-primary-600">All Services</Link></li>
                <li><Link href="/tevredenheidscheck" className="text-gray-400 hover:text-primary-600">Satisfaction Check</Link></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              &copy; 2025 Workflo B.V. All rights reserved.
            </p>
          </div>
        </div>
      </footer>

      {/* Warning Tape Bottom */}
      <div className="bg-gradient-to-r from-warning-yellow via-warning-black to-warning-yellow h-2"></div>
    </div>
  )
}