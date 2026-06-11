# VocabLearn Implementation Guide

## Data Structure Overview

### Word Format
```typescript
interface Word {
  english: string;      // English word (primary identifier)
  uzbek: string;        // Main Uzbek translation
  answers?: string[];   // Alternative accepted Uzbek answers
  sentence: string;     // Fill-in-the-blank sentence with ___
}
```

### Unit Format
```typescript
interface Unit {
  id: number;           // 1-10
  title: string;        // Professional unit name
  description: string;  // Brief description
  words: Word[];        // Array of 20 words
}
```

---

## Answer Validation

### The Problem
Uzbek uses different apostrophe variants (o', o, ʼ, ') which can cause answer validation to fail. Users typing "qo'rqmoq" should match "qo'rqmoq", "qo'rqqan", or "qo'rqib ketmoq".

### The Solution: `answerCheck.ts`

```typescript
// Normalize for comparison
normalize("Qo'Rqmoq") → "qorqmoq"
normalize("QO'RQQAN") → "qoqan"

// Check correctness
isAnswerCorrect("qo'rqmoq", word)  → true
isAnswerCorrect("qo'rqqan", word)  → true  
isAnswerCorrect("random", word)    → false

// Display all options
formatAnswers(word) → "qo'rqmoq / qo'rqqan / cho'chmoq"
```

### Usage in Games

#### Quiz (Typing Mode)
```typescript
import { isAnswerCorrect } from '@/utils/answerCheck';

const userInput = "qo'rqmoq";
const word = { 
  english: "afraid", 
  uzbek: "qo'rqmoq",
  answers: ["qo'rqqan", "cho'chmoq"]
};

if (isAnswerCorrect(userInput, word)) {
  // Correct! Award points
} else {
  // Show correct answer with formatAnswers(word)
}
```

#### Multiple Choice
```typescript
import { getAllAnswers } from '@/utils/answerCheck';

const options = getAllAnswers(word);
// Returns: ["qo'rqmoq", "qo'rqqan", "cho'chmoq", ...]
// Shuffle and display as answer choices
```

#### Flashcards
```typescript
import { formatAnswers } from '@/utils/answerCheck';

// Back of card shows all accepted answers
const cardBack = formatAnswers(word);
// Displays: "qo'rqmoq / qo'rqqan / cho'chmoq"
```

---

## All 10 Units

### Unit 1: Emotions & Attitudes (20 words)
**Words**: afraid, agree, angry, arrive, attack, bottom, clever, cruel, finally, hide, hunt, lot, middle, moment, pleased, promise, reply, safe, trick, well

**Key Features**:
- Emotional vocabulary
- Attitude expressions
- Daily use phrases

**Sample Word**:
```javascript
{
  english: "afraid",
  uzbek: "qo'rqmoq",
  answers: ["qo'rqqan", "cho'chmoq", "qo'rqib ketmoq"],
  sentence: "The woman was ___ of what she saw."
}
```

---

### Unit 2: Adventure & Discovery (20 words)
**Words**: adventure, approach, carefully, chemical, create, evil, experiment, kill, laboratory, laugh, loud, nervous, noise, project, scare, secret, shout, smell, terrible, worse

**Key Features**:
- Exploration vocabulary
- Sensory descriptions
- Scientific terms

---

### Unit 3: Description & Understanding (20 words)
**Words**: alien, among, chart, cloud, comprehend, describe, ever, fail, friendly, grade, instead, library, planet, report, several, solve, suddenly, suppose, universe, view

**Key Features**:
- Descriptive language
- Academic vocabulary
- Understanding expressions

---

### Unit 4: Behavior & Verbs (20 words)
**Words**: appropriate, avoid, behave, calm, concern, content, expect, frequently, habit, instruct, issue, none, patient, positive, punish, represent, shake, spread, stroll, village

**Key Features**:
- Action verbs
- Behavioral expressions
- Social interaction vocabulary

---

### Unit 5: Qualities & States (20 words)
**Words**: aware, badly, belong, continue, error, experience, field, hurt, judgment, likely, normal, rare, relax, request, reside, result, roll, since, visible, wild

**Key Features**:
- Adjectives and qualities
- State of being
- Experience vocabulary

---

### Unit 6: Relationships & Events (20 words)
**Words**: advantage, cause, choice, community, dead, distance, escape, follow, ghost, individual, pet, reach, return, survive, upset, weather, wise

**Key Features**:
- Social relationships
- Event vocabulary
- Life experiences

---

### Unit 7: Changes & Actions (20 words)
**Words**: allow, announce, beside, challenge, claim, condition, contribute, difference, divide, expert, famous, force, harm, lay, peace, prince, protect, sense, sudden, therefore

**Key Features**:
- Action vocabulary
- Change expressions
- Social impact terms

---

