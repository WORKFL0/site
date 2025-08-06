'use client'

import { useState } from 'react'
import NewsletterSignup from '@/components/forms/NewsletterSignup'
import { useLanguage } from '@/context/LanguageContext'

export default function TestNewsletterPage() {
  const { language, setLanguage } = useLanguage()

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Newsletter Component Test</h1>
          <div className="flex justify-center gap-4 mb-6">
            <button
              onClick={() => setLanguage('en')}
              className={`px-4 py-2 rounded-lg ${
                language === 'en' 
                  ? 'bg-warning-yellow text-gray-900 font-semibold' 
                  : 'bg-white text-gray-600 hover:bg-gray-100'
              }`}
            >
              English
            </button>
            <button
              onClick={() => setLanguage('nl')}
              className={`px-4 py-2 rounded-lg ${
                language === 'nl' 
                  ? 'bg-warning-yellow text-gray-900 font-semibold' 
                  : 'bg-white text-gray-600 hover:bg-gray-100'
              }`}
            >
              Nederlands
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Default Variant */}
          <div>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Default Variant</h2>
            <NewsletterSignup 
              variant="default"
              formId="test-newsletter-default"
            />
          </div>

          {/* Inline Variant */}
          <div>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Inline Variant</h2>
            <NewsletterSignup 
              variant="inline"
              formId="test-newsletter-inline"
            />
          </div>

          {/* Footer Variant - Full Width */}
          <div className="lg:col-span-2">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Footer Variant</h2>
            <div className="bg-gray-900 p-8 rounded-lg">
              <NewsletterSignup 
                variant="footer"
                formId="test-newsletter-footer"
              />
            </div>
          </div>

          {/* Compact Version */}
          <div className="lg:col-span-2">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Compact Version (No Title/Description)</h2>
            <NewsletterSignup 
              variant="inline"
              showTitle={false}
              showDescription={false}
              formId="test-newsletter-compact"
            />
          </div>
        </div>

        {/* Instructions */}
        <div className="mt-12 max-w-4xl mx-auto bg-blue-50 p-6 rounded-lg">
          <h3 className="text-lg font-semibold text-blue-900 mb-3">Test Instructions</h3>
          <ul className="text-blue-800 space-y-2">
            <li>• Test language switching between English and Dutch</li>
            <li>• Verify all variants display correctly</li>
            <li>• Check responsive design on different screen sizes</li>
            <li>• Test form submission (Note: Uses test form IDs for now)</li>
            <li>• Ensure HubSpot integration works with portal ID: 26510736</li>
          </ul>
          
          <div className="mt-4 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
            <p className="text-yellow-800 text-sm">
              <strong>Note:</strong> The form IDs used here are placeholders. Replace them with actual HubSpot form IDs 
              from your portal (26510736) for the newsletter subscription form.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}