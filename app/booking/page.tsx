'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function BookingPage() {
  const [iframeLoaded, setIframeLoaded] = useState(false)

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Self-contained Header */}
      <header className="bg-black fixed top-0 left-0 right-0 z-50">
        <nav className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            <Link href="/" className="flex items-center space-x-3">
              <Image 
                src="/images/logos/workflo-logo-yellow.png" 
                alt="WorkFlo" 
                width={150} 
                height={40}
                priority
              />
            </Link>
            
            <div className="hidden md:flex items-center space-x-8">
              <Link href="/diensten" className="text-white hover:text-[#f2f400] transition-colors">
                Diensten
              </Link>
              <Link href="/over-ons" className="text-white hover:text-[#f2f400] transition-colors">
                Over Ons
              </Link>
              <Link href="/tarieven" className="text-white hover:text-[#f2f400] transition-colors">
                Tarieven
              </Link>
              <Link href="/contact" className="text-white hover:text-[#f2f400] transition-colors">
                Contact
              </Link>
              <Link 
                href="/contact" 
                className="bg-[#f2f400] text-black px-6 py-2 rounded-lg font-bold hover:bg-yellow-400 transition-colors"
              >
                Gratis Consult
              </Link>
            </div>
          </div>
        </nav>
      </header>
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="bg-white py-12 border-b">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">
                Plan een Afspraak met Onze IT Engineers
              </h1>
              <p className="text-xl text-gray-600 mb-4">
                Boek een consultatie om uw IT-behoeften te bespreken en oplossingen op maat te verkennen.
              </p>
              <div className="flex items-center justify-center gap-6 text-sm text-gray-500">
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Gratis Consultatie
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Geen Verplichtingen
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Deskundig Advies
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Booking Calendar Section */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              {/* Instructions */}
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-blue-600 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div className="flex-1">
                    <h3 className="font-semibold text-blue-900 mb-1">
                      Hoe te Boeken
                    </h3>
                    <p className="text-blue-800">
                      Selecteer een beschikbaar tijdslot in de onderstaande kalender. U ontvangt een bevestigingsmail met vergaderdetails en een link om deel te nemen aan de videogesprek.
                    </p>
                  </div>
                </div>
              </div>

              {/* Direct Booking Iframe */}
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                {!iframeLoaded && (
                  <div className="flex items-center justify-center h-96 bg-gray-50">
                    <div className="text-center">
                      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#f2f400] mx-auto mb-4"></div>
                      <p className="text-gray-600">Boekingskalender wordt geladen...</p>
                    </div>
                  </div>
                )}
                <iframe
                  src="https://outlook.office.com/book/PlaneenafspraakmeteenITengineer@workflo.nl/"
                  title="Boek een Afspraak"
                  className="w-full"
                  style={{ height: '900px', border: 'none', display: iframeLoaded ? 'block' : 'none' }}
                  onLoad={() => setIframeLoaded(true)}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>

              {/* Alternative Contact Options */}
              <div className="mt-12 bg-gray-100 rounded-lg p-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">
                  Liever Direct Contact?
                </h3>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-[#f2f400] rounded-full mx-auto mb-3 flex items-center justify-center">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <h4 className="font-semibold mb-1">Bel Ons</h4>
                    <p className="text-gray-600 text-sm mb-2">
                      Ma-Vr 8:00-18:00
                    </p>
                    <a href="tel:0203080465" className="text-yellow-600 hover:text-yellow-700 font-medium">
                      020-30 80 465
                    </a>
                  </div>
                  
                  <div className="text-center">
                    <div className="w-12 h-12 bg-[#f2f400] rounded-full mx-auto mb-3 flex items-center justify-center">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <h4 className="font-semibold mb-1">Email Ons</h4>
                    <p className="text-gray-600 text-sm mb-2">
                      Reactie binnen 4 uur
                    </p>
                    <a href="mailto:info@workflo.nl" className="text-yellow-600 hover:text-yellow-700 font-medium">
                      info@workflo.nl
                    </a>
                  </div>
                  
                  <div className="text-center">
                    <div className="w-12 h-12 bg-[#f2f400] rounded-full mx-auto mb-3 flex items-center justify-center">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                      </svg>
                    </div>
                    <h4 className="font-semibold mb-1">WhatsApp</h4>
                    <p className="text-gray-600 text-sm mb-2">
                      Snelle vragen
                    </p>
                    <a href="https://wa.me/31203080465" className="text-yellow-600 hover:text-yellow-700 font-medium">
                      Start Chat
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Self-contained Footer */}
      <footer className="bg-black text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <Image 
                src="/images/logos/workflo-logo-yellow.png" 
                alt="WorkFlo" 
                width={150} 
                height={40}
                className="mb-4"
              />
              <p className="text-gray-400">
                Uw partner in IT-oplossingen
              </p>
            </div>
            
            <div>
              <h3 className="font-bold mb-4 text-[#f2f400]">Diensten</h3>
              <ul className="space-y-2">
                <li><Link href="/diensten/managed-it" className="text-gray-400 hover:text-[#f2f400]">Managed IT</Link></li>
                <li><Link href="/diensten/cloud" className="text-gray-400 hover:text-[#f2f400]">Cloud Oplossingen</Link></li>
                <li><Link href="/diensten/cybersecurity" className="text-gray-400 hover:text-[#f2f400]">Cybersecurity</Link></li>
                <li><Link href="/diensten/connectivity" className="text-gray-400 hover:text-[#f2f400]">Connectivity</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-bold mb-4 text-[#f2f400]">Bedrijf</h3>
              <ul className="space-y-2">
                <li><Link href="/over-ons" className="text-gray-400 hover:text-[#f2f400]">Over Ons</Link></li>
                <li><Link href="/tarieven" className="text-gray-400 hover:text-[#f2f400]">Tarieven</Link></li>
                <li><Link href="/contact" className="text-gray-400 hover:text-[#f2f400]">Contact</Link></li>
                <li><Link href="/support" className="text-gray-400 hover:text-[#f2f400]">Support</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-bold mb-4 text-[#f2f400]">Contact</h3>
              <p className="text-gray-400">
                Piet Heinkade 55<br />
                1019 GM Amsterdam<br />
                Tel: 020-30 80 465<br />
                Email: info@workflo.nl
              </p>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 WorkFlo. Alle rechten voorbehouden.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}