export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header with proper Workflo branding */}
      <header className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold text-black">WORKFLO</h1>
            <nav className="hidden md:flex gap-6">
              <a href="/diensten" className="text-gray-700 hover:text-black">Diensten</a>
              <a href="/over-ons" className="text-gray-700 hover:text-black">Over Ons</a>
              <a href="/contact" className="text-gray-700 hover:text-black">Contact</a>
              <a href="/tevredenheidscheck" className="bg-yellow-400 text-black px-4 py-2 rounded font-bold hover:bg-yellow-500">
                IT Health Check
              </a>
            </nav>
          </div>
        </div>
      </header>
      
      <main>
        {/* Hero Section with Professional Copy */}
        <section className="relative py-20 bg-white overflow-hidden">
          {/* Warning tape decoration */}
          <div className="absolute top-0 left-0 right-0 h-8 overflow-hidden">
            <div className="h-full w-[200%] animate-scroll" style={{
              backgroundImage: `repeating-linear-gradient(
                45deg,
                #f2f400,
                #f2f400 20px,
                #000000 20px,
                #000000 40px
              )`
            }}></div>
          </div>
          
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-5xl md:text-6xl font-bold text-black mb-6 leading-tight">
                Stop Worrying About IT Problems – 
                <span className="block text-yellow-400">Start Growing Your Amsterdam Business</span>
              </h2>
              <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
                Amsterdam SMEs trust Workflo to transform their IT from a cost center into a growth engine. 
                Join 200+ local businesses who sleep better knowing their technology just works.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                No more frustrated employees. No more weekend emergencies. No more choosing between 
                growth and IT costs. We handle everything so you can focus on what matters most – 
                building your business.
              </p>
              <a href="/tevredenheidscheck" className="inline-block bg-yellow-400 text-black px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-500 transition shadow-lg">
                Get Your Free IT Health Check Today
              </a>
              
              {/* Trust indicators */}
              <div className="mt-12 grid grid-cols-3 gap-8 max-w-2xl mx-auto">
                <div className="text-center">
                  <div className="text-3xl font-bold text-yellow-400">99.9%</div>
                  <div className="text-sm text-gray-600">Uptime Guarantee</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-yellow-400">4 hrs</div>
                  <div className="text-sm text-gray-600">Response Time</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-yellow-400">200+</div>
                  <div className="text-sm text-gray-600">Amsterdam SMEs</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Value Propositions */}
        <section className="py-16 bg-gray-100">
          <div className="container mx-auto px-4">
            <h3 className="text-3xl font-bold text-center mb-12 text-black">Why Amsterdam Businesses Choose Workflo</h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-md">
                <h4 className="text-xl font-bold mb-4 text-black">Immediate Impact</h4>
                <ul className="space-y-2 text-gray-700">
                  <li>✓ 99.9% uptime guarantee within 90 days</li>
                  <li>✓ IT issues resolved in under 4 hours</li>
                  <li>✓ Zero weekend emergencies after month 1</li>
                </ul>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-md">
                <h4 className="text-xl font-bold mb-4 text-black">Predictable Growth</h4>
                <ul className="space-y-2 text-gray-700">
                  <li>✓ Fixed monthly costs (no surprise bills)</li>
                  <li>✓ Technology that scales with your business</li>
                  <li>✓ Strategic IT planning aligned with goals</li>
                </ul>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-md">
                <h4 className="text-xl font-bold mb-4 text-black">Local Expertise</h4>
                <ul className="space-y-2 text-gray-700">
                  <li>✓ Amsterdam-based team, Dutch business culture</li>
                  <li>✓ GDPR compliance built into everything</li>
                  <li>✓ Same-day onsite support when needed</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* All 8 Services */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h3 className="text-3xl font-bold text-center mb-12 text-black">Complete IT Solutions for Growing Businesses</h3>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="bg-gray-50 p-6 rounded-lg border-2 border-transparent hover:border-yellow-400 transition">
                <h4 className="text-lg font-bold mb-2 text-black">Managed IT Services</h4>
                <p className="text-gray-600 text-sm">24/7 monitoring, helpdesk support, and strategic IT management</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg border-2 border-transparent hover:border-yellow-400 transition">
                <h4 className="text-lg font-bold mb-2 text-black">Cybersecurity</h4>
                <p className="text-gray-600 text-sm">Advanced threat protection and security compliance</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg border-2 border-transparent hover:border-yellow-400 transition">
                <h4 className="text-lg font-bold mb-2 text-black">Cloud Services</h4>
                <p className="text-gray-600 text-sm">Microsoft 365, cloud migration, and backup solutions</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg border-2 border-transparent hover:border-yellow-400 transition">
                <h4 className="text-lg font-bold mb-2 text-black">IT Consulting</h4>
                <p className="text-gray-600 text-sm">Strategic technology planning and digital transformation</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg border-2 border-transparent hover:border-yellow-400 transition">
                <h4 className="text-lg font-bold mb-2 text-black">Project Management</h4>
                <p className="text-gray-600 text-sm">IT project planning and implementation</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg border-2 border-transparent hover:border-yellow-400 transition">
                <h4 className="text-lg font-bold mb-2 text-black">Network Monitoring</h4>
                <p className="text-gray-600 text-sm">Proactive network management and optimization</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg border-2 border-transparent hover:border-yellow-400 transition">
                <h4 className="text-lg font-bold mb-2 text-black">Audio Visual</h4>
                <p className="text-gray-600 text-sm">Meeting room technology and AV solutions</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg border-2 border-transparent hover:border-yellow-400 transition">
                <h4 className="text-lg font-bold mb-2 text-black">Mobile Device Management</h4>
                <p className="text-gray-600 text-sm">Secure mobile device and app management</p>
              </div>
            </div>
            <div className="text-center mt-8">
              <a href="/diensten" className="text-yellow-400 font-bold hover:text-yellow-500">
                Explore All Services →
              </a>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h3 className="text-3xl font-bold text-center mb-12 text-black">Meet Your IT Partners</h3>
            <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
              Our Amsterdam-based team combines deep technical expertise with a genuine commitment to your business success.
            </p>
            <div className="grid md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="w-32 h-32 bg-yellow-400 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-4xl font-bold text-black">F</span>
                </div>
                <h4 className="text-lg font-bold text-black mb-1">Florian</h4>
                <p className="text-gray-600 text-sm">Founder & CEO</p>
                <p className="text-gray-500 text-xs mt-2">Strategic IT Leadership</p>
              </div>
              <div className="text-center">
                <div className="w-32 h-32 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-4xl font-bold text-black">NH</span>
                </div>
                <h4 className="text-lg font-bold text-black mb-1">Nam-Hoon</h4>
                <p className="text-gray-600 text-sm">Technical Director</p>
                <p className="text-gray-500 text-xs mt-2">Infrastructure & Security</p>
              </div>
              <div className="text-center">
                <div className="w-32 h-32 bg-yellow-400 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-4xl font-bold text-black">M</span>
                </div>
                <h4 className="text-lg font-bold text-black mb-1">Mas</h4>
                <p className="text-gray-600 text-sm">Operations Manager</p>
                <p className="text-gray-500 text-xs mt-2">Service Delivery Excellence</p>
              </div>
              <div className="text-center">
                <div className="w-32 h-32 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-4xl font-bold text-black">M</span>
                </div>
                <h4 className="text-lg font-bold text-black mb-1">Marcello</h4>
                <p className="text-gray-600 text-sm">Solutions Architect</p>
                <p className="text-gray-500 text-xs mt-2">Cloud & Innovation</p>
              </div>
            </div>
            <div className="text-center mt-12">
              <a href="/over-ons" className="text-yellow-400 font-bold hover:text-yellow-500">
                Learn More About Our Team →
              </a>
            </div>
          </div>
        </section>

        {/* Client Logos */}
        <section className="py-16 bg-gray-100">
          <div className="container mx-auto px-4">
            <h3 className="text-3xl font-bold text-center mb-12 text-black">Trusted by Amsterdam&apos;s Leading Businesses</h3>
            <div className="text-center text-gray-600 mb-8">
              <p className="text-lg mb-4">Current clients include:</p>
              <p className="max-w-4xl mx-auto">
                Aescap • Hunt Amsterdam • Rademakkers • &apos;t idee! Tonko • DMC Makelaars • 
                van der Eerde hypotheken • Klaar • Dag en Nacht • Voice Industries • 
                Schulte en Lestrade • Duwtje • Highwood • Jager Notarissen • PR Mansion • 
                Podimo • Havas Media Network • Winix • DoctorFeelgood • All Response Media • 
                WorkStuff • Open Boek • Bijvoorkeur • John Doornik Casting • Huisart Elings • 
                BLC Financeview • Koschuch
              </p>
            </div>
          </div>
        </section>

        {/* CTA Section with Warning Tape */}
        <section className="relative py-20 bg-black text-white overflow-hidden">
          {/* Warning tape borders */}
          <div className="absolute top-0 left-0 right-0 h-8 overflow-hidden">
            <div className="h-full w-[200%] animate-scroll" style={{
              backgroundImage: `repeating-linear-gradient(
                -45deg,
                #f2f400,
                #f2f400 20px,
                #000000 20px,
                #000000 40px
              )`
            }}></div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-8 overflow-hidden">
            <div className="h-full w-[200%] animate-scroll" style={{
              backgroundImage: `repeating-linear-gradient(
                45deg,
                #f2f400,
                #f2f400 20px,
                #000000 20px,
                #000000 40px
              )`
            }}></div>
          </div>
          
          <div className="container mx-auto px-4 text-center relative z-10">
            <h2 className="text-4xl font-bold mb-4">Ready to Transform Your IT?</h2>
            <p className="text-xl mb-8">Start with our free IT Health Check and see how much you could save</p>
            <a href="/tevredenheidscheck" className="inline-block bg-yellow-400 text-black px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-500 transition">
              Start Your Free Assessment
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