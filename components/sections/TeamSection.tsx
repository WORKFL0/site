'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

interface TeamMember {
  name: string
  role: string
  image?: string
  linkedin?: string
}

const teamMembers: TeamMember[] = [
  {
    name: 'Florian',
    role: 'CEO & Founder',
    linkedin: 'https://linkedin.com/in/florian'
  },
  {
    name: 'Nam-Hoon',
    role: 'CTO',
    linkedin: 'https://linkedin.com/in/namhoon'
  },
  {
    name: 'Mas',
    role: 'Head of Operations',
    linkedin: 'https://linkedin.com/in/mas'
  },
  {
    name: 'Marcello',
    role: 'Lead Developer',
    linkedin: 'https://linkedin.com/in/marcello'
  }
]

const TeamSection = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Ontmoet Ons Team
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Een toegewijd team van experts die klaarstaan om jouw IT-uitdagingen op te lossen
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
            >
              <div className="aspect-square bg-gradient-to-br from-primary-400 to-primary-600 flex items-center justify-center">
                <div className="w-32 h-32 rounded-full bg-white/20 flex items-center justify-center">
                  <span className="text-5xl font-bold text-white">
                    {member.name.charAt(0)}
                  </span>
                </div>
              </div>
              <div className="p-6 text-center">
                <h3 className="text-xl font-semibold text-gray-900 mb-1">
                  {member.name}
                </h3>
                <p className="text-gray-600 mb-4">{member.role}</p>
                {member.linkedin && (
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-primary-600 hover:text-primary-700 transition-colors"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                    Connect
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TeamSection