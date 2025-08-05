// Comprehensive SEO Configuration for Workflo
// All SEO-related data centralized for easy management

export const seoConfig = {
  // Company Information
  company: {
    name: 'Workflo B.V.',
    legalName: 'Workflo B.V.',
    foundingDate: '2015-01-01',
    email: 'info@workflo.it',
    phone: '+31203080465',
    phoneDisplay: '020-30 80 465',
    kvk: '63327597', // Dutch Chamber of Commerce number
    vatId: 'NL855204506B01',
    address: {
      streetAddress: 'Koivistokade 3',
      addressLocality: 'Amsterdam',
      addressRegion: 'Noord-Holland',
      postalCode: '1013AC',
      addressCountry: 'NL',
      countryName: 'Netherlands'
    },
    geo: {
      latitude: '52.3927', 
      longitude: '4.8887'
    },
    socialProfiles: [
      'https://www.linkedin.com/company/workflo',
      'https://x.com/workflo_it'
    ],
    logo: 'https://workflo.it/images/logo.png',
    image: 'https://workflo.it/images/office.jpg'
  },

  // Default SEO Settings
  defaultSeo: {
    title: "Workflo - Amsterdam's Most Trusted IT Partner for SMEs",
    titleTemplate: '%s | Workflo IT Services Amsterdam',
    description: 'Transform your IT from a cost center into a growth engine. Amsterdam SMEs trust Workflo to reduce IT costs by 35% while increasing productivity. Get 24/7 support, GDPR compliance, and strategic IT planning.',
    keywords: [
      'IT services Amsterdam',
      'managed IT services Amsterdam',
      'IT support Amsterdam',
      'IT diensten Amsterdam',
      'cloud services Amsterdam',
      'cybersecurity Amsterdam',
      'Microsoft 365 Amsterdam',
      'IT partner MKB',
      'managed service provider Amsterdam',
      'IT beheer Amsterdam',
      'network management Amsterdam',
      'IT consulting Amsterdam',
      'GDPR compliance Netherlands',
      'IT solutions SME Amsterdam',
      'IT outsourcing Amsterdam'
    ],
    openGraph: {
      type: 'website',
      locale: 'nl_NL',
      alternateLocale: 'en_US',
      url: 'https://workflo.it',
      siteName: 'Workflo IT Services',
      images: [{
        url: 'https://workflo.it/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Workflo - IT Services Amsterdam'
      }]
    },
    twitter: {
      handle: '@workflo_it',
      site: '@workflo_it',
      cardType: 'summary_large_image'
    }
  },

  // Page-specific SEO
  pages: {
    home: {
      title: "IT Services Amsterdam - 24/7 Support for SMEs",
      description: "Stop IT problems today. Amsterdam's most trusted IT partner. Save 35% on IT costs, get 99.9% uptime guarantee, same-day support. 200+ local businesses trust Workflo.",
      keywords: ['IT services Amsterdam', 'IT support SME', 'managed IT Amsterdam', 'IT partner MKB Amsterdam'],
      schema: ['Organization', 'LocalBusiness', 'ProfessionalService']
    },
    services: {
      title: "IT Services & Solutions for Amsterdam Businesses",
      description: "Complete IT services for Amsterdam SMEs: Managed IT, Cloud Solutions, Cybersecurity, Microsoft 365, Network Management. Fixed monthly pricing, no surprises.",
      keywords: ['managed IT services', 'cloud services Amsterdam', 'cybersecurity Netherlands', 'IT solutions SME'],
      schema: ['Service', 'ProfessionalService']
    },
    'managed-it': {
      title: "Managed IT Services Amsterdam - 24/7 Monitoring & Support",
      description: "Complete IT management for Amsterdam businesses. 24/7 monitoring, helpdesk support, proactive maintenance. Save 40% on IT costs with fixed monthly pricing.",
      keywords: ['managed IT services Amsterdam', 'IT beheer Amsterdam', 'IT outsourcing', '24/7 IT support'],
      schema: ['Service', 'ProfessionalService']
    },
    'cybersecurity': {
      title: "Cybersecurity Services Amsterdam - GDPR Compliant Protection",
      description: "Advanced cybersecurity for Amsterdam SMEs. GDPR compliance, threat protection, security audits. €50,000 security guarantee. Protect your business today.",
      keywords: ['cybersecurity Amsterdam', 'GDPR compliance', 'IT security Netherlands', 'data protection'],
      schema: ['Service', 'ProfessionalService']
    },
    'cloud': {
      title: "Cloud Services Amsterdam - Microsoft 365 & Azure Solutions",
      description: "Cloud migration and management for Amsterdam businesses. Microsoft 365, Azure, backup solutions. Scale instantly, pay-as-you-grow. Local support included.",
      keywords: ['cloud services Amsterdam', 'Microsoft 365 Amsterdam', 'Azure Netherlands', 'cloud migration'],
      schema: ['Service', 'ProfessionalService']
    },
    'it-consulting': {
      title: "IT Consulting Amsterdam - Strategic Technology Planning",
      description: "Strategic IT consulting for Amsterdam SMEs. Digital transformation, technology roadmaps, cost optimization. Align IT with your business goals.",
      keywords: ['IT consulting Amsterdam', 'IT strategy', 'digital transformation', 'technology planning'],
      schema: ['Service', 'ProfessionalService']
    },
    'about': {
      title: "About Workflo - Your Local Amsterdam IT Partner Since 2015",
      description: "Meet the Amsterdam IT experts behind Workflo. Local team, global expertise. Supporting 200+ businesses with personalized IT solutions since 2015.",
      keywords: ['IT company Amsterdam', 'about Workflo', 'IT team Amsterdam', 'local IT support'],
      schema: ['Organization', 'AboutPage']
    },
    'contact': {
      title: "Contact Workflo - IT Support Amsterdam | 020-30 80 465",
      description: "Get in touch with Amsterdam's trusted IT partner. Call 020-30 80 465 for immediate support or schedule a free consultation. Office in Amsterdam Noord.",
      keywords: ['contact IT support', 'IT help Amsterdam', 'Workflo contact', 'IT service desk'],
      schema: ['Organization', 'ContactPage']
    },
    'tevredenheidscheck': {
      title: "Free IT Health Check - Discover Your IT Score in 2 Minutes",
      description: "Get your free IT assessment. Discover cost savings, security gaps, and growth opportunities. Takes 2 minutes, instant results. Worth €500, completely free.",
      keywords: ['IT assessment', 'IT health check', 'free IT audit', 'IT analysis Amsterdam'],
      schema: ['WebApplication', 'Quiz']
    }
  },

  // Service-specific structured data
  services: [
    {
      name: 'Managed IT Services',
      description: '24/7 IT monitoring, support, and management for Amsterdam businesses',
      provider: 'Workflo B.V.',
      serviceType: 'IT Support and Management',
      areaServed: ['Amsterdam', 'Noord-Holland', 'Netherlands'],
      priceRange: '€€',
      url: '/diensten/managed-it'
    },
    {
      name: 'Cybersecurity Services',
      description: 'Advanced threat protection and GDPR compliance for SMEs',
      provider: 'Workflo B.V.',
      serviceType: 'Information Security',
      areaServed: ['Amsterdam', 'Noord-Holland', 'Netherlands'],
      priceRange: '€€',
      url: '/diensten/cybersecurity'
    },
    {
      name: 'Cloud Services',
      description: 'Microsoft 365, Azure, and cloud migration services',
      provider: 'Workflo B.V.',
      serviceType: 'Cloud Computing',
      areaServed: ['Amsterdam', 'Noord-Holland', 'Netherlands'],
      priceRange: '€€',
      url: '/diensten/cloud'
    },
    {
      name: 'IT Consulting',
      description: 'Strategic technology planning and digital transformation',
      provider: 'Workflo B.V.',
      serviceType: 'Technology Consulting',
      areaServed: ['Amsterdam', 'Noord-Holland', 'Netherlands'],
      priceRange: '€€€',
      url: '/diensten/it-consulting'
    },
    {
      name: 'Project Management',
      description: 'IT project planning and implementation',
      provider: 'Workflo B.V.',
      serviceType: 'Project Management',
      areaServed: ['Amsterdam', 'Noord-Holland', 'Netherlands'],
      priceRange: '€€',
      url: '/diensten/project-management'
    },
    {
      name: 'Network Connectivity',
      description: 'Network infrastructure and connectivity solutions',
      provider: 'Workflo B.V.',
      serviceType: 'Network Services',
      areaServed: ['Amsterdam', 'Noord-Holland', 'Netherlands'],
      priceRange: '€€',
      url: '/diensten/connectivity'
    },
    {
      name: 'Audio Visual Solutions',
      description: 'Meeting room technology and AV solutions',
      provider: 'Workflo B.V.',
      serviceType: 'Audio Visual Services',
      areaServed: ['Amsterdam', 'Noord-Holland', 'Netherlands'],
      priceRange: '€€',
      url: '/diensten/audio-visueel'
    },
    {
      name: 'Mobile Device Management',
      description: 'Secure mobile device and application management',
      provider: 'Workflo B.V.',
      serviceType: 'Mobile Device Management',
      areaServed: ['Amsterdam', 'Noord-Holland', 'Netherlands'],
      priceRange: '€€',
      url: '/diensten/mobile-device-management'
    }
  ],

  // FAQ Schema Data - Optimized for AI comprehension
  faqs: [
    {
      question: 'How much do IT services cost for Amsterdam SMEs?',
      answer: 'Workflo\'s managed IT services start at €750 per month for small businesses in Amsterdam. Most Amsterdam SMEs save 35-40% on their total IT costs by switching to Workflo. We offer transparent, fixed monthly pricing with no hidden fees, including 24/7 monitoring, helpdesk support, and on-site assistance.',
      keywords: ['IT services pricing', 'Amsterdam IT costs', 'managed IT pricing', 'SME IT budget'],
      category: 'Pricing'
    },
    {
      question: 'Do you provide on-site IT support in Amsterdam?',
      answer: 'Yes, Workflo provides same-day on-site IT support throughout Amsterdam and surrounding areas including Zaandam, Haarlem, and Almere. Our local Amsterdam-based team can be at your office within 4 hours for urgent issues, with guaranteed response times.',
      keywords: ['Amsterdam IT support', 'on-site IT help', 'local IT technician', 'emergency IT support'],
      category: 'Support Services'
    },
    {
      question: 'Are you GDPR compliant?',
      answer: 'Absolutely. All Workflo services are 100% GDPR (AVG) compliant and meet Dutch data protection regulations. We help Amsterdam businesses achieve complete compliance with EU data protection requirements, including data processing agreements, security measures, and audit trails.',
      keywords: ['GDPR compliance', 'AVG compliance', 'data protection Netherlands', 'EU privacy laws'],
      category: 'Compliance'
    },
    {
      question: 'What is your response time for IT issues?',
      answer: 'Workflo guarantees a maximum 4-hour response time for all IT support requests. Critical P1 issues affecting business operations are addressed immediately with our 24/7 monitoring and emergency support team. Most issues are resolved within the same business day.',
      keywords: ['IT response time', '24/7 IT support', 'emergency IT help', 'SLA guarantees'],
      category: 'Service Level'
    },
    {
      question: 'Can you help migrate to Microsoft 365?',
      answer: 'Yes, Workflo is a certified Microsoft Partner specializing in seamless Microsoft 365 migrations for Amsterdam businesses. We handle the complete migration process including email migration, file transfers, user training, security configuration, and ongoing support with zero downtime.',
      keywords: ['Microsoft 365 migration', 'Office 365 setup', 'email migration Amsterdam', 'Microsoft Partner'],
      category: 'Cloud Services'
    },
    {
      question: 'Do you work with small businesses?',
      answer: 'Yes, Workflo specializes in supporting Amsterdam SMEs (small and medium enterprises) with 10-250 employees. Our IT services are specifically designed to be scalable and cost-effective for growing businesses, from startups to established companies.',
      keywords: ['SME IT services', 'small business IT Amsterdam', 'scalable IT solutions', 'growing business technology'],
      category: 'Business Size'
    },
    {
      question: 'What industries do you serve in Amsterdam?',
      answer: 'Workflo serves all industries in Amsterdam with specialized expertise in retail & e-commerce, financial services, healthcare & medical practices, legal firms, creative agencies, logistics & transport, and professional services. We understand sector-specific compliance and technology requirements.',
      keywords: ['Amsterdam IT industries', 'sector-specific IT', 'industry expertise', 'vertical solutions'],
      category: 'Industries'
    },
    {
      question: 'Do you provide cybersecurity services?',
      answer: 'Yes, Workflo provides comprehensive cybersecurity services including threat protection, firewall management, endpoint security, security awareness training, and GDPR-compliant data protection. We offer a €50,000 security guarantee for qualifying customers.',
      keywords: ['Amsterdam cybersecurity', 'IT security services', 'threat protection', 'security guarantee'],
      category: 'Security'
    }
  ],

  // Local Business Schema Data
  localBusiness: {
    '@type': 'LocalBusiness',
    '@id': 'https://workflo.it/#organization',
    name: 'Workflo IT Services',
    alternateName: 'Workflo B.V.',
    description: 'Professional IT services and support for Amsterdam businesses',
    url: 'https://workflo.it',
    telephone: '+31203080465',
    email: 'info@workflo.it',
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
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '09:00',
        closes: '18:00'
      }
    ],
    priceRange: '€€',
    paymentAccepted: ['Cash', 'Credit Card', 'Bank Transfer', 'Invoice'],
    currenciesAccepted: 'EUR',
    areaServed: [
      {
        '@type': 'City',
        name: 'Amsterdam'
      },
      {
        '@type': 'State',
        name: 'Noord-Holland'
      },
      {
        '@type': 'Country',
        name: 'Netherlands'
      }
    ],
    sameAs: [
      'https://www.linkedin.com/company/workflo',
      'https://x.com/workflo_it'
    ],
    logo: {
      '@type': 'ImageObject',
      url: 'https://workflo.it/images/logo.png'
    },
    image: 'https://workflo.it/images/office.jpg',
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      reviewCount: '187',
      bestRating: '5',
      worstRating: '1'
    }
  },

  // Breadcrumb paths
  breadcrumbs: {
    '/': ['Home'],
    '/diensten': ['Home', 'Diensten'],
    '/diensten/managed-it': ['Home', 'Diensten', 'Managed IT Services'],
    '/diensten/cybersecurity': ['Home', 'Diensten', 'Cybersecurity'],
    '/diensten/cloud': ['Home', 'Diensten', 'Cloud Services'],
    '/diensten/it-consulting': ['Home', 'Diensten', 'IT Consulting'],
    '/diensten/project-management': ['Home', 'Diensten', 'Project Management'],
    '/diensten/connectivity': ['Home', 'Diensten', 'Connectivity'],
    '/diensten/audio-visueel': ['Home', 'Diensten', 'Audio Visual'],
    '/diensten/mobile-device-management': ['Home', 'Diensten', 'Mobile Device Management'],
    '/over-ons': ['Home', 'Over Ons'],
    '/contact': ['Home', 'Contact'],
    '/tevredenheidscheck': ['Home', 'IT Health Check'],
    '/case-studies': ['Home', 'Case Studies'],
    '/privacy': ['Home', 'Privacy Policy'],
    '/terms': ['Home', 'Terms & Conditions'],
    '/cookies': ['Home', 'Cookie Policy']
  }
}

