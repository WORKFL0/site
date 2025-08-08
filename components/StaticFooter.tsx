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
              <li><Link href="/diensten/managed-it" className="hover:text-yellow-400">Managed IT</Link></li>
              <li><Link href="/diensten/cybersecurity" className="hover:text-yellow-400">Cybersecurity</Link></li>
              <li><Link href="/diensten/cloud" className="hover:text-yellow-400">Cloud</Link></li>
              <li><Link href="/diensten/connectivity" className="hover:text-yellow-400">Connectivity</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-3">Contact</h4>
            <ul className="space-y-2 text-gray-400">
              <li>020-30 80 465</li>
              <li>info@workflo.it</li>
              <li>Amsterdam, Nederland</li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-3">Legal</h4>
            <ul className="space-y-2 text-gray-400">
              <li><Link href="/privacy" className="hover:text-yellow-400">Privacy Policy</Link></li>
              <li><Link href="/terms" className="hover:text-yellow-400">Terms</Link></li>
              <li><Link href="/cookies" className="hover:text-yellow-400">Cookie Policy</Link></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2025 Workflo B.V. Alle rechten voorbehouden.</p>
        </div>
      </div>
    </footer>
  )
}