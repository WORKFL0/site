export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <a href="/" className="text-2xl font-bold text-black">WORKFLO</a>
            <nav className="hidden md:flex gap-6">
              <a href="/diensten" className="text-gray-700 hover:text-black">Services</a>
              <a href="/about" className="text-black font-bold">About</a>
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
          <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-yellow-400 via-black to-yellow-400"></div>
          <div className="container mx-auto px-4 pt-8">
            <h1 className="text-5xl font-bold text-center text-black mb-6">
              The Amsterdam IT Team That Actually Cares About Your Business Success
            </h1>
            <p className="text-xl text-gray-700 text-center max-w-3xl mx-auto mb-6">
              We started Workflo because we were tired of seeing Amsterdam businesses held back by 
              their technology. Too many great companies were choosing between growth and IT costs, 
              or worse, losing customers because their systems couldn&apos;t handle success.
            </p>
            <div className="flex justify-center gap-8 text-center">
              <div>
                <p className="text-4xl font-bold text-yellow-400">2015</p>
                <p className="text-sm text-gray-600">Founded in Amsterdam</p>
              </div>
              <div>
                <p className="text-4xl font-bold text-yellow-400">200+</p>
                <p className="text-sm text-gray-600">Happy Clients</p>
              </div>
              <div>
                <p className="text-4xl font-bold text-yellow-400">98%</p>
                <p className="text-sm text-gray-600">Client Retention</p>
              </div>
              <div>
                <p className="text-4xl font-bold text-yellow-400">24/7</p>
                <p className="text-sm text-gray-600">Always Available</p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Story */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-black">Our Story</h2>
            <div className="max-w-3xl mx-auto">
              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 mb-6">
                <p className="text-lg text-gray-700 font-medium mb-3">
                  &ldquo;We don&apos;t believe in one-size-fits-all IT solutions.&rdquo;
                </p>
                <p className="text-gray-600">
                  Every Amsterdam business is unique. That&apos;s why we take time to understand your specific 
                  challenges, industry requirements, and growth ambitions before crafting your IT strategy.
                </p>
              </div>
              
              <p className="text-gray-700 mb-6">
                <strong>Founded by entrepreneurs, for entrepreneurs.</strong> We understand the Amsterdam business 
                landscape because we&apos;re part of it. We know that directness and reliability matter more than 
                flashy presentations. That&apos;s why we focus on delivering measurable results, not just services.
              </p>
              
              <p className="text-gray-700 mb-6">
                Our team combines <strong>15+ years of technical expertise</strong> with genuine business acumen. 
                We don&apos;t just fix your IT – we align your technology with your business goals. When you succeed, 
                we succeed. It&apos;s that simple.
              </p>
              
              <div className="grid md:grid-cols-3 gap-6 mb-6">
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <p className="text-2xl mb-2">🏢</p>
                  <p className="font-bold text-black">Zuidas</p>
                  <p className="text-sm text-gray-600">Financial & Legal Firms</p>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <p className="text-2xl mb-2">🎨</p>
                  <p className="font-bold text-black">Jordaan</p>
                  <p className="text-sm text-gray-600">Creative Agencies</p>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <p className="text-2xl mb-2">🚀</p>
                  <p className="font-bold text-black">Noord</p>
                  <p className="text-sm text-gray-600">Tech Startups</p>
                </div>
              </div>
              
              <p className="text-gray-700">
                From the historic Centrum to the innovative business districts, Workflo supports 
                Amsterdam businesses across all sectors. We speak your language (literally and figuratively), 
                understand your market, and know exactly what it takes to succeed here.
              </p>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-16 bg-gray-100">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-black">Meet Our Team</h2>
            <div className="grid md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="w-40 h-40 bg-yellow-400 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-5xl font-bold text-black">F</span>
                </div>
                <h3 className="text-xl font-bold text-black mb-2">Florian</h3>
                <p className="text-gray-600 mb-3">Founder & CEO</p>
                <p className="text-gray-500 text-sm">
                  With over 15 years in IT management, Florian leads our vision of making 
                  enterprise-grade IT accessible to Amsterdam SMEs.
                </p>
              </div>
              <div className="text-center">
                <div className="w-40 h-40 bg-gray-300 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-5xl font-bold text-black">NH</span>
                </div>
                <h3 className="text-xl font-bold text-black mb-2">Nam-Hoon</h3>
                <p className="text-gray-600 mb-3">Technical Director</p>
                <p className="text-gray-500 text-sm">
                  Our infrastructure wizard ensures your systems are secure, scalable, and 
                  always available when you need them.
                </p>
              </div>
              <div className="text-center">
                <div className="w-40 h-40 bg-yellow-400 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-5xl font-bold text-black">M</span>
                </div>
                <h3 className="text-xl font-bold text-black mb-2">Mas</h3>
                <p className="text-gray-600 mb-3">Operations Manager</p>
                <p className="text-gray-500 text-sm">
                  Mas ensures every client receives exceptional service and that our team 
                  delivers on every promise we make.
                </p>
              </div>
              <div className="text-center">
                <div className="w-40 h-40 bg-gray-300 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-5xl font-bold text-black">M</span>
                </div>
                <h3 className="text-xl font-bold text-black mb-2">Marcello</h3>
                <p className="text-gray-600 mb-3">Solutions Architect</p>
                <p className="text-gray-500 text-sm">
                  Marcello designs innovative solutions that transform business challenges 
                  into competitive advantages.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-black">Our Values</h2>
            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="w-20 h-20 bg-yellow-400 rounded-lg mx-auto mb-4 flex items-center justify-center">
                  <span className="text-3xl">🎯</span>
                </div>
                <h3 className="text-xl font-bold mb-3 text-black">Results-Driven</h3>
                <p className="text-gray-600">
                  We measure our success by your business outcomes, not billable hours.
                </p>
              </div>
              <div className="text-center">
                <div className="w-20 h-20 bg-yellow-400 rounded-lg mx-auto mb-4 flex items-center justify-center">
                  <span className="text-3xl">🤝</span>
                </div>
                <h3 className="text-xl font-bold mb-3 text-black">True Partnership</h3>
                <p className="text-gray-600">
                  Your IT team, not just another vendor. We&apos;re invested in your growth.
                </p>
              </div>
              <div className="text-center">
                <div className="w-20 h-20 bg-yellow-400 rounded-lg mx-auto mb-4 flex items-center justify-center">
                  <span className="text-3xl">⚡</span>
                </div>
                <h3 className="text-xl font-bold mb-3 text-black">Proactive Innovation</h3>
                <p className="text-gray-600">
                  Staying ahead of problems and opportunities so you can focus on business.
                </p>
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
            <h2 className="text-4xl font-bold mb-4">Ready to Experience IT That Just Works?</h2>
            <p className="text-xl mb-8">Join 200+ Amsterdam businesses who trust Workflo</p>
            <a href="/tevredenheidscheck" className="inline-block bg-yellow-400 text-black px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-500 transition">
              Start Your Free IT Assessment
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
              <h4 className="font-bold mb-4">Services</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="/diensten/managed-it" className="hover:text-yellow-400">Managed IT</a></li>
                <li><a href="/diensten/cybersecurity" className="hover:text-yellow-400">Cybersecurity</a></li>
                <li><a href="/diensten/cloud" className="hover:text-yellow-400">Cloud Services</a></li>
                <li><a href="/diensten" className="hover:text-yellow-400">All services →</a></li>
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
              <h4 className="font-bold mb-4">Follow Us</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="https://www.linkedin.com/company/workflo" className="hover:text-yellow-400">LinkedIn</a></li>
                <li><a href="https://x.com/workflo_it" className="hover:text-yellow-400">X (Twitter)</a></li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
            <p>&copy; 2024 Workflo. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}