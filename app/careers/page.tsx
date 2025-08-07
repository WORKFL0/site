'use client'

import Image from 'next/image'
import DangerTape from '@/components/DangerTape'

// Self-contained Header Component
const CareersHeader = () => (
  <header className="bg-white shadow-sm fixed top-0 left-0 right-0 z-50">
    <div className="container mx-auto px-4">
      <div className="flex items-center justify-between h-16">
        <div className="flex items-center">
          <Image
            src="/images/logos/workflo-logo-yellow.png"
            alt="Workflo Logo"
            width={120}
            height={40}
            className="h-8 w-auto"
          />
        </div>
        <nav className="hidden md:flex space-x-6">
          <a href="/" className="text-gray-600 hover:text-black transition-colors">Home</a>
          <a href="/services" className="text-gray-600 hover:text-black transition-colors">Diensten</a>
          <a href="/shop" className="text-gray-600 hover:text-black transition-colors">Shop</a>
          <a href="/contact" className="text-gray-600 hover:text-black transition-colors">Contact</a>
        </nav>
      </div>
    </div>
  </header>
)

// Self-contained Footer Component
const CareersFooter = () => (
  <footer style={{ backgroundColor: '#f2f400' }} className="text-black py-8">
    <div className="container mx-auto px-4">
      <div className="flex flex-col md:flex-row items-center justify-between">
        <div className="flex items-center mb-4 md:mb-0">
          <Image
            src="/images/logos/workflo-logo-yellow.png"
            alt="Workflo Logo"
            width={100}
            height={32}
            className="h-6 w-auto mr-4"
          />
          <span className="font-semibold">Workflo IT Services</span>
        </div>
        <div className="flex space-x-6 text-sm">
          <span>Amsterdam, Nederland</span>
          <a href="tel:0203080465" className="hover:text-gray-800">020-30 80 465</a>
          <a href="mailto:info@workflo.nl" className="hover:text-gray-800">info@workflo.nl</a>
        </div>
      </div>
    </div>
  </footer>
)

