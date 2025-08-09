'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { ArrowTopRightOnSquareIcon } from '@heroicons/react/24/outline'

interface NewsItem {
  title: string
  link: string
  pubDate?: string
}

export default function NewsTicker() {
  const [newsItems, setNewsItems] = useState<NewsItem[]>([])
  const [loading, setLoading] = useState(true)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (!mounted) return
    
    const fetchNews = async () => {
      try {
        // Only run on client side
        if (typeof window === 'undefined') {
          setLoading(false)
          return
        }
        
        const response = await fetch('/api/rss-feed', {
          cache: 'no-store',
        })
        
        if (response.ok) {
          const data = await response.json()
          
          // Check if we have items in the response
          if (data.items && Array.isArray(data.items) && data.items.length > 0) {
            const news: NewsItem[] = data.items.slice(0, 10).map((item: any) => ({
              title: item.title || '',
              link: item.link || '#',
              pubDate: item.pubDate || ''
            }))
            
            setNewsItems(news)
          } else {
            // Set fallback news items if no RSS items available
            setNewsItems([
              { title: 'Workflo IT Services - Uw betrouwbare IT-partner', link: '/diensten' },
              { title: 'Gratis IT-assessment voor nieuwe klanten', link: '/tevredenheidscheck' },
              { title: '24/7 Support voor al onze managed service klanten', link: '/contact' },
            ])
          }
        }
      } catch (error) {
        console.error('Error fetching news:', error)
        // Set some fallback news items
        setNewsItems([
          { title: 'Workflo IT Services - Uw betrouwbare IT-partner', link: '/diensten' },
          { title: 'Gratis IT-assessment voor nieuwe klanten', link: '/tevredenheidscheck' },
          { title: '24/7 Support voor al onze managed service klanten', link: '/contact' },
        ])
      } finally {
        setLoading(false)
      }
    }

    fetchNews()
    // Refresh every 5 minutes
    const interval = setInterval(fetchNews, 5 * 60 * 1000)
    
    return () => clearInterval(interval)
  }, [mounted])

  if (!mounted || loading || newsItems.length === 0) {
    return null
  }

  // Duplicate items for seamless scrolling
  const tickerItems = [...newsItems, ...newsItems, ...newsItems]

  return (
    <div className="bg-gray-900 text-white py-2 overflow-hidden relative">
      <div className="container mx-auto px-4 flex items-center">
        <div className="flex-shrink-0 bg-yellow-400 text-black px-3 py-1 rounded font-bold text-sm mr-4">
          NIEUWS
        </div>
        
        <div className="flex-1 overflow-hidden">
          <motion.div
            className="flex items-center space-x-8 whitespace-nowrap"
            animate={{
              x: [0, -100 * newsItems.length + '%'],
            }}
            transition={{
              x: {
                duration: newsItems.length * 5,
                repeat: Infinity,
                repeatType: 'loop',
                ease: 'linear',
              },
            }}
          >
            {tickerItems.map((item, index) => (
              <a
                key={index}
                href={item.link}
                target={item.link.startsWith('http') ? '_blank' : undefined}
                rel={item.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="inline-flex items-center gap-2 hover:text-yellow-400 transition-colors group"
              >
                <span className="text-yellow-400">•</span>
                <span>{item.title}</span>
                {item.link.startsWith('http') && (
                  <ArrowTopRightOnSquareIcon className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                )}
              </a>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  )
}