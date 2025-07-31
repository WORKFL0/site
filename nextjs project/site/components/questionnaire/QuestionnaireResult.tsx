import { motion } from 'framer-motion'
import Button from '../ui/Button'
import { CheckCircleIcon, ExclamationTriangleIcon } from '@heroicons/react/24/solid'

interface QuestionnaireResultProps {
  isPositive: boolean
  onRestart: () => void
}

const QuestionnaireResult = ({ isPositive, onRestart }: QuestionnaireResultProps) => {
  return (
    <div className="p-8 text-center">
      <motion.div
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: 'spring', stiffness: 260, damping: 20 }}
        className="mb-6"
      >
        {isPositive ? (
          <CheckCircleIcon className="w-24 h-24 text-green-500 mx-auto" />
        ) : (
          <ExclamationTriangleIcon className="w-24 h-24 text-amber-500 mx-auto" />
        )}
      </motion.div>

      <h2 className="text-3xl font-bold text-gray-900 mb-4">
        {isPositive ? 'Helemaal goed geregeld!' : 'Tijd voor een gesprek!'}
      </h2>

      <p className="text-gray-600 mb-8 max-w-md mx-auto">
        {isPositive
          ? 'Fantastisch! Het lijkt erop dat jullie IT-dienstverlener uitstekend werk levert. Jullie zijn goed verzorgd en kunnen met vertrouwen verder!'
          : 'Op basis van jouw antwoorden lijkt het erop dat er ruimte is voor verbetering in jullie IT-ondersteuning. Wij kunnen helpen!'}
      </p>

      {!isPositive && (
        <div className="bg-gray-100 rounded-lg p-6 mb-8 text-left">
          <h3 className="font-bold text-lg mb-4">Neem contact met ons op:</h3>
          <p><strong>Telefoon:</strong> 020-30 80 465</p>
          <p><strong>E-mail:</strong> info@workflo.nl</p>
          <p><strong>Website:</strong> workflo.it</p>
        </div>
      )}

      <Button onClick={onRestart} size="lg" variant="outline">
        Opnieuw beginnen
      </Button>
    </div>
  )
}

export default QuestionnaireResult
