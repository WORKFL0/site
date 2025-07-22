'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Button from '@/components/ui/Button'
import Image from 'next/image'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import { useState } from 'react'
import { ChevronDownIcon, CheckCircleIcon, ExclamationCircleIcon } from '@heroicons/react/24/outline'

const teamMembers = [
  {
    name: 'Florian de Haan',
    role: 'CEO & Founder',
    description: 'Met meer dan 11 jaar ervaring in de MSP-wereld, leidt Florian Workflo met passie voor technologie die écht werkt.',
    expertise: 'Microsoft 365, Cybersecurity, Business Strategy',
    linkedIn: 'https://linkedin.com/in/floriandehaan',
  },
]

// Problem-first milestones
const milestones = [
  { 
    year: '2014', 
    problem: 'Ondernemers verloren uren aan IT-problemen',
    solution: 'Workflo opgericht om IT simpel te maken',
    result: 'Eerste 10 klanten binnen 3 maanden'
  },
  { 
    year: '2018', 
    problem: 'Bedrijven werden gehackt door gebrek aan security',
    solution: 'Security-first aanpak geïntroduceerd',
    result: '0 security incidenten bij onze klanten'
  },
  { 
    year: '2021', 
    problem: 'Thuiswerken werd chaos door slechte IT',
    solution: 'Remote workplace oplossingen uitgerold',
    result: '100% klanten succesvol hybride werken'
  },
  { 
    year: '2024', 
    problem: 'IT-kosten rijzen de pan uit',
    solution: 'AI-tools voor kostenbesparing ingezet',
    result: 'Gemiddeld 35% besparing voor klanten'
  },
]

// Real client problems we've solved
const solvedProblems = [
  {
    problem: 'Advocatenkantoor kon 3 dagen niet werken door ransomware',
    solution: 'Complete security makeover + training',
    result: '2 jaar later: 0 incidenten, ISO 27001 gecertificeerd',
    techDetails: 'Sophos XGS firewall, EDR, security awareness training, backup strategie'
  },
  {
    problem: 'E-commerce site crashte bij elke sale',
    solution: 'Cloud migratie met auto-scaling',
    result: '300% meer capaciteit, 50% lagere kosten',
    techDetails: 'Azure App Service, CDN implementatie, load balancing, monitoring'
  },
  {
    problem: 'Zorginstelling faalde bijna GDPR audit',
    solution: 'Complete compliance overhaul',
    result: 'Audit gehaald met vlag en wimpel',
    techDetails: 'NEN 7510 implementatie, data classificatie, DLP policies'
  },
]

const values = [
  {
    icon: '🚨',
    problem: 'IT-problemen houden je wakker',
    value: 'Proactief',
    solution: 'Wij lossen problemen op voordat jij ze merkt',
  },
  {
    icon: '⏰',
    problem: 'Uren wachten op hulp',
    value: '15 Minuten',
    solution: 'Gemiddelde reactietijd - omdat wachten geld kost',
  },
  {
    icon: '🎯',
    problem: 'One-size-fits-all oplossingen',
    value: 'Maatwerk',
    solution: 'Elke klant krijgt een oplossing die écht past',
  },
  {
    icon: '💸',
    problem: 'Verborgen kosten en verrassingen',
    value: 'Transparant',
    solution: 'Vaste prijzen, geen gedoe, altijd duidelijk',
  },
]

// Blog articles as proof points
const proofPoints = [
  {
    title: 'Cisco Meraki Partner',
    excerpt: 'Officiële partner voor enterprise wifi-oplossingen',
    link: '/blog/cisco-meraki-partner'
  },
  {
    title: 'Microsoft Prijsstijgingen Omzeilen',
    excerpt: 'Hoe we klanten €12.000/jaar besparen',
    link: '/blog/microsoft-savings'
  },
  {
    title: '16 Miljard Wachtwoorden Beschermd',
    excerpt: 'Onze security aanpak in de praktijk',
    link: '/blog/password-protection'
  },
]

