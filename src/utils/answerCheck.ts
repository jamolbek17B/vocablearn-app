/**
 * Normalize Uzbek apostrophes and whitespace for consistent matching
 * 
 * Handles:
 * - o' (o with apostrophe) → o
 * - ó (o with accent) → o
 * - g' (g with apostrophe) → g
 * - Multiple spaces → single space
 * - Uppercase → lowercase
 * 
 * Examples:
 * - "qo'rqmoq" → "orqmoq"
 * - "QORQMOQ" → "orqmoq"
 * - "g'azablangan" → "gazablangan"
 * - "Qo'rqmoq" → "orqmoq"
 */
export function normalize(str: string): string {
  return str
    .toLowerCase()
    .trim()
    .replace(/\s+/g, " ")
    .replace(/o[''ʼ´]/g, "o") // o' → o (handles ', ', ʼ, ´)
    .replace(/g[''ʼ´]/g, "g") // g' → g (handles ', ', ʼ, ´)
    .replace(/[''ʼ´]/g, "");  // Remove any remaining apostrophes
}

// Get all accepted answers for a word (primary + alternatives)
export function getAllAnswers(word: { uzbek: string; answers?: string[] }): string[] {
  const primary = word.uzbek;
  const extras = Array.isArray(word.answers) ? word.answers : [];
  return [primary, ...extras.filter((a) => a !== primary)];
}

/**
 * Check if user's answer matches any acceptable answer
 * 
 * This function:
 * 1. Gets all accepted answers (primary + alternatives from answers array)
 * 2. Normalizes the user input (removes apostrophes, handles case, etc.)
 * 3. Normalizes each accepted answer the same way
 * 4. Compares to see if any match
 * 
 * Example: For word { uzbek: "qo'rqmoq", answers: ["qo'rqqan", "cho'chmoq"] }
 * User inputs will be accepted:
 * - "qo'rqmoq" ✓ (primary)
 * - "qorqmoq" ✓ (without apostrophe)
 * - "QORQMOQ" ✓ (uppercase)
 * - "qo'rqqan" ✓ (alternative 1)
 * - "cho'chmoq" ✓ (alternative 2)
 * - "CHO'CHMOQ" ✓ (alternative 2 uppercase)
 * But not:
 * - "qormoq" ✗ (typo)
 * - "cho'ch" ✗ (incomplete)
 */
export function isAnswerCorrect(input: string, word: { uzbek: string; answers?: string[] }): boolean {
  if (!input || !input.trim()) return false;
  const normInput = normalize(input);
  return getAllAnswers(word).some((a) => normalize(a) === normInput);
}

// Format all acceptable answers for display
export function formatAnswers(word: { uzbek: string; answers?: string[] }): string {
  return getAllAnswers(word).join(" / ");
}
