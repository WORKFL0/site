'use client'

import { useState, useEffect } from 'react'
import StaticHeader from '@/components/StaticHeader'
import StaticFooter from '@/components/StaticFooter'
import LinkedInPosts from '@/components/news/LinkedInPosts'
import SafeNewsFeed from '@/components/SafeNewsFeed'

export default function NewsPage() {
  const [notionArticles, setNotionArticles] = useState<any[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Fetch from Notion API
    const fetchNotionContent = async () => {
      try {
        const response = await fetch('/api/notion')
        if (response.ok) {
          const data = await response.json()
          setNotionArticles(data.articles || [])
        }
      } catch (error) {
        console.error('Failed to fetch Notion content:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchNotionContent()
  }, [])

  return (
    <div className="min-h-screen bg-gray-50">
      <StaticHeader />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-yellow-50 to-orange-50 py-16">
          <div className="container mx-auto px-4">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Nieuws & Updates
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Blijf op de hoogte van het laatste nieuws over IT, cybersecurity, 
                en onze diensten. Volg onze updates en industrie-inzichten.
              </p>
            </div>
          </div>
        </section>

        <div className="container mx-auto px-4 py-12">
          {/* LinkedIn Posts Section */}
          <section className="mb-16">
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-2">
                LinkedIn Updates
              </h2>
              <p className="text-gray-600">
                Volg onze laatste successen en inzichten op LinkedIn
              </p>
            </div>
            <LinkedInPosts />
            <div className="mt-8 text-center">
              <a
                href="https://www.linkedin.com/company/workflo"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-blue-600 font-medium hover:text-blue-700"
              >
                Bekijk alle posts op LinkedIn
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
          </section>

          {/* Notion Articles Section */}
          {notionArticles.length > 0 && (
            <section className="mb-16">
              <div className="mb-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-2">
                  Blog Artikelen
                </h2>
                <p className="text-gray-600">
                  Diepgaande artikelen over IT-trends en best practices
                </p>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {notionArticles.map((article, index) => (
                  <article key={index} className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow overflow-hidden">
                    {article.cover && (
                      <div className="h-48 bg-gray-200 overflow-hidden">
                        <img 
                          src={article.cover} 
                          alt={article.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    )}
                    <div className="p-6">
                      <h3 className="font-bold text-lg text-gray-900 mb-2">
                        {article.title}
                      </h3>
                      <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                        {article.description}
                      </p>
                      <div className="flex items-center justify-between">
                        <time className="text-xs text-gray-500">
                          {new Date(article.date).toLocaleDateString('nl-NL')}
                        </time>
                        <a 
                          href={article.link} 
                          className="text-yellow-600 text-sm font-medium hover:text-yellow-700"
                        >
                          Lees meer →
                        </a>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </section>
          )}

          {/* RSS Feed Section */}
          <section className="mb-16">
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-2">
                Industrie Nieuws
              </h2>
              <p className="text-gray-600">
                Het laatste nieuws uit de IT-wereld
              </p>
            </div>
            <SafeNewsFeed />
          </section>

          {/* Newsletter CTA */}
          <section className="bg-gradient-to-r from-yellow-400 to-orange-400 rounded-2xl p-8 md:p-12 text-black">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Mis nooit meer een update
              </h2>
              <p className="text-lg mb-8 opacity-90">
                Abonneer je op onze nieuwsbrief en ontvang maandelijks de belangrijkste 
                IT-nieuwtjes en tips direct in je inbox.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact#newsletter"
                  className="inline-flex items-center justify-center px-8 py-3 bg-black text-yellow-400 rounded-lg font-semibold hover:bg-gray-800 transition-colors"
                >
                  Schrijf je in voor de nieuwsbrief
                </a>
                <a
                  href="https://www.linkedin.com/company/workflo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-8 py-3 bg-white text-black rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                  Volg ons op LinkedIn
                </a>
              </div>
            </div>
          </section>

          {/* Company Updates */}
          <section className="mt-16">
            <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                Workflo Milestones
              </h2>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="font-bold text-xl mb-2">200+ Klanten</h3>
                  <p className="text-gray-600">
                    We hebben de mijlpaal van 200 tevreden klanten in Amsterdam bereikt
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h3 className="font-bold text-xl mb-2">Microsoft Partner</h3>
                  <p className="text-gray-600">
                    Officieel erkend als Microsoft Partner voor betere ondersteuning
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="font-bold text-xl mb-2">24/7 Support</h3>
                  <p className="text-gray-600">
                    Uitgebreide support uren voor nog betere bereikbaarheid
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
      
      <StaticFooter />
    </div>
  )
}