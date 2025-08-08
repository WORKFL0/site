'use client'

// import Header from '@/components/layout/Header' // REPLACED
import StaticHeader from '@/components/StaticHeader'
// import Footer from '@/components/layout/Footer' // REPLACED
import StaticFooter from '@/components/StaticFooter'

export default function MobileDeviceManagementPage() {
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
              Secure Mobile Device Management for the Modern Workforce
            </h1>
            <p className="text-xl text-gray-700 text-center max-w-3xl mx-auto">
              Your team uses smartphones, tablets, and laptops everywhere. Without proper management, 
              each device is a potential security breach waiting to happen. Our enterprise-grade 
              Mobile Device Management ensures productivity and security across all devices, 
              everywhere your team works.
            </p>
          </div>
        </section>

        {/* The Mobile Challenge */}
        <section className="py-16 bg-gray-100">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-black">The Mobile Security Challenge for Amsterdam Businesses</h2>
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className="bg-white p-8 rounded-lg shadow-md">
                <div className="w-16 h-16 bg-red-100 rounded-lg mb-4 flex items-center justify-center">
                  <span className="text-3xl">📱</span>
                </div>
                <h3 className="text-xl font-bold mb-3 text-black">BYOD Security Risks</h3>
                <p className="text-gray-600">
                  Employees access company data on personal devices with no security controls. 
                  One lost phone or malicious app can expose your entire business.
                </p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-md">
                <div className="w-16 h-16 bg-red-100 rounded-lg mb-4 flex items-center justify-center">
                  <span className="text-3xl">🚫</span>
                </div>
                <h3 className="text-xl font-bold mb-3 text-black">Shadow IT Proliferation</h3>
                <p className="text-gray-600">
                  Teams install unauthorized apps and services to boost productivity, creating 
                  security blind spots and compliance violations.
                </p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-md">
                <div className="w-16 h-16 bg-red-100 rounded-lg mb-4 flex items-center justify-center">
                  <span className="text-3xl">💸</span>
                </div>
                <h3 className="text-xl font-bold mb-3 text-black">Hidden Costs & Inefficiency</h3>
                <p className="text-gray-600">
                  No visibility into mobile expenses, duplicate subscriptions, and productivity 
                  lost to device management issues cost businesses thousands annually.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Our MDM Solution */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-black">Comprehensive Mobile Device Management</h2>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="bg-gray-50 p-8 rounded-lg">
                <div className="w-12 h-12 bg-yellow-400 rounded-lg mb-4 flex items-center justify-center">
                  <span className="text-2xl">🛡️</span>
                </div>
                <h3 className="text-xl font-bold mb-3 text-black">Advanced Security Controls</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>✓ Device encryption and secure boot</li>
                  <li>✓ Remote wipe and lock capabilities</li>
                  <li>✓ App whitelisting and blacklisting</li>
                  <li>✓ VPN enforcement and network access control</li>
                  <li>✓ Geofencing and location-based policies</li>
                </ul>
              </div>
              <div className="bg-gray-50 p-8 rounded-lg">
                <div className="w-12 h-12 bg-yellow-400 rounded-lg mb-4 flex items-center justify-center">
                  <span className="text-2xl">📊</span>
                </div>
                <h3 className="text-xl font-bold mb-3 text-black">Complete Visibility & Control</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>✓ Real-time device inventory and status</li>
                  <li>✓ App usage analytics and compliance</li>
                  <li>✓ Data usage monitoring and cost control</li>
                  <li>✓ Device health and performance metrics</li>
                  <li>✓ Automated compliance reporting</li>
                </ul>
              </div>
              <div className="bg-gray-50 p-8 rounded-lg">
                <div className="w-12 h-12 bg-yellow-400 rounded-lg mb-4 flex items-center justify-center">
                  <span className="text-2xl">⚙️</span>
                </div>
                <h3 className="text-xl font-bold mb-3 text-black">Streamlined Device Provisioning</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>✓ Zero-touch device enrollment</li>
                  <li>✓ Automated app installation and updates</li>
                  <li>✓ Corporate identity and certificate management</li>
                  <li>✓ Custom device profiles and configurations</li>
                  <li>✓ Self-service portal for users</li>
                </ul>
              </div>
              <div className="bg-gray-50 p-8 rounded-lg">
                <div className="w-12 h-12 bg-yellow-400 rounded-lg mb-4 flex items-center justify-center">
                  <span className="text-2xl">🔄</span>
                </div>
                <h3 className="text-xl font-bold mb-3 text-black">BYOD & Corporate Device Support</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>✓ Secure containerization for personal devices</li>
                  <li>✓ Work/personal profile separation</li>
                  <li>✓ Corporate-owned device lifecycle management</li>
                  <li>✓ Flexible policy enforcement</li>
                  <li>✓ Privacy-respecting management</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Platform Support */}
        <section className="py-16 bg-gray-100">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-black">Universal Platform Support</h2>
            <div className="grid md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-lg mb-4 mx-auto flex items-center justify-center">
                  <span className="text-3xl">🪟</span>
                </div>
                <h3 className="text-lg font-bold mb-3 text-black">Windows</h3>
                <ul className="space-y-1 text-gray-600 text-sm">
                  <li>• Windows 10/11 laptops</li>
                  <li>• Surface devices</li>
                  <li>• Hybrid/tablet devices</li>
                  <li>• Azure AD integration</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="w-16 h-16 bg-gray-100 rounded-lg mb-4 mx-auto flex items-center justify-center">
                  <span className="text-3xl">🍎</span>
                </div>
                <h3 className="text-lg font-bold mb-3 text-black">iOS & macOS</h3>
                <ul className="space-y-1 text-gray-600 text-sm">
                  <li>• iPhone and iPad devices</li>
                  <li>• MacBook and iMac systems</li>
                  <li>• Apple Business Manager</li>
                  <li>• DEP enrollment support</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="w-16 h-16 bg-green-100 rounded-lg mb-4 mx-auto flex items-center justify-center">
                  <span className="text-3xl">🤖</span>
                </div>
                <h3 className="text-lg font-bold mb-3 text-black">Android</h3>
                <ul className="space-y-1 text-gray-600 text-sm">
                  <li>• Samsung, Google, OnePlus</li>
                  <li>• Android Enterprise support</li>
                  <li>• Work profile management</li>
                  <li>• KNOX security integration</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-lg mb-4 mx-auto flex items-center justify-center">
                  <span className="text-3xl">🌐</span>
                </div>
                <h3 className="text-lg font-bold mb-3 text-black">Cross-Platform</h3>
                <ul className="space-y-1 text-gray-600 text-sm">
                  <li>• Unified management console</li>
                  <li>• Consistent policy enforcement</li>
                  <li>• Single sign-on integration</li>
                  <li>• Compliance across all platforms</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Key Features */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-black">Enterprise-Grade Features</h2>
            <div className="max-w-4xl mx-auto space-y-8">
              <div className="bg-gray-50 p-8 rounded-lg">
                <h3 className="text-2xl font-bold mb-4 text-black">Security & Compliance</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <ul className="space-y-2 text-gray-600">
                    <li>✓ Multi-factor authentication enforcement</li>
                    <li>✓ Certificate-based device authentication</li>
                    <li>✓ Conditional access policies</li>
                    <li>✓ Data loss prevention (DLP)</li>
                    <li>✓ Jailbreak/root detection</li>
                  </ul>
                  <ul className="space-y-2 text-gray-600">
                    <li>✓ GDPR compliance tools</li>
                    <li>✓ Industry-specific compliance (HIPAA, SOX)</li>
                    <li>✓ Secure email and document access</li>
                    <li>✓ Encrypted backup and restore</li>
                    <li>✓ Audit trails and forensics</li>
                  </ul>
                </div>
              </div>

              <div className="bg-gray-50 p-8 rounded-lg">
                <h3 className="text-2xl font-bold mb-4 text-black">Application Management</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <ul className="space-y-2 text-gray-600">
                    <li>✓ Corporate app store and catalog</li>
                    <li>✓ Silent app installation and updates</li>
                    <li>✓ App usage analytics and insights</li>
                    <li>✓ License management and optimization</li>
                    <li>✓ Custom line-of-business app deployment</li>
                  </ul>
                  <ul className="space-y-2 text-gray-600">
                    <li>✓ App wrapping and containerization</li>
                    <li>✓ Blacklist management for prohibited apps</li>
                    <li>✓ Version control and rollback</li>
                    <li>✓ Microsoft 365 integration</li>
                    <li>✓ Single sign-on (SSO) for all apps</li>
                  </ul>
                </div>
              </div>

              <div className="bg-gray-50 p-8 rounded-lg">
                <h3 className="text-2xl font-bold mb-4 text-black">Content & Data Management</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <ul className="space-y-2 text-gray-600">
                    <li>✓ Secure document sharing and collaboration</li>
                    <li>✓ Content synchronization across devices</li>
                    <li>✓ Document expiration and access control</li>
                    <li>✓ Corporate-only data containers</li>
                    <li>✓ Offline content protection</li>
                  </ul>
                  <ul className="space-y-2 text-gray-600">
                    <li>✓ Email encryption and rights management</li>
                    <li>✓ Cloud storage integration (OneDrive, SharePoint)</li>
                    <li>✓ Data backup and recovery</li>
                    <li>✓ Content classification and labeling</li>
                    <li>✓ Copy/paste restrictions</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Implementation Process */}
        <section className="py-16 bg-gray-100">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-black">Seamless MDM Implementation</h2>
            <div className="max-w-3xl mx-auto">
              <div className="space-y-8">
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="font-bold text-black">1</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-black">Current State Assessment</h3>
                    <p className="text-gray-600">
                      Inventory existing devices, assess security posture, and understand your 
                      unique business requirements. Identify compliance needs and user workflows.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="font-bold text-black">2</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-black">Policy Design & Testing</h3>
                    <p className="text-gray-600">
                      Create custom device policies tailored to your business. Test with pilot 
                      groups to ensure user experience and security balance.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="font-bold text-black">3</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-black">Phased Rollout</h3>
                    <p className="text-gray-600">
                      Gradual deployment across teams with comprehensive user training. 
                      Monitor adoption and adjust policies based on real-world usage.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="font-bold text-black">4</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-black">Ongoing Management</h3>
                    <p className="text-gray-600">
                      Continuous monitoring, policy optimization, and proactive support. 
                      Regular security assessments and compliance reporting.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits & ROI */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-black">Measurable Business Impact</h2>
            <div className="grid md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-12">
              <div className="text-center">
                <div className="text-5xl font-bold text-yellow-400 mb-2">85%</div>
                <p className="text-gray-600">Reduction in security incidents</p>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold text-yellow-400 mb-2">60%</div>
                <p className="text-gray-600">Faster device deployment</p>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold text-yellow-400 mb-2">40%</div>
                <p className="text-gray-600">Reduction in mobile costs</p>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold text-yellow-400 mb-2">99%</div>
                <p className="text-gray-600">Policy compliance rate</p>
              </div>
            </div>
            
            <div className="max-w-3xl mx-auto bg-gray-100 p-8 rounded-lg">
              <h3 className="text-xl font-bold mb-4 text-black">Case Study: Amsterdam Law Firm</h3>
              <p className="text-gray-700 mb-4">
                A 75-employee Amsterdam law firm implemented comprehensive MDM to secure client 
                data access across 120 devices (phones, tablets, laptops).
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-bold mb-2 text-black">Before MDM:</h4>
                  <ul className="space-y-1 text-gray-600 text-sm">
                    <li>• 3-4 security incidents per month</li>
                    <li>• 8 hours/week IT support for device issues</li>
                    <li>• €180/month per device management cost</li>
                    <li>• Manual device setup: 4 hours per device</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold mb-2 text-black">After MDM Implementation:</h4>
                  <ul className="space-y-1 text-gray-600 text-sm">
                    <li>• Zero security incidents in 12 months</li>
                    <li>• 1 hour/week IT support needed</li>
                    <li>• €95/month per device (47% reduction)</li>
                    <li>• Automated device setup: 15 minutes</li>
                  </ul>
                </div>
              </div>
              <div className="mt-4 p-3 bg-green-50 rounded">
                <p className="font-bold text-green-700">Result: €126,000 annual savings + enhanced security & compliance</p>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonial */}
        <section className="py-16 bg-gray-100">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-lg">
              <p className="text-lg text-gray-700 italic mb-4">
                "Workflo's MDM solution transformed how we handle mobile security. What used to be 
                our biggest IT headache – managing 80+ devices across our hybrid workforce – is now 
                completely automated. Our team is more productive, our data is secure, and we're 
                fully compliant with client security requirements."
              </p>
              <p className="text-gray-600">
                <strong>— Robert Jansen</strong><br />
                IT Manager, Jansen Consulting Group
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
            <h2 className="text-4xl font-bold mb-4">Ready to Secure Your Mobile Workforce?</h2>
            <p className="text-xl mb-8">Get enterprise-grade device management that just works</p>
            <a href="/tevredenheidscheck" className="inline-block bg-yellow-400 text-black px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-500 transition">
              Schedule Your MDM Assessment
            </a>
          </div>
        </section>
      </main>

      {/* Footer */}
      <StaticFooter />
    </div>
  )
}