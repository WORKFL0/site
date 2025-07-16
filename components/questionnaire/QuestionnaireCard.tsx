import { motion } from 'framer-motion';
import Button from '@/components/ui/Button';
import { ChevronLeftIcon } from '@heroicons/react/outline';

interface Question {
  id: number;
  question: string;
  options: string[];
  next: (number | string)[];
  type: string[];
}

interface QuestionnaireCardProps {
  question: Question;
  questionNumber: number;
  totalQuestions: number;
  onAnswer: (optionIndex: number) => void;
  onBack?: () => void;
  canGoBack?: boolean;
}

export default function QuestionnaireCard({
  question,
  questionNumber,
  totalQuestions,
  onAnswer,
  onBack,
  canGoBack = false,
}: QuestionnaireCardProps) {
  return (
    <div className="space-y-8">
      {/* Question number */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="text-center text-gray-500 dark:text-gray-400 text-sm font-medium"
      >
        Vraag {questionNumber} van {totalQuestions}
      </motion.p>

      {/* Question */}
      <motion.h2
        key={question.id}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="text-2xl sm:text-3xl font-semibold text-gray-800 dark:text-gray-100 text-center leading-relaxed"
      >
        {question.question}
      </motion.h2>

      {/* Options */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="space-y-4 max-w-2xl mx-auto"
      >
        {question.options.map((option, index) => {
          const isPositive = question.type[index] === 'positive';
          
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 + index * 0.1 }}
            >
              <button
                onClick={() => onAnswer(index)}
                className={`
                  w-full p-6 rounded-2xl text-left transition-all duration-300
                  bg-gray-50 dark:bg-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 
                  border-2 border-gray-200 dark:border-gray-600
                  hover:border-gray-300 dark:hover:border-gray-500 hover:shadow-lg transform hover:-translate-y-1
                  ${isPositive ? 'hover:border-green-400 hover:bg-green-50 dark:hover:bg-green-900/20' : 'hover:border-primary-400 hover:bg-primary-50 dark:hover:bg-primary-900/20'}
                `}
              >
                <span className="text-lg font-medium text-gray-700 dark:text-gray-200">
                  {option}
                </span>
              </button>
            </motion.div>
          );
        })}
      </motion.div>

      {/* Back button */}
      {canGoBack && onBack && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="flex justify-center mt-8"
        >
          <button
            onClick={onBack}
            className="flex items-center gap-2 px-6 py-3 text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-gray-100
                     bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 rounded-lg transition-all duration-300
                     font-medium"
          >
            <ChevronLeftIcon className="w-5 h-5" />
            Vorige vraag
          </button>
        </motion.div>
      )}
    </div>
  );
}