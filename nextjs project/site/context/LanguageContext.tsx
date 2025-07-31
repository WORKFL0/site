'use client'

import React, { createContext, useContext, useState, useEffect } from 'react'

type Language = 'nl' | 'en'

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const translations = {
  nl: {
    // Navigation
    'nav.services': 'Diensten',
    'nav.shop': 'Shop',
    'nav.support': 'Support',
    'nav.about': 'Over ons',
    'nav.itcheck': 'IT Check',
    'nav.networkscan': 'Netwerk Scan',
    'nav.contact': 'Contact',
    'nav.start_it_check': 'Start IT Health Check',
    'nav.support_tool': 'Support Tool',
    
    // Hero section
    'hero.title': 'Stop met zorgen over IT-problemen',
    'hero.subtitle': 'Start met het laten groeien van je bedrijf',
    'hero.description': 'Amsterdamse MKB\'ers vertrouwen op Workflo om IT-kosten met 35% te verlagen terwijl de productiviteit toeneemt.',
    'hero.cta.primary': 'Start Gratis IT Health Check',
    'hero.cta.secondary': 'Plan een Gesprek',
    
    // Services
    'services.title': 'Van IT-hoofdpijn naar zakelijke groei',
    'services.subtitle': 'Ontdek hoe we jouw IT-uitdagingen omzetten in groeikansen',
    'services.managed_it.title': 'Managed IT Services',
    'services.managed_it.description': 'Complete IT-ondersteuning zonder de kosten van een interne IT-afdeling',
    'services.cloud.title': 'Cloud Oplossingen',
    'services.cloud.description': 'Werk overal, altijd veilig. Modern, schaalbaar en kostenefficiënt',
    'services.security.title': 'Cybersecurity',
    'services.security.description': 'Bescherm je bedrijf tegen digitale dreigingen met enterprise-grade beveiliging',
    'services.backup.title': 'Backup & Herstel',
    'services.backup.description': 'Slaap rustig wetende dat je data veilig is en altijd herstelbaar',
    
    // Stats
    'stats.companies': 'Bedrijven',
    'stats.availability': 'Beschikbaarheid',
    'stats.response_time': 'Responstijd',
    'stats.cost_reduction': 'Kostenbesparing',
    
    // Partners
    'partners.with': 'Partners Met',
    'partners.with.description': 'We werken samen met Nederlands toonaangevende bedrijven en instanties om jou de beste oplossingen te kunnen bieden',
    'partners.of': 'Partners Van',
    'partners.of.description': 'We werken samen met \'s werelds toonaangevende technologiebedrijven om u de beste oplossingen te bieden',
    'partners.worked_for': 'Wij Hebben Gewerkt Voor',
    'partners.worked_for.description': 'Een selectie van organisaties waar we met trots aan hebben mogen bijdragen',
    
    // Testimonials
    'testimonials.title': 'Wat onze klanten zeggen',
    'testimonials.subtitle': 'Ontdek waarom 100+ Amsterdamse bedrijven kiezen voor Workflo',
    'testimonials.more': 'Lees meer succesverhalen',
    
    // CTA
    'cta.title': 'Klaar om IT-zorgen om te zetten in zakelijke groei?',
    'cta.description': 'Sluit je aan bij 100+ Amsterdamse bedrijven die al groeien met Workflo',
    'cta.button': 'Start je gratis IT Health Check',
    'cta.call': 'Of bel direct:',
    
    // Footer
    'footer.tagline': 'Jouw vertrouwde IT-partner in Amsterdam',
    'footer.services': 'Diensten',
    'footer.company': 'Bedrijf',
    'footer.industries': 'Sectoren',
    'footer.support': 'Support',
    'footer.emergency': '24/7 Noodlijn',
    'footer.newsletter': 'Blijf op de hoogte',
    'footer.newsletter.placeholder': 'Je e-mailadres',
    'footer.newsletter.button': 'Aanmelden',
    'footer.write_review': 'Schrijf een review',
    'footer.careers': 'Werken bij Workflo',
    'footer.rights': 'Alle rechten voorbehouden',
    'footer.privacy': 'Privacybeleid',
    'footer.terms': 'Algemene Voorwaarden',
    
    // Common
    'common.learn_more': 'Meer informatie',
    'common.contact_us': 'Neem contact op',
    'common.get_started': 'Aan de slag',
    'common.loading': 'Laden...',
    'common.error': 'Er is iets misgegaan',
    'common.success': 'Succesvol',
    'common.phone': 'Telefoon',
    'common.email': 'E-mail',
    'common.address': 'Adres',
    'common.support': 'Support',
  },
  en: {
    // Navigation
    'nav.services': 'Services',
    'nav.shop': 'Shop',
    'nav.support': 'Support',
    'nav.about': 'About Us',
    'nav.itcheck': 'IT Check',
    'nav.networkscan': 'Network Scan',
    'nav.contact': 'Contact',
    'nav.start_it_check': 'Start IT Health Check',
    'nav.support_tool': 'Support Tool',
    
    // Hero section
    'hero.title': 'Stop worrying about IT problems',
    'hero.subtitle': 'Start growing your business',
    'hero.description': 'Amsterdam SMEs trust Workflo to reduce IT costs by 35% while increasing productivity.',
    'hero.cta.primary': 'Start Free IT Health Check',
    'hero.cta.secondary': 'Schedule a Call',
    
    // Services
    'services.title': 'From IT headaches to business growth',
    'services.subtitle': 'Discover how we turn your IT challenges into growth opportunities',
    'services.managed_it.title': 'Managed IT Services',
    'services.managed_it.description': 'Complete IT support without the cost of an internal IT department',
    'services.cloud.title': 'Cloud Solutions',
    'services.cloud.description': 'Work anywhere, always secure. Modern, scalable and cost-efficient',
    'services.security.title': 'Cybersecurity',
    'services.security.description': 'Protect your business against digital threats with enterprise-grade security',
    'services.backup.title': 'Backup & Recovery',
    'services.backup.description': 'Sleep soundly knowing your data is safe and always recoverable',
    
    // Stats
    'stats.companies': 'Companies',
    'stats.availability': 'Availability',
    'stats.response_time': 'Response Time',
    'stats.cost_reduction': 'Cost Reduction',
    
    // Partners
    'partners.with': 'Partners With',
    'partners.with.description': 'We work together with leading Dutch companies and organizations to provide you with the best solutions',
    'partners.of': 'Partners Of',
    'partners.of.description': 'We partner with the world\'s leading technology companies to bring you the best solutions',
    'partners.worked_for': 'We Have Worked For',
    'partners.worked_for.description': 'A selection of organizations we have proudly contributed to',
    
    // Testimonials
    'testimonials.title': 'What our clients say',
    'testimonials.subtitle': 'Discover why 100+ Amsterdam businesses choose Workflo',
    'testimonials.more': 'Read more success stories',
    
    // CTA
    'cta.title': 'Ready to turn IT worries into business growth?',
    'cta.description': 'Join 100+ Amsterdam businesses already growing with Workflo',
    'cta.button': 'Start your free IT Health Check',
    'cta.call': 'Or call directly:',
    
    // Footer
    'footer.tagline': 'Your trusted IT partner in Amsterdam',
    'footer.services': 'Services',
    'footer.company': 'Company',
    'footer.industries': 'Industries',
    'footer.support': 'Support',
    'footer.emergency': '24/7 Emergency',
    'footer.newsletter': 'Stay updated',
    'footer.newsletter.placeholder': 'Your email address',
    'footer.newsletter.button': 'Subscribe',
    'footer.write_review': 'Write a review',
    'footer.careers': 'Careers at Workflo',
    'footer.rights': 'All rights reserved',
    'footer.privacy': 'Privacy Policy',
    'footer.terms': 'Terms & Conditions',
    
    // Common
    'common.learn_more': 'Learn more',
    'common.contact_us': 'Contact us',
    'common.get_started': 'Get started',
    'common.loading': 'Loading...',
    'common.error': 'Something went wrong',
    'common.success': 'Success',
    'common.phone': 'Phone',
    'common.email': 'Email',
    'common.address': 'Address',
    'common.support': 'Support',
  }
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>('nl')

  useEffect(() => {
    // Check localStorage for saved language preference
    const savedLang = localStorage.getItem('language') as Language
    if (savedLang && (savedLang === 'nl' || savedLang === 'en')) {
      setLanguageState(savedLang)
    } else {
      // Default to Dutch
      setLanguageState('nl')
    }
  }, [])

  const setLanguage = (lang: Language) => {
    setLanguageState(lang)
    localStorage.setItem('language', lang)
  }

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations['nl']] || key
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}