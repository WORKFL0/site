'use client'

import { useState } from 'react'
import { useLanguage } from '@/context/LanguageContext'
import HubSpotForm from './HubSpotFormClient'

interface NewsletterSignupProps {
  variant?: 'default' | 'footer' | 'inline'
  className?: string
  showTitle?: boolean
  showDescription?: boolean
  formId?: string
}

export default function NewsletterSignup({
  variant = 'default',
  className = '',
  showTitle = true,
  showDescription = true,
  formId = 'e92de02c-71b0-4a68-aedd-3b6acb0f5f67' // HubSpot newsletter form ID from portal 26510736
}: NewsletterSignupProps) {
  const { t } = useLanguage()
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleFormSubmitted = () => {
    setIsSubmitted(true)
  }

  const getVariantClasses = () => {
    switch (variant) {
      case 'footer':
        return 'bg-gray-800/50 rounded-lg p-6'
      case 'inline':
        return 'bg-white border border-gray-200 rounded-lg p-6 shadow-sm'
      default:
        return 'bg-gray-50 rounded-xl p-8'
    }
  }

  const getTextColorClass = () => {
    return variant === 'footer' ? 'text-white' : 'text-gray-900'
  }

  const getSubtextColorClass = () => {
    return variant === 'footer' ? 'text-gray-300' : 'text-gray-600'
  }

  if (isSubmitted) {
    return (
      <div className={`${getVariantClasses()} ${className}`}>
        <div className="text-center">
          <div className="w-16 h-16 mx-auto mb-4 bg-green-100 rounded-full flex items-center justify-center">
            <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h3 className={`text-lg font-semibold mb-2 ${getTextColorClass()}`}>
            {t('newsletter.success.title')}
          </h3>
          <p className={`text-sm ${getSubtextColorClass()}`}>
            {t('newsletter.success.description')}
          </p>
        </div>
      </div>
    )
  }

  return (
    <div className={`${getVariantClasses()} ${className}`}>
      {showTitle && (
        <div className="mb-6">
          <h3 className={`text-xl font-bold mb-2 ${getTextColorClass()}`}>
            {t('newsletter.title')}
          </h3>
          {showDescription && (
            <p className={`text-sm ${getSubtextColorClass()}`}>
              {t('newsletter.description')}
            </p>
          )}
        </div>
      )}

      {/* Newsletter Icon */}
      <div className="flex items-center mb-4">
        <div className="w-10 h-10 bg-warning-yellow/10 rounded-lg flex items-center justify-center mr-3">
          <svg className="w-5 h-5 text-warning-yellow" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
        </div>
        <div>
          <p className={`text-sm font-medium ${getTextColorClass()}`}>
            {t('newsletter.frequency')}
          </p>
          <p className={`text-xs ${getSubtextColorClass()}`}>
            {t('newsletter.privacy_note')}
          </p>
        </div>
      </div>

      {/* Benefits List */}
      <div className="mb-6">
        <ul className="space-y-2">
          {[
            'newsletter.benefit1',
            'newsletter.benefit2',
            'newsletter.benefit3'
          ].map((benefitKey, index) => (
            <li key={index} className="flex items-center text-sm">
              <div className="w-4 h-4 bg-warning-yellow rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                <svg className="w-2.5 h-2.5 text-gray-900" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <span className={getSubtextColorClass()}>{t(benefitKey)}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* HubSpot Form Integration */}
      <div className="newsletter-form-container">
        <HubSpotForm
          portalId="26510736"
          formId={formId}
          region="eu1"
          className="newsletter-hubspot-form"
          onFormSubmitted={handleFormSubmitted}
        />
      </div>

      {/* Custom Styling for Newsletter Form */}
      <style jsx>{`
        .newsletter-form-container :global(.hs-form-field) {
          margin-bottom: 1rem;
        }
        .newsletter-form-container :global(.hs-input) {
          background-color: ${variant === 'footer' ? 'rgba(255, 255, 255, 0.1)' : '#ffffff'};
          border: 1px solid ${variant === 'footer' ? 'rgba(255, 255, 255, 0.2)' : '#d1d5db'};
          color: ${variant === 'footer' ? '#ffffff' : '#111827'};
        }
        .newsletter-form-container :global(.hs-input::placeholder) {
          color: ${variant === 'footer' ? 'rgba(255, 255, 255, 0.7)' : '#9ca3af'};
        }
        .newsletter-form-container :global(.hs-input:focus) {
          border-color: #f16e13;
          box-shadow: 0 0 0 3px rgba(241, 110, 19, 0.1);
        }
        .newsletter-form-container :global(.hs-button) {
          background-color: #f16e13;
          padding: 0.75rem 2rem;
          font-size: 0.875rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }
        .newsletter-form-container :global(.hs-button:hover) {
          background-color: #e54f0d;
        }
        .newsletter-form-container :global(label) {
          color: ${variant === 'footer' ? '#ffffff' : '#374151'};
          font-weight: 500;
        }
      `}</style>
    </div>
  )
}