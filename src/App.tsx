import { useEffect, useState } from 'react'
import { Router, Route } from 'wouter'
import { getUserStats } from './utils/storage'
import type { UserStats } from './utils/storage'
import HomePage from './pages/HomePage'
import UnitPage from './pages/UnitPage'
import GamePage from './pages/GamePage'
import './App.css'

export default function App() {
  const [stats, setStats] = useState<UserStats | null>(null)

  useEffect(() => {
    const initialStats = getUserStats()
    setStats(initialStats)
  }, [])

  if (!stats) {
    return <div className="loading">Loading VocabLearn...</div>
  }

  return (
    <Router>
      <div className="app">
        <Route path="/" component={() => <HomePage stats={stats} setStats={setStats} />} />
        <Route path="/unit/:unitId" component={({ params }) => (
          <UnitPage unitId={parseInt(params.unitId)} stats={stats} setStats={setStats} />
        )} />
        <Route path="/game/:unitId/:mode" component={({ params }) => (
          <GamePage 
            unitId={parseInt(params.unitId)} 
            gameMode={params.mode}
            stats={stats}
            setStats={setStats}
          />
        )} />
      </div>
    </Router>
  )
}
