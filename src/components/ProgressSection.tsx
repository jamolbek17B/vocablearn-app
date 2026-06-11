import type { UserStats } from '../utils/storage';

interface ProgressSectionProps {
  stats: UserStats;
  totalActivities: number;
}

export default function ProgressSection({ stats, totalActivities }: ProgressSectionProps) {
  const progressPercent = Math.min((stats.dailyXPEarned / stats.dailyGoal) * 100, 100);

  // Generate last 7 days activity
  const last7Days = Array.from({ length: 7 }, (_, i) => {
    const date = new Date();
    date.setDate(date.getDate() - (6 - i));
    return {
      day: ['Fr', 'Sa', 'Su', 'Mo', 'Tu', 'We', 'Th'][date.getDay()],
      date: date.toISOString().split('T')[0],
      activity: Math.random() > 0.6 ? Math.floor(Math.random() * 100) : 0
    };
  });

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
            {stats.dailyXPEarned} / {stats.dailyGoal} activities
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
              width: `${progressPercent}%`,
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
                    width: `${progressPercent}%`,
                    transition: 'width 0.4s ease'
                  }}
                ></div>
              </div>
            </div>
            <div style={{ fontSize: '0.9rem', fontWeight: 700, minWidth: '50px' }}>
              {stats.dailyXPEarned} / {stats.dailyGoal}
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
                  background: day.activity > 0 ? 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' : '#e2e8f0',
                  borderRadius: '8px',
                  marginBottom: '8px',
                  opacity: day.activity > 0 ? 1 : 0.5
                }}
              ></div>
              <div style={{ fontSize: '0.75rem', color: '#64748b', fontWeight: 600 }}>
                {day.day}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Recommendations */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
        <div
          style={{
            background: 'white',
            borderRadius: '16px',
            padding: '20px',
            boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
            borderLeft: '4px solid #667eea'
          }}
        >
          <div style={{ fontSize: '0.8rem', fontWeight: 700, color: '#667eea', marginBottom: '4px', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
            📝 Spaced Repetition
          </div>
          <div style={{ fontSize: '0.9rem', color: '#64748b' }}>
            Review words due today
          </div>
        </div>

        <div
          style={{
            background: 'white',
            borderRadius: '16px',
            padding: '20px',
            boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
            borderLeft: '4px solid #f59e0b'
          }}
        >
          <div style={{ fontSize: '0.8rem', fontWeight: 700, color: '#f59e0b', marginBottom: '4px', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
            ⚠️ Weak Words
          </div>
          <div style={{ fontSize: '0.9rem', color: '#64748b' }}>
            Practice your hardest words
          </div>
        </div>
      </div>
    </div>
  );
}
