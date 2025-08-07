'use client'

import Script from 'next/script'
import { usePathname, useSearchParams } from 'next/navigation'
import { useEffect, Suspense } from 'react'
import { useHydration } from '@/components/HydrationProvider'

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

// Inner component that uses useSearchParams
function GoogleAnalyticsInner() {
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const { isStageComplete } = useHydration()

  // CRITICAL FIX: Only track pageviews after analytics stage is complete
  useEffect(() => {
    if (!isStageComplete('analytics')) return
    
    try {
      const url = pathname + searchParams.toString()
      pageview(url)
    } catch (error) {
      console.warn('GoogleAnalytics: Failed to track pageview:', error)
    }
  }, [pathname, searchParams, isStageComplete])

  // CRITICAL FIX: Set up scroll tracking ONLY after analytics stage is complete
  useEffect(() => {
    if (!isStageComplete('analytics') || typeof window === 'undefined') return
    
    let ticking = false
    const scrollDepths = [25, 50, 75, 90, 100]
    const scrolled = new Set<number>()

    const handleScroll = () => {
      if (!ticking) {
        try {
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
        } catch (error) {
          console.warn('GoogleAnalytics: Error in scroll tracking:', error)
          ticking = false
        }
      }
    }

    try {
      window.addEventListener('scroll', handleScroll, { passive: true })
      return () => window.removeEventListener('scroll', handleScroll)
    } catch (error) {
      console.warn('GoogleAnalytics: Failed to set up scroll tracking:', error)
    }
  }, [isStageComplete])

  // CRITICAL FIX: Track time on page ONLY after analytics stage is complete
  useEffect(() => {
    if (!isStageComplete('analytics') || typeof window === 'undefined') return
    
    const startTime = Date.now()
    
    const handleUnload = () => {
      try {
        const timeOnPage = Math.round((Date.now() - startTime) / 1000)
        event({
          action: 'timing',
          category: 'engagement',
          label: pathname,
          value: timeOnPage
        })
      } catch (error) {
        console.warn('GoogleAnalytics: Error tracking time on page:', error)
      }
    }

    try {
      window.addEventListener('beforeunload', handleUnload)
      return () => window.removeEventListener('beforeunload', handleUnload)
    } catch (error) {
      console.warn('GoogleAnalytics: Failed to set up time tracking:', error)
    }
  }, [pathname, isStageComplete])

  // CRITICAL FIX: Only render scripts after analytics stage is complete
  if (!isStageComplete('analytics')) {
    return null
  }

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

// Google Analytics Component with Suspense wrapper
export default function GoogleAnalytics() {
  return (
    <Suspense fallback={null}>
      <GoogleAnalyticsInner />
    </Suspense>
  )
}

// Declare gtag as a global function
declare global {
  interface Window {
    gtag: (...args: any[]) => void
  }
}