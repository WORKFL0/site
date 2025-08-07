'use client'

import { motion } from 'framer-motion'
import { ArrowTopRightOnSquareIcon } from '@heroicons/react/24/outline'

const linkedInPosts = [
  {
    id: '1',
    title: 'Succesvolle Microsoft 365 Migratie bij Duwtje',
    description: 'We zijn trots om te delen dat we Duwtje hebben geholpen met een soepele overgang naar Microsoft 365, resulterend in 30% verhoogde productiviteit.',
    url: 'https://www.linkedin.com/feed/update/urn:li:activity:7233749063135903744',
    date: '2024-03-15',
    likes: 42,
    comments: 8
  },
  {
    id: '2',
    title: 'Cybersecurity Awareness Week bij Workflo',
    description: 'Deze week besteden we extra aandacht aan cybersecurity. Ontdek onze top 5 tips voor veilig werken in de cloud.',
    url: 'https://www.linkedin.com/company/workflo',
    date: '2024-03-10',
    likes: 38,
    comments: 5
  },
  {
    id: '3',
    title: 'Nieuw Partnership met Microsoft',
    description: 'Workflo is nu officieel Microsoft Partner! Dit betekent nog betere ondersteuning en voordelen voor onze klanten.',
    url: 'https://www.linkedin.com/company/workflo',
    date: '2024-03-05',
    likes: 67,
    comments: 12
  }
]

export default function LinkedInPosts() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {linkedInPosts.map((post, index) => (
        <motion.article
          key={post.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden"
        >
          {/* LinkedIn Header */}
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 p-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white rounded flex items-center justify-center">
                <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </div>
              <div className="text-white">
                <p className="font-semibold">Workflo IT Services</p>
                <p className="text-xs opacity-80">
                  {new Date(post.date).toLocaleDateString('nl-NL', {
                    day: 'numeric',
                    month: 'short',
                    year: 'numeric'
                  })}
                </p>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="p-6">
            <h3 className="font-bold text-lg text-gray-900 mb-3">
              {post.title}
            </h3>
            <p className="text-gray-600 text-sm mb-4 line-clamp-3">
              {post.description}
            </p>

            {/* Engagement Stats */}
            <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
              <span className="flex items-center gap-1">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.333v5.43a2 2 0 001.106 1.79l.05.025A4 4 0 008.943 18h5.416a2 2 0 001.962-1.608l1.2-6A2 2 0 0015.56 8H12V4a2 2 0 00-2-2 1 1 0 00-1 1v.667a4 4 0 01-.8 2.4L6.8 7.933a4 4 0 00-.8 2.4z" />
                </svg>
                {post.likes}
              </span>
              <span className="flex items-center gap-1">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
                {post.comments}
              </span>
            </div>

            {/* Read More Link */}
            <a
              href={post.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-blue-600 font-medium hover:text-blue-700 transition-colors"
            >
              Bekijk op LinkedIn
              <ArrowTopRightOnSquareIcon className="w-4 h-4" />
            </a>
          </div>
        </motion.article>
      ))}
    </div>
  )
}