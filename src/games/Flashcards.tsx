import { useState } from 'react'
import type { Unit, Word } from '../data/vocabulary'

interface FlashcardsProps {
  unit: Unit
  onComplete: (score: number, maxScore: number) => void
  onWordResult: (wordId: string, quality: number) => void
}

export default function Flashcards({
  unit,
  onComplete,
  onWordResult
}: FlashcardsProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isFlipped, setIsFlipped] = useState(false)
  const [score, setScore] = useState(0)
  const words = unit.words

  const currentWord = words[currentIndex]

  const handleKnow = () => {
    onWordResult(currentWord.id, 4) // Good quality
    setScore(score + 1)
    moveToNext()
  }

  const handleDontKnow = () => {
    onWordResult(currentWord.id, 1) // Poor quality
    moveToNext()
  }

  const moveToNext = () => {
    if (currentIndex < words.length - 1) {
      setCurrentIndex(currentIndex + 1)
      setIsFlipped(false)
    } else {
      onComplete(score + (isFlipped ? 1 : 0), words.length)
    }
  }

  return (
    <div className="game-card">
      <div className="game-progress">
        <span className="progress-counter">
          Card {currentIndex + 1} of {words.length}
        </span>
        <div className="progress-bar-game">
          <div
            className="progress-fill"
            style={{
              width: `${((currentIndex + 1) / words.length) * 100}%`
            }}
          ></div>
        </div>
        <span className="progress-counter">
          Score: {score}
        </span>
      </div>

      <div
        onClick={() => setIsFlipped(!isFlipped)}
        style={{
          perspective: '1000px',
          cursor: 'pointer',
          margin: '2rem 0'
        }}
      >
        <div
          style={{
            background: isFlipped
              ? 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
              : 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
            color: 'white',
            padding: '3rem',
            borderRadius: '1rem',
            textAlign: 'center',
            minHeight: '300px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            transition: 'all 0.3s',
            boxShadow: '0 8px 32px rgba(0,0,0,0.2)',
            fontSize: isFlipped ? '1.5rem' : '2rem',
            fontWeight: 700
          }}
        >
          {isFlipped ? (
            <div>
              <div style={{ fontSize: '1.2rem', marginBottom: '0.5rem', opacity: 0.8 }}>
                {currentWord.uzbek}
              </div>
              <div style={{ fontSize: '0.9rem', opacity: 0.7 }}>
                {currentWord.transcription}
              </div>
            </div>
          ) : (
            <div>
              <div style={{ marginBottom: '1rem', fontSize: '0.9rem', opacity: 0.8 }}>
                English Word
              </div>
              {currentWord.english}
            </div>
          )}
        </div>
      </div>

      <div style={{ textAlign: 'center', marginBottom: '2rem', color: '#6b7280' }}>
        Click the card to reveal the translation
      </div>

      <div className="game-options">
        <button
          className="button-primary"
          onClick={handleKnow}
          style={{
            background: '#10b981',
            marginBottom: '1rem'
          }}
        >
          ✓ I Know This
        </button>
        <button
          className="button-primary"
          onClick={handleDontKnow}
          style={{
            background: '#ef4444'
          }}
        >
          ✕ I Don't Know
        </button>
      </div>
    </div>
  )
}
