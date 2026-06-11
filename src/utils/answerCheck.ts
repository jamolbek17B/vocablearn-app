// Normalize Uzbek apostrophes and whitespace for consistent matching
export function normalize(str: string): string {
  return str
    .toLowerCase()
    .trim()
    .replace(/\s+/g, " ")
    .replace(/o[''ʼ]/g, "o") // o' → o
    .replace(/g[''ʼ]/g, "g") // g' → g
    .replace(/[''ʼ]/g, "");  // Remove any remaining apostrophes
}

// Get all accepted answers for a word (primary + alternatives)
export function getAllAnswers(word: { uzbek: string; answers?: string[] }): string[] {
  const primary = word.uzbek;
  const extras = Array.isArray(word.answers) ? word.answers : [];
  return [primary, ...extras.filter((a) => a !== primary)];
}

// Check if user's answer matches any acceptable answer
export function isAnswerCorrect(input: string, word: { uzbek: string; answers?: string[] }): boolean {
  if (!input || !input.trim()) return false;
  const normInput = normalize(input);
  return getAllAnswers(word).some((a) => normalize(a) === normInput);
}

// Format all acceptable answers for display
export function formatAnswers(word: { uzbek: string; answers?: string[] }): string {
  return getAllAnswers(word).join(" / ");
}
