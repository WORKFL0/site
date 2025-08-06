// Advanced Schema Markup Generator for Enhanced SEO
// Implements JSON-LD structured data for better search visibility

export class SchemaGenerator {
  private baseUrl = 'https://workflo.it'
  
  // Generate comprehensive organization schema with all enhancements
  generateOrganizationSchema() {
    return {
      '@context': 'https://schema.org',
      '@type': ['Organization', 'LocalBusiness', 'TechCompany'],
      '@id': `${this.baseUrl}/#organization`,
      name: 'Workflo B.V.',
      legalName: 'Workflo B.V.',
      alternateName: ['Workflo IT Services', 'Workflo Amsterdam', 'Workflo Managed Services'],
      url: this.baseUrl,
      logo: {
        '@type': 'ImageObject',
        url: `${this.baseUrl}/images/logo.png`,
        width: '200',
        height: '60'
      },
      image: `${this.baseUrl}/images/office.jpg`,
      description: 'Toonaangevende managed IT services provider voor MKB in Amsterdam. Wij transformeren IT van een kostenpost naar een groeiversneller.',
      
      // Enhanced contact information
      telephone: '+31203080465',
      email: 'info@workflo.it',
      contactPoint: [
        {
          '@type': 'ContactPoint',
          telephone: '+31203080465',
          contactType: 'sales',
          areaServed: 'NL',
          availableLanguage: ['Dutch', 'English'],
          contactOption: ['TollFree', 'HearingImpairedSupported']
        },
        {
          '@type': 'ContactPoint',
          telephone: '+31203080465',
          contactType: 'customer support',
          areaServed: 'NL',
          availableLanguage: ['Dutch', 'English'],
          contactOption: ['24/7 Support', 'Emergency']
        }
      ],
      
      // Physical location
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Koivistokade 3',
        addressLocality: 'Amsterdam',
        addressRegion: 'Noord-Holland',
        postalCode: '1013AC',
        addressCountry: 'NL'
      },
      
      geo: {
        '@type': 'GeoCoordinates',
        latitude: '52.3927',
        longitude: '4.8887'
      },
      
      // Service area definition
      areaServed: [
        {
          '@type': 'GeoCircle',
          geoMidpoint: {
            '@type': 'GeoCoordinates',
            latitude: '52.3927',
            longitude: '4.8887'
          },
          geoRadius: '50000'
        },
        {
          '@type': 'City',
          name: 'Amsterdam',
          '@id': 'https://www.wikidata.org/wiki/Q727'
        },
        {
          '@type': 'State',
          name: 'Noord-Holland'
        }
      ],
      
      // Business hours
      openingHoursSpecification: [
        {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
          opens: '09:00',
          closes: '18:00'
        },
        {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
          opens: '00:00',
          closes: '23:59',
          description: '24/7 Emergency Support'
        }
      ],
      
      // Certifications and memberships
      memberOf: [
        {
          '@type': 'Organization',
          name: 'Microsoft Partner Network',
          url: 'https://partner.microsoft.com'
        },
        {
          '@type': 'Organization',
          name: 'Kamer van Koophandel',
          identifier: '63327597'
        }
      ],
      
      award: [
        'Microsoft Gold Partner 2024',
        'ISO 27001:2013 Certified',
        'GDPR/AVG Compliant Provider'
      ],
      
      // Founding and establishment
      foundingDate: '2015-01-01',
      foundingLocation: {
        '@type': 'Place',
        name: 'Amsterdam, Netherlands'
      },
      
      // Social profiles
      sameAs: [
        'https://www.linkedin.com/company/workflo',
        'https://x.com/workflo_it',
        'https://www.facebook.com/workflo.it',
        'https://github.com/workflo-it'
      ],
      
      // Reviews and ratings
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: '4.9',
        reviewCount: '187',
        bestRating: '5',
        worstRating: '1'
      },
      
      // Business identifiers
      taxID: 'NL855204506B01',
      vatID: 'NL855204506B01',
      identifier: {
        '@type': 'PropertyValue',
        propertyID: 'KvK',
        value: '63327597'
      },
      
