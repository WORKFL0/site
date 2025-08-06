'use client'

import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

export default function ManagedITPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <Header />

      <main>
        {/* Hero Section */}
        <section className="relative py-20 bg-white">
          <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-yellow-400 via-black to-yellow-400"></div>
          <div className="container mx-auto px-4">
            <h1 className="text-5xl font-bold text-center text-black mb-6">
              Managed IT Services Amsterdam: Transform Problems into Profit
            </h1>
            <p className="text-xl text-gray-700 text-center max-w-3xl mx-auto mb-6">
              Every hour your team spends fighting technology is an hour not spent growing your business. 
              Amsterdam businesses waste an average of 8% of working hours on IT problems – that&apos;s 
              €19 billion lost annually across the Netherlands. <strong>Workflo eliminates this waste completely.</strong>
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a href="/tevredenheidscheck" className="inline-block bg-yellow-400 text-black px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-500 transition shadow-lg">
                Calculate Your IT Savings →
              </a>
              <a href="#pricing" className="inline-block bg-white text-black border-2 border-black px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition">
                View Transparent Pricing
              </a>
            </div>
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
                  Our advanced AI-powered monitoring detects and resolves 94% of issues before they impact your business. 
                  Your team stays productive while we handle problems silently in the background.
                </p>
                <p className="text-sm text-yellow-600 mt-3 font-medium">
                  Average detection time: 47 seconds
                </p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-md">
                <div className="w-12 h-12 bg-yellow-400 rounded-lg mb-4 flex items-center justify-center">
                  <span className="text-2xl">⚡</span>
                </div>
                <h3 className="text-xl font-bold mb-3 text-black">4-Hour Response Guarantee</h3>
                <p className="text-gray-600">
                  During business hours, we guarantee response within 4 hours. Critical issues get 
                  immediate attention with 15-minute emergency response.
                </p>
                <p className="text-sm text-yellow-600 mt-3 font-medium">
                  Actual average: 1.7 hours
                </p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-md">
                <div className="w-12 h-12 bg-yellow-400 rounded-lg mb-4 flex items-center justify-center">
                  <span className="text-2xl">📈</span>
                </div>
                <h3 className="text-xl font-bold mb-3 text-black">Strategic IT Planning</h3>
                <p className="text-gray-600">
                  Quarterly business reviews ensure your technology roadmap aligns with growth goals. 
                  We proactively plan upgrades, prevent bottlenecks, and scale with you.
                </p>
                <p className="text-sm text-yellow-600 mt-3 font-medium">
                  ROI on strategic planning: 3.2x
                </p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-md">
                <div className="w-12 h-12 bg-yellow-400 rounded-lg mb-4 flex items-center justify-center">
                  <span className="text-2xl">💰</span>
                </div>
                <h3 className="text-xl font-bold mb-3 text-black">Fixed Monthly Pricing</h3>
                <p className="text-gray-600">
                  No surprises, no hidden fees. One predictable monthly cost covers unlimited support, 
                  all monitoring, and strategic planning. Budget with confidence.
                </p>
                <p className="text-sm text-yellow-600 mt-3 font-medium">
                  Average savings: €1,850/month
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
            <p className="text-xl mb-8">Join 100+ Amsterdam businesses that trust Workflo for their IT</p>
            <a href="/tevredenheidscheck" className="inline-block bg-yellow-400 text-black px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-500 transition">
              Schedule Your Free IT Assessment
            </a>
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  )
}