export interface WordProgress {
  wordId: string;
  unitId: number;
  interval: number;
  easeFactor: number;
  repetitions: number;
  nextReviewDate: number;
  lastReviewDate: number;
  quality: number; // 0-5 SM-2 quality rating
}

export interface UserStats {
  userName?: string;
  totalXP: number;
  level: number;
  streak: number;
  lastPlayDate: number;
  dailyGoal: number;
  dailyXPEarned: number;
}

export interface GameSession {
  unitId: number;
  gameMode: string;
  score: number;
  xpEarned: number;
  date: number;
}

const STORAGE_KEYS = {
  PROGRESS: 'vocablearn_progress',
  STATS: 'vocablearn_stats',
  SESSIONS: 'vocablearn_sessions',
  USERNAME: 'vocablearn_username',
};

// SM-2 Algorithm Implementation
export function updateSM2(
  progress: WordProgress,
  quality: number // 0-5, where 3+ is passing
): WordProgress {
  const { interval, easeFactor, repetitions } = progress;
  
  const newEaseFactor = Math.max(
    1.3,
    easeFactor + (0.1 - (5 - quality) * (0.08 + (5 - quality) * 0.02))
  );

  let newInterval: number;
  let newRepetitions = repetitions + 1;

  if (quality < 3) {
    newInterval = 1;
    newRepetitions = 0;
  } else if (newRepetitions === 1) {
    newInterval = 1;
  } else if (newRepetitions === 2) {
    newInterval = 3;
  } else {
    newInterval = Math.round(interval * newEaseFactor);
  }

  const nextReviewDate = Date.now() + newInterval * 24 * 60 * 60 * 1000;

  return {
    ...progress,
    interval: newInterval,
    easeFactor: newEaseFactor,
    repetitions: newRepetitions,
    nextReviewDate,
    lastReviewDate: Date.now(),
    quality,
  };
}

// Storage Functions
export function getWordProgress(): Map<string, WordProgress> {
  try {
    const data = localStorage.getItem(STORAGE_KEYS.PROGRESS);
    if (!data) return new Map();
    const parsed = JSON.parse(data);
    return new Map(Object.entries(parsed));
  } catch {
    return new Map();
  }
}

export function saveWordProgress(progress: Map<string, WordProgress>): void {
  try {
    const obj = Object.fromEntries(progress);
    localStorage.setItem(STORAGE_KEYS.PROGRESS, JSON.stringify(obj));
  } catch (error) {
    console.error('Failed to save word progress:', error);
  }
}

export function initializeWordProgress(wordId: string, unitId: number): WordProgress {
  return {
    wordId,
    unitId,
    interval: 1,
    easeFactor: 2.5,
    repetitions: 0,
    nextReviewDate: Date.now(),
    lastReviewDate: Date.now(),
    quality: 0,
  };
}

export function getUserStats(): UserStats {
  try {
    const data = localStorage.getItem(STORAGE_KEYS.STATS);
    if (!data) {
      return {
        totalXP: 0,
        level: 1,
        streak: 0,
        lastPlayDate: 0,
        dailyGoal: 100,
        dailyXPEarned: 0,
      };
    }
    return JSON.parse(data);
  } catch {
    return {
      totalXP: 0,
      level: 1,
      streak: 0,
      lastPlayDate: 0,
      dailyGoal: 100,
      dailyXPEarned: 0,
    };
  }
}

export function saveUserStats(stats: UserStats): void {
  try {
    localStorage.setItem(STORAGE_KEYS.STATS, JSON.stringify(stats));
  } catch (error) {
    console.error('Failed to save user stats:', error);
  }
}

