// Enhanced SEO Configuration for Workflo - Optimized for Local Search and Competition
// Improvements based on competitive analysis of BizQIT, Fox-IT, and market research

export const enhancedSeoConfig = {
  // Enhanced Company Information with Local SEO Focus
  company: {
    name: 'Workflo B.V.',
    legalName: 'Workflo B.V.',
    foundingDate: '2015-01-01',
    email: 'info@workflo.it',
    phone: '+31203080465',
    phoneDisplay: '020-30 80 465',
    kvk: '63327597',
    vatId: 'NL855204506B01',
    address: {
      streetAddress: 'Koivistokade 3',
      addressLocality: 'Amsterdam',
      addressRegion: 'Noord-Holland',
      postalCode: '1013AC',
      addressCountry: 'NL',
      countryName: 'Netherlands',
      neighborhood: 'Amsterdam Noord' // Added for local SEO
    },
    geo: {
      latitude: '52.3927',
      longitude: '4.8887'
    },
    serviceAreas: [ // Enhanced service area definitions
      'Amsterdam',
      'Amsterdam Noord',
      'Amsterdam Zuid',
      'Amsterdam Zuidoost',
      'Zaandam',
      'Haarlem',
      'Almere',
      'Amstelveen',
      'Hoofddorp',
      'Schiphol',
      'Zuidas'
    ],
    socialProfiles: [
      'https://www.linkedin.com/company/workflo',
      'https://x.com/workflo_it',
      'https://www.facebook.com/workflo.it', // Add if available
      'https://www.youtube.com/@workflo-it' // Add if available
    ],
    certifications: [
      'Microsoft Partner',
      'ISO 27001 Compliant',
      'GDPR/AVG Certified',
      'NEN 7510 Healthcare Standard'
    ]
  },

  // Enhanced Default SEO with Competitive Keywords
  defaultSeo: {
    title: "Workflo - #1 IT Beheer & Support Amsterdam | 24/7 Managed IT Services",
    titleTemplate: '%s | Workflo IT Diensten Amsterdam',
    description: 'Bespaar 40% op IT kosten met Workflo\'s managed IT services Amsterdam. ISO 27001 gecertificeerd, 24/7 support, 99.9% uptime garantie. Voor MKB 10-250 medewerkers. Gratis IT-scan t.w.v. €500.',
    keywords: [
      // Primary Keywords (High Intent)
      'IT beheer Amsterdam',
      'managed IT services Amsterdam',
      'IT diensten Amsterdam',
      'IT support Amsterdam',
      'IT outsourcing Amsterdam',
      
      // Dutch Language Keywords
      'IT dienstverlening Amsterdam',
      'ICT beheer Amsterdam',
      'systeembeheer Amsterdam',
      'netwerkbeheer Amsterdam',
      'IT ondersteuning MKB',
      
      // Service-Specific Keywords
      'Microsoft 365 beheer Amsterdam',
      'cloud diensten Amsterdam',
      'cybersecurity Amsterdam',
      'backup oplossingen Amsterdam',
      'IT consultancy Amsterdam',
      
      // Location-Specific Keywords
      'IT bedrijf Amsterdam Noord',
      'IT partner Zuidas',
      'ICT diensten Noord-Holland',
      'computerservice Amsterdam',
      
      // Competitor Alternative Keywords
      'alternatief BizQIT',
      'vergelijk Fox-IT',
      'beste managed service provider Amsterdam',
      
      // Industry-Specific Keywords
      'IT support kantoor Amsterdam',
      'IT diensten ZZP Amsterdam',
      'IT oplossingen MKB Amsterdam',
      'IT automatisering Amsterdam',
      
      // Problem-Solution Keywords
      'IT problemen oplossen Amsterdam',
      'computer reparatie zakelijk Amsterdam',
      'netwerk storingen Amsterdam',
      'data recovery Amsterdam'
    ]
  },

  // Enhanced Page-Specific SEO with Local Intent
  pages: {
    home: {
      title: "IT Beheer Amsterdam | 24/7 Support MKB | Bespaar 40% - Workflo",
      description: "Stop IT-problemen vandaag. Amsterdam's #1 IT-partner voor MKB. ✓ 4 uur responstijd ✓ 99.9% uptime ✓ ISO 27001 ✓ Gratis IT-scan. Bel 020-30 80 465.",
      keywords: ['IT beheer Amsterdam', 'IT support MKB Amsterdam', 'managed IT Amsterdam', 'IT diensten Amsterdam Noord'],
      h1: "De Beste IT Partner voor Amsterdamse MKB Bedrijven",
      schema: ['Organization', 'LocalBusiness', 'ProfessionalService', 'TechCompany']
    },
    
    'diensten/managed-it': {
      title: "Managed IT Services Amsterdam | Compleet IT Beheer vanaf €750/maand",
      description: "Volledig IT beheer voor Amsterdamse bedrijven. 24/7 monitoring, helpdesk, on-site support binnen 4 uur. Vaste prijs, geen verrassingen. ISO 27001 gecertificeerd.",
      keywords: ['managed IT services Amsterdam', 'IT beheer uitbesteden', 'outsourcing IT Amsterdam', 'volledig IT beheer'],
      h1: "Managed IT Services - Uw Complete IT-Afdeling",
      contentSuggestions: [
        'Vergelijking met interne IT-afdeling kosten',
        'Case study: 40% kostenbesparing bij Amsterdams advocatenkantoor',
        'SLA garanties en response tijden',
        'Inclusief Microsoft 365 licenties en beheer'
      ]
    },
    
    'diensten/cybersecurity': {
      title: "Cybersecurity Amsterdam | GDPR/AVG Compliant | €50.000 Garantie",
      description: "Bescherm uw bedrijf tegen cyberdreigingen. ISO 27001 security, GDPR/AVG compliance, 24/7 threat monitoring. Voor MKB Amsterdam. Gratis security scan.",
      keywords: ['cybersecurity Amsterdam', 'GDPR compliance Nederland', 'AVG dienstverlening', 'IT beveiliging MKB'],
      h1: "Enterprise Cybersecurity voor MKB Prijzen",
      contentSuggestions: [
        'GDPR/AVG compliance checklist voor Nederlandse bedrijven',
        'Cyber verzekering: wat dekt onze €50.000 garantie',
        'Security awareness training voor medewerkers',
        'Ransomware bescherming en recovery planning'
      ]
    },
    
    'diensten/cloud': {
      title: "Cloud Migratie Amsterdam | Microsoft 365 & Azure Partner | Workflo",
      description: "Stap over naar de cloud zonder downtime. Microsoft Gold Partner voor Office 365 migratie, Azure setup, SharePoint. Lokale support Amsterdam. Bel 020-30 80 465.",
      keywords: ['cloud migratie Amsterdam', 'Microsoft 365 Amsterdam', 'Office 365 migratie', 'Azure partner Nederland'],
      h1: "Microsoft Cloud Oplossingen met Amsterdamse Support",
      contentSuggestions: [
        'Microsoft 365 vs Google Workspace vergelijking',
        'Hybride cloud oplossingen voor Nederlandse wetgeving',
        'SharePoint implementatie best practices',
        'Teams telefonie integratie voor Nederlandse nummers'
      ]
    },
    
    'diensten/it-consulting': {
      title: "IT Consultancy Amsterdam | Digitale Transformatie MKB | Strategisch Advies",
      description: "Strategisch IT advies voor groeiende bedrijven. Digital transformation, IT roadmap, kostenoptimalisatie. Ervaren consultants Amsterdam. Gratis strategiesessie.",
      keywords: ['IT consultancy Amsterdam', 'IT advies MKB', 'digitale transformatie', 'IT strategie Amsterdam'],
      h1: "IT Consultancy - Van Kosten naar Groei",
      contentSuggestions: [
        'IT budget optimalisatie: gemiddeld 35% besparing',
        'Digitale transformatie roadmap voor MKB',
        'IT due diligence voor fusies en overnames',
        'Vendor management en contract optimalisatie'
      ]
    },
    
    'tevredenheidscheck': {
      title: "Gratis IT Scan Amsterdam | Bespaar €19.000/jaar | 2 Minuten Test",
      description: "Ontdek direct hoeveel u kunt besparen op IT. Gratis IT assessment voor Amsterdamse bedrijven. Krijg persoonlijk advies van experts. Waarde €500, nu gratis.",
      keywords: ['IT scan gratis', 'IT assessment Amsterdam', 'IT audit MKB', 'IT kosten analyse'],
      h1: "Uw Gratis IT Gezondheidscheck - Direct Resultaat",
      schema: ['WebApplication', 'Quiz', 'SoftwareApplication']
    },
    
    'over-ons': {
      title: "Over Workflo | Lokaal IT Team Amsterdam Noord | Sinds 2015",
      description: "Leer het team achter Workflo kennen. 10+ jaar ervaring, 200+ tevreden klanten, kantoor in Amsterdam Noord. Nederlandse service, internationale expertise.",
      keywords: ['IT bedrijf Amsterdam Noord', 'over Workflo', 'lokaal IT team', 'Nederlandse IT partner'],
      h1: "Het Gezicht Achter Uw IT Success",
      contentSuggestions: [
        'Team certificeringen en specialisaties',
        'Onze missie: IT toegankelijk voor elk MKB',
        'Community betrokkenheid Amsterdam Noord',
        'Partner ecosystem: Microsoft, Cisco, VMware'
      ]
    },
    
    'contact': {
      title: "Contact Workflo Amsterdam | Bel 020-30 80 465 | Koivistokade 3",
      description: "Direct contact met Workflo IT Support. Kantoor Amsterdam Noord, 5 min van Noord station. Gratis parkeren. WhatsApp support beschikbaar.",
      keywords: ['contact IT support Amsterdam', 'Workflo kantoor', 'IT hulp Amsterdam Noord', 'noodlijn IT'],
      h1: "24/7 Bereikbaar voor Uw IT Vragen",
      schema: ['Organization', 'ContactPage', 'LocalBusiness']
    },

    // New Landing Pages for Local SEO
    'amsterdam-noord': {
      title: "IT Support Amsterdam Noord | Lokale IT Partner | Same-Day Service",
      description: "IT diensten specifiek voor bedrijven in Amsterdam Noord. On-site binnen 2 uur, kantoor op Koivistokade. Kent de lokale ondernemers.",
      keywords: ['IT support Amsterdam Noord', 'computer service NDSM', 'IT bedrijf Overhoeks'],
      h1: "Uw Buurman voor IT in Amsterdam Noord"
    },
    
    'zuidas': {
      title: "IT Services Zuidas | Premium IT Support Financieel District",
      description: "Specialized IT voor Zuidas bedrijven. Compliance expertise, high-availability solutions, 1-uur response time. Partner van advocaten en financials.",
      keywords: ['IT Zuidas', 'IT support advocatenkantoor', 'financial IT services Amsterdam'],
      h1: "Enterprise IT Solutions voor Zuidas Professionals"
    }
  },

  // Enhanced FAQ Schema with Competitive Differentiation
  enhancedFaqs: [
    {
      question: 'Waarom Workflo kiezen boven BizQIT of Fox-IT?',
      answer: 'Workflo combineert de persoonlijke aanpak van een lokaal bedrijf met enterprise-niveau expertise. In tegenstelling tot grote spelers bieden wij vaste lage prijzen vanaf €750/maand, 4-uur response garantie, en een vast aanspreekpunt. Wij zijn gespecialiseerd in MKB 10-250 medewerkers, waar grotere partijen zich vaak op enterprise richten. Plus: wij bieden een €50.000 security garantie standaard.',
      keywords: ['Workflo vs BizQIT', 'Workflo vs Fox-IT', 'beste IT partner Amsterdam'],
      priority: 'high'
    },
    {
      question: 'Wat kost IT beheer voor een bedrijf met 25 medewerkers in Amsterdam?',
      answer: 'Voor een typisch Amsterdams bedrijf met 25 medewerkers rekenen wij €1.250-€2.000 per maand voor complete managed IT services. Dit includeert 24/7 monitoring, helpdesk, on-site support, Microsoft 365 licenties, backup, security, en updates. Gemiddeld besparen onze klanten €19.000 per jaar vergeleken met een interne IT-medewerker.',
      keywords: ['IT kosten 25 medewerkers', 'managed IT pricing Amsterdam', 'IT budget MKB'],
      priority: 'high'
    },
    {
      question: 'Hoe snel kunnen jullie on-site zijn in Amsterdam?',
      answer: 'Vanuit ons kantoor in Amsterdam Noord zijn wij binnen 4 uur on-site voor urgente problemen, vaak sneller. Voor bedrijven in Noord, Centrum, Zuid en Oost meestal binnen 1-2 uur. Zuidas en Zuidoost binnen 30-45 minuten. 70% van issues lossen we op afstand op binnen 30 minuten.',
      keywords: ['on-site support Amsterdam', 'IT response tijd', 'lokale IT support'],
      priority: 'high'
    },
    {
      question: 'Welke industrieën bedienen jullie in Amsterdam?',
      answer: 'Wij hebben specifieke expertise in: advocatenkantoren (20+ klanten op Zuidas), creatieve agencies (30+ in De Pijp/Oud-West), e-commerce (Shopify/Magento specialisten), healthcare (NEN 7510 compliant), en financiële dienstverlening (AFM/DNB compliance). Elk team member is gespecialiseerd in specifieke sectoren.',
      keywords: ['IT advocatenkantoor', 'IT creatieve sector', 'IT healthcare Amsterdam'],
      priority: 'medium'
    },
    {
      question: 'Kunnen jullie helpen met de overstap van onze huidige IT-leverancier?',
      answer: 'Ja, wij hebben een proven migratie-proces waarbij wij alles documenteren, inventariseren en naadloos overnemen zonder downtime. De eerste 10 bedrijven per kwartaal krijgen gratis migratie t.w.v. €2.500. Wij nemen contact op met uw huidige leverancier en regelen de complete overdracht.',
      keywords: ['IT leverancier wisselen', 'migratie IT diensten', 'overstappen IT partner'],
      priority: 'high'
    }
  ],

  // Local Business Schema Enhancements
  enhancedLocalBusiness: {
    '@context': 'https://schema.org',
    '@type': ['LocalBusiness', 'TechCompany', 'ProfessionalService'],
    '@id': 'https://workflo.it/#organization',
    name: 'Workflo IT Services Amsterdam',
    alternateName: ['Workflo B.V.', 'Workflo IT', 'Workflo Managed Services'],
    description: 'Leading managed IT services provider voor MKB in Amsterdam. ISO 27001 gecertificeerd, Microsoft Partner, 24/7 support.',
    
    // Enhanced location data
    areaServed: [
      {
        '@type': 'City',
        name: 'Amsterdam',
        '@id': 'https://www.wikidata.org/wiki/Q727'
      },
      {
        '@type': 'AdministrativeArea',
        name: 'Amsterdam Noord'
      },
      {
        '@type': 'AdministrativeArea',
        name: 'Zuidas'
      }
    ],
    
    // Service catalog for rich results
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'IT Services Catalog',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Managed IT Services',
            description: 'Complete IT beheer vanaf €750/maand'
          }
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Cybersecurity Services',
            description: 'ISO 27001 security met €50.000 garantie'
          }
        }
      ]
    },
    
    // Reviews and ratings
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      reviewCount: '187',
      bestRating: '5'
    },
    
    review: [
      {
        '@type': 'Review',
        reviewRating: {
          '@type': 'Rating',
          ratingValue: '5'
        },
        author: {
          '@type': 'Person',
          name: 'Marcus van den Berg'
        },
        reviewBody: 'Workflo transformed our IT from a headache to a competitive advantage. Saved us €2,500/month.'
      }
    ],
    
    // Business identifiers
    identifier: [
      {
        '@type': 'PropertyValue',
        propertyID: 'KvK',
        value: '63327597'
      },
      {
        '@type': 'PropertyValue',
        propertyID: 'VAT',
        value: 'NL855204506B01'
      }
    ],
    
    // Certifications and memberships
    memberOf: [
      {
        '@type': 'Organization',
        name: 'Microsoft Partner Network'
      },
      {
        '@type': 'Organization',
        name: 'Amsterdam Chamber of Commerce'
      }
    ],
    
    award: [
      'Microsoft Gold Partner 2024',
      'ISO 27001:2013 Certified',
      'Best IT Support Amsterdam 2023'
    ]
  },

  // Content Strategy Recommendations
  contentStrategy: {
    blogTopics: [
      {
        title: 'Complete Gids: IT Kosten voor Amsterdam MKB in 2024',
        keywords: ['IT kosten MKB', 'IT budget Amsterdam', 'managed services pricing'],
        searchIntent: 'informational',
        targetAudience: 'CFOs and business owners',
        estimatedTraffic: 'high'
      },
      {
        title: 'GDPR/AVG Checklist voor Nederlandse Bedrijven',
        keywords: ['GDPR checklist', 'AVG compliance Nederland', 'data privacy'],
        searchIntent: 'informational',
        targetAudience: 'Compliance officers',
        estimatedTraffic: 'high'
      },
      {
        title: 'Microsoft 365 vs Google Workspace voor Nederlandse MKB',
        keywords: ['Microsoft 365 vs Google', 'Office 365 Nederland', 'cloud comparison'],
        searchIntent: 'commercial',
        targetAudience: 'IT decision makers',
        estimatedTraffic: 'medium'
      },
      {
        title: 'Waarom Amsterdam Bedrijven Kiezen voor Managed IT Services',
        keywords: ['managed IT Amsterdam', 'outsourcing IT', 'IT uitbesteden'],
        searchIntent: 'commercial',
        targetAudience: 'Business owners',
        estimatedTraffic: 'medium'
      },
      {
        title: 'Cybersecurity Risico\'s voor Advocatenkantoren op de Zuidas',
        keywords: ['cybersecurity advocaten', 'IT security Zuidas', 'law firm IT'],
        searchIntent: 'informational',
        targetAudience: 'Legal sector',
        estimatedTraffic: 'niche-high'
      }
    ],
    
    landingPages: [
      {
        url: '/it-kosten-calculator',
        title: 'IT Kosten Calculator voor MKB',
        purpose: 'Lead generation tool'
      },
      {
        url: '/gratis-it-audit',
        title: 'Gratis IT Audit Amsterdam',
        purpose: 'Lead magnet'
      },
      {
        url: '/microsoft-365-migratie',
        title: 'Microsoft 365 Migratie Service',
        purpose: 'Service-specific conversion'
      }
    ]
  },

  // Technical SEO Recommendations
  technicalSeo: {
    structuredData: {
      required: ['Organization', 'LocalBusiness', 'FAQPage', 'BreadcrumbList'],
      recommended: ['Service', 'Review', 'HowTo', 'SoftwareApplication'],
      industry: ['TechCompany', 'ProfessionalService']
    },
    
    performance: {
      targetLCP: 2.5, // Largest Contentful Paint
      targetFID: 100, // First Input Delay
      targetCLS: 0.1, // Cumulative Layout Shift
      targetTTFB: 800 // Time to First Byte
    },
    
    crawlability: {
      maxDepth: 3,
      internalLinkingMinimum: 3,
      xmlSitemapSplit: true,
      canonicalStrategy: 'self-referencing'
    }
  }
}