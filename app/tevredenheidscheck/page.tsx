'use client'

import FlowchartQuestionnaire from '@/components/questionnaire/FlowchartQuestionnaire'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

export default function TevredenheidscheckPage() {
  return (
    <>
      {/* Inline Header */}
      <header className="fixed top-0 left-0 w-full bg-white/95 backdrop-blur-sm border-b border-gray-100 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center">
              <Image
                src="/images/logos/workflo-logo-yellow.png"
                alt="Workflo"
                width={40}
                height={40}
                className="rounded-lg"
              />
            </Link>
            <nav className="hidden md:flex items-center space-x-8">
              <Link href="/" className="text-gray-600 hover:text-gray-900 transition-colors">
                Home
              </Link>
              <Link href="/diensten" className="text-gray-600 hover:text-gray-900 transition-colors">
                Diensten
              </Link>
              <Link href="/contact" className="text-gray-600 hover:text-gray-900 transition-colors">
                Contact
              </Link>
            </nav>
          </div>
        </div>
      </header>

      <main className="pt-20 min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
        {/* Background decoration */}
        <div className="absolute inset-0 bg-grid-gray-100 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-primary-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        </div>

        <div className="relative z-10 py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="max-w-4xl mx-auto"
            >
              <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
                {/* Header with Workflo branding colors */}
                <div className="bg-gradient-to-r from-primary-500 to-primary-600 p-8 sm:p-10 text-center text-white">
                  <motion.h1
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4"
                  >
                    IT-Dienstverlener Check
                  </motion.h1>
                  <motion.p
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="text-lg sm:text-xl opacity-90"
                  >
                    Ontdek in 2 minuten of uw IT-partner écht voor u zorgt
                  </motion.p>
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4 }}
                    className="mt-4 text-sm"
                  >
                    Eerlijk advies • Geen verplichtingen • Direct resultaat
                  </motion.div>
                </div>

                {/* Questionnaire Content */}
                <div className="p-8 sm:p-10 lg:p-12">
                  <FlowchartQuestionnaire />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </main>

      {/* Inline Footer */}
      <footer className="bg-gray-900 text-white">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center mb-4">
                <Image
                  src="/images/logos/workflo-logo-yellow.png"
                  alt="Workflo"
                  width={32}
                  height={32}
                  className="rounded-lg"
                />
              </div>
              <p className="text-gray-400 mb-4 max-w-md">
                Wij zorgen ervoor dat uw IT altijd werkt, zodat u zich kunt concentreren op waar u goed in bent.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Diensten</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/diensten" className="hover:text-white transition-colors">IT Beheer</Link></li>
                <li><Link href="/diensten" className="hover:text-white transition-colors">Cloud Oplossingen</Link></li>
                <li><Link href="/diensten" className="hover:text-white transition-colors">Cybersecurity</Link></li>
                <li><Link href="/diensten" className="hover:text-white transition-colors">IT Advies</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-gray-400">
                <li>+31 20 123 4567</li>
                <li>info@workflo.nl</li>
                <li>Amsterdam, Nederland</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 Workflo. Alle rechten voorbehouden.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="/privacy" className="text-gray-400 hover:text-white text-sm transition-colors">
                Privacy
              </Link>
              <Link href="/algemene-voorwaarden" className="text-gray-400 hover:text-white text-sm transition-colors">
                Algemene Voorwaarden
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}