export function addXP(xpAmount: number): UserStats {
  const stats = getUserStats();
  const today = new Date().toDateString();
  const lastPlayDay = new Date(stats.lastPlayDate).toDateString();

  if (today !== lastPlayDay) {
    // New day - reset daily XP and update streak
    if (lastPlayDay !== new Date(Date.now() - 24 * 60 * 60 * 1000).toDateString()) {
      stats.streak = 0; // Streak broken if skipped a day
    } else {
      stats.streak += 1;
    }
    stats.dailyXPEarned = 0;
  }

  stats.totalXP += xpAmount;
  stats.dailyXPEarned += xpAmount;
  stats.lastPlayDate = Date.now();
  
  // Calculate level (every 500 XP = 1 level)
  stats.level = Math.floor(stats.totalXP / 500) + 1;

  if (stats.dailyXPEarned === 0) {
    stats.streak = 1;
  } else if (stats.dailyXPEarned >= stats.dailyGoal) {
    stats.streak = Math.max(stats.streak || 1, 1);
  }

  saveUserStats(stats);
  return stats;
}

export function getGameSessions(): GameSession[] {
  try {
    const data = localStorage.getItem(STORAGE_KEYS.SESSIONS);
    return data ? JSON.parse(data) : [];
  } catch {
    return [];
  }
}

export function addGameSession(session: GameSession): void {
  try {
    const sessions = getGameSessions();
    sessions.push(session);
    // Keep only last 100 sessions
    if (sessions.length > 100) {
      sessions.shift();
    }
    localStorage.setItem(STORAGE_KEYS.SESSIONS, JSON.stringify(sessions));
  } catch (error) {
    console.error('Failed to save game session:', error);
  }
}

export function getXPForScore(score: number, maxScore: number): number {
  // Score as percentage determines XP earned (10-100)
  const percentage = Math.min(100, Math.floor((score / maxScore) * 100));
  return Math.max(10, Math.floor(percentage * 0.8)); // 0-100 score = 0-80 XP
}

export function setUserName(name: string): void {
  try {
    localStorage.setItem(STORAGE_KEYS.USERNAME, name);
    const stats = getUserStats();
    stats.userName = name;
    saveUserStats(stats);
  } catch (error) {
    console.error('Failed to save username:', error);
  }
}

export function getUserName(): string | null {
  try {
    return localStorage.getItem(STORAGE_KEYS.USERNAME);
  } catch {
    return null;
  }
}

/**
 * Logout user by clearing their name and user state
 * Preserves other data like stats, progress, etc.
 */
export function logoutUser(): void {
  try {
    localStorage.removeItem(STORAGE_KEYS.USERNAME);
    const stats = getUserStats();
    stats.userName = '';
    saveUserStats(stats);
  } catch (error) {
    console.error('Failed to logout:', error);
  }
}

// Validate answer against word alternatives
export function validateAnswer(userAnswer: string, correctAnswer: string, alternatives: string[]): boolean {
  const normalized = (str: string) => str.toLowerCase().trim();
  const userNorm = normalized(userAnswer);
  const correctNorm = normalized(correctAnswer);
  
  if (userNorm === correctNorm) return true;
  if (alternatives && alternatives.some(alt => normalized(alt) === userNorm)) return true;
  return false;
}

// Get number of completed exercises for a unit (0-7)
export function getUnitCompletedExercises(unitId: number): number {
  try {
    const progressStr = localStorage.getItem(STORAGE_KEYS.PROGRESS);
    if (!progressStr) return 0;
    
    const progress = JSON.parse(progressStr) as Record<string, WordProgress>;
    const unitProgress = progress[`unit-${unitId}-progress`] as { completedExercises?: number } | undefined;
    
    return unitProgress?.completedExercises || 0;
  } catch {
    return 0;
  }
}

// Mark exercise as completed for a unit
export function markExerciseCompleted(unitId: number): void {
  try {
    const progressStr = localStorage.getItem(STORAGE_KEYS.PROGRESS);
    const progress: Record<string, unknown> = progressStr ? JSON.parse(progressStr) : {};
    
    const key = `unit-${unitId}-progress`;
    const current = (progress[key] as { completedExercises?: number } | undefined)?.completedExercises || 0;
    
    progress[key] = {
      ...progress[key],
      completedExercises: Math.min(current + 1, 7)
    };
    
    localStorage.setItem(STORAGE_KEYS.PROGRESS, JSON.stringify(progress));
  } catch (error) {
    console.error('Failed to mark exercise completed:', error);
  }
}

