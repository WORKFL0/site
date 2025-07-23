'use client'

import { useLanguage } from '@/contexts/LanguageContext'
import { motion } from 'framer-motion'

export default function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage()

  return (
    <div className="flex items-center gap-1 bg-gray-100 rounded-lg p-1">
      <button
        onClick={() => setLanguage('nl')}
        className={`relative px-3 py-1.5 text-sm font-medium transition-colors ${
          language === 'nl' ? 'text-white' : 'text-gray-600 hover:text-gray-900'
        }`}
      >
        {language === 'nl' && (
          <motion.div
            layoutId="language-switcher"
            className="absolute inset-0 bg-primary-500 rounded-md"
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          />
        )}
        <span className="relative z-10">NL</span>
      </button>
      <button
        onClick={() => setLanguage('en')}
        className={`relative px-3 py-1.5 text-sm font-medium transition-colors ${
          language === 'en' ? 'text-white' : 'text-gray-600 hover:text-gray-900'
        }`}
      >
        {language === 'en' && (
          <motion.div
            layoutId="language-switcher"
            className="absolute inset-0 bg-primary-500 rounded-md"
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          />
        )}
        <span className="relative z-10">EN</span>
      </button>
    </div>
  )
}