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
        <div className="header-content">
          <div className="header-logo">📚 VocabLearn</div>
          <div className="header-user">
            <span style={{ color: 'var(--text-muted)' }}>Welcome, {stats.userName || 'Learner'}!</span>
            <div className="user-avatar">{stats.userName?.charAt(0) || 'L'}</div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="page-header">
          <h1 className="page-greeting">
            Good to see you! 👋
          </h1>
          <p className="page-subtitle">
            {units.length} units • {units.reduce((sum, u) => sum + u.words.length, 0)} words
          </p>
        </div>

        <div className="stats-container">
          <div className="stats-label">Overall Progress</div>
          <div style={{ marginBottom: '20px', color: 'var(--text-muted)', fontSize: '0.9rem' }}>
            {Math.min(stats.dailyXPEarned, stats.dailyGoal)} / {stats.dailyGoal} activities
          </div>
          <div className="progress-bar">
            <div
              className="progress-fill"
              style={{
                width: `${Math.min((stats.dailyXPEarned / stats.dailyGoal) * 100, 100)}%`
              }}
            ></div>
          </div>
        </div>

        <div className="gamification-section">
          <div className="gamification-grid">
            <div className="gamification-item">
              <div className="gamification-icon">⭐</div>
              <div className="gamification-value">{stats.level}</div>
              <div className="gamification-label">Level</div>
              <div style={{ fontSize: '0.75rem', marginTop: '8px', opacity: 0.85 }}>
                {stats.totalXP % 500} / 500 XP
              </div>
            </div>
            <div className="gamification-item">
              <div className="gamification-icon">⚡</div>
              <div className="gamification-value">{stats.totalXP}</div>
              <div className="gamification-label">Total XP</div>
            </div>
            <div className="gamification-item">
              <div className="gamification-icon">🔥</div>
              <div className="gamification-value">{stats.streak}</div>
              <div className="gamification-label">Streak</div>
              <div style={{ fontSize: '0.75rem', marginTop: '8px', opacity: 0.85 }}>days</div>
            </div>
            <div className="gamification-item">
              <div className="gamification-icon">🎯</div>
              <div className="gamification-value">{Math.min(stats.dailyXPEarned, stats.dailyGoal)}</div>
              <div className="gamification-label">Today's Goal</div>
            </div>
          </div>
        </div>

        <div className="progress-section">
          <div className="progress-header">
            <div>
              <div className="stats-label">Your Units</div>
            </div>
          </div>
        </div>

        <div className="games-grid">
          {units.map((unit) => {
            const unitProgress = getUnitProgress(unit.id)
            return (
              <div
                key={unit.id}
                className="game-card"
                onClick={() => navigate(`/unit/${unit.id}`)}
              >
                <div className="game-icon">
                  {unit.id <= 3 ? '🔤' : unit.id <= 6 ? '🌍' : '✨'}
                </div>
                <h3 className="game-title">{unit.title}</h3>
                <p className="game-description">{unit.description}</p>
                
                <div style={{ marginTop: '16px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                    <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                      {unit.words.length} words
                    </span>
                    <span style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--primary)' }}>
                      {unitProgress}%
                    </span>
                  </div>
                  <div className="progress-bar">
                    <div
                      className="progress-fill"
                      style={{ width: `${unitProgress}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </>
  )
}
