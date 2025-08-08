'use client'

// import Header from '@/components/layout/Header' // REPLACED
import StaticHeader from '@/components/StaticHeader'
// import Footer from '@/components/layout/Footer' // REPLACED
import StaticFooter from '@/components/StaticFooter'

export default function ProjectManagementPage() {
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
              IT Project Management That Actually Delivers
            </h1>
            <p className="text-xl text-gray-700 text-center max-w-3xl mx-auto">
              73% of IT projects fail due to poor management. Don't let your technology investments 
              become another statistic. Our expert project managers ensure your IT initiatives 
              deliver on time, on budget, and drive real business value.
            </p>
          </div>
        </section>

        {/* The Problem */}
        <section className="py-16 bg-gray-100">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-black">Why IT Projects Fail for Amsterdam SMEs</h2>
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className="bg-white p-8 rounded-lg shadow-md">
                <div className="w-16 h-16 bg-red-100 rounded-lg mb-4 flex items-center justify-center">
                  <span className="text-3xl">⏰</span>
                </div>
                <h3 className="text-xl font-bold mb-3 text-black">Scope Creep & Delays</h3>
                <p className="text-gray-600">
                  Projects that start as 3-month implementations drag on for 12+ months, 
                  consuming budgets and disrupting business operations.
                </p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-md">
                <div className="w-16 h-16 bg-red-100 rounded-lg mb-4 flex items-center justify-center">
                  <span className="text-3xl">💸</span>
                </div>
                <h3 className="text-xl font-bold mb-3 text-black">Budget Overruns</h3>
                <p className="text-gray-600">
                  Without proper management, IT projects routinely exceed budgets by 50-200%, 
                  straining company finances and ROI.
                </p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-md">
                <div className="w-16 h-16 bg-red-100 rounded-lg mb-4 flex items-center justify-center">
                  <span className="text-3xl">🎯</span>
                </div>
                <h3 className="text-xl font-bold mb-3 text-black">Missed Business Objectives</h3>
                <p className="text-gray-600">
                  Projects deliver technically but fail to achieve business goals, leaving 
                  companies with expensive systems that don't drive value.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Approach */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-black">Proven Project Management Methodology</h2>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="bg-gray-50 p-8 rounded-lg">
                <div className="w-12 h-12 bg-yellow-400 rounded-lg mb-4 flex items-center justify-center">
                  <span className="text-2xl">📋</span>
                </div>
                <h3 className="text-xl font-bold mb-3 text-black">Business-Aligned Planning</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>✓ Clear business case and ROI definition</li>
                  <li>✓ Detailed requirements gathering</li>
                  <li>✓ Risk assessment and mitigation planning</li>
                  <li>✓ Stakeholder engagement strategy</li>
                </ul>
              </div>
              <div className="bg-gray-50 p-8 rounded-lg">
                <div className="w-12 h-12 bg-yellow-400 rounded-lg mb-4 flex items-center justify-center">
                  <span className="text-2xl">⚡</span>
                </div>
                <h3 className="text-xl font-bold mb-3 text-black">Agile Execution</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>✓ Iterative delivery with regular milestones</li>
                  <li>✓ Continuous stakeholder communication</li>
                  <li>✓ Rapid issue resolution protocols</li>     
                  <li>✓ Flexible scope management</li>
                </ul>
              </div>
              <div className="bg-gray-50 p-8 rounded-lg">
                <div className="w-12 h-12 bg-yellow-400 rounded-lg mb-4 flex items-center justify-center">
                  <span className="text-2xl">👥</span>
                </div>
                <h3 className="text-xl font-bold mb-3 text-black">Expert Team Coordination</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>✓ Vendor management and coordination</li>
                  <li>✓ Technical team leadership</li>
                  <li>✓ Quality assurance and testing</li>
                  <li>✓ Resource optimization</li>
                </ul>
              </div>
              <div className="bg-gray-50 p-8 rounded-lg">
                <div className="w-12 h-12 bg-yellow-400 rounded-lg mb-4 flex items-center justify-center">
                  <span className="text-2xl">📊</span>
                </div>
                <h3 className="text-xl font-bold mb-3 text-black">Transparent Reporting</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>✓ Real-time project dashboards</li>
                  <li>✓ Regular progress reports</li>
                  <li>✓ Budget tracking and forecasting</li>
                  <li>✓ Success metrics measurement</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Project Types */}
        <section className="py-16 bg-gray-100">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-black">IT Projects We Excel At</h2>
            <div className="max-w-4xl mx-auto space-y-8">
              <div className="bg-white p-8 rounded-lg shadow-md">
                <h3 className="text-2xl font-bold mb-4 text-black">Cloud Migration Projects</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-bold mb-2 text-black">What We Manage:</h4>
                    <ul className="space-y-1 text-gray-600 text-sm">
                      <li>• Infrastructure assessment and planning</li>
                      <li>• Application migration strategy</li>
                      <li>• Data migration and validation</li>
                      <li>• User training and adoption</li>
                      <li>• Go-live coordination and support</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold mb-2 text-black">Typical Timeline & Results:</h4>
                    <ul className="space-y-1 text-gray-600 text-sm">
                      <li>• 3-6 months for complete migration</li>
                      <li>• 40% reduction in IT infrastructure costs</li>
                      <li>• 99.9% uptime achievement</li>
                      <li>• Zero data loss guarantee</li>
                      <li>• Full team productivity maintained</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-md">
                <h3 className="text-2xl font-bold mb-4 text-black">ERP Implementation</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-bold mb-2 text-black">What We Manage:</h4>
                    <ul className="space-y-1 text-gray-600 text-sm">
                      <li>• Business process analysis and optimization</li>
                      <li>• System configuration and customization</li>
                      <li>• Data migration and cleansing</li>
                      <li>• Integration with existing systems</li>
                      <li>• Comprehensive user training programs</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold mb-2 text-black">Typical Timeline & Results:</h4>
                    <ul className="space-y-1 text-gray-600 text-sm">
                      <li>• 6-12 months for full implementation</li>
                      <li>• 30% improvement in operational efficiency</li>
                      <li>• 50% reduction in manual processes</li>
                      <li>• Real-time business visibility</li>
                      <li>• Scalable foundation for growth</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-md">
                <h3 className="text-2xl font-bold mb-4 text-black">Security Infrastructure Overhaul</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-bold mb-2 text-black">What We Manage:</h4>
                    <ul className="space-y-1 text-gray-600 text-sm">
                      <li>• Security assessment and gap analysis</li>
                      <li>• Multi-layered security architecture design</li>
                      <li>• Security tool deployment and configuration</li>
                      <li>• Policy development and compliance</li>
                      <li>• Security awareness training rollout</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold mb-2 text-black">Typical Timeline & Results:</h4>
                    <ul className="space-y-1 text-gray-600 text-sm">
                      <li>• 4-8 months for comprehensive upgrade</li>
                      <li>• 95% reduction in security incidents</li>
                      <li>• GDPR and compliance certification</li>
                      <li>• 24/7 threat monitoring</li>
                      <li>• Cyber insurance qualification</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-md">
                <h3 className="text-2xl font-bold mb-4 text-black">Digital Workplace Transformation</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-bold mb-2 text-black">What We Manage:</h4>
                    <ul className="space-y-1 text-gray-600 text-sm">
                      <li>• Microsoft 365 deployment and optimization</li>
                      <li>• Collaboration platform integration</li>
                      <li>• Mobile device management implementation</li>
                      <li>• Remote work infrastructure setup</li>
                      <li>• Change management and adoption</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold mb-2 text-black">Typical Timeline & Results:</h4>
                    <ul className="space-y-1 text-gray-600 text-sm">
                      <li>• 2-4 months for full deployment</li>
                      <li>• 60% improvement in collaboration</li>
                      <li>• 40% increase in remote work productivity</li>
                      <li>• 25% reduction in communication overhead</li>
                      <li>• Enhanced employee satisfaction</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Success Metrics */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-black">Our Project Success Track Record</h2>
            <div className="grid md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-12">
              <div className="text-center">
                <div className="text-5xl font-bold text-yellow-400 mb-2">96%</div>
                <p className="text-gray-600">Projects delivered on time</p>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold text-yellow-400 mb-2">94%</div>
                <p className="text-gray-600">Projects within budget</p>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold text-yellow-400 mb-2">98%</div>
                <p className="text-gray-600">Client satisfaction rate</p>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold text-yellow-400 mb-2">100%</div>
                <p className="text-gray-600">Business objectives achieved</p>
              </div>
            </div>
          </div>
        </section>

        {/* Project Management Process */}
        <section className="py-16 bg-gray-100">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-black">Our 5-Phase Project Management Process</h2>
            <div className="max-w-3xl mx-auto">
              <div className="space-y-8">
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="font-bold text-black">1</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-black">Initiation & Discovery</h3>
                    <p className="text-gray-600">
                      Define project scope, objectives, and success criteria. Identify stakeholders, 
                      constraints, and risks. Establish project charter and governance structure.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="font-bold text-black">2</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-black">Planning & Design</h3>
                    <p className="text-gray-600">
                      Create detailed project plan with timelines, resources, and milestones. 
                      Design technical architecture and develop risk mitigation strategies.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="font-bold text-black">3</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-black">Execution & Monitoring</h3>
                    <p className="text-gray-600">
                      Implement project deliverables according to plan. Monitor progress, manage 
                      resources, and coordinate team activities. Maintain quality standards.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="font-bold text-black">4</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-black">Testing & Deployment</h3>
                    <p className="text-gray-600">
                      Comprehensive testing and quality assurance. User acceptance testing and 
                      training. Controlled deployment with rollback procedures.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="font-bold text-black">5</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-black">Closure & Support</h3>
                    <p className="text-gray-600">
                      Project handover and documentation. Post-implementation support and 
                      optimization. Success measurement and lessons learned documentation.
                    </p>
                  </div>
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
                "Workflo managed our complex ERP implementation flawlessly. What could have been 
                a 18-month nightmare was delivered in 8 months, on budget, with zero business 
                disruption. Their project management expertise transformed our operations and gave 
                us the foundation for sustainable growth."
              </p>
              <p className="text-gray-600">
                <strong>— Erik van der Meer</strong><br />
                CEO, Amsterdam Manufacturing Solutions
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
            <h2 className="text-4xl font-bold mb-4">Ready to Guarantee Your IT Project Success?</h2>
            <p className="text-xl mb-8">Let our expert project managers turn your IT vision into reality</p>
            <a href="/tevredenheidscheck" className="inline-block bg-yellow-400 text-black px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-500 transition">
              Schedule Your Project Planning Session
            </a>
          </div>
        </section>
      </main>

      {/* Footer */}
      <StaticFooter />
    </div>
  )
}