// Helper function to get page-specific metadata
export function getPageMetadata(pathname: string) {
  const cleanPath = pathname.replace(/^\//, '').replace(/\/$/, '') || 'home'
  const pageKey = cleanPath.replace(/^diensten\//, '')
  
  return seoConfig.pages[pageKey as keyof typeof seoConfig.pages] || seoConfig.defaultSeo
}

// Helper function to generate breadcrumb schema
export function generateBreadcrumbSchema(pathname: string) {
  const breadcrumbs = seoConfig.breadcrumbs[pathname as keyof typeof seoConfig.breadcrumbs] || ['Home']
  
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: breadcrumbs.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item,
      item: index === 0 ? 'https://workflo.it' : `https://workflo.it${pathname}`
    }))
  }
}

// Helper function to generate service schema
export function generateServiceSchema(serviceName: string) {
  const service = seoConfig.services.find(s => s.url.includes(serviceName))
  if (!service) return null
  
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: service.name,
    description: service.description,
    provider: {
      '@type': 'Organization',
      name: service.provider
    },
    serviceType: service.serviceType,
    areaServed: service.areaServed.map(area => ({
      '@type': 'Place',
      name: area
    })),
    url: `https://workflo.it${service.url}`
  }
}

// Helper function to generate FAQ schema
export function generateFAQSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: seoConfig.faqs.map(faq => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer
      }
    }))
  }
}

