'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { PhoneIcon, EnvelopeIcon, MapPinIcon } from '@heroicons/react/24/outline'
// import DangerTape from '@/components/DangerTape' // REPLACED
import StaticDangerTape from '@/components/StaticDangerTape'

export default function StatusPage() {
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
        <section className="py-12 bg-gradient-to-br from-primary-50 to-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                System Status
              </h1>
              <p className="text-xl lg:text-2xl text-gray-600">
                Real-time status van onze diensten en systemen
              </p>
            </div>
          </div>
        </section>

        {/* Status Overview */}
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-4 h-4 bg-green-500 rounded-full animate-pulse"></div>
                  <h2 className="text-2xl font-bold text-gray-900">Alle Systemen Operationeel</h2>
                </div>
                <p className="text-gray-600 mb-6">
                  Alle onze diensten en systemen functioneren normaal. Voor de meest actuele status informatie, 
                  bekijk het live status dashboard hieronder.
                </p>
                
                {/* Quick Status Cards */}
                <div className="grid md:grid-cols-3 gap-4 mb-8">
                  <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                      <h3 className="font-semibold text-green-800">Website & API</h3>
                    </div>
                    <p className="text-sm text-green-700">Operationeel</p>
                  </div>
                  
                  <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                      <h3 className="font-semibold text-green-800">Email Services</h3>
                    </div>
                    <p className="text-sm text-green-700">Operationeel</p>
                  </div>
                  
                  <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                      <h3 className="font-semibold text-green-800">Monitoring</h3>
                    </div>
                    <p className="text-sm text-green-700">Operationeel</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Live Status Dashboard */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Live Status Dashboard
                </h2>
                <p className="text-gray-600 max-w-2xl mx-auto">
                  Dit dashboard wordt elke 30 seconden bijgewerkt en toont de real-time status van al onze systemen en diensten.
                </p>
              </div>
              
              {/* Status Iframe */}
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
                <div className="bg-gray-50 px-6 py-4 border-b">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold text-gray-900">
                      Workflo System Status
                    </h3>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                      Live
                    </div>
                  </div>
                </div>
                
                <div className="relative">
                  <iframe
                    src="https://uptime.workflo.it/status/workflo"
                    width="100%"
                    height="600"
                    className="w-full border-0"
                    title="Workflo Status Dashboard"
                    loading="lazy"
                  />
                  
                  {/* Fallback content */}
                  <div className="absolute inset-0 bg-gray-100 flex items-center justify-center text-gray-600 pointer-events-none opacity-0 transition-opacity">
                    <div className="text-center">
                      <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary-600 mx-auto mb-4"></div>
                      <p>Status dashboard wordt geladen...</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* External Link */}
              <div className="text-center mt-6">
                <a 
                  href="https://uptime.workflo.it/status/workflo" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-primary-600 text-black rounded-lg font-semibold hover:bg-primary-700 transition-colors"
                >
                  Open Volledig Dashboard
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Historical Uptime */}
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                Uptime Statistieken
              </h2>
              
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white rounded-xl p-6 text-center shadow-lg">
                  <div className="text-3xl font-bold text-green-600 mb-2">99.97%</div>
                  <div className="text-gray-600">30 Dagen Uptime</div>
                </div>
                
                <div className="bg-white rounded-xl p-6 text-center shadow-lg">
                  <div className="text-3xl font-bold text-green-600 mb-2">99.98%</div>
                  <div className="text-gray-600">90 Dagen Uptime</div>
                </div>
                
                <div className="bg-white rounded-xl p-6 text-center shadow-lg">
                  <div className="text-3xl font-bold text-green-600 mb-2">99.95%</div>
                  <div className="text-gray-600">1 Jaar Uptime</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact for Issues */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Problemen Melden
              </h2>
              <p className="text-gray-600 mb-6">
                Ondervindt u problemen die niet op deze status pagina staan? 
                Neem direct contact met ons op.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="tel:020-3080465" 
                  className="inline-flex items-center gap-2 px-6 py-3 bg-red-600 text-white rounded-lg font-semibold hover:bg-red-700 transition-colors"
                >
                  <PhoneIcon className="w-5 h-5" />
                  020 308 0465
                </a>
                <Link 
                  href="/contact" 
                  className="inline-flex items-center gap-2 px-6 py-3 bg-gray-600 text-white rounded-lg font-semibold hover:bg-gray-700 transition-colors"
                >
                  <EnvelopeIcon className="w-5 h-5" />
                  Contact Formulier
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
            </div>

            <div>
              <h3 className="font-bold text-lg mb-4">Diensten</h3>
              <ul className="space-y-2">
                <li><Link href="/diensten" className="text-gray-400 hover:text-primary-600">Managed IT</Link></li>
                <li><Link href="/diensten" className="text-gray-400 hover:text-primary-600">Cloud Services</Link></li>
                <li><Link href="/diensten" className="text-gray-400 hover:text-primary-600">Cybersecurity</Link></li>
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
              <h3 className="font-bold text-lg mb-4">Status</h3>
              <ul className="space-y-2">
                <li><Link href="/status" className="text-primary-600 font-semibold">System Status</Link></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 text-center">
            <p className="text-gray-400 text-sm">
              &copy; 2025 Workflo B.V. All rights reserved.
            </p>
          </div>
        </div>
      </footer>

      {/* Danger Tape Bottom */}
      <StaticDangerTape />
    </div>
  )
}