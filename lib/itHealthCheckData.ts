export interface ITHealthQuestion {
  id: number
  question: string
  category: 'security' | 'backup' | 'infrastructure' | 'compliance' | 'support'
  options: string[]
  next: (number | string)[]
  weight: number[] // Score weight for each option
}

export const itHealthQuestions: ITHealthQuestion[] = [
  {
    id: 1,
    question: "Hoe vaak worden uw IT-systemen geüpdatet met security patches?",
    category: "security",
    options: [
      "Automatisch zodra beschikbaar",
      "Maandelijks volgens planning",
      "Kwartaal of minder vaak",
      "Weet ik niet"
    ],
    next: [2, 2, 2, 2],
    weight: [10, 7, 3, 0]
  },
  {
    id: 2,
    question: "Heeft u een backup strategie voor uw bedrijfsdata?",
    category: "backup",
    options: [
      "3-2-1 backup strategie met offsite kopie",
      "Dagelijkse backups naar cloud",
      "Wekelijkse lokale backups",
      "Geen gestructureerde backup"
    ],
    next: [3, 3, 3, 3],
    weight: [10, 8, 5, 0]
  },
  {
    id: 3,
    question: "Hoe test u de herstelbaarheid van uw backups?",
    category: "backup",
    options: [
      "Maandelijkse restore tests",
      "Jaarlijkse disaster recovery drill",
      "Alleen bij problemen",
      "Nooit getest"
    ],
    next: [4, 4, 4, 4],
    weight: [10, 7, 3, 0]
  },
  {
    id: 4,
    question: "Welk type antivirus/anti-malware bescherming gebruikt u?",
    category: "security",
    options: [
      "Enterprise EDR/XDR oplossing",
      "Managed antivirus met monitoring",
      "Standaard antivirus software",
      "Windows Defender alleen"
    ],
    next: [5, 5, 5, 5],
    weight: [10, 8, 5, 3]
  },
  {
    id: 5,
    question: "Hoe beheert u gebruikerstoegang tot systemen?",
    category: "security",
    options: [
      "Centrale identity management met MFA",
      "Active Directory met sterke wachtwoorden",
      "Lokale accounts per systeem",
      "Gedeelde wachtwoorden"
    ],
    next: [6, 6, 6, 6],
    weight: [10, 7, 3, 0]
  },
  {
    id: 6,
    question: "Wat is de gemiddelde leeftijd van uw werkstations?",
    category: "infrastructure",
    options: [
      "Minder dan 3 jaar",
      "3-5 jaar",
      "5-7 jaar",
      "Meer dan 7 jaar"
    ],
    next: [7, 7, 7, 7],
    weight: [10, 8, 5, 2]
  },
  {
    id: 7,
    question: "Hoe monitort u de gezondheid van uw IT-infrastructuur?",
    category: "infrastructure",
    options: [
      "24/7 proactieve monitoring met alerts",
      "Dagelijkse systeem checks",
      "Bij problemen kijken we ernaar",
      "Geen monitoring"
    ],
    next: [8, 8, 8, 8],
    weight: [10, 7, 3, 0]
  },
  {
    id: 8,
    question: "Heeft u een gedocumenteerd disaster recovery plan?",
    category: "backup",
    options: [
      "Volledig plan met RTO/RPO targets",
      "Basis procedures gedocumenteerd",
      "Informele afspraken",
      "Geen plan"
    ],
    next: [9, 9, 9, 9],
    weight: [10, 7, 3, 0]
  },
  {
    id: 9,
    question: "Hoe vaak voert u security awareness training uit?",
    category: "security",
    options: [
      "Kwartaal met phishing simulaties",
      "Jaarlijkse training",
      "Bij onboarding alleen",
      "Geen training"
    ],
    next: [10, 10, 10, 10],
    weight: [10, 7, 3, 0]
  },
  {
    id: 10,
    question: "Welk niveau van email beveiliging heeft u?",
    category: "security",
    options: [
      "Advanced threat protection met sandboxing",
      "Spam filter met virus scanning",
      "Basis spam filter",
      "Alleen standaard provider beveiliging"
    ],
    next: [11, 11, 11, 11],
    weight: [10, 7, 4, 2]
  },
  {
    id: 11,
    question: "Hoe beheert u software licenties?",
    category: "compliance",
    options: [
      "Centraal licentie management systeem",
      "Excel overzicht met controles",
      "Ad-hoc bijhouden",
      "Niet bijgehouden"
    ],
    next: [12, 12, 12, 12],
    weight: [10, 7, 3, 0]
  },
  {
    id: 12,
    question: "Heeft u een GDPR/AVG compliance programma?",
    category: "compliance",
    options: [
      "Volledig programma met DPO",
      "Basis maatregelen geïmplementeerd",
      "Deels op orde",
      "Nog niet mee bezig"
    ],
    next: [13, 13, 13, 13],
    weight: [10, 7, 4, 0]
  },
  {
    id: 13,
    question: "Hoe snel worden kritieke IT-problemen opgelost?",
    category: "support",
    options: [
      "Binnen 2 uur met SLA garantie",
      "Zelfde werkdag",
      "Binnen 2-3 dagen",
      "Verschilt sterk"
    ],
    next: [14, 14, 14, 14],
    weight: [10, 7, 4, 2]
  },
  {
    id: 14,
    question: "Heeft u redundantie voor kritieke systemen?",
    category: "infrastructure",
    options: [
      "Volledig redundant met failover",
      "Backup systemen beschikbaar",
      "Enkele kritieke systemen redundant",
      "Geen redundantie"
    ],
    next: [15, 15, 15, 15],
    weight: [10, 8, 5, 0]
  },
  {
    id: 15,
    question: "Hoe vaak evalueert u uw IT-strategie?",
    category: "infrastructure",
    options: [
      "Kwartaal review met roadmap",
      "Jaarlijkse evaluatie",
      "Bij grote veranderingen",
      "Geen formele evaluatie"
    ],
    next: ["result", "result", "result", "result"],
    weight: [10, 7, 4, 0]
  }
]

