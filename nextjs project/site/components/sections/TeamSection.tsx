'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'

const teamMembers = [
  {
    name: 'Florian de Haan',
    role: 'Founder & CEO',
    description: 'Ik ben een gedreven generalist en vind het heerlijk om met nieuwe dingen bezig te zijn en vooral de vertaalslag te maken van idee naar een concreet resultaat. Mijn kracht ligt in een positief kritische, ondernemende en enthousiasmerende houding. Ik wil inspireren en geïnspireerd raken.',
    linkedin: 'https://www.linkedin.com/in/florian-de-haan-39780b13/',
    image: '/images/team/florian.jpg'
  },
  {
    name: 'Nam-Hoon Boots',
    role: 'Technical Lead',
    description: 'Als Technical Lead zorg ik ervoor dat onze technische oplossingen perfect aansluiten bij de behoeften van onze klanten. Met mijn expertise in moderne IT-infrastructuur help ik bedrijven groeien door slimme technologie.',
    linkedin: 'https://www.linkedin.com/in/nam-hoon-boots-4b1194139/',
    image: '/images/team/nam.jpg'
  },
  {
    name: 'Mas',
    role: 'System Engineer',
    description: 'Als System Engineer ben ik verantwoordelijk voor het ontwerpen, implementeren en onderhouden van complexe IT-systemen. Ik zorg ervoor dat alle systemen optimaal functioneren en help klanten met technische vraagstukken.',
    linkedin: null,
    image: '/images/team/mas.jpg'
  },
  {
    name: 'Marcello Macnack',
    role: 'Junior Infrastructure Engineer',
    description: 'Als Junior Infrastructure Engineer ondersteun ik het team bij het beheren en optimaliseren van IT-infrastructuren. Ik ben gedreven om te leren en bij te dragen aan innovatieve oplossingen voor onze klanten.',
    linkedin: 'https://www.linkedin.com/in/marcello-macnack-455789291/',
    image: '/images/team/marcello.jpg'
  }
]

export default function TeamSection() {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto container-padding">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6"
          >
            Ontmoet het <span className="text-gradient">Workflo Team</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-gray-600"
          >
            Gedreven IT-professionals die jouw bedrijf helpen groeien met slimme technologie en persoonlijke aandacht.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow"
            >
              <div className="aspect-square bg-gradient-to-br from-primary-100 to-primary-200 relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-32 h-32 bg-primary-300 rounded-full flex items-center justify-center">
                    <span className="text-4xl font-bold text-white">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-1">{member.name}</h3>
                <p className="text-primary-600 font-medium text-sm mb-4">{member.role}</p>
                <p className="text-gray-600 text-sm mb-4 line-clamp-4">{member.description}</p>
                
                {member.linkedin && (
                  <Link
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-primary-600 hover:text-primary-700 transition-colors"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                    </svg>
                    <span className="text-sm font-medium">LinkedIn</span>
                  </Link>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="bg-primary-50 rounded-2xl p-8 max-w-3xl mx-auto">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              Word onderdeel van ons team!
            </h3>
            <p className="text-gray-600 mb-6">
              Ben jij een gedreven IT-professional die impact wil maken? We zijn altijd op zoek naar talent dat ons team kan versterken.
            </p>
            <Link
              href="/careers"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary-500 text-white rounded-lg hover:bg-primary-600 transition-colors font-medium"
            >
              Bekijk vacatures
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}