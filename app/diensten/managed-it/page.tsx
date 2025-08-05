export default function ManagedITPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <a href="/" className="text-2xl font-bold text-black">WORKFLO</a>
            <nav className="hidden md:flex gap-6">
              <a href="/diensten" className="text-black font-bold">Diensten</a>
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
        {/* Hero Section */}
        <section className="relative py-20 bg-white">
          <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-yellow-400 via-black to-yellow-400"></div>
          <div className="container mx-auto px-4">
            <h1 className="text-5xl font-bold text-center text-black mb-6">
              Transform Your IT from Problem to Profit Driver
            </h1>
            <p className="text-xl text-gray-700 text-center max-w-3xl mx-auto">
              Every hour your team spends fighting technology is an hour not spent growing your business. 
              Amsterdam businesses waste an average of 8% of working hours on IT problems – that&apos;s 
              €19 billion lost annually across the Netherlands. Workflo eliminates this waste.
            </p>
          </div>
        </section>

        {/* What You Get */}
        <section className="py-16 bg-gray-100">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-black">What You Get with Workflo Managed IT</h2>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="bg-white p-8 rounded-lg shadow-md">
                <div className="w-12 h-12 bg-yellow-400 rounded-lg mb-4 flex items-center justify-center">
                  <span className="text-2xl">🛡️</span>
                </div>
                <h3 className="text-xl font-bold mb-3 text-black">24/7 Proactive Monitoring</h3>
                <p className="text-gray-600">
                  Our advanced monitoring systems detect and resolve issues before they impact your business. 
                  Most problems are fixed before you even know they existed.
                </p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-md">
                <div className="w-12 h-12 bg-yellow-400 rounded-lg mb-4 flex items-center justify-center">
                  <span className="text-2xl">⚡</span>
                </div>
                <h3 className="text-xl font-bold mb-3 text-black">4-Hour Response Guarantee</h3>
                <p className="text-gray-600">
                  During business hours, we guarantee response within 4 hours. Critical issues get 
                  immediate attention, keeping your business running smoothly.
                </p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-md">
                <div className="w-12 h-12 bg-yellow-400 rounded-lg mb-4 flex items-center justify-center">
                  <span className="text-2xl">📈</span>
                </div>
                <h3 className="text-xl font-bold mb-3 text-black">Strategic IT Planning</h3>
                <p className="text-gray-600">
                  Your technology roadmap aligned with business goals. We plan upgrades, expansions, 
                  and improvements to support your growth trajectory.
                </p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-md">
                <div className="w-12 h-12 bg-yellow-400 rounded-lg mb-4 flex items-center justify-center">
                  <span className="text-2xl">💰</span>
                </div>
                <h3 className="text-xl font-bold mb-3 text-black">Fixed Monthly Pricing</h3>
                <p className="text-gray-600">
                  No surprises, no hidden fees. One predictable monthly cost covers all your IT needs, 
                  making budgeting simple and stress-free.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Results Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-black">Results You Can Expect</h2>
            <div className="grid md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="text-5xl font-bold text-yellow-400 mb-2">95%</div>
                <p className="text-gray-600">Reduction in IT-related downtime</p>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold text-yellow-400 mb-2">40%</div>
                <p className="text-gray-600">Decrease in IT operational costs</p>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold text-yellow-400 mb-2">60%</div>
                <p className="text-gray-600">Improvement in employee productivity</p>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold text-yellow-400 mb-2">100%</div>
                <p className="text-gray-600">Peace of mind knowing IT just works</p>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-16 bg-gray-100">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-black">How Workflo Managed IT Works</h2>
            <div className="max-w-3xl mx-auto">
              <div className="space-y-8">
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="font-bold text-black">1</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-black">Free IT Assessment</h3>
                    <p className="text-gray-600">
                      We analyze your current IT infrastructure, identify weaknesses, and create a 
                      customized improvement plan tailored to your business needs.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="font-bold text-black">2</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-black">Seamless Onboarding</h3>
                    <p className="text-gray-600">
                      Our team takes over your IT management with zero disruption. We document everything, 
                      implement monitoring, and start optimizing from day one.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="font-bold text-black">3</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-black">Continuous Improvement</h3>
                    <p className="text-gray-600">
                      We proactively maintain, monitor, and improve your systems. Regular reports keep 
                      you informed while we handle all the technical details.
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
                &quot;Moving to Workflo&apos;s managed IT services cut our IT costs by 45% and gave us the 
                flexibility to open our second Amsterdam location without any IT setup headaches. 
                Their proactive approach means we haven&apos;t had a single IT emergency in 18 months.&quot;
              </p>
              <p className="text-gray-600">
                <strong>— Petra Janssen</strong><br />
                CEO, Janssen Architecture
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
            <h2 className="text-4xl font-bold mb-4">Stop Fighting IT Problems. Start Growing Your Business.</h2>
            <p className="text-xl mb-8">Join 200+ Amsterdam businesses that trust Workflo for their IT</p>
            <a href="/tevredenheidscheck" className="inline-block bg-yellow-400 text-black px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-500 transition">
              Schedule Your Free IT Assessment
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