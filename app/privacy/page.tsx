'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { PhoneIcon, EnvelopeIcon, MapPinIcon } from '@heroicons/react/24/outline'

export default function PrivacyPolicy() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header with Warning Tape */}
      <div className="bg-gradient-to-r from-warning-yellow via-warning-black to-warning-yellow h-2"></div>
      
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center">
              <Link href="/" className="flex items-center space-x-2">
                <div className="w-10 h-10 bg-primary-600 rounded-lg flex items-center justify-center">
                  <span className="text-black font-bold text-xl">W</span>
                </div>
                <span className="text-2xl font-bold text-gray-900">Workflo</span>
              </Link>
            </div>
            <nav className="hidden md:flex items-center space-x-8">
              <Link href="/" className="text-gray-700 hover:text-primary-600 font-medium transition-colors">
                Home
              </Link>
              <Link href="/diensten" className="text-gray-700 hover:text-primary-600 font-medium transition-colors">
                Diensten
              </Link>
              <Link href="/over-ons" className="text-gray-700 hover:text-primary-600 font-medium transition-colors">
                Over Ons
              </Link>
              <Link href="/contact" className="text-gray-700 hover:text-primary-600 font-medium transition-colors">
                Contact
              </Link>
            </nav>
          </div>
        </div>
      </header>

      <main className="pt-8 pb-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="text-4xl font-bold mb-8 text-black">Privacy Policy</h1>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600 mb-8">
              <strong>Last updated: January 2025</strong>
            </p>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4 text-black">1. Introduction</h2>
              <p className="text-gray-700">
                Workflo B.V. ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website workflo.it or use our services.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4 text-black">2. Information We Collect</h2>
              
              <h3 className="text-xl font-semibold mb-3 text-black">Personal Information</h3>
              <p className="text-gray-700 mb-4">We may collect personal information that you provide to us, including but not limited to:</p>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li>Name and surname</li>
                <li>Email address</li>
                <li>Phone number</li>
                <li>Company name and position</li>
                <li>Business address</li>
                <li>Information provided through our IT Health Check</li>
              </ul>

              <h3 className="text-xl font-semibold mb-3 text-black">Technical Information</h3>
              <p className="text-gray-700 mb-4">We automatically collect certain information when you visit our website:</p>
              <ul className="list-disc pl-6 text-gray-700">
                <li>IP address</li>
                <li>Browser type and version</li>
                <li>Operating system</li>
                <li>Referring website</li>
                <li>Pages visited and time spent</li>
                <li>Click-through rates</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4 text-black">3. How We Use Your Information</h2>
              <p className="text-gray-700 mb-4">We use the information we collect for the following purposes:</p>
              <ul className="list-disc pl-6 text-gray-700">
                <li>To provide and maintain our IT services</li>
                <li>To respond to your inquiries and support requests</li>
                <li>To send you technical notices and support messages</li>
                <li>To communicate about products, services, and events</li>
                <li>To monitor and analyze usage and trends</li>
                <li>To detect, prevent, and address technical issues</li>
                <li>To comply with legal obligations</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4 text-black">4. Legal Basis for Processing (GDPR)</h2>
              <p className="text-gray-700 mb-4">We process your personal data on the following legal bases:</p>
              <ul className="list-disc pl-6 text-gray-700">
                <li><strong>Contract:</strong> Processing necessary for the performance of a contract with you</li>
                <li><strong>Legitimate Interests:</strong> Processing necessary for our legitimate business interests</li>
                <li><strong>Consent:</strong> Where you have given us explicit consent</li>
                <li><strong>Legal Obligation:</strong> Processing necessary to comply with legal requirements</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4 text-black">5. Data Sharing and Disclosure</h2>
              <p className="text-gray-700 mb-4">We may share your information with:</p>
              <ul className="list-disc pl-6 text-gray-700">
                <li><strong>Service Providers:</strong> Third-party vendors who perform services on our behalf</li>
                <li><strong>Business Partners:</strong> Microsoft, Cisco, and other technology partners as necessary</li>
                <li><strong>Legal Requirements:</strong> When required by law or to protect our rights</li>
                <li><strong>Business Transfers:</strong> In connection with any merger or acquisition</li>
              </ul>
              <p className="text-gray-700 mt-4">We do not sell your personal information to third parties.</p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4 text-black">6. Data Security</h2>
              <p className="text-gray-700">
                We implement appropriate technical and organizational measures to protect your personal information against accidental or unlawful destruction, loss, alteration, unauthorized disclosure, or access. This includes encryption, access controls, and regular security assessments.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4 text-black">7. Data Retention</h2>
              <p className="text-gray-700">
                We retain your personal information only for as long as necessary to fulfill the purposes for which it was collected, including legal, accounting, or reporting requirements. Typically, we retain customer data for the duration of our business relationship plus 7 years for tax and legal purposes.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4 text-black">8. Your Rights Under GDPR</h2>
              <p className="text-gray-700 mb-4">As an EU resident, you have the following rights:</p>
              <ul className="list-disc pl-6 text-gray-700">
                <li><strong>Access:</strong> Request a copy of your personal data</li>
                <li><strong>Rectification:</strong> Request correction of inaccurate data</li>
                <li><strong>Erasure:</strong> Request deletion of your data</li>
                <li><strong>Restriction:</strong> Request limitation of processing</li>
                <li><strong>Portability:</strong> Receive your data in a structured format</li>
                <li><strong>Objection:</strong> Object to processing based on legitimate interests</li>
                <li><strong>Automated Decision-Making:</strong> Not be subject to automated decision-making</li>
              </ul>
              <p className="text-gray-700 mt-4">
                To exercise these rights, please contact us at privacy@workflo.it
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4 text-black">9. Cookies</h2>
              <p className="text-gray-700">
                We use cookies and similar tracking technologies to track activity on our website and store certain information. For detailed information about the cookies we use and your choices regarding cookies, please see our <Link href="/cookies" className="text-primary-600 hover:text-primary-700">Cookie Policy</Link>.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4 text-black">10. International Data Transfers</h2>
              <p className="text-gray-700">
                Your information may be transferred to and maintained on servers located outside of your country. We ensure appropriate safeguards are in place for such transfers, including Standard Contractual Clauses approved by the European Commission.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4 text-black">11. Children's Privacy</h2>
              <p className="text-gray-700">
                Our services are not directed to individuals under 16 years of age. We do not knowingly collect personal information from children under 16.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4 text-black">12. Changes to This Policy</h2>
              <p className="text-gray-700">
                We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4 text-black">13. Contact Information</h2>
              <p className="text-gray-700">
                If you have questions about this Privacy Policy or our data practices, please contact us:
              </p>
              <div className="mt-4 p-4 bg-gray-50 rounded-lg">
                <p className="text-gray-700">
                  <strong>Workflo B.V.</strong><br />
                  Koivistokade 3<br />
                  1013 AC Amsterdam<br />
                  Netherlands<br />
                  Email: privacy@workflo.it<br />
                  Phone: 020-30 80 465
                </p>
              </div>
              <p className="text-gray-700 mt-4">
                <strong>Data Protection Officer:</strong> dpo@workflo.it
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4 text-black">14. Supervisory Authority</h2>
              <p className="text-gray-700">
                You have the right to lodge a complaint with the Dutch Data Protection Authority (Autoriteit Persoonsgegevens):
              </p>
              <div className="mt-4 p-4 bg-gray-50 rounded-lg">
                <p className="text-gray-700">
                  <strong>Autoriteit Persoonsgegevens</strong><br />
                  Postbus 93374<br />
                  2509 AJ Den Haag<br />
                  Phone: 0900-2001201<br />
                  Website: <a href="https://autoriteitpersoonsgegevens.nl" className="text-primary-600 hover:text-primary-700" target="_blank" rel="noopener noreferrer">autoriteitpersoonsgegevens.nl</a>
                </p>
              </div>
            </section>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-10 h-10 bg-primary-600 rounded-lg flex items-center justify-center">
                  <span className="text-black font-bold text-xl">W</span>
                </div>
                <span className="text-2xl font-bold">Workflo</span>
              </div>
              <p className="text-gray-400 mb-4">
                Uw betrouwbare IT-partner in Amsterdam sinds 2015.
              </p>
              <div className="space-y-2">
                <div className="flex items-center">
                  <MapPinIcon className="w-5 h-5 text-primary-600 mr-2" />
                  <span className="text-sm">Koivistokade 3, 1013 AC Amsterdam</span>
                </div>
                <div className="flex items-center">
                  <PhoneIcon className="w-5 h-5 text-primary-600 mr-2" />
                  <span className="text-sm">020 308 0465</span>
                </div>
                <div className="flex items-center">
                  <EnvelopeIcon className="w-5 h-5 text-primary-600 mr-2" />
                  <span className="text-sm">info@workflo.it</span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="font-bold text-lg mb-4">Legal</h3>
              <ul className="space-y-2">
                <li><Link href="/privacy" className="text-gray-400 hover:text-primary-600">Privacy Policy</Link></li>
                <li><Link href="/terms" className="text-gray-400 hover:text-primary-600">Terms of Service</Link></li>
                <li><Link href="/cookies" className="text-gray-400 hover:text-primary-600">Cookie Policy</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-lg mb-4">Company</h3>
              <ul className="space-y-2">
                <li><Link href="/over-ons" className="text-gray-400 hover:text-primary-600">Over Ons</Link></li>
                <li><Link href="/contact" className="text-gray-400 hover:text-primary-600">Contact</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-lg mb-4">Services</h3>
              <ul className="space-y-2">
                <li><Link href="/diensten" className="text-gray-400 hover:text-primary-600">All Services</Link></li>
                <li><Link href="/tevredenheidscheck" className="text-gray-400 hover:text-primary-600">Satisfaction Check</Link></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              &copy; 2025 Workflo B.V. All rights reserved.
            </p>
          </div>
        </div>
      </footer>

      {/* Warning Tape Bottom */}
      <div className="bg-gradient-to-r from-warning-yellow via-warning-black to-warning-yellow h-2"></div>
    </div>
  )
}