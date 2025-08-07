'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { ChevronDownIcon, MagnifyingGlassIcon } from '@heroicons/react/24/outline'
import DangerTape from '@/components/DangerTape'

interface FAQItem {
  id: string
  category: string
  question: string
  answer: string
}

// Inline Header component
function InlineHeader() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm">
      <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/images/logos/workflo-logo-yellow.png"
            alt="Workflo"
            width={120}
            height={40}
            className="h-10 w-auto"
          />
        </Link>
        <div className="hidden md:flex items-center gap-6">
          <Link href="/" className="text-gray-700 hover:text-yellow-600">Home</Link>
          <Link href="/diensten" className="text-gray-700 hover:text-yellow-600">Diensten</Link>
          <Link href="/faq" className="text-yellow-600 font-medium">FAQ</Link>
          <Link href="/contact" className="bg-yellow-400 text-black px-4 py-2 rounded-lg font-medium hover:bg-yellow-500">Contact</Link>
        </div>
      </nav>
    </header>
  )
}

// Inline Footer component
function InlineFooter() {
  return (
    <footer className="bg-black text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <Image
              src="/images/logos/workflo-logo-yellow.png"
              alt="Workflo"
              width={120}
              height={40}
              className="mb-4"
            />
            <p className="text-gray-400">
              Uw betrouwbare IT-partner in Amsterdam
            </p>
          </div>
          <div>
            <h3 className="font-bold mb-4 text-yellow-400">Diensten</h3>
            <ul className="space-y-2 text-gray-400">
              <li><Link href="/diensten" className="hover:text-yellow-400">Managed IT</Link></li>
              <li><Link href="/diensten" className="hover:text-yellow-400">Cloud Services</Link></li>
              <li><Link href="/diensten" className="hover:text-yellow-400">Cybersecurity</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4 text-yellow-400">Contact</h3>
            <ul className="space-y-2 text-gray-400">
              <li>+31 20 123 4567</li>
              <li>info@workflo.nl</li>
              <li>Amsterdam, Nederland</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4 text-yellow-400">Volg Ons</h3>
            <Link href="https://linkedin.com/company/workflo" className="text-gray-400 hover:text-yellow-400">
              LinkedIn
            </Link>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 Workflo. Alle rechten voorbehouden.</p>
        </div>
      </div>
    </footer>
  )
}

