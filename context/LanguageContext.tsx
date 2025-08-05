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
    'footer.tagline': "Amsterdam's Most Trusted IT Partner",
    'footer.write_review': 'Write a Review',
    'footer.services': 'Services',
    'footer.company': 'Company',
    'footer.industries': 'Industries',
    'footer.rights': 'All rights reserved',
    'footer.privacy': 'Privacy Policy',
    'footer.terms': 'Terms & Conditions',
    'common.email': 'Email',
    'common.phone': 'Phone',
    'common.address': 'Address',
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
    'footer.tagline': "Amsterdam's Meest Vertrouwde IT Partner",
    'footer.write_review': 'Schrijf een Review',
    'footer.services': 'Diensten',
    'footer.company': 'Bedrijf',
    'footer.industries': 'Sectoren',
    'footer.rights': 'Alle rechten voorbehouden',
    'footer.privacy': 'Privacybeleid',
    'footer.terms': 'Algemene Voorwaarden',
    'common.email': 'E-mail',
    'common.phone': 'Telefoon',
    'common.address': 'Adres',
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