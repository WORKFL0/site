'use client'

// import Header from '@/components/layout/Header' // REPLACED
import StaticHeader from '@/components/StaticHeader'
// import Footer from '@/components/layout/Footer' // REPLACED
import StaticFooter from '@/components/StaticFooter'

export default function AudioVisuaalPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <StaticHeader />

      <main>
        {/* Hero Section */}
        <section className="relative py-20 bg-white">
          <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-yellow-400 via-black to-yellow-400"></div>
          <div className="container mx-auto px-4">
            <h1 className="text-5xl font-bold text-center text-black mb-6">
              Professional AV Solutions That Enhance Your Business Impact
            </h1>
            <p className="text-xl text-gray-700 text-center max-w-3xl mx-auto">
              Transform your Amsterdam office into a competitive advantage with cutting-edge 
              audio-visual technology. From crystal-clear video conferencing to impressive 
              presentation systems, we deliver AV solutions that elevate your professional image 
              and drive business results.
            </p>
          </div>
        </section>

        {/* Modern Business Reality */}
        <section className="py-16 bg-gray-100">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-black">Why AV Technology is Critical for Amsterdam Business Success</h2>
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className="bg-white p-8 rounded-lg shadow-md">
                <div className="w-16 h-16 bg-yellow-400 rounded-lg mb-4 flex items-center justify-center">
                  <span className="text-3xl">🎯</span>
                </div>
                <h3 className="text-xl font-bold mb-3 text-black">Client Impression Matters</h3>
                <p className="text-gray-600">
                  First impressions form within 7 seconds. Professional AV systems immediately 
                  communicate competence, innovation, and attention to detail to your clients.
                </p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-md">
                <div className="w-16 h-16 bg-yellow-400 rounded-lg mb-4 flex items-center justify-center">
                  <span className="text-3xl">🌍</span>
                </div>
                <h3 className="text-xl font-bold mb-3 text-black">Hybrid Work is Here to Stay</h3>
                <p className="text-gray-600">
                  85% of Amsterdam businesses now operate hybrid models. Seamless video 
                  conferencing isn't optional – it's essential for team productivity.
                </p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-md">
                <div className="w-16 h-16 bg-yellow-400 rounded-lg mb-4 flex items-center justify-center">
                  <span className="text-3xl">📈</span>
                </div>
                <h3 className="text-xl font-bold mb-3 text-black">Presentation Quality = Deal Quality</h3>
                <p className="text-gray-600">
                  Poor AV quality during crucial presentations can cost deals. Professional 
                  systems ensure your message is delivered with maximum impact.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Our AV Solutions */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-black">Complete Audio-Visual Solutions</h2>
            <div className="max-w-5xl mx-auto space-y-8">
              <div className="bg-gray-50 p-8 rounded-lg">
                <h3 className="text-2xl font-bold mb-4 text-black">Video Conferencing & Collaboration</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-bold mb-3 text-black">Microsoft Teams Rooms:</h4>
                    <ul className="space-y-2 text-gray-600">
                      <li>✓ One-touch meeting join</li>
                      <li>✓ 4K cameras with intelligent framing</li>
                      <li>✓ Crystal-clear audio systems</li>
                      <li>✓ Interactive whiteboarding</li>
                      <li>✓ Content sharing from any device</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold mb-3 text-black">Zoom Rooms & Hybrid Solutions:</h4>
                    <ul className="space-y-2 text-gray-600">
                      <li>✓ Multi-platform compatibility</li>
                      <li>✓ Wireless presentation systems</li>
                      <li>✓ Advanced noise cancellation</li>
                      <li>✓ Recording and streaming capabilities</li>
                      <li>✓ Calendar integration</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 p-8 rounded-lg">
                <h3 className="text-2xl font-bold mb-4 text-black">Presentation & Display Solutions</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-bold mb-3 text-black">Interactive Displays:</h4>
                    <ul className="space-y-2 text-gray-600">
                      <li>✓ 55" to 98" 4K interactive touchscreens</li>
                      <li>✓ Multi-touch collaboration capabilities</li>
                      <li>✓ Wireless screen mirroring</li>
                      <li>✓ Digital whiteboarding and annotation</li>
                      <li>✓ Cloud integration for file sharing</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold mb-3 text-black">Professional Projectors:</h4>
                    <ul className="space-y-2 text-gray-600">
                      <li>✓ Laser projectors with 20,000+ hour lifespan</li>
                      <li>✓ 4K resolution for sharp, detailed images</li>
                      <li>✓ Automated screen and lighting control</li>
                      <li>✓ Wireless and cable-free presentations</li>
                      <li>✓ Ceiling-mounted professional installation</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 p-8 rounded-lg">
                <h3 className="text-2xl font-bold mb-4 text-black">Audio Systems & Room Acoustics</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-bold mb-3 text-black">Professional Audio:</h4>
                    <ul className="space-y-2 text-gray-600">
                      <li>✓ Ceiling-mounted speaker systems</li>
                      <li>✓ Wireless microphone solutions</li>
                      <li>✓ Automatic gain control</li>
                      <li>✓ Echo cancellation technology</li>
                      <li>✓ Zone-based audio control</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold mb-3 text-black">Acoustic Treatment:</h4>
                    <ul className="space-y-2 text-gray-600">
                      <li>✓ Room acoustics assessment</li>
                      <li>✓ Sound dampening solutions</li>
                      <li>✓ Noise isolation for open offices</li>
                      <li>✓ Acoustic panels and treatments</li>
                      <li>✓ Privacy and confidentiality enhancement</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 p-8 rounded-lg">
                <h3 className="text-2xl font-bold mb-4 text-black">Digital Signage & Reception Areas</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-bold mb-3 text-black">Digital Displays:</h4>
                    <ul className="space-y-2 text-gray-600">
                      <li>✓ Welcome screens and company branding</li>
                      <li>✓ Meeting room booking displays</li>
                      <li>✓ Wayfinding and directory systems</li>
                      <li>✓ Content management platforms</li>
                      <li>✓ Remote content updates</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold mb-3 text-black">Interactive Solutions:</h4>
                    <ul className="space-y-2 text-gray-600">
                      <li>✓ Touch-screen information kiosks</li>
                      <li>✓ Visitor check-in systems</li>
                      <li>✓ QR code integration</li>
                      <li>✓ Multi-language support</li>
                      <li>✓ Analytics and usage reporting</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Room-Specific Solutions */}
        <section className="py-16 bg-gray-100">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-black">Tailored Solutions for Every Space</h2>
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-bold mb-3 text-black">Executive Boardrooms</h3>
                <ul className="space-y-2 text-gray-600 text-sm">
                  <li>✓ Premium video conferencing with 360° cameras</li>
                  <li>✓ Wireless presentation from any device</li>
                  <li>✓ Automated lighting and blind control</li>
                  <li>✓ High-end audio with individual microphones</li>
                  <li>✓ One-touch room control systems</li>
                  <li>✓ Confidential meeting protection</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-bold mb-3 text-black">Team Collaboration Rooms</h3>
                <ul className="space-y-2 text-gray-600 text-sm">
                  <li>✓ Interactive displays for brainstorming</li>
                  <li>✓ Dual-screen setups for productivity</li>
                  <li>✓ Wireless screen sharing</li>
                  <li>✓ Video calling with wide-angle cameras</li>
                  <li>✓ Digital whiteboarding capabilities</li>
                  <li>✓ Mobile device integration</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-bold mb-3 text-black">Training & Conference Rooms</h3>
                <ul className="space-y-2 text-gray-600 text-sm">
                  <li>✓ Large format displays or projection</li>
                  <li>✓ Audience response systems</li>
                  <li>✓ Recording and streaming capabilities</li>
                  <li>✓ Wireless microphone systems</li>
                  <li>✓ Multi-source input switching</li>
                  <li>✓ Hybrid event management</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-bold mb-3 text-black">Open Office Areas</h3>
                <ul className="space-y-2 text-gray-600 text-sm">
                  <li>✓ Sound masking systems</li>
                  <li>✓ Acoustic privacy solutions</li>
                  <li>✓ Background music systems</li>
                  <li>✓ Paging and announcement systems</li>
                  <li>✓ Focus room AV solutions</li>
                  <li>✓ Noise reduction technology</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-bold mb-3 text-black">Reception & Lobby Areas</h3>
                <ul className="space-y-2 text-gray-600 text-sm">
                  <li>✓ Digital welcome displays</li>
                  <li>✓ Visitor management systems</li>
                  <li>✓ Background music and ambiance</li>
                  <li>✓ Meeting room availability displays</li>
                  <li>✓ Company branding integration</li>
                  <li>✓ Emergency notification systems</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-bold mb-3 text-black">Huddle Spaces</h3>
                <ul className="space-y-2 text-gray-600 text-sm">
                  <li>✓ Compact all-in-one solutions</li>
                  <li>✓ Quick-connect video calling</li>
                  <li>✓ Wireless presentation displays</li>
                  <li>✓ Plug-and-play simplicity</li>
                  <li>✓ Space-efficient designs</li>
                  <li>✓ Cost-effective solutions</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Implementation Process */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-black">Professional AV Installation Process</h2>
            <div className="max-w-3xl mx-auto">
              <div className="space-y-8">
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="font-bold text-black">1</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-black">Space Assessment & Consultation</h3>
                    <p className="text-gray-600">
                      Our certified AV specialists visit your Amsterdam office to assess acoustics, 
                      lighting, and space requirements. We understand your workflow and design 
                      solutions that enhance productivity.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="font-bold text-black">2</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-black">Custom Design & Proposal</h3>
                    <p className="text-gray-600">
                      Detailed system design with equipment specifications, installation plans, 
                      and pricing. 3D visualizations help you understand the final result before 
                      installation begins.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="font-bold text-black">3</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-black">Professional Installation</h3>
                    <p className="text-gray-600">
                      Certified technicians handle all wiring, mounting, and configuration. 
                      We work outside business hours when possible to minimize disruption to 
                      your operations.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="font-bold text-black">4</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-black">Testing & User Training</h3>
                    <p className="text-gray-600">
                      Comprehensive system testing and team training ensures everyone can use 
                      the new technology confidently. We provide user guides and quick reference 
                      materials.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="font-bold text-black">5</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-black">Ongoing Support & Maintenance</h3>
                    <p className="text-gray-600">
                      24/7 support for critical issues, regular maintenance visits, and system 
                      updates. We ensure your AV investment delivers consistent performance for 
                      years to come.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ROI & Benefits */}
        <section className="py-16 bg-gray-100">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-black">The Business Impact of Professional AV</h2>
            <div className="grid md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-12">
              <div className="text-center">
                <div className="text-5xl font-bold text-yellow-400 mb-2">65%</div>
                <p className="text-gray-600">Reduction in meeting setup time</p>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold text-yellow-400 mb-2">40%</div>
                <p className="text-gray-600">Improvement in presentation effectiveness</p>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold text-yellow-400 mb-2">80%</div>
                <p className="text-gray-600">Increase in hybrid meeting satisfaction</p>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold text-yellow-400 mb-2">25%</div>
                <p className="text-gray-600">Growth in client satisfaction scores</p>
              </div>
            </div>
            
            <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-4 text-black">Calculated ROI Example</h3>
              <p className="text-gray-700 mb-4">
                A 30-person Amsterdam consulting firm invested €45,000 in comprehensive AV 
                solutions across 4 meeting rooms and the main presentation area.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-bold mb-2 text-green-600">Annual Benefits:</h4>
                  <ul className="space-y-1 text-gray-600 text-sm">
                    <li>• Time savings: €18,000/year</li>
                    <li>• Reduced travel costs: €12,000/year</li>
                    <li>• Improved deal closure: €25,000/year</li>
                    <li>• Enhanced productivity: €15,000/year</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold mb-2 text-black">Investment:</h4>
                  <ul className="space-y-1 text-gray-600 text-sm">
                    <li>• Initial investment: €45,000</li>
                    <li>• Annual maintenance: €3,000</li>
                    <li>• Total first-year cost: €48,000</li>
                  </ul>
                </div>
              </div>
              <div className="mt-4 p-3 bg-green-50 rounded">
                <p className="font-bold text-green-700">Result: 146% ROI in Year One, €22,000 net benefit</p>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonial */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto bg-gray-100 p-8 rounded-lg">
              <p className="text-lg text-gray-700 italic mb-4">
                "Workflo transformed our meeting culture. What used to be 15 minutes of technical 
                difficulties at the start of every client presentation is now one-touch simplicity. 
                Our clients consistently comment on our professional setup, and our team's 
                productivity in hybrid meetings has dramatically improved."
              </p>
              <p className="text-gray-600">
                <strong>— Lisa Kooijman</strong><br />
                Managing Partner, Kooijman & Associates Law Firm
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
            <h2 className="text-4xl font-bold mb-4">Ready to Elevate Your Professional Image?</h2>
            <p className="text-xl mb-8">Transform your meetings with professional AV solutions</p>
            <a href="/tevredenheidscheck" className="inline-block bg-yellow-400 text-black px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-500 transition">
              Schedule Your AV Consultation
            </a>
          </div>
        </section>
      </main>

      {/* Footer */}
      <StaticFooter />
    </div>
  )
}