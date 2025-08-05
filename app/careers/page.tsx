export default function CareersPage() {
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

      <main>
        {/* Hero Section */}
        <section className="relative py-20 bg-white">
          <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-yellow-400 via-black to-yellow-400"></div>
          <div className="container mx-auto px-4">
            <h1 className="text-5xl font-bold text-center text-black mb-6">
              Join the Team That's Transforming Amsterdam IT
            </h1>
            <p className="text-xl text-gray-700 text-center max-w-3xl mx-auto">
              At Workflo, we don't just provide IT services – we're building the future of 
              business technology in Amsterdam. Join our team of passionate professionals who 
              believe that great technology should drive business success, not create headaches.
            </p>
          </div>
        </section>

        {/* Why Work With Us */}
        <section className="py-16 bg-gray-100">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-black">Why Work With Workflo?</h2>
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className="bg-white p-8 rounded-lg shadow-md">
                <div className="w-16 h-16 bg-yellow-400 rounded-lg mb-4 flex items-center justify-center">
                  <span className="text-3xl">🚀</span>
                </div>
                <h3 className="text-xl font-bold mb-3 text-black">Make Real Impact</h3>
                <p className="text-gray-600">
                  Every solution you build directly helps Amsterdam businesses grow. See your 
                  work transform how companies operate and succeed.
                </p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-md">
                <div className="w-16 h-16 bg-yellow-400 rounded-lg mb-4 flex items-center justify-center">
                  <span className="text-3xl">🎯</span>
                </div>
                <h3 className="text-xl font-bold mb-3 text-black">Professional Growth</h3>
                <p className="text-gray-600">
                  Work with cutting-edge technology and continuous learning opportunities. 
                  We invest in your development because your growth drives our success.
                </p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-md">
                <div className="w-16 h-16 bg-yellow-400 rounded-lg mb-4 flex items-center justify-center">
                  <span className="text-3xl">🤝</span>
                </div>
                <h3 className="text-xl font-bold mb-3 text-black">Collaborative Culture</h3>
                <p className="text-gray-600">
                  Join a team that values directness, innovation, and mutual support. 
                  We succeed together and celebrate each other's achievements.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Current Openings */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-black">Current Opportunities</h2>
            <div className="max-w-4xl mx-auto space-y-6">
              <div className="bg-gray-50 p-8 rounded-lg border-l-4 border-yellow-400">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-bold text-black">IT Support Specialist</h3>
                  <span className="bg-yellow-400 text-black px-3 py-1 rounded font-bold text-sm">Full-time</span>
                </div>
                <p className="text-gray-600 mb-4">
                  Join our frontline team providing exceptional IT support to Amsterdam businesses. 
                  Perfect for someone passionate about solving problems and helping companies succeed.
                </p>
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <h4 className="font-bold mb-2 text-black">What You'll Do:</h4>
                    <ul className="space-y-1 text-gray-600 text-sm">
                      <li>• Provide technical support via phone, email, and on-site</li>
                      <li>• Troubleshoot hardware and software issues</li>
                      <li>• Manage user accounts and security settings</li>
                      <li>• Document solutions and maintain client relationships</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold mb-2 text-black">What We're Looking For:</h4>
                    <ul className="space-y-1 text-gray-600 text-sm">
                      <li>• 2+ years IT support experience</li>
                      <li>• Strong communication skills in Dutch and English</li>
                      <li>• Experience with Windows, Microsoft 365, and networking</li>
                      <li>• Customer service mindset and problem-solving skills</li>
                    </ul>
                  </div>
                </div>
                <a href="mailto:careers@workflo.it?subject=IT Support Specialist Application" 
                   className="inline-block bg-black text-white px-6 py-2 rounded hover:bg-gray-800 transition">
                  Apply Now
                </a>
              </div>

              <div className="bg-gray-50 p-8 rounded-lg border-l-4 border-yellow-400">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-bold text-black">Systems Engineer</h3>
                  <span className="bg-yellow-400 text-black px-3 py-1 rounded font-bold text-sm">Full-time</span>
                </div>
                <p className="text-gray-600 mb-4">
                  Design and implement robust IT infrastructure solutions for growing Amsterdam 
                  businesses. Shape the technology backbone that drives business success.
                </p>
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <h4 className="font-bold mb-2 text-black">What You'll Do:</h4>
                    <ul className="space-y-1 text-gray-600 text-sm">
                      <li>• Design and implement cloud and on-premise solutions</li>
                      <li>• Manage server infrastructure and virtualization</li>
                      <li>• Implement security protocols and compliance measures</li>
                      <li>• Lead complex projects and mentor junior team members</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold mb-2 text-black">What We're Looking For:</h4>
                    <ul className="space-y-1 text-gray-600 text-sm">
                      <li>• 5+ years systems administration experience</li>
                      <li>• Expertise in Azure, AWS, or hybrid cloud environments</li>
                      <li>• Strong networking and security knowledge</li>
                      <li>• Project management and leadership experience</li>
                    </ul>
                  </div>
                </div>
                <a href="mailto:careers@workflo.it?subject=Systems Engineer Application" 
                   className="inline-block bg-black text-white px-6 py-2 rounded hover:bg-gray-800 transition">
                  Apply Now
                </a>
              </div>

              <div className="bg-gray-50 p-8 rounded-lg border-l-4 border-yellow-400">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-bold text-black">Business Development Manager</h3>
                  <span className="bg-yellow-400 text-black px-3 py-1 rounded font-bold text-sm">Full-time</span>
                </div>
                <p className="text-gray-600 mb-4">
                  Help grow Workflo by connecting with Amsterdam businesses that need better IT. 
                  Combine your sales skills with technical knowledge to make a real difference.
                </p>
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <h4 className="font-bold mb-2 text-black">What You'll Do:</h4>
                    <ul className="space-y-1 text-gray-600 text-sm">
                      <li>• Identify and engage potential clients in Amsterdam</li>
                      <li>• Conduct IT assessments and present solutions</li>
                      <li>• Build long-term relationships with business owners</li>
                      <li>• Collaborate with technical team on client solutions</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold mb-2 text-black">What We're Looking For:</h4>
                    <ul className="space-y-1 text-gray-600 text-sm">
                      <li>• 3+ years B2B sales experience, preferably IT services</li>
                      <li>• Strong understanding of business technology needs</li>
                      <li>• Excellent communication and presentation skills</li>
                      <li>• Results-driven with a consultative sales approach</li>
                    </ul>
                  </div>
                </div>
                <a href="mailto:careers@workflo.it?subject=Business Development Manager Application" 
                   className="inline-block bg-black text-white px-6 py-2 rounded hover:bg-gray-800 transition">
                  Apply Now
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-16 bg-gray-100">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-black">What We Offer</h2>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="font-bold mb-3 text-black">Competitive Package</h3>
                <ul className="space-y-2 text-gray-600 text-sm">
                  <li>• Market-competitive salary</li>
                  <li>• Performance-based bonuses</li>
                  <li>• Comprehensive health insurance</li>
                  <li>• Pension contribution</li>
                  <li>• 25 vacation days + public holidays</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="font-bold mb-3 text-black">Professional Development</h3>
                <ul className="space-y-2 text-gray-600 text-sm">
                  <li>• Certification and training budget</li>
                  <li>• Conference attendance opportunities</li>
                  <li>• Access to latest technology and tools</li>
                  <li>• Mentorship and career guidance</li>
                  <li>• Cross-team project opportunities</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="font-bold mb-3 text-black">Work-Life Balance</h3>
                <ul className="space-y-2 text-gray-600 text-sm">
                  <li>• Flexible working hours</li>
                  <li>• Hybrid remote/office options</li>
                  <li>• Modern Amsterdam office location</li>
                  <li>• Team events and outings</li>
                  <li>• Wellness programs</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="font-bold mb-3 text-black">Growth Opportunities</h3>
                <ul className="space-y-2 text-gray-600 text-sm">
                  <li>• Clear career progression paths</li>
                  <li>• Leadership development programs</li>
                  <li>• Opportunity to shape company direction</li>
                  <li>• Innovation and idea sharing encouraged</li>
                  <li>• Cross-functional skill development</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Culture */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-black">Our Culture</h2>
            <div className="max-w-3xl mx-auto bg-gray-100 p-8 rounded-lg">
              <p className="text-lg text-gray-700 italic mb-4">
                "At Workflo, we believe the best work happens when people feel valued, challenged, 
                and supported. We've built a culture where expertise is respected, ideas are heard, 
                and everyone contributes to our collective success. Join us and be part of 
                transforming how Amsterdam businesses use technology."
              </p>
              <p className="text-gray-600">
                <strong>— Florian</strong><br />
                Founder & CEO, Workflo
              </p>
            </div>
          </div>
        </section>

        {/* Application Process */}
        <section className="py-16 bg-gray-100">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-black">How to Apply</h2>
            <div className="max-w-3xl mx-auto">
              <div className="space-y-6">
                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 bg-yellow-400 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="font-bold text-black">1</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-2 text-black">Submit Your Application</h3>
                    <p className="text-gray-600">
                      Send your CV and cover letter to careers@workflo.it. Tell us why you're 
                      passionate about helping Amsterdam businesses succeed through technology.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 bg-yellow-400 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="font-bold text-black">2</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-2 text-black">Initial Interview</h3>
                    <p className="text-gray-600">
                      We'll have a conversation about your experience, goals, and how you align 
                      with our values. This is also your chance to ask questions about the role.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 bg-yellow-400 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="font-bold text-black">3</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-2 text-black">Technical Assessment</h3>
                    <p className="text-gray-600">
                      Depending on the role, you may complete a practical assessment or meet 
                      with our technical team to discuss your expertise.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 bg-yellow-400 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="font-bold text-black">4</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-2 text-black">Welcome to the Team</h3>
                    <p className="text-gray-600">
                      Once we make an offer and you accept, we'll provide comprehensive onboarding 
                      to set you up for success from day one.
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
            <h2 className="text-4xl font-bold mb-4">Ready to Make Your Mark?</h2>
            <p className="text-xl mb-8">Join the team that's transforming Amsterdam IT</p>
            <a href="mailto:careers@workflo.it?subject=General Inquiry" className="inline-block bg-yellow-400 text-black px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-500 transition">
              Start Your Journey With Us
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