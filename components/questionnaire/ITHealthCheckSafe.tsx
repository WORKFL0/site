'use client'

import { useState } from 'react'
import { 
  itHealthQuestions, 
  calculateHealthScore, 
  getRecommendations 
} from '@/lib/itHealthCheckData'
import QuestionnaireCard from './QuestionnaireCard'
import { 
  ShieldCheckIcon, 
  ServerStackIcon, 
  DocumentCheckIcon, 
  ExclamationTriangleIcon,
  CheckCircleIcon,
  ArrowRightIcon,
  ArrowLeftIcon
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

const ITHealthCheckSafe = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [answers, setAnswers] = useState<number[]>([])
  const [showResult, setShowResult] = useState(false)
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null)

  const handleAnswer = (optionIndex: number) => {
    setSelectedAnswer(optionIndex)
    
    // Store the answer
    const newAnswers = [...answers, optionIndex]
    setAnswers(newAnswers)
    
    // Get the next question/result
    const next = currentQuestion.next[optionIndex]
    
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
    
    // Use neutral colors only - no red/green hints
    const levelColors = {
      excellent: 'text-gray-700 bg-gray-50 border-gray-200',
      good: 'text-gray-700 bg-gray-50 border-gray-200',
      moderate: 'text-gray-700 bg-gray-50 border-gray-200',
      poor: 'text-gray-700 bg-gray-50 border-gray-200'
    }

    const levelLabels = {
      excellent: 'Uitstekend',
      good: 'Goed',
      moderate: 'Matig',
      poor: 'Verbetering Nodig'
    }

    return (
      <div className="max-w-3xl mx-auto">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="p-8">
            <div className="animate-fadeIn">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                IT Health Check Resultaat
              </h2>
              
              {/* Overall Score */}
              <div className="text-center mb-8">
                <div className="inline-flex items-center justify-center w-32 h-32 rounded-full bg-yellow-100 mb-4">
                  <span className="text-4xl font-bold text-gray-900">{score}%</span>
                </div>
                <div className={`inline-block px-6 py-3 rounded-full border-2 ${levelColors[level]}`}>
                  <span className="font-bold text-lg">{levelLabels[level]}</span>
                </div>
              </div>

              {/* Category Scores */}
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Scores per Categorie</h3>
                <div className="space-y-3">
                  {Object.entries(categories).map(([category, catScore]) => {
                    const Icon = categoryIcons[category as keyof typeof categoryIcons]
                    return (
                      <div key={category} className="flex items-center gap-4">
                        <Icon className="w-5 h-5 text-gray-600" />
                        <div className="flex-1">
                          <div className="flex justify-between mb-1">
                            <span className="text-sm font-medium text-gray-700">
                              {categoryNames[category as keyof typeof categoryNames]}
                            </span>
                            <span className="text-sm text-gray-600">{catScore}%</span>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-2">
                            <div
                              className="bg-yellow-400 h-2 rounded-full transition-all duration-500"
                              style={{ width: `${catScore}%` }}
                            />
                          </div>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>

              {/* Recommendations */}
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Aanbevelingen</h3>
                <div className="space-y-3">
                  {recommendations.map((rec, index) => (
                    <div key={index} className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg">
                      <CheckCircleIcon className="w-5 h-5 text-yellow-600 mt-0.5" />
                      <p className="text-gray-700">{rec}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Actions */}
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={restart}
                  className="flex items-center justify-center gap-2 px-6 py-3 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors"
                >
                  <ArrowLeftIcon className="w-4 h-4" />
                  Opnieuw Beginnen
                </button>
                <a
                  href="/contact"
                  className="flex items-center justify-center gap-2 px-6 py-3 bg-yellow-400 text-black rounded-lg hover:bg-yellow-500 transition-colors font-bold"
                >
                  Gratis Adviesgesprek
                  <ArrowRightIcon className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="max-w-3xl mx-auto">
      <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
        {/* Progress Bar */}
        <div className="h-2 bg-gray-200">
          <div
            className="h-full bg-yellow-400 transition-all duration-300"
            style={{ width: `${progress}%` }}
          />
        </div>

        <div className="p-8">
          <div className="animate-fadeIn">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              {currentQuestion.question}
            </h2>
            <p className="text-gray-600 mb-6">
              Vraag {currentQuestionIndex + 1} van {itHealthQuestions.length}
            </p>

            {/* Options */}
            <div className="space-y-3">
              {currentQuestion.options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleAnswer(index)}
                  className={`w-full text-left p-4 rounded-lg border-2 transition-all ${
                    selectedAnswer === index
                      ? 'border-yellow-400 bg-yellow-50'
                      : 'border-gray-200 hover:border-gray-300 hover:bg-gray-50'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className={`w-5 h-5 rounded-full border-2 ${
                      selectedAnswer === index
                        ? 'border-yellow-400 bg-yellow-400'
                        : 'border-gray-300'
                    }`}>
                      {selectedAnswer === index && (
                        <CheckCircleIcon className="w-4 h-4 text-white" />
                      )}
                    </div>
                    <span className="text-gray-700">{option}</span>
                  </div>
                </button>
              ))}
            </div>

            {/* Navigation */}
            {currentQuestionIndex > 0 && (
              <button
                onClick={() => {
                  setCurrentQuestionIndex(currentQuestionIndex - 1)
                  setSelectedAnswer(null)
                }}
                className="mt-6 flex items-center gap-2 text-gray-600 hover:text-gray-900"
              >
                <ArrowLeftIcon className="w-4 h-4" />
                Vorige vraag
              </button>
            )}
          </div>
        </div>
      </div>

      {/* CSS Animation */}
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
      `}</style>
    </div>
  )
}

export default ITHealthCheckSafe