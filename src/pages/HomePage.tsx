import { units } from '../data/vocabulary'
import { getWordProgress, getUnitCompletedExercises } from '../utils/storage'
import type { UserStats } from '../utils/storage'
import UnitCard from '../components/UnitCard'
import ProgressSection from '../components/ProgressSection'

interface HomePageProps {
  stats: UserStats
  setStats: (stats: UserStats) => void
}

/**
 * TOTAL_EXERCISES represents the number of different game modes available per unit:
 * 1. Flashcards - Flip cards to learn
 * 2. Multiple Choice - Pick the right answer
 * 3. Quiz - Type the translation
 * 4. Reverse Quiz - Uzbek to English
 * 5. Fill Blanks - Complete the sentence
 * 6. Listening - Hear and translate
 * 7. Match Pairs - Connect words
 * 
 * Total activities calculation:
 * Activities = TOTAL_EXERCISES × units.length
 * With 20 units: 7 × 20 = 140 activities
 * This ensures users have diverse learning methods for each unit
 */
const TOTAL_EXERCISES = 7;

export default function HomePage({ stats }: HomePageProps) {
  const progress = getWordProgress()

  const getUnitProgress = (unitId: number) => {
    const completed = getUnitCompletedExercises(unitId)
    return (completed / TOTAL_EXERCISES) * 100
  }

  return (
    <>
      {/* Header */}
      <div style={{
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        padding: '20px',
        marginBottom: '30px',
        borderRadius: '0 0 24px 24px',
        boxShadow: '0 4px 20px rgba(0,0,0,0.1)'
      }}>
        <div style={{
          maxWidth: '1400px',
          margin: '0 auto',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}>
          <div style={{ fontSize: '1.3rem', fontWeight: 700, color: 'white', display: 'flex', alignItems: 'center', gap: '8px' }}>
            📚 <span>VocabLearn</span>
          </div>
          <div style={{ textAlign: 'center', color: 'white' }}>
            <div style={{ fontSize: '0.85rem', opacity: 0.9 }}>Welcome, {stats.userName || 'Learner'}!</div>
          </div>
          <div style={{
            width: '40px',
            height: '40px',
            borderRadius: '50%',
            background: 'rgba(255,255,255,0.3)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'white',
            fontWeight: 700,
            fontSize: '0.95rem'
          }}>
            {stats.userName?.charAt(0)?.toUpperCase() || 'L'}
          </div>
        </div>
      </div>

      <div className="container">
        {/* Greeting */}
        <div style={{ marginBottom: '32px' }}>
          <h1 style={{ fontSize: '1.8rem', fontWeight: 700, color: '#0f172a', marginBottom: '8px', margin: '0 0 8px 0' }}>
            Keep it up, {stats.userName || 'Learner'}! 👋
          </h1>
          <p style={{ fontSize: '0.95rem', color: '#64748b', margin: 0 }}>
            {units.length} units • {units.reduce((sum, u) => sum + u.words.length, 0)} words • {TOTAL_EXERCISES * units.length} activities
          </p>
        </div>

        {/* Progress Section */}
        <div style={{ marginBottom: '40px' }}>
          <ProgressSection stats={stats} totalActivities={TOTAL_EXERCISES * units.length} />
        </div>

        {/* Units Grid */}
        <div style={{ marginBottom: '24px' }}>
          <h2 style={{ fontSize: '0.85rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1.5px', color: '#64748b', marginBottom: '16px', margin: '0 0 16px 0' }}>
            Your Units
          </h2>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
            gap: '16px'
          }}>
            {units.map((unit) => {
              const completed = getUnitCompletedExercises(unit.id)
              return (
                <UnitCard
                  key={unit.id}
                  unit={unit}
                  progress={getUnitProgress(unit.id)}
                  completedExercises={completed}
                />
              )
            })}
          </div>
        </div>
      </div>
    </>
  )
}
