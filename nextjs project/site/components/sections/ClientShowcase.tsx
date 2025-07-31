'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const clients = [
  // Current clients
  'Aescap', 'Hunt Amsterdam', 'Rademakkers', "'t idee! Tonko", 'DMC Makelaars', 
  'van der Eerde hypotheken', 'Klaar', 'Dag en Nacht', 'Voice Industries', 
  'Schulte en Lestrade', 'Duwtje', 'Highwoord', 'Jager Notarisen', 'PR Mansion', 
  'Podimo', 'Havas Media Network', 'Winix', 'DoctorFeelgood', 'All Response Media', 
  'WorkfStuff', 'Open Boek', 'Bijvoorkeur', 'John Doornik Casting', 'Huisart Elings', 
  'BLC Financeview', 'Koschuch'
]

const previousClients = [
  'Leyden labs', 'Jump Retail', 'La Dress', 'Greenpeace', 'TBWA', 
  'iO Digital', 'Daily Paper'
]

export default function ClientShowcase() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section className="section-padding bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto container-padding">
        {/* Current Clients */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Partners Met
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We werken samen met Nederlands toonaangevende bedrijven en instanties om jou de beste oplossingen te kunnen bieden
          </p>
        </motion.div>

        {/* Current Clients Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 mb-20">
          {clients.map((client, index) => (
            <motion.div
              key={client}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.4, delay: index * 0.02 }}
              className="bg-white rounded-lg shadow-md hover:shadow-lg transition-all p-6 text-center"
            >
              <p className="text-gray-800 font-medium">{client}</p>
            </motion.div>
          ))}
        </div>

        {/* Previous Clients */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mb-12"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Wij Hebben Gewerkt Voor
          </h3>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
            Een selectie van organisaties waar we met trots aan hebben mogen bijdragen
          </p>
        </motion.div>

        {/* Previous Clients - More subtle display */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {previousClients.map((client, index) => (
            <motion.div
              key={client}
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.4, delay: 0.5 + index * 0.05 }}
              className="px-6 py-3 bg-gray-100 rounded-full text-gray-700 font-medium"
            >
              {client}
            </motion.div>
          ))}
        </div>

        {/* Trust Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-16"
        >
          <div className="inline-flex items-center gap-4 px-8 py-4 bg-primary-50 rounded-2xl">
            <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
            <div className="text-left">
              <p className="font-semibold text-gray-900">100+ Tevreden Klanten</p>
              <p className="text-sm text-gray-600">Al meer dan 10 jaar vertrouwd IT-partner</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}