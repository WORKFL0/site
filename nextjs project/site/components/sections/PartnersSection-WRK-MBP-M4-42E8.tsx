'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

interface PartnersSectionProps {
  partners?: Array<{
    name: string
    logo: string
    description?: string
    website?: string
  }>
}

const defaultPartners = [
  { name: 'Microsoft', logo: '🪟' },
  { name: 'Apple', logo: '🍎' },
  { name: 'Office 365', logo: '📊' },
  { name: 'Dell', logo: '💻' },
  { name: 'HP', logo: '🖨️' },
  { name: 'Cisco Meraki', logo: '🌐' },
  { name: 'Ubiquiti', logo: '📡' },
  { name: 'Sophos', logo: '🛡️' },
]

const PartnersSection = ({ partners = defaultPartners }: PartnersSectionProps = {}) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const clients = [
    'Havas Media', 'Doctor Feelgood', 'Winix', 'JUMP', 'Podimo',
    'Dagennacht', 'Anna', 'Kenchaan', 'Propaganda', 'Greenpeace'
  ]

  return (
    <section className="section-padding bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto container-padding">
        {/* Partners met section */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Partners met:
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We werken samen met Nederlands toonaangevende bedrijven en instanties om jou de beste oplossingen te kunnen bieden
            </p>
          </div>

          {/* Client logos grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {clients.map((client, index) => (
              <motion.div
                key={client}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow p-6 flex items-center justify-center"
              >
                <span className="text-gray-700 font-medium">{client}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Partners van section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Partners van:
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            De merken die wij gebruiken voor jouw IT-oplossingen
          </p>
        </motion.div>

        {/* Technology Partners with distinct dark theme */}
        <div className="bg-gray-900 rounded-2xl p-8 -mx-4 sm:mx-0">
          <div className="relative overflow-hidden">
            <motion.div
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex space-x-8 animate-scroll"
            >
              {/* Duplicate the partners array for seamless scrolling */}
              {[...partners, ...partners].map((partner, index) => (
                <motion.div
                  key={`${partner.name}-${index}`}
                  className="flex-shrink-0"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg px-6 py-4 border border-white/20 hover:bg-white/20 transition-all">
                    <div className="flex items-center gap-3">
                      <div className="text-3xl">{partner.logo}</div>
                      <p className="text-white font-semibold whitespace-nowrap">{partner.name}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
            
            {/* Gradient overlays for smooth edges */}
            <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-gray-900 to-transparent pointer-events-none z-10"></div>
            <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-gray-900 to-transparent pointer-events-none z-10"></div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PartnersSection