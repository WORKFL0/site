'use client'

import React, { createContext, useContext, useState } from 'react'

type Language = 'en' | 'nl'

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const translations = {
  en: {
    'nav.services': 'Services',
    'nav.shop': 'Shop',
    'nav.support': 'Support',
    'nav.about': 'About',
    'nav.itcheck': 'IT Check',
    'nav.networkscan': 'Network Scan',
    'nav.contact': 'Contact',
    'nav.support_tool': 'Remote Support',
    'nav.start_it_check': 'Start IT Check',
    'testimonials.more': 'Read more success stories',
  },
  nl: {
    'nav.services': 'Diensten',
    'nav.shop': 'Winkel',
    'nav.support': 'Ondersteuning',
    'nav.about': 'Over Ons',
    'nav.itcheck': 'IT Check',
    'nav.networkscan': 'Netwerk Scan',
    'nav.contact': 'Contact',
    'nav.support_tool': 'Externe Ondersteuning',
    'nav.start_it_check': 'Start IT Check',
    'testimonials.more': 'Lees meer succesverhalen',
  }
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>('en')

  const t = (key: string) => {
    return translations[language][key as keyof typeof translations['en']] || key
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}