'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function SupportPage() {
  const [showIframe, setShowIframe] = useState(false)

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
        <section className="bg-white py-8">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">
                IT Support Portal
              </h1>
              <p className="text-xl text-gray-600 mb-4">
                Toegang tot ons complete support portaal
              </p>
              <p className="text-gray-500">
                Dien tickets in, volg de status van uw aanvragen en krijg direct hulp van ons support team.
              </p>
            </div>
          </div>
        </section>

        {/* Support Portal Section */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            {!showIframe ? (
              <div className="bg-white rounded-lg shadow-lg p-8 max-w-2xl mx-auto text-center">
                <div className="w-20 h-20 bg-[#f2f400] rounded-full mx-auto mb-6 flex items-center justify-center">
                  <svg className="w-10 h-10 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Toegang tot Support Portal
                </h2>
                <p className="text-gray-600 mb-6">
                  Toegang tot ons support portal direct op deze pagina of open het in een nieuw venster. 
                  Dien tickets in, volg aanvragen en krijg hulp van ons team.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button 
                    onClick={() => setShowIframe(true)}
                    className="bg-[#f2f400] text-black px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-400 transition-colors shadow-lg"
                  >
                    Open Portal Hier
                  </button>
                  <a
                    href="https://servicedesk.workflo.it/portal"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gray-200 text-gray-700 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-300 transition-colors shadow-lg inline-block"
                  >
                    Open in Nieuw Tabblad →
                  </a>
                </div>
                
                <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                  <p className="text-sm text-blue-800">
                    Veilige toegang tot uw toegewijde support omgeving
                  </p>
                </div>
              </div>
            ) : (
              <div className="max-w-7xl mx-auto">
                <div className="mb-6 flex items-center justify-between">
                  <h2 className="text-2xl font-bold text-gray-900">
                    Support Portal
                  </h2>
                  <button
                    onClick={() => setShowIframe(false)}
                    className="bg-gray-200 text-gray-700 px-4 py-2 rounded-lg font-medium hover:bg-gray-300 transition-colors"
                  >
                    ← Terug
                  </button>
                </div>
                
                {/* Direct iframe without IframeLoader component */}
                <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                  <iframe
                    src="https://servicedesk.workflo.it/portal"
                    title="WorkFlo Support Portal"
                    className="w-full"
                    style={{ height: '900px', border: 'none' }}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              </div>
            )}
          </div>
        </section>

        {/* Alternative Support Options */}
        <section className="py-12 bg-gray-100">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold text-center mb-8">
              Andere manieren om hulp te krijgen
            </h2>
            
            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <div className="bg-white rounded-lg p-6 text-center shadow">
                <div className="w-12 h-12 bg-[#f2f400] rounded-lg mx-auto mb-4 flex items-center justify-center">
                  <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <h3 className="font-semibold mb-2">
                  Telefonische Support
                </h3>
                <p className="text-gray-600 mb-4">
                  Bel ons direct voor urgente zaken
                </p>
                <a 
                  href="tel:0203080465" 
                  className="text-yellow-600 hover:text-yellow-700 font-medium"
                >
                  020-30 80 465
                </a>
              </div>

              <div className="bg-white rounded-lg p-6 text-center shadow">
                <div className="w-12 h-12 bg-[#f2f400] rounded-lg mx-auto mb-4 flex items-center justify-center">
                  <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="font-semibold mb-2">
                  E-mail Support
                </h3>
                <p className="text-gray-600 mb-4">
                  Stuur ons een gedetailleerde beschrijving
                </p>
                <a 
                  href="mailto:support@workflo.nl" 
                  className="text-yellow-600 hover:text-yellow-700 font-medium"
                >
                  support@workflo.nl
                </a>
              </div>

              <div className="bg-white rounded-lg p-6 text-center shadow">
                <div className="w-12 h-12 bg-[#f2f400] rounded-lg mx-auto mb-4 flex items-center justify-center">
                  <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                  </svg>
                </div>
                <h3 className="font-semibold mb-2">
                  Remote Support
                </h3>
                <p className="text-gray-600 mb-4">
                  Directe hulp via scherm delen
                </p>
                <a 
                  href="https://get.teamviewer.com/workflo-support" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-yellow-600 hover:text-yellow-700 font-medium"
                >
                  Start sessie
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Support Hours */}
        <section className="py-8 bg-white">
          <div className="container mx-auto px-4 text-center">
            <h3 className="text-xl font-semibold mb-4">
              Support Beschikbaarheid
            </h3>
            <div className="max-w-2xl mx-auto">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-medium text-gray-900 mb-2">
                    Standaard Support
                  </h4>
                  <p className="text-gray-600">
                    Maandag t/m Vrijdag<br />
                    08:00 - 18:00 CET
                  </p>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900 mb-2">24/7 Support</h4>
                  <p className="text-gray-600">
                    Beschikbaar voor kritieke systemen<br />
                    (Premium Support klanten)
                  </p>
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