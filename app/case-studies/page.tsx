export default function CaseStudiesPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <a href="/" className="text-2xl font-bold text-black">WORKFLO</a>
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

      <main className="py-20">
        {/* Hero Section */}
        <section className="relative mb-16">
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
          <div className="container mx-auto px-4 pt-12">
            <h1 className="text-5xl font-bold text-center text-black mb-6">
              Success Stories from Amsterdam Businesses
            </h1>
            <p className="text-xl text-gray-700 text-center max-w-3xl mx-auto">
              See how we&apos;ve helped Amsterdam SMEs transform their IT from a burden into a competitive advantage
            </p>
          </div>
        </section>

        {/* Case Studies Grid */}
        <section className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Case Study 1 */}
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="mb-6">
                <span className="bg-yellow-400 text-black px-3 py-1 rounded text-sm font-bold">Financial Services</span>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-black">Amsterdam Financial Partners</h3>
              <div className="space-y-4 text-gray-600">
                <p><strong>Challenge:</strong> Struggling with GDPR compliance and frequent security concerns while managing sensitive financial data.</p>
                <p><strong>Solution:</strong> Implemented comprehensive cybersecurity suite with 24/7 monitoring and automated compliance reporting.</p>
                <p><strong>Results:</strong></p>
                <ul className="list-disc list-inside space-y-1">
                  <li>100% GDPR compliance achieved</li>
                  <li>3 attempted breaches prevented</li>
                  <li>45% reduction in IT costs</li>
                  <li>Zero security incidents in 18 months</li>
                </ul>
              </div>
              <div className="mt-6 p-4 bg-gray-100 rounded">
                <p className="italic text-gray-700">
                  &quot;Workflo transformed our compliance nightmare into a competitive advantage. We now use our security certifications to win new clients.&quot;
                </p>
                <p className="text-sm text-gray-600 mt-2">— Marcus van den Berg, CFO</p>
              </div>
            </div>

            {/* Case Study 2 */}
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="mb-6">
                <span className="bg-yellow-400 text-black px-3 py-1 rounded text-sm font-bold">Architecture</span>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-black">Janssen Architecture</h3>
              <div className="space-y-4 text-gray-600">
                <p><strong>Challenge:</strong> Needed to open second Amsterdam location but worried about IT setup costs and complexity.</p>
                <p><strong>Solution:</strong> Migrated to cloud infrastructure with unified management across both locations.</p>
                <p><strong>Results:</strong></p>
                <ul className="list-disc list-inside space-y-1">
                  <li>Second office operational in 3 days</li>
                  <li>45% reduction in IT costs</li>
                  <li>Seamless file sharing between offices</li>
                  <li>Work from anywhere capability</li>
                </ul>
              </div>
              <div className="mt-6 p-4 bg-gray-100 rounded">
                <p className="italic text-gray-700">
                  &quot;What would have been a 6-week IT project became a 3-day setup. Our team didn&apos;t miss a beat.&quot;
                </p>
                <p className="text-sm text-gray-600 mt-2">— Petra Janssen, CEO</p>
              </div>
            </div>

            {/* Case Study 3 */}
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="mb-6">
                <span className="bg-yellow-400 text-black px-3 py-1 rounded text-sm font-bold">Creative Agency</span>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-black">Studio Vondelpark</h3>
              <div className="space-y-4 text-gray-600">
                <p><strong>Challenge:</strong> Creative team spending more time troubleshooting IT than creating client work.</p>
                <p><strong>Solution:</strong> Implemented managed IT services with proactive monitoring and same-day support.</p>
                <p><strong>Results:</strong></p>
                <ul className="list-disc list-inside space-y-1">
                  <li>95% reduction in IT issues</li>
                  <li>8 hours/week saved per employee</li>
                  <li>20% increase in billable hours</li>
                  <li>Zero missed client deadlines</li>
                </ul>
              </div>
              <div className="mt-6 p-4 bg-gray-100 rounded">
                <p className="italic text-gray-700">
                  &quot;Our creatives can finally focus on what they do best. IT problems are a thing of the past.&quot;
                </p>
                <p className="text-sm text-gray-600 mt-2">— Sophie de Vries, Creative Director</p>
              </div>
            </div>

            {/* Case Study 4 */}
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="mb-6">
                <span className="bg-yellow-400 text-black px-3 py-1 rounded text-sm font-bold">Healthcare</span>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-black">Bakker Medical Practice</h3>
              <div className="space-y-4 text-gray-600">
                <p><strong>Challenge:</strong> Patient data security and NEN 7510 healthcare compliance requirements.</p>
                <p><strong>Solution:</strong> Healthcare-specific security implementation with encrypted backups and access controls.</p>
                <p><strong>Results:</strong></p>
                <ul className="list-disc list-inside space-y-1">
                  <li>Full NEN 7510 compliance</li>
                  <li>Automated encrypted backups</li>
                  <li>Zero data breaches</li>
                  <li>30% time savings on admin tasks</li>
                </ul>
              </div>
              <div className="mt-6 p-4 bg-gray-100 rounded">
                <p className="italic text-gray-700">
                  &quot;Patient data security isn&apos;t optional in healthcare. Workflo made compliance simple and automatic.&quot;
                </p>
                <p className="text-sm text-gray-600 mt-2">— Dr. Jan Bakker, Practice Owner</p>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 mt-16 bg-gray-100">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-black">Results That Speak for Themselves</h2>
            <div className="grid md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="text-5xl font-bold text-yellow-400 mb-2">200+</div>
                <p className="text-gray-600">Amsterdam Businesses Served</p>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold text-yellow-400 mb-2">99.9%</div>
                <p className="text-gray-600">Average Uptime</p>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold text-yellow-400 mb-2">45%</div>
                <p className="text-gray-600">Average Cost Savings</p>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold text-yellow-400 mb-2">4hrs</div>
                <p className="text-gray-600">Average Response Time</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-black text-white relative overflow-hidden">
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
          <div className="container mx-auto px-4 text-center relative z-10">
            <h2 className="text-4xl font-bold mb-4">Ready to Write Your Success Story?</h2>
            <p className="text-xl mb-8">Join these successful Amsterdam businesses</p>
            <a href="/tevredenheidscheck" className="inline-block bg-yellow-400 text-black px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-500 transition">
              Start Your Transformation Today
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