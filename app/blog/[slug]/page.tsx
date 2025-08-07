'use client'

import { useState, useEffect } from 'react'
import { notFound } from 'next/navigation'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import BlogPost from '@/components/blog/BlogPost'
import { getBlogPost, getBlogPosts, BlogPost as BlogPostType } from '@/lib/notion'

interface BlogPostPageProps {
  params: {
    slug: string
  }
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const [post, setPost] = useState<BlogPostType | null>(null)
  const [relatedPosts, setRelatedPosts] = useState<BlogPostType[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    Promise.all([
      getBlogPost(params.slug),
      getBlogPosts(4)
    ]).then(([fetchedPost, allPosts]) => {
      if (!fetchedPost) {
        notFound()
      }
      setPost(fetchedPost)
      setRelatedPosts(allPosts.filter(p => p.id !== fetchedPost.id).slice(0, 3))
      setLoading(false)
    })
  }, [params.slug])

  if (loading) {
    return (
      <>
        <Header />
        <main className="pt-20 min-h-screen bg-white">
          <div className="container mx-auto px-4 py-12">
            <div className="text-center">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600 mx-auto"></div>
              <p className="mt-4 text-gray-600">Laden...</p>
            </div>
          </div>
        </main>
        <Footer />
      </>
    )
  }

  if (!post) {
    notFound()
  }

  return (
    <>
      <Header />
      <main className="pt-20 min-h-screen bg-white">
        <BlogPost post={post} relatedPosts={relatedPosts} />
      </main>
      <Footer />
    </>
  )
}