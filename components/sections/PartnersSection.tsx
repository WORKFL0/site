'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const partners = [
  { name: 'Apple', logo: '🍎' },
  { name: 'Microsoft', logo: '🪟' },
  { name: 'Dell', logo: '💻' },
  { name: 'HP', logo: '🖨️' },
  { name: 'Cisco', logo: '🌐' },
  { name: 'Meraki', logo: '☁️' },
  { name: 'Fortinet', logo: '🛡️' },
  { name: 'Ruckus', logo: '📡' },
  { name: 'Ubiquiti', logo: '🔧' },
  { name: 'Logitech', logo: '🖱️' },
]

const PartnersSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section className="section-padding bg-gray-50">
      <div className="container mx-auto container-padding">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Partner Van
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We werken samen met &apos;s werelds toonaangevende technologiebedrijven om u de beste oplossingen te bieden
          </p>
        </motion.div>

        {/* Partners Scrolling Animation */}
        <div className="relative overflow-hidden">
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex space-x-12 animate-scroll"
          >
            {/* Duplicate the partners array for seamless scrolling */}
            {[...partners, ...partners].map((partner, index) => (
              <motion.div
                key={`${partner.name}-${index}`}
                className="flex-shrink-0"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow p-8 w-48 h-32 flex flex-col items-center justify-center">
                  <div className="text-4xl mb-2">{partner.logo}</div>
                  <p className="text-gray-700 font-semibold">{partner.name}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
          
          {/* Gradient overlays for smooth edges */}
          <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-gray-50 to-transparent pointer-events-none"></div>
          <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-gray-50 to-transparent pointer-events-none"></div>
        </div>
      </div>
    </section>
  )
}

export default PartnersSection