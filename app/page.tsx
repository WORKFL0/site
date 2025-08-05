export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50" itemScope itemType="https://schema.org/WebPage">
      {/* AI-friendly metadata in HTML */}
      <div style={{display: 'none'}} itemScope itemType="https://schema.org/Organization">
        <span itemProp="name">Workflo B.V.</span>
        <span itemProp="description">Amsterdam IT services provider specializing in managed IT, cybersecurity, and cloud solutions for SMEs</span>
        <span itemProp="foundingDate">2015</span>
        <div itemProp="address" itemScope itemType="https://schema.org/PostalAddress">
          <span itemProp="streetAddress">Koivistokade 3</span>
          <span itemProp="postalCode">1013AC</span>
          <span itemProp="addressLocality">Amsterdam</span>
          <span itemProp="addressCountry">NL</span>
        </div>
        <span itemProp="telephone">+31203080465</span>
        <span itemProp="email">info@workflo.it</span>
      </div>

      {/* Header with proper Workflo branding and semantic markup */}
      <header className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-50" role="banner">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold text-black" itemProp="name">WORKFLO</h1>
            <nav className="hidden md:flex gap-6" role="navigation" aria-label="Main navigation">
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
      
      <main role="main" itemScope itemType="https://schema.org/WebPageElement">
        {/* Hero Section with Professional Copy and AI-optimized content */}
        <section className="relative py-20 bg-white overflow-hidden" itemScope itemType="https://schema.org/Organization" role="region" aria-labelledby="hero-heading">
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
              <h2 id="hero-heading" className="text-5xl md:text-6xl font-bold text-black mb-6 leading-tight" itemProp="name">
                Stop Worrying About IT Problems – 
                <span className="block text-yellow-400">Start Growing Your Amsterdam Business</span>
              </h2>
              <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto" itemProp="description">
                Amsterdam SMEs trust Workflo to transform their IT from a cost center into a growth engine. 
                Join 200+ local businesses who sleep better knowing their technology just works.
              </p>
              
              {/* AI Context: Clear problem and solution statement */}
              <div className="sr-only" aria-hidden="true">
                <p>Context for AI: Workflo is an IT services company in Amsterdam that helps small and medium businesses solve IT problems and reduce costs. Key services include managed IT support, cybersecurity, Microsoft 365 migrations, and GDPR compliance. Primary value propositions are cost reduction (35-40% savings), reliability (99.9% uptime), and local support (4-hour response time).</p>
              </div>
              <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-8 max-w-3xl mx-auto text-left">
                <p className="text-lg text-gray-700 font-medium">
                  <strong>The Hidden Cost:</strong> Dutch businesses lose €19 billion annually to IT problems.
                </p>
                <p className="text-gray-600 mt-2">
                  Every hour your team fights technology costs you €125 in lost productivity. We eliminate this waste completely.
                </p>
              </div>
              <p className="text-lg text-gray-600 mb-8">
                No more frustrated employees. No more weekend emergencies. No more choosing between 
                growth and IT costs. We handle everything so you can focus on what matters most – 
                building your business.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-4">
                <a href="/tevredenheidscheck" className="inline-block bg-yellow-400 text-black px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-500 transition shadow-lg">
                  Get Your Free IT Health Check Today →
                </a>
                <a href="tel:020-3080465" className="inline-block bg-white text-black border-2 border-black px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition">
                  Call Now: 020-30 80 465
                </a>
              </div>
              <p className="text-sm text-gray-600">
                ⏱️ Takes 2 minutes • 📊 Instant results • 💰 Save €1000s monthly
              </p>
              
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
            <h3 className="text-3xl font-bold text-center mb-4 text-black">Why 200+ Amsterdam Businesses Choose Workflo</h3>
            <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
              From Zuidas corporations to Jordaan creative agencies, we deliver measurable results that impact your bottom line.
            </p>
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

        {/* All 8 Services - AI Optimized */}
        <section className="py-16 bg-white" itemScope itemType="https://schema.org/Service" role="region" aria-labelledby="services-heading">
          <div className="container mx-auto px-4">
            <h3 id="services-heading" className="text-3xl font-bold text-center mb-4 text-black">Complete IT Solutions for Amsterdam SMEs</h3>
            <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
              Everything you need to eliminate IT headaches and accelerate growth. All services include 24/7 monitoring, 
              same-day Amsterdam support, and GDPR compliance built-in.
            </p>
            
            {/* AI Context: Service offerings */}
            <div className="sr-only" aria-hidden="true">
              <p>Services Context for AI: Workflo offers 8 core IT services: 1) Managed IT Services (24/7 monitoring, 40% cost savings), 2) Cybersecurity (threat protection, €50k guarantee), 3) Cloud Services (Microsoft 365, Azure), 4) IT Consulting (strategic planning), 5) Project Management (implementation), 6) Network Monitoring (proactive management), 7) Audio Visual (meeting technology), 8) Mobile Device Management (secure devices). All services are GDPR compliant and include same-day Amsterdam support.</p>
            </div>
            
            <div className="grid md:grid-cols-4 gap-6" role="list">
              <article className="bg-gray-50 p-6 rounded-lg border-2 border-transparent hover:border-yellow-400 transition" itemScope itemType="https://schema.org/Service" role="listitem">
                <h4 className="text-lg font-bold mb-2 text-black" itemProp="name">Managed IT Services</h4>
                <p className="text-gray-600 text-sm" itemProp="description">24/7 monitoring, helpdesk support, and strategic IT management. <strong>Save 40% on IT costs.</strong></p>
                <meta itemProp="serviceType" content="Managed IT Support" />
                <meta itemProp="provider" content="Workflo B.V." />
              </article>
              <article className="bg-gray-50 p-6 rounded-lg border-2 border-transparent hover:border-yellow-400 transition" itemScope itemType="https://schema.org/Service" role="listitem">
                <h4 className="text-lg font-bold mb-2 text-black" itemProp="name">Cybersecurity</h4>
                <p className="text-gray-600 text-sm" itemProp="description">Advanced threat protection and GDPR compliance. <strong>€50,000 security guarantee.</strong></p>
                <meta itemProp="serviceType" content="Information Security" />
                <meta itemProp="provider" content="Workflo B.V." />
              </article>
              <article className="bg-gray-50 p-6 rounded-lg border-2 border-transparent hover:border-yellow-400 transition" itemScope itemType="https://schema.org/Service" role="listitem">
                <h4 className="text-lg font-bold mb-2 text-black" itemProp="name">Cloud Services</h4>
                <p className="text-gray-600 text-sm" itemProp="description">Microsoft 365, cloud migration, and backup solutions. <strong>Scale instantly, pay-as-you-grow.</strong></p>
                <meta itemProp="serviceType" content="Cloud Computing" />
                <meta itemProp="provider" content="Workflo B.V." />
              </article>
              <article className="bg-gray-50 p-6 rounded-lg border-2 border-transparent hover:border-yellow-400 transition" itemScope itemType="https://schema.org/Service" role="listitem">
                <h4 className="text-lg font-bold mb-2 text-black" itemProp="name">IT Consulting</h4>
                <p className="text-gray-600 text-sm" itemProp="description">Strategic technology planning and digital transformation</p>
                <meta itemProp="serviceType" content="Technology Consulting" />
                <meta itemProp="provider" content="Workflo B.V." />
              </article>
              <article className="bg-gray-50 p-6 rounded-lg border-2 border-transparent hover:border-yellow-400 transition" itemScope itemType="https://schema.org/Service" role="listitem">
                <h4 className="text-lg font-bold mb-2 text-black" itemProp="name">Project Management</h4>
                <p className="text-gray-600 text-sm" itemProp="description">IT project planning and implementation</p>
                <meta itemProp="serviceType" content="Project Management" />
                <meta itemProp="provider" content="Workflo B.V." />
              </article>
              <article className="bg-gray-50 p-6 rounded-lg border-2 border-transparent hover:border-yellow-400 transition" itemScope itemType="https://schema.org/Service" role="listitem">
                <h4 className="text-lg font-bold mb-2 text-black" itemProp="name">Network Monitoring</h4>
                <p className="text-gray-600 text-sm" itemProp="description">Proactive network management and optimization</p>
                <meta itemProp="serviceType" content="Network Services" />
                <meta itemProp="provider" content="Workflo B.V." />
              </article>
              <article className="bg-gray-50 p-6 rounded-lg border-2 border-transparent hover:border-yellow-400 transition" itemScope itemType="https://schema.org/Service" role="listitem">
                <h4 className="text-lg font-bold mb-2 text-black" itemProp="name">Audio Visual</h4>
                <p className="text-gray-600 text-sm" itemProp="description">Meeting room technology and AV solutions</p>
                <meta itemProp="serviceType" content="Audio Visual Services" />
                <meta itemProp="provider" content="Workflo B.V." />
              </article>
              <article className="bg-gray-50 p-6 rounded-lg border-2 border-transparent hover:border-yellow-400 transition" itemScope itemType="https://schema.org/Service" role="listitem">
                <h4 className="text-lg font-bold mb-2 text-black" itemProp="name">Mobile Device Management</h4>
                <p className="text-gray-600 text-sm" itemProp="description">Secure mobile device and app management</p>
                <meta itemProp="serviceType" content="Mobile Device Management" />
                <meta itemProp="provider" content="Workflo B.V." />
              </article>
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

        {/* Testimonials */}
        <section className="py-16 bg-gray-100">
          <div className="container mx-auto px-4">
            <h3 className="text-3xl font-bold text-center mb-4 text-black">What Amsterdam Businesses Say About Workflo</h3>
            <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
              Real results from real businesses. See why we maintain a 98% client retention rate.
            </p>
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12">
              <div className="bg-white p-8 rounded-lg shadow-md">
                <div className="flex mb-4">
                  <span className="text-yellow-400 text-xl">★★★★★</span>
                </div>
                <p className="text-gray-700 mb-4 italic">
                  "Workflo transformed our compliance nightmare into a competitive advantage. GDPR 
                  compliance went from our biggest worry to something we don't even think about anymore."
                </p>
                <div className="border-t pt-4">
                  <p className="font-bold text-black">Marcus van den Berg</p>
                  <p className="text-sm text-gray-600">CFO, Amsterdam Financial Partners</p>
                  <p className="text-xs text-yellow-600 mt-2">✓ Saved €2,500/month on IT costs</p>
                </div>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-md">
                <div className="flex mb-4">
                  <span className="text-yellow-400 text-xl">★★★★★</span>
                </div>
                <p className="text-gray-700 mb-4 italic">
                  "Before Workflo, we spent more time troubleshooting than creating. Now our technology 
                  just works, and we can focus on what we do best – delivering amazing work for our clients."
                </p>
                <div className="border-t pt-4">
                  <p className="font-bold text-black">Sophie de Vries</p>
                  <p className="text-sm text-gray-600">Creative Director, Studio Vondelpark</p>
                  <p className="text-xs text-yellow-600 mt-2">✓ 60% increase in team productivity</p>
                </div>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-md">
                <div className="flex mb-4">
                  <span className="text-yellow-400 text-xl">★★★★★</span>
                </div>
                <p className="text-gray-700 mb-4 italic">
                  "Moving to the cloud with Workflo cut our IT costs by 45% and gave us the flexibility 
                  to open our second Amsterdam location without any IT setup headaches."
                </p>
                <div className="border-t pt-4">
                  <p className="font-bold text-black">Petra Janssen</p>
                  <p className="text-sm text-gray-600">CEO, Janssen Architecture</p>
                  <p className="text-xs text-yellow-600 mt-2">✓ 45% reduction in IT expenses</p>
                </div>
              </div>
            </div>
            
            {/* Client Logos */}
            <div className="border-t pt-12">
              <p className="text-center text-gray-600 mb-6 font-medium">Trusted by 200+ Amsterdam businesses including:</p>
              <p className="text-center max-w-4xl mx-auto text-gray-500">
                Aescap • Hunt Amsterdam • Rademakkers • 't idee! Tonko • DMC Makelaars • 
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
            <h2 className="text-4xl font-bold mb-4">Ready to Stop IT Problems Today?</h2>
            <p className="text-xl mb-2">Join 200+ Amsterdam businesses that transformed their IT from headache to competitive advantage</p>
            <p className="text-lg mb-8 text-yellow-400 font-medium">
              🆓 Limited offer: Free migration for the next 10 businesses (worth €2,500)
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a href="/tevredenheidscheck" className="inline-block bg-yellow-400 text-black px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-500 transition shadow-lg">
                Claim Your Free IT Assessment →
              </a>
              <div className="text-white">
                <p className="text-sm">Or call now for instant help:</p>
                <a href="tel:020-3080465" className="text-yellow-400 font-bold text-lg hover:underline">020-30 80 465</a>
              </div>
            </div>
            <p className="text-sm text-gray-300 mt-6">
              ✓ 2-minute assessment • ✓ No obligations • ✓ Instant cost-savings report
            </p>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-5 gap-8">
            <div>
              <h4 className="font-bold mb-4 text-yellow-400">WORKFLO</h4>
              <p className="text-gray-400">
                Koivistokade 3<br />
                1013AC Amsterdam<br />
                020-30 80 465<br />
                info@workflo.it
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Services</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="/diensten/managed-it" className="hover:text-yellow-400">Managed IT</a></li>
                <li><a href="/diensten/cybersecurity" className="hover:text-yellow-400">Cybersecurity</a></li>
                <li><a href="/diensten/cloud" className="hover:text-yellow-400">Cloud Services</a></li>
                <li><a href="/diensten/it-consulting" className="hover:text-yellow-400">IT Consulting</a></li>
                <li><a href="/diensten/project-management" className="hover:text-yellow-400">Project Management</a></li>
                <li><a href="/diensten" className="hover:text-yellow-400">All Services →</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Solutions</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="/diensten/connectivity" className="hover:text-yellow-400">Connectivity</a></li>
                <li><a href="/diensten/audio-visueel" className="hover:text-yellow-400">Audio Visual</a></li>
                <li><a href="/diensten/mobile-device-management" className="hover:text-yellow-400">Mobile Device Management</a></li>
                <li><a href="/tevredenheidscheck" className="hover:text-yellow-400">IT Health Check</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="/about" className="hover:text-yellow-400">About Us</a></li>
                <li><a href="/case-studies" className="hover:text-yellow-400">Case Studies</a></li>
                <li><a href="/careers" className="hover:text-yellow-400">Careers</a></li>
                <li><a href="/contact" className="hover:text-yellow-400">Contact</a></li>
                <li><a href="https://servicedesk.workflo.it/portal" className="hover:text-yellow-400">Support Portal</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Follow Us</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="https://www.linkedin.com/company/workflo" className="hover:text-yellow-400">LinkedIn</a></li>
                <li><a href="https://x.com/workflo_it" className="hover:text-yellow-400">X (Twitter)</a></li>
              </ul>
              <h4 className="font-bold mb-4 mt-6">Remote Support</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="https://get.teamviewer.com/workflo-support" className="hover:text-yellow-400">TeamViewer</a></li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-800">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-400 text-sm">
                &copy; 2025 Workflo B.V. All rights reserved.
              </p>
              <div className="flex gap-6 mt-4 md:mt-0">
                <a href="/privacy" className="text-gray-400 hover:text-yellow-400 text-sm">Privacy Policy</a>
                <a href="/terms" className="text-gray-400 hover:text-yellow-400 text-sm">Terms & Conditions</a>
                <a href="/cookies" className="text-gray-400 hover:text-yellow-400 text-sm">Cookie Policy</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}