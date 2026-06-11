import { useLocation } from 'wouter'
import { units } from '../data/vocabulary'
import { getWordProgress } from '../utils/storage'
import type { UserStats } from '../utils/storage'

interface HomePageProps {
  stats: UserStats
  setStats: (stats: UserStats) => void
}

export default function HomePage({ stats }: HomePageProps) {
  const [, navigate] = useLocation()
  const progress = getWordProgress()

  const getUnitProgress = (unitId: number) => {
    const unit = units.find(u => u.id === unitId)
    if (!unit) return 0
    
    const unitWords = unit.words.map(w => w.id)
    const learnedWords = unitWords.filter(id => {
      const wordProgress = progress.get(id)
      return wordProgress && wordProgress.repetitions > 0
    })
    
    return Math.round((learnedWords.length / unitWords.length) * 100)
  }

  return (
    <>
      <div className="header">
        <div className="logo">📚 VocabLearn</div>
        <div className="stats-bar">
          <div className="stat">
            <span className="stat-icon">⚡</span>
            <div>
              <div style={{ fontSize: '0.85rem', color: '#6b7280' }}>XP</div>
              <div style={{ fontSize: '1.25rem', fontWeight: 700 }}>{stats.totalXP}</div>
            </div>
          </div>
          <div className="stat">
            <span className="stat-icon">🎯</span>
            <div>
              <div style={{ fontSize: '0.85rem', color: '#6b7280' }}>Level</div>
              <div style={{ fontSize: '1.25rem', fontWeight: 700 }}>{stats.level}</div>
            </div>
          </div>
          <div className="stat">
            <span className="stat-icon">🔥</span>
            <div>
              <div style={{ fontSize: '0.85rem', color: '#6b7280' }}>Streak</div>
              <div style={{ fontSize: '1.25rem', fontWeight: 700 }}>{stats.streak}</div>
            </div>
          </div>
        </div>
      </div>

      <div className="container-main">
        <div style={{ marginBottom: '2rem' }}>
          <h1 style={{ color: 'white', fontSize: '2rem', marginBottom: '0.5rem' }}>
            Welcome back!
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.9)', fontSize: '1.1rem' }}>
            Select a unit to continue learning English to Uzbek
          </p>
        </div>

        <div className="grid-units">
          {units.map((unit) => {
            const unitProgress = getUnitProgress(unit.id)
            return (
              <div
                key={unit.id}
                className="unit-card"
                onClick={() => navigate(`/unit/${unit.id}`)}
              >
                <div className="unit-header">
                  <div>
                    <div className="unit-number">{unit.id}</div>
                    <h3 className="unit-title">{unit.title}</h3>
                    <p className="unit-desc">{unit.description}</p>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
                  <div className="progress-bar">
                    <div
                      className="progress-fill"
                      style={{ width: `${unitProgress}%` }}
                    ></div>
                  </div>
                  <span style={{ fontSize: '0.9rem', fontWeight: 600, color: '#667eea', minWidth: '35px' }}>
                    {unitProgress}%
                  </span>
                </div>

                <div className="unit-stats">
                  <span>📖 {unit.words.length} words</span>
                </div>
              </div>
            )
          })}
        </div>

        <div style={{
          background: 'rgba(255,255,255,0.95)',
          borderRadius: '1rem',
          padding: '2rem',
          textAlign: 'center'
        }}>
          <h2 style={{ marginBottom: '1rem', color: '#1f2937' }}>Daily Goal</h2>
          <div style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>
            <span style={{ fontSize: '2rem', fontWeight: 700, color: '#667eea' }}>
              {Math.min(stats.dailyXPEarned, stats.dailyGoal)}
            </span>
            <span style={{ color: '#6b7280' }}> / {stats.dailyGoal} XP</span>
          </div>
          <div className="progress-bar">
            <div
              className="progress-fill"
              style={{
                width: `${Math.min((stats.dailyXPEarned / stats.dailyGoal) * 100, 100)}%`
              }}
            ></div>
          </div>
          {stats.dailyXPEarned >= stats.dailyGoal && (
            <p style={{ marginTop: '1rem', color: '#10b981', fontWeight: 600 }}>
              ✨ Daily goal completed! Keep it up!
            </p>
          )}
        </div>
      </div>
    </>
  )
}
