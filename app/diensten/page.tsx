'use client'

import { motion } from 'framer-motion'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import Button from '@/components/ui/Button'
import { useState } from 'react'
import { useLanguage } from '@/context/LanguageContext'
import { 
  BuildingOfficeIcon,
  ShoppingCartIcon,
  AcademicCapIcon,
  HeartIcon,
  BanknotesIcon,
  TruckIcon,
  ChevronDownIcon,
  ExclamationCircleIcon,
  CheckCircleIcon
} from '@heroicons/react/24/outline'


export default function DienstenPage() {
  const [expandedIndustry, setExpandedIndustry] = useState<string | null>(null)
  const { t } = useLanguage()

  const industries = [
    {
      id: 'retail',
      industry: t('diensten.retail.industry'),
      mainProblem: t('diensten.retail.main_problem'),
      subProblems: [
        t('diensten.retail.sub1'),
        t('diensten.retail.sub2'),
        t('diensten.retail.sub3')
      ],
      emotion: t('diensten.retail.emotion'),
      solution: t('diensten.retail.solution'),
      caseStudy: {
        client: t('diensten.retail.case_client'),
        problem: t('diensten.retail.case_problem'),
        result: t('diensten.retail.case_result')
      },
      icon: ShoppingCartIcon,
      color: 'purple',
      techStack: 'Shopify Plus integratie, Azure auto-scaling, Mollie payment gateway, real-time inventory sync'
    },
    {
      id: 'office',
      industry: t('diensten.office.industry'),
      mainProblem: t('diensten.office.main_problem'),
      subProblems: [
        t('diensten.office.sub1'),
        t('diensten.office.sub2'),
        t('diensten.office.sub3')
      ],
      emotion: t('diensten.office.emotion'),
      solution: t('diensten.office.solution'),
      caseStudy: {
        client: t('diensten.office.case_client'),
        problem: t('diensten.office.case_problem'),
        result: t('diensten.office.case_result')
      },
      icon: BuildingOfficeIcon,
      color: 'blue',
      techStack: 'Microsoft 365 E5, Azure Virtual Desktop, Conditional Access, Teams Phone System'
    },
    {
      id: 'healthcare',
      industry: t('diensten.healthcare.industry'),
      mainProblem: t('diensten.healthcare.main_problem'),
      subProblems: [
        t('diensten.healthcare.sub1'),
        t('diensten.healthcare.sub2'),
        t('diensten.healthcare.sub3')
      ],
      emotion: t('diensten.healthcare.emotion'),
      solution: t('diensten.healthcare.solution'),
      caseStudy: {
        client: t('diensten.healthcare.case_client'),
        problem: t('diensten.healthcare.case_problem'),
        result: t('diensten.healthcare.case_result')
      },
      icon: HeartIcon,
      color: 'red',
      techStack: 'NEN 7510 compliant hosting, encrypted backups, GDPR tools, medical device integration'
    },
    {
      id: 'financial',
      industry: t('diensten.financial.industry'),
      mainProblem: t('diensten.financial.main_problem'),
      subProblems: [
        t('diensten.financial.sub1'),
        t('diensten.financial.sub2'),
        t('diensten.financial.sub3')
      ],
      emotion: t('diensten.financial.emotion'),
      solution: t('diensten.financial.solution'),
      caseStudy: {
        client: t('diensten.financial.case_client'),
        problem: t('diensten.financial.case_problem'),
        result: t('diensten.financial.case_result')
      },
      icon: BanknotesIcon,
      color: 'green',
      techStack: 'DNB compliant infrastructure, audit logging, encryption at rest, MFA everywhere'
    },
    {
      id: 'education',
      industry: t('diensten.education.industry'),
      mainProblem: t('diensten.education.main_problem'),
      subProblems: [
        t('diensten.education.sub1'),
        t('diensten.education.sub2'),
        t('diensten.education.sub3')
      ],
      emotion: t('diensten.education.emotion'),
      solution: t('diensten.education.solution'),
      caseStudy: {
        client: t('diensten.education.case_client'),
        problem: t('diensten.education.case_problem'),
        result: t('diensten.education.case_result')
      },
      icon: AcademicCapIcon,
      color: 'indigo',
      techStack: 'Canvas LMS hosting, Zoom education license, exam proctoring, SSO integration'
    },
    {
      id: 'logistics',
      industry: t('diensten.logistics.industry'),
      mainProblem: t('diensten.logistics.main_problem'),
      subProblems: [
        t('diensten.logistics.sub1'),
        t('diensten.logistics.sub2'),
        t('diensten.logistics.sub3')
      ],
      emotion: t('diensten.logistics.emotion'),
      solution: t('diensten.logistics.solution'),
      caseStudy: {
        client: t('diensten.logistics.case_client'),
        problem: t('diensten.logistics.case_problem'),
        result: t('diensten.logistics.case_result')
      },
      icon: TruckIcon,
      color: 'amber',
      techStack: 'API gateway for tracking, mobile device management, WMS integration, IoT sensors'
    }
  ]

  return (
    <>
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-br from-gray-50 to-gray-100 overflow-hidden">
          <div className="absolute inset-0 bg-grid-gray-100 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
          
          <div className="container mx-auto px-4 relative z-10">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl mx-auto text-center"
            >
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                {t('diensten.hero.title')}
              </h1>
              <p className="text-xl lg:text-2xl text-gray-600 mb-8">
                {t('diensten.hero.description')}
              </p>
              
              {/* Stats */}
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="flex flex-wrap gap-6 justify-center"
              >
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary-600">15+</div>
                  <div className="text-sm text-gray-600">{t('diensten.years_experience')}</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary-600">6</div>
                  <div className="text-sm text-gray-600">{t('diensten.specializations')}</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary-600">100%</div>
                  <div className="text-sm text-gray-600">{t('diensten.industry_knowledge')}</div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Industries Grid */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {industries.map((industry, index) => (
                <motion.div
                  key={industry.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="relative"
                >
                  <div className={`p-8 rounded-2xl border-2 border-gray-100 hover:border-${industry.color}-200 transition-all duration-300 hover:shadow-xl`}>
                    {/* Industry Header */}
                    <div className="flex items-start gap-4 mb-6">
                      <div className={`p-3 bg-${industry.color}-100 rounded-xl`}>
                        <industry.icon className={`w-8 h-8 text-${industry.color}-600`} />
                      </div>
                      <div className="flex-1">
                        <h2 className="text-2xl font-bold text-gray-900 mb-2">
                          {industry.industry}
                        </h2>
                        <h3 className="text-lg font-semibold text-red-600">
                          {industry.mainProblem}
                        </h3>
                      </div>
                    </div>

                    {/* Common Problems */}
                    <div className="mb-6">
                      <p className="text-sm text-gray-500 mb-2">{t('diensten.retail.also_problems')}</p>
                      <ul className="space-y-1">
                        {industry.subProblems.map((problem, idx) => (
                          <li key={idx} className="flex items-center gap-2 text-sm text-gray-700">
                            <ExclamationCircleIcon className="w-4 h-4 text-amber-500" />
                            {problem}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Solution */}
                    <div className="mb-6">
                      <p className="text-lg font-medium text-gray-900 mb-2 italic">
                        {`"${industry.emotion}"`}
                      </p>
                      <p className="text-gray-600">
                        {industry.solution}
                      </p>
                    </div>

                    {/* Case Study */}
                    <div className="mb-6 p-4 bg-gray-50 rounded-lg">
                      <div className="flex items-center gap-2 mb-2">
                        <CheckCircleIcon className="w-5 h-5 text-green-500" />
                        <span className="font-semibold text-gray-900">{t('diensten.case_example')}</span>
                      </div>
                      <p className="text-sm text-gray-700 mb-1">
                        <span className="font-medium">{industry.caseStudy.client}:</span> {industry.caseStudy.problem}
                      </p>
                      <p className="text-sm text-green-600 font-medium">
                        {t('diensten.case_result')} {industry.caseStudy.result}
                      </p>
                    </div>

                    {/* Tech Stack Accordion */}
                    <div className="mb-6">
                      <button
                        onClick={() => setExpandedIndustry(expandedIndustry === industry.id ? null : industry.id)}
                        className="flex items-center gap-2 text-sm text-gray-500 hover:text-gray-700 transition-colors"
                      >
                        <ChevronDownIcon className={`w-4 h-4 transition-transform ${expandedIndustry === industry.id ? 'rotate-180' : ''}`} />
                        {t('diensten.tech_specs')}
                      </button>
                      {expandedIndustry === industry.id && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          className="mt-3 p-4 bg-gray-50 rounded-lg text-sm text-gray-600"
                        >
                          {industry.techStack}
                        </motion.div>
                      )}
                    </div>

                    {/* CTA */}
                    <Button 
                      href={`/contact?industry=${industry.id}`}
                      className={`w-full bg-${industry.color}-600 hover:bg-${industry.color}-700`}
                    >
                      {t(`diensten.${industry.id}.cta`)}
                    </Button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="py-20 bg-primary-50">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                {t('diensten.bottom.title')}
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                {t('diensten.bottom.description')}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button href="/tevredenheidscheck" size="lg">
                  {t('diensten.bottom.cta1')}
                </Button>
                <Button href="tel:0203080465" variant="outline" size="lg">
                  {t('diensten.bottom.cta2')}
                </Button>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}