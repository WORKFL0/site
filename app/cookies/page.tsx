'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import Button from '@/components/ui/Button'

export default function CookiePolicyPage() {
  const [heroRef, heroInView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const [contentRef, contentInView] = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <>
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative min-h-[30vh] flex items-center bg-gradient-to-br from-gray-50 to-white overflow-hidden">
          <div className="absolute inset-0 bg-grid-gray-100 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
          
          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              ref={heroRef}
              initial={{ opacity: 0, y: 20 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="max-w-4xl"
            >
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                Cookie Beleid
              </h1>
              <p className="text-xl text-gray-600">
                Laatst bijgewerkt: {new Date().toLocaleDateString('nl-NL', { year: 'numeric', month: 'long', day: 'numeric' })}
              </p>
            </motion.div>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <motion.div
              ref={contentRef}
              initial={{ opacity: 0, y: 20 }}
              animate={contentInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="max-w-4xl mx-auto prose prose-lg"
            >
              <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Wat zijn cookies?</h2>
                <p className="text-gray-700 mb-6">
                  Cookies zijn kleine tekstbestanden die op uw apparaat worden geplaatst wanneer u onze website bezoekt. 
                  Ze helpen ons om uw voorkeuren te onthouden, de website-ervaring te verbeteren en inzicht te krijgen 
                  in hoe bezoekers onze site gebruiken.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">Welke cookies gebruiken wij?</h2>
                
                <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-6">1. Noodzakelijke cookies</h3>
                <p className="text-gray-700 mb-4">
                  Deze cookies zijn essentieel voor het functioneren van onze website. Ze zorgen ervoor dat u kunt 
                  navigeren en basisfuncties kunt gebruiken. Zonder deze cookies kunnen bepaalde diensten niet worden geleverd.
                </p>

                <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-6">2. Analytische cookies</h3>
                <p className="text-gray-700 mb-4">
                  We gebruiken Vercel Analytics om te begrijpen hoe bezoekers onze website gebruiken. Deze cookies 
                  verzamelen anonieme informatie over paginabezoeken, verkeersbronnen en gebruikersgedrag. Deze data 
                  helpt ons om onze website te verbeteren.
                </p>

                <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-6">3. Functionele cookies</h3>
                <p className="text-gray-700 mb-4">
                  Deze cookies onthouden uw voorkeuren zoals taalinstelling en eerder ingevulde formuliervelden. 
                  Ze maken uw ervaring persoonlijker en gebruiksvriendelijker.
                </p>

                <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-6">4. Marketing cookies</h3>
                <p className="text-gray-700 mb-4">
                  We gebruiken HubSpot voor onze contactformulieren en marketingautomatisering. Deze cookies kunnen 
                  informatie over uw websitebezoek delen met HubSpot om relevante communicatie mogelijk te maken.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">Uw keuzes</h2>
                <p className="text-gray-700 mb-6">
                  U heeft controle over welke cookies u accepteert:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
                  <li>
                    <strong>Browserinstellingen:</strong> U kunt uw browser instellen om cookies te blokkeren of u te 
                    waarschuwen wanneer cookies worden verzonden.
                  </li>
                  <li>
                    <strong>Opt-out:</strong> Voor analytische en marketing cookies kunt u zich afmelden via de 
                    relevante platforms.
                  </li>
                  <li>
                    <strong>Verwijderen:</strong> U kunt op elk moment bestaande cookies van uw apparaat verwijderen 
                    via uw browserinstellingen.
                  </li>
                </ul>

                <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">Derde partijen</h2>
                <p className="text-gray-700 mb-6">
                  Onze website kan links bevatten naar websites van derden. Wij zijn niet verantwoordelijk voor het 
                  cookiebeleid van deze externe sites. We raden u aan hun privacybeleid te lezen.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">Updates van dit beleid</h2>
                <p className="text-gray-700 mb-6">
                  We kunnen dit cookiebeleid van tijd tot tijd bijwerken. Belangrijke wijzigingen zullen we duidelijk 
                  communiceren op onze website. De datum van de laatste update staat altijd bovenaan dit document.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">Contact</h2>
                <p className="text-gray-700 mb-6">
                  Heeft u vragen over ons cookiebeleid? Neem gerust contact met ons op:
                </p>
                <div className="bg-gray-50 rounded-lg p-6">
                  <p className="text-gray-700">
                    <strong>Workflo B.V.</strong><br />
                    E-mail: <a href="mailto:privacy@workflo.nl" className="text-primary-600 hover:text-primary-700">privacy@workflo.nl</a><br />
                    Telefoon: <a href="tel:0203080465" className="text-primary-600 hover:text-primary-700">020-30 80 465</a><br />
                    Adres: Koivistokade 3, 1013AC Amsterdam
                  </p>
                </div>

                <div className="mt-8 pt-8 border-t border-gray-200">
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button href="/privacy" variant="outline">
                      Bekijk Privacybeleid
                    </Button>
                    <Button href="/" variant="primary">
                      Terug naar Home
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}