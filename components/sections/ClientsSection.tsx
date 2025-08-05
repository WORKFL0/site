'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Image from 'next/image'

interface ClientsSectionProps {
  clients?: Array<{
    name: string
    logo: string
    industry?: string
    description?: string
    website?: string
  }>
}

// Current clients
const currentClients = [
  'Aescap', 'Hunt Amsterdam', 'Rademakkers', "'t idee! Tonko", 'DMC Makelaars', 
  'van der Eerde hypotheken', 'Klaar', 'Dag en Nacht', 'Voice Industries', 
  'Schulte en Lestrade', 'Duwtje', 'Highwoord', 'Jager Notarisen', 'PR Mansion', 
  'Podimo', 'Havas Media Network', 'Winix', 'DoctorFeelgood', 'All Response Media', 
  'WorkfStuff', 'Open Boek', 'Bijvoorkeur', 'John Doornik Casting', 'Huisart Elings', 
  'BLC Financeview', 'Koschuch'
]

// Previous clients we've worked with
const previousClients = [
  'Leyden labs', 'Jump Retail', 'La Dress', 'Greenpeace', 'TBWA', 
  'iO Digital', 'Daily Paper'
]

const defaultClients = currentClients.map(name => ({ name, logo: '' }))

const ClientsSection = ({ clients = defaultClients }: ClientsSectionProps = {}) => {
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
            Partners Met
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We werken samen met Nederlands toonaangevende bedrijven en instanties om jou de beste oplossingen te kunnen bieden
          </p>
        </motion.div>

        {/* Current Clients Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 mb-16"
        >
          {clients.map((client, index) => (
            <motion.div
              key={client.name}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.4, delay: index * 0.02 }}
              className="bg-white rounded-lg shadow-md hover:shadow-lg transition-all p-4 text-center"
            >
              <p className="text-gray-800 font-medium text-sm">{client.name}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Previous Clients Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mb-8"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Wij Hebben Gewerkt Voor
          </h3>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-6">
            Een selectie van organisaties waar we met trots aan hebben mogen bijdragen
          </p>
          
          <div className="flex flex-wrap justify-center gap-3">
            {previousClients.map((client, index) => (
              <motion.div
                key={client}
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : {}}
                transition={{ duration: 0.4, delay: 0.5 + index * 0.05 }}
                className="px-5 py-2 bg-gray-100 rounded-full text-gray-700 font-medium text-sm"
              >
                {client}
              </motion.div>
            ))}
          </div>
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