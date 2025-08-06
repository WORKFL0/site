// Internal Linking Component for SEO Optimization
// Implements strategic internal linking to improve crawlability and page authority distribution

import React from 'react'
import Link from 'next/link'

interface InternalLink {
  href: string
  text: string
  title?: string
  priority?: 'high' | 'medium' | 'low'
}

interface InternalLinkingProps {
  currentPage: string
  variant?: 'footer' | 'sidebar' | 'inline' | 'contextual'
}

export const InternalLinking: React.FC<InternalLinkingProps> = ({ 
  currentPage, 
  variant = 'contextual' 
}) => {
  // Define internal linking structure based on page hierarchy and relevance
  const linkingStrategy: Record<string, InternalLink[]> = {
    '/': [
      { href: '/diensten/managed-it', text: 'Managed IT Services', title: 'Complete IT beheer voor uw bedrijf', priority: 'high' },
      { href: '/diensten/cybersecurity', text: 'Cybersecurity oplossingen', title: 'Bescherm uw bedrijf tegen cyber dreigingen', priority: 'high' },
      { href: '/tevredenheidscheck', text: 'Gratis IT Assessment', title: 'Ontdek uw IT verbeterpunten', priority: 'high' },
      { href: '/diensten/cloud', text: 'Cloud migratie', title: 'Stap over naar de cloud', priority: 'medium' },
      { href: '/over-ons', text: 'Over Workflo', title: 'Leer ons team kennen', priority: 'medium' },
      { href: '/contact', text: 'Contact opnemen', title: 'Neem contact op voor een gesprek', priority: 'medium' }
    ],
    
    '/diensten': [
      { href: '/diensten/managed-it', text: 'Volledig IT beheer', priority: 'high' },
      { href: '/diensten/cybersecurity', text: 'Security & GDPR compliance', priority: 'high' },
      { href: '/diensten/cloud', text: 'Microsoft 365 & Azure', priority: 'high' },
      { href: '/diensten/it-consulting', text: 'Strategisch IT advies', priority: 'medium' },
      { href: '/tevredenheidscheck', text: 'Test uw IT gezondheid', priority: 'high' },
      { href: '/', text: 'Homepage', priority: 'low' }
    ],
    
    '/diensten/managed-it': [
      { href: '/diensten/cybersecurity', text: 'Combineer met cybersecurity', title: 'Complete bescherming voor uw IT', priority: 'high' },
      { href: '/diensten/cloud', text: 'Cloud integratie', title: 'Managed services in de cloud', priority: 'high' },
      { href: '/tevredenheidscheck', text: 'Bereken uw besparing', title: 'Ontdek hoeveel u kunt besparen', priority: 'high' },
      { href: '/diensten', text: 'Alle IT diensten', priority: 'medium' },
      { href: '/contact', text: 'Vraag offerte aan', title: 'Ontvang een vrijblijvende offerte', priority: 'high' },
      { href: '/over-ons', text: 'Waarom Workflo', priority: 'medium' }
    ],
    
    '/diensten/cybersecurity': [
      { href: '/diensten/managed-it', text: '24/7 monitoring', title: 'Proactieve beveiliging met managed IT', priority: 'high' },
      { href: '/diensten/cloud', text: 'Veilige cloud oplossingen', priority: 'medium' },
      { href: '/tevredenheidscheck', text: 'Security audit aanvragen', title: 'Gratis security scan', priority: 'high' },
      { href: '/diensten', text: 'Bekijk alle diensten', priority: 'low' },
      { href: '/contact', text: 'Security expert spreken', priority: 'high' }
    ],
    
    '/diensten/cloud': [
      { href: '/diensten/managed-it', text: 'Beheer in de cloud', priority: 'high' },
      { href: '/diensten/cybersecurity', text: 'Cloud security', title: 'Beveilig uw cloud omgeving', priority: 'high' },
      { href: '/diensten/it-consulting', text: 'Cloud strategie advies', priority: 'medium' },
      { href: '/tevredenheidscheck', text: 'Cloud readiness check', priority: 'high' },
      { href: '/contact', text: 'Microsoft specialist spreken', priority: 'high' }
    ],
    
    '/diensten/it-consulting': [
      { href: '/diensten/managed-it', text: 'Implementatie van IT strategie', priority: 'high' },
      { href: '/diensten/cloud', text: 'Digital transformation', priority: 'high' },
      { href: '/diensten/cybersecurity', text: 'Security assessment', priority: 'medium' },
      { href: '/tevredenheidscheck', text: 'IT maturity scan', priority: 'high' },
      { href: '/over-ons', text: 'Onze expertise', priority: 'medium' }
    ],
    
    '/tevredenheidscheck': [
      { href: '/diensten/managed-it', text: 'Ontdek managed IT', title: 'Complete IT oplossing', priority: 'high' },
      { href: '/diensten', text: 'Bekijk alle oplossingen', priority: 'medium' },
      { href: '/contact', text: 'Bespreek resultaten', title: 'Persoonlijk advies ontvangen', priority: 'high' },
      { href: '/', text: 'Meer over Workflo', priority: 'low' }
    ],
    
    '/over-ons': [
      { href: '/diensten', text: 'Onze diensten', priority: 'high' },
      { href: '/tevredenheidscheck', text: 'Start met gratis assessment', priority: 'high' },
      { href: '/contact', text: 'Maak kennis met ons team', priority: 'high' },
      { href: '/diensten/managed-it', text: 'Waarom managed IT', priority: 'medium' }
    ],
    
    '/contact': [
      { href: '/diensten', text: 'Onze IT diensten', priority: 'high' },
      { href: '/tevredenheidscheck', text: 'Gratis IT check', priority: 'high' },
      { href: '/over-ons', text: 'Over Workflo', priority: 'medium' },
      { href: '/', text: 'Homepage', priority: 'low' }
    ]
  }
  
  // Get relevant links for current page
  const getRelevantLinks = (): InternalLink[] => {
    // Find exact match or closest parent path
    let links = linkingStrategy[currentPage]
    
    if (!links) {
      // Try to find parent path
      const pathParts = currentPage.split('/')
      while (pathParts.length > 0 && !links) {
        pathParts.pop()
        const parentPath = pathParts.join('/') || '/'
        links = linkingStrategy[parentPath]
      }
    }
    
    // Filter out current page and sort by priority
    return (links || linkingStrategy['/']).filter(link => link.href !== currentPage)
      .sort((a, b) => {
        const priorityOrder = { high: 0, medium: 1, low: 2 }
        return (priorityOrder[a.priority || 'medium'] - priorityOrder[b.priority || 'medium'])
      })
  }
  
  const links = getRelevantLinks()
  
  // Render based on variant
  switch (variant) {
    case 'footer':
      return (
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          <div>
            <h4 className="font-bold text-gray-900 mb-3">Populaire Diensten</h4>
            <ul className="space-y-2">
              {links.filter(l => l.priority === 'high').slice(0, 4).map((link, idx) => (
                <li key={idx}>
                  <Link 
                    href={link.href}
                    title={link.title}
                    className="text-gray-600 hover:text-yellow-500 transition-colors"
                  >
                    {link.text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-gray-900 mb-3">Meer Informatie</h4>
            <ul className="space-y-2">
              {links.filter(l => l.priority === 'medium').slice(0, 4).map((link, idx) => (
                <li key={idx}>
                  <Link 
                    href={link.href}
                    title={link.title}
                    className="text-gray-600 hover:text-yellow-500 transition-colors"
                  >
                    {link.text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )
      
    case 'sidebar':
      return (
        <aside className="bg-gray-50 rounded-lg p-6">
          <h3 className="font-bold text-lg mb-4">Gerelateerde Diensten</h3>
          <ul className="space-y-3">
            {links.slice(0, 5).map((link, idx) => (
              <li key={idx}>
                <Link 
                  href={link.href}
                  title={link.title}
                  className="flex items-center text-gray-700 hover:text-yellow-500 transition-colors group"
                >
                  <span className="text-yellow-400 mr-2 group-hover:translate-x-1 transition-transform">→</span>
                  {link.text}
                </Link>
              </li>
            ))}
          </ul>
        </aside>
      )
      
    case 'inline':
      return (
        <div className="inline-flex flex-wrap gap-2 my-4">
          {links.filter(l => l.priority === 'high').slice(0, 3).map((link, idx) => (
            <Link
              key={idx}
              href={link.href}
              title={link.title}
              className="inline-flex items-center px-4 py-2 bg-yellow-400 text-black rounded-full hover:bg-yellow-500 transition-colors text-sm font-medium"
            >
              {link.text}
              <span className="ml-1">→</span>
            </Link>
          ))}
        </div>
      )
      
    case 'contextual':
    default:
      return (
        <nav className="my-8 p-6 bg-gray-50 rounded-xl" aria-label="Gerelateerde pagina's">
          <h3 className="text-lg font-bold mb-4">Ontdek ook:</h3>
          <div className="grid md:grid-cols-2 gap-4">
            {links.filter(l => l.priority !== 'low').slice(0, 4).map((link, idx) => (
              <Link
                key={idx}
                href={link.href}
                className="group p-4 bg-white rounded-lg hover:shadow-lg transition-all"
                title={link.title}
              >
                <div className="flex items-center justify-between">
                  <span className="font-medium text-gray-900 group-hover:text-yellow-500 transition-colors">
                    {link.text}
                  </span>
                  <span className="text-yellow-400 group-hover:translate-x-2 transition-transform">
                    →
                  </span>
                </div>
                {link.title && (
                  <p className="text-sm text-gray-600 mt-1">{link.title}</p>
                )}
              </Link>
            ))}
          </div>
        </nav>
      )
  }
}

// Related Posts Component for Blog/Content Pages
export const RelatedContent: React.FC<{
  currentUrl: string
  category?: string
  tags?: string[]
}> = ({ currentUrl, category, tags = [] }) => {
  // This would typically fetch from a CMS or database
  const relatedPosts = [
    {
      title: 'Complete Gids: IT Kosten voor Amsterdam MKB',
      excerpt: 'Ontdek wat IT echt kost en hoe u kunt besparen',
      url: '/blog/it-kosten-amsterdam-mkb',
      category: 'Kosten'
    },
    {
      title: 'GDPR Checklist voor Nederlandse Bedrijven',
      excerpt: 'Alles wat u moet weten over AVG compliance',
      url: '/blog/gdpr-checklist-nederland',
      category: 'Compliance'
    },
    {
      title: 'Microsoft 365 vs Google Workspace',
      excerpt: 'Welke is het beste voor uw bedrijf?',
      url: '/blog/microsoft-365-vs-google-workspace',
      category: 'Cloud'
    }
  ]
  
  return (
    <section className="my-12">
      <h2 className="text-2xl font-bold mb-6">Gerelateerde Artikelen</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {relatedPosts.map((post, idx) => (
          <article key={idx} className="bg-white border rounded-lg p-6 hover:shadow-lg transition-shadow">
            <span className="text-xs font-semibold text-yellow-600 uppercase">{post.category}</span>
            <h3 className="font-bold text-lg mt-2 mb-3">
              <Link href={post.url} className="hover:text-yellow-500 transition-colors">
                {post.title}
              </Link>
            </h3>
            <p className="text-gray-600 text-sm mb-4">{post.excerpt}</p>
            <Link 
              href={post.url}
              className="text-yellow-500 font-medium hover:text-yellow-600 transition-colors"
            >
              Lees meer →
            </Link>
          </article>
        ))}
      </div>
    </section>
  )
}

export default InternalLinking