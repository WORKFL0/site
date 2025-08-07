'use client'

import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import DangerTape from '@/components/DangerTape'

export default function CybersecurityPage() {
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
              Cybersecurity Amsterdam: Stop Attacks Before They Start
            </h1>
            <div className="bg-red-50 border-l-4 border-red-500 p-6 max-w-3xl mx-auto mb-8">
              <p className="text-lg text-gray-700">
                <strong>🚨 Warning: 39% of Dutch companies were attacked in 2023.</strong> Small businesses are 
                prime targets because criminals know you have less protection. <strong>Every 11 seconds</strong>, 
                another business falls victim to ransomware.
              </p>
              <p className="text-gray-700 mt-3">
                The average attack costs Dutch SMEs <strong>€2.8 million</strong>. Can your business survive that?
              </p>
            </div>
            <p className="text-xl text-gray-700 text-center max-w-3xl mx-auto mb-8">
              Imagine walking into your office tomorrow and finding all your data encrypted by 
              ransomware. Your customer database, financial records, years of work – all held 
              hostage. For many Amsterdam businesses, this nightmare becomes reality.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a href="/tevredenheidscheck" className="inline-block bg-red-600 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-red-700 transition shadow-lg animate-pulse">
                Get Free Security Scan Now →
              </a>
              <p className="text-gray-600">
                <strong>Time is critical:</strong> Unprotected for 30+ days? You&apos;re likely already compromised.
              </p>
            </div>
          </div>
        </section>

        {/* The Threat Landscape */}
        <section className="py-16 bg-gray-100">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-black">The Growing Threat to Amsterdam SMEs</h2>
            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="bg-white p-8 rounded-lg shadow-md text-center">
                <div className="text-4xl font-bold text-red-500 mb-2">€2.8M</div>
                <p className="text-gray-600">Average cost of a data breach for Dutch SMEs</p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-md text-center">
                <div className="text-4xl font-bold text-red-500 mb-2">43%</div>
                <p className="text-gray-600">Of cyberattacks target small businesses</p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-md text-center">
                <div className="text-4xl font-bold text-red-500 mb-2">60%</div>
                <p className="text-gray-600">Of SMEs close within 6 months of a cyberattack</p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Solution */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-black">Multi-Layered Security That Actually Works</h2>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="bg-gray-50 p-8 rounded-lg">
                <div className="w-12 h-12 bg-yellow-400 rounded-lg mb-4 flex items-center justify-center">
                  <span className="text-2xl">🛡️</span>
                </div>
                <h3 className="text-xl font-bold mb-3 text-black">Advanced Threat Protection</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>✓ Next-generation firewall protection</li>
                  <li>✓ Real-time threat detection and response</li>
                  <li>✓ Advanced email security and filtering</li>
                  <li>✓ Endpoint protection for all devices</li>
                </ul>
              </div>
              <div className="bg-gray-50 p-8 rounded-lg">
                <div className="w-12 h-12 bg-yellow-400 rounded-lg mb-4 flex items-center justify-center">
                  <span className="text-2xl">👁️</span>
                </div>
                <h3 className="text-xl font-bold mb-3 text-black">24/7 Security Monitoring</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>✓ Round-the-clock security operations center</li>
                  <li>✓ Immediate threat response and containment</li>
                  <li>✓ Security incident investigation</li>
                  <li>✓ Monthly security reports and briefings</li>
                </ul>
              </div>
              <div className="bg-gray-50 p-8 rounded-lg">
                <div className="w-12 h-12 bg-yellow-400 rounded-lg mb-4 flex items-center justify-center">
                  <span className="text-2xl">🎓</span>
                </div>
                <h3 className="text-xl font-bold mb-3 text-black">Employee Security Training</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>✓ Phishing awareness training</li>
                  <li>✓ Security best practices workshops</li>
                  <li>✓ Regular security testing and drills</li>
                  <li>✓ Custom security policies for your business</li>
                </ul>
              </div>
              <div className="bg-gray-50 p-8 rounded-lg">
                <div className="w-12 h-12 bg-yellow-400 rounded-lg mb-4 flex items-center justify-center">
                  <span className="text-2xl">🔄</span>
                </div>
                <h3 className="text-xl font-bold mb-3 text-black">Rapid Recovery Solutions</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>✓ Automated backup and disaster recovery</li>
                  <li>✓ Guaranteed recovery time objectives</li>
                  <li>✓ Regular recovery testing</li>
                  <li>✓ Business continuity planning</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Our Guarantee */}
        <section className="py-16 bg-yellow-400">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6 text-black">The €50,000 Workflo Security Guarantee</h2>
              <div className="bg-white p-8 rounded-lg shadow-lg mb-6">
                <p className="text-2xl text-black font-bold mb-4">
                  We&apos;re so confident, we put our money where our mouth is:
                </p>
                <p className="text-lg text-gray-700 mb-6">
                  If you&apos;re successfully attacked while under our full protection, 
                  we&apos;ll cover the recovery costs up to <span className="text-3xl font-bold text-black">€50,000</span>
                </p>
                <div className="border-t pt-4">
                  <p className="text-sm text-gray-600">
                    ✓ Includes data recovery • ✓ Business interruption costs • ✓ Legal fees
                  </p>
                </div>
              </div>
              <div className="bg-black text-white p-6 rounded-lg inline-block">
                <p className="text-lg font-bold">No other Amsterdam IT provider dares to offer this guarantee.</p>
                <p className="text-sm mt-2">Ask your current provider if they&apos;ll match it. (Spoiler: They won&apos;t)</p>
              </div>
            </div>
          </div>
        </section>

        {/* Compliance Section */}
        <section className="py-16 bg-gray-100">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-black">GDPR & Compliance Made Simple</h2>
            <div className="max-w-3xl mx-auto">
              <p className="text-lg text-gray-700 mb-8 text-center">
                Dutch businesses face strict GDPR requirements. We ensure your IT infrastructure 
                meets all regulatory requirements, protecting you from fines up to €20 million.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="font-bold mb-3 text-black">What We Handle:</h3>
                  <ul className="space-y-2 text-gray-600 text-sm">
                    <li>✓ Data protection impact assessments</li>
                    <li>✓ Privacy by design implementation</li>
                    <li>✓ Data breach notification procedures</li>
                    <li>✓ Right to erasure compliance</li>
                    <li>✓ Regular compliance audits</li>
                  </ul>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="font-bold mb-3 text-black">Industries We Specialize In:</h3>
                  <ul className="space-y-2 text-gray-600 text-sm">
                    <li>✓ Financial services (AFM compliance)</li>
                    <li>✓ Healthcare (NEN 7510)</li>
                    <li>✓ Legal services (client confidentiality)</li>
                    <li>✓ E-commerce (PCI DSS)</li>
                    <li>✓ Professional services</li>
                  </ul>
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
                &quot;Workflo transformed our compliance nightmare into a competitive advantage. GDPR 
                compliance went from our biggest worry to something we don&apos;t even think about anymore. 
                Their security monitoring caught three attempted breaches last year – all stopped before 
                any damage was done.&quot;
              </p>
              <p className="text-gray-600">
                <strong>— Marcus van den Berg</strong><br />
                CFO, Amsterdam Financial Partners
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
            <div className="max-w-3xl mx-auto">
              <p className="text-red-500 font-bold text-lg mb-4 animate-pulse">⚠️ CRITICAL SECURITY ALERT ⚠️</p>
              <h2 className="text-4xl font-bold mb-4">Every Day You Wait Increases Your Risk by 3%</h2>
              <p className="text-xl mb-4">Right now, hackers could be inside your network. You just don&apos;t know it yet.</p>
              <p className="text-lg mb-8 text-yellow-400">
                <strong>Limited Time:</strong> Free €2,500 Security Audit + Immediate Threat Report
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <a href="/tevredenheidscheck" className="inline-block bg-red-600 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-red-700 transition shadow-lg animate-pulse">
                  Scan My Network Now →
                </a>
                <div className="text-white">
                  <p className="text-sm">Or call our emergency line:</p>
                  <a href="tel:020-3080465" className="text-yellow-400 font-bold text-lg hover:underline">020-30 80 465</a>
                </div>
              </div>
              <p className="text-sm text-gray-400 mt-6">
                ✓ Results in 2 minutes • ✓ No software installation • ✓ 100% confidential
              </p>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer />
      <DangerTape height="h-3" showText={false} />
    </div>
  )
}