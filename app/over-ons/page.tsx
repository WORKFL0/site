'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { PhoneIcon, EnvelopeIcon, MapPinIcon } from '@heroicons/react/24/outline'
// import DangerTape from '@/components/DangerTape' // REPLACED
import StaticDangerTape from '@/components/StaticDangerTape'

export default function OverOnsPage() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
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

  const values = [
    {
      title: 'Betrouwbaarheid',
      description: 'We doen wat we beloven. Geen verrassingen, geen verborgen kosten.',
      icon: '🛡️'
    },
    {
      title: 'Expertise',
      description: 'Gecertificeerde specialisten met jarenlange ervaring in diverse sectoren.',
      icon: '💡'
    },
    {
      title: 'Proactiviteit',
      description: 'We voorkomen problemen voordat ze ontstaan door slimme monitoring.',
      icon: '🚀'
    },
    {
      title: 'Partnership',
      description: 'We denken mee met uw business en groeien samen met u.',
      icon: '🤝'
    }
  ]

  const milestones = [
    { year: '2015', event: 'Workflo opgericht in Amsterdam' },
    { year: '2017', event: 'Microsoft Gold Partner certificering' },
    { year: '2019', event: '100+ tevreden klanten bereikt' },
    { year: '2021', event: 'ISO 27001 certificering behaald' },
    { year: '2023', event: 'Uitbreiding naar 25+ medewerkers' },
    { year: '2025', event: 'Marktleider in Amsterdam regio' }
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Header with Danger Tape */}
      <StaticDangerTape />
      
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center">
              <Link href="/" className="flex items-center">
                <Image
                  src="/images/logos/workflo-logo-yellow.png"
                  alt="Workflo Logo"
                  width={150}
                  height={45}
                  className="h-12 w-auto"
                />
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
        <section className="py-24 bg-gradient-to-br from-gray-900 to-black text-white relative overflow-hidden">
          {/* Background Video */}
          <div className="absolute inset-0 w-full h-full">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover opacity-20"
            >
              <source src="/videos/hero-video.mp4" type="video/mp4" />
              <source src="/videos/Workflo_W_final.mp4" type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-black/60"></div>
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-5xl mx-auto text-center">
              <h1 className="text-5xl lg:text-7xl font-bold mb-6">
                IT zonder Zorgen sinds 2015
              </h1>
              <p className="text-xl lg:text-2xl opacity-90 mb-8">
                Van startup tot scale-up: wij zijn de technologiepartner die met u meegroeit
              </p>
              <div className="flex flex-wrap justify-center gap-8 text-center">
                <div>
                  <div className="text-4xl font-bold text-primary-600">250+</div>
                  <div className="text-sm opacity-80">Tevreden klanten</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-primary-600">10+</div>
                  <div className="text-sm opacity-80">Jaar ervaring</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-primary-600">99.9%</div>
                  <div className="text-sm opacity-80">Uptime garantie</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-primary-600">24/7</div>
                  <div className="text-sm opacity-80">Support beschikbaar</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Story */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
                Ons Verhaal
              </h2>
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="prose prose-lg max-w-none">
                  <p className="text-gray-700 mb-6">
                    Workflo begon in 2015 met een simpele missie: IT-ondersteuning die écht werkt. 
                    Opgericht door een team van IT-professionals die gefrustreerd waren door de 
                    traditionele manier van werken in de IT-sector.
                  </p>
                  <p className="text-gray-700 mb-6">
                    We zagen bedrijven worstelen met complexe systemen, onduidelijke facturen en 
                    IT-partners die meer problemen veroorzaakten dan oplosten. Daar wilden we 
                    verandering in brengen.
                  </p>
                  <p className="text-gray-700 mb-6">
                    Vandaag zijn we uitgegroeid tot een van de meest vertrouwde IT-partners in 
                    Amsterdam, met meer dan 250 tevreden klanten die kunnen focussen op hun core 
                    business terwijl wij hun IT perfect laten draaien.
                  </p>
                </div>
                
                {/* Story Animation */}
                <div className="flex justify-center">
                  <div className="bg-white rounded-2xl p-8 shadow-xl max-w-md">
                    <video
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="w-full h-auto rounded-lg"
                    >
                      <source src="/videos/workflo-w-animation.mp4" type="video/mp4" />
                      <source src="/videos/Workflo_W_Mobile-2.mp4" type="video/mp4" />
                    </video>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Values */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
                Onze Waarden
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {values.map((value, index) => (
                  <div key={index} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
                    <div className="text-4xl mb-4">{value.icon}</div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                    <p className="text-gray-600">{value.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
                Onze Reis
              </h2>
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="space-y-8">
                  {milestones.map((milestone, index) => (
                    <div key={index} className="flex gap-4">
                      <div className="flex-shrink-0 w-24">
                        <div className="text-primary-600 font-bold text-lg">{milestone.year}</div>
                      </div>
                      <div className="flex-grow pb-8 border-l-2 border-gray-300 pl-8 relative">
                        <div className="absolute -left-2 top-0 w-4 h-4 bg-primary-600 rounded-full"></div>
                        <p className="text-gray-700">{milestone.event}</p>
                      </div>
                    </div>
                  ))}
                </div>
                
                {/* Timeline Animation */}
                <div className="flex justify-center">
                  <div className="bg-black rounded-2xl p-8 shadow-2xl max-w-md">
                    <video
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="w-full h-auto rounded-lg"
                    >
                      <source src="/videos/security-animation.mp4" type="video/mp4" />
                      <source src="/videos/Security_1.mp4" type="video/mp4" />
                    </video>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-black text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-4">
                Klaar om samen te groeien?
              </h2>
              <p className="text-xl opacity-90 mb-8">
                Ontdek hoe wij uw IT-partner kunnen worden
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  href="/contact" 
                  className="inline-block px-8 py-4 bg-primary-600 text-black rounded-lg font-semibold hover:bg-primary-700 transition-colors text-lg"
                >
                  Start een gesprek
                </Link>
                <Link 
                  href="/diensten" 
                  className="inline-block px-8 py-4 bg-white text-black rounded-lg font-semibold hover:bg-gray-100 transition-colors text-lg"
                >
                  Bekijk onze diensten
                </Link>
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
              <div className="flex items-center mb-4">
                <Image
                  src="/images/logos/workflo-logo-yellow.png"
                  alt="Workflo Logo"
                  width={150}
                  height={45}
                  className="h-10 w-auto"
                />
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
      {/* Danger Tape Bottom */}
      <StaticDangerTape />
    </div>
  )
}