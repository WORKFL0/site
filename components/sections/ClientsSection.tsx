'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Image from 'next/image'

const clients = [
  // Based on the old site reference, these would be the clients
  // In a real implementation, you would fetch these from your CMS or API
  { name: 'Doctor Feelgood', logo: '/clients/doctor-feelgood.png' },
  { name: 'Havas Media', logo: '/clients/havas-media.png' },
  { name: 'Winix', logo: '/clients/winix.png' },
  // Add more clients as needed
]

const ClientsSection = () => {
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
            Wij Hebben Gewerkt Voor
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Trotse partner van meer dan 100+ bedrijven in Amsterdam en omgeving
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
                {/* Placeholder for logo - in production, use actual logos */}
                <div className="w-24 h-24 bg-gray-200 rounded-lg mb-2 mx-auto flex items-center justify-center">
                  <span className="text-gray-400 text-xs">Logo</span>
                </div>
                <p className="text-sm text-gray-700 font-medium">{client.name}</p>
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
            <div className="text-gray-600">Tevreden Klanten</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-primary-600 mb-2">15+</div>
            <div className="text-gray-600">Jaar Ervaring</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-primary-600 mb-2">24/7</div>
            <div className="text-gray-600">Support Beschikbaar</div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default ClientsSection