export default function ConnectivityPage() {
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
              Enterprise Connectivity That Powers Amsterdam Business Growth
            </h1>
            <p className="text-xl text-gray-700 text-center max-w-3xl mx-auto">
              Your network is the backbone of everything you do. Slow, unreliable connectivity 
              doesn't just frustrate your team – it costs deals, reduces productivity, and limits 
              growth. Get the enterprise-grade connectivity infrastructure that Amsterdam's most 
              successful businesses depend on.
            </p>
          </div>
        </section>

        {/* Connectivity Problems */}
        <section className="py-16 bg-gray-100">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-black">Hidden Costs of Poor Connectivity in Amsterdam</h2>
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className="bg-white p-8 rounded-lg shadow-md">
                <div className="w-16 h-16 bg-red-100 rounded-lg mb-4 flex items-center justify-center">
                  <span className="text-3xl">⏰</span>
                </div>
                <h3 className="text-xl font-bold mb-3 text-black">Productivity Drain</h3>
                <p className="text-gray-600">
                  Slow internet costs the average Amsterdam office worker 2.5 hours per week. 
                  That's €7,500 per employee annually in lost productivity.
                </p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-md">
                <div className="w-16 h-16 bg-red-100 rounded-lg mb-4 flex items-center justify-center">
                  <span className="text-3xl">💼</span>
                </div>
                <h3 className="text-xl font-bold mb-3 text-black">Lost Business Opportunities</h3>
                <p className="text-gray-600">
                  Video calls that drop, files that won't upload, and presentations that freeze 
                  during client meetings damage your professional reputation.
                </p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-md">
                <div className="w-16 h-16 bg-red-100 rounded-lg mb-4 flex items-center justify-center">
                  <span className="text-3xl">🔒</span>
                </div>
                <h3 className="text-xl font-bold mb-3 text-black">Security Vulnerabilities</h3>
                <p className="text-gray-600">
                  Inadequate network security puts your business data at risk. 67% of breaches 
                  happen through network vulnerabilities.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Connectivity Solutions */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-black">Complete Connectivity Infrastructure</h2>
            <div className="max-w-5xl mx-auto space-y-8">
              <div className="bg-gray-50 p-8 rounded-lg">
                <h3 className="text-2xl font-bold mb-4 text-black">High-Speed Internet & WAN Solutions</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-bold mb-3 text-black">Fiber Internet Services:</h4>
                    <ul className="space-y-2 text-gray-600">
                      <li>✓ Dedicated fiber connections up to 10Gbps</li>
                      <li>✓ Guaranteed bandwidth and uptime SLAs</li>
                      <li>✓ Multiple carrier options for redundancy</li>
                      <li>✓ Direct connections to cloud providers</li>
                      <li>✓ Symmetric upload/download speeds</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold mb-3 text-black">SD-WAN & Multi-Site Connectivity:</h4>
                    <ul className="space-y-2 text-gray-600">
                      <li>✓ Seamless connectivity between locations</li>
                      <li>✓ Intelligent traffic routing and prioritization</li>
                      <li>✓ Automatic failover and load balancing</li>
                      <li>✓ Centralized network management</li>
                      <li>✓ Cost optimization across multiple sites</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 p-8 rounded-lg">
                <h3 className="text-2xl font-bold mb-4 text-black">Wireless Network Infrastructure</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-bold mb-3 text-black">Enterprise Wi-Fi 6/6E:</h4>
                    <ul className="space-y-2 text-gray-600">
                      <li>✓ High-density wireless access points</li>
                      <li>✓ Seamless roaming across the office</li>
                      <li>✓ Guest network isolation and controls</li>
                      <li>✓ Advanced security with WPA3</li>
                      <li>✓ Bandwidth management and QoS</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold mb-3 text-black">Wireless Site Surveys & Optimization:</h4>
                    <ul className="space-y-2 text-gray-600">
                      <li>✓ RF analysis and heat mapping</li>
                      <li>✓ Optimal access point placement</li>
                      <li>✓ Interference detection and mitigation</li>
                      <li>✓ Performance monitoring and tuning</li>
                      <li>✓ Scalable design for future growth</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 p-8 rounded-lg">
                <h3 className="text-2xl font-bold mb-4 text-black">Network Security & Monitoring</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-bold mb-3 text-black">Next-Generation Firewalls:</h4>
                    <ul className="space-y-2 text-gray-600">
                      <li>✓ Advanced threat detection and prevention</li>
                      <li>✓ Application control and web filtering</li>
                      <li>✓ Intrusion prevention systems (IPS)</li>
                      <li>✓ VPN and remote access security</li>
                      <li>✓ Real-time traffic analysis</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold mb-3 text-black">Network Monitoring & Management:</h4>
                    <ul className="space-y-2 text-gray-600">
                      <li>✓ 24/7 network performance monitoring</li>
                      <li>✓ Proactive issue detection and resolution</li>
                      <li>✓ Bandwidth utilization analysis</li>
                      <li>✓ Security event correlation</li>
                      <li>✓ Automated alerting and reporting</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 p-8 rounded-lg">
                <h3 className="text-2xl font-bold mb-4 text-black">Unified Communications Integration</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-bold mb-3 text-black">VoIP & Cloud Phone Systems:</h4>
                    <ul className="space-y-2 text-gray-600">
                      <li>✓ Microsoft Teams Phone integration</li>
                      <li>✓ High-quality voice over IP (VoIP)</li>
                      <li>✓ Auto-attendant and call routing</li>
                      <li>✓ Mobile app integration</li>
                      <li>✓ Call analytics and reporting</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold mb-3 text-black">Video Conferencing Optimization:</h4>
                    <ul className="space-y-2 text-gray-600">
                      <li>✓ QoS prioritization for video traffic</li>
                      <li>✓ Dedicated bandwidth allocation</li>
                      <li>✓ Multicast support for large meetings</li>
                      <li>✓ Zoom, Teams, WebEx optimization</li>
                      <li>✓ Latency and jitter optimization</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Connectivity Types */}
        <section className="py-16 bg-gray-100">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-black">Connectivity Solutions for Every Amsterdam Business</h2>
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-bold mb-3 text-black">Small Offices (5-25 employees)</h3>
                <ul className="space-y-2 text-gray-600 text-sm">
                  <li>✓ 100-500 Mbps dedicated fiber</li>
                  <li>✓ Professional Wi-Fi 6 coverage</li>
                  <li>✓ Business-grade firewall</li>
                  <li>✓ Cloud-based network management</li>
                  <li>✓ Guest network and access controls</li>
                  <li>✓ Microsoft 365 optimization</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-bold mb-3 text-black">Medium Enterprises (25-100 employees)</h3>
                <ul className="space-y-2 text-gray-600 text-sm">
                  <li>✓ 500Mbps-2Gbps redundant connections</li>
                  <li>✓ Multi-floor wireless infrastructure</li>
                  <li>✓ Advanced security stack</li>
                  <li>✓ SD-WAN for multiple locations</li>
                  <li>✓ VoIP and unified communications</li>
                  <li>✓ 24/7 monitoring and support</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-bold mb-3 text-black">Large Organizations (100+ employees)</h3>
                <ul className="space-y-2 text-gray-600 text-sm">
                  <li>✓ Multi-gigabit dedicated circuits</li>
                  <li>✓ Campus-wide wireless networks</li>
                  <li>✓ Enterprise security architecture</li>
                  <li>✓ Global SD-WAN deployment</li>
                  <li>✓ Contact center integration</li>
                  <li>✓ Managed network services</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Amsterdam Network Infrastructure */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-black">Optimized for Amsterdam's Business Districts</h2>
            <div className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-lg font-bold mb-3 text-black">Zuidas Financial District</h3>
                  <ul className="space-y-2 text-gray-600 text-sm">
                    <li>✓ Ultra-low latency connections</li>
                    <li>✓ Redundant fiber paths</li>
                    <li>✓ Financial services compliance</li>
                    <li>✓ High-frequency trading optimization</li>
                  </ul>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-lg font-bold mb-3 text-black">Amsterdam Noord Tech Hub</h3>
                  <ul className="space-y-2 text-gray-600 text-sm">
                    <li>✓ Scalable bandwidth solutions</li>
                    <li>✓ Cloud-first connectivity</li>
                    <li>✓ Innovation-friendly networks</li>
                    <li>✓ Startup-to-scale connectivity</li>
                  </ul>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-lg font-bold mb-3 text-black">Historic City Center</h3>
                  <ul className="space-y-2 text-gray-600 text-sm">
                    <li>✓ Heritage building-friendly installation</li>
                    <li>✓ Minimal disruption deployment</li>
                    <li>✓ Tourist/guest network separation</li>
                    <li>✓ Boutique business solutions</li>
                  </ul>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-lg font-bold mb-3 text-black">Amsterdam Airport Area</h3>
                  <ul className="space-y-2 text-gray-600 text-sm">
                    <li>✓ International connectivity optimization</li>
                    <li>✓ Logistics and freight networks</li>
                    <li>✓ Multi-language support</li>
                    <li>✓ Global business integration</li>
                  </ul>
                </div>
              </div>
              
              <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-400">
                <h3 className="font-bold mb-2 text-black">Local Amsterdam Advantage</h3>
                <p className="text-gray-700">
                  As Amsterdam IT specialists, we understand the unique connectivity challenges of 
                  canal-side offices, historic buildings, and modern business parks. Our local 
                  partnerships with Dutch carriers ensure the best possible connectivity options 
                  for your specific location.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Implementation Process */}
        <section className="py-16 bg-gray-100">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-black">Professional Network Implementation</h2>
            <div className="max-w-3xl mx-auto">
              <div className="space-y-8">
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="font-bold text-black">1</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-black">Network Assessment & Design</h3>
                    <p className="text-gray-600">
                      Comprehensive analysis of your current network, usage patterns, and business 
                      requirements. Custom network architecture design optimized for your workflows.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="font-bold text-black">2</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-black">Carrier Selection & Procurement</h3>
                    <p className="text-gray-600">
                      Evaluate connectivity options from leading Dutch carriers. Negotiate best 
                      rates and service levels. Handle all procurement and contract management.
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
                      Certified technicians handle all infrastructure installation. Minimal 
                      business disruption with after-hours and weekend installation options.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="font-bold text-black">4</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-black">Testing & Optimization</h3>
                    <p className="text-gray-600">
                      Comprehensive performance testing and optimization. Security validation 
                      and user acceptance testing before go-live.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="font-bold text-black">5</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-black">Ongoing Management</h3>
                    <p className="text-gray-600">
                      24/7 monitoring, proactive maintenance, and continuous optimization. 
                      Regular performance reviews and capacity planning.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Performance & ROI */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-black">Connectivity Performance That Drives Business Results</h2>
            <div className="grid md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-12">
              <div className="text-center">
                <div className="text-5xl font-bold text-yellow-400 mb-2">99.9%</div>
                <p className="text-gray-600">Network uptime guarantee</p>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold text-yellow-400 mb-2">75%</div>
                <p className="text-gray-600">Improvement in app performance</p>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold text-yellow-400 mb-2">50%</div>
                <p className="text-gray-600">Reduction in IT support tickets</p>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold text-yellow-400 mb-2">90%</div>
                <p className="text-gray-600">Faster file transfer speeds</p>
              </div>
            </div>
            
            <div className="max-w-3xl mx-auto bg-gray-100 p-8 rounded-lg">
              <h3 className="text-xl font-bold mb-4 text-black">ROI Case Study: Amsterdam Marketing Agency</h3>
              <p className="text-gray-700 mb-4">
                A 40-employee creative agency upgraded from basic broadband to our managed 
                connectivity solution with 1Gbps fiber and professional Wi-Fi infrastructure.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-bold mb-2 text-red-600">Before Upgrade:</h4>
                  <ul className="space-y-1 text-gray-600 text-sm">
                    <li>• 20Mbps shared connection</li>
                    <li>• 15+ network outages per month</li>
                    <li>• 4 hours/week lost to connectivity issues</li>
                    <li>• Client presentation failures</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold mb-2 text-green-600">After Workflo Connectivity:</h4>
                  <ul className="space-y-1 text-gray-600 text-sm">
                    <li>• 1Gbps dedicated fiber connection</li>
                    <li>• Zero outages in 6 months</li>
                    <li>• 30 minutes/week connectivity issues</li>
                    <li>• Flawless client presentations</li>
                  </ul>
                </div>
              </div>
              <div className="mt-4 p-3 bg-green-50 rounded">
                <p className="font-bold text-green-700">Result: €45,000 annual productivity gain + enhanced client satisfaction</p>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonial */}
        <section className="py-16 bg-gray-100">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-lg">
              <p className="text-lg text-gray-700 italic mb-4">
                "The difference is night and day. Before Workflo, our team constantly complained 
                about slow internet and dropped calls. Now, connectivity is something we never think 
                about – it just works perfectly. Our video conferences with international clients 
                are crystal clear, and large file transfers that used to take hours now finish in 
                minutes."
              </p>
              <p className="text-gray-600">
                <strong>— Thomas van Dijk</strong><br />
                Creative Director, Van Dijk Design Studio
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
            <h2 className="text-4xl font-bold mb-4">Ready for Connectivity That Accelerates Your Business?</h2>
            <p className="text-xl mb-8">Experience the difference enterprise-grade connectivity makes</p>
            <a href="/tevredenheidscheck" className="inline-block bg-yellow-400 text-black px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-500 transition">
              Schedule Your Connectivity Assessment
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