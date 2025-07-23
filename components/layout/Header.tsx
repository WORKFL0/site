'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { useLanguage } from '@/contexts/LanguageContext'
import LanguageSwitcher from '@/components/ui/LanguageSwitcher'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { t } = useLanguage()

  const menuItems = [
    { name: t.nav.services, href: '/diensten' },
    { name: t.nav.expertise, href: '/expertise' },
    { name: t.nav.about, href: '/about' },
    { name: t.nav.contact, href: '/contact' },
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

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-3">
            <LanguageSwitcher />
            <Link
              href="/shop"
              className="px-4 py-2.5 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors font-medium flex items-center gap-2"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              {t.nav.store}
            </Link>
            <a
              href="https://get.teamviewer.com/workflo-support"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium flex items-center gap-2"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M10 2v2.26l2 1.33V2h10v10h-4.59l1.33 2H22V2H10zM2 4v16h16v-7.59l2-1.33V22H0V4h2zm7.59 4l-2-2H4v10h10v-3.59l-2-2v1.59H8V8zM10 8.91V12h3.09L10 8.91z"/>
              </svg>
              {t.nav.support}
            </a>
            <Link
              href="/tevredenheidscheck"
              className="px-6 py-3 bg-primary-500 text-white rounded-lg hover:bg-primary-600 transition-colors font-medium"
            >
              {t.nav.startHealthCheck}
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
            <div className="flex flex-col gap-3 mt-4">
              <div className="flex justify-center mb-2">
                <LanguageSwitcher />
              </div>
              <a
                href="https://get.teamviewer.com/workflo-support"
                target="_blank"
                rel="noopener noreferrer"
                className="block px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium text-center flex items-center justify-center gap-2"
                onClick={() => setIsMenuOpen(false)}
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M10 2v2.26l2 1.33V2h10v10h-4.59l1.33 2H22V2H10zM2 4v16h16v-7.59l2-1.33V22H0V4h2zm7.59 4l-2-2H4v10h10v-3.59l-2-2v1.59H8V8zM10 8.91V12h3.09L10 8.91z"/>
                </svg>
                {t.nav.support}
              </a>
              <Link
                href="/tevredenheidscheck"
                className="block px-6 py-3 bg-primary-500 text-white rounded-lg hover:bg-primary-600 transition-colors font-medium text-center"
                onClick={() => setIsMenuOpen(false)}
              >
                {t.nav.startHealthCheck}
              </Link>
            </div>
          </motion.div>
        )}
      </nav>
    </header>
  )
}

export default Header