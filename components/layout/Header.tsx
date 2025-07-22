'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const menuItems = [
    { name: 'Diensten', href: '/diensten' },
    { name: 'Over ons', href: '/about' },
    { name: 'IT Check', href: '/tevredenheidscheck' },
    { name: 'Contact', href: '/contact' },
  ]

  return (
    <header className="fixed w-full bg-white/95 backdrop-blur-sm shadow-sm z-50">
      <nav className="container mx-auto container-padding">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 flex-shrink-0">
            <div className="relative w-10 h-10 sm:w-12 sm:h-12 transition-all">
              <div className="absolute inset-0 bg-primary-500 rounded-lg"></div>
              <span className="absolute inset-0 flex items-center justify-center text-white font-bold text-lg sm:text-xl">W</span>
            </div>
            <span className="text-lg sm:text-xl font-bold text-gray-900 hidden sm:block">Workflo</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-700 hover:text-primary-500 transition-colors font-medium"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex items-center space-x-4">
            <Link
              href="/tevredenheidscheck"
              className="px-6 py-3 bg-primary-500 text-white rounded-lg hover:bg-primary-600 transition-colors font-medium"
            >
              Start IT Health Check
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2"
            aria-label="Toggle menu"
          >
            <div className="w-6 h-5 relative flex flex-col justify-between">
              <span className={`block h-0.5 w-full bg-gray-900 transition-all ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
              <span className={`block h-0.5 w-full bg-gray-900 transition-all ${isMenuOpen ? 'opacity-0' : ''}`} />
              <span className={`block h-0.5 w-full bg-gray-900 transition-all ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden py-4 border-t"
          >
            {menuItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block py-3 text-gray-700 hover:text-primary-500 transition-colors font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <Link
              href="/tevredenheidscheck"
              className="block mt-4 px-6 py-3 bg-primary-500 text-white rounded-lg hover:bg-primary-600 transition-colors font-medium text-center"
              onClick={() => setIsMenuOpen(false)}
            >
              Start IT Health Check
            </Link>
          </motion.div>
        )}
      </nav>
    </header>
  )
}

export default Header