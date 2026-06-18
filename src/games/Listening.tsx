import { useState } from 'react'
import type { Unit } from '../data/vocabulary'

interface ListeningProps {
  unit: Unit
  onComplete: (score: number, maxScore: number) => void
  onWordResult: (wordId: string, quality: number) => void
}

export default function Listening({
  unit,
  onComplete,
  onWordResult
}: ListeningProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [score, setScore] = useState(0)
  const [userAnswer, setUserAnswer] = useState('')
  const [answered, setAnswered] = useState(false)
  const [isCorrect, setIsCorrect] = useState(false)
  const [played, setPlayed] = useState(false)

  const words = unit.words
  const currentWord = words[currentIndex]

  const normalizeAnswer = (text: string) => {
    return text.toLowerCase().trim().replace(/[^\w\s]/g, '')
  }

  const playSound = () => {
    // Using Web Speech API for text-to-speech
    const utterance = new SpeechSynthesisUtterance(currentWord.english)
    utterance.lang = 'en-US'
    utterance.rate = 0.8 // Slightly slower
    speechSynthesis.speak(utterance)
    setPlayed(true)
  }

  const handleSubmit = () => {
    const isAnswerCorrect = normalizeAnswer(userAnswer) === normalizeAnswer(currentWord.uzbek)
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
      setPlayed(false)
    } else {
      onComplete(score + (isCorrect ? 1 : 0), words.length)
    }
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !answered && played) {
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
        Listen and translate to Uzbek
      </div>

      <div style={{ textAlign: 'center', margin: '2rem 0' }}>
        <button
          onClick={playSound}
          style={{
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            color: 'white',
            border: 'none',
            padding: '1.5rem 3rem',
            borderRadius: '1rem',
            fontSize: '1.2rem',
            fontWeight: 600,
            cursor: 'pointer',
            transition: 'all 0.3s',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.75rem'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-2px)'
            e.currentTarget.style.boxShadow = '0 8px 20px rgba(102, 126, 234, 0.3)'
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0)'
            e.currentTarget.style.boxShadow = 'none'
          }}
        >
          🔊 Play Audio
        </button>
      </div>

      {played && (
        <div style={{
          textAlign: 'center',
          marginBottom: '1rem',
          color: '#6b7280',
          fontSize: '0.9rem'
        }}>
          You can replay the audio as many times as you need
        </div>
      )}

      {!played ? (
        <div style={{
          padding: '1.5rem',
          background: '#fef3c7',
          borderRadius: '0.75rem',
          color: '#92400e',
          textAlign: 'center',
          fontWeight: 600
        }}>
          Click "Play Audio" to hear the word
        </div>
      ) : (
        <>
          <input
            type="text"
            className="input-field"
            placeholder="Type the Uzbek translation..."
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
                    Correct answer: <strong>{currentWord.uzbek}</strong>
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
        </>
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
    </div>
  )
}
