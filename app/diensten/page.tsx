'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { PhoneIcon, EnvelopeIcon, MapPinIcon, CheckIcon, ArrowRightIcon } from '@heroicons/react/24/outline'
// import DangerTape from '@/components/DangerTape' // REPLACED
import StaticDangerTape from '@/components/StaticDangerTape'
// import Header from '@/components/layout/Header' // REPLACED
import StaticHeader from '@/components/StaticHeader'
// import Footer from '@/components/layout/Footer' // REPLACED
import StaticFooter from '@/components/StaticFooter'

export default function DienstenPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header with Warning Tape */}
      <StaticDangerTape />
      
      <StaticHeader />

      <main className="pt-8 pb-16">
        {/* Hero Section - Simple & Clear */}
        <section className="relative py-20 bg-gradient-to-br from-gray-50 to-white overflow-hidden">
          {/* Background Video */}
          <div className="absolute inset-0 opacity-10 pointer-events-none">
            <video
              autoPlay
              muted
              loop
              playsInline
              className="absolute inset-0 w-full h-full object-cover"
              preload="metadata"
            >
              <source src="/videos/Workflo_W_final.mp4" type="video/mp4" />
              <source src="/videos/workflo-code-animation.mp4" type="video/mp4" />
              <source src="/videos/Workflo-code-animatie.mp4" type="video/mp4" />
            </video>
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl lg:text-5xl font-bold mb-6 text-gray-900">
                Wij regelen uw IT
              </h1>
              <p className="text-xl lg:text-2xl text-gray-700 mb-8">
                Zodat u zich kunt focussen op uw bedrijf. Simpel, betrouwbaar, zonder gedoe.
              </p>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Geen ingewikkelde verhalen. Wij zorgen dat uw computers, internet en systemen gewoon werken. 
                Altijd. Voor een vaste prijs per maand.
              </p>
            </div>
          </div>
        </section>

        {/* What We Do - Super Simple */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Wat wij voor u doen
                </h2>
                <p className="text-xl text-gray-600">
                  Alles wat u nodig heeft om zorgeloos te kunnen werken
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="bg-white rounded-xl p-8 shadow-lg border-2 border-gray-100 hover:border-yellow-400 transition-all">
                  <div className="w-16 h-16 bg-yellow-100 rounded-xl flex items-center justify-center mb-6">
                    <svg className="w-8 h-8 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    Uw computers werken
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Laptops, computers en printers die gewoon doen wat ze moeten doen. Zonder crashes, zonder gedoe.
                  </p>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li className="flex items-center gap-2">
                      <CheckIcon className="w-4 h-4 text-green-500" />
                      Updates automatisch
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckIcon className="w-4 h-4 text-green-500" />
                      Problemen oplossen voordat u ze merkt
                    </li>
                  </ul>
                </div>

                <div className="bg-white rounded-xl p-8 shadow-lg border-2 border-gray-100 hover:border-yellow-400 transition-all">
                  <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
                    <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    Uw gegevens zijn veilig
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Automatische backups en bescherming tegen virussen. Uw belangrijke bestanden zijn altijd veilig.
                  </p>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li className="flex items-center gap-2">
                      <CheckIcon className="w-4 h-4 text-green-500" />
                      Dagelijkse backup van uw bestanden
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckIcon className="w-4 h-4 text-green-500" />
                      Bescherming tegen virussen
                    </li>
                  </ul>
                </div>

                <div className="bg-white rounded-xl p-8 shadow-lg border-2 border-gray-100 hover:border-yellow-400 transition-all">
                  <div className="w-16 h-16 bg-green-100 rounded-xl flex items-center justify-center mb-6">
                    <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    Hulp als u het nodig heeft
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Een probleem? Wij lossen het op. Vaak op afstand, soms komen we langs. Altijd snel.
                  </p>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li className="flex items-center gap-2">
                      <CheckIcon className="w-4 h-4 text-green-500" />
                      Hulp binnen 1 uur
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckIcon className="w-4 h-4 text-green-500" />
                      Geen ingewikkelde taal
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works - Really Simple */}
        <section className="relative py-20 bg-gray-50 overflow-hidden">
          {/* Background Video */}
          <div className="absolute inset-0 opacity-5 pointer-events-none">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
            >
              <source src="/videos/mobile-device-animation.mp4" type="video/mp4" />
              <source src="/videos/Mobile-Device-Header-1.mp4" type="video/mp4" />
            </video>
          </div>
          <div className="absolute inset-0 opacity-5 pointer-events-none hidden">
            <video
              autoPlay
              muted
              loop
              playsInline
              className="absolute inset-0 w-full h-full object-cover"
              preload="metadata"
            >
              <source src="/videos/mobile-device-animation.mp4" type="video/mp4" />
              <source src="/videos/Mobile-Device-Header-1.mp4" type="video/mp4" />
            </video>
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Zo werkt het
                </h2>
                <p className="text-xl text-gray-600">
                  In 3 simpele stappen naar zorgeloze IT
                </p>
              </div>

              <div className="space-y-8">
                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-black font-bold text-xl">1</span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                      Wij maken een afspraak
                    </h3>
                    <p className="text-lg text-gray-700">
                      We komen langs voor een gratis gesprek. Geen verplichtingen. 
                      We kijken naar uw huidige situatie en vertellen wat we kunnen doen.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-black font-bold text-xl">2</span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                      Wij regelen alles
                    </h3>
                    <p className="text-lg text-gray-700">
                      Als u akkoord gaat, regelen wij alles. Nieuwe apparaten, software, beveiliging. 
                      U hoeft zich nergens zorgen over te maken.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-black font-bold text-xl">3</span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                      U werkt zorgeloos verder
                    </h3>
                    <p className="text-lg text-gray-700">
                      Vanaf dat moment zorgen wij dat alles werkt. Voor een vaste prijs per maand. 
                      Geen verrassingen, geen gedoe.
                    </p>
                  </div>
                </div>
              </div>

              <div className="text-center mt-12">
                <Link 
                  href="/contact" 
                  className="inline-flex items-center px-8 py-4 bg-yellow-400 text-black font-bold rounded-lg hover:bg-yellow-500 transition-colors shadow-lg"
                >
                  Start gratis gesprek
                  <ArrowRightIcon className="ml-2 w-5 h-5" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing - Simple */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                Wat kost het?
              </h2>
              
              <div className="bg-white rounded-2xl shadow-xl p-8 border-4 border-yellow-400 mb-8">
                <div className="text-5xl font-bold text-gray-900 mb-4">
                  €60
                  <span className="text-lg text-gray-600 font-normal">/maand per computer</span>
                </div>
                <p className="text-xl text-gray-700 mb-6">
                  Alles inclusief. Geen verrassingen.
                </p>
                <div className="grid md:grid-cols-2 gap-4 text-left">
                  <div className="flex items-center gap-3">
                    <CheckIcon className="w-6 h-6 text-green-500 flex-shrink-0" />
                    <span>Computer onderhoud</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckIcon className="w-6 h-6 text-green-500 flex-shrink-0" />
                    <span>Alle updates</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckIcon className="w-6 h-6 text-green-500 flex-shrink-0" />
                    <span>Virusbeveiliging</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckIcon className="w-6 h-6 text-green-500 flex-shrink-0" />
                    <span>Backup van bestanden</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckIcon className="w-6 h-6 text-green-500 flex-shrink-0" />
                    <span>Snelle hulp</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckIcon className="w-6 h-6 text-green-500 flex-shrink-0" />
                    <span>Geen verborgen kosten</span>
                  </div>
                </div>
              </div>

              <p className="text-lg text-gray-600">
                Meer dan 5 computers? Dan krijgt u korting. Bel ons voor een persoonlijke prijs.
              </p>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <StaticFooter />

      {/* Warning Tape Bottom */}
      <StaticDangerTape />
    </div>
  )
}