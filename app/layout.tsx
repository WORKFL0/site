import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react'
import CookieConsent from '@/components/CookieConsent'
import { LanguageProvider } from '@/context/LanguageContext'
import GoogleAnalytics from '@/components/Analytics/GoogleAnalytics'
import ErrorBoundary from '@/components/ErrorBoundary'
import { 
  MicrosoftClarity, 
  HotjarTracking, 
  LinkedInInsight, 
  FacebookPixel, 
  EnhancedLinkAttribution 
} from '@/components/Analytics/ConversionTracking'
import { seoConfig } from '@/config/seo.config'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  preload: true,
  fallback: ['system-ui', 'arial']
})

export const metadata: Metadata = {
  metadataBase: new URL('https://workflo.it'),
  title: {
    default: seoConfig.defaultSeo.title,
    template: seoConfig.defaultSeo.titleTemplate,
  },
  description: seoConfig.defaultSeo.description,
  keywords: seoConfig.defaultSeo.keywords,
  authors: [{ name: seoConfig.company.name }],
  creator: seoConfig.company.name,
  publisher: seoConfig.company.name,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: seoConfig.defaultSeo.title,
    description: seoConfig.defaultSeo.description,
    url: 'https://workflo.it',
    siteName: seoConfig.defaultSeo.openGraph.siteName,
    locale: 'nl_NL',
    alternateLocale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Workflo IT Services Amsterdam',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: seoConfig.defaultSeo.title,
    description: seoConfig.defaultSeo.description,
    site: seoConfig.defaultSeo.twitter.site,
    creator: seoConfig.defaultSeo.twitter.handle,
    images: ['/images/twitter-card.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://workflo.it',
    languages: {
      'nl-NL': 'https://workflo.it',
      'en-US': 'https://workflo.it/en',
    },
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
    yandex: process.env.NEXT_PUBLIC_YANDEX_VERIFICATION,
    yahoo: process.env.NEXT_PUBLIC_YAHOO_VERIFICATION,
  },
  category: 'technology',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  // Structured data for the entire site
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': 'https://workflo.it/#organization',
    name: seoConfig.company.name,
    legalName: seoConfig.company.legalName,
    url: 'https://workflo.it',
    logo: seoConfig.company.logo,
    foundingDate: seoConfig.company.foundingDate,
    address: {
      '@type': 'PostalAddress',
      ...seoConfig.company.address
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: seoConfig.company.phone,
      contactType: 'customer service',
      areaServed: 'NL',
      availableLanguage: ['Dutch', 'English']
    },
    sameAs: seoConfig.company.socialProfiles
  }

  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': 'https://workflo.it/#website',
    url: 'https://workflo.it',
    name: 'Workflo IT Services',
    description: seoConfig.defaultSeo.description,
    publisher: {
      '@id': 'https://workflo.it/#organization'
    },
    inLanguage: 'nl-NL',
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: 'https://workflo.it/search?q={search_term_string}'
      },
      'query-input': 'required name=search_term_string'
    }
  }

  return (
    <html lang="nl" className="scroll-smooth">
      <head>
        {/* Preconnect to improve performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://www.google-analytics.com" />
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        
        {/* DNS Prefetch for external resources */}
        <link rel="dns-prefetch" href="https://cdn.sanity.io" />
        <link rel="dns-prefetch" href="https://www.linkedin.com" />
        
        {/* Favicon and App Icons */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        
        {/* Theme Color */}
        <meta name="theme-color" content="#f2f400" />
        
        {/* Structured Data for AI Comprehension */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([organizationSchema, websiteSchema, seoConfig.localBusiness])
          }}
        />
        
        {/* AI-specific metadata for better understanding */}
        <meta name="ai:company-type" content="IT Services Provider" />
        <meta name="ai:service-area" content="Amsterdam, Netherlands" />
        <meta name="ai:primary-services" content="Managed IT, Cybersecurity, Cloud Services, IT Support" />
        <meta name="ai:target-audience" content="Small and Medium Enterprises" />
        <meta name="ai:specialization" content="Microsoft 365, GDPR Compliance, 24/7 Support" />
        <meta name="ai:contact-methods" content="Phone: +31203080465, Email: info@workflo.it, On-site support" />
        <meta name="ai:business-hours" content="Monday-Friday 9:00-18:00, 24/7 Emergency Support" />
        <meta name="ai:certifications" content="Microsoft Partner, ISO 27001, GDPR Compliant" />
        
        {/* Rich context for conversational AI */}
        <meta name="description-context" content="Workflo is an Amsterdam-based IT services company that helps small and medium businesses (SMEs) transform their technology infrastructure. We specialize in reducing IT costs while improving reliability and security. Our services include 24/7 managed IT support, cybersecurity protection, Microsoft 365 migrations, and GDPR compliance assistance." />
        
        {/* Entity disambiguation */}
        <meta name="entity:organization" content="Workflo B.V." />
        <meta name="entity:location" content="Amsterdam, Noord-Holland, Netherlands" />
        <meta name="entity:industry" content="Information Technology Services" />
        <meta name="entity:founding-year" content="2015" />
        <meta name="entity:employee-range" content="10-50" />
        <meta name="entity:revenue-range" content="€1M-€10M" />
      </head>
      <body className={`${inter.className} antialiased`}>
        <ErrorBoundary
          onError={(error, errorInfo) => {
            // Log error details for debugging
            const errorDetails = {
              message: error.message,
              stack: error.stack,
              componentStack: errorInfo.componentStack,
              timestamp: new Date().toISOString(),
              url: typeof window !== 'undefined' ? window.location.href : 'N/A'
            }
            console.error('Root ErrorBoundary caught error:', errorDetails)
          }}
        >
          <LanguageProvider>
            {children}
            <CookieConsent />
          </LanguageProvider>
        </ErrorBoundary>
        
        {/* Analytics and Tracking */}
        <Analytics />
        <GoogleAnalytics />
        <MicrosoftClarity />
        <HotjarTracking />
        <LinkedInInsight />
        <FacebookPixel />
        <EnhancedLinkAttribution />
        
        {/* Noscript fallback */}
        <noscript>
          <iframe 
            src={`https://www.googletagmanager.com/ns.html?id=${process.env.NEXT_PUBLIC_GTM_ID}`}
            height="0" 
            width="0" 
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
      </body>
    </html>
  )
}