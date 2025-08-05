import { queryDatabase, getPlainText, getFileUrl } from './notion.client'

// Mock data structure to match what components expect
const mockHeroData = {
  title: "Your IT Should Drive Growth, Not Hold You Back",
  subtitle: "Amsterdam's SMEs trust Workflo to transform their IT from a cost center into a growth engine. Reduce IT costs by 35% while increasing productivity.",
  ctaPrimary: {
    text: "Start Tevredenheidscheck",
    href: "/tevredenheidscheck"
  },
  ctaSecondary: {
    text: "Bekijk Case Studies",
    href: "/case-studies"
  },
  stats: [
    { value: "35%", label: "Kostenbesparing" },
    { value: "95%", label: "Uptime Garantie" },
    { value: "24/7", label: "Support" }
  ]
}

const mockServicesData = [
  {
    _id: '1',
    title: 'Managed IT Services',
    description: 'Complete IT management and support for your business',
    icon: 'cloud',
    features: ['24/7 Monitoring', 'Help Desk Support', 'Network Management', 'Security Updates']
  },
  {
    _id: '2',
    title: 'Cloud Solutions',
    description: 'Secure and scalable cloud infrastructure',
    icon: 'server',
    features: ['Cloud Migration', 'Data Backup', 'Disaster Recovery', 'Cloud Security']
  },
  {
    _id: '3',
    title: 'Cybersecurity',
    description: 'Protect your business from digital threats',
    icon: 'shield',
    features: ['Threat Detection', 'Security Audits', 'Employee Training', 'Incident Response']
  }
]

const mockTestimonialsData = [
  {
    _id: '1',
    name: 'Jan de Vries',
    role: 'CEO',
    company: 'Tech Innovations B.V.',
    content: 'Workflo has transformed our IT infrastructure. We\'ve seen a 35% reduction in IT costs while improving system reliability.',
    rating: 5
  },
  {
    _id: '2',
    name: 'Sarah Johnson',
    role: 'Operations Manager',
    company: 'Digital Agency Amsterdam',
    content: 'The 24/7 support is incredible. Any issue we have is resolved quickly, keeping our team productive.',
    rating: 5
  }
]

const mockClientsData = [
  { _id: '1', name: 'Client 1', logo: '/images/client1.png' },
  { _id: '2', name: 'Client 2', logo: '/images/client2.png' },
  { _id: '3', name: 'Client 3', logo: '/images/client3.png' },
  { _id: '4', name: 'Client 4', logo: '/images/client4.png' }
]

const mockPartnersData = [
  { _id: '1', name: 'Microsoft', logo: '/images/microsoft.png', url: 'https://microsoft.com' },
  { _id: '2', name: 'Google Cloud', logo: '/images/google.png', url: 'https://cloud.google.com' },
  { _id: '3', name: 'AWS', logo: '/images/aws.png', url: 'https://aws.amazon.com' }
]

// For now, return mock data until Notion database is set up
export async function notionFetch(queryType: string): Promise<any> {
  console.log('Notion fetch for:', queryType)
  
  // Return mock data based on query type
  switch (queryType) {
    case 'heroSection':
      return mockHeroData
    case 'services':
      return mockServicesData
    case 'testimonials':
      return mockTestimonialsData
    case 'clients':
      return mockClientsData
    case 'partners':
      return mockPartnersData
    case 'stats':
      return {
        totalClients: 100,
        projectsCompleted: 250,
        uptimePercentage: 99.9,
        supportAvailability: '24/7'
      }
    default:
      return null
  }
  
  // TODO: Implement actual Notion queries once database structure is defined
  // Example:
  // const results = await queryDatabase({
  //   property: 'Type',
  //   select: { equals: queryType }
  // })
  // return transformNotionData(results)
}