      // Pricing information
      priceRange: '€€',
      paymentAccepted: ['Cash', 'Credit Card', 'Invoice', 'Bank Transfer', 'iDEAL'],
      currenciesAccepted: 'EUR'
    }
  }
  
  // Generate service schema for individual services
  generateServiceSchema(service: {
    name: string
    description: string
    url: string
    image?: string
    price?: string
    serviceType: string
  }) {
    return {
      '@context': 'https://schema.org',
      '@type': 'Service',
      '@id': `${this.baseUrl}${service.url}#service`,
      name: service.name,
      description: service.description,
      url: `${this.baseUrl}${service.url}`,
      image: service.image || `${this.baseUrl}/images/services/${service.name.toLowerCase().replace(/\s+/g, '-')}.jpg`,
      
      provider: {
        '@type': 'Organization',
        '@id': `${this.baseUrl}/#organization`,
        name: 'Workflo B.V.'
      },
      
      serviceType: service.serviceType,
      category: 'Information Technology Services',
      
      areaServed: {
        '@type': 'GeoCircle',
        geoMidpoint: {
          '@type': 'GeoCoordinates',
          latitude: '52.3927',
          longitude: '4.8887'
        },
        geoRadius: '50000'
      },
      
      availableChannel: [
        {
          '@type': 'ServiceChannel',
          serviceUrl: `${this.baseUrl}${service.url}`,
          servicePhone: '+31203080465',
          serviceLocation: {
            '@type': 'Place',
            name: 'Workflo Office Amsterdam',
            address: {
              '@type': 'PostalAddress',
              streetAddress: 'Koivistokade 3',
              addressLocality: 'Amsterdam',
              postalCode: '1013AC'
            }
          }
        }
      ],
      
      offers: {
        '@type': 'Offer',
        price: service.price || 'Contact for pricing',
        priceCurrency: 'EUR',
        availability: 'https://schema.org/InStock',
        validFrom: new Date().toISOString()
      },
      
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: `${service.name} Packages`,
        itemListElement: [
          {
            '@type': 'Offer',
            name: 'Starter Package',
            description: `Basic ${service.name} for small businesses`
          },
          {
            '@type': 'Offer',
            name: 'Professional Package',
            description: `Complete ${service.name} for growing companies`
          },
          {
            '@type': 'Offer',
            name: 'Enterprise Package',
            description: `Advanced ${service.name} with priority support`
          }
        ]
      }
    }
  }
  
  // Generate FAQ schema
  generateFAQSchema(faqs: Array<{question: string, answer: string}>) {
    return {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      '@id': `${this.baseUrl}/#faq`,
      mainEntity: faqs.map(faq => ({
        '@type': 'Question',
        name: faq.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: faq.answer,
          author: {
            '@type': 'Organization',
            name: 'Workflo B.V.'
          }
        }
      }))
    }
  }
  
  // Generate BreadcrumbList schema
  generateBreadcrumbSchema(items: Array<{name: string, url: string}>) {
    return {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      '@id': `${this.baseUrl}/#breadcrumb`,
      itemListElement: items.map((item, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        name: item.name,
        item: item.url.startsWith('http') ? item.url : `${this.baseUrl}${item.url}`
      }))
    }
  }
  
  // Generate WebPage schema with enhanced metadata
  generateWebPageSchema(page: {
    title: string
    description: string
    url: string
    datePublished?: string
    dateModified?: string
    keywords?: string[]
  }) {
    return {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      '@id': `${this.baseUrl}${page.url}#webpage`,
      url: `${this.baseUrl}${page.url}`,
      name: page.title,
      description: page.description,
      
      isPartOf: {
        '@type': 'WebSite',
        '@id': `${this.baseUrl}/#website`,
        url: this.baseUrl,
        name: 'Workflo IT Services',
        publisher: {
          '@type': 'Organization',
          '@id': `${this.baseUrl}/#organization`
        }
      },
      
      primaryImageOfPage: {
        '@type': 'ImageObject',
        url: `${this.baseUrl}/images/og-image.jpg`
      },
      
      datePublished: page.datePublished || new Date().toISOString(),
      dateModified: page.dateModified || new Date().toISOString(),
      
      keywords: page.keywords?.join(', '),
      
      breadcrumb: {
        '@id': `${this.baseUrl}/#breadcrumb`
      },
      
      mainEntity: {
        '@type': 'Organization',
        '@id': `${this.baseUrl}/#organization`
      },
      
      speakable: {
        '@type': 'SpeakableSpecification',
        cssSelector: ['h1', 'h2', '.summary', '.description']
      }
    }
  }
  
  // Generate Review schema
  generateReviewSchema(review: {
    author: string
    rating: number
    reviewBody: string
    datePublished?: string
  }) {
    return {
      '@context': 'https://schema.org',
      '@type': 'Review',
      author: {
        '@type': 'Person',
        name: review.author
      },
      reviewRating: {
        '@type': 'Rating',
        ratingValue: review.rating,
        bestRating: '5',
        worstRating: '1'
      },
      reviewBody: review.reviewBody,
      datePublished: review.datePublished || new Date().toISOString(),
      itemReviewed: {
        '@type': 'Organization',
        '@id': `${this.baseUrl}/#organization`
      }
    }
  }
  
  // Generate HowTo schema for guides
  generateHowToSchema(howTo: {
    name: string
    description: string
    totalTime: string
    steps: Array<{name: string, text: string}>
  }) {
    return {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      name: howTo.name,
      description: howTo.description,
      totalTime: howTo.totalTime,
      
      step: howTo.steps.map((step, index) => ({
        '@type': 'HowToStep',
        position: index + 1,
        name: step.name,
        text: step.text
      })),
      
      author: {
        '@type': 'Organization',
        '@id': `${this.baseUrl}/#organization`
      }
    }
  }
  
  // Generate SoftwareApplication schema for tools
  generateSoftwareApplicationSchema(app: {
    name: string
    description: string
    url: string
    applicationCategory: string
  }) {
    return {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      name: app.name,
      description: app.description,
      url: `${this.baseUrl}${app.url}`,
      applicationCategory: app.applicationCategory,
      operatingSystem: 'Web Browser',
      
      offers: {
        '@type': 'Offer',
        price: '0',
        priceCurrency: 'EUR',
        description: 'Gratis IT assessment tool'
      },
      
      author: {
        '@type': 'Organization',
        '@id': `${this.baseUrl}/#organization`
      },
      
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: '4.8',
        ratingCount: '156'
      }
    }
  }
  
  // Generate Event schema for webinars/events
  generateEventSchema(event: {
    name: string
    description: string
    startDate: string
    endDate: string
    location?: string
    isOnline?: boolean
  }) {
    return {
      '@context': 'https://schema.org',
      '@type': event.isOnline ? 'OnlineEvent' : 'Event',
      name: event.name,
      description: event.description,
      startDate: event.startDate,
      endDate: event.endDate,
      
      location: event.isOnline ? {
        '@type': 'VirtualLocation',
        url: `${this.baseUrl}/webinar`
      } : {
        '@type': 'Place',
        name: event.location || 'Workflo Office Amsterdam',
        address: {
          '@type': 'PostalAddress',
          streetAddress: 'Koivistokade 3',
          addressLocality: 'Amsterdam',
          postalCode: '1013AC'
        }
      },
      
      organizer: {
        '@type': 'Organization',
        '@id': `${this.baseUrl}/#organization`
      },
      
      offers: {
        '@type': 'Offer',
        price: '0',
        priceCurrency: 'EUR',
        availability: 'https://schema.org/InStock',
        url: `${this.baseUrl}/register`
      }
    }
  }
  
  // Combine all schemas for a page
  generatePageSchemas(pageType: string, data: any) {
    const schemas = []
    
    // Always include organization
    schemas.push(this.generateOrganizationSchema())
    
    // Add page-specific schemas
    switch(pageType) {
      case 'home':
        schemas.push(this.generateWebPageSchema({
          title: data.title,
          description: data.description,
          url: '/'
        }))
        if (data.faqs) {
          schemas.push(this.generateFAQSchema(data.faqs))
        }
        break
        
      case 'service':
        schemas.push(this.generateServiceSchema(data))
        schemas.push(this.generateWebPageSchema({
          title: data.title,
          description: data.description,
          url: data.url
        }))
        if (data.breadcrumbs) {
          schemas.push(this.generateBreadcrumbSchema(data.breadcrumbs))
        }
        break
        
      case 'contact':
        schemas.push(this.generateWebPageSchema({
          title: data.title,
          description: data.description,
          url: '/contact'
        }))
        break
        
      case 'assessment':
        schemas.push(this.generateSoftwareApplicationSchema({
          name: 'IT Health Check Tool',
          description: 'Gratis IT assessment voor Amsterdamse bedrijven',
          url: '/tevredenheidscheck',
          applicationCategory: 'BusinessApplication'
        }))
        break
    }
    
    return {
      '@context': 'https://schema.org',
      '@graph': schemas
    }
  }
}

export default new SchemaGenerator()