import Link from 'next/link'
import { motion } from 'framer-motion'

export default function CaseStudiesPage() {
  const caseStudies = [
    {
      id: 'doctor-feelgood',
      company: 'Doctor Feelgood',
      industry: 'Media & Marketing',
      title: 'Van IT-chaos naar gestroomlijnde operaties',
      challenge: 'Constante IT-problemen die de creativiteit belemmerden',
      solution: 'Complete IT-infrastructuur overhaul met cloud-first aanpak',
      results: [
        '70% minder IT-incidenten',
        '50% snellere projectlevering',
        '24/7 uptime voor kritieke systemen'
      ],
      quote: 'Every business needs Workflo. They are the IT Masters.',
      author: 'Esther van der Plas',
      role: 'Managing Director'
    },
    {
      id: 'havas-media',
      company: 'Havas Media',
      industry: 'Marketing & Reclame',
      title: 'Schaalbare IT voor groeiende mediagigant',
      challenge: 'IT-infrastructuur kon groei niet bijhouden',
      solution: 'Hybride cloud-oplossing met focus op schaalbaarheid',
      results: [
        '3x snellere data-verwerking',
        '40% kostenbesparing op IT',
        'Naadloze integratie met internationale teams'
      ],
      quote: 'Workflo is een verlengstuk en integraal onderdeel van ons team.',
      author: 'Thijs Muller',
      role: 'CEO'
    },
    {
      id: 'winix',
      company: 'Winix',
      industry: 'Zakelijke Dienstverlening',
      title: 'Betrouwbare IT-partner voor complexe projecten',
      challenge: 'Kritieke systemen hadden 100% uptime nodig',
      solution: 'Redundante systemen met proactieve monitoring',
      results: [
        '99.99% uptime bereikt',
        'Zero data loss in 2 jaar',
        '35% productiviteitstoename'
      ],
      quote: 'Workflo knows. They solve it instantly. With a smile.',
      author: 'Patrick Beijl',
      role: 'Commerciële Directeur'
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-grid-gray-100 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
        
        <div className="container mx-auto container-padding relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Onze <span className="text-gradient">Succesverhalen</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Ontdek hoe Amsterdamse bedrijven hun IT-uitdagingen overwonnen en groei realiseerden met Workflo
            </p>
          </motion.div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="section-padding">
        <div className="container mx-auto container-padding">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <motion.div
                key={study.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-8 h-full flex flex-col">
                  {/* Company & Industry */}
                  <div className="mb-4">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{study.company}</h3>
                    <span className="inline-block px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-sm">
                      {study.industry}
                    </span>
                  </div>

                  {/* Title */}
                  <h4 className="text-lg font-semibold text-gray-800 mb-4">{study.title}</h4>

                  {/* Challenge */}
                  <div className="mb-4">
                    <h5 className="font-semibold text-gray-700 mb-2">Uitdaging:</h5>
                    <p className="text-gray-600">{study.challenge}</p>
                  </div>

                  {/* Solution */}
                  <div className="mb-4">
                    <h5 className="font-semibold text-gray-700 mb-2">Oplossing:</h5>
                    <p className="text-gray-600">{study.solution}</p>
                  </div>

                  {/* Results */}
                  <div className="mb-6 flex-grow">
                    <h5 className="font-semibold text-gray-700 mb-2">Resultaten:</h5>
                    <ul className="space-y-2">
                      {study.results.map((result, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <svg className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          <span className="text-gray-600">{result}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Quote */}
                  <div className="border-t pt-4">
                    <p className="text-gray-700 italic mb-2">&quot;{study.quote}&quot;</p>
                    <p className="text-sm text-gray-600">
                      — {study.author}, {study.role}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gray-900 text-white">
        <div className="container mx-auto container-padding text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Klaar om jouw succesverhaal te schrijven?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Laat ons jouw IT-uitdagingen omzetten in groeikansen
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/tevredenheidscheck"
                className="inline-block px-8 py-4 bg-primary-500 text-white rounded-lg hover:bg-primary-600 transition-colors font-medium"
              >
                Start IT Health Check
              </Link>
              <Link
                href="/contact"
                className="inline-block px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-gray-900 transition-colors font-medium"
              >
                Neem Contact Op
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}