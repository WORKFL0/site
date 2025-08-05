'use client'

import { trackPhoneClick, trackFormSubmission, event } from '@/components/Analytics/GoogleAnalytics'
import { seoConfig } from '@/config/seo.config'

export function PhoneLink({ 
  className = '', 
  showIcon = true,
  trackingLabel = 'header'
}: { 
  className?: string
  showIcon?: boolean
  trackingLabel?: string
}) {
  const handleClick = () => {
    trackPhoneClick(seoConfig.company.phone)
    event({
      action: 'click',
      category: 'contact',
      label: `phone_${trackingLabel}`
    })
  }

  return (
    <a
      href={`tel:${seoConfig.company.phone}`}
      onClick={handleClick}
      className={`hover:text-yellow-400 transition-colors ${className}`}
      itemProp="telephone"
    >
      {showIcon && (
        <svg className="inline-block w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
          <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
        </svg>
      )}
      <span>{seoConfig.company.phoneDisplay}</span>
    </a>
  )
}

export function EmailLink({ 
  className = '',
  showIcon = true,
  trackingLabel = 'footer'
}: { 
  className?: string
  showIcon?: boolean
  trackingLabel?: string
}) {
  const handleClick = () => {
    event({
      action: 'click',
      category: 'contact',
      label: `email_${trackingLabel}`
    })
  }

  return (
    <a
      href={`mailto:${seoConfig.company.email}`}
      onClick={handleClick}
      className={`hover:text-yellow-400 transition-colors ${className}`}
      itemProp="email"
    >
      {showIcon && (
        <svg className="inline-block w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
          <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
          <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
        </svg>
      )}
      <span>{seoConfig.company.email}</span>
    </a>
  )
}

export function AddressBlock({ 
  className = '',
  showMap = true 
}: { 
  className?: string
  showMap?: boolean
}) {
  const handleDirectionsClick = () => {
    event({
      action: 'click',
      category: 'contact',
      label: 'get_directions'
    })
  }

  const address = seoConfig.company.address
  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    `${address.streetAddress}, ${address.postalCode} ${address.addressLocality}, ${address.countryName}`
  )}`

  return (
    <div className={`${className}`} itemScope itemType="https://schema.org/PostalAddress">
      <address className="not-italic">
        <span itemProp="streetAddress">{address.streetAddress}</span><br />
        <span itemProp="postalCode">{address.postalCode}</span> <span itemProp="addressLocality">{address.addressLocality}</span><br />
        <span itemProp="addressCountry">{address.countryName}</span>
      </address>
      
      {showMap && (
        <a
          href={googleMapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          onClick={handleDirectionsClick}
          className="inline-flex items-center mt-2 text-yellow-400 hover:text-yellow-500 transition-colors"
        >
          <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
          </svg>
          Get Directions
        </a>
      )}
    </div>
  )
}

export function ContactCTA({ 
  variant = 'primary',
  className = '',
  text = 'Contact Us Today',
  trackingLabel = 'cta'
}: {
  variant?: 'primary' | 'secondary'
  className?: string
  text?: string
  trackingLabel?: string
}) {
  const handleClick = () => {
    event({
      action: 'cta_click',
      category: 'engagement',
      label: trackingLabel
    })
  }

  const baseClasses = 'inline-block px-6 py-3 rounded-lg font-bold transition-all transform hover:scale-105'
  const variantClasses = variant === 'primary' 
    ? 'bg-yellow-400 text-black hover:bg-yellow-500 shadow-lg' 
    : 'bg-white text-black border-2 border-black hover:bg-gray-100'

  return (
    <a
      href="/contact"
      onClick={handleClick}
      className={`${baseClasses} ${variantClasses} ${className}`}
    >
      {text}
    </a>
  )
}

export function OpeningHours({ className = '' }: { className?: string }) {
  return (
    <div className={className}>
      <h3 className="font-bold mb-2">Opening Hours</h3>
      <div itemScope itemType="https://schema.org/OpeningHoursSpecification">
        <meta itemProp="dayOfWeek" content="Monday,Tuesday,Wednesday,Thursday,Friday" />
        <p>
          Monday - Friday: <time itemProp="opens" content="09:00">9:00</time> - <time itemProp="closes" content="18:00">18:00</time>
        </p>
        <p className="text-gray-600">
          24/7 Emergency Support for Managed Clients
        </p>
      </div>
    </div>
  )
}

export function SocialLinks({ className = '' }: { className?: string }) {
  const handleSocialClick = (platform: string) => {
    event({
      action: 'social_click',
      category: 'engagement',
      label: platform
    })
  }

  return (
    <div className={`flex gap-4 ${className}`}>
      <a
        href="https://www.linkedin.com/company/workflo"
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => handleSocialClick('linkedin')}
        className="text-gray-400 hover:text-yellow-400 transition-colors"
        aria-label="LinkedIn"
      >
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
        </svg>
      </a>
      
      <a
        href="https://x.com/workflo_it"
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => handleSocialClick('twitter')}
        className="text-gray-400 hover:text-yellow-400 transition-colors"
        aria-label="X (Twitter)"
      >
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
        </svg>
      </a>
    </div>
  )
}