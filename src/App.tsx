import { useEffect, useState } from 'react'
import { Router, Route } from 'wouter'
import { getUserStats, setUserName as saveUserName } from './utils/storage'
import type { UserStats } from './utils/storage'
import LoginPage from './pages/LoginPage'
import HomePage from './pages/HomePage'
import UnitPage from './pages/UnitPage'
import GamePage from './pages/GamePage'
import './App.css'

export default function App() {
  const [stats, setStats] = useState<UserStats | null>(null)
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  useEffect(() => {
    const initialStats = getUserStats()
    setStats(initialStats)
    if (initialStats.userName) {
      setIsLoggedIn(true)
    }
  }, [])

  const handleLogout = () => {
    setIsLoggedIn(false)
    // Reset stats but keep it initialized
    setStats({ 
      userName: '',
      totalXP: 0,
      dailyXPEarned: 0,
      dailyGoal: 100,
      level: 1,
      streak: 0
    })
  }

  if (!stats) {
    return <div className="loading">Loading VocabLearn...</div>
  }

  if (!isLoggedIn) {
    return (
      <LoginPage 
        onLogin={(name) => {
          saveUserName(name)
          setStats({ ...stats, userName: name })
          setIsLoggedIn(true)
        }} 
      />
    )
  }

  return (
    <Router>
      <div className="app">
        <Route path="/" component={() => <HomePage stats={stats} setStats={setStats} onLogout={handleLogout} />} />
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
