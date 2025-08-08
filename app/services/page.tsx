'use client'

import { motion } from 'framer-motion'
// import Header from '@/components/layout/Header' // REPLACED
import StaticHeader from '@/components/StaticHeader'
// import Footer from '@/components/layout/Footer' // REPLACED
import StaticFooter from '@/components/StaticFooter'
// import DangerTape from '@/components/DangerTape' // REPLACED
import StaticDangerTape from '@/components/StaticDangerTape'
import Button from '@/components/ui/Button'
import { useState } from 'react'
import { 
  ShieldCheckIcon, 
  CloudIcon, 
  ServerIcon, 
  ChartBarIcon,
  ChevronDownIcon,
  ExclamationTriangleIcon,
  CheckCircleIcon
} from '@heroicons/react/24/outline'

const services = [
  {
    id: 'cloud',
    problem: 'Server crasht weer? Data kwijt na stroomstoring?',
    emotion: 'Stop met zorgen over hardware die stuk gaat',
    solution: 'Cloud Services',
    description: 'Jouw bedrijf draait 24/7 veilig in de cloud. Geen gedoe met servers, automatische backups, en werken vanaf overal.',
    benefits: [
      '99,9% uptime garantie',
      'Automatische dagelijkse backups',
      'Werken vanaf elke locatie',
      'Geen investeringen in hardware'
    ],
    icon: CloudIcon,
    color: 'blue',
    techDetails: {
      title: 'Voor de tech-liefhebber',
      content: 'Microsoft Azure & AWS gecertificeerd, multi-region replication, automated disaster recovery, end-to-end encryption.'
    },
    cta: 'Los mijn server-problemen op',
    href: '/services/cloud'
  },
  {
    id: 'security',
    problem: 'Bang voor hackers? Wachtwoorden gelekt?',
    emotion: 'Slaap rustig, wij bewaken je digitale deur',
    solution: 'Cybersecurity',
    description: 'Complete bescherming tegen cybercriminelen. Van firewall tot training voor je team - alles om je data veilig te houden.',
    benefits: [
      '24/7 security monitoring',
      'Ransomware bescherming',
      'Security awareness training',
      'Maandelijkse security rapporten'
    ],
    icon: ShieldCheckIcon,
    color: 'green',
    techDetails: {
      title: 'Voor de tech-liefhebber',
      content: 'Sophos XGS firewall, EDR oplossingen, SIEM monitoring, ISO 27001 compliant, penetration testing.'
    },
    cta: 'Beveilig mijn bedrijf nu',
    href: '/services/security'
  },
  {
    id: 'managed-it',
    problem: 'Weer een IT-probleem? Team kan niet werken?',
    emotion: 'Focus op je business, wij regelen de IT',
    solution: 'Managed IT Services',
    description: 'Complete IT-ondersteuning voor een vast bedrag per maand. Van helpdesk tot preventief onderhoud - alles inbegrepen.',
    benefits: [
      'Helpdesk binnen 15 minuten',
      'Preventief onderhoud',
      'Onbeperkte support',
      'Vaste maandelijkse kosten'
    ],
    icon: ServerIcon,
    color: 'purple',
    techDetails: {
      title: 'Voor de tech-liefhebber',
      content: 'RMM tools, automated patching, network monitoring, Active Directory management, PowerShell automation.'
    },
    cta: 'Start met zorgeloos werken',
    href: '/services/managed-it'
  },
  {
    id: 'consulting',
    problem: 'IT-kosten uit de hand? Systemen werken niet samen?',
    emotion: 'Krijg grip op je IT met slimme oplossingen',
    solution: 'IT Consultancy',
    description: 'Onafhankelijk advies om je IT efficiënter en goedkoper te maken. We analyseren, adviseren en implementeren.',
    benefits: [
      'Kostenbesparing tot 35%',
      'Vendor-onafhankelijk advies',
      'Implementatie begeleiding',
      'ROI binnen 6 maanden'
    ],
    icon: ChartBarIcon,
    color: 'amber',
    techDetails: {
      title: 'Voor de tech-liefhebber',
      content: 'IT assessments, TCO analyses, architecture design, vendor management, ITIL best practices.'
    },
    cta: 'Vraag gratis IT-scan aan',
    href: '/services/consulting'
  }
]

const problemExamples = [
  { problem: 'Wifi valt steeds uit', solution: 'Cisco Meraki oplossing binnen 24 uur' },
  { problem: 'Microsoft licenties te duur', solution: 'Besparing van €12.000 per jaar' },
  { problem: 'Hack-poging afgeweerd', solution: '16 miljard wachtwoorden geblokkeerd' }
]

