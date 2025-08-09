'use client'

import Link from 'next/link'

// STATIC VERSION - No dynamic imports, no crashes
export default function StaticFooter() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Workflo</h3>
            <p className="text-gray-400">De IT-Partner die Écht Levert</p>
          </div>
          <div>
            <h4 className="font-bold mb-3">Diensten</h4>
            <ul className="space-y-2 text-gray-400">
              <li><Link href="/diensten" className="hover:text-yellow-400">Alle Diensten</Link></li>
              <li><Link href="/diensten/managed-it" className="hover:text-yellow-400">Managed IT</Link></li>
              <li><Link href="/diensten/cybersecurity" className="hover:text-yellow-400">Cybersecurity</Link></li>
              <li><Link href="/diensten/cloud" className="hover:text-yellow-400">Cloud Solutions</Link></li>
              <li><Link href="/diensten/connectivity" className="hover:text-yellow-400">Connectivity</Link></li>
              <li><Link href="/diensten/audio-visueel" className="hover:text-yellow-400">Audio-Visueel</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-3">Bedrijf</h4>
            <ul className="space-y-2 text-gray-400">
              <li><Link href="/over-ons" className="hover:text-yellow-400">Over Ons</Link></li>
              <li><Link href="/case-studies" className="hover:text-yellow-400">Case Studies</Link></li>
              <li><Link href="/werken-bij" className="hover:text-yellow-400">Werken Bij</Link></li>
              <li><Link href="/contact" className="hover:text-yellow-400">Contact</Link></li>
              <li>
                <a href="https://uptime.workflo.it/status/workflo" 
                   target="_blank" 
                   rel="noopener noreferrer"
                   className="hover:text-yellow-400 inline-flex items-center gap-1">
                  Uptime Status
                  <span className="inline-block w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-3">Contact & Legal</h4>
            <ul className="space-y-2 text-gray-400">
              <li>📞 020-30 80 465</li>
              <li>✉️ info@workflo.it</li>
              <li>📍 Koivistokade 3, Amsterdam</li>
              <li className="pt-2 border-t border-gray-700">
                <Link href="/privacy" className="hover:text-yellow-400 text-sm">Privacy Policy</Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-yellow-400 text-sm">Algemene Voorwaarden</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2025 Workflo B.V. Alle rechten voorbehouden.</p>
        </div>
      </div>
      
      {/* Legal Information - Outside main footer */}
      <div className="bg-black py-4">
        <div className="container mx-auto px-4">
          <div className="text-center text-gray-500 text-sm">
            <p>
              Workflo B.V. | KVK: 64929051 | BTW: NL855931384B01 | 
              IBAN: NL86 INGB 0007 2853 15 | BIC: INGBNL2A
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}