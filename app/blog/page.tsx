'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { getBlogPosts, BlogPost } from '@/lib/notion'

// Inline BlogList component
function BlogList({ posts }: { posts: BlogPost[] }) {
  const fallbackPosts = [
    {
      id: '1',
      title: 'IT Security Best Practices voor Bedrijven',
      excerpt: 'Ontdek essentiële cybersecurity tips om uw bedrijf te beschermen tegen digitale bedreigingen.',
      publishedDate: '2024-01-15T10:00:00Z',
      tags: ['Security', 'Tips'],
      slug: 'it-security-best-practices'
    },
    {
      id: '2',
      title: 'Cloud Migratie: Stappenplan voor MKB',
      excerpt: 'Een praktische gids voor het succesvol migreren naar de cloud voor middelgrote bedrijven.',
      publishedDate: '2024-01-10T14:30:00Z',
      tags: ['Cloud', 'Technology'],
      slug: 'cloud-migratie-stappenplan'
    },
    {
      id: '3',
      title: 'Microsoft 365 Tips voor Productiviteit',
      excerpt: 'Haal meer uit Microsoft 365 met deze handige tips en tricks voor uw team.',
      publishedDate: '2024-01-05T09:15:00Z',
      tags: ['Tips', 'Microsoft'],
      slug: 'microsoft-365-tips'
    }
  ]

  const displayPosts = posts.length > 0 ? posts : fallbackPosts

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {displayPosts.map((post) => (
        <article key={post.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
          <div className="p-6">
            <div className="flex flex-wrap gap-2 mb-3">
              {post.tags?.map((tag) => (
                <span key={tag} className="px-2 py-1 bg-yellow-100 text-yellow-800 text-xs font-medium rounded-full">
                  {tag}
                </span>
              ))}
            </div>
            <h2 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
              {post.title}
            </h2>
            <p className="text-gray-600 mb-4 line-clamp-3">
              {post.excerpt}
            </p>
            <div className="flex items-center justify-between">
              <time className="text-sm text-gray-500">
                {new Date(post.publishedDate).toLocaleDateString('nl-NL')}
              </time>
              <Link 
                href={`/blog/${post.slug}`}
                className="text-yellow-600 hover:text-yellow-700 font-medium text-sm"
              >
                Lees meer →
              </Link>
            </div>
          </div>
        </article>
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
          <Link href="/blog" className="text-yellow-600 font-medium">Blog</Link>
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

export default function BlogPage() {
  const [posts, setPosts] = useState<BlogPost[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    getBlogPosts(20)
      .then(fetchedPosts => {
        setPosts(fetchedPosts)
        setLoading(false)
      })
      .catch(error => {
        console.error('Error fetching blog posts:', error)
        setLoading(false)
      })
  }, [])
  
  return (
    <>
      <InlineHeader />
      <main className="pt-20 min-h-screen bg-gray-50">
        <div className="container mx-auto px-4 py-12">
          {/* Hero Section */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Workflo Blog
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Blijf op de hoogte van de laatste ontwikkelingen in IT, praktische tips voor uw bedrijf, 
              en inzichten van onze experts.
            </p>
          </div>

          {/* Categories */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {['Alle', 'Technology', 'Security', 'Cloud', 'Tips', 'Updates'].map((category) => (
              <button
                key={category}
                className="px-4 py-2 rounded-full border border-gray-300 hover:border-primary-500 hover:bg-primary-50 transition-colors"
              >
                {category}
              </button>
            ))}
          </div>

          {/* Blog Posts Grid */}
          {loading ? (
            <div className="text-center py-12">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600 mx-auto"></div>
              <p className="mt-4 text-gray-600">Laden...</p>
            </div>
          ) : (
            <BlogList posts={posts} />
          )}
        </div>
      </main>
      <InlineFooter />
    </>
  )
}