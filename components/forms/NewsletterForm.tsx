'use client'

import { useState } from 'react'
import HubSpotForm from './HubSpotFormClient'
import { useLanguage } from '@/context/LanguageContext'

export default function NewsletterForm() {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const { language } = useLanguage()

  const handleFormSubmitted = () => {
    setIsSubmitted(true)
    // Reset after 5 seconds
    setTimeout(() => setIsSubmitted(false), 5000)
  }

  if (isSubmitted) {
    return (
      <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center">
        <div className="text-green-600 mb-2">
          <svg className="w-12 h-12 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
        <h3 className="text-lg font-semibold text-green-800 mb-1">
          {language === 'en' ? 'Successfully Subscribed!' : 'Succesvol Aangemeld!'}
        </h3>
        <p className="text-green-700">
          {language === 'en' 
            ? 'Thank you for subscribing to our newsletter.' 
            : 'Bedankt voor uw aanmelding voor onze nieuwsbrief.'}
        </p>
      </div>
    )
  }

  return (
    <div className="bg-white rounded-lg p-6">
      <h3 className="text-xl font-bold text-gray-900 mb-3">
        {language === 'en' ? 'Stay Updated' : 'Blijf Op De Hoogte'}
      </h3>
      <p className="text-gray-600 mb-4">
        {language === 'en' 
          ? 'Get the latest IT insights and security updates delivered to your inbox.' 
          : 'Ontvang de laatste IT-inzichten en beveiligingsupdates in uw inbox.'}
      </p>
      
      <HubSpotForm
        region="eu1"
        portalId="26510736"
        formId="e92de02c-71b0-4a68-aedd-3b6acb0f5f67"
        onFormSubmitted={handleFormSubmitted}
        className="newsletter-form"
      />
    </div>
  )
}