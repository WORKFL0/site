'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { PhoneIcon, EnvelopeIcon, MapPinIcon } from '@heroicons/react/24/outline'

export default function CookiesPage() {
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
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Cookie Policy</h1>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600 mb-6">
              Last updated: January 2025
            </p>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">What are cookies?</h2>
              <p className="text-gray-700 mb-4">
                Cookies are small text files that are placed on your computer or mobile device when you visit our website. 
                They are widely used to make websites work efficiently and provide information to website owners.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">How we use cookies</h2>
              <p className="text-gray-700 mb-4">
                Workflo uses cookies to:
              </p>
              <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
                <li>Remember your language preferences</li>
                <li>Understand how you use our website</li>
                <li>Improve your user experience</li>
                <li>Enable certain website functionalities</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Types of cookies we use</h2>
              
              <div className="bg-gray-50 rounded-lg p-6 mb-4">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Essential cookies</h3>
                <p className="text-gray-700 mb-2">
                  These cookies are necessary for the website to function and cannot be disabled. They are usually set in response to actions you take, such as setting your privacy preferences or logging in.
                </p>
                <p className="text-sm text-gray-600">Duration: Session</p>
              </div>

              <div className="bg-gray-50 rounded-lg p-6 mb-4">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Functional cookies</h3>
                <p className="text-gray-700 mb-2">
                  These cookies allow us to remember choices you make (such as your language preference) and provide enhanced features.
                </p>
                <p className="text-sm text-gray-600">Duration: 1 year</p>
              </div>

              <div className="bg-gray-50 rounded-lg p-6 mb-4">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Analytics cookies</h3>
                <p className="text-gray-700 mb-2">
                  We use Google Analytics to understand how visitors interact with our website. These cookies collect information in an aggregated form.
                </p>
                <p className="text-sm text-gray-600">Duration: 2 years</p>
              </div>

              <div className="bg-gray-50 rounded-lg p-6 mb-4">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Marketing cookies</h3>
                <p className="text-gray-700 mb-2">
                  These cookies may be set through our site by advertising partners to build a profile of your interests and show relevant ads on other sites.
                </p>
                <p className="text-sm text-gray-600">Duration: 1 year</p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Third-party cookies</h2>
              <p className="text-gray-700 mb-4">
                We use services from the following third parties that may set cookies:
              </p>
              <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
                <li><strong>Google Analytics:</strong> For website analytics</li>
                <li><strong>HubSpot:</strong> For contact forms and customer relationship management</li>
                <li><strong>Hotjar:</strong> For user behavior analytics</li>
                <li><strong>LinkedIn:</strong> For social media integration</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Managing cookies</h2>
              <p className="text-gray-700 mb-4">
                You can control and delete cookies through your browser settings. Please note that removing or blocking cookies may impact your user experience and parts of our website may no longer be fully accessible.
              </p>
              <p className="text-gray-700 mb-4">
                Browser manufacturers provide help pages relating to cookie management:
              </p>
              <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
                <li><a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline">Google Chrome</a></li>
                <li><a href="https://support.mozilla.org/en-US/kb/cookies-information-websites-store-on-your-computer" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline">Mozilla Firefox</a></li>
                <li><a href="https://support.apple.com/guide/safari/manage-cookies-and-website-data-sfri11471/mac" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline">Safari</a></li>
                <li><a href="https://support.microsoft.com/en-us/microsoft-edge/delete-cookies-in-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline">Microsoft Edge</a></li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Your rights under GDPR</h2>
              <p className="text-gray-700 mb-4">
                Under the General Data Protection Regulation (GDPR), you have the following rights:
              </p>
              <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
                <li>Right to access your personal data</li>
                <li>Right to rectification of inaccurate data</li>
                <li>Right to erasure ('right to be forgotten')</li>
                <li>Right to restrict processing</li>
                <li>Right to data portability</li>
                <li>Right to object to processing</li>
                <li>Right to withdraw consent at any time</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact us</h2>
              <p className="text-gray-700 mb-4">
                If you have questions about our cookie policy or how we handle your data, please contact us:
              </p>
              <div className="bg-gray-50 rounded-lg p-6">
                <p className="text-gray-700">
                  <strong>Workflo B.V.</strong><br />
                  Koivistokade 3<br />
                  1013AC Amsterdam<br />
                  Netherlands<br />
                  Email: privacy@workflo.nl<br />
                  Phone: 020-30 80 465
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
                  <span className="text-sm">Koivistokade 3, Amsterdam</span>
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