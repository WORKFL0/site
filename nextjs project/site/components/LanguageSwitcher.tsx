'use client'

import { useLanguage } from '@/context/LanguageContext'

export default function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage()

  return (
    <div className="flex items-center gap-1 bg-gray-100 rounded-lg p-1">
      <button
        onClick={() => setLanguage('nl')}
        className={`px-3 py-1.5 text-sm font-medium rounded transition-colors ${
          language === 'nl'
            ? 'bg-primary-500 text-white'
            : 'text-gray-600 hover:text-gray-900'
        }`}
      >
        NL
      </button>
      <button
        onClick={() => setLanguage('en')}
        className={`px-3 py-1.5 text-sm font-medium rounded transition-colors ${
          language === 'en'
            ? 'bg-primary-500 text-white'
            : 'text-gray-600 hover:text-gray-900'
        }`}
      >
        EN
      </button>
    </div>
  )
}