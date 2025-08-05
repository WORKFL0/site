export default function CybersecurityPage() {
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
              Protect Your Business Before Cybercriminals Strike
            </h1>
            <div className="bg-red-50 border-l-4 border-red-500 p-6 max-w-3xl mx-auto mb-8">
              <p className="text-lg text-gray-700">
                <strong>39% of Dutch companies experienced cyberattacks in 2022.</strong> Small businesses are 
                increasingly targeted because criminals know you have less protection. Don&apos;t 
                become another statistic.
              </p>
            </div>
            <p className="text-xl text-gray-700 text-center max-w-3xl mx-auto">
              Imagine walking into your office tomorrow and finding all your data encrypted by 
              ransomware. Your customer database, financial records, years of work – all held 
              hostage. For many Amsterdam businesses, this nightmare becomes reality.
            </p>
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
              <h2 className="text-3xl font-bold mb-6 text-black">The Workflo Security Guarantee</h2>
              <p className="text-xl text-black mb-8">
                We&apos;re so confident in our security, we offer a cybersecurity guarantee: 
                if you&apos;re successfully attacked while under our protection, we&apos;ll cover 
                the recovery costs up to €50,000.
              </p>
              <div className="bg-black text-white p-6 rounded-lg inline-block">
                <p className="text-lg font-bold">No other Amsterdam IT provider offers this level of protection.</p>
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
            <h2 className="text-4xl font-bold mb-4">Don&apos;t Wait Until It&apos;s Too Late</h2>
            <p className="text-xl mb-8">Get your free security assessment and see where you&apos;re vulnerable</p>
            <a href="/tevredenheidscheck" className="inline-block bg-yellow-400 text-black px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-500 transition">
              Get Your Free Security Scan
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