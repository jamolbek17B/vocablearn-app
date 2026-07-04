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
        <div style={{ display: 'flex', alignItems: 'center', gap: '24px', width: '100%' }}>
          <button className="btn btn-secondary" style={{ padding: '8px 16px', fontSize: '0.9rem', flexShrink: 0 }} onClick={() => navigate('/')}>
            ← Back
          </button>
          <div className="header-logo" style={{ flex: 1, textAlign: 'center' }}>Unit {unit.id}</div>
          <div style={{ width: '80px', flexShrink: 0 }}></div>
        </div>
      </div>

      <div className="container">
        <div className="page-header">
          <h1 className="page-greeting">
            {unit.title}
          </h1>
          <p style={{ fontSize: '0.95rem', color: '#475569', margin: '0', fontWeight: 500 }}>
            {unit.description} • {unit.words.length} words
          </p>
        </div>

        <div className="progress-section">
          <div className="progress-header">
            <div>
              <div className="stats-label">Choose a Game Mode</div>
            </div>
          </div>
        </div>

        <div className="games-grid">
          {GAME_MODES.map((mode) => (
            <div
              key={mode.id}
              className="game-card"
              onClick={() => navigate(`/game/${unitId}/${mode.id}`)}
              style={{ cursor: 'pointer' }}
            >
              <div className="game-icon">{mode.icon}</div>
              <h3 className="game-title">{mode.name}</h3>
              <p className="game-description">{mode.description}</p>
              <div style={{ marginTop: 'auto', paddingTop: '16px', borderTop: '1px solid var(--bg-slate)' }}>
                <span style={{ fontSize: '0.85rem', color: 'var(--primary)', fontWeight: 600 }}>
                  Start Game →
                </span>
              </div>
            </div>
          ))}
        </div>

        <div style={{ marginTop: '3rem' }}>
          <div className="progress-section">
            <div className="progress-header">
              <div>
                <div className="stats-label">Vocabulary ({unit.words.length} words)</div>
              </div>
            </div>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '12px', marginTop: '20px' }}>
            {unit.words.map((word, idx) => (
              <div key={`${word.english}-${idx}`} className="word-card">
                <div className="word-english">{word.english}</div>
                <div className="word-uzbek">{word.uzbek}</div>
                <div className="word-example">
                  <div className="example-en"><strong>Example:</strong> "{word.sentence}"</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