/**
 * Get words that need spaced repetition review.
 * Words are due for review if their nextReviewDate is today or earlier.
 * This implements the SM-2 algorithm for optimal review scheduling.
 */
export function getWordsForSpacedRepetition(words: Array<{ english: string }>): Array<{ english: string }> {
  const progress = getWordProgress();
  const now = Date.now();
  
  return words.filter(word => {
    const key = `${word.english}`;
    const wordProgress = progress.get(key);
    
    // If word hasn't been studied yet, don't show it
    if (!wordProgress) return false;
    
    // Show if next review date is today or earlier
    return wordProgress.nextReviewDate <= now;
  });
}

/**
 * Get words that the user struggles with (weak words) with details.
 * Words are considered weak if:
 * - Quality rating is low (0-2 out of 5)
 * - OR user has failed the word recently (quality < 3)
 * These words need more practice.
 */
export function getWeakWords(words: Array<{ english: string; uzbek?: string }>): Array<{ english: string; uzbek?: string; quality: number; repetitions: number }> {
  const progress = getWordProgress();
  
  return words
    .map(word => {
      const key = `${word.english}`;
      const wordProgress = progress.get(key);
      return { word, wordProgress };
    })
    .filter(({ wordProgress }) => {
      // If word hasn't been studied, not weak yet
      if (!wordProgress) return false;
      
      // Word is weak if quality is below passing threshold (< 3)
      // or if it has been reviewed but has low mastery (quality < 3.5)
      return wordProgress.quality < 3 || (wordProgress.repetitions > 0 && wordProgress.quality < 3.5);
    })
    .map(({ word, wordProgress }) => ({
      english: word.english,
      uzbek: word.uzbek,
      quality: wordProgress?.quality || 0,
      repetitions: wordProgress?.repetitions || 0
    }));
}

/**
 * Get words due for spaced repetition with details.
 */
export function getWordsForSpacedRepetitionDetails(words: Array<{ english: string; uzbek?: string }>): Array<{ english: string; uzbek?: string; nextReviewDate: number; daysUntilReview: number }> {
  const progress = getWordProgress();
  const now = Date.now();
  
  return words
    .map(word => {
      const key = `${word.english}`;
      const wordProgress = progress.get(key);
      return { word, wordProgress };
    })
    .filter(({ wordProgress }) => {
      // If word hasn't been studied yet, don't show it
      if (!wordProgress) return false;
      
      // Show if next review date is today or earlier
      return wordProgress.nextReviewDate <= now;
    })
    .map(({ word, wordProgress }) => ({
      english: word.english,
      uzbek: word.uzbek,
      nextReviewDate: wordProgress?.nextReviewDate || 0,
      daysUntilReview: Math.ceil((wordProgress?.nextReviewDate || 0 - now) / (24 * 60 * 60 * 1000))
    }))
    .sort((a, b) => a.nextReviewDate - b.nextReviewDate);
}

/**
 * Get last 7 days activity with actual streak data.
 * Returns array of activity for each day, with true for active days and false for inactive.
 */
export function getLast7DaysActivity(): Array<{ day: string; active: boolean; date: string }> {
  const sessions = getGameSessions();
  const today = new Date();
  
  return Array.from({ length: 7 }, (_, i) => {
    const date = new Date(today);
    date.setDate(date.getDate() - (6 - i));
    const dateStr = date.toISOString().split('T')[0];
    
    // Check if there are any sessions for this day
    const hasActivity = sessions.some(session => {
      const sessionDate = new Date(session.date).toISOString().split('T')[0];
      return sessionDate === dateStr;
    });
    
    const dayNames = ['Fr', 'Sa', 'Su', 'Mo', 'Tu', 'We', 'Th'];
    
    return {
      day: dayNames[date.getDay()],
      active: hasActivity,
      date: dateStr
    };
  });
}
