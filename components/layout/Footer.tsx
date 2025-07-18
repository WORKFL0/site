import Link from 'next/link'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const footerLinks = {
    services: [
      { name: 'Cloud Diensten', href: '/services/cloud' },
      { name: 'Cybersecurity', href: '/services/security' },
      { name: 'Beheerd IT', href: '/services/managed-it' },
      { name: 'IT Consultancy', href: '/services/consulting' },
    ],
    company: [
      { name: 'Over Ons', href: '/about' },
      { name: 'Case Studies', href: '/case-studies' },
      { name: 'Werken bij', href: '/careers' },
      { name: 'Contact', href: '/contact' },
    ],
    industries: [
      { name: 'Marketing & Media', href: '/industries/marketing' },
      { name: 'Non-Profit', href: '/industries/non-profit' },
      { name: 'Retail', href: '/industries/retail' },
      { name: 'Zakelijke Dienstverlening', href: '/industries/professional' },
    ],
  }

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto container-padding py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="relative w-10 h-10">
                <div className="absolute inset-0 bg-primary-500 rounded-lg"></div>
                <span className="absolute inset-0 flex items-center justify-center text-white font-bold text-lg">W</span>
              </div>
              <span className="text-xl font-bold text-white">Workflo</span>
            </div>
            <p className="text-sm mb-4 max-w-md">
              Amsterdams Meest Vertrouwde IT Groeipartner. Wij helpen MKB-bedrijven IT-kosten met 35% te verlagen terwijl we de productiviteit verhogen door slimme technologische oplossingen.
            </p>
            <div className="flex space-x-4">
              <a href="https://linkedin.com/company/workflo" target="_blank" rel="noopener noreferrer" className="hover:text-primary-400 transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a href="https://twitter.com/workflo" target="_blank" rel="noopener noreferrer" className="hover:text-primary-400 transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold mb-4">Diensten</h3>
            <ul className="space-y-2">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-sm hover:text-primary-400 transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-white font-semibold mb-4">Bedrijf</h3>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-sm hover:text-primary-400 transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Industries */}
          <div>
            <h3 className="text-white font-semibold mb-4">Sectoren</h3>
            <ul className="space-y-2">
              {footerLinks.industries.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-sm hover:text-primary-400 transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Contact Info */}
        <div className="mt-8 pt-8 border-t border-gray-800">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
            <div>
              <span className="text-gray-500">E-mail:</span>{' '}
              <a href="mailto:info@workflo.nl" className="hover:text-primary-400 transition-colors">
                info@workflo.nl
              </a>
            </div>
            <div>
              <span className="text-gray-500">Telefoon:</span>{' '}
              <a href="tel:0203080465" className="hover:text-primary-400 transition-colors">
                020-30 80 465
              </a>
            </div>
            <div>
              <span className="text-gray-500">Adres:</span> Amsterdam, Nederland
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-500">
            © {currentYear} Workflo. Alle rechten voorbehouden. [TEST: v2]
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="/privacy" className="text-sm text-gray-500 hover:text-primary-400 transition-colors">
              Privacybeleid
            </Link>
            <Link href="/terms" className="text-sm text-gray-500 hover:text-primary-400 transition-colors">
              Algemene Voorwaarden
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer