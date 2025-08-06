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
    // Navigation
    'nav.services': 'Services',
    'nav.shop': 'Shop',
    'nav.support': 'Support',
    'nav.about': 'About',
    'nav.itcheck': 'IT Check',
    'nav.networkscan': 'Network Scan',
    'nav.contact': 'Contact',
    'nav.support_tool': 'Remote Support',
    'nav.start_it_check': 'Start IT Check',
    
    // Hero Section - Professional tone
    'hero.title': 'Reliable IT Solutions for Amsterdam Businesses',
    'hero.subtitle': 'Professional IT support that helps your business grow efficiently',
    'hero.description': 'We provide comprehensive IT services to 200+ Amsterdam businesses, helping them reduce costs, improve security, and focus on what they do best. Local expertise, proven results.',
    'hero.cta.primary': 'Get Your IT Assessment',
    'hero.cta.secondary': 'Call Us Now',
    'hero.cta.time': '2 minutes',
    'hero.benefit.uptime': 'Proven Uptime',
    'hero.benefit.response': 'Quick Response',
    'hero.benefit.savings': 'Client Savings',
    
    // Stats Section
    'stats.title': '200+ Amsterdam Businesses Trust Our IT Solutions',
    'stats.description': 'From financial firms in Zuidas to creative agencies in Jordaan, we help businesses across Amsterdam optimize their technology infrastructure and reduce IT costs.',
    'stats.saved': 'Saved This Year',
    'stats.prevented': 'Issues Prevented',
    'stats.response': 'Avg Response Time',
    'stats.ransomware': 'Ransomware Paid',
    'stats.protected': '100% protected',
    
    // Services Section
    'services.title': 'Complete IT Solutions That Support Your Business Growth',
    'services.description': 'Our comprehensive services cover all your IT needs with transparent pricing and proven results. One reliable partner for all your technology requirements.',
    'services.view_all': 'View All Services',
    
    // Team Section
    'team.title': 'Your Local IT Team',
    'team.description': 'Amsterdam-based professionals with deep technical knowledge and genuine commitment to your business success.',
    
    // Testimonials
    'testimonials.title': 'What Our Clients Say',
    'testimonials.description': 'Real results from Amsterdam businesses who have improved their operations with our IT solutions.',
    'testimonials.more': 'Read more success stories',
    
    // Footer
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
    // Navigation
    'nav.services': 'Diensten',
    'nav.shop': 'Winkel',
    'nav.support': 'Ondersteuning',
    'nav.about': 'Over Ons',
    'nav.itcheck': 'IT Check',
    'nav.networkscan': 'Netwerk Scan',
    'nav.contact': 'Contact',
    'nav.support_tool': 'Externe Ondersteuning',
    'nav.start_it_check': 'Start IT Check',
    
    // Hero Section - Dutch professional tone
    'hero.title': 'Betrouwbare IT-oplossingen voor Amsterdamse Bedrijven',
    'hero.subtitle': 'Professionele IT-ondersteuning die uw bedrijf helpt efficiënt te groeien',
    'hero.description': 'Wij leveren complete IT-diensten aan meer dan 200 Amsterdamse bedrijven en helpen hen kosten te verlagen, beveiliging te verbeteren en zich te concentreren op waar ze goed in zijn. Lokale expertise, bewezen resultaten.',
    'hero.cta.primary': 'Vraag Uw IT-scan Aan',
    'hero.cta.secondary': 'Bel Ons Nu',
    'hero.cta.time': '2 minuten',
    'hero.benefit.uptime': 'Bewezen Uptime',
    'hero.benefit.response': 'Snelle Reactie',
    'hero.benefit.savings': 'Klantbesparingen',
    
    // Stats Section
    'stats.title': 'Meer dan 200 Amsterdamse Bedrijven Vertrouwen Onze IT-oplossingen',
    'stats.description': 'Van financiële bedrijven op de Zuidas tot creatieve bureaus in de Jordaan, wij helpen bedrijven door heel Amsterdam hun technologie-infrastructuur te optimaliseren en IT-kosten te verlagen.',
    'stats.saved': 'Bespaard Dit Jaar',
    'stats.prevented': 'Problemen Voorkomen',
    'stats.response': 'Gem. Reactietijd',
    'stats.ransomware': 'Ransomware Betaald',
    'stats.protected': '100% beschermd',
    
    // Services Section
    'services.title': 'Complete IT-oplossingen Die Uw Bedrijfsgroei Ondersteunen',
    'services.description': 'Onze uitgebreide diensten dekken al uw IT-behoeften met transparante prijzen en bewezen resultaten. Één betrouwbare partner voor al uw technologische vereisten.',
    'services.view_all': 'Bekijk Alle Diensten',
    
    // Team Section
    'team.title': 'Uw Lokale IT-team',
    'team.description': 'Amsterdamse professionals met diepgaande technische kennis en oprechte betrokkenheid bij uw bedrijfssucces.',
    
    // Testimonials
    'testimonials.title': 'Wat Onze Klanten Zeggen',
    'testimonials.description': 'Echte resultaten van Amsterdamse bedrijven die hun activiteiten hebben verbeterd met onze IT-oplossingen.',
    'testimonials.more': 'Lees meer succesverhalen',
    
    // Footer
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