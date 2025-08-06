'use client'

import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

export default function ITConsultingPage() {
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
              Strategic IT Guidance That Drives Business Growth
            </h1>
            <p className="text-xl text-gray-700 text-center max-w-3xl mx-auto">
              Stop making IT decisions in the dark. Our strategic consulting transforms your 
              technology from a cost center into a competitive advantage. Get expert guidance 
              that aligns technology investments with business objectives for measurable ROI.
            </p>
          </div>
        </section>

        {/* Problem Statement */}
        <section className="py-16 bg-gray-100">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-black">The Strategic IT Challenge for Amsterdam SMEs</h2>
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className="bg-white p-8 rounded-lg shadow-md text-center">
                <div className="w-16 h-16 bg-red-100 rounded-lg mb-4 mx-auto flex items-center justify-center">
                  <span className="text-3xl">❌</span>
                </div>
                <h3 className="text-xl font-bold mb-3 text-black">Reactive IT Decisions</h3>
                <p className="text-gray-600">
                  Most businesses only think about IT when something breaks. This reactive 
                  approach costs 3x more and limits growth potential.
                </p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-md text-center">
                <div className="w-16 h-16 bg-red-100 rounded-lg mb-4 mx-auto flex items-center justify-center">
                  <span className="text-3xl">💸</span>
                </div>
                <h3 className="text-xl font-bold mb-3 text-black">Misaligned Investments</h3>
                <p className="text-gray-600">
                  Without strategic guidance, companies overspend on unnecessary tech while 
                  underinvesting in solutions that drive growth.
                </p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-md text-center">
                <div className="w-16 h-16 bg-red-100 rounded-lg mb-4 mx-auto flex items-center justify-center">
                  <span className="text-3xl">🎯</span>
                </div>
                <h3 className="text-xl font-bold mb-3 text-black">No Strategic Vision</h3>
                <p className="text-gray-600">
                  Technology decisions made without business context result in systems that 
                  don't scale with company growth.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Approach */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-black">Strategic IT Consulting That Delivers Results</h2>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="bg-gray-50 p-8 rounded-lg">
                <div className="w-12 h-12 bg-yellow-400 rounded-lg mb-4 flex items-center justify-center">
                  <span className="text-2xl">📊</span>
                </div>
                <h3 className="text-xl font-bold mb-3 text-black">Business-First Technology Strategy</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>✓ Technology roadmap aligned with business goals</li>
                  <li>✓ ROI analysis for all IT investments</li>
                  <li>✓ Scalability planning for future growth</li>
                  <li>✓ Competitive advantage through technology</li>
                </ul>
              </div>
              <div className="bg-gray-50 p-8 rounded-lg">
                <div className="w-12 h-12 bg-yellow-400 rounded-lg mb-4 flex items-center justify-center">
                  <span className="text-2xl">🔍</span>
                </div>
                <h3 className="text-xl font-bold mb-3 text-black">Comprehensive IT Assessment</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>✓ Current infrastructure evaluation</li>
                  <li>✓ Security vulnerability assessment</li>
                  <li>✓ Performance and efficiency analysis</li>
                  <li>✓ Cost optimization opportunities</li>
                </ul>
              </div>
              <div className="bg-gray-50 p-8 rounded-lg">
                <div className="w-12 h-12 bg-yellow-400 rounded-lg mb-4 flex items-center justify-center">
                  <span className="text-2xl">🚀</span>
                </div>
                <h3 className="text-xl font-bold mb-3 text-black">Digital Transformation Planning</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>✓ Cloud migration strategy and planning</li>
                  <li>✓ Process automation identification</li>
                  <li>✓ Integration architecture design</li>
                  <li>✓ Change management support</li>
                </ul>
              </div>
              <div className="bg-gray-50 p-8 rounded-lg">
                <div className="w-12 h-12 bg-yellow-400 rounded-lg mb-4 flex items-center justify-center">
                  <span className="text-2xl">🛡️</span>
                </div>
                <h3 className="text-xl font-bold mb-3 text-black">Risk Management & Compliance</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>✓ Cybersecurity strategy development</li>
                  <li>✓ GDPR compliance assessment</li>
                  <li>✓ Business continuity planning</li>
                  <li>✓ IT governance framework</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Consulting Process */}
        <section className="py-16 bg-gray-100">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-black">Our Proven Consulting Process</h2>
            <div className="max-w-3xl mx-auto">
              <div className="space-y-8">
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="font-bold text-black">1</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-black">Discovery & Assessment</h3>
                    <p className="text-gray-600">
                      Deep analysis of your current IT infrastructure, business processes, and 
                      strategic objectives. We identify gaps, opportunities, and quick wins.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="font-bold text-black">2</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-black">Strategic Planning</h3>
                    <p className="text-gray-600">
                      Development of a comprehensive IT strategy aligned with your business goals. 
                      Includes roadmap, timelines, and budget planning.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="font-bold text-black">3</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-black">Implementation Support</h3>
                    <p className="text-gray-600">
                      Hands-on guidance during execution. We help manage vendors, oversee 
                      implementations, and ensure projects deliver expected results.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="font-bold text-black">4</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-black">Ongoing Partnership</h3>
                    <p className="text-gray-600">
                      Regular strategy reviews and updates. Technology evolves fast – we ensure 
                      your strategy remains current and effective.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Results & ROI */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-black">Measurable Results from Strategic IT Consulting</h2>
            <div className="grid md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-12">
              <div className="text-center">
                <div className="text-5xl font-bold text-yellow-400 mb-2">35%</div>
                <p className="text-gray-600">Average reduction in IT costs</p>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold text-yellow-400 mb-2">60%</div>
                <p className="text-gray-600">Faster project delivery times</p>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold text-yellow-400 mb-2">25%</div>
                <p className="text-gray-600">Improvement in team productivity</p>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold text-yellow-400 mb-2">90%</div>
                <p className="text-gray-600">Client satisfaction rate</p>
              </div>
            </div>
            
            <div className="max-w-3xl mx-auto bg-gray-100 p-8 rounded-lg">
              <h3 className="text-xl font-bold mb-4 text-black">Real ROI Example</h3>
              <p className="text-gray-700 mb-4">
                A 50-employee Amsterdam marketing agency engaged us for strategic IT consulting. 
                Through our assessment, we identified cloud migration opportunities and process 
                automation potential.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-bold mb-2 text-red-600">Before Consulting:</h4>
                  <ul className="space-y-1 text-gray-600 text-sm">
                    <li>• €120,000 annual IT costs</li>
                    <li>• 3-4 hours/week IT issues per employee</li>
                    <li>• Limited scalability</li>
                    <li>• Security vulnerabilities</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold mb-2 text-green-600">After Implementation:</h4>
                  <ul className="space-y-1 text-gray-600 text-sm">
                    <li>• €85,000 annual IT costs (29% reduction)</li>
                    <li>• 30 minutes/week IT issues per employee</li>
                    <li>• Cloud-based scalability</li>
                    <li>• Enterprise-grade security</li>
                  </ul>
                </div>
              </div>
              <div className="mt-4 p-3 bg-green-50 rounded">
                <p className="font-bold text-green-700">Result: €35,000 annual savings + 145 hours productivity gain</p>
              </div>
            </div>
          </div>
        </section>

        {/* Industry Expertise */}
        <section className="py-16 bg-gray-100">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-black">Industry-Specific Expertise</h2>
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-bold mb-3 text-black">Professional Services</h3>
                <ul className="space-y-2 text-gray-600 text-sm">
                  <li>✓ Client data protection strategies</li>
                  <li>✓ Collaboration tools optimization</li>
                  <li>✓ Billing and project management integration</li>
                  <li>✓ Remote work enablement</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-bold mb-3 text-black">Financial Services</h3>
                <ul className="space-y-2 text-gray-600 text-sm">
                  <li>✓ Regulatory compliance (AFM, DNB)</li>
                  <li>✓ Advanced security frameworks</li>
                  <li>✓ Risk management systems</li>
                  <li>✓ Digital transformation strategies</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-bold mb-3 text-black">Healthcare</h3>
                <ul className="space-y-2 text-gray-600 text-sm">
                  <li>✓ GDPR and medical data compliance</li>
                  <li>✓ Electronic health records integration</li>
                  <li>✓ Telemedicine infrastructure</li>
                  <li>✓ Backup and recovery planning</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-bold mb-3 text-black">E-commerce</h3>
                <ul className="space-y-2 text-gray-600 text-sm">
                  <li>✓ High-availability infrastructure</li>
                  <li>✓ Payment security and PCI compliance</li>
                  <li>✓ Scalability for traffic spikes</li>
                  <li>✓ Integration platform strategies</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-bold mb-3 text-black">Manufacturing</h3>
                <ul className="space-y-2 text-gray-600 text-sm">
                  <li>✓ ERP system optimization</li>
                  <li>✓ Supply chain integration</li>
                  <li>✓ IoT and automation planning</li>
                  <li>✓ Quality management systems</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-bold mb-3 text-black">Creative Agencies</h3>
                <ul className="space-y-2 text-gray-600 text-sm">
                  <li>✓ High-performance workstations</li>
                  <li>✓ Large file handling and storage</li>
                  <li>✓ Client collaboration platforms</li>
                  <li>✓ Creative software licensing optimization</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonial */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto bg-gray-100 p-8 rounded-lg">
              <p className="text-lg text-gray-700 italic mb-4">
                "Workflo's strategic consulting transformed how we think about technology. Instead 
                of reactive fixes, we now have a clear roadmap that aligns IT investments with our 
                growth plans. Their guidance helped us save 40% on IT costs while significantly 
                improving our capabilities."
              </p>
              <p className="text-gray-600">
                <strong>— Sandra de Vries</strong><br />
                COO, Amsterdam Legal Group
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
            <h2 className="text-4xl font-bold mb-4">Ready to Align Technology with Business Success?</h2>
            <p className="text-xl mb-8">Start with a free strategic IT assessment</p>
            <a href="/tevredenheidscheck" className="inline-block bg-yellow-400 text-black px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-500 transition">
              Schedule Your Strategic IT Consultation
            </a>
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  )
}