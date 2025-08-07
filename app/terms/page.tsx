'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { PhoneIcon, EnvelopeIcon, MapPinIcon } from '@heroicons/react/24/outline'
import DangerTape from '@/components/DangerTape'

export default function TermsAndConditions() {
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
      <DangerTape height="h-3" showText={true} />
      
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center">
              <Link href="/" className="flex items-center">
                <div className="w-10 h-10 bg-primary-600 rounded-lg flex items-center justify-center">
                  <span className="text-black font-bold text-xl">W</span>
                </div>
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
          <h1 className="text-4xl font-bold mb-8 text-black">Terms and Conditions</h1>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600 mb-8">
              <strong>Effective Date: January 1, 2025</strong>
            </p>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4 text-black">1. Agreement to Terms</h2>
              <p className="text-gray-700">
                By accessing or using the services of Workflo B.V. (hereinafter "Workflo," "we," "us," or "our"), you agree to be bound by these Terms and Conditions ("Terms"). If you disagree with any part of these terms, you may not access our services.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4 text-black">2. Company Information</h2>
              <div className="p-4 bg-gray-50 rounded-lg">
                <p className="text-gray-700">
                  <strong>Workflo B.V.</strong><br />
                  Koivistokade 3<br />
                  1013 AC Amsterdam, Netherlands<br />
                  KVK: [Chamber of Commerce Number]<br />
                  BTW: [VAT Number]<br />
                  Email: info@workflo.it<br />
                  Phone: 020-30 80 465
                </p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4 text-black">3. Services Description</h2>
              <p className="text-gray-700 mb-4">Workflo provides the following IT services to businesses:</p>
              <ul className="list-disc pl-6 text-gray-700">
                <li>Managed IT Services and Support</li>
                <li>Cybersecurity Solutions</li>
                <li>Cloud Services and Migration</li>
                <li>IT Consulting and Strategy</li>
                <li>Project Management</li>
                <li>Network Monitoring and Management</li>
                <li>Audio Visual Solutions</li>
                <li>Mobile Device Management</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4 text-black">4. Service Agreements</h2>
              <p className="text-gray-700 mb-4">
                4.1. <strong>Service Level Agreement (SLA):</strong> Specific service levels, response times, and uptime guarantees are defined in individual Service Level Agreements provided with your service contract.
              </p>
              <p className="text-gray-700 mb-4">
                4.2. <strong>Support Hours:</strong> Standard support is available Monday through Friday, 8:00 AM to 6:00 PM CET. Emergency support availability depends on your service plan.
              </p>
              <p className="text-gray-700">
                4.3. <strong>Remote Access:</strong> You authorize Workflo to remotely access your systems for maintenance and support purposes as outlined in your service agreement.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4 text-black">5. Payment Terms</h2>
              <p className="text-gray-700 mb-4">
                5.1. <strong>Billing:</strong> Services are billed monthly in advance unless otherwise specified in your service agreement.
              </p>
              <p className="text-gray-700 mb-4">
                5.2. <strong>Payment Due:</strong> Invoices are due within 14 days of receipt unless otherwise agreed.
              </p>
              <p className="text-gray-700 mb-4">
                5.3. <strong>Late Payment:</strong> Late payments may incur interest at the statutory commercial rate plus collection costs.
              </p>
              <p className="text-gray-700">
                5.4. <strong>Price Changes:</strong> We reserve the right to adjust prices annually with 30 days' notice.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4 text-black">6. Client Responsibilities</h2>
              <p className="text-gray-700 mb-4">As our client, you agree to:</p>
              <ul className="list-disc pl-6 text-gray-700">
                <li>Provide accurate and complete information necessary for service delivery</li>
                <li>Maintain valid licenses for all software used</li>
                <li>Implement reasonable security measures as advised</li>
                <li>Backup critical data regularly</li>
                <li>Provide timely access to systems and facilities</li>
                <li>Designate authorized contacts for service requests</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4 text-black">7. Data Protection and Security</h2>
              <p className="text-gray-700 mb-4">
                7.1. <strong>Confidentiality:</strong> We maintain strict confidentiality of all client information and data.
              </p>
              <p className="text-gray-700 mb-4">
                7.2. <strong>GDPR Compliance:</strong> We comply with all applicable data protection regulations, including GDPR.
              </p>
              <p className="text-gray-700 mb-4">
                7.3. <strong>Data Processing:</strong> Our data processing practices are detailed in our Privacy Policy and Data Processing Agreement.
              </p>
              <p className="text-gray-700">
                7.4. <strong>Security Measures:</strong> We implement industry-standard security measures to protect your data and systems.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4 text-black">8. Intellectual Property</h2>
              <p className="text-gray-700 mb-4">
                8.1. <strong>Ownership:</strong> Each party retains ownership of its pre-existing intellectual property.
              </p>
              <p className="text-gray-700 mb-4">
                8.2. <strong>License:</strong> We grant you a limited license to use any software or materials we provide solely for your internal business purposes.
              </p>
              <p className="text-gray-700">
                8.3. <strong>Feedback:</strong> Any feedback or suggestions you provide may be used by us without obligation to you.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4 text-black">9. Limitation of Liability</h2>
              <p className="text-gray-700 mb-4">
                9.1. <strong>Maximum Liability:</strong> Our total liability for any claim shall not exceed the amount paid by you for services in the 12 months preceding the claim.
              </p>
              <p className="text-gray-700 mb-4">
                9.2. <strong>Exclusions:</strong> We are not liable for indirect, incidental, special, or consequential damages, including lost profits or data loss.
              </p>
              <p className="text-gray-700 mb-4">
                9.3. <strong>Force Majeure:</strong> Neither party is liable for delays or failures due to circumstances beyond reasonable control.
              </p>
              <p className="text-gray-700">
                9.4. <strong>Third-Party Services:</strong> We are not responsible for third-party services or products, even if recommended by us.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4 text-black">10. Warranties and Disclaimers</h2>
              <p className="text-gray-700 mb-4">
                10.1. <strong>Service Warranty:</strong> We warrant that services will be performed in a professional and workmanlike manner.
              </p>
              <p className="text-gray-700 mb-4">
                10.2. <strong>No Other Warranties:</strong> Services are provided "as is" without any other warranties, express or implied.
              </p>
              <p className="text-gray-700">
                10.3. <strong>Results:</strong> We do not guarantee specific results or outcomes from our services.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4 text-black">11. Indemnification</h2>
              <p className="text-gray-700">
                You agree to indemnify and hold Workflo harmless from any claims, damages, or expenses arising from your breach of these Terms, violation of laws, or misuse of our services.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4 text-black">12. Termination</h2>
              <p className="text-gray-700 mb-4">
                12.1. <strong>Term:</strong> Service agreements continue for the initial term specified and renew automatically unless terminated.
              </p>
              <p className="text-gray-700 mb-4">
                12.2. <strong>Termination Notice:</strong> Either party may terminate with 30 days' written notice before the renewal date.
              </p>
              <p className="text-gray-700 mb-4">
                12.3. <strong>Immediate Termination:</strong> We may terminate immediately for non-payment or material breach.
              </p>
              <p className="text-gray-700">
                12.4. <strong>Effect of Termination:</strong> Upon termination, we will provide reasonable assistance for transition of services.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4 text-black">13. Dispute Resolution</h2>
              <p className="text-gray-700 mb-4">
                13.1. <strong>Negotiation:</strong> Parties will first attempt to resolve disputes through good faith negotiation.
              </p>
              <p className="text-gray-700 mb-4">
                13.2. <strong>Mediation:</strong> If negotiation fails, disputes will be submitted to mediation in Amsterdam.
              </p>
              <p className="text-gray-700">
                13.3. <strong>Jurisdiction:</strong> These Terms are governed by Dutch law, and disputes are subject to Amsterdam courts' jurisdiction.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4 text-black">14. General Provisions</h2>
              <p className="text-gray-700 mb-4">
                14.1. <strong>Entire Agreement:</strong> These Terms and your service agreement constitute the entire agreement between parties.
              </p>
              <p className="text-gray-700 mb-4">
                14.2. <strong>Amendments:</strong> We may update these Terms with 30 days' notice via email or website posting.
              </p>
              <p className="text-gray-700 mb-4">
                14.3. <strong>Severability:</strong> If any provision is invalid, the remaining provisions continue in effect.
              </p>
              <p className="text-gray-700 mb-4">
                14.4. <strong>Assignment:</strong> You may not assign your rights without our written consent.
              </p>
              <p className="text-gray-700">
                14.5. <strong>Waiver:</strong> No waiver is effective unless in writing and signed by the waiving party.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4 text-black">15. Nederland ICT Voorwaarden</h2>
              <p className="text-gray-700">
                Where applicable, the Nederland ICT Voorwaarden 2014 (Netherlands ICT Terms and Conditions) may apply supplementary to these Terms. In case of conflict, these Terms prevail.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4 text-black">16. Contact Information</h2>
              <p className="text-gray-700">
                For questions about these Terms and Conditions, please contact:
              </p>
              <div className="mt-4 p-4 bg-gray-50 rounded-lg">
                <p className="text-gray-700">
                  <strong>Legal Department</strong><br />
                  Workflo B.V.<br />
                  Email: legal@workflo.it<br />
                  Phone: 020-30 80 465<br />
                  Address: Koivistokade 3, 1013 AC Amsterdam
                </p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4 text-black">17. Acceptance</h2>
              <p className="text-gray-700">
                By using our services, you acknowledge that you have read, understood, and agree to be bound by these Terms and Conditions.
              </p>
            </section>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            <div>
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-primary-600 rounded-lg flex items-center justify-center">
                  <span className="text-black font-bold text-xl">W</span>
                </div>
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
      <DangerTape height="h-3" showText={true} />
    </div>
  )
}