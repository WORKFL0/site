'use client'

import { motion } from 'framer-motion'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import Button from '@/components/ui/Button'
import { 
  ShieldCheckIcon, 
  CloudIcon, 
  ServerIcon, 
  ChartBarIcon,
  CheckCircleIcon,
  ArrowRightIcon,
  BoltIcon,
  CurrencyEuroIcon,
  ClockIcon
} from '@heroicons/react/24/outline'

const outcomes = [
  {
    icon: CurrencyEuroIcon,
    value: '35%',
    label: 'Kostenbesparing',
    description: 'Gemiddelde besparing op IT-kosten'
  },
  {
    icon: BoltIcon,
    value: '95%',
    label: 'Minder downtime',
    description: 'Verhoogde productiviteit'
  },
  {
    icon: ClockIcon,
    value: '15 min',
    label: 'Responstijd',
    description: '24/7 support voor Amsterdam'
  }
]

const services = [
  {
    title: 'Cloudtransformatie',
    tagline: 'Van kostencenter naar groeiversneller',
    description: 'Transformeer je IT van een kostenpost naar een motor voor groei. Schaalbaar, veilig en altijd beschikbaar.',
    outcomes: [
      'Bespaar tot €50.000 per jaar op hardware',
      'Werk 40% efficiënter samen',
      'Schaal moeiteloos op bij groei'
    ],
    icon: CloudIcon,
    caseStudy: 'Amsterdams architectenbureau bespaarde €45.000 en verhoogde productiviteit met 35%',
    href: '/contact?service=cloud'
  },
  {
    title: 'Cybersecurity Excellence',
    tagline: 'Slaap rustig, wij waken',
    description: 'Bescherm je bedrijf tegen de groeiende dreiging van cybercrime. Proactief, slim en altijd een stap voor.',
    outcomes: [
      '99,9% bescherming tegen ransomware',
      'ISO 27001 compliant binnen 3 maanden',
      'Verminder security incidenten met 90%'
    ],
    icon: ShieldCheckIcon,
    caseStudy: 'Financieel adviesbureau Zuidas: van DNB-waarschuwing naar volledig compliant',
    href: '/contact?service=security'
  },
  {
    title: 'Managed IT Partnership',
    tagline: 'Jouw externe IT-afdeling',
    description: 'Complete IT-ondersteuning voor een voorspelbaar maandbedrag. Focus op groei, wij regelen de rest.',
    outcomes: [
      'Vaste kosten, geen verrassingen',
      '24/7 monitoring en onderhoud',
      'Strategisch IT-advies inclusief'
    ],
    icon: ServerIcon,
    caseStudy: 'Scale-up in Amsterdam Noord groeit 300% zonder IT-zorgen',
    href: '/contact?service=managed'
  },
  {
    title: 'Strategisch IT-Advies',
    tagline: 'Van firefighting naar futureproofing',
    description: 'Onafhankelijk advies om je IT-landschap te optimaliseren. Praktisch, meetbaar en direct implementeerbaar.',
    outcomes: [
      'ROI binnen 6 maanden gegarandeerd',
      'Vendor-onafhankelijk advies',
      'Concrete roadmap voor 3 jaar'
    ],
    icon: ChartBarIcon,
    caseStudy: 'Retailketen bespaart €120.000 per jaar na IT-assessment',
    href: '/contact?service=consulting'
  }
]

export default function DienstenPage() {
  return (
    <>
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-br from-primary-50 to-white overflow-hidden">
          <div className="absolute inset-0 bg-grid-gray-100 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] opacity-5"></div>
          
          <div className="container mx-auto px-4 relative z-10">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl mx-auto text-center"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-medium mb-6">
                <CheckCircleIcon className="w-4 h-4" />
                Amsterdam's Most Trusted IT Growth Partner
              </div>
              
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                Your IT Should <span className="text-gradient">Drive Growth</span>,<br />Not Hold You Back
              </h1>
              <p className="text-xl lg:text-2xl text-gray-600 mb-12">
                We help Amsterdam businesses reduce IT costs by 35% while increasing productivity through smart solutions
              </p>
              
              {/* Key Outcomes */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
                {outcomes.map((outcome, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 + index * 0.1 }}
                    className="bg-white p-6 rounded-xl shadow-sm border border-gray-100"
                  >
                    <outcome.icon className="w-8 h-8 text-primary-600 mx-auto mb-3" />
                    <div className="text-3xl font-bold text-gray-900 mb-1">{outcome.value}</div>
                    <div className="text-sm font-medium text-gray-900 mb-1">{outcome.label}</div>
                    <div className="text-xs text-gray-600">{outcome.description}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                Solutions That Deliver Results
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Not just IT services, but strategic partnerships that transform your business
              </p>
            </motion.div>

            <div className="space-y-8">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-gray-50 rounded-2xl p-8 lg:p-12 hover:shadow-xl transition-all duration-300"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                    <div>
                      <div className="flex items-center gap-4 mb-4">
                        <div className="p-3 bg-primary-100 rounded-xl">
                          <service.icon className="w-8 h-8 text-primary-600" />
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold text-gray-900">{service.title}</h3>
                          <p className="text-primary-600 font-medium">{service.tagline}</p>
                        </div>
                      </div>
                      
                      <p className="text-gray-600 mb-6">
                        {service.description}
                      </p>
                      
                      <ul className="space-y-3 mb-6">
                        {service.outcomes.map((outcome, idx) => (
                          <li key={idx} className="flex items-start gap-3">
                            <CheckCircleIcon className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                            <span className="text-gray-700">{outcome}</span>
                          </li>
                        ))}
                      </ul>
                      
                      <Button href={service.href} className="group">
                        Get Started
                        <ArrowRightIcon className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </div>
                    
                    <div className="bg-white p-6 rounded-xl border border-gray-200">
                      <div className="flex items-center gap-2 text-green-600 mb-3">
                        <CheckCircleIcon className="w-5 h-5" />
                        <span className="font-semibold">Success Story</span>
                      </div>
                      <p className="text-gray-700 italic">
                        "{service.caseStudy}"
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-br from-primary-600 to-primary-700 text-white">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl mx-auto"
            >
              <h2 className="text-3xl lg:text-4xl font-bold mb-4">
                Ready to Transform Your IT from Cost to Growth Engine?
              </h2>
              <p className="text-xl mb-8 text-primary-100">
                Join 100+ Amsterdam businesses that trust Workflo for their IT success
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button href="/tevredenheidscheck" size="lg" variant="secondary">
                  Start Free IT Assessment
                </Button>
                <Button href="tel:0203080465" size="lg" variant="outline" className="!text-white !border-white hover:!bg-white hover:!text-primary-600">
                  Call Now: 020-30 80 465
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