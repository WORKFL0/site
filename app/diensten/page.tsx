'use client'

import { motion } from 'framer-motion'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import Button from '@/components/ui/Button'
import { useState } from 'react'
import { 
  BuildingOfficeIcon,
  ShoppingCartIcon,
  AcademicCapIcon,
  HeartIcon,
  BanknotesIcon,
  TruckIcon,
  ChevronDownIcon,
  ExclamationCircleIcon,
  CheckCircleIcon
} from '@heroicons/react/24/outline'

const industries = [
  {
    id: 'retail',
    industry: 'Retail & E-commerce',
    mainProblem: 'Kassa valt uit tijdens Black Friday?',
    subProblems: [
      'Webshop ligt plat bij drukte',
      'Voorraadsysteem niet real-time',
      'Payment provider storingen'
    ],
    emotion: 'Nooit meer omzet missen door IT-problemen',
    solution: 'Schaalbare cloud-oplossingen die meegroeien met piekmomenten. Van kassasystemen tot webshop hosting.',
    caseStudy: {
      client: 'Amsterdamse Fashion Retailer',
      problem: 'Webshop crashte bij elke sale',
      result: '300% meer capaciteit, 0 downtime tijdens Black Friday'
    },
    icon: ShoppingCartIcon,
    color: 'purple',
    techStack: 'Shopify Plus integratie, Azure auto-scaling, Mollie payment gateway, real-time inventory sync'
  },
  {
    id: 'office',
    industry: 'Kantoren & Zakelijke diensten',
    mainProblem: 'Team kan niet inloggen op maandagochtend?',
    subProblems: [
      'VPN werkt niet thuis',
      'Bestanden niet toegankelijk',
      'Video-calls haperen constant'
    ],
    emotion: 'Productief werken, op kantoor én thuis',
    solution: 'Modern workplace oplossingen met Microsoft 365 en veilige remote access voor hybride werken.',
    caseStudy: {
      client: 'Advocatenkantoor Zuid-As',
      problem: 'Dossiers niet veilig toegankelijk thuis',
      result: 'Veilige cloud-oplossing, 50% efficiënter werken'
    },
    icon: BuildingOfficeIcon,
    color: 'blue',
    techStack: 'Microsoft 365 E5, Azure Virtual Desktop, Conditional Access, Teams Phone System'
  },
  {
    id: 'healthcare',
    industry: 'Zorg & Welzijn',
    mainProblem: 'Patiëntgegevens onbereikbaar tijdens nood?',
    subProblems: [
      'EPD systeem traag',
      'GDPR compliance zorgen',
      'Apparatuur niet verbonden'
    ],
    emotion: 'Focus op zorg, niet op zorgen over IT',
    solution: 'GDPR-compliant IT met 24/7 beschikbaarheid. Speciaal voor zorginstellingen.',
    caseStudy: {
      client: 'Huisartsenpraktijk Amsterdam Noord',
      problem: 'EPD onbereikbaar tijdens weekend-dienst',
      result: '99,9% uptime, NEN 7510 gecertificeerd'
    },
    icon: HeartIcon,
    color: 'red',
    techStack: 'NEN 7510 compliant hosting, encrypted backups, GDPR tools, medical device integration'
  },
  {
    id: 'financial',
    industry: 'Financiële dienstverlening',
    mainProblem: 'Gevoelige data gelekt? AFM boete?',
    subProblems: [
      'Niet DNB compliant',
      'Transacties vertraagd',
      'Audit trail ontbreekt'
    ],
    emotion: 'Voldoe aan alle regels zonder hoofdpijn',
    solution: 'Compliance-first IT infrastructuur voor financials. DNB/AFM proof.',
    caseStudy: {
      client: 'Vermogensbeheerder Zuidas',
      problem: 'DNB audit dreigde te falen',
      result: 'Volledig compliant binnen 3 maanden'
    },
    icon: BanknotesIcon,
    color: 'green',
    techStack: 'DNB compliant infrastructure, audit logging, encryption at rest, MFA everywhere'
  },
  {
    id: 'education',
    industry: 'Onderwijs & Training',
    mainProblem: 'Online les valt uit tijdens tentamen?',
    subProblems: [
      'Studenten kunnen niet inloggen',
      'Lesmateriaal niet beschikbaar',
      'Digitaal toetsen faalt'
    ],
    emotion: 'Onderwijs gaat altijd door, ook digitaal',
    solution: 'Betrouwbare onderwijsplatforms met gegarandeerde beschikbaarheid tijdens piekmomenten.',
    caseStudy: {
      client: 'HBO instelling Amsterdam',
      problem: 'Platform crashte bij tentamens',
      result: '5000 gelijktijdige gebruikers, geen problemen'
    },
    icon: AcademicCapIcon,
    color: 'indigo',
    techStack: 'Canvas LMS hosting, Zoom education license, exam proctoring, SSO integration'
  },
  {
    id: 'logistics',
    industry: 'Logistiek & Transport',
    mainProblem: 'Track & trace offline? Klanten boos?',
    subProblems: [
      'WMS systeem hapert',
      'Chauffeurs apps werken niet',
      'Real-time tracking faalt'
    ],
    emotion: 'Leveringen altijd op tijd dankzij stabiele IT',
    solution: 'Robuuste logistieke IT-systemen met real-time tracking en 100% uptime garantie.',
    caseStudy: {
      client: 'Last-mile delivery Amsterdam',
      problem: 'Tracking app viel 3x per week uit',
      result: 'Zero downtime in 6 maanden'
    },
    icon: TruckIcon,
    color: 'amber',
    techStack: 'API gateway for tracking, mobile device management, WMS integration, IoT sensors'
  }
]

