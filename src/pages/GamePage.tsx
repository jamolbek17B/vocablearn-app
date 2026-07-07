import { useState, useEffect } from 'react'
import { useLocation } from 'wouter'
import { units } from '../data/vocabulary'
import {
  getWordProgress,
  saveWordProgress,
  updateSM2,
  initializeWordProgress,
  addXP,
  addGameSession,
  getXPForScore,
  saveUserStats,
  markExerciseCompleted
} from '../utils/storage'
import type { UserStats, WordProgress } from '../utils/storage'
import type { Word } from '../data/vocabulary'
import Flashcards from '../games/Flashcards'
import MultipleChoice from '../games/MultipleChoice'
import Quiz from '../games/Quiz'
import ReverseQuiz from '../games/ReverseQuiz'
import FillBlanks from '../games/FillBlanks'
import Listening from '../games/Listening'
import MatchPairs from '../games/MatchPairs'

interface GamePageProps {
  unitId: number
  gameMode: string
  stats: UserStats
  setStats: (stats: UserStats) => void
}

export default function GamePage({
  unitId,
  gameMode,
  stats,
  setStats
}: GamePageProps) {
  const [, navigate] = useLocation()
  const [gameComplete, setGameComplete] = useState(false)
  const [score, setScore] = useState(0)
  const [xpEarned, setXpEarned] = useState(0)

  const unit = units.find(u => u.id === unitId)
  if (!unit) return <div style={{ color: 'white' }}>Unit not found</div>

  const handleGameComplete = (finalScore: number, maxScore: number) => {
    const earnedXP = getXPForScore(finalScore, maxScore)
    setScore(finalScore)
    setXpEarned(earnedXP)

    // Update stats
    const updatedStats = addXP(earnedXP)
    setStats(updatedStats)

    // Save game session
    addGameSession({
      unitId,
      gameMode,
      score: finalScore,
      xpEarned: earnedXP,
      date: Date.now()
    })

    // Mark exercise as completed for this unit
    markExerciseCompleted(unitId)

    setGameComplete(true)
  }

  const handleWordResult = (
    wordId: string,
    quality: number // 0-5 SM-2 rating
  ) => {
    const progress = getWordProgress()
    let wordProgress = progress.get(wordId)

    if (!wordProgress) {
      wordProgress = initializeWordProgress(wordId, unitId)
    }

    wordProgress = updateSM2(wordProgress, quality)
    progress.set(wordId, wordProgress)
    saveWordProgress(progress)
  }

  if (gameComplete) {
    return (
      <GameResultScreen
        score={score}
        maxScore={unit.words.length}
        xpEarned={xpEarned}
        unitId={unitId}
        navigate={navigate}
      />
    )
  }

  const gameProps = {
    unit,
    onComplete: handleGameComplete,
    onWordResult: handleWordResult
  }

  return (
    <>
      <div className="header">
        <button className="back-button" onClick={() => navigate(`/unit/${unitId}`)}>
          ← Back to Unit
        </button>
        <div className="logo">{unit.title}</div>
        <div style={{ width: '150px' }}></div>
      </div>

      <div className="container-main game-container">
        {gameMode === 'flashcards' && <Flashcards {...gameProps} />}
        {gameMode === 'multiple-choice' && <MultipleChoice {...gameProps} />}
        {gameMode === 'quiz' && <Quiz {...gameProps} />}
        {gameMode === 'reverse-quiz' && <ReverseQuiz {...gameProps} />}
        {gameMode === 'fill-blanks' && <FillBlanks {...gameProps} />}
        {gameMode === 'listening' && <Listening {...gameProps} />}
        {gameMode === 'match-pairs' && <MatchPairs {...gameProps} />}
      </div>
    </>
  )
}

interface ResultScreenProps {
  score: number
  maxScore: number
  xpEarned: number
  unitId: number
  navigate: (path: string) => void
}

function GameResultScreen({
  score,
  maxScore,
  xpEarned,
  unitId,
  navigate
}: ResultScreenProps) {
  const percentage = (score / maxScore) * 100
  const isExcellent = percentage >= 80
  const isGood = percentage >= 60
  const isOk = percentage >= 40

  let icon = '😊'
  let title = 'Good Try!'
  if (isExcellent) {
    icon = '🎉'
    title = 'Perfect!'
  } else if (isGood) {
    icon = '😄'
    title = 'Great Job!'
  } else if (isOk) {
    icon = '👍'
    title = 'Nice Effort!'
  }

  return (
    <>
      <div className="header">
        <button className="back-button" onClick={() => navigate(`/unit/${unitId}`)}>
          ← Back to Unit
        </button>
      </div>

      <div className="container-main game-container">
        <div className="game-card">
          <div className="result-screen">
            <div className="result-icon">{icon}</div>
            <div className="result-title">{title}</div>

            <div className="result-stats">
              <div className="result-stat">
                <div className="result-stat-label">Score</div>
                <div className="result-stat-value">
                  {score}/{maxScore}
                </div>
              </div>
              <div className="result-stat">
                <div className="result-stat-label">Percentage</div>
                <div className="result-stat-value">
                  {Math.round(percentage)}%
                </div>
              </div>
              <div className="result-stat">
                <div className="result-stat-label">XP Earned</div>
                <div className="result-stat-value" style={{ color: '#f59e0b' }}>
                  +{xpEarned}
                </div>
              </div>
              <div className="result-stat">
                <div className="result-stat-label">Accuracy</div>
                <div className="result-stat-value">
                  {Math.round((score / maxScore) * 100)}%
                </div>
              </div>
            </div>

            <button
              className="button-primary"
              onClick={() => navigate(`/unit/${unitId}`)}
              style={{ marginTop: '2rem' }}
            >
              Continue to Next Game
            </button>

            <button
              className="button-primary"
              onClick={() => navigate('/')}
              style={{
                marginTop: '1rem',
                background: 'white',
                color: '#667eea',
                border: '2px solid #667eea'
              }}
            >
              Home
            </button>
          </div>
        </div>
      </div>
    </>
  )
}
