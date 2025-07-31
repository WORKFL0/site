'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { useState } from 'react'

// Mock blog posts - in production, these would come from a CMS
const blogPosts = [
  {
    id: 1,
    title: 'De 5 grootste IT-uitdagingen voor Amsterdamse MKB\'ers in 2025',
    excerpt: 'Van cybersecurity tot cloud migratie: ontdek welke IT-uitdagingen jouw bedrijf dit jaar tegenkomt en hoe je ze aanpakt.',
    date: '2025-01-15',
    category: 'IT Strategie',
    readTime: '5 min',
    author: 'Florian de Haan',
    image: '/blog/it-challenges-2025.jpg'
  },
  {
    id: 2,
    title: 'Waarom een Netwerk Scan essentieel is voor je bedrijfsveiligheid',
    excerpt: 'Een netwerk scan geeft inzicht in kwetsbaarheden voordat hackers ze vinden. Lees waarom dit de beste investering is voor 2025.',
    date: '2025-01-10',
    category: 'Cybersecurity',
    readTime: '4 min',
    author: 'Nam-Hoon Boots',
    image: '/blog/network-scan.jpg'
  },
  {
    id: 3,
    title: 'Van Office 365 naar Microsoft 365: Wat betekent dit voor jouw bedrijf?',
    excerpt: 'Microsoft\'s rebranding betekent meer dan alleen een naamsverandering. Ontdek de nieuwe mogelijkheden voor jouw organisatie.',
    date: '2025-01-05',
    category: 'Cloud',
    readTime: '6 min',
    author: 'Mas',
    image: '/blog/microsoft-365.jpg'
  },
  {
    id: 4,
    title: 'IT-kosten verlagen zonder in te leveren op kwaliteit',
    excerpt: 'Praktische tips om je IT-budget met 35% te verlagen terwijl je de productiviteit verhoogt. Gebaseerd op 100+ klantcases.',
    date: '2024-12-20',
    category: 'Kostenbesparing',
    readTime: '7 min',
    author: 'Florian de Haan',
    image: '/blog/cost-reduction.jpg'
  },
  {
    id: 5,
    title: 'De rol van AI in moderne IT-ondersteuning',
    excerpt: 'Hoe kunstmatige intelligentie de manier waarop we IT-problemen oplossen fundamenteel verandert.',
    date: '2024-12-15',
    category: 'Innovatie',
    readTime: '5 min',
    author: 'Marcello Macnack',
    image: '/blog/ai-support.jpg'
  }
]

const categories = ['Alle', 'IT Strategie', 'Cybersecurity', 'Cloud', 'Kostenbesparing', 'Innovatie']

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState('Alle')
  
  const filteredPosts = selectedCategory === 'Alle' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory)

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-grid-gray-100 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
        
        <div className="container mx-auto container-padding relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6"
            >
              Workflo <span className="text-gradient">Blog</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-xl text-gray-600"
            >
              Praktische IT-tips, nieuws en inzichten voor Amsterdamse ondernemers
            </motion.p>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 border-b">
        <div className="container mx-auto container-padding">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full font-medium transition-all ${
                  selectedCategory === category
                    ? 'bg-primary-500 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-20">
        <div className="container mx-auto container-padding">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow group"
              >
                {/* Post Image */}
                <div className="aspect-video bg-gradient-to-br from-primary-100 to-primary-200 relative overflow-hidden">
                  <div className="absolute inset-0 bg-grid-primary-300/20"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-primary-600 font-bold text-2xl">{post.category}</span>
                  </div>
                </div>

                {/* Post Content */}
                <div className="p-6">
                  <div className="flex items-center gap-4 text-sm text-gray-600 mb-3">
                    <span>{post.date}</span>
                    <span>•</span>
                    <span>{post.readTime} leestijd</span>
                  </div>

                  <h2 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors line-clamp-2">
                    {post.title}
                  </h2>

                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">Door {post.author}</span>
                    <Link
                      href={`/blog/${post.id}`}
                      className="text-primary-600 hover:text-primary-700 font-medium text-sm flex items-center gap-2"
                    >
                      Lees meer
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>

          {/* LinkedIn Integration Note */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16 text-center"
          >
            <div className="bg-blue-50 rounded-2xl p-8 max-w-3xl mx-auto">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Volg ons op LinkedIn
              </h3>
              <p className="text-gray-600 mb-6">
                Voor het laatste nieuws, updates en IT-tips volg je ons beste op LinkedIn. 
                We delen daar regelmatig waardevolle content voor Amsterdamse ondernemers.
              </p>
              <a
                href="https://www.linkedin.com/company/workflo-it/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
                Volg ons op LinkedIn
              </a>
            </div>
          </motion.div>

          {/* Newsletter CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-12 text-center"
          >
            <div className="bg-gray-100 rounded-2xl p-8 max-w-3xl mx-auto">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Mis geen enkel artikel
              </h3>
              <p className="text-gray-600 mb-6">
                Ontvang onze beste IT-tips en het laatste nieuws direct in je inbox.
              </p>
              <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Je e-mailadres"
                  className="flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-primary-500"
                />
                <button
                  type="submit"
                  className="px-6 py-3 bg-primary-500 text-white rounded-lg hover:bg-primary-600 transition-colors font-medium"
                >
                  Aanmelden
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  )
}