'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Button from '../ui/Button'

const newsItems = [
  {
    title: 'Nieuwe Microsoft 365 Features voor 2025',
    excerpt: 'Ontdek hoe de laatste updates jouw bedrijf productiever maken.',
    date: '15 januari 2025',
    category: 'Technology',
  },
  {
    title: 'Cybersecurity Tips voor het MKB',
    excerpt: 'Bescherm je bedrijf tegen de nieuwste online dreigingen met deze essentiële tips.',
    date: '10 januari 2025',
    category: 'Security',
  },
  {
    title: 'Workflo Breidt Team Uit',
    excerpt: 'We verwelkomen nieuwe experts om onze klanten nog beter te bedienen.',
    date: '5 januari 2025',
    category: 'Company',
  },
  {
    title: 'AI Tools voor Productiviteit',
    excerpt: 'Hoe kunstmatige intelligentie jouw werkdag kan transformeren.',
    date: '28 december 2024',
    category: 'Innovation',
  },
]

const NewsSection = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Laatste Nieuws & Updates
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Blijf op de hoogte van de laatste technologie trends en Workflo updates
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {newsItems.map((item, index) => (
            <motion.article
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow overflow-hidden group cursor-pointer"
            >
              <div className="aspect-w-16 aspect-h-9 bg-gradient-to-br from-primary-400 to-primary-600 h-48 flex items-center justify-center">
                <div className="text-white text-center p-6">
                  <span className="inline-block px-3 py-1 bg-white/20 rounded-full text-sm font-medium mb-3">
                    {item.category}
                  </span>
                  <p className="text-sm opacity-90">{item.date}</p>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm">
                  {item.excerpt}
                </p>
              </div>
            </motion.article>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center"
        >
          <p className="text-gray-600 mb-6">
            Volg ons op LinkedIn voor dagelijkse updates en insights
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://linkedin.com/company/workflo"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
              Volg ons op LinkedIn
            </a>
            <Button href="/blog" variant="outline">
              Bekijk alle nieuws
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default NewsSection