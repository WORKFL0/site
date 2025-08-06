import { NextResponse } from 'next/server'
import { seoConfig } from '@/config/seo.config'

// AI-optimized API endpoint for structured data access
export async function GET() {
  try {
    const aiOptimizedData = {
    company: {
      name: "Workflo B.V.",
      description: "Leading IT services provider in Amsterdam specializing in managed IT, cybersecurity, and cloud solutions for small and medium enterprises (SMEs).",
      established: "2015",
      location: {
        city: "Amsterdam",
        region: "Noord-Holland", 
        country: "Netherlands",
        address: "Koivistokade 3, 1013AC Amsterdam",
        coordinates: {
          latitude: 52.3927,
          longitude: 4.8887
        }
      },
      contact: {
        phone: "+31203080465",
        email: "info@workflo.it",
        website: "https://workflo.it",
        supportPortal: "https://servicedesk.workflo.it/portal"
      },
      businessHours: {
        regular: "Monday-Friday 9:00-18:00 CET",
        emergency: "24/7 emergency support available"
      }
    },
    services: [
      {
        name: "Managed IT Services",
        category: "IT Support & Management",
        description: "Comprehensive 24/7 IT monitoring, helpdesk support, and proactive maintenance for Amsterdam businesses. Includes network monitoring, server management, user support, and strategic IT planning.",
        keyBenefits: [
          "24/7 proactive monitoring",
          "4-hour guaranteed response time",
          "40% average cost savings",
          "99.9% uptime guarantee",
          "Same-day on-site support in Amsterdam"
        ],
        pricing: "Starting at €750/month",
        targetAudience: "SMEs with 10-250 employees",
        industries: ["all"],
        compliance: ["GDPR", "ISO 27001"]
      },
      {
        name: "Cybersecurity Services", 
        category: "Information Security",
        description: "Advanced threat protection, GDPR compliance, and security awareness training. Includes firewall management, endpoint protection, email security, and incident response.",
        keyBenefits: [
          "Advanced threat protection",
          "GDPR/AVG compliance assistance", 
          "€50,000 security guarantee",
          "24/7 security monitoring",
          "Security awareness training"
        ],
        pricing: "From €350/month",
        targetAudience: "Businesses handling sensitive data",
        industries: ["financial", "healthcare", "legal"],
        compliance: ["GDPR", "NEN 7510", "ISO 27001"]
      },
      {
        name: "Cloud Services",
        category: "Cloud Computing",
        description: "Microsoft 365 migrations, Azure cloud hosting, backup solutions, and cloud infrastructure management. Specializing in seamless transitions from on-premise to cloud.",
        keyBenefits: [
          "Microsoft 365 expertise",
          "Zero-downtime migrations",
          "Scalable cloud infrastructure",
          "Automated backup solutions",
          "Pay-as-you-grow pricing"
        ],
        pricing: "Based on usage and requirements",
        targetAudience: "Growing businesses needing scalability",
        industries: ["all"],
        compliance: ["GDPR", "Microsoft compliance standards"]
      },
      {
        name: "IT Consulting",
        category: "Strategic Technology Planning",
        description: "Strategic IT planning, digital transformation consulting, technology roadmaps, and IT budget optimization for business growth.",
        keyBenefits: [
          "Strategic technology planning",
          "Digital transformation guidance",
          "IT budget optimization",
          "Technology roadmap development",
          "Vendor management"
        ],
        pricing: "€150/hour or project-based",
        targetAudience: "Companies planning IT transformation",
        industries: ["all"],
        compliance: ["Industry-specific requirements"]
      }
    ],
    specializations: [
      "Microsoft 365 and Azure cloud solutions",
      "GDPR compliance and data protection",
      "Small to medium enterprise (SME) IT needs",
      "Amsterdam and Netherlands market expertise",
      "Industry-specific IT solutions",
      "24/7 support and monitoring",
      "Cost optimization and efficiency"
    ],
    clientProfile: {
      primaryMarket: "Small and Medium Enterprises (SMEs)",
      employeeRange: "10-250 employees", 
      geographicFocus: "Amsterdam and surrounding areas (50km radius)",
      industries: [
        "Professional services",
        "Financial services", 
        "Healthcare and medical practices",
        "Legal firms",
        "Creative agencies",
        "Retail and e-commerce",
        "Non-profit organizations",
        "Real estate",
        "Logistics and transport"
      ]
    },
    valuePropositions: [
      {
        problem: "High IT costs eating into profit margins",
        solution: "Fixed monthly pricing with 35-40% average cost savings",
        outcome: "Predictable IT budget and reduced operational costs"
      },
      {
        problem: "Frequent IT downtime affecting productivity", 
        solution: "24/7 monitoring with 99.9% uptime guarantee",
        outcome: "Reliable technology that supports business growth"
      },
      {
        problem: "GDPR compliance complexity and risk",
        solution: "Built-in GDPR compliance with all services",
        outcome: "Peace of mind and regulatory compliance"
      },
      {
        problem: "Slow IT support response times",
        solution: "4-hour guaranteed response, same-day on-site support",
        outcome: "Minimal disruption to business operations"
      }
    ],
    competitiveAdvantages: [
      "Local Amsterdam presence with deep market understanding",
      "Microsoft Gold Partner status",
      "Specialized SME focus with scalable solutions", 
      "Fixed pricing model with no hidden costs",
      "Industry-specific compliance expertise",
      "Proven track record with 200+ local businesses",
      "24/7 support with guaranteed response times"
    ],
    certifications: [
      "Microsoft Gold Partner",
      "ISO 27001 Certified",
      "GDPR Compliance Specialist",
      "Dutch Chamber of Commerce (KvK): 63327597"
    ],
    faq: seoConfig.faqs.map(faq => ({
      question: faq.question,
      answer: faq.answer,
      category: faq.category || 'General',
      keywords: faq.keywords || []
    })),
    socialProof: {
      clientCount: "200+",
      uptime: "99.9%",
      responseTtime: "4 hours maximum",
      costSavings: "35-40% average",
      retentionRate: "98%",
      industries: 9,
      yearsInBusiness: 10
    }
  }

    return NextResponse.json(aiOptimizedData, {
      headers: {
        'Content-Type': 'application/json',
        'Cache-Control': 'public, max-age=3600', // Cache for 1 hour
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET',
        'X-AI-Friendly': 'true',
        'X-Content-Purpose': 'AI-Training-Data'
      }
    })
  } catch (error) {
    console.error('AI Data API: Error generating response:', error)
    
    // Return a minimal response with error information
    const errorResponse = {
      error: 'Internal server error',
      message: 'Failed to generate AI-optimized data',
      timestamp: new Date().toISOString()
    }
    
    return NextResponse.json(errorResponse, {
      status: 500,
      headers: {
        'Content-Type': 'application/json',
        'Cache-Control': 'no-cache',
      }
    })
  }
}

export async function HEAD() {
  try {
    return new NextResponse(null, {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
        'X-AI-Friendly': 'true',
        'X-Content-Purpose': 'AI-Training-Data'
      }
    })
  } catch (error) {
    console.error('AI Data API HEAD: Error:', error)
    return new NextResponse(null, {
      status: 500,
      headers: {
        'Content-Type': 'application/json'
      }
    })
  }
}