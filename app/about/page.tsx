'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Button from '@/components/ui/Button'
import Image from 'next/image'

const teamMembers = [
  {
    name: 'Florian de Haan',
    role: 'CEO & Founder',
    description: 'Met meer dan 11 jaar ervaring in de MSP-wereld, leidt Florian Workflo met passie voor technologie die écht werkt.',
    image: '/images/team/florian.jpg',
  },
]

const milestones = [
  { year: '2014', title: 'Opgericht', description: 'Workflo wordt geboren uit de visie om IT simpel te maken voor Amsterdamse bedrijven.' },
  { year: '2018', title: '50+ Klanten', description: 'We bereiken onze eerste mijlpaal van 50 tevreden klanten.' },
  { year: '2021', title: 'Cybersecurity Certificering', description: 'We worden gecertificeerd in informatieveiligheid om onze klanten beter te beschermen.' },
  { year: '2024', title: '100+ Klanten', description: 'We vieren 10 jaar Workflo met meer dan 100 actieve klanten.' },
  { year: '2025', title: 'Groei & Innovatie', description: 'Uitbreiding van ons team en lancering van AI-gedreven MSP services.' },
]

const values = [
  {
    icon: '🚀',
    title: 'Innovatie',
    description: 'We blijven voorop lopen met de nieuwste technologie om onze klanten het beste te bieden.',
  },
  {
    icon: '🤝',
    title: 'Partnerschap',
    description: 'We zijn niet zomaar een leverancier, maar een echte partner in jouw groei.',
  },
  {
    icon: '⚡',
    title: 'Snelheid',
    description: 'Gemiddelde reactietijd van 15 minuten omdat we weten dat elke minuut telt.',
  },
  {
    icon: '🛡️',
    title: 'Betrouwbaarheid',
    description: '99.9% uptime garantie en 24/7 monitoring voor jouw gemoedsrust.',
  },
]

export default function AboutPage() {
  const [heroRef, heroInView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const [storyRef, storyInView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const [valuesRef, valuesInView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const [milestonesRef, milestonesInView] = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center bg-gradient-to-br from-primary-50 to-white overflow-hidden">
        <div className="absolute inset-0 bg-grid-gray-100 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
        
        <div className="container mx-auto container-padding relative z-10">
          <motion.div
            ref={heroRef}
            initial={{ opacity: 0, y: 20 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="max-w-4xl"
          >
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Lokale Wortels, <span className="text-gradient">Wereldwijde Standaarden</span>
            </h1>
            <p className="text-xl lg:text-2xl text-gray-600 mb-8">
              Sinds 2014 helpen we Amsterdamse bedrijven groeien met IT die gewoon werkt. 
              Geen gedoe, geen verrassingen, gewoon betrouwbare technologie die jou vooruit helpt.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button href="/contact" size="lg">
                Ontmoet het Team
              </Button>
              <Button href="/services" variant="outline" size="lg">
                Onze Diensten
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="section-padding">
        <div className="container mx-auto container-padding">
          <motion.div
            ref={storyRef}
            initial={{ opacity: 0, y: 20 }}
            animate={storyInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-8 text-center">
              Ons Verhaal
            </h2>
            
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-600 mb-6">
                Workflo werd in 2014 opgericht door Florian de Haan vanuit een simpele maar krachtige visie: 
                IT moet bedrijven helpen groeien, niet tegenhouden. Als ondernemer in Amsterdam zag Florian 
                hoe veel mkb-bedrijven worstelden met technologie die niet werkte zoals beloofd.
              </p>
              
              <p className="text-gray-600 mb-6">
                Wat begon als een één-mans missie is uitgegroeid tot een team van 4 FTE professionals 
                die dagelijks meer dan 100 Amsterdamse bedrijven ondersteunen. Van startups in Noord 
                tot gevestigde bedrijven op de Zuidas - we kennen de unieke uitdagingen van elk district 
                en elke sector.
              </p>
              
              <p className="text-gray-600">
                Vandaag de dag zijn we niet de grootste MSP, maar wel de meest betrokken. We geloven in 
                persoonlijke service, snelle reactietijden en IT-oplossingen die écht werken. Omdat we 
                weten dat achter elke IT-vraag een ondernemer zit die wil groeien.
              </p>
            </div>

            {/* Company Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12">
              {[
                { value: '11+', label: 'Jaar Ervaring' },
                { value: '100+', label: 'Tevreden Klanten' },
                { value: '15 min', label: 'Gem. Reactietijd' },
                { value: '99.9%', label: 'Uptime Garantie' },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={storyInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-4xl font-bold text-primary-500 mb-2">{stat.value}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="section-padding bg-gray-50">
        <div className="container mx-auto container-padding">
          <motion.div
            ref={valuesRef}
            initial={{ opacity: 0, y: 20 }}
            animate={valuesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4 text-center">
              Onze Waarden
            </h2>
            <p className="text-xl text-gray-600 mb-12 text-center max-w-3xl mx-auto">
              Deze principes sturen alles wat we doen bij Workflo
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={valuesInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow"
                >
                  <div className="text-5xl mb-4">{value.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="section-padding">
        <div className="container mx-auto container-padding">
          <motion.div
            ref={milestonesRef}
            initial={{ opacity: 0, y: 20 }}
            animate={milestonesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-12 text-center">
              Onze Reis
            </h2>
            
            <div className="max-w-4xl mx-auto">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  animate={milestonesInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`flex gap-8 mb-12 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
                >
                  <div className={`flex-1 ${index % 2 === 0 ? 'text-right' : 'text-left'}`}>
                    <h3 className="text-2xl font-bold text-primary-500 mb-2">{milestone.year}</h3>
                    <h4 className="text-xl font-semibold text-gray-900 mb-2">{milestone.title}</h4>
                    <p className="text-gray-600">{milestone.description}</p>
                  </div>
                  <div className="relative">
                    <div className="w-4 h-4 bg-primary-500 rounded-full"></div>
                    {index < milestones.length - 1 && (
                      <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-0.5 h-24 bg-gray-300"></div>
                    )}
                  </div>
                  <div className="flex-1"></div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section-padding bg-gray-50">
        <div className="container mx-auto container-padding">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4 text-center">
            Het Team
          </h2>
          <p className="text-xl text-gray-600 mb-12 text-center max-w-3xl mx-auto">
            Ontmoet de mensen achter Workflo die elke dag hard werken om jouw IT zorgeloos te maken
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="aspect-w-1 aspect-h-1 bg-gray-200">
                  {/* Placeholder for team member photo */}
                  <div className="w-full h-64 bg-gradient-to-br from-primary-400 to-primary-600 flex items-center justify-center">
                    <span className="text-6xl text-white">👨‍💼</span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
                  <p className="text-primary-500 font-medium mb-3">{member.role}</p>
                  <p className="text-gray-600">{member.description}</p>
                </div>
              </motion.div>
            ))}
            
            {/* Growing Team Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-gradient-to-br from-primary-500 to-primary-600 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow text-white"
            >
              <div className="h-full flex flex-col items-center justify-center p-8 text-center">
                <span className="text-6xl mb-4">🚀</span>
                <h3 className="text-2xl font-bold mb-3">We Groeien!</h3>
                <p className="mb-6">
                  We zijn op zoek naar getalenteerde professionals die ons team willen versterken.
                </p>
                <Button href="/careers" variant="secondary" className="bg-white text-primary-600 hover:bg-gray-100">
                  Bekijk Vacatures
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-primary-500 to-primary-600">
        <div className="container mx-auto container-padding text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Klaar om Samen te Groeien?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
            Ontdek hoe Workflo jouw bedrijf kan transformeren met IT die gewoon werkt. 
            Geen verplichtingen, alleen een goed gesprek over jouw mogelijkheden.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              href="/contact" 
              size="lg"
              className="bg-white text-primary-600 hover:bg-gray-100"
            >
              Start een Gesprek
            </Button>
            <Button 
              href="tel:0203080465" 
              variant="outline" 
              size="lg"
              className="border-white text-white hover:bg-white hover:text-primary-600"
            >
              Bel Direct: 020-30 80 465
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}