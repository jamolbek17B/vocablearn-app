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
  const [touchStart, setTouchStart] = useState(0)
  const words = unit.words

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.touches[0].clientX)
  }

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (!touchStart) return
    
    const touchEnd = e.changedTouches[0].clientX
    const distance = touchStart - touchEnd
    
    // Swipe left to flip, swipe right to unflip, tap to toggle
    if (Math.abs(distance) < 50) {
      // Tap: flip the card
      setIsFlipped(!isFlipped)
    }
    setTouchStart(0)
  }

  const currentWord = words[currentIndex]

  const handleKnow = () => {
    onWordResult(currentWord.english, 4) // Good quality
    setScore(score + 1)
    moveToNext()
  }

  const handleDontKnow = () => {
    onWordResult(currentWord.english, 1) // Poor quality
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
    <div style={{ background: '#f1f5f9', minHeight: '100vh', padding: '40px 20px' }}>
      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        <div style={{ marginBottom: '40px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
            <h1 style={{ fontSize: '1.8rem', fontWeight: 700, color: '#0f172a', margin: 0 }}>
              🎴 Flashcards
            </h1>
            <div style={{ fontSize: '0.9rem', color: '#64748b', fontWeight: 600 }}>
              {currentIndex + 1} / {words.length}
            </div>
          </div>
          <div style={{ height: '8px', background: '#e2e8f0', borderRadius: '8px', overflow: 'hidden' }}>
            <div
              style={{
                height: '100%',
                background: 'linear-gradient(90deg, #667eea 0%, #764ba2 100%)',
                width: `${((currentIndex + 1) / words.length) * 100}%`,
                transition: 'width 0.3s ease'
              }}
            ></div>
          </div>
        </div>

        <div
          onClick={() => setIsFlipped(!isFlipped)}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          style={{
            perspective: '1000px',
            cursor: 'pointer',
            marginBottom: '40px',
            userSelect: 'none',
            touchAction: 'manipulation'
          }}
        >
          <div
            style={{
              background: isFlipped
                ? 'linear-gradient(135deg, #a855f7 0%, #ec4899 100%)'
                : 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
              color: 'white',
              padding: '60px 40px',
              borderRadius: '20px',
              textAlign: 'center',
              minHeight: '280px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              transition: 'all 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55)',
              boxShadow: '0 20px 60px rgba(102, 126, 234, 0.3)',
              fontWeight: 700
            }}
          >
            {isFlipped ? (
              <div>
                <div style={{ fontSize: '0.8rem', opacity: 0.85, marginBottom: '16px', textTransform: 'uppercase', letterSpacing: '1.5px' }}>
                  UZBEK
                </div>
                <div style={{ fontSize: '2.8rem', marginBottom: '12px' }}>
                  {currentWord.uzbek}
                </div>
                <div style={{ fontSize: '0.9rem', opacity: 0.8 }}>
                  {currentWord.transcription}
                </div>
              </div>
            ) : (
              <div>
                <div style={{ fontSize: '0.8rem', opacity: 0.85, marginBottom: '16px', textTransform: 'uppercase', letterSpacing: '1.5px' }}>
                  ENGLISH
                </div>
                <div style={{ fontSize: '3rem' }}>
                  {currentWord.english}
                </div>
              </div>
            )}
          </div>
        </div>

        <div style={{ textAlign: 'center', marginBottom: '40px', color: '#64748b', fontSize: '0.9rem' }}>
          {isFlipped ? '✓ Tap to hide' : 'Tap to reveal'}
        </div>

        <div style={{ display: 'flex', gap: '12px' }}>
          <button
            onClick={handleKnow}
            style={{
              flex: 1,
              padding: '14px 24px',
              background: '#10b981',
              color: 'white',
              border: 'none',
              borderRadius: '10px',
              fontSize: '0.95rem',
              fontWeight: 700,
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              boxShadow: '0 4px 15px rgba(16, 185, 129, 0.3)'
            }}
            onMouseEnter={(e) => {
              (e.target as HTMLButtonElement).style.transform = 'translateY(-2px)';
              (e.target as HTMLButtonElement).style.boxShadow = '0 8px 25px rgba(16, 185, 129, 0.4)';
            }}
            onMouseLeave={(e) => {
              (e.target as HTMLButtonElement).style.transform = 'translateY(0)';
              (e.target as HTMLButtonElement).style.boxShadow = '0 4px 15px rgba(16, 185, 129, 0.3)';
            }}
          >
            ✓ Know
          </button>
          <button
            onClick={handleDontKnow}
            style={{
              flex: 1,
              padding: '14px 24px',
              background: '#ef4444',
              color: 'white',
              border: 'none',
              borderRadius: '10px',
              fontSize: '0.95rem',
              fontWeight: 700,
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              boxShadow: '0 4px 15px rgba(239, 68, 68, 0.3)'
            }}
            onMouseEnter={(e) => {
              (e.target as HTMLButtonElement).style.transform = 'translateY(-2px)';
              (e.target as HTMLButtonElement).style.boxShadow = '0 8px 25px rgba(239, 68, 68, 0.4)';
            }}
            onMouseLeave={(e) => {
              (e.target as HTMLButtonElement).style.transform = 'translateY(0)';
              (e.target as HTMLButtonElement).style.boxShadow = '0 4px 15px rgba(239, 68, 68, 0.3)';
            }}
          >
            ✕ Don't Know
          </button>
        </div>
      </div>
    </div>
  )
}
