'use client'

import Image from 'next/image'
import Link from 'next/link'
import StaticHeader from '@/components/StaticHeader'
import StaticFooter from '@/components/StaticFooter'
import SafeHubSpotForm from '@/components/SafeHubSpotForm'

export default function WerkenBijPage() {
  const benefits = [
    '💻 Moderne werkplek met top hardware',
    '📚 Opleidingsbudget voor certificeringen',
    '🏖️ 25 vakantiedagen + flexibele uren',
    '🚀 Carrière ontwikkeling en doorgroeimogelijkheden',
    '🏠 Hybride werken mogelijk',
    '☕ Gezellig team met vrijdagborrels',
    '🎯 Directe impact op klanten',
    '💰 Competitief salaris + bonusregeling'
  ]

  const openings = [
    {
      title: 'Senior IT Support Engineer',
      type: 'Fulltime',
      location: 'Amsterdam',
      description: 'Voor ons groeiende team zoeken we een ervaren IT Support Engineer die klanten on-site kan ondersteunen.'
    },
    {
      title: 'Cloud Solutions Architect',
      type: 'Fulltime',
      location: 'Amsterdam / Remote',
      description: 'Help onze klanten met Microsoft 365 en Azure migraties. Certificeringen zijn een pre.'
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      <StaticHeader />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-br from-yellow-50 to-orange-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
                Werken bij Workflo
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Word onderdeel van het team dat IT simpel maakt voor bedrijven in Amsterdam.
                Wij geloven in persoonlijke groei, innovatie en vooral: plezier in je werk!
              </p>
              <a
                href="#openings"
                className="inline-block bg-yellow-400 text-black px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-500 transition-all"
              >
                Bekijk Vacatures
              </a>
            </div>
          </div>
        </section>

        {/* Culture Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">Onze Cultuur</h2>
              
              <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
                <div>
                  <h3 className="text-2xl font-bold mb-4">Simpel, Persoonlijk, Professioneel</h3>
                  <p className="text-gray-600 mb-4">
                    Bij Workflo maken we IT begrijpelijk voor iedereen. We zijn geen stoffige consultants 
                    in pakken, maar down-to-earth IT professionals die écht begrijpen wat ondernemers nodig hebben.
                  </p>
                  <p className="text-gray-600 mb-4">
                    Ons team bestaat uit gedreven professionals die elkaar helpen groeien. 
                    We delen kennis, vieren successen samen en staan altijd voor elkaar klaar.
                  </p>
                  <p className="text-gray-600">
                    Of je nu een ervaren engineer bent of net begint - bij ons krijg je de ruimte 
                    om te leren, te experimenteren en impact te maken.
                  </p>
                </div>
                <div className="relative h-80 rounded-lg overflow-hidden">
                  <Image
                    src="/images/team/team-photo.jpg"
                    alt="Workflo Team"
                    fill
                    className="object-cover"
                    onError={(e) => {
                      e.currentTarget.src = '/images/video-placeholder.jpg'
                    }}
                  />
                </div>
              </div>

              {/* Benefits */}
              <div className="bg-gray-50 rounded-2xl p-8">
                <h3 className="text-2xl font-bold mb-6 text-center">Waarom Werken bij Workflo?</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-start">
                      <span className="text-lg">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Open Positions */}
        <section id="openings" className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Open Vacatures</h2>
            
            <div className="max-w-4xl mx-auto space-y-6">
              {openings.map((job, index) => (
                <div key={index} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-xl font-bold text-gray-900">{job.title}</h3>
                    <div className="flex gap-2">
                      <span className="px-3 py-1 bg-yellow-100 text-yellow-700 rounded-full text-sm">
                        {job.type}
                      </span>
                      <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">
                        {job.location}
                      </span>
                    </div>
                  </div>
                  <p className="text-gray-600 mb-4">{job.description}</p>
                  <button
                    onClick={() => window.location.href = 'mailto:hr@workflo.nl?subject=Sollicitatie: ' + job.title}
                    className="text-yellow-600 font-medium hover:text-yellow-700"
                  >
                    Solliciteer nu →
                  </button>
                </div>
              ))}
            </div>

            {/* No openings fallback */}
            {openings.length === 0 && (
              <div className="text-center py-12">
                <p className="text-gray-600 mb-4">
                  Momenteel hebben we geen openstaande vacatures, maar we zijn altijd op zoek naar talent!
                </p>
                <a
                  href="mailto:hr@workflo.nl"
                  className="text-yellow-600 font-medium hover:text-yellow-700"
                >
                  Stuur een open sollicitatie →
                </a>
              </div>
            )}
          </div>
        </section>

        {/* Internship Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-2xl p-8 md:p-12">
                <div className="text-center mb-8">
                  <h2 className="text-3xl font-bold mb-4">Stageplekken Beschikbaar</h2>
                  <div className="flex justify-center mb-6">
                    <Image
                      src="/images/sbb-logo.png"
                      alt="SBB Erkend Leerbedrijf"
                      width={150}
                      height={80}
                      className="h-20 w-auto"
                    />
                  </div>
                  <p className="text-gray-700 mb-6">
                    Workflo is een erkend leerbedrijf. Wij bieden MBO en HBO studenten de kans om 
                    praktijkervaring op te doen in een dynamische IT-omgeving.
                  </p>
                </div>

                <div className="bg-white rounded-lg p-6 mb-6">
                  <h3 className="font-bold text-lg mb-3">Wat bieden wij stagiairs?</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Persoonlijke begeleiding door ervaren professionals</li>
                    <li>• Werken aan echte projecten voor echte klanten</li>
                    <li>• Stagevergoeding</li>
                    <li>• Mogelijkheid tot vast contract na succesvolle stage</li>
                    <li>• Certificeringstrajecten (Microsoft, CompTIA)</li>
                  </ul>
                </div>

                <div className="text-center">
                  <p className="text-gray-600 mb-4">
                    Interesse in een stage bij Workflo? Stuur je CV en motivatie naar:
                  </p>
                  <a
                    href="mailto:work@workflo.nl"
                    className="inline-flex items-center gap-2 bg-black text-yellow-400 px-6 py-3 rounded-lg font-bold hover:bg-gray-800 transition-all"
                  >
                    <span>work@workflo.nl</span>
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Application Form */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-8">Solliciteer Direct</h2>
              <div className="bg-white rounded-2xl shadow-xl p-8">
                <SafeHubSpotForm />
                <p className="text-center text-gray-600 mt-4">
                  Of mail direct naar <a href="mailto:hr@workflo.nl" className="text-yellow-600 hover:text-yellow-700">hr@workflo.nl</a>
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <StaticFooter />
    </div>
  )
}