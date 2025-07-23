'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useLanguage } from '@/contexts/LanguageContext'

const brandPartners = [
  { name: 'Microsoft', logo: '🪟' },
  { name: 'Apple', logo: '🍎' },
  { name: 'Dell', logo: '💻' },
  { name: 'HP', logo: '🖨️' },
  { name: 'Cisco', logo: '🌐' },
  { name: 'Sophos', logo: '🛡️' },
  { name: 'TeamViewer', logo: '🖥️' },
  { name: 'Office 365', logo: '📊' },
]

const BrandPartnersSection = () => {
  const { t } = useLanguage()
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section className="section-padding bg-white">
      <div className="container mx-auto container-padding">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            {t.partners.van.title}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t.partners.van.subtitle}
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6">
          {brandPartners.map((partner, index) => (
            <motion.div
              key={partner.name}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: index * 0.05 }}
              className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow flex flex-col items-center justify-center"
            >
              <div className="text-3xl mb-2">{partner.logo}</div>
              <p className="text-sm text-gray-700 font-medium text-center">{partner.name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default BrandPartnersSection