// Helper function to generate comprehensive AI-optimized schema
export function generateAIOptimizedSchema() {
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'TechCompany',
        '@id': 'https://workflo.it/#techcompany',
        name: 'Workflo B.V.',
        alternateName: ['Workflo', 'Workflo IT Services', 'Workflo Amsterdam'],
        description: 'Leading IT services provider specializing in managed IT, cybersecurity, and cloud solutions for Amsterdam SMEs. Transforming businesses through reliable, scalable technology solutions.',
        foundingDate: '2015-01-01',
        url: 'https://workflo.it',
        logo: 'https://workflo.it/images/logo.png',
        slogan: 'Transform your IT from a cost center into a growth engine',
        specialty: [
          'Managed IT Services',
          'Cybersecurity',
          'Cloud Solutions',
          'Microsoft 365',
          'GDPR Compliance',
          'IT Consulting',
          'Network Management',
          'Business Continuity'
        ],
        serviceArea: {
          '@type': 'GeoCircle',
          geoMidpoint: {
            '@type': 'GeoCoordinates',
            latitude: '52.3927',
            longitude: '4.8887'
          },
          geoRadius: '50000'
        },
        knowsAbout: [
          'Information Technology',
          'Cybersecurity',
          'Cloud Computing',
          'Network Infrastructure',
          'Data Protection',
          'GDPR Compliance',
          'Microsoft Technologies',
          'Business Process Optimization',
          'Digital Transformation',
          'IT Service Management'
        ],
        award: [
          'Microsoft Gold Partner',
          'ISO 27001 Certified',
          '99.9% Uptime Achievement',
          'GDPR Compliance Excellence'
        ]
      },
      {
        '@type': 'ProfessionalService',
        '@id': 'https://workflo.it/#professionalservice',
        name: 'IT Services Amsterdam',
        provider: {
          '@id': 'https://workflo.it/#organization'
        },
        serviceType: 'Information Technology Services',
        description: 'Comprehensive IT services for Amsterdam businesses including managed IT, cybersecurity, cloud solutions, and 24/7 support.',
        availableChannel: [
          {
            '@type': 'ServiceChannel',
            name: '24/7 Phone Support',
            servicePhone: '+31203080465'
          },
          {
            '@type': 'ServiceChannel',
            name: 'Email Support',
            email: 'support@workflo.it'
          },
          {
            '@type': 'ServiceChannel',
            name: 'On-site Support',
            description: 'Same-day on-site support in Amsterdam'
          },
          {
            '@type': 'ServiceChannel',
            name: 'Remote Support',
            url: 'https://get.teamviewer.com/workflo-support'
          }
        ]
      },
      {
        '@type': 'Dataset',
        '@id': 'https://workflo.it/#knowledge',
        name: 'Workflo IT Knowledge Base',
        description: 'Comprehensive knowledge base about IT services, cybersecurity, cloud solutions, and business technology for Amsterdam SMEs.',
        keywords: seoConfig.defaultSeo.keywords.join(', '),
        creator: {
          '@id': 'https://workflo.it/#organization'
        },
        about: [
          {
            '@type': 'Thing',
            name: 'Managed IT Services',
            description: '24/7 IT monitoring, support, and management for businesses'
          },
          {
            '@type': 'Thing',
            name: 'Cybersecurity',
            description: 'Advanced threat protection and GDPR-compliant security solutions'
          },
          {
            '@type': 'Thing',
            name: 'Cloud Services',
            description: 'Microsoft 365, Azure, and cloud migration services'
          }
        ]
      }
    ]
  }
}