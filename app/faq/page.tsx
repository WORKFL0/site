'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import { useLanguage } from '@/context/LanguageContext'
import Button from '@/components/ui/Button'
import { ChevronDownIcon, MagnifyingGlassIcon } from '@heroicons/react/24/outline'

interface FAQItem {
  id: string
  category: string
  question: string
  answer: string
}

export default function FAQPage() {
  const { t } = useLanguage()
  const [activeCategory, setActiveCategory] = useState('all')
  const [searchQuery, setSearchQuery] = useState('')
  const [openItems, setOpenItems] = useState<string[]>([])

  // FAQ data structure
  const faqData: FAQItem[] = [
    // Pricing & Contracts
    { id: 'pricing-1', category: 'pricing', question: t('faq.pricing.q1'), answer: t('faq.pricing.a1') },
    { id: 'pricing-2', category: 'pricing', question: t('faq.pricing.q2'), answer: t('faq.pricing.a2') },
    { id: 'pricing-3', category: 'pricing', question: t('faq.pricing.q3'), answer: t('faq.pricing.a3') },
    { id: 'pricing-4', category: 'pricing', question: t('faq.pricing.q4'), answer: t('faq.pricing.a4') },
    
    // Support & Response Times
    { id: 'support-1', category: 'support', question: t('faq.support.q1'), answer: t('faq.support.a1') },
    { id: 'support-2', category: 'support', question: t('faq.support.q2'), answer: t('faq.support.a2') },
    { id: 'support-3', category: 'support', question: t('faq.support.q3'), answer: t('faq.support.a3') },
    { id: 'support-4', category: 'support', question: t('faq.support.q4'), answer: t('faq.support.a4') },
    
    // Services & Solutions
    { id: 'services-1', category: 'services', question: t('faq.services.q1'), answer: t('faq.services.a1') },
    { id: 'services-2', category: 'services', question: t('faq.services.q2'), answer: t('faq.services.a2') },
    { id: 'services-3', category: 'services', question: t('faq.services.q3'), answer: t('faq.services.a3') },
    { id: 'services-4', category: 'services', question: t('faq.services.q4'), answer: t('faq.services.a4') },
    
    // Security & Compliance
    { id: 'security-1', category: 'security', question: t('faq.security.q1'), answer: t('faq.security.a1') },
    { id: 'security-2', category: 'security', question: t('faq.security.q2'), answer: t('faq.security.a2') },
    { id: 'security-3', category: 'security', question: t('faq.security.q3'), answer: t('faq.security.a3') },
    { id: 'security-4', category: 'security', question: t('faq.security.q4'), answer: t('faq.security.a4') },
    
    // Getting Started
    { id: 'onboarding-1', category: 'onboarding', question: t('faq.onboarding.q1'), answer: t('faq.onboarding.a1') },
    { id: 'onboarding-2', category: 'onboarding', question: t('faq.onboarding.q2'), answer: t('faq.onboarding.a2') },
    { id: 'onboarding-3', category: 'onboarding', question: t('faq.onboarding.q3'), answer: t('faq.onboarding.a3') },
    { id: 'onboarding-4', category: 'onboarding', question: t('faq.onboarding.q4'), answer: t('faq.onboarding.a4') },
  ]

  // Categories
  const categories = [
    { id: 'all', name: t('faq.category.all') },
    { id: 'pricing', name: t('faq.category.pricing') },
    { id: 'support', name: t('faq.category.support') },
    { id: 'services', name: t('faq.category.services') },
    { id: 'security', name: t('faq.category.security') },
    { id: 'onboarding', name: t('faq.category.onboarding') },
  ]

  // Filter FAQs based on category and search
  const filteredFAQs = faqData.filter(faq => {
    const matchesCategory = activeCategory === 'all' || faq.category === activeCategory
    const matchesSearch = searchQuery === '' || 
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCategory && matchesSearch
  })

  // Toggle FAQ item
  const toggleFAQItem = (id: string) => {
    setOpenItems(prev => 
      prev.includes(id) 
        ? prev.filter(item => item !== id)
        : [...prev, id]
    )
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main className="py-20">
        {/* Hero Section */}
        <section className="relative mb-16 bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white py-16">
          {/* Warning Tape Stripe */}
          <div className="absolute top-0 left-0 right-0 h-3" style={{
            backgroundImage: `repeating-linear-gradient(
              45deg,
              #f2f400,
              #f2f400 15px,
              #000000 15px,
              #000000 30px
            )`
          }}></div>
          
          <div className="container mx-auto px-4 pt-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <h1 className="text-5xl font-bold text-white mb-6">
                {t('faq.hero.title')}
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
                {t('faq.hero.description')}
              </p>
            </motion.div>
          </div>
        </section>

        {/* Search and Filters Section */}
        <section className="py-8 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              {/* Search Bar */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="relative mb-8"
              >
                <div className="relative">
                  <MagnifyingGlassIcon className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <input
                    type="text"
                    placeholder={t('faq.search.placeholder')}
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-12 pr-4 py-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent text-lg"
                  />
                </div>
              </motion.div>

              {/* Category Filter */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="flex flex-wrap gap-3 justify-center"
              >
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setActiveCategory(category.id)}
                    className={`px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
                      activeCategory === category.id
                        ? 'bg-yellow-400 text-black shadow-lg'
                        : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-300'
                    }`}
                  >
                    {category.name}
                  </button>
                ))}
              </motion.div>
            </div>
          </div>
        </section>

        {/* FAQ Accordion Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <AnimatePresence>
                {filteredFAQs.length === 0 ? (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="text-center py-12"
                  >
                    <p className="text-gray-500 text-lg">No questions found matching your search.</p>
                  </motion.div>
                ) : (
                  <div className="space-y-4">
                    {filteredFAQs.map((faq, index) => (
                      <motion.div
                        key={faq.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: index * 0.05 }}
                        className="bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow"
                      >
                        <button
                          onClick={() => toggleFAQItem(faq.id)}
                          className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
                        >
                          <h3 className="text-lg font-semibold text-gray-900 pr-4">
                            {faq.question}
                          </h3>
                          <ChevronDownIcon
                            className={`h-5 w-5 text-gray-500 transition-transform duration-200 flex-shrink-0 ${
                              openItems.includes(faq.id) ? 'rotate-180' : ''
                            }`}
                          />
                        </button>
                        
                        <AnimatePresence>
                          {openItems.includes(faq.id) && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: 'auto', opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.3, ease: 'easeInOut' }}
                              className="overflow-hidden"
                            >
                              <div className="px-6 pb-5 border-t border-gray-100">
                                <motion.p
                                  initial={{ y: -10, opacity: 0 }}
                                  animate={{ y: 0, opacity: 1 }}
                                  transition={{ duration: 0.2, delay: 0.1 }}
                                  className="text-gray-700 leading-relaxed pt-4"
                                >
                                  {faq.answer}
                                </motion.p>
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </motion.div>
                    ))}
                  </div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-black text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="h-full w-full" style={{
              backgroundImage: `repeating-linear-gradient(
                45deg,
                #f2f400,
                #f2f400 15px,
                transparent 15px,
                transparent 30px
              )`
            }}></div>
          </div>
          
          <div className="container mx-auto px-4 text-center relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl font-bold mb-4">{t('faq.cta.title')}</h2>
              <p className="text-xl mb-8 text-gray-300">
                {t('faq.cta.description')}
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Button 
                  href="/contact"
                  variant="primary"
                  size="lg"
                  className="bg-yellow-400 text-black hover:bg-yellow-500 px-8 py-4 font-bold"
                >
                  {t('faq.cta.button')}
                </Button>
              </div>
              
              <p className="text-gray-400 mt-6">
                {t('faq.cta.phone')}
              </p>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}