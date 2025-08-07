'use client'

import { useLanguage } from '@/context/LanguageContext'
import { useState, useEffect } from 'react'

interface SafeLanguageWrapperProps {
  children: (t: (key: string) => string, language: string) => React.ReactNode
}

export default function SafeLanguageWrapper({ children }: SafeLanguageWrapperProps) {
  const [mounted, setMounted] = useState(false)
  
  useEffect(() => {
    setMounted(true)
  }, [])

  // Create a failsafe translation function
  const getFallbackTranslation = (key: string): string => {
    // Basic fallback translations for critical text
    const fallbacks: Record<string, string> = {
      'hero.title': 'IT Solutions for Your Business',
      'hero.subtitle': 'Professional IT Services Amsterdam',
      'hero.description': 'Transform your business with reliable IT support',
      'hero.cta.primary': 'Get Started',
      'hero.cta.secondary': 'Learn More',
      'services.title': 'Our Services',
      'services.description': 'Complete IT solutions for your business',
      'services.view_all': 'View All Services',
      'team.title': 'Our Team',
      'team.description': 'Meet our experts',
      'testimonials.title': 'What Our Clients Say',
      'testimonials.description': 'Trusted by businesses across Amsterdam',
      'nav.services': 'Services',
      'nav.pricing': 'Pricing',
      'nav.about': 'About',
      'nav.contact': 'Contact',
      'nav.shop': 'Shop',
      'nav.support': 'Support',
      'nav.faq': 'FAQ'
    }
    
    return fallbacks[key] || key.split('.').pop()?.replace(/_/g, ' ') || key
  }

  // Try to use the real language context, fall back if it fails
  let t: (key: string) => string
  let language = 'nl' // Default language
  
  try {
    const context = useLanguage()
    t = context.t
    language = context.language
  } catch (error) {
    // If context fails, use fallback
    console.warn('Language context not available, using fallback translations')
    t = getFallbackTranslation
  }

  // Don't render until mounted to avoid hydration issues
  if (!mounted) {
    return <div className="min-h-screen flex items-center justify-center">
      <div className="animate-pulse">Loading...</div>
    </div>
  }

  return <>{children(t, language)}</>
}