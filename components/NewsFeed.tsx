'use client'

import { useState, useEffect, useCallback } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { CalendarIcon, ArrowTopRightOnSquareIcon } from '@heroicons/react/24/outline'

interface NewsItem {
  title: string
  description: string
  link: string
  pubDate: string
  guid: string
}

interface NewsFeedProps {
  maxItems?: number
  showDescription?: boolean
  className?: string
}

const NewsFeed = ({ 
  maxItems = 6, 
  showDescription = true,
  className = ''
}: NewsFeedProps) => {
  const [newsItems, setNewsItems] = useState<NewsItem[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  // Fallback news items for when RSS feed is unavailable
  const getFallbackNews = useCallback((): NewsItem[] => {
    return [
      {
        title: "Microsoft Announces New AI-Powered Security Features for Office 365",
        description: "Microsoft unveils advanced threat protection capabilities powered by artificial intelligence to help businesses stay secure in the cloud.",
        link: "https://www.microsoft.com/security",
        pubDate: new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString(),
        guid: "fallback-1"
      },
      {
        title: "Cybersecurity Trends: Zero Trust Architecture Adoption Grows",
        description: "Organizations worldwide are increasingly implementing Zero Trust security models to protect against modern cyber threats.",
        link: "https://www.cybersecurity-news.com",
        pubDate: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toISOString(),
        guid: "fallback-2"
      },
      {
        title: "Cloud Migration Best Practices for SMBs in 2024",
        description: "Small and medium businesses are accelerating their cloud adoption. Here are the key strategies for successful migration.",
        link: "https://www.cloud-news.com",
        pubDate: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000).toISOString(),
        guid: "fallback-3"
      },
      {
        title: "IT Infrastructure Modernization: Key Strategies for Success",
        description: "Learn how organizations can modernize their IT infrastructure to improve efficiency, security, and scalability.",
        link: "https://www.tech-insights.com",
        pubDate: new Date(Date.now() - 4 * 24 * 60 * 60 * 1000).toISOString(),
        guid: "fallback-4"
      },
      {
        title: "Network Security: Protecting Remote Work Environments",
        description: "With hybrid work becoming permanent, organizations need robust network security strategies to protect distributed teams.",
        link: "https://www.network-security.com",
        pubDate: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000).toISOString(),
        guid: "fallback-5"
      },
      {
        title: "Backup and Disaster Recovery: Essential for Business Continuity",
        description: "Comprehensive backup strategies and disaster recovery planning are critical for maintaining business operations during disruptions.",
        link: "https://www.disaster-recovery.com",
        pubDate: new Date(Date.now() - 6 * 24 * 60 * 60 * 1000).toISOString(),
        guid: "fallback-6"
      }
    ].slice(0, maxItems)
  }, [maxItems])

  useEffect(() => {
    const fetchRSSFeed = async () => {
      try {
        setLoading(true)
        setError(null)
        
        // Fetch RSS feed via CORS proxy
        const rssUrl = 'https://rss.workflo.it/i/?a=rss&get=c_4&rid=6893c5809212b&hours=168'
        const corsProxy = 'https://api.allorigins.win/get?url='
        
        const response = await fetch(`${corsProxy}${encodeURIComponent(rssUrl)}`)
        
        if (!response.ok) {
          throw new Error('Failed to fetch RSS feed')
        }
        
        const data = await response.json()
        
        if (!data.contents) {
          throw new Error('No RSS content available')
        }
        
        const parser = new DOMParser()
        const xmlDoc = parser.parseFromString(data.contents, 'text/xml')
        
        const items = xmlDoc.querySelectorAll('item')
        const newsData: NewsItem[] = []
        
        items.forEach((item, index) => {
          if (index < maxItems) {
            const title = item.querySelector('title')?.textContent || 'Untitled'
            const description = item.querySelector('description')?.textContent || ''
            const link = item.querySelector('link')?.textContent || '#'
            const pubDate = item.querySelector('pubDate')?.textContent || ''
            const guid = item.querySelector('guid')?.textContent || `item-${index}`
            
            newsData.push({
              title: title.trim(),
              description: description.trim(),
              link: link.trim(),
              pubDate: pubDate.trim(),
              guid: guid.trim()
            })
          }
        })
        
        if (newsData.length === 0) {
          // Fallback to sample news items
          setNewsItems(getFallbackNews())
        } else {
          setNewsItems(newsData)
        }
      } catch (err) {
        console.error('Error fetching RSS feed:', err)
        // Use fallback news items instead of showing error
        setNewsItems(getFallbackNews())
      } finally {
        setLoading(false)
      }
    }

    fetchRSSFeed()
  }, [maxItems, getFallbackNews])

  const formatDate = (dateString: string) => {
    try {
      const date = new Date(dateString)
      return date.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric'
      })
    } catch {
      return 'Recent'
    }
  }

  const truncateText = (text: string, maxLength: number) => {
    if (text.length <= maxLength) return text
    return text.substring(0, maxLength).trim() + '...'
  }

  if (loading) {
    return (
      <div className={`w-full ${className}`}>
        <div className="animate-pulse">
          <div className="h-8 bg-gray-200 rounded mb-6 w-48"></div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[...Array(6)].map((_, index) => (
              <div key={index} className="bg-white rounded-lg border p-6">
                <div className="h-4 bg-gray-200 rounded w-3/4 mb-3"></div>
                <div className="h-3 bg-gray-200 rounded w-1/2 mb-4"></div>
                <div className="space-y-2">
                  <div className="h-3 bg-gray-200 rounded"></div>
                  <div className="h-3 bg-gray-200 rounded w-5/6"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }

  // Since we now use fallback news, we only show error if there are truly no items
  if (newsItems.length === 0 && !loading) {
    return (
      <div className={`w-full ${className}`}>
        <motion.div 
          className="text-center py-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="bg-gray-50 rounded-lg p-8 max-w-md mx-auto">
            <div className="text-gray-400 mb-4">
              <svg className="w-16 h-16 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">News Feed Unavailable</h3>
            <p className="text-gray-600">
              No news items available at the moment.
            </p>
          </div>
        </motion.div>
      </div>
    )
  }

  return (
    <div className={`w-full ${className}`} ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
      >
        <div className="flex items-center justify-between mb-8">
          <motion.h2 
            className="text-3xl font-bold text-gray-900"
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Latest Industry News
          </motion.h2>
          <motion.div 
            className="flex items-center gap-2 text-gray-500 text-sm"
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            Live Feed
          </motion.div>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {newsItems.map((item, index) => (
            <motion.article
              key={item.guid}
              className="group bg-white rounded-lg border border-gray-200 hover:border-yellow-400 transition-all duration-300 hover:shadow-lg overflow-hidden"
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ 
                duration: 0.6, 
                delay: 0.4 + (index * 0.1),
                ease: "easeOut"
              }}
              whileHover={{ 
                y: -8, 
                scale: 1.02,
                transition: { duration: 0.3 }
              }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="p-6">
                {/* Date */}
                <div className="flex items-center gap-2 text-gray-500 text-sm mb-3">
                  <CalendarIcon className="w-4 h-4" />
                  <time dateTime={item.pubDate}>
                    {formatDate(item.pubDate)}
                  </time>
                </div>

                {/* Title */}
                <h3 className="font-bold text-lg text-gray-900 mb-3 group-hover:text-yellow-600 transition-colors duration-300">
                  {truncateText(item.title, 80)}
                </h3>

                {/* Description */}
                {showDescription && item.description && (
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                    {truncateText(item.description.replace(/<[^>]*>/g, ''), 120)}
                  </p>
                )}

                {/* Read More Link */}
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-yellow-600 font-medium text-sm hover:text-yellow-700 transition-colors duration-200"
                >
                  Read More
                  <ArrowTopRightOnSquareIcon className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
                </a>
              </div>

              {/* Hover indicator */}
              <div className="h-1 bg-gradient-to-r from-yellow-400 to-yellow-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
            </motion.article>
          ))}
        </div>

        {/* View More Link */}
        <motion.div 
          className="text-center mt-8"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 1.2 }}
        >
          <a
            href="https://rss.workflo.it/i/?a=rss&get=c_4&rid=6893c5809212b&hours=168"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-yellow-400 text-black px-6 py-3 rounded-lg font-medium hover:bg-yellow-500 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            View All News
            <ArrowTopRightOnSquareIcon className="w-4 h-4" />
          </a>
        </motion.div>
      </motion.div>
    </div>
  )
}

export default NewsFeed