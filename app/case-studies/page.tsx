'use client'

import Link from 'next/link'
import Image from 'next/image'
// import DangerTape from '@/components/DangerTape' // REPLACED
import StaticDangerTape from '@/components/StaticDangerTape'

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
          <Link href="/case-studies" className="text-yellow-600 font-medium">Case Studies</Link>
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
              <li><Link href="/diensten" className="hover:text-yellow-400">Cloud Diensten</Link></li>
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

export default function CaseStudiesPage() {

  const caseStudies = [
    {
      client: 'Schulte & Lestraden',
      industry: 'Installatie Diensten',
      logo: '/images/placeholder-logo.png',
      duration: 'Managed IT Diensten',
      linkedinUrl: 'https://www.linkedin.com/feed/update/urn:li:activity:7236276208433344512',
      challenge: 'Een gevestigd installatiebedrijf met meer dan 70 jaar ervaring had een complete IT-infrastructuur installatie en doorlopende tweedelijns ondersteuning nodig om hun activiteiten te moderniseren.',
      solution: 'WORKFLO leverde een uitgebreide IT-omgeving installatie inclusief netwerk setup, server configuratie en werkstation uitrol. We hebben ook een tweedelijns ondersteuningssysteem opgezet om continue bedrijfsvoering te garanderen.',
      results: [
        'Complete IT-infrastructuur modernisering',
        'Betrouwbaar tweedelijns ondersteuningssysteem',
        'Verbeterde operationele efficiëntie',
        'Verminderde IT-gerelateerde downtime'
      ],
      testimonial: '"WORKFLO heeft ons geholpen onze hele IT-infrastructuur te moderniseren. Hun expertise en ondersteuning zijn van onschatbare waarde voor onze activiteiten."'
    },
    {
      client: 'Duwtje',
      industry: 'Wetenschappelijk & Creatief Bureau',
      logo: '/images/logos/duwtje.png',
      duration: 'Complete IT Partnership',
      linkedinUrl: 'https://www.linkedin.com/feed/update/urn:li:activity:7233749063135903744',
      additionalLinkedinUrl: 'https://www.linkedin.com/feed/update/urn:li:activity:7233749063135903744',
      challenge: 'Een wetenschappelijk en creatief gedragsbureau had een betrouwbare IT-partner nodig om hun innovatieve werk te ondersteunen en ervoor te zorgen dat hun digitale infrastructuur gelijke tred kon houden met hun creatieve processen.',
      solution: 'WORKFLO werd hun toegewijde IT-partner en leverde uitgebreide beheerde IT-diensten, cloudoplossingen en proactieve monitoring om ervoor te zorgen dat hun creatieve teams zonder onderbreking konden werken.',
      results: [
        'Naadloze cloud samenwerking',
        '99,9% uptime bereikt',
        'Verbeterde creatieve workflow',
        'Schaalbare IT-infrastructuur'
      ],
      testimonial: '"Het belang van een betrouwbare IT-partner kan niet genoeg benadrukt worden. WORKFLO is essentieel geweest voor het soepel laten verlopen van onze creatieve processen."'
    },
    {
      client: 'Havas Media',
      industry: 'Media & Reclame',
      logo: '/images/logos/Havas_Media.png',
      duration: 'Fixed Fee Onsite Support',
      challenge: 'Een wereldwijd medianetwerk had lokale IT-ondersteuning nodig die kon meegaan met hun snelle omgeving en directe hulp kon bieden voor hun kantoor in Amsterdam.',
      solution: 'WORKFLO implementeerde een Fixed Fee Onsite Support pakket, met onbeperkte bezoeken ter plaatse, proactieve monitoring en een toegewijde accountmanager om geen verstoring van hun media-activiteiten te garanderen.',
      results: [
        '40% reductie in IT-incidenten',
        '1 uur reactietijd garantie',
        'Voorspelbare IT-kosten',
        'Verbeterde teamproductiviteit'
      ],
      testimonial: '"De proactieve aanpak van WORKFLO heeft getransformeerd hoe we met IT omgaan. Problemen worden vaak opgelost voordat we ze zelfs opmerken."'
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <StaticDangerTape />
      <InlineHeader />
      
      <main className="pt-24 pb-16">
        {/* Hero Section */}
        <section className="relative bg-white py-16 overflow-hidden">
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
              <source src="/videos/Security_1.mp4" type="video/mp4" />
              <source src="/videos/Workflo_W_final_1.mp4" type="video/mp4" />
            </video>
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-5xl font-bold text-gray-900 mb-4">
                Klantsuccessen
              </h1>
              <p className="text-xl text-gray-600">
                Zie hoe we Amsterdamse bedrijven hebben geholpen hun IT-infrastructuur te transformeren en hun doelen te bereiken.
              </p>
            </div>
          </div>
        </section>

        {/* Case Studies */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="space-y-16">
              {caseStudies.map((study, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl shadow-xl overflow-hidden animate-fadeInUp"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className="grid md:grid-cols-2">
                    {/* Content Side */}
                    <div className="p-8 lg:p-12">
                      <div className="flex items-center gap-4 mb-6">
                        {study.logo && (
                          <div className="relative w-32 h-16">
                            <Image
                              src={study.logo}
                              alt={study.client}
                              fill
                              className="object-contain"
                            />
                          </div>
                        )}
                        <div>
                          <h2 className="text-2xl font-bold text-gray-900">{study.client}</h2>
                          <p className="text-gray-600">{study.industry}</p>
                        </div>
                      </div>

                      <div className="space-y-6">
                        <div>
                          <h3 className="text-lg font-semibold text-gray-900 mb-2">
                            De Uitdaging
                          </h3>
                          <p className="text-gray-600">{study.challenge}</p>
                        </div>

                        <div>
                          <h3 className="text-lg font-semibold text-gray-900 mb-2">
                            Onze Oplossing
                          </h3>
                          <p className="text-gray-600">{study.solution}</p>
                        </div>

                        <div className="bg-gray-50 rounded-xl p-6">
                          <p className="text-gray-700 italic text-lg mb-4">
                            {study.testimonial}
                          </p>
                          <p className="text-sm text-gray-500">
                            — {study.client} Team
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Results Side */}
                    <div className="bg-gradient-to-br from-yellow-400 to-yellow-500 p-8 lg:p-12">
                      <h3 className="text-2xl font-bold text-black mb-6">
                        Behaalde Resultaten
                      </h3>
                      <div className="space-y-4">
                        {study.results.map((result, idx) => (
                          <div key={idx} className="flex items-start gap-3">
                            <svg className="w-6 h-6 text-black mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                            </svg>
                            <span className="text-black font-medium">{result}</span>
                          </div>
                        ))}
                      </div>

                      <div className="mt-8 space-y-4">
                        <div className="bg-black/10 rounded-lg p-4">
                          <p className="text-black font-semibold">
                            Type Dienstverlening:
                          </p>
                          <p className="text-black">{study.duration}</p>
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {study.linkedinUrl && (
                            <a 
                              href={study.linkedinUrl} 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-2 px-4 py-2 bg-black text-yellow-400 rounded-lg hover:bg-gray-800 transition-colors"
                            >
                              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                              </svg>
                              Lees artikel 1
                            </a>
                          )}
                          {study.additionalLinkedinUrl && (
                            <a 
                              href={study.additionalLinkedinUrl} 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-2 px-4 py-2 bg-black text-yellow-400 rounded-lg hover:bg-gray-800 transition-colors"
                            >
                              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                              </svg>
                              Lees artikel 2
                            </a>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Section */}
            <div className="mt-16 text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Klaar om Ons Volgende Succesverhaal te Worden?
              </h2>
              <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                Sluit u aan bij meer dan 100 Amsterdamse bedrijven die WORKFLO vertrouwen met hun IT-infrastructuur.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/tevredenheidscheck"
                  className="bg-yellow-400 text-black px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-500 transition-all inline-block"
                >
                  Start Uw IT-Assessment
                </Link>
                <Link
                  href="/contact"
                  className="bg-black text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-800 transition-all inline-block"
                >
                  Contact Ons Team
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <InlineFooter />
      <StaticDangerTape />
      
      {/* Inline Animations */}
      <style jsx global>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fadeInUp {
          opacity: 0;
          animation: fadeInUp 0.6s ease-out forwards;
        }
      `}</style>
    </div>
  )
}