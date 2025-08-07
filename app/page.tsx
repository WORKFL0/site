'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import SafeErrorBoundary from '@/components/SafeErrorBoundary'

function HomeContent() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <>
      <Header />
      
      <main className="flex min-h-screen flex-col">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-primary-50 to-white pt-20">
          <div className="container mx-auto px-4 py-16">
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
                  className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-black bg-primary-600 hover:bg-primary-700 transition-colors"
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
                <div className="text-3xl font-bold text-primary-600">35%</div>
                <div className="text-gray-600">Kostenbesparing</div>
              </div>
              <div className="text-center md:text-left">
                <div className="text-3xl font-bold text-primary-600">95%</div>
                <div className="text-gray-600">Uptime Garantie</div>
              </div>
              <div className="text-center md:text-left">
                <div className="text-3xl font-bold text-primary-600">24/7</div>
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
                <p className="text-gray-600">Complete IT-ondersteuning voor uw bedrijf, 24/7 monitoring en proactief beheer.</p>
              </div>
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-4">Cloud Solutions</h3>
                <p className="text-gray-600">Veilige en schaalbare cloud-infrastructuur, perfect voor groeiende bedrijven.</p>
              </div>
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-4">Cybersecurity</h3>
                <p className="text-gray-600">Bescherm uw bedrijf tegen digitale dreigingen met onze security-oplossingen.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-primary-50">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Klaar om uw IT te transformeren?
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Ontdek hoe Workflo uw IT-kosten kan verlagen en productiviteit kan verhogen.
            </p>
            <Link 
              href="/contact" 
              className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-lg font-medium rounded-md text-black bg-primary-600 hover:bg-primary-700 transition-colors"
            >
              Neem Contact Op
            </Link>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  )
}

export default function Home() {
  return (
    <SafeErrorBoundary componentName="HomePage">
      <HomeContent />
    </SafeErrorBoundary>
  )
}