export default function DienstenPage() {
  const [expandedIndustry, setExpandedIndustry] = useState<string | null>(null)

  return (
    <>
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
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
                IT-problemen? Wij kennen jouw branche
              </h1>
              <p className="text-xl lg:text-2xl text-gray-600 mb-8">
                Van retail-pieken tot zorg-compliance. Specifieke oplossingen voor jouw sector.
              </p>
              
              {/* Stats */}
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="flex flex-wrap gap-6 justify-center"
              >
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary-600">15+</div>
                  <div className="text-sm text-gray-600">Jaar ervaring</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary-600">6</div>
                  <div className="text-sm text-gray-600">Specialisaties</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary-600">100%</div>
                  <div class="text-sm text-gray-600">Branche-kennis</div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Industries Grid */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {industries.map((industry, index) => (
                <motion.div
                  key={industry.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="relative"
                >
                  <div className={`p-8 rounded-2xl border-2 border-gray-100 hover:border-${industry.color}-200 transition-all duration-300 hover:shadow-xl`}>
                    {/* Industry Header */}
                    <div className="flex items-start gap-4 mb-6">
                      <div className={`p-3 bg-${industry.color}-100 rounded-xl`}>
                        <industry.icon className={`w-8 h-8 text-${industry.color}-600`} />
                      </div>
                      <div className="flex-1">
                        <h2 className="text-2xl font-bold text-gray-900 mb-2">
                          {industry.industry}
                        </h2>
                        <h3 className="text-lg font-semibold text-red-600">
                          {industry.mainProblem}
                        </h3>
                      </div>
                    </div>

                    {/* Common Problems */}
                    <div className="mb-6">
                      <p className="text-sm text-gray-500 mb-2">Ook last van:</p>
                      <ul className="space-y-1">
                        {industry.subProblems.map((problem, idx) => (
                          <li key={idx} className="flex items-center gap-2 text-sm text-gray-700">
                            <ExclamationCircleIcon className="w-4 h-4 text-amber-500" />
                            {problem}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Solution */}
                    <div className="mb-6">
                      <p className="text-lg font-medium text-gray-900 mb-2 italic">
                        {`"${industry.emotion}"`}
                      </p>
                      <p className="text-gray-600">
                        {industry.solution}
                      </p>
                    </div>

                    {/* Case Study */}
                    <div className="mb-6 p-4 bg-gray-50 rounded-lg">
                      <div className="flex items-center gap-2 mb-2">
                        <CheckCircleIcon className="w-5 h-5 text-green-500" />
                        <span className="font-semibold text-gray-900">Praktijkvoorbeeld</span>
                      </div>
                      <p className="text-sm text-gray-700 mb-1">
                        <span className="font-medium">{industry.caseStudy.client}:</span> {industry.caseStudy.problem}
                      </p>
                      <p className="text-sm text-green-600 font-medium">
                        Resultaat: {industry.caseStudy.result}
                      </p>
                    </div>

                    {/* Tech Stack Accordion */}
                    <div className="mb-6">
                      <button
                        onClick={() => setExpandedIndustry(expandedIndustry === industry.id ? null : industry.id)}
                        className="flex items-center gap-2 text-sm text-gray-500 hover:text-gray-700 transition-colors"
                      >
                        <ChevronDownIcon className={`w-4 h-4 transition-transform ${expandedIndustry === industry.id ? 'rotate-180' : ''}`} />
                        Technische specificaties
                      </button>
                      {expandedIndustry === industry.id && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          className="mt-3 p-4 bg-gray-50 rounded-lg text-sm text-gray-600"
                        >
                          {industry.techStack}
                        </motion.div>
                      )}
                    </div>

                    {/* CTA */}
                    <Button 
                      href={`/contact?industry=${industry.id}`}
                      className={`w-full bg-${industry.color}-600 hover:bg-${industry.color}-700`}
                    >
                      Bespreek {industry.industry} oplossing
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
                Jouw branche er niet bij?
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Geen probleem! We hebben voor elke sector een oplossing.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button href="/tevredenheidscheck" size="lg">
                  Doe de Branche IT-Scan
                </Button>
                <Button href="tel:0203080465" variant="outline" size="lg">
                  Bel voor Sectoradvies
                </Button>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}