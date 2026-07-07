import { useState } from 'react';
import type { UserStats, Word } from '../utils/storage';
import { 
  getLast7DaysActivity, 
  getWordsForSpacedRepetition, 
  getWeakWords,
  getWordsForSpacedRepetitionDetails,
  getGameSessions
} from '../utils/storage';

interface ProgressSectionProps {
  stats: UserStats;
  totalActivities: number;
  allWords?: Array<{ english: string; uzbek?: string }>;
}

export default function ProgressSection({ stats, totalActivities, allWords = [] }: ProgressSectionProps) {
  const [showWeakWords, setShowWeakWords] = useState(false);
  const [showSpacedRep, setShowSpacedRep] = useState(false);
  
  // Calculate overall progress: how many exercises completed
  const sessions = getGameSessions();
  const completedActivities = sessions.length;
  const overallProgressPercent = Math.min((completedActivities / totalActivities) * 100, 100);
  
  // Daily progress
  const dailyProgressPercent = Math.min((stats.dailyXPEarned / stats.dailyGoal) * 100, 100);

  // Get real last 7 days activity with actual streak tracking
  const last7Days = getLast7DaysActivity();
  
  // Calculate weak words and spaced repetition words with details
  const weakWordsDetail = getWeakWords(allWords);
  const spacedRepWordsDetail = getWordsForSpacedRepetitionDetails(allWords);

  return (
    <div>
      {/* Overall Progress */}
      <div
        style={{
          background: 'white',
          borderRadius: '16px',
          padding: '24px',
          marginBottom: '24px',
          boxShadow: '0 2px 8px rgba(0,0,0,0.06)'
        }}
      >
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
          <div
            style={{
              fontSize: '0.75rem',
              fontWeight: 700,
              textTransform: 'uppercase',
              letterSpacing: '1.5px',
              color: '#64748b'
            }}
          >
            Overall Progress
          </div>
          <div style={{ fontSize: '0.9rem', color: '#667eea', fontWeight: 700 }}>
            {completedActivities} / {totalActivities} activities ({Math.round(overallProgressPercent)}%)
          </div>
        </div>
        <div
          style={{
            height: '8px',
            background: '#e2e8f0',
            borderRadius: '8px',
            overflow: 'hidden'
          }}
        >
          <div
            style={{
              height: '100%',
              background: 'linear-gradient(90deg, #667eea 0%, #764ba2 100%)',
              width: `${overallProgressPercent}%`,
              transition: 'width 0.4s ease'
            }}
          ></div>
        </div>
      </div>

      {/* Stats Grid */}
      <div
        style={{
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          borderRadius: '16px',
          padding: '24px',
          marginBottom: '24px',
          color: 'white'
        }}
      >
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px', marginBottom: '24px' }}>
          {/* Level & XP */}
          <div>
            <div style={{ fontSize: '0.75rem', opacity: 0.85, marginBottom: '8px', textTransform: 'uppercase', letterSpacing: '1px' }}>
              ⭐ Level
            </div>
            <div style={{ fontSize: '2rem', fontWeight: 700, marginBottom: '4px' }}>
              {stats.level}
            </div>
            <div style={{ fontSize: '0.85rem', opacity: 0.9 }}>
              {stats.totalXP} / {stats.level * 100} XP
            </div>
          </div>

          {/* Streak */}
          <div>
            <div style={{ fontSize: '0.75rem', opacity: 0.85, marginBottom: '8px', textTransform: 'uppercase', letterSpacing: '1px' }}>
              🔥 Streak
            </div>
            <div style={{ fontSize: '2rem', fontWeight: 700, marginBottom: '4px' }}>
              {stats.streak}
            </div>
            <div style={{ fontSize: '0.85rem', opacity: 0.9 }}>
              days
            </div>
          </div>
        </div>

        {/* Today Goal */}
        <div>
          <div style={{ fontSize: '0.75rem', opacity: 0.85, marginBottom: '8px', textTransform: 'uppercase', letterSpacing: '1px' }}>
            📊 Today
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <div style={{ flex: 1 }}>
              <div
                style={{
                  height: '8px',
                  background: 'rgba(255,255,255,0.3)',
                  borderRadius: '8px',
                  overflow: 'hidden'
                }}
              >
                <div
                  style={{
                    height: '100%',
                    background: 'rgba(255,255,255,1)',
                    width: `${dailyProgressPercent}%`,
                    transition: 'width 0.4s ease'
                  }}
                ></div>
              </div>
            </div>
            <div style={{ fontSize: '0.9rem', fontWeight: 700, minWidth: '70px', textAlign: 'right' }}>
              {Math.round(dailyProgressPercent)}%
            </div>
          </div>
        </div>
      </div>

      {/* Activity - Last 7 Days */}
      <div
        style={{
          background: 'white',
          borderRadius: '16px',
          padding: '24px',
          marginBottom: '24px',
          boxShadow: '0 2px 8px rgba(0,0,0,0.06)'
        }}
      >
        <div style={{ fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1.5px', color: '#64748b', marginBottom: '16px' }}>
          Activity • Last 7 Days
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gap: '8px' }}>
          {last7Days.map((day, idx) => (
            <div key={idx} style={{ textAlign: 'center' }}>
              <div
                style={{
                  height: '48px',
                  background: day.active 
                    ? 'linear-gradient(135deg, #10B981 0%, #059669 100%)' 
                    : '#e2e8f0',
                  borderRadius: '8px',
                  marginBottom: '8px',
                  opacity: day.active ? 1 : 0.5,
                  transition: 'all 0.3s ease',
                  boxShadow: day.active ? '0 2px 8px rgba(16, 185, 129, 0.3)' : 'none'
                }}
                title={`${day.date}: ${day.active ? 'Active' : 'No activity'}`}
              ></div>
              <div style={{ fontSize: '0.75rem', color: '#64748b', fontWeight: 600 }}>
                {day.day}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Recommendations - Equally spaced cards */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '24px' }}>
        <div
          onClick={() => spacedRepWordsDetail.length > 0 && setShowSpacedRep(true)}
          style={{
            background: 'white',
            borderRadius: '8px',
            padding: '20px',
            boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
            borderLeft: '2px solid #667eea',
            textAlign: 'center',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            minHeight: '100px',
            cursor: spacedRepWordsDetail.length > 0 ? 'pointer' : 'default',
            transition: 'all 0.2s'
          }}
          onMouseEnter={(e) => spacedRepWordsDetail.length > 0 && (e.currentTarget.style.boxShadow = '0 4px 16px rgba(102, 126, 234, 0.2)')}
          onMouseLeave={(e) => (e.currentTarget.style.boxShadow = '0 2px 8px rgba(0,0,0,0.06)')}
        >
          <div style={{ fontSize: '0.8rem', fontWeight: 700, color: '#667eea', marginBottom: '8px', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
            📝 Spaced Repetition
          </div>
          <div style={{ fontSize: '0.9rem', color: '#64748b' }}>
            {spacedRepWordsDetail.length > 0 ? `${spacedRepWordsDetail.length} word${spacedRepWordsDetail.length !== 1 ? 's' : ''} due today` : 'All caught up!'}
          </div>
          {spacedRepWordsDetail.length > 0 && <div style={{ fontSize: '0.75rem', color: '#999', marginTop: '8px' }}>Click to view</div>}
        </div>

        <div
          onClick={() => weakWordsDetail.length > 0 && setShowWeakWords(true)}
          style={{
            background: 'white',
            borderRadius: '8px',
            padding: '20px',
            boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
            borderLeft: '2px solid #f59e0b',
            textAlign: 'center',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            minHeight: '100px',
            cursor: weakWordsDetail.length > 0 ? 'pointer' : 'default',
            transition: 'all 0.2s'
          }}
          onMouseEnter={(e) => weakWordsDetail.length > 0 && (e.currentTarget.style.boxShadow = '0 4px 16px rgba(245, 158, 11, 0.2)')}
          onMouseLeave={(e) => (e.currentTarget.style.boxShadow = '0 2px 8px rgba(0,0,0,0.06)')}
        >
          <div style={{ fontSize: '0.8rem', fontWeight: 700, color: '#f59e0b', marginBottom: '8px', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
            ⚠️ Weak Words
          </div>
          <div style={{ fontSize: '0.9rem', color: '#64748b' }}>
            {weakWordsDetail.length > 0 ? `${weakWordsDetail.length} word${weakWordsDetail.length !== 1 ? 's' : ''} need practice` : 'No weak words!'}
          </div>
          {weakWordsDetail.length > 0 && <div style={{ fontSize: '0.75rem', color: '#999', marginTop: '8px' }}>Click to view</div>}
        </div>
      </div>

      {/* Weak Words Detail Modal */}
      {showWeakWords && (
        <div style={{
          background: 'white',
          borderRadius: '12px',
          padding: '24px',
          marginBottom: '24px',
          boxShadow: '0 4px 16px rgba(0,0,0,0.1)',
          border: '2px solid #f59e0b'
        }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
            <h3 style={{ margin: 0, fontSize: '1.1rem', fontWeight: 700, color: '#0f172a' }}>
              ⚠️ Your Weak Words ({weakWordsDetail.length})
            </h3>
            <button 
              onClick={() => setShowWeakWords(false)}
              style={{
                background: 'none',
                border: 'none',
                fontSize: '1.5rem',
                cursor: 'pointer',
                color: '#999'
              }}
            >
              ×
            </button>
          </div>
          <p style={{ fontSize: '0.9rem', color: '#64748b', marginBottom: '16px', margin: '0 0 16px 0' }}>
            These words have a quality score below 3 (failing). Practice them to improve your mastery.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(150px, 1fr))', gap: '12px' }}>
            {weakWordsDetail.map((word, idx) => (
              <div key={idx} style={{
                background: '#fff9e6',
                border: '1px solid #f59e0b',
                borderRadius: '8px',
                padding: '12px',
                textAlign: 'center'
              }}>
                <div style={{ fontSize: '0.95rem', fontWeight: 600, color: '#0f172a', marginBottom: '4px' }}>
                  {word.english}
                </div>
                <div style={{ fontSize: '0.85rem', color: '#667eea', marginBottom: '6px' }}>
                  {word.uzbek}
                </div>
                <div style={{ fontSize: '0.75rem', color: '#f59e0b', fontWeight: 600 }}>
                  Quality: {word.quality.toFixed(1)}/5
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Spaced Repetition Detail Modal */}
      {showSpacedRep && (
        <div style={{
          background: 'white',
          borderRadius: '12px',
          padding: '24px',
          marginBottom: '24px',
          boxShadow: '0 4px 16px rgba(0,0,0,0.1)',
          border: '2px solid #667eea'
        }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
            <h3 style={{ margin: 0, fontSize: '1.1rem', fontWeight: 700, color: '#0f172a' }}>
              📝 Spaced Repetition Review ({spacedRepWordsDetail.length})
            </h3>
            <button 
              onClick={() => setShowSpacedRep(false)}
              style={{
                background: 'none',
                border: 'none',
                fontSize: '1.5rem',
                cursor: 'pointer',
                color: '#999'
              }}
            >
              ×
            </button>
          </div>
          <div style={{ background: '#f0f4ff', borderRadius: '8px', padding: '12px', marginBottom: '16px' }}>
            <p style={{ margin: 0, fontSize: '0.85rem', color: '#667eea', fontWeight: 600 }}>
              How Spaced Repetition Works:
            </p>
            <ul style={{ margin: '8px 0 0 0', paddingLeft: '20px', fontSize: '0.85rem', color: '#64748b' }}>
              <li>First review: 1 day later</li>
              <li>Second review: 3 days after first success</li>
              <li>Then: Interval increases based on your performance (SM-2 Algorithm)</li>
              <li>Lower scores restart the cycle; higher scores increase the interval</li>
            </ul>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(150px, 1fr))', gap: '12px' }}>
            {spacedRepWordsDetail.map((word, idx) => (
              <div key={idx} style={{
                background: '#e6f7ff',
                border: '1px solid #667eea',
                borderRadius: '8px',
                padding: '12px',
                textAlign: 'center'
              }}>
                <div style={{ fontSize: '0.95rem', fontWeight: 600, color: '#0f172a', marginBottom: '4px' }}>
                  {word.english}
                </div>
                <div style={{ fontSize: '0.85rem', color: '#667eea', marginBottom: '6px' }}>
                  {word.uzbek}
                </div>
                <div style={{ fontSize: '0.75rem', color: '#10B981', fontWeight: 600 }}>
                  Due: {word.daysUntilReview <= 0 ? 'Today' : `${Math.abs(word.daysUntilReview)} days ago`}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
