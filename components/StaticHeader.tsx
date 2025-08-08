'use client'

import Link from 'next/link'
import { PhoneIcon } from '@heroicons/react/24/outline'

// STATIC VERSION - No dynamic imports, no crashes
export default function StaticHeader() {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          <Link href="/" className="text-2xl font-bold text-gray-900">
            Workflo
          </Link>
          <nav className="hidden md:flex space-x-8">
            <Link href="/diensten" className="text-gray-700 hover:text-yellow-600 transition-colors">
              Diensten
            </Link>
            <Link href="/over-ons" className="text-gray-700 hover:text-yellow-600 transition-colors">
              Over Ons
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-yellow-600 transition-colors">
              Contact
            </Link>
          </nav>
          <Link href="/contact" className="md:hidden text-gray-700">
            <PhoneIcon className="w-6 h-6" />
          </Link>
        </div>
      </div>
    </header>
  )
}