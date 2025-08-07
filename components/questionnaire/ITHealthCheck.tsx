'use client'

import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { 
  itHealthQuestions, 
  calculateHealthScore, 
  getRecommendations 
} from '@/lib/itHealthCheckData'
import QuestionnaireCard from './QuestionnaireCard'
import Button from '../ui/Button'
import { 
  ShieldCheckIcon, 
  ServerStackIcon, 
  DocumentCheckIcon, 
  ExclamationTriangleIcon,
  CheckCircleIcon
} from '@heroicons/react/24/outline'

const categoryIcons = {
  security: ShieldCheckIcon,
  backup: ServerStackIcon,
  infrastructure: DocumentCheckIcon,
  compliance: CheckCircleIcon,
  support: ExclamationTriangleIcon
}

const categoryNames = {
  security: 'Beveiliging',
  backup: 'Backup & Recovery',
  infrastructure: 'Infrastructuur',
  compliance: 'Compliance',
  support: 'Ondersteuning'
}

const ITHealthCheck = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [answers, setAnswers] = useState<number[]>([])
  const [showResult, setShowResult] = useState(false)
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null)

  const handleAnswer = (next: number | string, optionIndex: number) => {
    setSelectedAnswer(optionIndex)
    
    // Store the answer
    const newAnswers = [...answers, optionIndex]
    setAnswers(newAnswers)
    
    // Add a small delay to show the selection
    setTimeout(() => {
      if (typeof next === 'string' && next === 'result') {
        setShowResult(true)
      } else if (typeof next === 'number') {
        setCurrentQuestionIndex(next - 1)
        setSelectedAnswer(null)
      }
    }, 300)
  }

  const restart = () => {
    setCurrentQuestionIndex(0)
    setAnswers([])
    setShowResult(false)
    setSelectedAnswer(null)
  }

  const currentQuestion = itHealthQuestions[currentQuestionIndex]
  const progress = ((currentQuestionIndex + 1) / itHealthQuestions.length) * 100

  if (showResult) {
    const { score, level, categories } = calculateHealthScore(answers)
    const recommendations = getRecommendations(level)
    
    const levelColors = {
      excellent: 'text-green-600 bg-green-50 border-green-200',
      good: 'text-blue-600 bg-blue-50 border-blue-200',
      moderate: 'text-yellow-600 bg-yellow-50 border-yellow-200',
      poor: 'text-red-600 bg-red-50 border-red-200'
    }

    const levelLabels = {
      excellent: 'Uitstekend',
      good: 'Goed',
      moderate: 'Matig',
      poor: 'Verbetering Nodig'
    }

    return (
      <QuestionnaireCard>
        <div className="p-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              IT Health Check Resultaat
            </h2>
            
            {/* Overall Score */}
            <div className="mb-8 text-center">
              <div className="inline-flex items-center justify-center w-32 h-32 rounded-full bg-gradient-to-r from-primary-500 to-primary-600 text-white mb-4">
                <span className="text-3xl font-bold">{score}%</span>
              </div>
              <div className={`inline-block px-4 py-2 rounded-full border ${levelColors[level]}`}>
                <span className="font-semibold">{levelLabels[level]}</span>
              </div>
            </div>

            {/* Category Breakdown */}
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Score per Categorie</h3>
              <div className="space-y-3">
                {Object.entries(categories).map(([category, categoryScore]) => {
                  const Icon = categoryIcons[category as keyof typeof categoryIcons]
                  return (
                    <div key={category} className="flex items-center gap-3">
                      <Icon className="w-5 h-5 text-gray-600" />
                      <span className="text-sm font-medium text-gray-700 w-32">
                        {categoryNames[category as keyof typeof categoryNames]}
                      </span>
                      <div className="flex-1 bg-gray-200 rounded-full h-2">
                        <motion.div
                          className="bg-gradient-to-r from-primary-500 to-primary-600 h-2 rounded-full"
                          initial={{ width: 0 }}
                          animate={{ width: `${categoryScore}%` }}
                          transition={{ duration: 0.8, delay: 0.2 }}
                        />
                      </div>
                      <span className="text-sm text-gray-600 w-12 text-right">
                        {Math.round(categoryScore)}%
                      </span>
                    </div>
                  )
                })}
              </div>
            </div>

            {/* Recommendations */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Aanbevelingen</h3>
              <ul className="space-y-2">
                {recommendations.map((rec, index) => (
                  <motion.li
                    key={index}
                    className="flex items-start gap-2"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                  >
                    <CheckCircleIcon className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{rec}</span>
                  </motion.li>
                ))}
              </ul>
            </div>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                onClick={restart}
                variant="outline"
                className="flex-1"
              >
                Opnieuw Beginnen
              </Button>
              <Button
                href="/contact"
                variant="primary"
                className="flex-1"
              >
                Gratis Adviesgesprek
              </Button>
            </div>

            {/* Download Report Option */}
            <div className="mt-6 text-center">
              <button
                onClick={() => {
                  // Create a simple text report
                  const report = `IT Health Check Rapport
=======================
Datum: ${new Date().toLocaleDateString('nl-NL')}
Overall Score: ${score}%
Niveau: ${levelLabels[level]}

Scores per Categorie:
${Object.entries(categories)
  .map(([cat, score]) => `- ${categoryNames[cat as keyof typeof categoryNames]}: ${Math.round(score)}%`)
  .join('\n')}

Aanbevelingen:
${recommendations.map((rec, i) => `${i + 1}. ${rec}`).join('\n')}

Voor meer informatie, neem contact op met Workflo IT Services.
Website: https://workflo.it
Email: info@workflo.it
Telefoon: +31 20 308 0465`

                  // Create blob and download
                  const blob = new Blob([report], { type: 'text/plain' })
                  const url = window.URL.createObjectURL(blob)
                  const a = document.createElement('a')
                  a.href = url
                  a.download = `IT-Health-Check-${new Date().toISOString().split('T')[0]}.txt`
                  a.click()
                  window.URL.revokeObjectURL(url)
                }}
                className="text-primary-600 hover:text-primary-700 underline text-sm"
              >
                Download rapport als tekstbestand
              </button>
            </div>
          </motion.div>
        </div>
      </QuestionnaireCard>
    )
  }

  return (
    <AnimatePresence mode="wait">
      <QuestionnaireCard key={currentQuestionIndex}>
        {/* Progress Bar */}
        <div className="p-6 border-b">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-gray-600">
              Vraag {currentQuestionIndex + 1} van {itHealthQuestions.length}
            </span>
            <span className="text-sm text-gray-600">
              {Math.round(progress)}% voltooid
            </span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <motion.div
              className="bg-gradient-to-r from-primary-500 to-primary-600 h-2 rounded-full"
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.3 }}
            />
          </div>
        </div>

        {/* Question */}
        <div className="p-8">
          <div className="flex items-center gap-2 mb-4">
            {(() => {
              const Icon = categoryIcons[currentQuestion.category]
              return <Icon className="w-6 h-6 text-primary-600" />
            })()}
            <span className="text-sm font-medium text-primary-600">
              {categoryNames[currentQuestion.category]}
            </span>
          </div>
          
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            {currentQuestion.question}
          </h2>
          
          <div className="space-y-3">
            {currentQuestion.options.map((option, index) => {
              const isSelected = selectedAnswer === index
              
              return (
                <button
                  key={index}
                  onClick={() => handleAnswer(currentQuestion.next[index], index)}
                  className={`w-full text-left p-4 rounded-lg border-2 transition-all duration-200 ${
                    isSelected
                      ? 'border-primary-500 bg-primary-50 shadow-md transform scale-[1.02]'
                      : 'border-gray-200 hover:border-gray-300 hover:bg-gray-50'
                  } ${selectedAnswer !== null && !isSelected ? 'opacity-50' : ''}`}
                  disabled={selectedAnswer !== null && !isSelected}
                >
                  <div className="flex items-center gap-3">
                    <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                      isSelected ? 'border-primary-500' : 'border-gray-300'
                    }`}>
                      {isSelected && (
                        <div className="w-3 h-3 rounded-full bg-primary-500" />
                      )}
                    </div>
                    <span className={`${isSelected ? 'font-medium' : ''}`}>
                      {option}
                    </span>
                  </div>
                </button>
              )
            })}
          </div>
        </div>
      </QuestionnaireCard>
    </AnimatePresence>
  )
}

export default ITHealthCheck