'use client'

import Link from 'next/link'
import Image from 'next/image'
import { PhoneIcon, EnvelopeIcon, MapPinIcon } from '@heroicons/react/24/outline'
// import DangerTape from '@/components/DangerTape' // REPLACED
import StaticDangerTape from '@/components/StaticDangerTape'
import NetworkSpeedTest from '@/components/NetworkSpeedTest'

export default function InternetTestPage() {
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
                Internet Snelheidstest
              </h1>
              <p className="text-xl lg:text-2xl text-gray-600 mb-8">
                Test uw internetverbinding en ontdek mogelijkheden voor verbetering
              </p>
              <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                Gebruik onze gratis snelheidstest om te zien hoe uw internetverbinding presteert en 
                ontdek hoe Workflo u kan helpen uw netwerk te optimaliseren.
              </p>
            </div>
          </div>
        </section>

        {/* Speed Test Component */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <NetworkSpeedTest className="mb-12" />
            </div>
          </div>
        </section>

        {/* Why Test Speed Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Waarom Uw Internetsnelheid Belangrijk Is
                </h2>
                <p className="text-xl text-gray-600">
                  Een stabiele en snelle internetverbinding is cruciaal voor uw bedrijfsvoering
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                <div className="bg-white rounded-xl p-6 shadow-lg">
                  <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
                    <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    Productiviteit
                  </h3>
                  <p className="text-gray-600">
                    Langzame internetsnelheden kunnen de productiviteit van uw team drastisch verminderen. 
                    Video calls, cloud applicaties en file transfers hebben allemaal stabiele snelheid nodig.
                  </p>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-lg">
                  <div className="w-16 h-16 bg-green-100 rounded-xl flex items-center justify-center mb-4">
                    <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    Cloud Services
                  </h3>
                  <p className="text-gray-600">
                    Microsoft 365, Google Workspace en andere cloud diensten vereisen betrouwbare 
                    internet verbindingen voor optimale prestaties.
                  </p>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-lg">
                  <div className="w-16 h-16 bg-purple-100 rounded-xl flex items-center justify-center mb-4">
                    <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    Backup & Recovery
                  </h3>
                  <p className="text-gray-600">
                    Automatische backups naar de cloud hebben stabiele upload snelheden nodig om 
                    uw data veilig te houden zonder uw netwerk te overbelasten.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Speed Recommendations */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Aanbevolen Snelheden voor Bedrijven
                </h2>
                <p className="text-xl text-gray-600">
                  Wat hebt u nodig voor verschillende bedrijfsactiviteiten?
                </p>
              </div>

              <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Activiteit</th>
                        <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900">Minimum</th>
                        <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900">Aanbevolen</th>
                        <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900">Optimaal</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      <tr>
                        <td className="px-6 py-4 text-sm text-gray-900">Email & Web browsing</td>
                        <td className="px-6 py-4 text-sm text-gray-600 text-center">1 Mbps</td>
                        <td className="px-6 py-4 text-sm text-gray-600 text-center">5 Mbps</td>
                        <td className="px-6 py-4 text-sm text-green-600 text-center font-semibold">10+ Mbps</td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 text-sm text-gray-900">Video conferencing (HD)</td>
                        <td className="px-6 py-4 text-sm text-gray-600 text-center">3 Mbps</td>
                        <td className="px-6 py-4 text-sm text-gray-600 text-center">10 Mbps</td>
                        <td className="px-6 py-4 text-sm text-green-600 text-center font-semibold">25+ Mbps</td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 text-sm text-gray-900">Cloud applications</td>
                        <td className="px-6 py-4 text-sm text-gray-600 text-center">10 Mbps</td>
                        <td className="px-6 py-4 text-sm text-gray-600 text-center">25 Mbps</td>
                        <td className="px-6 py-4 text-sm text-green-600 text-center font-semibold">50+ Mbps</td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 text-sm text-gray-900">File sharing & backup</td>
                        <td className="px-6 py-4 text-sm text-gray-600 text-center">15 Mbps</td>
                        <td className="px-6 py-4 text-sm text-gray-600 text-center">50 Mbps</td>
                        <td className="px-6 py-4 text-sm text-green-600 text-center font-semibold">100+ Mbps</td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 text-sm text-gray-900">Multiple users (per persoon)</td>
                        <td className="px-6 py-4 text-sm text-gray-600 text-center">5 Mbps</td>
                        <td className="px-6 py-4 text-sm text-gray-600 text-center">15 Mbps</td>
                        <td className="px-6 py-4 text-sm text-green-600 text-center font-semibold">25+ Mbps</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 bg-black text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6">
                Hulp Nodig Met Uw Internetverbinding?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Workflo helpt bedrijven in Amsterdam met netwerkoptimalisatie, 
                provider selectie en connectiviteitsoplossingen.
              </p>
              
              <div className="grid md:grid-cols-2 gap-8 mb-12">
                <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6">
                  <h3 className="text-xl font-bold mb-4 text-yellow-400">Wat Wij Bieden:</h3>
                  <ul className="text-left space-y-2">
                    <li className="flex items-center gap-2">
                      <span className="text-yellow-400">✓</span>
                      Netwerkanalyse en optimalisatie
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-yellow-400">✓</span>
                      Provider vergelijking en advies
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-yellow-400">✓</span>
                      Redundante verbindingen setup
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-yellow-400">✓</span>
                      24/7 monitoring en support
                    </li>
                  </ul>
                </div>
                
                <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6">
                  <h3 className="text-xl font-bold mb-4 text-yellow-400">Veelvoorkomende Issues:</h3>
                  <ul className="text-left space-y-2">
                    <li className="flex items-center gap-2">
                      <span className="text-red-400">×</span>
                      Langzame cloud synchronisatie
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-red-400">×</span>
                      Video calls van slechte kwaliteit
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-red-400">×</span>
                      Trage file uploads/downloads
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-red-400">×</span>
                      Frequent verbindingsonderbrekingen
                    </li>
                  </ul>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  href="/contact" 
                  className="bg-yellow-400 text-black px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-500 transition-all shadow-lg"
                >
                  Gratis Netwerkanalyse
                </Link>
                <a 
                  href="tel:020-3080465" 
                  className="bg-white text-black px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-all shadow-lg"
                >
                  Bel 020 308 0465
                </a>
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
              <h3 className="font-bold text-lg mb-4">Diensten</h3>
              <ul className="space-y-2">
                <li><Link href="/diensten" className="text-gray-400 hover:text-primary-600">Managed IT</Link></li>
                <li><Link href="/diensten" className="text-gray-400 hover:text-primary-600">Connectivity</Link></li>
                <li><Link href="/diensten" className="text-gray-400 hover:text-primary-600">Cybersecurity</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-lg mb-4">Tools</h3>
              <ul className="space-y-2">
                <li><Link href="/internet-test" className="text-primary-600 font-semibold">Internet Snelheidstest</Link></li>
                <li><Link href="/tevredenheidscheck" className="text-gray-400 hover:text-primary-600">IT Health Check</Link></li>
                <li><Link href="/status" className="text-gray-400 hover:text-primary-600">System Status</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-lg mb-4">Contact</h3>
              <ul className="space-y-2">
                <li><Link href="/over-ons" className="text-gray-400 hover:text-primary-600">Over Ons</Link></li>
                <li><Link href="/contact" className="text-gray-400 hover:text-primary-600">Contact</Link></li>
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

      {/* Danger Tape Bottom */}
      <StaticDangerTape />
    </div>
  )
}