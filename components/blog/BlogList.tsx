'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { CalendarIcon, UserIcon, TagIcon, ArrowRightIcon } from '@heroicons/react/24/outline'
import { BlogPost } from '@/lib/notion'

interface BlogListProps {
  posts: BlogPost[]
}

export default function BlogList({ posts }: BlogListProps) {
  if (posts.length === 0) {
    return (
      <div className="text-center py-12">
        <div className="max-w-md mx-auto">
          <div className="text-gray-400 mb-4">
            <svg className="w-20 h-20 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} 
                d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" 
              />
            </svg>
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-2">Nog geen blogposts</h3>
          <p className="text-gray-600">
            We zijn bezig met het schrijven van interessante content. Kom snel terug!
          </p>
        </div>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {posts.map((post, index) => (
        <motion.article
          key={post.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
        >
          {/* Cover Image */}
          {post.coverImage ? (
            <div className="relative h-48 bg-gray-200">
              <Image
                src={post.coverImage}
                alt={post.title}
                fill
                className="object-cover"
              />
            </div>
          ) : (
            <div className="h-48 bg-gradient-to-br from-primary-400 to-primary-600 flex items-center justify-center">
              <div className="text-white text-6xl font-bold opacity-20">
                {post.title.charAt(0)}
              </div>
            </div>
          )}

          {/* Content */}
          <div className="p-6">
            {/* Category */}
            {post.category && (
              <span className="inline-block px-3 py-1 text-xs font-semibold text-primary-600 bg-primary-50 rounded-full mb-3">
                {post.category}
              </span>
            )}

            {/* Title */}
            <h2 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
              <Link href={`/blog/${post.slug}`} className="hover:text-primary-600 transition-colors">
                {post.title}
              </Link>
            </h2>

            {/* Excerpt */}
            <p className="text-gray-600 text-sm mb-4 line-clamp-3">
              {post.excerpt}
            </p>

            {/* Meta Info */}
            <div className="flex flex-wrap gap-4 text-xs text-gray-500 mb-4">
              <div className="flex items-center gap-1">
                <CalendarIcon className="w-4 h-4" />
                <time dateTime={post.publishedDate}>
                  {new Date(post.publishedDate).toLocaleDateString('nl-NL', {
                    year: 'numeric',
                    month: 'short',
                    day: 'numeric'
                  })}
                </time>
              </div>
              {post.author && (
                <div className="flex items-center gap-1">
                  <UserIcon className="w-4 h-4" />
                  <span>{post.author}</span>
                </div>
              )}
            </div>

            {/* Tags */}
            {post.tags && post.tags.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-4">
                {post.tags.slice(0, 3).map((tag) => (
                  <span
                    key={tag}
                    className="inline-flex items-center gap-1 px-2 py-1 text-xs text-gray-600 bg-gray-100 rounded"
                  >
                    <TagIcon className="w-3 h-3" />
                    {tag}
                  </span>
                ))}
              </div>
            )}

            {/* Read More Link */}
            <Link
              href={`/blog/${post.slug}`}
              className="inline-flex items-center gap-2 text-primary-600 font-medium hover:text-primary-700 transition-colors group"
            >
              Lees meer
              <ArrowRightIcon className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>

            {/* LinkedIn Link */}
            {post.linkedinUrl && (
              <div className="mt-3 pt-3 border-t">
                <a
                  href={post.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs text-gray-500 hover:text-blue-600 transition-colors"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                  Bekijk op LinkedIn
                </a>
              </div>
            )}
          </div>
        </motion.article>
      ))}
    </div>
  )
}