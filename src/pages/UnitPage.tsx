import { useLocation } from 'wouter'
import { units } from '../data/vocabulary'
import type { UserStats } from '../utils/storage'

interface UnitPageProps {
  unitId: number
  stats: UserStats
  setStats: (stats: UserStats) => void
}

const GAME_MODES = [
  {
    id: 'flashcards',
    name: 'Flashcards',
    icon: '🎴',
    description: 'Flip cards to learn',
    color: '#3B82F6'
  },
  {
    id: 'multiple-choice',
    name: 'Multiple Choice',
    icon: '🎯',
    description: 'Pick the right answer',
    color: '#8B5CF6'
  },
  {
    id: 'quiz',
    name: 'Quiz',
    icon: '❓',
    description: 'Type the translation',
    color: '#EC4899'
  },
  {
    id: 'reverse-quiz',
    name: 'Reverse Quiz',
    icon: '🔄',
    description: 'Uzbek to English',
    color: '#10B981'
  },
  {
    id: 'fill-blanks',
    name: 'Fill Blanks',
    icon: '🔤',
    description: 'Complete the sentence',
    color: '#F59E0B'
  },
  {
    id: 'listening',
    name: 'Listening',
    icon: '🔊',
    description: 'Hear and translate',
    color: '#06B6D4'
  },
  {
    id: 'match-pairs',
    name: 'Match Pairs',
    icon: '🧩',
    description: 'Connect words',
    color: '#EC4899'
  }
]

export default function UnitPage({ unitId, stats }: UnitPageProps) {
  const [, navigate] = useLocation()
  const unit = units.find(u => u.id === unitId)

  if (!unit) {
    return <div style={{ color: 'white', textAlign: 'center' }}>Unit not found</div>
  }

  return (
    <>
      <div className="header">
        <button className="back-button" onClick={() => navigate('/')}>
          ← Back to Units
        </button>
        <div className="logo">
          📚 {unit.title}
        </div>
        <div style={{ width: '150px' }}></div>
      </div>

      <div className="container-main">
        <div style={{ marginBottom: '2rem' }}>
          <h1 style={{ color: 'white', fontSize: '2.5rem', marginBottom: '0.5rem' }}>
            {unit.title}
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.9)', fontSize: '1.1rem', marginBottom: '1rem' }}>
            {unit.description}
          </p>
          <p style={{ color: 'rgba(255,255,255,0.8)' }}>
            Choose a game mode to practice
          </p>
        </div>

        <div className="game-modes">
          {GAME_MODES.map((mode) => (
            <button
              key={mode.id}
              className="game-mode-btn"
              onClick={() => navigate(`/game/${unitId}/${mode.id}`)}
              style={{
                borderTop: `4px solid ${mode.color}`
              }}
            >
              <div className="game-mode-icon">{mode.icon}</div>
              <div className="game-mode-name">{mode.name}</div>
              <div className="game-mode-desc">{mode.description}</div>
            </button>
          ))}
        </div>

        <div style={{ marginTop: '3rem' }}>
          <h2 style={{ color: 'white', marginBottom: '1rem', fontSize: '1.5rem' }}>
            Unit Words ({unit.words.length})
          </h2>
          <div className="words-grid">
            {unit.words.map((word) => (
              <div key={word.id} className="word-card">
                <div className="word-english">{word.english}</div>
                <div className="word-uzbek">{word.uzbek}</div>
                <div className="word-transcription">{word.transcription}</div>
                <div className="word-example">
                  <strong>Example:</strong>
                  <div style={{ marginTop: '0.25rem', fontSize: '0.85rem' }}>
                    "{word.exampleEn}"
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
