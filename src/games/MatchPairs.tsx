import { useState, useEffect } from 'react'
import type { Unit } from '../data/vocabulary'

interface MatchPairsProps {
  unit: Unit
  onComplete: (score: number, maxScore: number) => void
  onWordResult: (wordId: string, quality: number) => void
}

interface Card {
  id: string
  text: string
  pairId: string
  type: 'english' | 'uzbek'
}

export default function MatchPairs({
  unit,
  onComplete,
  onWordResult
}: MatchPairsProps) {
  const maxWords = Math.min(8, unit.words.length)
  const selectedWords = unit.words.slice(0, maxWords)

  const generateCards = (): Card[] => {
    const cards: Card[] = []
    selectedWords.forEach((word) => {
      cards.push({
        id: `en-${word.id}`,
        text: word.english,
        pairId: word.id,
        type: 'english'
      })
      cards.push({
        id: `uz-${word.id}`,
        text: word.uzbek,
        pairId: word.id,
        type: 'uzbek'
      })
    })
    return cards.sort(() => Math.random() - 0.5)
  }

  const [cards, setCards] = useState<Card[]>(generateCards())
  const [selected, setSelected] = useState<string[]>([])
  const [matched, setMatched] = useState<Set<string>>(new Set())
  const [score, setScore] = useState(0)

  useEffect(() => {
    if (selected.length === 2) {
      const [first, second] = selected
      const firstCard = cards.find(c => c.id === first)
      const secondCard = cards.find(c => c.id === second)

      if (firstCard && secondCard && firstCard.pairId === secondCard.pairId) {
        // Correct match
        setMatched(new Set([...matched, first, second]))
        setScore(score + 1)
        onWordResult(firstCard.pairId, 5)
        setSelected([])
      } else {
        // Wrong match
        if (firstCard && secondCard) {
          onWordResult(firstCard.pairId, 1)
        }
        setTimeout(() => {
          setSelected([])
        }, 800)
      }
    }
  }, [selected])

  const handleCardClick = (cardId: string) => {
    if (matched.has(cardId) || selected.includes(cardId)) return
    if (selected.length < 2) {
      setSelected([...selected, cardId])
    }
  }

  const isGameComplete = matched.size === cards.length

  return (
    <div className="game-card">
      <div className="game-progress">
        <span className="progress-counter">
          Matched: {score}/{maxWords}
        </span>
        <div className="progress-bar-game">
          <div
            className="progress-fill"
            style={{
              width: `${(score / maxWords) * 100}%`
            }}
          ></div>
        </div>
      </div>

      <div className="game-question">
        Match the English words with their Uzbek translations
      </div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(4, 1fr)',
        gap: '1rem',
        margin: '2rem 0',
        '@media (max-width: 768px)': {
          gridTemplateColumns: 'repeat(3, 1fr)'
        }
      }}>
        {cards.map((card) => (
          <button
            key={card.id}
            className={`match-item ${
              selected.includes(card.id) ? 'selected' : ''
            } ${matched.has(card.id) ? 'matched' : ''}`}
            onClick={() => handleCardClick(card.id)}
            disabled={isGameComplete}
            style={{
              gridColumn: window.innerWidth <= 768 ? 'auto' : 'auto'
            }}
          >
            {card.text}
          </button>
        ))}
      </div>

      {isGameComplete && (
        <div style={{
          padding: '2rem',
          background: '#ecfdf5',
          borderRadius: '0.75rem',
          textAlign: 'center',
          color: '#059669',
          fontWeight: 600,
          marginBottom: '2rem'
        }}>
          ✓ Perfect! You matched all pairs!
        </div>
      )}

      {isGameComplete && (
        <button
          className="button-primary"
          onClick={() => onComplete(score, maxWords)}
        >
          Continue to Next Game
        </button>
      )}
    </div>
  )
}
