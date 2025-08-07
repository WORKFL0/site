'use client'

import { useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import { questions } from '@/lib/questionnaireData'
import QuestionnaireCard from './QuestionnaireCard'
import QuestionnaireProgress from './QuestionnaireProgress'
import QuestionnaireResult from './QuestionnaireResult'
import Button from '../ui/Button'

const FlowchartQuestionnaire = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [showResult, setShowResult] = useState(false)
  const [isPositiveResult, setIsPositiveResult] = useState(false)
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null)

  const handleAnswer = (next: number | string, optionIndex: number) => {
    setSelectedAnswer(optionIndex)
    
    // Add a small delay to show the selection before moving to next question
    setTimeout(() => {
      if (typeof next === 'string') {
        setIsPositiveResult(next === 'satisfied')
        setShowResult(true)
      } else {
        setCurrentQuestionIndex(next - 1)
        setSelectedAnswer(null) // Reset for next question
      }
    }, 300)
  }

  const restart = () => {
    setCurrentQuestionIndex(0)
    setShowResult(false)
    setSelectedAnswer(null)
  }

  const currentQuestion = questions[currentQuestionIndex]

  return (
    <AnimatePresence mode="wait">
      {!showResult ? (
        <QuestionnaireCard key={currentQuestionIndex}>
          <QuestionnaireProgress
            current={currentQuestionIndex + 1}
            total={questions.length}
          />
          <div className="p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              {currentQuestion.question}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {currentQuestion.options.map((option, index) => {
                const isSelected = selectedAnswer === index
                const buttonType = currentQuestion.type[index]
                
                // Always use neutral variant to avoid color hints
                let variant: 'neutral' | 'primary' | 'danger' = 'neutral'
                if (isSelected) {
                  variant = 'primary' // Use primary for all selected items
                }
                
                return (
                  <Button
                    key={index}
                    onClick={() => handleAnswer(currentQuestion.next[index], index)}
                    variant={variant}
                    size="lg"
                    className={`w-full text-center transition-all duration-200 ${
                      isSelected ? 'transform scale-105 shadow-lg' : ''
                    }`}
                    disabled={selectedAnswer !== null && !isSelected}
                  >
                    {option}
                  </Button>
                )
              })}
            </div>
          </div>
        </QuestionnaireCard>
      ) : (
        <QuestionnaireCard key="result">
          <QuestionnaireResult isPositive={isPositiveResult} onRestart={restart} />
        </QuestionnaireCard>
      )}
    </AnimatePresence>
  )
}

export default FlowchartQuestionnaire
