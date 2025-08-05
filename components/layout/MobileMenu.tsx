'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false)

  const menuItems = [
    { href: '/diensten', label: 'Diensten' },
    { href: '/over-ons', label: 'Over Ons' },
    { href: '/case-studies', label: 'Case Studies' },
    { href: '/contact', label: 'Contact' },
  ]

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden fixed top-6 right-4 z-50 bg-black rounded-lg p-3"
        aria-label="Toggle menu"
      >
        <div className="w-6 h-5 relative flex flex-col justify-between">
          <span className={`block h-0.5 w-full bg-yellow-400 transform transition-all ${isOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
          <span className={`block h-0.5 w-full bg-yellow-400 transition-all ${isOpen ? 'opacity-0' : ''}`}></span>
          <span className={`block h-0.5 w-full bg-yellow-400 transform transition-all ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
        </div>
      </button>

      {/* Mobile Menu Overlay */}
      <div className={`md:hidden fixed inset-0 bg-black/95 backdrop-blur-md z-40 transition-all duration-300 ${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
        <div className="flex flex-col items-center justify-center h-full px-8">
          <div className="w-full max-w-sm">
            {/* Logo */}
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-3">
                <div className="w-16 h-16 bg-yellow-400 rounded-lg flex items-center justify-center">
                  <span className="text-black font-bold text-2xl">W</span>
                </div>
                <div className="text-left">
                  <h2 className="text-3xl font-black text-white">WORKFLO</h2>
                  <p className="text-xs text-gray-400">Premium IT Solutions</p>
                </div>
              </div>
            </div>

            {/* Menu Items */}
            <nav className="space-y-6">
              {menuItems.map((item, index) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="block text-2xl font-bold text-white hover:text-yellow-400 transition-colors text-center"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {item.label}
                </Link>
              ))}
              
              <div className="pt-6 border-t border-gray-700">
                <Link
                  href="/tevredenheidscheck"
                  onClick={() => setIsOpen(false)}
                  className="block bg-yellow-400 text-black px-8 py-4 rounded-full font-bold text-lg hover:bg-yellow-500 transition-all text-center mb-4"
                >
                  IT Health Check →
                </Link>
                
                <a
                  href="tel:020-3080465"
                  className="block bg-white text-black px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-all text-center"
                >
                  📞 020-30 80 465
                </a>
              </div>
            </nav>

            {/* Contact Info */}
            <div className="mt-12 text-center text-gray-400">
              <p className="mb-2">Koivistokade 3, 1013AC Amsterdam</p>
              <a href="mailto:info@workflo.it" className="text-yellow-400 hover:text-yellow-500">
                info@workflo.it
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}