import { useState } from 'react'

interface LoginPageProps {
  onLogin: (name: string) => void
}

export default function LoginPage({ onLogin }: LoginPageProps) {
  const [name, setName] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (name.trim()) {
      onLogin(name.trim())
    }
  }

  return (
    <div style={{
      minHeight: '100vh',
      background: 'rgb(240, 244, 255)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '20px'
    }}>
      <div style={{
        background: 'white',
        borderRadius: '24px',
        padding: '60px',
        maxWidth: '500px',
        width: '100%',
        textAlign: 'center',
        boxShadow: '0 20px 60px rgba(0,0,0,0.3)'
      }}>
        <div style={{ fontSize: '3.5rem', marginBottom: '20px' }}>📚</div>
        
        <h1 style={{
          fontSize: '2rem',
          fontWeight: 800,
          color: '#0f172a',
          marginBottom: '8px',
          letterSpacing: '-0.5px'
        }}>
          VocabLearn
        </h1>
        
        <p style={{
          fontSize: '0.95rem',
          color: '#64748b',
          marginBottom: '30px'
        }}>
          English → Uzbek
        </p>

        <p style={{
          fontSize: '0.95rem',
          color: '#64748b',
          marginBottom: '30px',
          lineHeight: '1.6'
        }}>
          Enter your name to start learning. Your progress will be saved just for you.
        </p>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Your name..."
            value={name}
            onChange={(e) => setName(e.target.value)}
            style={{
              width: '100%',
              padding: '12px 16px',
              border: '2px solid #e2e8f0',
              borderRadius: '10px',
              fontSize: '0.95rem',
              marginBottom: '20px',
              fontFamily: 'inherit',
              transition: 'all 0.3s ease',
              boxSizing: 'border-box'
            }}
            onFocus={(e) => {
              e.target.style.borderColor = '#667eea';
              e.target.style.boxShadow = '0 0 0 4px rgba(102, 126, 234, 0.1)';
            }}
            onBlur={(e) => {
              e.target.style.borderColor = '#e2e8f0';
              e.target.style.boxShadow = 'none';
            }}
          />

          <button
            type="submit"
            disabled={!name.trim()}
            style={{
              width: '100%',
              padding: '14px 24px',
              background: name.trim()
                ? 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
                : '#cbd5e1',
              color: 'white',
              border: 'none',
              borderRadius: '10px',
              fontSize: '0.95rem',
              fontWeight: 700,
              cursor: name.trim() ? 'pointer' : 'not-allowed',
              transition: 'all 0.3s ease',
              letterSpacing: '0.3px',
              boxShadow: name.trim() ? '0 4px 15px rgba(102, 126, 234, 0.3)' : 'none'
            }}
            onMouseEnter={(e) => {
              if (name.trim()) {
                (e.target as HTMLButtonElement).style.transform = 'translateY(-2px)';
                (e.target as HTMLButtonElement).style.boxShadow = '0 8px 25px rgba(102, 126, 234, 0.4)';
              }
            }}
            onMouseLeave={(e) => {
              if (name.trim()) {
                (e.target as HTMLButtonElement).style.transform = 'translateY(0)';
                (e.target as HTMLButtonElement).style.boxShadow = '0 4px 15px rgba(102, 126, 234, 0.3)';
              }
            }}
          >
            Start Learning →
          </button>
        </form>
      </div>
    </div>
  )
}
