'use client'

import { useEffect } from 'react'
import { trackConversion, trackFormSubmission, trackPhoneClick, event } from './GoogleAnalytics'

// Microsoft Clarity
export function MicrosoftClarity() {
  useEffect(() => {
    const clarityId = process.env.NEXT_PUBLIC_CLARITY_ID
    if (!clarityId) return

    const script = document.createElement('script')
    script.innerHTML = `
      (function(c,l,a,r,i,t,y){
        c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
        t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
        y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
      })(window, document, "clarity", "script", "${clarityId}");
    `
    document.head.appendChild(script)

    return () => {
      document.head.removeChild(script)
    }
  }, [])

  return null
}

// Hotjar Tracking
export function HotjarTracking() {
  useEffect(() => {
    const hotjarId = process.env.NEXT_PUBLIC_HOTJAR_ID
    const hotjarVersion = process.env.NEXT_PUBLIC_HOTJAR_VERSION || 6
    
    if (!hotjarId) return

    const script = document.createElement('script')
    script.innerHTML = `
      (function(h,o,t,j,a,r){
        h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
        h._hjSettings={hjid:${hotjarId},hjsv:${hotjarVersion}};
        a=o.getElementsByTagName('head')[0];
        r=o.createElement('script');r.async=1;
        r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
        a.appendChild(r);
      })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
    `
    document.head.appendChild(script)

    return () => {
      document.head.removeChild(script)
    }
  }, [])

  return null
}

// LinkedIn Insight Tag
export function LinkedInInsight() {
  useEffect(() => {
    const partnerId = process.env.NEXT_PUBLIC_LINKEDIN_PARTNER_ID
    if (!partnerId) return

    const script = document.createElement('script')
    script.innerHTML = `
      _linkedin_partner_id = "${partnerId}";
      window._linkedin_data_partner_ids = window._linkedin_data_partner_ids || [];
      window._linkedin_data_partner_ids.push(_linkedin_partner_id);
    `
    document.head.appendChild(script)

    const trackingScript = document.createElement('script')
    trackingScript.async = true
    trackingScript.src = 'https://snap.licdn.com/li.lms-analytics/insight.min.js'
    document.head.appendChild(trackingScript)

    return () => {
      document.head.removeChild(script)
      document.head.removeChild(trackingScript)
    }
  }, [])

  return (
    <noscript>
      <img 
        height="1" 
        width="1" 
        style={{ display: 'none' }} 
        alt="" 
        src={`https://px.ads.linkedin.com/collect/?pid=${process.env.NEXT_PUBLIC_LINKEDIN_PARTNER_ID}&fmt=gif`}
      />
    </noscript>
  )
}

// Facebook Pixel
export function FacebookPixel() {
  useEffect(() => {
    const pixelId = process.env.NEXT_PUBLIC_FB_PIXEL_ID
    if (!pixelId) return

    const script = document.createElement('script')
    script.innerHTML = `
      !function(f,b,e,v,n,t,s)
      {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
      n.callMethod.apply(n,arguments):n.queue.push(arguments)};
      if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
      n.queue=[];t=b.createElement(e);t.async=!0;
      t.src=v;s=b.getElementsByTagName(e)[0];
      s.parentNode.insertBefore(t,s)}(window, document,'script',
      'https://connect.facebook.net/en_US/fbevents.js');
      fbq('init', '${pixelId}');
      fbq('track', 'PageView');
    `
    document.head.appendChild(script)

    return () => {
      document.head.removeChild(script)
    }
  }, [])

  return (
    <noscript>
      <img 
        height="1" 
        width="1" 
        style={{ display: 'none' }}
        src={`https://www.facebook.com/tr?id=${process.env.NEXT_PUBLIC_FB_PIXEL_ID}&ev=PageView&noscript=1`}
      />
    </noscript>
  )
}