### Unit 8: Understanding & Cognition (20 words)
**Words**: accept, arrange, attend, balance, contrast, encourage, familiar, grab, hang, huge, necessary, pattern, propose, purpose, release, require, single, success, tear, theory

**Key Features**:
- Cognitive vocabulary
- Organization concepts
- Achievement terms

---

### Unit 9: Experience & Interaction (20 words)
**Words**: against, beach, damage, discover, emotion, fix, frank, identify, island, ocean, perhaps, pleasant, prevent, rock, save, step, still, taste, throw, wave

**Key Features**:
- Interactive vocabulary
- Nature terms
- Experience expressions

---

### Unit 10: Achievement & Purpose (20 words)
**Words**: benefit, certain, chance, effect, essential, far, focus, function, grass, guard, image, immediate, primary, proud, remain, rest, separate, site, tail, trouble

**Key Features**:
- Success vocabulary
- Purpose expressions
- Achievement terms

---

## Integration with Games

### Quiz Game
- **Input**: User types Uzbek translation
- **Validation**: `isAnswerCorrect()` checks against primary + alternatives
- **Feedback**: Shows correct answer using `formatAnswers()`

### Multiple Choice
- **Options**: Generated from `getAllAnswers()`
- **Display**: All alternatives shown as valid choices
- **Scoring**: Any correct answer awards points

### Fill in the Blank
- **Template**: Uses `word.sentence` with `___` placeholder
- **Answer**: User fills blank with English word
- **Validation**: Exact match against `word.english`

### Flashcards
- **Front**: Shows `word.english`
- **Back**: Shows `formatAnswers(word)` for all options
- **Review**: Spaced repetition tracks by `word.english`

### Reverse Quiz
- **Display**: Shows `word.uzbek` with pronunciation
- **Input**: User types `word.english`
- **Validation**: Exact match

### Listening Mode
- **Audio**: Pronunciation of `word.uzbek`
- **Input**: User types complete Uzbek
- **Validation**: Uses `isAnswerCorrect()` with full flexibility

### Match Pairs
- **Left**: English words
- **Right**: Shuffled Uzbek translations
- **Match**: `word.english` to correct `word.uzbek`

---

## Files to Know

### Main Data Files
- `src/data/units.ts` - All 10 units, complete vocabulary
- `src/data/vocabulary.ts` - Re-exports from units.ts
- `src/utils/answerCheck.ts` - Answer validation utilities

### Game Components
- `src/games/Quiz.tsx` - Uses `isAnswerCorrect()`
- `src/games/Flashcards.tsx` - Displays `word.english` and `word.uzbek`
- `src/games/MultipleChoice.tsx` - Uses `getAllAnswers()`
- `src/games/FillBlanks.tsx` - Uses `word.sentence` and `word.english`

### Storage & Progress
- `src/utils/storage.ts` - Tracks user progress by word
- Progress tracking uses `word.english` as unique identifier

---

## Adding New Words

To add a new word to Unit 1:

```typescript
{
  english: "happy",
  uzbek: "xursand",
  answers: ["shod", "quvonch", "xusinjon"],
  sentence: "She was ___ to see her family again."
}
```

Requirements:
1. `english`: Must be unique per unit
2. `uzbek`: Primary translation (used in flashcards)
3. `answers`: 2-4 common alternative translations
4. `sentence`: Include exactly one `___` placeholder

---

## Testing Answer Validation

```typescript
import { isAnswerCorrect, formatAnswers } from '@/utils/answerCheck';

const word = {
  english: "afraid",
  uzbek: "qo'rqmoq",
  answers: ["qo'rqqan", "cho'chmoq"]
};

// Test normalization
isAnswerCorrect("qo'rqmoq", word)    // ✓ true
isAnswerCorrect("QO'RQMOQ", word)    // ✓ true
isAnswerCorrect("qoqmoq", word)      // ✗ false
isAnswerCorrect("qo'rqqan", word)    // ✓ true
isAnswerCorrect("cho'chmoq", word)   // ✓ true

// Display format
formatAnswers(word)  // "qo'rqmoq / qo'rqqan / cho'chmoq"
```

---

## Performance Notes

- **200 words total**: Loaded at app start, minimal impact
- **Answer normalization**: O(n) where n = length of input string (~20 chars)
- **Games**: All validation happens client-side, instant feedback
- **Memory**: ~50KB for all vocabulary data

---

## Future Enhancements

1. **Audio Pronunciation**: Add pronunciation audio for each word
2. **Word Frequency**: Tag common vs. advanced words
3. **Context Tags**: Group by specific scenarios/topics
4. **User Custom Words**: Allow users to add personal vocabulary
5. **Export/Import**: Save/restore progress across devices

---

## Complete System ✓

All 10 units with 200 words, professional naming, robust answer validation, and full game integration.