export default function ServicesPage() {
  const [expandedTech, setExpandedTech] = useState<string | null>(null)

  return (
    <>
      <StaticDangerTape />
      <StaticHeader />
      <main className="pt-20">
        {/* Hero Section - Problem First */}
        <section className="relative py-20 bg-gradient-to-br from-gray-50 to-gray-100 overflow-hidden">
          <div className="absolute inset-0 bg-grid-gray-100 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
          
          <div className="container mx-auto px-4 relative z-10">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl mx-auto text-center"
            >
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                Even ademhalen – wij fixen je IT-stress
              </h1>
              <p className="text-xl lg:text-2xl text-gray-600 mb-8">
                Van crashes tot hackers, van trage wifi tot hoge kosten. 
                Kies je probleem, wij hebben de oplossing.
              </p>
              
              {/* Trust Indicators */}
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="flex flex-wrap gap-6 justify-center text-sm text-gray-600"
              >
                <span className="flex items-center gap-2">
                  <CheckCircleIcon className="w-5 h-5 text-green-500" />
                  99,9% uptime garantie
                </span>
                <span className="flex items-center gap-2">
                  <CheckCircleIcon className="w-5 h-5 text-green-500" />
                  Gemiddelde reactietijd: 15 minuten
                </span>
                <span className="flex items-center gap-2">
                  <CheckCircleIcon className="w-5 h-5 text-green-500" />
                  100+ Amsterdamse bedrijven
                </span>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Quick Problem Examples */}
        <section className="py-8 bg-white border-b">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap gap-4 justify-center">
              {problemExamples.map((example, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="flex items-center gap-3 px-4 py-2 bg-gray-50 rounded-full"
                >
                  <ExclamationTriangleIcon className="w-5 h-5 text-amber-500" />
                  <span className="text-sm text-gray-700">{example.problem}</span>
                  <span className="text-sm text-gray-500">→</span>
                  <span className="text-sm font-medium text-primary-600">{example.solution}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Grid - Problem-Solution Format */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {services.map((service, index) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="relative"
                >
                  <div className={`p-8 rounded-2xl border-2 border-gray-100 hover:border-${service.color}-200 transition-all duration-300 hover:shadow-xl`}>
                    {/* Problem Statement */}
                    <div className="mb-6">
                      <h3 className="text-xl font-bold text-red-600 mb-2">
                        {service.problem}
                      </h3>
                      <p className="text-lg text-gray-700 italic">
                        {`"${service.emotion}"`}
                      </p>
                    </div>

                    {/* Solution */}
                    <div className="flex items-start gap-4 mb-6">
                      <div className={`p-3 bg-${service.color}-100 rounded-xl`}>
                        <service.icon className={`w-8 h-8 text-${service.color}-600`} />
                      </div>
                      <div>
                        <h2 className="text-2xl font-bold text-gray-900 mb-2">
                          {service.solution}
                        </h2>
                        <p className="text-gray-600">
                          {service.description}
                        </p>
                      </div>
                    </div>

                    {/* Benefits */}
                    <ul className="space-y-2 mb-6">
                      {service.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-gray-700">
                          <CheckCircleIcon className="w-5 h-5 text-green-500 flex-shrink-0" />
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Tech Details Accordion */}
                    <div className="mb-6">
                      <button
                        onClick={() => setExpandedTech(expandedTech === service.id ? null : service.id)}
                        className="flex items-center gap-2 text-sm text-gray-500 hover:text-gray-700 transition-colors"
                      >
                        <ChevronDownIcon className={`w-4 h-4 transition-transform ${expandedTech === service.id ? 'rotate-180' : ''}`} />
                        {service.techDetails.title}
                      </button>
                      {expandedTech === service.id && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          className="mt-3 p-4 bg-gray-50 rounded-lg text-sm text-gray-600"
                        >
                          {service.techDetails.content}
                        </motion.div>
                      )}
                    </div>

                    {/* CTA */}
                    <Button 
                      href={service.href}
                      className={`w-full bg-${service.color}-600 hover:bg-${service.color}-700`}
                    >
                      {service.cta}
                    </Button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="py-20 bg-primary-50">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Niet zeker welke oplossing je nodig hebt?
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Doe de gratis IT-scan en krijg binnen 30 minuten een persoonlijk advies
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button href="/tevredenheidscheck" size="lg">
                  Start Gratis IT-Scan
                </Button>
                <Button href="/contact" variant="outline" size="lg">
                  Bel Direct: 020-30 80 465
                </Button>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <StaticFooter />
      <StaticDangerTape />
    </>
  )
}