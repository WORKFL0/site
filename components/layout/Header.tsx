'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { useLanguage } from '@/context/LanguageContext'
import LanguageSwitcher from '@/components/LanguageSwitcher'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { t } = useLanguage()

  const menuItems = [
    { name: t('nav.services'), href: '/diensten' },
    { name: t('nav.pricing'), href: '/tarieven' },
    { name: t('nav.shop'), href: '/shop' },
    { name: t('nav.support'), href: '/support' },
    { name: t('nav.about'), href: '/about' },
    { name: t('nav.contact'), href: '/contact' },
  ]

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }

    // Cleanup function to restore scroll when component unmounts
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isMenuOpen])

  const handleMenuClose = () => {
    setIsMenuOpen(false)
  }

  return (
    <header className="fixed w-full bg-white/95 backdrop-blur-sm shadow-sm z-50 border-b-2 border-warning-yellow">
      <nav className="container mx-auto container-padding">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 flex-shrink-0">
            <Image
              src="/images/logos/workflo-logo.png"
              alt="Workflo"
              width={150}
              height={45}
              className="h-10 sm:h-12 w-auto"
              priority
            />
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
          <div className="hidden md:flex items-center space-x-4">
            <LanguageSwitcher />
            <a
              href="https://get.teamviewer.com/workflo-support"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-blue-50 border border-blue-200 text-blue-700 hover:bg-blue-100 transition-all rounded-lg font-medium flex items-center gap-2"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M9 3L7 3C5.9 3 5 3.9 5 5L5 7C5 8.1 5.9 9 7 9L9 9C10.1 9 11 8.1 11 7L11 5C11 3.9 10.1 3 9 3ZM9 7L7 7L7 5L9 5L9 7ZM13 7L13 5C13 3.9 13.9 3 15 3L17 3C18.1 3 19 3.9 19 5L19 7C19 8.1 18.1 9 17 9L15 9C13.9 9 13 8.1 13 7ZM17 7L15 7L15 5L17 5L17 7ZM9 11L7 11C5.9 11 5 11.9 5 13L5 15C5 16.1 5.9 17 7 17L9 17C10.1 17 11 16.1 11 15L11 13C11 11.9 10.1 11 9 11ZM9 15L7 15L7 13L9 13L9 15ZM17 11L15 11C13.9 11 13 11.9 13 13L13 15C13 16.1 13.9 17 15 17L17 17C18.1 17 19 16.1 19 15L19 13C19 11.9 18.1 11 17 11ZM17 15L15 15L15 13L17 13L17 15ZM12 19L12 21L10 21L10 19L7 19C5.9 19 5 18.1 5 17L5 15L7 15L7 17L9 17L9 19L10 19L10 17L14 17L14 19L15 19L15 17L17 17L17 15L19 15L19 17C19 18.1 18.1 19 17 19L14 19L14 21L12 21L12 19Z"/>
              </svg>
              Remote Support
            </a>
            <Link
              href="/tevredenheidscheck"
              className="px-6 py-3 bg-warning-yellow text-black rounded-lg hover:bg-primary-600 transition-colors font-medium font-bold shadow-lg"
            >
              {t('nav.start_it_check')}
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden w-11 h-11 flex items-center justify-center rounded-lg hover:bg-gray-100 transition-colors"
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
          >
            <div className="w-6 h-5 relative flex flex-col justify-between">
              <span className={`block h-0.5 w-full bg-gray-900 transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
              <span className={`block h-0.5 w-full bg-gray-900 transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`} />
              <span className={`block h-0.5 w-full bg-gray-900 transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
            </div>
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {isMenuOpen && (
            <>
              {/* Backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 md:hidden"
                onClick={handleMenuClose}
                aria-hidden="true"
              />
              
              {/* Mobile Menu */}
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="absolute top-full left-0 w-full bg-white shadow-lg border-t z-50 md:hidden"
              >
                <div className="container mx-auto container-padding py-6 space-y-1">
                  {/* Navigation Links */}
                  {menuItems.map((item, index) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="block py-4 px-4 text-gray-700 hover:text-primary-500 hover:bg-gray-50 transition-all font-medium rounded-lg min-h-[44px] flex items-center"
                      onClick={handleMenuClose}
                      style={{
                        animationDelay: `${index * 50}ms`,
                      }}
                    >
                      {item.name}
                    </Link>
                  ))}
                  
                  {/* Divider */}
                  <div className="h-px bg-gray-200 my-4" />
                  
                  {/* CTA Buttons */}
                  <div className="space-y-3 pt-2">
                    {/* Remote Support Button */}
                    <a
                      href="https://get.teamviewer.com/workflo-support"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-3 py-4 px-4 bg-blue-50 border border-blue-200 text-blue-700 hover:bg-blue-100 transition-all rounded-lg font-medium min-h-[44px]"
                      onClick={handleMenuClose}
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M9 3L7 3C5.9 3 5 3.9 5 5L5 7C5 8.1 5.9 9 7 9L9 9C10.1 9 11 8.1 11 7L11 5C11 3.9 10.1 3 9 3ZM9 7L7 7L7 5L9 5L9 7ZM13 7L13 5C13 3.9 13.9 3 15 3L17 3C18.1 3 19 3.9 19 5L19 7C19 8.1 18.1 9 17 9L15 9C13.9 9 13 8.1 13 7ZM17 7L15 7L15 5L17 5L17 7ZM9 11L7 11C5.9 11 5 11.9 5 13L5 15C5 16.1 5.9 17 7 17L9 17C10.1 17 11 16.1 11 15L11 13C11 11.9 10.1 11 9 11ZM9 15L7 15L7 13L9 13L9 15ZM17 11L15 11C13.9 11 13 11.9 13 13L13 15C13 16.1 13.9 17 15 17L17 17C18.1 17 19 16.1 19 15L19 13C19 11.9 18.1 11 17 11ZM17 15L15 15L15 13L17 13L17 15ZM12 19L12 21L10 21L10 19L7 19C5.9 19 5 18.1 5 17L5 15L7 15L7 17L9 17L9 19L10 19L10 17L14 17L14 19L15 19L15 17L17 17L17 15L19 15L19 17C19 18.1 18.1 19 17 19L14 19L14 21L12 21L12 19Z"/>
                      </svg>
                      Remote Support
                    </a>
                    
                    {/* Language Switcher */}
                    <div className="flex justify-center py-2">
                      <LanguageSwitcher />
                    </div>
                    
                    {/* Primary CTA */}
                    <Link
                      href="/tevredenheidscheck"
                      className="block py-4 px-6 bg-warning-yellow text-black rounded-lg hover:bg-primary-600 hover:text-white transition-all font-bold text-center shadow-lg min-h-[44px] flex items-center justify-center"
                      onClick={handleMenuClose}
                    >
                      {t('nav.start_it_check')}
                    </Link>
                  </div>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </nav>
    </header>
  )
}

export default Header