'use client'

import { useLanguage } from '@/context/LanguageContext'
import { ChevronDownIcon } from '@heroicons/react/24/outline'
import { useState, useRef, useEffect } from 'react'

export default function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage()
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  const languages = [
    { code: 'en' as const, name: 'English', flag: '🇬🇧' },
    { code: 'nl' as const, name: 'Nederlands', flag: '🇳🇱' }
  ]

  const currentLang = languages.find(lang => lang.code === language)

  const handleLanguageChange = (langCode: 'en' | 'nl') => {
    try {
      setLanguage(langCode)
      setIsOpen(false)
    } catch (error) {
      console.error('Error changing language:', error)
    }
  }

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-2 text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors"
        aria-label="Select language"
        aria-expanded={isOpen}
        aria-haspopup="true"
      >
        <span className="text-lg" aria-hidden="true">{currentLang?.flag}</span>
        <span className="hidden sm:inline">{currentLang?.name}</span>
        <ChevronDownIcon 
          className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} 
          aria-hidden="true" 
        />
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-50">
          <div className="py-1" role="menu" aria-orientation="vertical">
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => handleLanguageChange(lang.code)}
                className={`${
                  language === lang.code ? 'bg-gray-100 text-gray-900' : 'text-gray-700'
                } group flex w-full items-center px-4 py-2 text-sm hover:bg-gray-100 hover:text-gray-900 transition-colors`}
                role="menuitem"
                aria-current={language === lang.code ? 'true' : undefined}
              >
                <span className="mr-3 text-lg" aria-hidden="true">{lang.flag}</span>
                {lang.name}
                {language === lang.code && (
                  <span className="ml-auto text-xs text-gray-500" aria-label="Currently selected">✓</span>
                )}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}