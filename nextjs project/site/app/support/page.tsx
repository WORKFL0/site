'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function SupportPage() {
  const [isLoading, setIsLoading] = useState(true)

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-grid-gray-100 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
        
        <div className="container mx-auto container-padding relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              <span className="text-gradient">Support</span> Portal
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Heb je technische ondersteuning nodig? Maak een ticket aan of bekijk de status van je bestaande tickets.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-600">
              <span className="flex items-center gap-2">
                <svg className="w-5 h-5 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                24/7 beschikbaar
              </span>
              <span className="flex items-center gap-2">
                <svg className="w-5 h-5 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                Snelle response tijd
              </span>
              <span className="flex items-center gap-2">
                <svg className="w-5 h-5 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Expert support team
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Actions */}
      <section className="py-12">
        <div className="container mx-auto container-padding">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-12">
            <div className="bg-white rounded-xl shadow-lg p-6 border-2 border-transparent hover:border-primary-500 transition-colors">
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Download Support Tool</h3>
              <p className="text-gray-600 text-sm mb-4">
                Download onze remote support tool voor directe hulp
              </p>
              <a
                href="https://get.teamviewer.com/workflo-support"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-600 hover:text-primary-700 font-medium text-sm flex items-center gap-2"
              >
                Download nu
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6 border-2 border-transparent hover:border-primary-500 transition-colors">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Bel Direct</h3>
              <p className="text-gray-600 text-sm mb-4">
                Voor urgente zaken kun je ons direct bereiken
              </p>
              <a href="tel:0203080465" className="text-primary-600 hover:text-primary-700 font-medium text-sm">
                020-30 80 465
              </a>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6 border-2 border-transparent hover:border-primary-500 transition-colors">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Kennisbank</h3>
              <p className="text-gray-600 text-sm mb-4">
                Vind antwoorden op veelgestelde vragen
              </p>
              <Link href="/contact" className="text-primary-600 hover:text-primary-700 font-medium text-sm">
                Bekijk FAQ
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Servicedesk iframe Section */}
      <section className="pb-20">
        <div className="container mx-auto container-padding">
          <div className="max-w-6xl mx-auto">
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden relative">
              {/* Loading State */}
              {isLoading && (
                <div className="absolute inset-0 bg-white z-10 flex flex-col items-center justify-center">
                  <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-primary-500 mb-4"></div>
                  <p className="text-gray-600">Servicedesk wordt geladen...</p>
                </div>
              )}

              {/* Servicedesk iframe */}
              <iframe
                src="https://servicedesk.workflo.it/portal"
                width="100%"
                height="800"
                style={{ border: 0, minHeight: '800px' }}
                onLoad={() => setIsLoading(false)}
                title="Workflo Servicedesk Portal"
                className="w-full"
              />
            </div>

            {/* Additional Info */}
            <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-gray-50 rounded-xl p-8">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Hoe werkt het?</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="text-primary-500 font-bold">1</span>
                    <span className="text-gray-600">Maak een account aan of log in met je bestaande gegevens</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary-500 font-bold">2</span>
                    <span className="text-gray-600">Maak een nieuw ticket aan met een duidelijke omschrijving</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary-500 font-bold">3</span>
                    <span className="text-gray-600">Onze engineers pakken je ticket op en houden je op de hoogte</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary-500 font-bold">4</span>
                    <span className="text-gray-600">Je ontvangt een melding zodra het probleem is opgelost</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gray-50 rounded-xl p-8">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Response tijden</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-700">Kritieke issues</span>
                    <span className="font-semibold text-red-600">&lt; 1 uur</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-700">Hoge prioriteit</span>
                    <span className="font-semibold text-orange-600">&lt; 2 uur</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-700">Normale prioriteit</span>
                    <span className="font-semibold text-yellow-600">&lt; 4 uur</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-700">Lage prioriteit</span>
                    <span className="font-semibold text-green-600">&lt; 8 uur</span>
                  </div>
                </div>
                <p className="text-sm text-gray-500 mt-4">
                  * Binnen kantooruren (ma-vr 09:00-17:30)
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}