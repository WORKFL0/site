'use client'

// OLD IMPORTS CAUSING CRASHES - REPLACED WITH STATIC VERSIONS
// import Header from '@/components/layout/Header'
// import Footer from '@/components/layout/Footer'
// import DangerTape from '@/components/DangerTape'

import StaticHeader from '@/components/StaticHeader'
import StaticFooter from '@/components/StaticFooter'
import StaticDangerTape from '@/components/StaticDangerTape'

export default function CloudServicesPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <StaticDangerTape />
      {/* Header */}
      <StaticHeader />

      <main>
        {/* Hero Section */}
        <section className="relative py-20 bg-white">
          <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-yellow-400 via-black to-yellow-400"></div>
          <div className="container mx-auto px-4">
            <h1 className="text-5xl font-bold text-center text-black mb-6">
              Scale Your Business Without Scaling Your IT Headaches
            </h1>
            <p className="text-xl text-gray-700 text-center max-w-3xl mx-auto">
              Growing Amsterdam businesses face a choice: expensive on-premise infrastructure 
              that quickly becomes outdated, or cloud solutions that grow with you. Smart 
              business owners choose the cloud.
            </p>
          </div>
        </section>

        {/* Benefits Grid */}
        <section className="py-16 bg-gray-100">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-black">Why Amsterdam Businesses Move to the Cloud</h2>
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className="bg-white p-8 rounded-lg shadow-md">
                <div className="w-16 h-16 bg-yellow-400 rounded-lg mb-4 flex items-center justify-center">
                  <span className="text-3xl">🌍</span>
                </div>
                <h3 className="text-xl font-bold mb-3 text-black">Work From Anywhere</h3>
                <p className="text-gray-600">
                  Access your data and applications securely from any location. Perfect for hybrid 
                  work and multiple office locations across Amsterdam.
                </p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-md">
                <div className="w-16 h-16 bg-yellow-400 rounded-lg mb-4 flex items-center justify-center">
                  <span className="text-3xl">💰</span>
                </div>
                <h3 className="text-xl font-bold mb-3 text-black">Pay Only What You Use</h3>
                <p className="text-gray-600">
                  No more over-provisioning servers. Scale up during busy periods, scale down to 
                  save costs. Perfect for seasonal Amsterdam businesses.
                </p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-md">
                <div className="w-16 h-16 bg-yellow-400 rounded-lg mb-4 flex items-center justify-center">
                  <span className="text-3xl">🛡️</span>
                </div>
                <h3 className="text-xl font-bold mb-3 text-black">Enterprise-Grade Security</h3>
                <p className="text-gray-600">
                  Microsoft and Google spend billions on security. Get the same protection as 
                  Fortune 500 companies at SME prices.
                </p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-md">
                <div className="w-16 h-16 bg-yellow-400 rounded-lg mb-4 flex items-center justify-center">
                  <span className="text-3xl">⚡</span>
                </div>
                <h3 className="text-xl font-bold mb-3 text-black">Lightning-Fast Deployment</h3>
                <p className="text-gray-600">
                  Need 10 new workstations for your new Amsterdam office? Set them up in hours, 
                  not weeks. No hardware procurement delays.
                </p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-md">
                <div className="w-16 h-16 bg-yellow-400 rounded-lg mb-4 flex items-center justify-center">
                  <span className="text-3xl">🔄</span>
                </div>
                <h3 className="text-xl font-bold mb-3 text-black">Automatic Everything</h3>
                <p className="text-gray-600">
                  Updates, backups, and maintenance happen automatically. Your team stays 
                  productive while we handle the technical details.
                </p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-md">
                <div className="w-16 h-16 bg-yellow-400 rounded-lg mb-4 flex items-center justify-center">
                  <span className="text-3xl">📈</span>
                </div>
                <h3 className="text-xl font-bold mb-3 text-black">Infinite Scalability</h3>
                <p className="text-gray-600">
                  From 5 to 500 employees, the cloud grows with you. No more IT infrastructure 
                  holding back your Amsterdam business growth.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-black">Complete Cloud Solutions for Every Need</h2>
            <div className="max-w-4xl mx-auto space-y-8">
              <div className="bg-gray-50 p-8 rounded-lg">
                <h3 className="text-2xl font-bold mb-4 text-black">Microsoft 365 & Productivity</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <ul className="space-y-2 text-gray-600">
                    <li>✓ Email, calendar, and contacts</li>
                    <li>✓ Teams for collaboration</li>
                    <li>✓ SharePoint for file sharing</li>
                    <li>✓ OneDrive for personal storage</li>
                  </ul>
                  <ul className="space-y-2 text-gray-600">
                    <li>✓ Advanced security features</li>
                    <li>✓ Mobile device management</li>
                    <li>✓ Compliance tools (GDPR ready)</li>
                    <li>✓ 24/7 Workflo support included</li>
                  </ul>
                </div>
              </div>
              
              <div className="bg-gray-50 p-8 rounded-lg">
                <h3 className="text-2xl font-bold mb-4 text-black">Cloud Infrastructure (IaaS)</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <ul className="space-y-2 text-gray-600">
                    <li>✓ Virtual servers on-demand</li>
                    <li>✓ Secure networking</li>
                    <li>✓ Load balancing</li>
                    <li>✓ Disaster recovery built-in</li>
                  </ul>
                  <ul className="space-y-2 text-gray-600">
                    <li>✓ 99.99% uptime SLA</li>
                    <li>✓ Amsterdam data centers</li>
                    <li>✓ GDPR-compliant storage</li>
                    <li>✓ 24/7 monitoring included</li>
                  </ul>
                </div>
              </div>

              <div className="bg-gray-50 p-8 rounded-lg">
                <h3 className="text-2xl font-bold mb-4 text-black">Backup & Disaster Recovery</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <ul className="space-y-2 text-gray-600">
                    <li>✓ Automated daily backups</li>
                    <li>✓ 30-day retention standard</li>
                    <li>✓ Instant file recovery</li>
                    <li>✓ Ransomware protection</li>
                  </ul>
                  <ul className="space-y-2 text-gray-600">
                    <li>✓ Full system recovery</li>
                    <li>✓ Regular recovery testing</li>
                    <li>✓ Compliance reporting</li>
                    <li>✓ Zero data loss guarantee</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ROI Section */}
        <section className="py-16 bg-gray-100">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-black">The Cloud ROI for Amsterdam Businesses</h2>
            <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-lg">
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div>
                  <h3 className="text-xl font-bold mb-4 text-red-600">On-Premise Costs (Hidden)</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>❌ Server hardware: €15,000-50,000</li>
                    <li>❌ Licensing: €5,000-20,000/year</li>
                    <li>❌ Maintenance: €10,000/year</li>
                    <li>❌ Energy costs: €3,000/year</li>
                    <li>❌ IT staff overtime: €15,000/year</li>
                    <li>❌ Downtime losses: €25,000/year</li>
                  </ul>
                  <div className="mt-4 p-3 bg-red-50 rounded">
                    <p className="font-bold text-red-700">Total: €70,000+ first year</p>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-4 text-green-600">Cloud with Workflo</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>✅ No hardware investment</li>
                    <li>✅ Licensing included</li>
                    <li>✅ Maintenance included</li>
                    <li>✅ Energy costs: €0</li>
                    <li>✅ 24/7 support included</li>
                    <li>✅ 99.9% uptime guaranteed</li>
                  </ul>
                  <div className="mt-4 p-3 bg-green-50 rounded">
                    <p className="font-bold text-green-700">Total: €25,000/year fixed</p>
                  </div>
                </div>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-black">Save 64% in Year One</p>
                <p className="text-gray-600 mt-2">Plus gain flexibility, security, and peace of mind</p>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonial */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto bg-gray-100 p-8 rounded-lg">
              <p className="text-lg text-gray-700 italic mb-4">
                &quot;Moving to the cloud with Workflo cut our IT costs by 45% and gave us the flexibility 
                to open our second Amsterdam location without any IT setup headaches. What used to take 
                weeks now takes hours. The best part? Everything just works.&quot;
              </p>
              <p className="text-gray-600">
                <strong>— Petra Janssen</strong><br />
                CEO, Janssen Architecture
              </p>
            </div>
          </div>
        </section>

        {/* Migration Process */}
        <section className="py-16 bg-gray-100">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-black">Zero-Disruption Cloud Migration</h2>
            <div className="max-w-3xl mx-auto">
              <div className="space-y-6">
                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 bg-yellow-400 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="font-bold text-black">1</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-2 text-black">Free Cloud Assessment</h3>
                    <p className="text-gray-600">
                      We analyze your current infrastructure and create a custom migration plan that 
                      minimizes disruption and maximizes ROI.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 bg-yellow-400 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="font-bold text-black">2</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-2 text-black">Phased Migration</h3>
                    <p className="text-gray-600">
                      We move your systems in phases, ensuring each component works perfectly before 
                      proceeding. Your business never stops.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 bg-yellow-400 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="font-bold text-black">3</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-2 text-black">Training & Support</h3>
                    <p className="text-gray-600">
                      Your team gets comprehensive training. Plus, our 24/7 support ensures any 
                      questions are answered immediately.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 bg-yellow-400 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="font-bold text-black">4</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-2 text-black">Continuous Optimization</h3>
                    <p className="text-gray-600">
                      Post-migration, we continuously monitor and optimize your cloud environment for 
                      performance and cost-efficiency.
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
            <h2 className="text-4xl font-bold mb-4">Ready to Join the Cloud Revolution?</h2>
            <p className="text-xl mb-8">See how much you could save with our free cloud assessment</p>
            <a href="/tevredenheidscheck" className="inline-block bg-yellow-400 text-black px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-500 transition">
              Schedule Your Cloud Strategy Session
            </a>
          </div>
        </section>
      </main>

      {/* Footer */}
      <StaticFooter />
      <StaticDangerTape />
    </div>
  )
}