export default function FAQPage() {
  const [activeCategory, setActiveCategory] = useState('all')
  const [searchQuery, setSearchQuery] = useState('')
  const [openItems, setOpenItems] = useState<string[]>([])

  // FAQ data structure with hardcoded Dutch content
  const faqData: FAQItem[] = [
    // Pricing & Contracts
    { id: 'pricing-1', category: 'pricing', question: 'Wat kosten jullie IT-diensten?', answer: 'Onze IT-diensten worden op maat geprijsd afhankelijk van uw specifieke behoeften. We bieden transparante vaste maandprijzen zonder verborgen kosten. Neem contact met ons op voor een vrijblijvende offerte.' },
    { id: 'pricing-2', category: 'pricing', question: 'Hebben jullie contracten met een vaste looptijd?', answer: 'We bieden flexibele contractvormen aan, van maand-tot-maand tot meerjarige overeenkomsten. Langere contracten bieden vaak voordelige tarieven, maar we begrijpen dat flexibiliteit belangrijk is.' },
    { id: 'pricing-3', category: 'pricing', question: 'Zijn er setup kosten voor nieuwe klanten?', answer: 'Setup kosten zijn afhankelijk van de complexiteit van uw IT-omgeving. Bij de meeste standaard implementaties zijn deze kosten minimaal of worden ze verrekend met de eerste maanden service.' },
    { id: 'pricing-4', category: 'pricing', question: 'Bieden jullie kortingen voor non-profit organisaties?', answer: 'Ja, we hebben speciale tarieven voor non-profit organisaties en startups. Neem contact met ons op om te bespreken welke mogelijkheden er zijn voor uw organisatie.' },
    
    // Support & Response Times
    { id: 'support-1', category: 'support', question: 'Wat zijn jullie support tijden?', answer: 'Onze standaard support is beschikbaar van maandag tot vrijdag van 8:00 tot 18:00. Voor kritieke issues bieden we 24/7 emergency support aan al onze managed service klanten.' },
    { id: 'support-2', category: 'support', question: 'Hoe snel reageren jullie op support verzoeken?', answer: 'Voor hoge prioriteit issues reageren we binnen 1 uur. Normale support verzoeken worden binnen 4 uur opgepakt. We hanteren duidelijke SLA afspraken die worden vastgelegd in uw contract.' },
    { id: 'support-3', category: 'support', question: 'Kunnen jullie ook ter plekke ondersteuning bieden?', answer: 'Ja, we bieden on-site support in Amsterdam en omgeving. Voor complexere issues of hardware installaties komen we graag langs om direct te helpen.' },
    { id: 'support-4', category: 'support', question: 'Hoe werkt jullie remote support?', answer: 'We gebruiken veilige remote access tools om snel problemen op te lossen zonder dat we ter plekke hoeven te komen. Dit is vaak de snelste manier om IT-problemen op te lossen.' },
    
    // Services & Solutions
    { id: 'services-1', category: 'services', question: 'Welke IT-diensten bieden jullie aan?', answer: 'We bieden complete managed IT services, cloud migratie, cybersecurity, backup & disaster recovery, Microsoft 365 beheer, en hardware procurement en installatie.' },
    { id: 'services-2', category: 'services', question: 'Kunnen jullie ons helpen met cloud migratie?', answer: 'Absoluut! We zijn specialist in cloud migraties naar Microsoft Azure en Office 365. We begeleiden het hele proces van planning tot implementatie en training van uw team.' },
    { id: 'services-3', category: 'services', question: 'Beheren jullie ook Microsoft 365?', answer: 'Ja, Microsoft 365 beheer is een van onze kernactiviteiten. We zorgen voor gebruikersbeheer, beveiligingsinstellingen, backup, en optimalisatie van uw Office 365 omgeving.' },
    { id: 'services-4', category: 'services', question: 'Kunnen jullie helpen met cybersecurity?', answer: 'Cybersecurity is cruciaal voor elk bedrijf. We implementeren firewalls, antivirus, email beveiliging, security awareness training, en monitoren continu op bedreigingen.' },
    
    // Security & Compliance
    { id: 'security-1', category: 'security', question: 'Hoe beschermen jullie onze bedrijfsgegevens?', answer: 'We hanteren strenge beveiligingsprotocollen inclusief encryptie, multi-factor authenticatie, gelaagde beveiliging, en regelmatige security audits om uw data optimaal te beschermen.' },
    { id: 'security-2', category: 'security', question: 'Zijn jullie AVG/GDPR compliant?', answer: 'Ja, we zijn volledig AVG/GDPR compliant en helpen ook onze klanten met hun compliance eisen. We hebben passende dataverwerking overeenkomsten en privacy procedures op orde.' },
    { id: 'security-3', category: 'security', question: 'Wat doen jullie bij een cyberaanval?', answer: 'We hebben een 24/7 incident response protocol. Bij een security incident isoleren we getroffen systemen, analyseren de impact, herstellen data waar mogelijk, en implementeren verbeteringen om herhaling te voorkomen.' },
    { id: 'security-4', category: 'security', question: 'Verzorgen jullie ook backup en disaster recovery?', answer: 'Ja, we implementeren robuuste backup strategieën met regelmatige tests. Onze disaster recovery plans zorgen ervoor dat uw bedrijf snel operationeel is na een incident.' },
    
    // Getting Started
    { id: 'onboarding-1', category: 'onboarding', question: 'Hoe lang duurt de implementatie?', answer: 'De implementatietijd hangt af van uw huidige IT-situatie. Een standaard setup voor een klein bedrijf kan binnen een week, terwijl complexere migraties enkele weken kunnen duren.' },
    { id: 'onboarding-2', category: 'onboarding', question: 'Wat hebben jullie nodig om te starten?', answer: 'We beginnen met een grondige IT-assessment van uw huidige systemen, netwerk, beveiliging en behoeften. Op basis daarvan maken we een implementatieplan.' },
    { id: 'onboarding-3', category: 'onboarding', question: 'Kunnen jullie van onze huidige IT-provider overnemen?', answer: 'Ja, we begeleiden soepele overnames van andere IT-providers. We zorgen voor minimale downtime en een gestructureerde overdracht van alle systemen en documentatie.' },
    { id: 'onboarding-4', category: 'onboarding', question: 'Bieden jullie training aan ons team?', answer: 'Absoluut! We bieden uitgebreide training aan uw team over nieuwe systemen, security best practices, en hoe ze het beste gebruik kunnen maken van hun IT-omgeving.' },
    
    // Workflo Specifieke vragen
    { id: 'workflo-1', category: 'pricing', question: 'Wat is het verschil tussen Fixed Fee en Break-Fix support?', answer: 'Fixed Fee betekent een vast maandbedrag voor onbeperkte support, terwijl Break-Fix betekent dat u alleen betaalt wanneer er iets kapot is. Fixed Fee is voordeliger bij regelmatig gebruik en geeft meer zekerheid over kosten.' },
    { id: 'workflo-2', category: 'services', question: 'Ondersteunen jullie ook Apple/Mac computers?', answer: 'Ja, we ondersteunen zowel Windows als Mac omgevingen. Veel van onze klanten in de creatieve sector werken met Apple producten en we hebben uitgebreide expertise in beide platforms.' },
    { id: 'workflo-3', category: 'support', question: 'Hoe werkt jullie TeamViewer remote support?', answer: 'Via onze veilige TeamViewer verbinding kunnen we direct op uw computer meekijken en problemen oplossen. U hoeft alleen op onze support link te klikken en een code door te geven.' },
    { id: 'workflo-4', category: 'services', question: 'Kunnen jullie ook VoIP telefonie regelen?', answer: 'Ja, we leveren complete VoIP oplossingen inclusief installatie, configuratie en onderhoud. We werken met de beste providers voor betrouwbare zakelijke telefonie.' },
    { id: 'workflo-5', category: 'security', question: 'Hoe vaak maken jullie backups?', answer: 'We maken dagelijks incrementele backups en wekelijks volledige backups. Voor kritieke systemen kunnen we zelfs meerdere keren per dag backups maken. Alle backups worden versleuteld opgeslagen.' },
    { id: 'workflo-6', category: 'pricing', question: 'Zijn licenties inbegrepen in de Fixed Fee prijs?', answer: 'Bij Fixed Fee zijn alle noodzakelijke licenties voor backup, monitoring en security inbegrepen. Alleen Office 365 licenties worden apart gefactureerd tegen kostprijs.' },
    { id: 'workflo-7', category: 'services', question: 'Verkopen jullie ook hardware?', answer: 'Ja, we leveren alle IT-hardware van computers tot servers. Door onze partnerships krijgen we scherpe prijzen die we 1-op-1 doorberekenen aan onze klanten.' },
    { id: 'workflo-8', category: 'support', question: 'Hebben jullie een klantportaal?', answer: 'Ja, via ons klantportaal kunt u tickets aanmaken, de status volgen, facturen inzien en rapporten bekijken. U krijgt toegang zodra u klant wordt.' },
    { id: 'workflo-9', category: 'onboarding', question: 'Doen jullie ook een gratis IT-assessment?', answer: 'Ja, we bieden een gratis en vrijblijvende IT-assessment aan. We analyseren uw huidige situatie en geven concrete verbetervoorstellen zonder verplichtingen.' },
    { id: 'workflo-10', category: 'security', question: 'Wat is jullie uptime garantie?', answer: 'We garanderen 99.9% uptime voor alle kritieke systemen die we beheren. Dit wordt gemonitord en maandelijks gerapporteerd aan onze klanten.' },
  ]

  // Categories with hardcoded Dutch names
  const categories = [
    { id: 'all', name: 'Alles' },
    { id: 'pricing', name: 'Prijzen' },
    { id: 'support', name: 'Ondersteuning' },
    { id: 'services', name: 'Diensten' },
    { id: 'security', name: 'Beveiliging' },
    { id: 'onboarding', name: 'Aan de slag' },
  ]

  // Filter FAQs based on category and search
  const filteredFAQs = faqData.filter(faq => {
    const matchesCategory = activeCategory === 'all' || faq.category === activeCategory
    const matchesSearch = searchQuery === '' || 
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCategory && matchesSearch
  })

  // Toggle FAQ item
  const toggleFAQItem = (id: string) => {
    setOpenItems(prev => 
      prev.includes(id) 
        ? prev.filter(item => item !== id)
        : [...prev, id]
    )
  }

  return (
    <div className="min-h-screen bg-white">
      <DangerTape height="h-3" showText={false} />
      <InlineHeader />

      <main className="py-20">
        {/* Hero Section */}
        <section className="relative mb-16 bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white py-16 overflow-hidden">
          {/* Background Video */}
          <div className="absolute inset-0 opacity-5 pointer-events-none">
            <video
              autoPlay
              muted
              loop
              playsInline
              className="absolute inset-0 w-full h-full object-cover"
              preload="metadata"
            >
              <source src="/videos/Workflo_W_final_3.mp4" type="video/mp4" />
              <source src="/videos/logo-animation.mp4" type="video/mp4" />
            </video>
          </div>
          
          <div className="container mx-auto px-4 pt-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <h1 className="text-5xl font-bold text-white mb-6">
                Veelgestelde Vragen
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
                Vind snel antwoorden op de meest gestelde vragen over onze IT-diensten, support, prijzen en meer. Staat uw vraag er niet bij? Neem dan contact met ons op.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Search and Filters Section */}
        <section className="py-8 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              {/* Search Bar */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="relative mb-8"
              >
                <div className="relative">
                  <MagnifyingGlassIcon className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Zoek in veelgestelde vragen..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-12 pr-4 py-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent text-lg"
                  />
                </div>
              </motion.div>

              {/* Category Filter */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="flex flex-wrap gap-3 justify-center"
              >
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setActiveCategory(category.id)}
                    className={`px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
                      activeCategory === category.id
                        ? 'bg-yellow-400 text-black shadow-lg'
                        : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-300'
                    }`}
                  >
                    {category.name}
                  </button>
                ))}
              </motion.div>
            </div>
          </div>
        </section>

        {/* FAQ Accordion Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <AnimatePresence>
                {filteredFAQs.length === 0 ? (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="text-center py-12"
                  >
                    <p className="text-gray-500 text-lg">Geen vragen gevonden die overeenkomen met uw zoekopdracht.</p>
                  </motion.div>
                ) : (
                  <div className="space-y-4">
                    {filteredFAQs.map((faq, index) => (
                      <motion.div
                        key={faq.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: index * 0.05 }}
                        className="bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow"
                      >
                        <button
                          onClick={() => toggleFAQItem(faq.id)}
                          className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
                        >
                          <h3 className="text-lg font-semibold text-gray-900 pr-4">
                            {faq.question}
                          </h3>
                          <ChevronDownIcon
                            className={`h-5 w-5 text-gray-500 transition-transform duration-200 flex-shrink-0 ${
                              openItems.includes(faq.id) ? 'rotate-180' : ''
                            }`}
                          />
                        </button>
                        
                        <AnimatePresence>
                          {openItems.includes(faq.id) && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: 'auto', opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.3, ease: 'easeInOut' }}
                              className="overflow-hidden"
                            >
                              <div className="px-6 pb-5 border-t border-gray-100">
                                <motion.p
                                  initial={{ y: -10, opacity: 0 }}
                                  animate={{ y: 0, opacity: 1 }}
                                  transition={{ duration: 0.2, delay: 0.1 }}
                                  className="text-gray-700 leading-relaxed pt-4"
                                >
                                  {faq.answer}
                                </motion.p>
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </motion.div>
                    ))}
                  </div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-black text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="h-full w-full" style={{
              backgroundImage: `repeating-linear-gradient(
                45deg,
                #f2f400,
                #f2f400 15px,
                transparent 15px,
                transparent 30px
              )`
            }}></div>
          </div>
          
          <div className="container mx-auto px-4 text-center relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl font-bold mb-4">Heeft u nog vragen?</h2>
              <p className="text-xl mb-8 text-gray-300">
                Onze IT-experts staan klaar om al uw vragen te beantwoorden en u te helpen met de beste IT-oplossingen voor uw bedrijf.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link 
                  href="/contact"
                  className="bg-yellow-400 text-black hover:bg-yellow-500 px-8 py-4 font-bold rounded-lg transition-colors"
                >
                  Neem Contact Op
                </Link>
              </div>
              
              <p className="text-gray-400 mt-6">
                Of bel direct: +31 20 123 4567
              </p>
            </motion.div>
          </div>
        </section>
      </main>

      <InlineFooter />
      <DangerTape height="h-3" showText={false} />
    </div>
  )
}