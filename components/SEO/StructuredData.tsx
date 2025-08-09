import Script from 'next/script'

interface StructuredDataProps {
  type?: 'organization' | 'website' | 'service' | 'faq' | 'breadcrumb'
  data?: any
}

export default function StructuredData({ type = 'organization', data }: StructuredDataProps) {
  const getStructuredData = () => {
    switch (type) {
      case 'organization':
        return {
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "Workflo IT Services",
          "alternateName": "Workflo",
          "url": "https://workflo.it",
          "logo": "https://workflo.it/images/logos/workflo-logo-yellow.png",
          "description": "Managed IT Services provider voor MKB in Amsterdam. 24/7 support, cloud oplossingen en cybersecurity.",
          "foundingDate": "2015",
          "founders": [{
            "@type": "Person",
            "name": "Florian"
          }],
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Amsterdam",
            "addressRegion": "Noord-Holland",
            "addressCountry": "NL"
          },
          "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+31-20-3080465",
            "contactType": "customer support",
            "availableLanguage": ["nl", "en"],
            "areaServed": "NL"
          },
          "sameAs": [
            "https://www.linkedin.com/company/workflo",
            "https://github.com/WORKFL0"
          ],
          "numberOfEmployees": {
            "@type": "QuantitativeValue",
            "minValue": 10,
            "maxValue": 25
          },
          "slogan": "De IT-Partner die Écht Levert",
          "award": "Microsoft Partner",
          "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.9",
            "reviewCount": "200"
          }
        }

      case 'website':
        return {
          "@context": "https://schema.org",
          "@type": "WebSite",
          "name": "Workflo IT Services",
          "url": "https://workflo.it",
          "potentialAction": {
            "@type": "SearchAction",
            "target": {
              "@type": "EntryPoint",
              "urlTemplate": "https://workflo.it/search?q={search_term_string}"
            },
            "query-input": "required name=search_term_string"
          }
        }

      case 'service':
        return {
          "@context": "https://schema.org",
          "@type": "Service",
          "serviceType": "IT Support Services",
          "provider": {
            "@type": "Organization",
            "name": "Workflo IT Services"
          },
          "areaServed": {
            "@type": "City",
            "name": "Amsterdam"
          },
          "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "IT Services",
            "itemListElement": [
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Managed IT Services",
                  "description": "Complete IT-ondersteuning voor uw bedrijf met 24/7 monitoring"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Cloud Oplossingen",
                  "description": "Microsoft 365, Azure en andere cloud diensten"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Cybersecurity",
                  "description": "Complete beveiliging van uw IT-infrastructuur"
                }
              }
            ]
          }
        }

      case 'faq':
        return {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": data || [
            {
              "@type": "Question",
              "name": "Wat kost jullie IT-ondersteuning?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Break-Fix support start vanaf €75 per uur. Fixed Fee all-inclusive support vanaf €39 per gebruiker per maand. Projecten en migraties op offertebasis."
              }
            },
            {
              "@type": "Question",
              "name": "Hoe snel kunnen jullie ter plaatse zijn?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Bij kritieke storingen zijn we binnen 15 minuten remote beschikbaar en binnen 2-4 uur on-site in Amsterdam."
              }
            },
            {
              "@type": "Question",
              "name": "Werken jullie ook buiten kantooruren?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Ja, voor Fixed Fee klanten bieden we 24/7 support. Break-Fix klanten kunnen optioneel een SLA afsluiten voor support buiten kantooruren."
              }
            }
          ]
        }

      case 'breadcrumb':
        return {
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": data || [
            {
              "@type": "ListItem",
              "position": 1,
              "name": "Home",
              "item": "https://workflo.it"
            }
          ]
        }

      default:
        return null
    }
  }

  const structuredData = getStructuredData()

  if (!structuredData) return null

  return (
    <Script
      id={`structured-data-${type}`}
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(structuredData)
      }}
    />
  )
}

// Local Business specific structured data
export function LocalBusinessStructuredData() {
  const localBusinessData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Workflo IT Services Amsterdam",
    "image": "https://workflo.it/images/logos/workflo-logo-yellow.png",
    "@id": "https://workflo.it",
    "url": "https://workflo.it",
    "telephone": "+31203080465",
    "priceRange": "€€",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Amsterdam",
      "addressRegion": "NH",
      "addressCountry": "NL"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 52.3676,
      "longitude": 4.9041
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday"
        ],
        "opens": "09:00",
        "closes": "18:00"
      }
    ],
    "sameAs": [
      "https://www.linkedin.com/company/workflo"
    ]
  }

  return (
    <Script
      id="structured-data-local-business"
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(localBusinessData)
      }}
    />
  )
}