'use client'

import { useState, useEffect } from 'react'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import BlogList from '@/components/blog/BlogList'
import { getBlogPosts, BlogPost } from '@/lib/notion'

export default function BlogPage() {
  const [posts, setPosts] = useState<BlogPost[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    getBlogPosts(20).then(fetchedPosts => {
      setPosts(fetchedPosts)
      setLoading(false)
    })
  }, [])
  
  return (
    <>
      <Header />
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
      <Footer />
    </>
  )
}