export const calculateHealthScore = (answers: number[]): {
  score: number
  level: 'excellent' | 'good' | 'moderate' | 'poor'
  categories: Record<string, number>
} => {
  let totalScore = 0
  let maxScore = 0
  const categoryScores: Record<string, { score: number; max: number }> = {
    security: { score: 0, max: 0 },
    backup: { score: 0, max: 0 },
    infrastructure: { score: 0, max: 0 },
    compliance: { score: 0, max: 0 },
    support: { score: 0, max: 0 }
  }

  answers.forEach((answerIndex, questionIndex) => {
    const question = itHealthQuestions[questionIndex]
    const weight = question.weight[answerIndex]
    totalScore += weight
    maxScore += 10 // Max weight is always 10
    
    categoryScores[question.category].score += weight
    categoryScores[question.category].max += 10
  })

  const percentage = (totalScore / maxScore) * 100
  let level: 'excellent' | 'good' | 'moderate' | 'poor'
  
  if (percentage >= 80) level = 'excellent'
  else if (percentage >= 60) level = 'good'
  else if (percentage >= 40) level = 'moderate'
  else level = 'poor'

  const categories: Record<string, number> = {}
  for (const [key, value] of Object.entries(categoryScores)) {
    categories[key] = value.max > 0 ? (value.score / value.max) * 100 : 0
  }

  return {
    score: Math.round(percentage),
    level,
    categories
  }
}

export const getRecommendations = (level: string): string[] => {
  const recommendations: Record<string, string[]> = {
    excellent: [
      "Uw IT-infrastructuur is uitstekend op orde!",
      "Blijf uw systemen regelmatig evalueren",
      "Overweeg advanced security certificeringen",
      "Deel uw best practices met andere afdelingen"
    ],
    good: [
      "Uw IT-basis is goed, met ruimte voor optimalisatie",
      "Focus op het verbeteren van zwakkere gebieden",
      "Overweeg meer automatisering voor efficiency",
      "Implementeer geavanceerdere monitoring tools"
    ],
    moderate: [
      "Er zijn belangrijke verbeteringen nodig in uw IT-infrastructuur",
      "Prioriteer security en backup verbeteringen",
      "Overweeg professionele IT-ondersteuning",
      "Maak een actieplan voor de komende 6 maanden"
    ],
    poor: [
      "Uw IT-infrastructuur heeft dringende aandacht nodig",
      "Start met basis security maatregelen",
      "Implementeer een backup strategie direct",
      "Overweeg een IT-audit door professionals",
      "Neem contact op voor een vrijblijvend adviesgesprek"
    ]
  }
  
  return recommendations[level] || recommendations.moderate
}