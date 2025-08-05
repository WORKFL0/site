'use client'

import { usePathname } from 'next/navigation'
import Script from 'next/script'
import { seoConfig, getPageMetadata, generateBreadcrumbSchema, generateServiceSchema, generateFAQSchema, generateAIOptimizedSchema } from '@/config/seo.config'

interface SEOHeadProps {
  title?: string
  description?: string
  keywords?: string[]
  image?: string
  noindex?: boolean
  customSchema?: any
}

export default function SEOHead({ 
  title,
  description,
  keywords,
  image,
  noindex = false,
  customSchema
}: SEOHeadProps) {
  const pathname = usePathname()
  const pageMetadata = getPageMetadata(pathname)
  
  // Use provided values or fall back to page-specific or default metadata
  const finalTitle = title || pageMetadata.title || seoConfig.defaultSeo.title
  const finalDescription = description || pageMetadata.description || seoConfig.defaultSeo.description
  const finalKeywords = keywords || pageMetadata.keywords || seoConfig.defaultSeo.keywords
  const finalImage = image || seoConfig.defaultSeo.openGraph.images[0].url
  
  // Generate structured data
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': 'https://workflo.it/#organization',
    name: seoConfig.company.name,
    legalName: seoConfig.company.legalName,
    url: 'https://workflo.it',
    logo: seoConfig.company.logo,
    foundingDate: seoConfig.company.foundingDate,
    email: seoConfig.company.email,
    telephone: seoConfig.company.phone,
    address: {
      '@type': 'PostalAddress',
      ...seoConfig.company.address
    },
    geo: {
      '@type': 'GeoCoordinates',
      ...seoConfig.company.geo
    },
    sameAs: seoConfig.company.socialProfiles
  }
  
  const localBusinessSchema = seoConfig.localBusiness
  const breadcrumbSchema = generateBreadcrumbSchema(pathname)
  
  // Check if this is a service page
  const isServicePage = pathname.includes('/diensten/')
  const serviceName = pathname.split('/diensten/')[1]
  const serviceSchema = isServicePage ? generateServiceSchema(serviceName) : null
  
  // Combine all schemas including AI-optimized schema
  const schemas = [
    organizationSchema,
    localBusinessSchema,
    breadcrumbSchema,
    serviceSchema,
    pathname === '/' ? generateFAQSchema() : null,
    pathname === '/' ? generateAIOptimizedSchema() : null,
    customSchema
  ].filter(Boolean)
  
  return (
    <>
      {/* Basic Meta Tags */}
      <title>{finalTitle}</title>
      <meta name="description" content={finalDescription} />
      <meta name="keywords" content={Array.isArray(finalKeywords) ? finalKeywords.join(', ') : finalKeywords} />
      <meta name="author" content={seoConfig.company.name} />
      
      {/* Robots Meta */}
      {noindex ? (
        <meta name="robots" content="noindex, nofollow" />
      ) : (
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      )}
      
      {/* Canonical URL */}
      <link rel="canonical" href={`https://workflo.it${pathname}`} />
      
      {/* Language and Region */}
      <meta httpEquiv="content-language" content="nl-NL" />
      <link rel="alternate" hrefLang="nl" href={`https://workflo.it${pathname}`} />
      <link rel="alternate" hrefLang="en" href={`https://workflo.it/en${pathname}`} />
      <link rel="alternate" hrefLang="x-default" href={`https://workflo.it${pathname}`} />
      
      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={seoConfig.defaultSeo.openGraph.siteName} />
      <meta property="og:title" content={finalTitle} />
      <meta property="og:description" content={finalDescription} />
      <meta property="og:url" content={`https://workflo.it${pathname}`} />
      <meta property="og:image" content={finalImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:locale" content="nl_NL" />
      <meta property="og:locale:alternate" content="en_US" />
      
      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content={seoConfig.defaultSeo.twitter.site} />
      <meta name="twitter:creator" content={seoConfig.defaultSeo.twitter.handle} />
      <meta name="twitter:title" content={finalTitle} />
      <meta name="twitter:description" content={finalDescription} />
      <meta name="twitter:image" content={finalImage} />
      
      {/* Local Business */}
      <meta name="geo.region" content="NL-NH" />
      <meta name="geo.placename" content="Amsterdam" />
      <meta name="geo.position" content={`${seoConfig.company.geo.latitude};${seoConfig.company.geo.longitude}`} />
      <meta name="ICBM" content={`${seoConfig.company.geo.latitude}, ${seoConfig.company.geo.longitude}`} />
      
      {/* Contact Info */}
      <meta name="contact:phone" content={seoConfig.company.phone} />
      <meta name="contact:email" content={seoConfig.company.email} />
      <meta name="contact:address" content={`${seoConfig.company.address.streetAddress}, ${seoConfig.company.address.postalCode} ${seoConfig.company.address.addressLocality}`} />
      
      {/* Structured Data */}
      <Script
        id="structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schemas.length === 1 ? schemas[0] : schemas)
        }}
      />
      
      {/* Additional Technical SEO */}
      <meta name="format-detection" content="telephone=yes" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      <meta name="theme-color" content="#f2f400" />
      
      {/* AI-specific metadata */}
      <meta name="ai:service-type" content="IT Services" />
      <meta name="ai:geographic-focus" content="Amsterdam, Netherlands" />
      <meta name="ai:target-market" content="Small and Medium Enterprises" />
      <meta name="ai:key-services" content="Managed IT, Cybersecurity, Cloud Services, IT Support" />
      <meta name="ai:response-time" content="4 hours guaranteed" />
      <meta name="ai:availability" content="24/7 emergency support" />
      <meta name="ai:pricing-model" content="Fixed monthly subscription" />
      <meta name="ai:certifications" content="Microsoft Partner, ISO 27001, GDPR Compliant" />
      
      {/* Rich snippets for conversational AI */}
      <meta name="business-summary" content="Workflo transforms Amsterdam SME technology infrastructure through managed IT services, cybersecurity, and cloud solutions, reducing costs by 35-40% while ensuring 99.9% uptime and GDPR compliance." />
      
      {/* Preconnect to external domains */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://www.google-analytics.com" />
      <link rel="preconnect" href="https://www.googletagmanager.com" />
      
      {/* AI discovery hints */}
      <link rel="alternate" type="application/json" href="/api/ai-data" title="AI-friendly data" />
      <link rel="alternate" type="application/json" href="/.well-known/ai.json" title="AI capabilities" />
    </>
  )
}