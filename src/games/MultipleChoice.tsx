import { useState } from 'react'
import type { Unit } from '../data/vocabulary'

interface MultipleChoiceProps {
  unit: Unit
  onComplete: (score: number, maxScore: number) => void
  onWordResult: (wordId: string, quality: number) => void
}

export default function MultipleChoice({
  unit,
  onComplete,
  onWordResult
}: MultipleChoiceProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [score, setScore] = useState(0)
  const [answered, setAnswered] = useState(false)
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null)
  const [isCorrect, setIsCorrect] = useState(false)

  const words = unit.words
  const currentWord = words[currentIndex]

  // Generate options: correct answer + 3 random wrong ones
  const generateOptions = () => {
    const options = [currentWord.uzbek]
    const otherWords = words.filter(w => w.english !== currentWord.english)
    
    while (options.length < 4 && otherWords.length > 0) {
      const randomIdx = Math.floor(Math.random() * otherWords.length)
      options.push(otherWords[randomIdx].uzbek)
      otherWords.splice(randomIdx, 1)
    }

    return options.sort(() => Math.random() - 0.5)
  }

  const options = generateOptions()

  const handleAnswer = (answer: string) => {
    const correct = answer === currentWord.uzbek
    setSelectedAnswer(answer)
    setIsCorrect(correct)
    setAnswered(true)

    if (correct) {
      setScore(score + 1)
      onWordResult(currentWord.english, 5) // Excellent
    } else {
      onWordResult(currentWord.english, 2) // Poor
    }
  }

  const moveToNext = () => {
    if (currentIndex < words.length - 1) {
      setCurrentIndex(currentIndex + 1)
      setSelectedAnswer(null)
      setAnswered(false)
      setIsCorrect(false)
    } else {
      onComplete(score + (isCorrect ? 1 : 0), words.length)
    }
  }

  return (
    <div className="game-card">
      <div className="game-progress">
        <span className="progress-counter">
          Question {currentIndex + 1} of {words.length}
        </span>
        <div className="progress-bar-game">
          <div
            className="progress-fill"
            style={{
              width: `${((currentIndex + 1) / words.length) * 100}%`
            }}
          ></div>
        </div>
        <span className="progress-counter">Score: {score}</span>
      </div>

      <div className="game-question">
        What is the Uzbek translation of "<strong>{currentWord.english}</strong>"?
      </div>

      <div className="game-options">
        {options.map((option, idx) => (
          <button
            key={idx}
            className={`option-btn ${
              selectedAnswer === option
                ? isCorrect
                  ? 'correct'
                  : 'incorrect'
                : answered && option === currentWord.uzbek
                ? 'correct'
                : ''
            }`}
            onClick={() => !answered && handleAnswer(option)}
            disabled={answered}
            style={{
              opacity: answered && selectedAnswer !== option && option !== currentWord.uzbek ? 0.5 : 1
            }}
          >
            {option}
          </button>
        ))}
      </div>

      {answered && (
        <div style={{
          marginTop: '2rem',
          padding: '1rem',
          borderRadius: '0.75rem',
          background: isCorrect ? '#ecfdf5' : '#fef2f2',
          color: isCorrect ? '#059669' : '#dc2626',
          textAlign: 'center',
          fontWeight: 600
        }}>
          {isCorrect ? '✓ Correct!' : '✗ Incorrect'}
          {!isCorrect && (
            <div style={{ marginTop: '0.5rem', fontSize: '0.9rem' }}>
              The correct answer is: <strong>{currentWord.uzbek}</strong>
            </div>
          )}
        </div>
      )}

      {answered && (
        <button
          className="button-primary"
          onClick={moveToNext}
          style={{ marginTop: '2rem' }}
        >
          {currentIndex < words.length - 1 ? 'Next Question' : 'Finish'}
        </button>
      )}
    </div>
  )
}