export default function CareersPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <DangerTape height="h-3" showText={false} />
      <CareersHeader />

      <main>
        {/* Hero Section */}
        <section className="relative py-20 bg-white">
          <div className="absolute top-0 left-0 right-0 h-2" style={{ background: 'linear-gradient(to right, #f2f400, black, #f2f400)' }}></div>
          <div className="container mx-auto px-4">
            <h1 className="text-5xl font-bold text-center text-black mb-6">
              Word Onderdeel van het Team dat Amsterdam IT Transformeert
            </h1>
            <p className="text-xl text-gray-700 text-center max-w-3xl mx-auto">
              Bij Workflo leveren we niet alleen IT-diensten – we bouwen de toekomst van 
              bedrijfstechnologie in Amsterdam. Sluit je aan bij ons team van gepassioneerde 
              professionals die geloven dat geweldige technologie bedrijfssucces moet stimuleren, 
              geen hoofdpijn moet veroorzaken.
            </p>
            {/* Fun Rihanna reference with bouncing animation */}
            <div className="text-center mt-6">
              <p className="text-sm text-gray-500 italic animate-bounce">
                <span className="text-2xl mr-2">♪</span>
                Want bij ons draait het om work, work, work, work, work – maar dan met plezier en passie!
                <span className="text-2xl ml-2">♫</span>
              </p>
            </div>
          </div>
        </section>

        {/* Why Work With Us */}
        <section className="py-16 bg-gray-100">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-black">Waarom Werken bij Workflo?</h2>
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className="bg-white p-8 rounded-lg shadow-md">
                <div className="w-16 h-16 rounded-lg mb-4 flex items-center justify-center" style={{ backgroundColor: '#f2f400' }}>
                  <span className="text-3xl">🚀</span>
                </div>
                <h3 className="text-xl font-bold mb-3 text-black">Maak Echt Impact</h3>
                <p className="text-gray-600">
                  Elke oplossing die je bouwt helpt Amsterdamse bedrijven direct groeien. Zie hoe 
                  jouw werk bedrijven transformeert en succesvol maakt.
                </p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-md">
                <div className="w-16 h-16 rounded-lg mb-4 flex items-center justify-center" style={{ backgroundColor: '#f2f400' }}>
                  <span className="text-3xl">🎯</span>
                </div>
                <h3 className="text-xl font-bold mb-3 text-black">Professionele Groei</h3>
                <p className="text-gray-600">
                  Werk met cutting-edge technologie en continue leermogelijkheden. 
                  We investeren in jouw ontwikkeling omdat jouw groei ons succes drijft.
                </p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-md">
                <div className="w-16 h-16 rounded-lg mb-4 flex items-center justify-center" style={{ backgroundColor: '#f2f400' }}>
                  <span className="text-3xl">🤝</span>
                </div>
                <h3 className="text-xl font-bold mb-3 text-black">Samenwerkingscultuur</h3>
                <p className="text-gray-600">
                  Word deel van een team dat directheid, innovatie en wederzijdse steun waardeert. 
                  We slagen samen en vieren elkaars prestaties.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Current Openings */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-black">Open Sollicitaties</h2>
            <div className="max-w-4xl mx-auto">
              <div className="bg-gray-50 p-12 rounded-lg border-l-4 text-center" style={{ borderColor: '#f2f400' }}>
                <h3 className="text-2xl font-bold text-black mb-4">
                  Momenteel Geen Openstaande Vacatures
                </h3>
                <p className="text-gray-700 text-lg mb-6">
                  Hoewel we momenteel geen specifieke vacatures hebben, zijn we altijd op zoek naar 
                  getalenteerde professionals die onze passie voor excellente IT-dienstverlening delen.
                </p>
                <div className="bg-white p-8 rounded-lg mb-8">
                  <h4 className="text-xl font-bold mb-4 text-black">We Zoeken Altijd Talent in:</h4>
                  <div className="grid md:grid-cols-2 gap-4 text-left max-w-2xl mx-auto">
                    <ul className="space-y-2 text-gray-600">
                      <li>• IT Support & Helpdesk</li>
                      <li>• Systeem- en Netwerkbeheer</li>
                      <li>• Cloud Infrastructure</li>
                      <li>• Cybersecurity</li>
                    </ul>
                    <ul className="space-y-2 text-gray-600">
                      <li>• Software Development</li>
                      <li>• Project Management</li>
                      <li>• Business Development</li>
                      <li>• Customer Success</li>
                    </ul>
                  </div>
                </div>
                <p className="text-gray-600 mb-8">
                  Denk je dat jij perfect bij ons team past? Stuur ons jouw CV en motivatiebrief, 
                  en vertel ons waarom jij de volgende Workflo-ster wordt!
                </p>
                <a href="mailto:careers@workflo.it?subject=Open Sollicitatie" 
                   className="inline-block bg-black text-white px-8 py-3 rounded-lg font-bold hover:bg-gray-800 transition">
                  Stuur Je Open Sollicitatie
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-16 bg-gray-100">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-black">Wat Wij Bieden</h2>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="font-bold mb-3 text-black">Competitief Pakket</h3>
                <ul className="space-y-2 text-gray-600 text-sm">
                  <li>• Marktconform salaris</li>
                  <li>• Prestatiegerichte bonussen</li>
                  <li>• 25 vakantiedagen + feestdagen</li>
                  <li>• Reiskostenvergoeding</li>
                  <li>• Laptop en telefoon van de zaak</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="font-bold mb-3 text-black">Professionele Ontwikkeling</h3>
                <ul className="space-y-2 text-gray-600 text-sm">
                  <li>• Budget voor certificeringen en trainingen</li>
                  <li>• Mogelijkheden voor conferentiebezoek</li>
                  <li>• Toegang tot de nieuwste technologie en tools</li>
                  <li>• Mentorship en loopbaanbegeleiding</li>
                  <li>• Cross-team projectmogelijkheden</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="font-bold mb-3 text-black">Work-Life Balance</h3>
                <ul className="space-y-2 text-gray-600 text-sm">
                  <li>• Flexibele werktijden</li>
                  <li>• Hybride werken (kantoor/thuis)</li>
                  <li>• Modern kantoor in Amsterdam</li>
                  <li>• Teamuitjes en borrels</li>
                  <li>• Vrijdagmiddagborrels</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="font-bold mb-3 text-black">Groeimogelijkheden</h3>
                <ul className="space-y-2 text-gray-600 text-sm">
                  <li>• Duidelijke carrièrepaden</li>
                  <li>• Leadership development programma's</li>
                  <li>• Kans om bedrijfsrichting mede te bepalen</li>
                  <li>• Innovatie en ideeën delen aangemoedigd</li>
                  <li>• Cross-functionele vaardigheidsontwikkeling</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Culture */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-black">Onze Cultuur</h2>
            <div className="max-w-3xl mx-auto bg-gray-100 p-8 rounded-lg">
              <p className="text-lg text-gray-700 italic mb-4">
                "Bij Workflo geloven we dat het beste werk gebeurt wanneer mensen zich gewaardeerd, 
                uitgedaagd en gesteund voelen. We hebben een cultuur gebouwd waar expertise wordt 
                gerespecteerd, ideeën worden gehoord, en iedereen bijdraagt aan ons collectieve succes. 
                Sluit je bij ons aan en wees onderdeel van de transformatie van hoe Amsterdamse 
                bedrijven technologie gebruiken."
              </p>
              <p className="text-gray-600">
                <strong>— Florian</strong><br />
                Oprichter & CEO, Workflo
              </p>
            </div>
          </div>
        </section>

        {/* SBB Member Section */}
        <section className="py-16" style={{ backgroundColor: '#fefce8' }}>
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <div className="bg-white rounded-lg shadow-lg p-8 border-2" style={{ borderColor: '#f2f400' }}>
                <h2 className="text-2xl font-bold mb-4 text-black">Stageplekken Beschikbaar</h2>
                <p className="text-lg text-gray-700 mb-4">
                  Wij zijn lid van SBB en bieden stageplekken voor gemotiveerde studenten die willen leren 
                  in een dynamische IT-omgeving. Bij Workflo krijg je de kans om hands-on ervaring op te doen 
                  met de nieuwste technologieën terwijl je bijdraagt aan echte projecten voor Amsterdamse bedrijven.
                </p>
                <div className="flex items-center justify-center gap-4 mb-4">
                  <Image 
                    src="/images/sbb-logo.png" 
                    alt="SBB Logo" 
                    width={80}
                    height={80}
                    className="object-contain"
                  />
                  <div className="text-left">
                    <p className="font-bold text-black">Erkend Leerbedrijf</p>
                    <p className="text-sm text-gray-600">Samenwerkingsorganisatie Beroepsonderwijs Bedrijfsleven</p>
                  </div>
                </div>
                <p className="text-gray-600 mb-6">
                  Interesse in een stage bij Workflo? Stuur je motivatiebrief en CV naar{' '}
                  <a href="mailto:work@workflo.nl" className="font-semibold hover:opacity-75" style={{ color: '#f2f400' }}>work@workflo.nl</a>
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Application Process */}
        <section className="py-16 bg-gray-100">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-black">Hoe te Solliciteren</h2>
            <div className="max-w-3xl mx-auto">
              <div className="space-y-6">
                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 mt-1" style={{ backgroundColor: '#f2f400' }}>
                    <span className="font-bold text-black">1</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-2 text-black">Stuur Je Sollicitatie</h3>
                    <p className="text-gray-600">
                      Stuur je CV en motivatiebrief naar careers@workflo.it. Vertel ons waarom je 
                      gepassioneerd bent om Amsterdamse bedrijven te helpen slagen met technologie.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 mt-1" style={{ backgroundColor: '#f2f400' }}>
                    <span className="font-bold text-black">2</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-2 text-black">Eerste Gesprek</h3>
                    <p className="text-gray-600">
                      We hebben een gesprek over jouw ervaring, doelen en hoe je aansluit bij 
                      onze waarden. Dit is ook jouw kans om vragen te stellen over de rol.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 mt-1" style={{ backgroundColor: '#f2f400' }}>
                    <span className="font-bold text-black">3</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-2 text-black">Technische Beoordeling</h3>
                    <p className="text-gray-600">
                      Afhankelijk van de rol, maak je mogelijk een praktische opdracht of ontmoet 
                      je ons technische team om je expertise te bespreken.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 mt-1" style={{ backgroundColor: '#f2f400' }}>
                    <span className="font-bold text-black">4</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-2 text-black">Welkom bij het Team</h3>
                    <p className="text-gray-600">
                      Zodra we een aanbod doen en je accepteert, zorgen we voor een uitgebreide 
                      onboarding om je vanaf dag één voor succes klaar te stomen.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-black text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="h-full w-full" style={{
              backgroundImage: `repeating-linear-gradient(45deg, #f2f400, #f2f400 10px, transparent 10px, transparent 20px)`
            }}></div>
          </div>
          <div className="container mx-auto px-4 text-center relative z-10">
            <h2 className="text-4xl font-bold mb-4">Klaar om Je Stempel te Drukken?</h2>
            <p className="text-xl mb-8">Word deel van het team dat Amsterdam IT transformeert</p>
            <a href="mailto:careers@workflo.it?subject=Open Sollicitatie" className="inline-block text-black px-8 py-4 rounded-lg font-bold text-lg hover:opacity-90 transition" style={{ backgroundColor: '#f2f400' }}>
              Start Je Reis Bij Ons
            </a>
          </div>
        </section>
      </main>

      <CareersFooter />
      <DangerTape height="h-3" showText={false} />
    </div>
  )
}