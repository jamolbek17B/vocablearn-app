import type { Unit } from '../data/vocabulary';
import { useLocation } from 'wouter';

interface UnitCardProps {
  unit: Unit;
  progress: number; // 0-100
  completedExercises: number; // 0-7
}

const TOTAL_EXERCISES = 7;

export default function UnitCard({ unit, progress, completedExercises }: UnitCardProps) {
  const [, navigate] = useLocation();

  const progressPercent = (completedExercises / TOTAL_EXERCISES) * 100;
  const isCompleted = completedExercises === TOTAL_EXERCISES;

  return (
    <div
      onClick={() => navigate(`/unit/${unit.id}`)}
      style={{
        background: 'white',
        borderRadius: '16px',
        padding: '20px',
        cursor: 'pointer',
        transition: 'all 0.3s ease',
        boxShadow: '0 2px 12px rgba(0,0,0,0.08)',
        border: isCompleted ? '2px solid #10b981' : '1px solid transparent',
        ':hover': {
          boxShadow: '0 8px 24px rgba(102, 126, 234, 0.2)',
          transform: 'translateY(-4px)'
        }
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLDivElement).style.boxShadow = '0 8px 24px rgba(102, 126, 234, 0.2)';
        (e.currentTarget as HTMLDivElement).style.transform = 'translateY(-4px)';
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLDivElement).style.boxShadow = '0 2px 12px rgba(0,0,0,0.08)';
        (e.currentTarget as HTMLDivElement).style.transform = 'translateY(0)';
      }}
    >
      {/* Icon */}
      <div
        style={{
          fontSize: '2.5rem',
          marginBottom: '12px',
          width: '48px',
          height: '48px',
          borderRadius: '12px',
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        📚
      </div>

      {/* Title */}
      <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#0f172a', marginBottom: '4px', margin: '0 0 4px 0' }}>
        {unit.title}
      </h3>

      {/* Description */}
      <p
        style={{
          fontSize: '0.85rem',
          color: '#64748b',
          marginBottom: '12px',
          margin: '4px 0 12px 0',
          lineHeight: '1.4'
        }}
      >
        {unit.description}
      </p>

      {/* Word count */}
      <div style={{ fontSize: '0.8rem', color: '#94a3b8', marginBottom: '12px' }}>
        {unit.words.length} words
      </div>

      {/* Progress section */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
        <span style={{ fontSize: '0.8rem', fontWeight: 600, color: '#64748b' }}>
          {completedExercises} / {TOTAL_EXERCISES} exercises
        </span>
        <span
          style={{
            fontSize: '0.85rem',
            fontWeight: 700,
            color: isCompleted ? '#10b981' : '#667eea'
          }}
        >
          {Math.round(progressPercent)}%
        </span>
      </div>

      {/* Progress bar */}
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
            background: isCompleted
              ? 'linear-gradient(90deg, #10b981 0%, #059669 100%)'
              : 'linear-gradient(90deg, #667eea 0%, #764ba2 100%)',
            width: `${progressPercent}%`,
            transition: 'width 0.4s ease'
          }}
        ></div>
      </div>

      {/* Completion badge */}
      {isCompleted && (
        <div
          style={{
            marginTop: '12px',
            padding: '6px 12px',
            background: '#ecfdf5',
            color: '#10b981',
            borderRadius: '6px',
            fontSize: '0.75rem',
            fontWeight: 700,
            textAlign: 'center',
            textTransform: 'uppercase',
            letterSpacing: '0.5px'
          }}
        >
          ✓ Completed
        </div>
      )}
    </div>
  );
}
