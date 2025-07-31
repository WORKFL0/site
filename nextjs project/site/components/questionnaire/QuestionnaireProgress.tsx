interface QuestionnaireProgressProps {
  current: number
  total: number
}

const QuestionnaireProgress = ({ current, total }: QuestionnaireProgressProps) => {
  const progressPercentage = (current / total) * 100

  return (
    <div className="p-6 border-b border-gray-200">
      <div className="flex justify-between items-center mb-2">
        <span className="text-sm font-medium text-gray-600">
          Vraag {current} van de {total}
        </span>
        <span className="text-sm font-bold text-primary-600">
          {Math.round(progressPercentage)}%
        </span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2.5">
        <div
          className="bg-primary-500 h-2.5 rounded-full transition-all duration-500 ease-out"
          style={{ width: `${progressPercentage}%` }}
        ></div>
      </div>
    </div>
  )
}

export default QuestionnaireProgress
