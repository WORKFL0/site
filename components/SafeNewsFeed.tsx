'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

interface NewsItem {
  title: string
  link: string
  pubDate: string
  description: string
  guid: string
}

export default function SafeNewsFeed() {
  const [newsItems, setNewsItems] = useState<NewsItem[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await fetch('/api/rss-feed')
        if (!response.ok) throw new Error('Failed to fetch')
        const data = await response.json()
        
        if (data.items && data.items.length > 0) {
          setNewsItems(data.items.slice(0, 6))
        } else {
          // Fallback news items
          setNewsItems([
            {
              title: "Nieuwe Microsoft 365 Security Features",
              link: "#",
              pubDate: new Date().toISOString(),
              description: "Microsoft heeft nieuwe security features aangekondigd voor 365 Business gebruikers.",
              guid: "1"
            },
            {
              title: "Cybersecurity Tips voor MKB",
              link: "#",
              pubDate: new Date().toISOString(),
              description: "5 essentiële tips om uw bedrijf te beschermen tegen ransomware.",
              guid: "2"
            },
            {
              title: "Cloud Migratie Best Practices",
              link: "#",
              pubDate: new Date().toISOString(),
              description: "Hoe u succesvol naar de cloud migreert zonder downtime.",
              guid: "3"
            }
          ])
        }
      } catch (err) {
        setError(true)
        // Set fallback content on error
        setNewsItems([
          {
            title: "IT Trends 2025",
            link: "#",
            pubDate: new Date().toISOString(),
            description: "De belangrijkste technologie trends voor het MKB dit jaar.",
            guid: "4"
          },
          {
            title: "GDPR Compliance Update",
            link: "#",
            pubDate: new Date().toISOString(),
            description: "Nieuwe richtlijnen voor data bescherming in 2025.",
            guid: "5"
          },
          {
            title: "Remote Work Security",
            link: "#",
            pubDate: new Date().toISOString(),
            description: "Veilig thuiswerken: wat u moet weten.",
            guid: "6"
          }
        ])
      } finally {
        setLoading(false)
      }
    }

    fetchNews()
  }, [])

  if (loading) {
    return (
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">📰 Laatste IT Nieuws</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[1, 2, 3].map(i => (
              <div key={i} className="bg-white rounded-lg p-6 shadow animate-pulse">
                <div className="h-4 bg-gray-200 rounded mb-4"></div>
                <div className="h-3 bg-gray-200 rounded mb-2"></div>
                <div className="h-3 bg-gray-200 rounded w-2/3"></div>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">
            📰 Laatste IT Nieuws & Updates
          </h2>
          <p className="text-gray-600">
            Blijf op de hoogte van de laatste ontwikkelingen in IT en cybersecurity
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {newsItems.map((item, index) => (
            <article
              key={item.guid}
              className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow p-6 border border-gray-100 hover:border-yellow-400"
            >
              <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2">
                {item.title}
              </h3>
              <p className="text-sm text-gray-600 mb-3 line-clamp-3">
                {item.description}
              </p>
              <div className="flex justify-between items-center">
                <span className="text-xs text-gray-500">
                  {new Date(item.pubDate).toLocaleDateString('nl-NL')}
                </span>
                {item.link !== "#" ? (
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-yellow-600 hover:text-yellow-700 text-sm font-medium"
                  >
                    Lees meer →
                  </a>
                ) : (
                  <span className="text-yellow-600 text-sm font-medium">
                    Binnenkort
                  </span>
                )}
              </div>
            </article>
          ))}
        </div>

        <div className="text-center mt-8">
          <Link
            href="/news"
            className="inline-flex items-center bg-yellow-400 text-black px-6 py-3 rounded-lg font-bold hover:bg-yellow-500 transition-all"
          >
            Bekijk Alle Nieuws →
          </Link>
        </div>
      </div>
    </section>
  )
}