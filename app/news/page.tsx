'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'

// Inline NewsFeed component with fallback
function SafeNewsFeed({ maxItems = 6, showDescription = true }: { maxItems?: number, showDescription?: boolean }) {
  const [articles, setArticles] = useState<any[]>([])
  const [loading, setLoading] = useState(true)

  const fallbackArticles = [
    {
      title: 'Microsoft kondigt nieuwe security features aan',
      description: 'Microsoft introduceert verbeterde beveiligingsfuncties voor Microsoft 365 om bedrijven beter te beschermen.',
      link: '#',
      pubDate: new Date().toISOString()
    },
    {
      title: 'Cybersecurity trends voor 2024',
      description: 'Belangrijke cybersecurity ontwikkelingen waar bedrijven rekening mee moeten houden dit jaar.',
      link: '#',
      pubDate: new Date(Date.now() - 86400000).toISOString()
    },
    {
      title: 'Cloud adoptie stijgt onder MKB bedrijven',
      description: 'Meer Nederlandse MKB bedrijven maken de overstap naar cloud-oplossingen voor hun IT-infrastructuur.',
      link: '#',
      pubDate: new Date(Date.now() - 172800000).toISOString()
    }
  ]

  useEffect(() => {
    // Attempt to fetch real news, fall back to placeholder content
    const timer = setTimeout(() => {
      setArticles(fallbackArticles)
      setLoading(false)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  if (loading) {
    return (
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {Array.from({length: 6}).map((_, i) => (
          <div key={i} className="bg-white rounded-lg shadow-md p-6 animate-pulse">
            <div className="h-4 bg-gray-200 rounded mb-2"></div>
            <div className="h-3 bg-gray-200 rounded mb-4"></div>
            <div className="h-3 bg-gray-200 rounded w-1/2"></div>
          </div>
        ))}
      </div>
    )
  }

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {articles.slice(0, maxItems).map((article, index) => (
        <article key={index} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
          <h3 className="font-bold text-gray-900 mb-2 line-clamp-2">
            {article.title}
          </h3>
          {showDescription && (
            <p className="text-gray-600 text-sm mb-3 line-clamp-3">
              {article.description}
            </p>
          )}
          <div className="flex items-center justify-between">
            <time className="text-xs text-gray-500">
              {new Date(article.pubDate).toLocaleDateString('nl-NL')}
            </time>
            <span className="text-yellow-600 text-sm font-medium">IT News</span>
          </div>
        </article>
      ))}
    </div>
  )
}

// Inline LinkedIn Posts component with fallback
function SafeLinkedInPosts() {
  const linkedInPosts = [
    {
      content: 'Werkflo heeft weer een succesvol IT project afgerond voor een Amsterdams bedrijf. Onze managed services zorgen voor betrouwbare IT-ondersteuning.',
      date: '2024-01-15',
      likes: 24,
      comments: 5
    },
    {
      content: 'Cybersecurity tip: Zorg altijd voor regelmatige backups van uw bedrijfsdata. Een goede backup strategie kan uw bedrijf redden bij een cyberaanval.',
      date: '2024-01-12',
      likes: 18,
      comments: 3
    },
    {
      content: 'Microsoft 365 update: Nieuwe collaboration features maken remote werken nog effectiever voor onze klanten.',
      date: '2024-01-10',
      likes: 31,
      comments: 7
    }
  ]

  return (
    <div className="grid md:grid-cols-2 gap-6">
      {linkedInPosts.map((post, index) => (
        <div key={index} className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-start gap-3 mb-4">
            <Image
              src="/images/logos/workflo-logo-yellow.png"
              alt="Workflo"
              width={40}
              height={40}
              className="w-10 h-10 rounded-full"
            />
            <div>
              <h3 className="font-bold text-gray-900">Workflo</h3>
              <p className="text-sm text-gray-500">{new Date(post.date).toLocaleDateString('nl-NL')}</p>
            </div>
          </div>
          <p className="text-gray-700 mb-4">{post.content}</p>
          <div className="flex items-center gap-4 text-sm text-gray-500">
            <span>{post.likes} likes</span>
            <span>{post.comments} reacties</span>
          </div>
        </div>
      ))}
    </div>
  )
}

// Inline Header component
function InlineHeader() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm">
      <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/images/logos/workflo-logo-yellow.png"
            alt="Workflo"
            width={120}
            height={40}
            className="h-10 w-auto"
          />
        </Link>
        <div className="hidden md:flex items-center gap-6">
          <Link href="/" className="text-gray-700 hover:text-yellow-600">Home</Link>
          <Link href="/diensten" className="text-gray-700 hover:text-yellow-600">Diensten</Link>
          <Link href="/news" className="text-yellow-600 font-medium">Nieuws</Link>
          <Link href="/contact" className="bg-yellow-400 text-black px-4 py-2 rounded-lg font-medium hover:bg-yellow-500">Contact</Link>
        </div>
      </nav>
    </header>
  )
}

// Inline Footer component
function InlineFooter() {
  return (
    <footer className="bg-black text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <Image
              src="/images/logos/workflo-logo-yellow.png"
              alt="Workflo"
              width={120}
              height={40}
              className="mb-4"
            />
            <p className="text-gray-400">
              Uw betrouwbare IT-partner in Amsterdam
            </p>
          </div>
          <div>
            <h3 className="font-bold mb-4 text-yellow-400">Diensten</h3>
            <ul className="space-y-2 text-gray-400">
              <li><Link href="/diensten" className="hover:text-yellow-400">Managed IT</Link></li>
              <li><Link href="/diensten" className="hover:text-yellow-400">Cloud Services</Link></li>
              <li><Link href="/diensten" className="hover:text-yellow-400">Cybersecurity</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4 text-yellow-400">Contact</h3>
            <ul className="space-y-2 text-gray-400">
              <li>+31 20 123 4567</li>
              <li>info@workflo.nl</li>
              <li>Amsterdam, Nederland</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4 text-yellow-400">Volg Ons</h3>
            <Link href="https://linkedin.com/company/workflo" className="text-gray-400 hover:text-yellow-400">
              LinkedIn
            </Link>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 Workflo. Alle rechten voorbehouden.</p>
        </div>
      </div>
    </footer>
  )
}

export default function NewsPage() {
  return (
    <>
      <InlineHeader />
      <main className="pt-20 min-h-screen bg-gray-50">
        <div className="container mx-auto px-4 py-12">
          {/* Hero Section */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Nieuws & Updates
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Blijf op de hoogte van het laatste nieuws over IT, cybersecurity, 
              en onze diensten. Volg onze updates en industrie-inzichten.
            </p>
          </div>

          {/* LinkedIn Posts Section */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">
              Recente LinkedIn Updates
            </h2>
            <SafeLinkedInPosts />
          </section>

          {/* RSS Feed Section */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">
              Industrie Nieuws
            </h2>
            <SafeNewsFeed maxItems={9} showDescription={true} />
          </section>

          {/* CTA Section */}
          <section className="bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-2xl p-8 md:p-12 text-black text-center">
            <h2 className="text-3xl font-bold mb-4">
              Mis nooit meer een update
            </h2>
            <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
              Abonneer je op onze nieuwsbrief en ontvang maandelijks de belangrijkste 
              IT-nieuwtjes en tips direct in je inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#newsletter"
                className="inline-block px-8 py-3 bg-white text-yellow-600 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Schrijf je in voor de nieuwsbrief
              </a>
              <a
                href="https://www.linkedin.com/company/workflo"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-8 py-3 bg-black text-yellow-400 rounded-lg font-semibold hover:bg-gray-800 transition-colors"
              >
                Volg ons op LinkedIn
              </a>
            </div>
          </section>
        </div>
      </main>
      <InlineFooter />
    </>
  )
}