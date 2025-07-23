'use client'

import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useLanguage } from '@/contexts/LanguageContext'
import Link from 'next/link'

// Placeholder blog posts
const blogPosts = [
  {
    id: '1',
    title: {
      nl: 'De 5 grootste IT-uitdagingen voor MKB in 2025',
      en: 'The 5 Biggest IT Challenges for SMBs in 2025'
    },
    excerpt: {
      nl: 'Ontdek welke technologische uitdagingen het MKB te wachten staat en hoe je je hierop kunt voorbereiden.',
      en: 'Discover which technological challenges await SMBs and how to prepare for them.'
    },
    date: '2025-01-15',
    category: 'IT Strategy',
    readTime: '5 min',
  },
  {
    id: '2',
    title: {
      nl: 'Waarom Cloud Backup Essentieel is voor Elk Bedrijf',
      en: 'Why Cloud Backup is Essential for Every Business'
    },
    excerpt: {
      nl: 'Data is het nieuwe goud. Leer waarom een goede backup-strategie het verschil kan maken tussen overleven en faillissement.',
      en: 'Data is the new gold. Learn why a good backup strategy can make the difference between survival and bankruptcy.'
    },
    date: '2025-01-10',
    category: 'Cloud',
    readTime: '3 min',
  },
  {
    id: '3',
    title: {
      nl: 'Cybersecurity: Niet Meer Optional in 2025',
      en: 'Cybersecurity: No Longer Optional in 2025'
    },
    excerpt: {
      nl: 'Met de nieuwe NIS2 richtlijnen wordt cybersecurity verplicht. Wat betekent dit voor jouw bedrijf?',
      en: 'With the new NIS2 directives, cybersecurity becomes mandatory. What does this mean for your business?'
    },
    date: '2025-01-05',
    category: 'Security',
    readTime: '7 min',
  },
]

export default function BlogPage() {
  const { language } = useLanguage()
  const [heroRef, heroInView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const [postsRef, postsInView] = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <>
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative py-16 bg-gradient-to-br from-primary-50 to-white">
          <div className="container mx-auto px-4">
            <motion.div
              ref={heroRef}
              initial={{ opacity: 0, y: 20 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="text-center max-w-3xl mx-auto"
            >
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                {language === 'nl' ? 'Blog & Nieuws' : 'Blog & News'}
              </h1>
              <p className="text-xl text-gray-600">
                {language === 'nl' 
                  ? 'Blijf op de hoogte van de laatste IT-ontwikkelingen en tips voor jouw bedrijf'
                  : 'Stay informed about the latest IT developments and tips for your business'
                }
              </p>
            </motion.div>
          </div>
        </section>

        {/* Blog Posts */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <motion.div
              ref={postsRef}
              initial={{ opacity: 0 }}
              animate={postsInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {blogPosts.map((post, index) => (
                <motion.article
                  key={post.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={postsInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow overflow-hidden"
                >
                  <div className="aspect-w-16 aspect-h-9 bg-gradient-to-br from-primary-400 to-primary-600">
                    <div className="flex items-center justify-center h-48">
                      <span className="text-6xl text-white/20">📝</span>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-4 text-sm text-gray-600 mb-3">
                      <span className="bg-primary-100 text-primary-700 px-3 py-1 rounded-full">
                        {post.category}
                      </span>
                      <span>{post.readTime}</span>
                    </div>
                    <h2 className="text-xl font-bold text-gray-900 mb-3">
                      {post.title[language]}
                    </h2>
                    <p className="text-gray-600 mb-4">
                      {post.excerpt[language]}
                    </p>
                    <div className="flex items-center justify-between">
                      <time className="text-sm text-gray-500">
                        {new Date(post.date).toLocaleDateString(language === 'nl' ? 'nl-NL' : 'en-US', {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric'
                        })}
                      </time>
                      <Link href={`/blog/${post.id}`} className="text-primary-600 hover:text-primary-700 font-medium text-sm">
                        {language === 'nl' ? 'Lees meer →' : 'Read more →'}
                      </Link>
                    </div>
                  </div>
                </motion.article>
              ))}
            </motion.div>

            {/* Coming Soon */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={postsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-center mt-16 py-12 bg-gray-50 rounded-2xl"
            >
              <div className="text-6xl mb-4">🚀</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                {language === 'nl' ? 'Meer content komt eraan!' : 'More content coming soon!'}
              </h3>
              <p className="text-gray-600 max-w-2xl mx-auto mb-6">
                {language === 'nl' 
                  ? 'We werken hard aan nieuwe artikelen en integratie met onze LinkedIn posts. Blijf op de hoogte!'
                  : 'We\'re working hard on new articles and integration with our LinkedIn posts. Stay tuned!'
                }
              </p>
              <a 
                href="https://www.linkedin.com/company/workflo" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-primary-600 hover:text-primary-700 font-medium"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
                {language === 'nl' ? 'Volg ons op LinkedIn' : 'Follow us on LinkedIn'}
              </a>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}