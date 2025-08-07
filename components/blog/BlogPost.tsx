'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { 
  CalendarIcon, 
  UserIcon, 
  TagIcon, 
  ArrowLeftIcon,
  ShareIcon,
  BookmarkIcon
} from '@heroicons/react/24/outline'
import { BlogPost as BlogPostType } from '@/lib/notion'

interface BlogPostProps {
  post: BlogPostType
  relatedPosts?: BlogPostType[]
}

export default function BlogPost({ post, relatedPosts = [] }: BlogPostProps) {
  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: post.title,
        text: post.excerpt,
        url: window.location.href
      })
    }
  }

  return (
    <>
      {/* Hero Section */}
      <div className="relative">
        {post.coverImage ? (
          <div className="relative h-96 bg-gray-200">
            <Image
              src={post.coverImage}
              alt={post.title}
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          </div>
        ) : (
          <div className="h-96 bg-gradient-to-br from-primary-500 to-primary-700" />
        )}

        {/* Back Button */}
        <div className="absolute top-8 left-8">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 px-4 py-2 bg-white/90 backdrop-blur rounded-lg text-gray-700 hover:bg-white transition-colors"
          >
            <ArrowLeftIcon className="w-4 h-4" />
            Terug naar blog
          </Link>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 -mt-32 relative z-10">
        <motion.article
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden"
        >
          <div className="p-8 md:p-12">
            {/* Category */}
            {post.category && (
              <span className="inline-block px-3 py-1 text-sm font-semibold text-primary-600 bg-primary-50 rounded-full mb-4">
                {post.category}
              </span>
            )}

            {/* Title */}
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              {post.title}
            </h1>

            {/* Meta Info */}
            <div className="flex flex-wrap gap-6 pb-6 mb-6 border-b">
              <div className="flex items-center gap-2 text-gray-600">
                <CalendarIcon className="w-5 h-5" />
                <time dateTime={post.publishedDate}>
                  {new Date(post.publishedDate).toLocaleDateString('nl-NL', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                </time>
              </div>
              {post.author && (
                <div className="flex items-center gap-2 text-gray-600">
                  <UserIcon className="w-5 h-5" />
                  <span>{post.author}</span>
                </div>
              )}
              <button
                onClick={handleShare}
                className="flex items-center gap-2 text-gray-600 hover:text-primary-600 transition-colors ml-auto"
              >
                <ShareIcon className="w-5 h-5" />
                <span>Delen</span>
              </button>
            </div>

            {/* Tags */}
            {post.tags && post.tags.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-8">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="inline-flex items-center gap-1 px-3 py-1 text-sm text-gray-600 bg-gray-100 rounded-full"
                  >
                    <TagIcon className="w-4 h-4" />
                    {tag}
                  </span>
                ))}
              </div>
            )}

            {/* Content */}
            <div 
              className="prose prose-lg max-w-none"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />

            {/* LinkedIn Link */}
            {post.linkedinUrl && (
              <div className="mt-8 p-6 bg-blue-50 rounded-lg">
                <p className="text-gray-700 mb-3">Dit artikel is ook gepubliceerd op LinkedIn:</p>
                <a
                  href={post.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                  Bekijk op LinkedIn
                </a>
              </div>
            )}
          </div>
        </motion.article>

        {/* Related Posts */}
        {relatedPosts.length > 0 && (
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-16 mb-12"
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
              Gerelateerde Artikelen
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedPosts.map((relatedPost) => (
                <Link
                  key={relatedPost.id}
                  href={`/blog/${relatedPost.slug}`}
                  className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
                >
                  {relatedPost.coverImage ? (
                    <div className="relative h-32 bg-gray-200">
                      <Image
                        src={relatedPost.coverImage}
                        alt={relatedPost.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                  ) : (
                    <div className="h-32 bg-gradient-to-br from-gray-200 to-gray-300" />
                  )}
                  <div className="p-4">
                    <h3 className="font-semibold text-gray-900 line-clamp-2 mb-2">
                      {relatedPost.title}
                    </h3>
                    <p className="text-sm text-gray-600 line-clamp-2">
                      {relatedPost.excerpt}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </motion.section>
        )}
      </div>
    </>
  )
}