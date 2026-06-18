import { useState } from 'react'
import type { Unit } from '../data/vocabulary'

interface ReverseQuizProps {
  unit: Unit
  onComplete: (score: number, maxScore: number) => void
  onWordResult: (wordId: string, quality: number) => void
}

export default function ReverseQuiz({
  unit,
  onComplete,
  onWordResult
}: ReverseQuizProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [score, setScore] = useState(0)
  const [userAnswer, setUserAnswer] = useState('')
  const [answered, setAnswered] = useState(false)
  const [isCorrect, setIsCorrect] = useState(false)

  const words = unit.words
  const currentWord = words[currentIndex]

  const normalizeAnswer = (text: string) => {
    return text.toLowerCase().trim().replace(/[^\w\s]/g, '')
  }

  const handleSubmit = () => {
    const isAnswerCorrect = normalizeAnswer(userAnswer) === normalizeAnswer(currentWord.english)
    setIsCorrect(isAnswerCorrect)
    setAnswered(true)

    if (isAnswerCorrect) {
      setScore(score + 1)
      onWordResult(currentWord.english, 5)
    } else {
      onWordResult(currentWord.english, 2)
    }
  }

  const moveToNext = () => {
    if (currentIndex < words.length - 1) {
      setCurrentIndex(currentIndex + 1)
      setUserAnswer('')
      setAnswered(false)
      setIsCorrect(false)
    } else {
      onComplete(score + (isCorrect ? 1 : 0), words.length)
    }
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !answered) {
      handleSubmit()
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
        Translate to English: "<strong>{currentWord.uzbek}</strong>"
      </div>

      <input
        type="text"
        className="input-field"
        placeholder="Type the English translation..."
        value={userAnswer}
        onChange={(e) => setUserAnswer(e.target.value)}
        onKeyPress={handleKeyPress}
        disabled={answered}
        autoFocus
      />

      {answered ? (
        <div style={{
          marginTop: '2rem',
          padding: '1rem',
          borderRadius: '0.75rem',
          background: isCorrect ? '#ecfdf5' : '#fef2f2',
          color: isCorrect ? '#059669' : '#dc2626',
          textAlign: 'center',
          fontWeight: 600
        }}>
          {isCorrect ? (
            <>✓ Correct! Your answer: "<strong>{userAnswer}</strong>"</>
          ) : (
            <>
              ✗ Incorrect. Your answer: "<strong>{userAnswer}</strong>"
              <div style={{ marginTop: '0.5rem', fontSize: '0.9rem' }}>
                Correct answer: <strong>{currentWord.english}</strong>
              </div>
            </>
          )}
        </div>
      ) : (
        <button
          className="button-primary"
          onClick={handleSubmit}
          disabled={!userAnswer.trim()}
          style={{ marginTop: '2rem' }}
        >
          Check Answer
        </button>
      )}

      {answered && (
        <button
          className="button-primary"
          onClick={moveToNext}
          style={{ marginTop: '1rem' }}
        >
          {currentIndex < words.length - 1 ? 'Next Question' : 'Finish'}
        </button>
      )}

      {currentIndex > 0 && (
        <div style={{ marginTop: '2rem', padding: '1rem', background: '#f3f4f6', borderRadius: '0.75rem' }}>
          <p style={{ color: '#6b7280', margin: 0 }}>
            Last word: <strong>{words[currentIndex - 1].uzbek}</strong> = <strong>{words[currentIndex - 1].english}</strong>
          </p>
        </div>
      )}
    </div>
  )
}
