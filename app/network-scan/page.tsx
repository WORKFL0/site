'use client'

import StaticHeader from '@/components/StaticHeader'
import StaticFooter from '@/components/StaticFooter'
import SafeHubSpotForm from '@/components/SafeHubSpotForm'
import { ShieldCheckIcon, MagnifyingGlassIcon, DocumentCheckIcon, ArrowRightIcon } from '@heroicons/react/24/outline'

export default function NetworkScanPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <StaticHeader />
      
      <main>
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-br from-yellow-50 to-orange-50">
          <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-yellow-400 via-black to-yellow-400"></div>
          <div className="container mx-auto px-4">
            <div className="text-center max-w-4xl mx-auto">
              <div className="inline-flex items-center gap-2 bg-green-100 text-green-800 px-4 py-2 rounded-full mb-6">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                </span>
                <span className="font-medium">Gratis Aanbod - Beperkte Tijd</span>
              </div>
              
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
                Gratis Network Security Scan
                <span className="block text-yellow-600 mt-2">Voor Amsterdamse Bedrijven</span>
              </h1>
              
              <p className="text-xl text-gray-600 mb-8">
                Ontdek kwetsbaarheden in uw netwerk voordat hackers dat doen. 
                Ontvang een uitgebreid rapport met concrete aanbevelingen.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <div className="flex items-center gap-2 text-gray-700">
                  <ShieldCheckIcon className="w-5 h-5 text-green-600" />
                  <span>100% Gratis</span>
                </div>
                <div className="flex items-center gap-2 text-gray-700">
                  <MagnifyingGlassIcon className="w-5 h-5 text-green-600" />
                  <span>Geen Verplichtingen</span>
                </div>
                <div className="flex items-center gap-2 text-gray-700">
                  <DocumentCheckIcon className="w-5 h-5 text-green-600" />
                  <span>Professioneel Rapport</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* What's Included */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
              Wat Wordt Er Gescand?
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-2xl">🔍</span>
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">Externe Scan</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Open poorten detectie</li>
                  <li>• Firewall configuratie check</li>
                  <li>• SSL/TLS certificaat analyse</li>
                  <li>• DNS security assessment</li>
                  <li>• Publieke IP vulnerability scan</li>
                </ul>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-2xl">🛡️</span>
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">Security Check</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Patch management status</li>
                  <li>• Antivirus/EDR coverage</li>
                  <li>• Backup verificatie</li>
                  <li>• MFA implementatie check</li>
                  <li>• Admin privileges audit</li>
                </ul>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-2xl">📊</span>
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">Compliance Review</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• GDPR/AVG compliance check</li>
                  <li>• Password policy review</li>
                  <li>• Data encryption status</li>
                  <li>• Access control assessment</li>
                  <li>• Incident response readiness</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
              Hoe Werkt Het?
            </h2>
            
            <div className="max-w-3xl mx-auto">
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-yellow-400 rounded-full flex items-center justify-center flex-shrink-0 font-bold">
                    1
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-gray-900">Aanvraag Indienen</h3>
                    <p className="text-gray-600">
                      Vul het formulier in met uw bedrijfsgegevens. We nemen binnen 24 uur contact op.
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-yellow-400 rounded-full flex items-center justify-center flex-shrink-0 font-bold">
                    2
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-gray-900">Remote Scan (30 min)</h3>
                    <p className="text-gray-600">
                      Onze security experts voeren een non-invasieve scan uit van uw netwerk. 
                      Geen verstoring van uw bedrijfsprocessen.
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-yellow-400 rounded-full flex items-center justify-center flex-shrink-0 font-bold">
                    3
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-gray-900">Rapport & Adviesgesprek</h3>
                    <p className="text-gray-600">
                      Binnen 48 uur ontvangt u een uitgebreid rapport. We bespreken de resultaten 
                      in een gratis adviesgesprek van 30 minuten.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Form Section */}
        <section id="form" className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-8 text-gray-900">
                Vraag Uw Gratis Network Scan Aan
              </h2>
              
              <SafeHubSpotForm />
              
              <div className="mt-8 text-center">
                <p className="text-gray-600 mb-4">
                  Liever direct contact?
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a href="tel:0203080465" className="inline-flex items-center justify-center bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800">
                    📞 020-30 80 465
                  </a>
                  <a href="mailto:security@workflo.it" className="inline-flex items-center justify-center bg-yellow-400 text-black px-6 py-3 rounded-lg hover:bg-yellow-500">
                    ✉️ security@workflo.it
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <StaticFooter />
    </div>
  )
}