// Conversion Tracking Hook
export function useConversionTracking() {
  // Track IT Health Check completions
  const trackHealthCheckCompletion = (score: number) => {
    trackConversion('health_check_completed', score)
    
    // Facebook Pixel
    if (typeof window !== 'undefined' && window.fbq) {
      window.fbq('track', 'CompleteRegistration', {
        content_name: 'IT Health Check',
        status: true,
        value: score
      })
    }
    
    // LinkedIn
    if (typeof window !== 'undefined' && window.lintrk) {
      window.lintrk('track', { conversion_id: 'health_check' })
    }
  }

  // Track contact form submissions
  const trackContactFormSubmission = (formData: any) => {
    trackFormSubmission('contact_form')
    trackConversion('contact_form_submitted', 1)
    
    // Facebook Pixel
    if (typeof window !== 'undefined' && window.fbq) {
      window.fbq('track', 'Lead', {
        content_name: 'Contact Form',
        content_category: formData.service || 'General'
      })
    }
    
    // LinkedIn
    if (typeof window !== 'undefined' && window.lintrk) {
      window.lintrk('track', { conversion_id: 'contact_form' })
    }
  }

  // Track phone number clicks
  const trackPhoneNumberClick = (phoneNumber: string) => {
    trackPhoneClick(phoneNumber)
    trackConversion('phone_click', 1)
    
    // Facebook Pixel
    if (typeof window !== 'undefined' && window.fbq) {
      window.fbq('track', 'Contact', {
        content_name: 'Phone Call',
        content_category: 'Direct Contact'
      })
    }
  }

  // Track service page views
  const trackServicePageView = (serviceName: string) => {
    event({
      action: 'view_item',
      category: 'services',
      label: serviceName
    })
    
    // Facebook Pixel
    if (typeof window !== 'undefined' && window.fbq) {
      window.fbq('track', 'ViewContent', {
        content_name: serviceName,
        content_category: 'Service'
      })
    }
  }

  // Track CTA clicks
  const trackCTAClick = (ctaName: string, location: string) => {
    event({
      action: 'cta_click',
      category: 'engagement',
      label: `${ctaName}_${location}`
    })
  }

  // Track newsletter signup
  const trackNewsletterSignup = (email: string) => {
    trackConversion('newsletter_signup', 1)
    
    // Facebook Pixel
    if (typeof window !== 'undefined' && window.fbq) {
      window.fbq('track', 'Subscribe', {
        predicted_ltv: 100,
        value: 0,
        currency: 'EUR'
      })
    }
  }

  return {
    trackHealthCheckCompletion,
    trackContactFormSubmission,
    trackPhoneNumberClick,
    trackServicePageView,
    trackCTAClick,
    trackNewsletterSignup
  }
}

// Enhanced Link Attribution
export function EnhancedLinkAttribution() {
  useEffect(() => {
    // Track all link clicks
    const handleLinkClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      const link = target.closest('a')
      
      if (link) {
        const href = link.getAttribute('href')
        const text = link.textContent || ''
        
        // Track phone links
        if (href?.startsWith('tel:')) {
          trackPhoneClick(href.replace('tel:', ''))
        }
        
        // Track email links
        if (href?.startsWith('mailto:')) {
          event({
            action: 'click',
            category: 'contact',
            label: 'email'
          })
        }
        
        // Track external links
        if (href?.startsWith('http') && !href.includes('workflo.it')) {
          event({
            action: 'outbound_click',
            category: 'navigation',
            label: href
          })
        }
        
        // Track CTA buttons
        if (link.classList.contains('cta-button') || link.classList.contains('btn-primary')) {
          event({
            action: 'cta_click',
            category: 'engagement',
            label: text
          })
        }
      }
    }

    document.addEventListener('click', handleLinkClick)
    return () => document.removeEventListener('click', handleLinkClick)
  }, [])

  return null
}

// Declare global types
declare global {
  interface Window {
    fbq: (...args: any[]) => void
    lintrk: (...args: any[]) => void
    clarity: (...args: any[]) => void
    hj: (...args: any[]) => void
  }
}