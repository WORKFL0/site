'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Image from 'next/image'
import { useLanguage } from '@/contexts/LanguageContext'

interface ClientsSectionProps {
  clients?: Array<{
    name: string
    logo: string
    industry?: string
    description?: string
    website?: string
  }>
}

const defaultClients = [
  { name: 'Havas Media', logo: '/images/logos/havas-media.png', industry: 'Marketing & Media' },
  { name: 'Doctor Feelgood', logo: '/images/logos/doctor-feelgood.jpg', industry: 'Healthcare' },
  { name: 'Winix', logo: '/images/logos/winix.jpg', industry: 'Technology' },
  { name: 'ROC Amsterdam', logo: '/images/logos/roc-amsterdam.png', industry: 'Education' },
  { name: 'Greenpeace', logo: '/images/logos/greenpeace.png', industry: 'Non-Profit' },
  { name: 'Podimo', logo: '/images/logos/podimo.png', industry: 'Media & Entertainment' },
  { name: 'NWA', logo: '/images/logos/nwa.png', industry: 'Aviation' },
  { name: 'BijVoorbeeld', logo: '/images/logos/bijvoorbeeld.jpg', industry: 'Business Services' },
]

const ClientsSection = ({ clients = defaultClients }: ClientsSectionProps = {}) => {
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
            {t.clients.title}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t.clients.subtitle}
          </p>
        </motion.div>

        {/* Clients Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8"
        >
          {clients.map((client, index) => (
            <motion.div
              key={client.name}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 * (index % 6) }}
              className="flex items-center justify-center p-6 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
            >
              <div className="text-center">
                <div className="w-24 h-24 bg-white rounded-lg mb-2 mx-auto flex items-center justify-center shadow-md hover:shadow-lg transition-shadow overflow-hidden">
                  {client.logo.startsWith('/') ? (
                    <Image
                      src={client.logo}
                      alt={client.name}
                      width={80}
                      height={80}
                      className="object-contain"
                    />
                  ) : (
                    <span className="text-4xl">{client.logo}</span>
                  )}
                </div>
                <p className="text-sm text-gray-700 font-medium">{client.name}</p>
                {client.industry && (
                  <p className="text-xs text-gray-500 mt-1">{client.industry}</p>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          <div className="text-center">
            <div className="text-4xl font-bold text-primary-600 mb-2">100+</div>
            <div className="text-gray-600">{t.clients.stats.satisfiedClients}</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-primary-600 mb-2">15+</div>
            <div className="text-gray-600">{t.clients.stats.yearsExperience}</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-primary-600 mb-2">24/7</div>
            <div className="text-gray-600">{t.clients.stats.supportAvailable}</div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default ClientsSection