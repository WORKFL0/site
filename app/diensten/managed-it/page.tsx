'use client'

import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import DangerTape from '@/components/DangerTape'

export default function ManagedITPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <DangerTape height="h-3" showText={false} />
      {/* Header */}
      <Header />

      <main>
        {/* Hero Section */}
        <section className="relative py-20 bg-white">
          <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-yellow-400 via-black to-yellow-400"></div>
          <div className="container mx-auto px-4">
            <h1 className="text-5xl font-bold text-center text-black mb-6">
              Managed IT Services Amsterdam: Zet Problemen Om in Winst
            </h1>
            <p className="text-xl text-gray-700 text-center max-w-3xl mx-auto mb-6">
              Elk uur dat uw team vecht met technologie is een uur niet besteed aan groei van uw bedrijf. 
              Amsterdamse bedrijven verspillen gemiddeld 8% van werktijd aan IT-problemen – dat is 
              €19 miljard verlies jaarlijks in heel Nederland. <strong>Workflo elimineert deze verspilling volledig.</strong>
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a href="/tevredenheidscheck" className="inline-block bg-yellow-400 text-black px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-500 transition shadow-lg">
                Bereken Uw IT-Besparing →
              </a>
              <a href="#pricing" className="inline-block bg-white text-black border-2 border-black px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition">
                Bekijk Transparante Prijzen
              </a>
            </div>
          </div>
        </section>

        {/* What You Get */}
        <section className="py-16 bg-gray-100">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-black">Wat U Krijgt met Workflo Managed IT</h2>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="bg-white p-8 rounded-lg shadow-md">
                <div className="w-12 h-12 bg-yellow-400 rounded-lg mb-4 flex items-center justify-center">
                  <span className="text-2xl">🛡️</span>
                </div>
                <h3 className="text-xl font-bold mb-3 text-black">24/7 Proactieve Monitoring</h3>
                <p className="text-gray-600">
                  Onze geavanceerde AI-gestuurde monitoring detecteert en lost 94% van problemen op voordat ze impact hebben op uw bedrijf. 
                  Uw team blijft productief terwijl wij problemen geruisloos op de achtergrond oplossen.
                </p>
                <p className="text-sm text-yellow-600 mt-3 font-medium">
                  Gemiddelde detectietijd: 47 seconden
                </p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-md">
                <div className="w-12 h-12 bg-yellow-400 rounded-lg mb-4 flex items-center justify-center">
                  <span className="text-2xl">⚡</span>
                </div>
                <h3 className="text-xl font-bold mb-3 text-black">4-Uur Reactiegarantie</h3>
                <p className="text-gray-600">
                  Tijdens kantooruren garanderen we reactie binnen 4 uur. Kritieke problemen krijgen 
                  onmiddellijke aandacht met 15-minuten noodrespons.
                </p>
                <p className="text-sm text-yellow-600 mt-3 font-medium">
                  Werkelijk gemiddelde: 1,7 uur
                </p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-md">
                <div className="w-12 h-12 bg-yellow-400 rounded-lg mb-4 flex items-center justify-center">
                  <span className="text-2xl">📈</span>
                </div>
                <h3 className="text-xl font-bold mb-3 text-black">Strategische IT-Planning</h3>
                <p className="text-gray-600">
                  Kwartaalreviews zorgen ervoor dat uw technologie-roadmap aansluit bij groeistrategie. 
                  We plannen proactief upgrades, voorkomen knelpunten en schalen mee met u.
                </p>
                <p className="text-sm text-yellow-600 mt-3 font-medium">
                  ROI op strategische planning: 3,2x
                </p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-md">
                <div className="w-12 h-12 bg-yellow-400 rounded-lg mb-4 flex items-center justify-center">
                  <span className="text-2xl">💰</span>
                </div>
                <h3 className="text-xl font-bold mb-3 text-black">Vaste Maandelijkse Prijzen</h3>
                <p className="text-gray-600">
                  Geen verrassingen, geen verborgen kosten. Één voorspelbare maandprijs dekt onbeperkte support, 
                  alle monitoring en strategische planning. Budgetteer met vertrouwen.
                </p>
                <p className="text-sm text-yellow-600 mt-3 font-medium">
                  Gemiddelde besparing: €1.850/maand
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Results Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-black">Resultaten Die U Kunt Verwachten</h2>
            <div className="grid md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="text-5xl font-bold text-yellow-400 mb-2">95%</div>
                <p className="text-gray-600">Reductie in IT-gerelateerde uitval</p>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold text-yellow-400 mb-2">40%</div>
                <p className="text-gray-600">Verlaging van IT-operationele kosten</p>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold text-yellow-400 mb-2">60%</div>
                <p className="text-gray-600">Verbetering in medewerkersproductiviteit</p>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold text-yellow-400 mb-2">100%</div>
                <p className="text-gray-600">Gemoedsrust wetende dat IT gewoon werkt</p>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-16 bg-gray-100">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-black">Hoe Workflo Managed IT Werkt</h2>
            <div className="max-w-3xl mx-auto">
              <div className="space-y-8">
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="font-bold text-black">1</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-black">Gratis IT-Assessment</h3>
                    <p className="text-gray-600">
                      We analyseren uw huidige IT-infrastructuur, identificeren zwakke punten en creëren een 
                      op maat gemaakt verbeterplan afgestemd op uw bedrijfsbehoeften.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="font-bold text-black">2</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-black">Naadloze Onboarding</h3>
                    <p className="text-gray-600">
                      Ons team neemt uw IT-beheer over zonder verstoring. We documenteren alles, 
                      implementeren monitoring en beginnen direct met optimaliseren.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="font-bold text-black">3</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-black">Continue Verbetering</h3>
                    <p className="text-gray-600">
                      We onderhouden, monitoren en verbeteren uw systemen proactief. Regelmatige rapportages houden 
                      u geïnformeerd terwijl wij alle technische details afhandelen.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonial */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto bg-gray-100 p-8 rounded-lg">
              <p className="text-lg text-gray-700 italic mb-4">
                &quot;De overstap naar Workflo&apos;s managed IT-diensten verminderde onze IT-kosten met 45% en gaf ons de 
                flexibiliteit om onze tweede Amsterdam-locatie te openen zonder IT-hoofdpijn. 
                Hun proactieve aanpak betekent dat we al 18 maanden geen enkele IT-noodsituatie hebben gehad.&quot;
              </p>
              <p className="text-gray-600">
                <strong>— Petra Janssen</strong><br />
                CEO, Janssen Architectuur
              </p>
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
            <h2 className="text-4xl font-bold mb-4">Stop Met Vechten Tegen IT-Problemen. Begin Met Groeien Van Uw Bedrijf.</h2>
            <p className="text-xl mb-8">Sluit u aan bij 100+ Amsterdamse bedrijven die Workflo vertrouwen voor hun IT</p>
            <a href="/tevredenheidscheck" className="inline-block bg-yellow-400 text-black px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-500 transition">
              Plan Uw Gratis IT-Assessment
            </a>
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer />
      <DangerTape height="h-3" showText={false} />
    </div>
  )
}