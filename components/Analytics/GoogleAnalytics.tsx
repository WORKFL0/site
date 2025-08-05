'use client'

import Script from 'next/script'
import { usePathname, useSearchParams } from 'next/navigation'
import { useEffect } from 'react'

// Replace with your actual GA4 Measurement ID
const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || 'G-XXXXXXXXXX'

// Track page views
export function pageview(url: string) {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', GA_MEASUREMENT_ID, {
      page_path: url,
    })
  }
}

// Track events
export function event({ action, category, label, value }: {
  action: string
  category: string
  label?: string
  value?: number
}) {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    })
  }
}

// Track conversions
export function trackConversion(conversionType: string, value?: number) {
  event({
    action: 'conversion',
    category: conversionType,
    value: value
  })
}

// Track form submissions
export function trackFormSubmission(formName: string) {
  event({
    action: 'form_submit',
    category: 'engagement',
    label: formName
  })
}

// Track phone clicks
export function trackPhoneClick(phoneNumber: string) {
  event({
    action: 'click',
    category: 'contact',
    label: `phone_${phoneNumber}`
  })
}

// Track download
export function trackDownload(fileName: string) {
  event({
    action: 'download',
    category: 'engagement',
    label: fileName
  })
}

// Track outbound links
export function trackOutboundLink(url: string) {
  event({
    action: 'click',
    category: 'outbound',
    label: url
  })
}

// Track scroll depth
export function trackScrollDepth(percentage: number) {
  event({
    action: 'scroll',
    category: 'engagement',
    label: `${percentage}%`,
    value: percentage
  })
}

// Google Analytics Component
export default function GoogleAnalytics() {
  const pathname = usePathname()
  const searchParams = useSearchParams()

  useEffect(() => {
    const url = pathname + searchParams.toString()
    pageview(url)
  }, [pathname, searchParams])

  // Set up scroll tracking
  useEffect(() => {
    let ticking = false
    const scrollDepths = [25, 50, 75, 90, 100]
    const scrolled = new Set<number>()

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const windowHeight = window.innerHeight
          const documentHeight = document.documentElement.scrollHeight
          const scrollTop = window.scrollY
          const scrollPercentage = Math.round((scrollTop + windowHeight) / documentHeight * 100)

          scrollDepths.forEach(depth => {
            if (scrollPercentage >= depth && !scrolled.has(depth)) {
              scrolled.add(depth)
              trackScrollDepth(depth)
            }
          })

          ticking = false
        })
        ticking = true
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Track time on page
  useEffect(() => {
    const startTime = Date.now()
    
    const handleUnload = () => {
      const timeOnPage = Math.round((Date.now() - startTime) / 1000)
      event({
        action: 'timing',
        category: 'engagement',
        label: pathname,
        value: timeOnPage
      })
    }

    window.addEventListener('beforeunload', handleUnload)
    return () => window.removeEventListener('beforeunload', handleUnload)
  }, [pathname])

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_MEASUREMENT_ID}', {
            page_path: window.location.pathname,
            send_page_view: true,
            cookie_flags: 'SameSite=None;Secure'
          });
          
          // Enhanced Ecommerce and Conversions
          gtag('config', '${GA_MEASUREMENT_ID}', {
            'custom_map.dimension1': 'user_type',
            'custom_map.dimension2': 'page_type',
            'custom_map.dimension3': 'service_interest'
          });
        `}
      </Script>
      
      {/* Google Tag Manager (optional) */}
      <Script id="google-tag-manager" strategy="afterInteractive">
        {`
          (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-XXXXXX');
        `}
      </Script>
    </>
  )
}

// Declare gtag as a global function
declare global {
  interface Window {
    gtag: (...args: any[]) => void
  }
}