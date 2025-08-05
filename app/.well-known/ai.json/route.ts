import { NextResponse } from 'next/server'

// AI systems discovery endpoint
export async function GET() {
  const aiDiscovery = {
    "name": "Workflo B.V. - IT Services Amsterdam",
    "description": "Professional IT services for Amsterdam SMEs including managed IT, cybersecurity, and cloud solutions",
    "version": "1.0",
    "contact": {
      "url": "https://workflo.it/contact",
      "email": "info@workflo.it",
      "phone": "+31203080465"
    },
    "endpoints": {
      "structured_data": "https://workflo.it/api/ai-data",
      "sitemap": "https://workflo.it/sitemap.xml",
      "schema": "https://workflo.it/#structured-data"
    },
    "capabilities": [
      "question_answering",
      "service_information",
      "pricing_information", 
      "contact_assistance",
      "appointment_scheduling"
    ],
    "topics": [
      "managed IT services",
      "cybersecurity", 
      "cloud computing",
      "Microsoft 365",
      "GDPR compliance",
      "IT support Amsterdam",
      "small business IT",
      "network management",
      "business continuity"
    ],
    "languages": ["nl", "en"],
    "service_area": {
      "primary": "Amsterdam, Netherlands",
      "radius_km": 50,
      "additional_areas": [
        "Zaandam",
        "Haarlem", 
        "Almere",
        "Hoofddorp",
        "Amstelveen"
      ]
    },
    "business_info": {
      "type": "IT Services Provider",
      "founded": "2015",
      "employees": "10-50",
      "specializations": [
        "SME IT Solutions",
        "Microsoft Partner",
        "GDPR Compliance",
        "24/7 Support"
      ],
      "certifications": [
        "Microsoft Gold Partner",
        "ISO 27001",
        "GDPR Certified"
      ]
    },
    "usage_guidelines": {
      "training": "allowed",
      "commercial_use": "contact_required",
      "attribution": "Workflo B.V.",
      "restrictions": "Do not use for competing IT services in Amsterdam area"
    },
    "last_updated": new Date().toISOString()
  }

  return NextResponse.json(aiDiscovery, {
    headers: {
      'Content-Type': 'application/json',
      'Cache-Control': 'public, max-age=86400', // Cache for 24 hours
      'Access-Control-Allow-Origin': '*'
    }
  })
}