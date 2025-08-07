'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function Home() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900 mx-auto"></div>
          <p className="mt-4">Loading...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen">
      {/* Simple Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Link href="/" className="text-2xl font-bold text-primary-600">
                Workflo
              </Link>
            </div>
            <nav className="hidden md:flex space-x-8">
              <Link href="/diensten" className="text-gray-600 hover:text-gray-900">
                Diensten
              </Link>
              <Link href="/over-ons" className="text-gray-600 hover:text-gray-900">
                Over Ons
              </Link>
              <Link href="/contact" className="text-gray-600 hover:text-gray-900">
                Contact
              </Link>
            </nav>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-50 to-white py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                Your IT Should Drive Growth, Not Hold You Back
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 mb-8">
                Amsterdam's SMEs trust Workflo to transform their IT from a cost center into a growth engine. 
                Reduce IT costs by 35% while increasing productivity.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  href="/tevredenheidscheck" 
                  className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors"
                >
                  Start Tevredenheidscheck
                </Link>
                <Link 
                  href="/case-studies" 
                  className="inline-flex items-center justify-center px-6 py-3 border border-gray-300 text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 transition-colors"
                >
                  Bekijk Case Studies
                </Link>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
              <div className="text-center md:text-left">
                <div className="text-3xl font-bold text-blue-600">35%</div>
                <div className="text-gray-600">Kostenbesparing</div>
              </div>
              <div className="text-center md:text-left">
                <div className="text-3xl font-bold text-blue-600">95%</div>
                <div className="text-gray-600">Uptime Garantie</div>
              </div>
              <div className="text-center md:text-left">
                <div className="text-3xl font-bold text-blue-600">24/7</div>
                <div className="text-gray-600">Support</div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
              Onze Diensten
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-4">Managed IT Services</h3>
                <p className="text-gray-600">
                  Complete IT-ondersteuning voor uw bedrijf, 24/7 monitoring en proactief beheer.
                </p>
              </div>
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-4">Cloud Solutions</h3>
                <p className="text-gray-600">
                  Veilige en schaalbare cloud-infrastructuur, perfect voor groeiende bedrijven.
                </p>
              </div>
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-4">Cybersecurity</h3>
                <p className="text-gray-600">
                  Bescherm uw bedrijf tegen digitale dreigingen met onze security-oplossingen.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-blue-50">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Klaar om uw IT te transformeren?
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Ontdek hoe Workflo uw IT-kosten kan verlagen en productiviteit kan verhogen.
            </p>
            <Link 
              href="/contact" 
              className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-lg font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors"
            >
              Neem Contact Op
            </Link>
          </div>
        </section>
      </main>

      {/* Simple Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p className="text-lg font-semibold">Workflo IT Services</p>
              <p className="text-gray-400">Amsterdam, Netherlands</p>
            </div>
            <div className="flex space-x-6">
              <Link href="/privacy" className="text-gray-400 hover:text-white">
                Privacy
              </Link>
              <Link href="/terms" className="text-gray-400 hover:text-white">
                Terms
              </Link>
              <Link href="/contact" className="text-gray-400 hover:text-white">
                Contact
              </Link>
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