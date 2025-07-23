import Link from 'next/link'
import { useLanguage } from '@/contexts/LanguageContext'

const Footer = () => {
  const currentYear = new Date().getFullYear()
  const { t, language } = useLanguage()

  const footerLinks = {
    services: [
      { name: language === 'nl' ? 'Cloud Diensten' : 'Cloud Services', href: '/diensten#cloud' },
      { name: 'Cybersecurity', href: '/diensten#security' },
      { name: language === 'nl' ? 'Beheerd IT' : 'Managed IT', href: '/diensten#managed' },
      { name: language === 'nl' ? 'IT Consultancy' : 'IT Consulting', href: '/diensten#consulting' },
    ],
    company: [
      { name: language === 'nl' ? 'Over Ons' : 'About Us', href: '/about' },
      { name: 'Case Studies', href: '/case-studies' },
      { name: language === 'nl' ? 'Werken bij' : 'Careers', href: '/about#careers' },
      { name: 'Contact', href: '/contact' },
    ],
    industries: [
      { name: 'Marketing & Media', href: '/expertise#marketing' },
      { name: 'Non-Profit', href: '/expertise#nonprofit' },
      { name: 'Retail', href: '/expertise#retail' },
      { name: language === 'nl' ? 'Zakelijke Dienstverlening' : 'Professional Services', href: '/expertise#professional' },
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
              <a href="https://x.com/workflo_it" target="_blank" rel="noopener noreferrer" className="hover:text-primary-400 transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
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
          
          {/* Google Business Reviews */}
          <div className="mt-6 flex flex-col md:flex-row items-center gap-4">
            <a 
              href="https://www.google.com/maps/place/Workflo" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-gray-800 px-4 py-2 rounded-lg hover:bg-gray-700 transition-colors"
            >
              <svg className="w-5 h-5 text-primary-400" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
              </svg>
              <span className="text-white">4.8 ★★★★★</span>
              <span className="text-gray-400 text-sm">Google Reviews</span>
            </a>
            <a 
              href="https://www.google.com/search?q=workflo+it+amsterdam&oq=workflo+it+amsterdam#lrd=0x47c60a6c8f8f8f8f:0x1234567890abcdef,3" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-primary-400 hover:text-primary-300 text-sm underline"
            >
              {t.footer.google.writeReview}
            </a>
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
            <Link href="/cookies" className="text-sm text-gray-500 hover:text-primary-400 transition-colors">
              Cookiebeleid
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