export default function AboutPage() {
  const [heroRef, heroInView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const [storyRef, storyInView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const [valuesRef, valuesInView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const [problemsRef, problemsInView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const [expandedProblem, setExpandedProblem] = useState<number | null>(null)

  return (
    <>
      <Header />
      <main className="pt-20">
        {/* Hero Section - Problem First */}
        <section className="relative min-h-[60vh] flex items-center bg-gradient-to-br from-gray-50 to-gray-100 overflow-hidden">
          <div className="absolute inset-0 bg-grid-gray-100 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
          
          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              ref={heroRef}
              initial={{ opacity: 0, y: 20 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="max-w-4xl"
            >
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                "Mijn IT-partner begrijpt me niet"
              </h1>
              <p className="text-xl lg:text-2xl text-gray-600 mb-8">
                Dat horen we vaak. Daarom doen wij het anders. Workflo begrijpt ondernemers 
                omdat we zelf ondernemers zijn. Sinds 2014 maken we IT menselijk voor 100+ 
                Amsterdamse bedrijven.
              </p>
              <div className="flex flex-wrap gap-4 mb-8">
                <span className="inline-flex items-center gap-2 bg-green-100 text-green-800 px-4 py-2 rounded-full">
                  <CheckCircleIcon className="w-5 h-5" />
                  11+ jaar ervaring
                </span>
                <span className="inline-flex items-center gap-2 bg-green-100 text-green-800 px-4 py-2 rounded-full">
                  <CheckCircleIcon className="w-5 h-5" />
                  100+ tevreden klanten
                </span>
                <span className="inline-flex items-center gap-2 bg-green-100 text-green-800 px-4 py-2 rounded-full">
                  <CheckCircleIcon className="w-5 h-5" />
                  Lokaal & persoonlijk
                </span>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button href="#onze-aanpak" size="lg">
                  Ontdek Onze Aanpak
                </Button>
                <Button href="/contact" variant="outline" size="lg">
                  Direct Contact
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Problems We've Solved */}
        <section className="py-20 bg-white" id="onze-aanpak">
          <div className="container mx-auto px-4">
            <motion.div
              ref={problemsRef}
              initial={{ opacity: 0, y: 20 }}
              animate={problemsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4 text-center">
                Dit lossen we dagelijks op
              </h2>
              <p className="text-xl text-gray-600 mb-12 text-center max-w-3xl mx-auto">
                Echte problemen van echte klanten - en hoe we ze hebben opgelost
              </p>
              
              <div className="space-y-6">
                {solvedProblems.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={problemsInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-gray-50 rounded-2xl p-6 hover:shadow-lg transition-all"
                  >
                    <div className="grid md:grid-cols-3 gap-6">
                      <div>
                        <div className="flex items-start gap-3 mb-3">
                          <ExclamationCircleIcon className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" />
                          <div>
                            <h3 className="font-semibold text-red-600 mb-1">Het probleem</h3>
                            <p className="text-gray-700">{item.problem}</p>
                          </div>
                        </div>
                      </div>
                      
                      <div>
                        <h3 className="font-semibold text-primary-600 mb-1">Onze oplossing</h3>
                        <p className="text-gray-700">{item.solution}</p>
                      </div>
                      
                      <div>
                        <div className="flex items-start gap-3">
                          <CheckCircleIcon className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                          <div>
                            <h3 className="font-semibold text-green-600 mb-1">Het resultaat</h3>
                            <p className="text-gray-700">{item.result}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Tech details accordion */}
                    <button
                      onClick={() => setExpandedProblem(expandedProblem === index ? null : index)}
                      className="flex items-center gap-2 text-sm text-gray-500 hover:text-gray-700 mt-4 transition-colors"
                    >
                      <ChevronDownIcon className={`w-4 h-4 transition-transform ${expandedProblem === index ? 'rotate-180' : ''}`} />
                      Voor de tech-liefhebber
                    </button>
                    {expandedProblem === index && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        className="mt-3 p-4 bg-white rounded-lg text-sm text-gray-600"
                      >
                        {item.techDetails}
                      </motion.div>
                    )}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Our Story - Problem Evolution */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div
              ref={storyRef}
              initial={{ opacity: 0, y: 20 }}
              animate={storyInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="max-w-4xl mx-auto"
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-12 text-center">
                Van probleem naar oplossing: onze reis
              </h2>
              
              <div className="space-y-8">
                {milestones.map((milestone, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                    animate={storyInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-white rounded-2xl p-6 shadow-lg"
                  >
                    <div className="flex items-start gap-6">
                      <div className="text-3xl font-bold text-primary-500 min-w-[100px]">
                        {milestone.year}
                      </div>
                      <div className="flex-1">
                        <p className="text-red-600 font-semibold mb-2">
                          <ExclamationCircleIcon className="w-5 h-5 inline mr-2" />
                          {milestone.problem}
                        </p>
                        <p className="text-gray-700 mb-2">
                          <span className="font-semibold">Onze actie:</span> {milestone.solution}
                        </p>
                        <p className="text-green-600 font-semibold">
                          <CheckCircleIcon className="w-5 h-5 inline mr-2" />
                          {milestone.result}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Our Values - Problem/Solution Format */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              ref={valuesRef}
              initial={{ opacity: 0, y: 20 }}
              animate={valuesInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4 text-center">
                Waarom bedrijven voor ons kiezen
              </h2>
              <p className="text-xl text-gray-600 mb-12 text-center max-w-3xl mx-auto">
                We begrijpen jouw frustraties - en hebben er een oplossing voor
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {values.map((value, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={valuesInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="text-center"
                  >
                    <div className="text-6xl mb-4">{value.icon}</div>
                    <p className="text-sm text-red-600 mb-2 font-medium">{value.problem}</p>
                    <h3 className="text-2xl font-bold text-primary-500 mb-3">{value.value}</h3>
                    <p className="text-gray-600">{value.solution}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Proof Points */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-12 text-center">
              Bewijs uit de praktijk
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              {proofPoints.map((point, index) => (
                <motion.a
                  key={index}
                  href={point.link}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all group"
                >
                  <h3 className="font-bold text-gray-900 mb-2 group-hover:text-primary-500 transition-colors">
                    {point.title}
                  </h3>
                  <p className="text-gray-600">{point.excerpt}</p>
                  <span className="text-primary-500 text-sm font-medium mt-3 inline-block group-hover:underline">
                    Lees meer →
                  </span>
                </motion.a>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4 text-center">
              Het gezicht achter Workflo
            </h2>
            <p className="text-xl text-gray-600 mb-12 text-center max-w-3xl mx-auto">
              Geen anonieme helpdesk, maar mensen die je kent en vertrouwt
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {teamMembers.map((member, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow border border-gray-100"
                >
                  <div className="aspect-w-1 aspect-h-1 bg-gradient-to-br from-primary-400 to-primary-600 h-64 flex items-center justify-center">
                    <span className="text-6xl text-white">👨‍💼</span>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
                    <p className="text-primary-500 font-medium mb-3">{member.role}</p>
                    <p className="text-gray-600 mb-4">{member.description}</p>
                    <p className="text-sm text-gray-500 mb-4">
                      <span className="font-medium">Expertise:</span> {member.expertise}
                    </p>
                    {member.linkedIn && (
                      <a 
                        href={member.linkedIn}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary-500 hover:text-primary-600 text-sm font-medium"
                      >
                        Connect op LinkedIn →
                      </a>
                    )}
                  </div>
                </motion.div>
              ))}
              
              {/* Team Members Coming Soon */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="bg-gray-50 rounded-2xl overflow-hidden border-2 border-dashed border-gray-300"
              >
                <div className="h-full flex flex-col items-center justify-center p-8 text-center">
                  <span className="text-6xl mb-4">🚀</span>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">We groeien!</h3>
                  <p className="text-gray-600 mb-6">
                    Met 4 FTE en groeiend, zoeken we nieuwe collega's die net zo gedreven zijn als wij.
                  </p>
                  <Button href="/contact" variant="outline">
                    Word onderdeel van het team
                  </Button>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-primary-500 to-primary-600">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              Stop met zorgen over IT
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
              Net als 100+ andere Amsterdamse bedrijven. Ontdek hoe wij IT-stress 
              veranderen in IT-succes. Geen verplichtingen, wel eerlijk advies.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                href="/tevredenheidscheck" 
                size="lg"
                className="bg-white text-primary-600 hover:bg-gray-100"
              >
                Test je huidige IT-partner
              </Button>
              <Button 
                href="tel:0203080465" 
                variant="outline" 
                size="lg"
                className="border-white text-white hover:bg-white hover:text-primary-600"
              >
                Bel Florian: 020-30 80 465
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}