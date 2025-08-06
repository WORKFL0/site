'use client'

import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

export default function CareersPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <main>
        {/* Hero Section */}
        <section className="relative py-20 bg-white">
          <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-yellow-400 via-black to-yellow-400"></div>
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
            {/* Fun Rihanna reference */}
            <p className="text-sm text-gray-500 text-center mt-4 italic">
              Want bij ons draait het om work, work, work, work, work – maar dan met plezier en passie! 🎵
            </p>
          </div>
        </section>

        {/* Why Work With Us */}
        <section className="py-16 bg-gray-100">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-black">Waarom Werken bij Workflo?</h2>
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className="bg-white p-8 rounded-lg shadow-md">
                <div className="w-16 h-16 bg-yellow-400 rounded-lg mb-4 flex items-center justify-center">
                  <span className="text-3xl">🚀</span>
                </div>
                <h3 className="text-xl font-bold mb-3 text-black">Maak Echt Impact</h3>
                <p className="text-gray-600">
                  Elke oplossing die je bouwt helpt Amsterdamse bedrijven direct groeien. Zie hoe 
                  jouw werk bedrijven transformeert en succesvol maakt.
                </p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-md">
                <div className="w-16 h-16 bg-yellow-400 rounded-lg mb-4 flex items-center justify-center">
                  <span className="text-3xl">🎯</span>
                </div>
                <h3 className="text-xl font-bold mb-3 text-black">Professionele Groei</h3>
                <p className="text-gray-600">
                  Werk met cutting-edge technologie en continue leermogelijkheden. 
                  We investeren in jouw ontwikkeling omdat jouw groei ons succes drijft.
                </p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-md">
                <div className="w-16 h-16 bg-yellow-400 rounded-lg mb-4 flex items-center justify-center">
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
              <div className="bg-gray-50 p-12 rounded-lg border-l-4 border-yellow-400 text-center">
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

        {/* Application Process */}
        <section className="py-16 bg-gray-100">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-black">Hoe te Solliciteren</h2>
            <div className="max-w-3xl mx-auto">
              <div className="space-y-6">
                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 bg-yellow-400 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
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
                  <div className="w-10 h-10 bg-yellow-400 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
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
                  <div className="w-10 h-10 bg-yellow-400 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
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
                  <div className="w-10 h-10 bg-yellow-400 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
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
            <a href="mailto:careers@workflo.it?subject=Open Sollicitatie" className="inline-block bg-yellow-400 text-black px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-500 transition">
              Start Je Reis Bij Ons
            </a>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h4 className="font-bold mb-4 text-yellow-400">WORKFLO</h4>
              <p className="text-gray-400">
                Koivistokade 3<br />
                1013AC Amsterdam<br />
                020-30 80 465
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Diensten</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="/diensten/managed-it" className="hover:text-yellow-400">Managed IT</a></li>
                <li><a href="/diensten/cybersecurity" className="hover:text-yellow-400">Cybersecurity</a></li>
                <li><a href="/diensten/cloud" className="hover:text-yellow-400">Cloud Services</a></li>
                <li><a href="/diensten" className="hover:text-yellow-400">Alle diensten →</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Support</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="https://servicedesk.workflo.it/portal" className="hover:text-yellow-400">Support Portal</a></li>
                <li><a href="https://get.teamviewer.com/workflo-support" className="hover:text-yellow-400">Remote Support</a></li>
                <li><a href="/contact" className="hover:text-yellow-400">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Volg Ons</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="https://www.linkedin.com/company/workflo" className="hover:text-yellow-400">LinkedIn</a></li>
                <li><a href="https://x.com/workflo_it" className="hover:text-yellow-400">X (Twitter)</a></li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
            <p>&copy; 2024 Workflo. Alle rechten voorbehouden.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}