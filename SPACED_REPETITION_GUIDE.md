# Spaced Repetition & Translation System Guide

## Part 1: Spaced Repetition Timing (SM-2 Algorithm)

### How Spaced Repetition Works in VocabLearn

The app uses the **SM-2 (SuperMemo 2) Algorithm**, which schedules reviews based on how well you know each word.

### Review Schedule

**When you study a word, the next review is scheduled as follows:**

#### Initial Learning Phase:
- **1st Repetition (Quality 3-5)**: Next review in **1 day**
- **2nd Repetition (Quality 3-5)**: Next review in **3 days**

#### Long-term Memorization Phase:
- **3rd+ Repetition (Quality 3-5)**: Next review in: `previousInterval × easeFactor`

#### Example Schedule for a "Good" Word (Quality 4-5):
- Learn word today
- Review again: **1 day later**
- Review again: **3 days later** (Total: 4 days from start)
- Review again: **~8 days later** (Total: ~12 days from start)
- Review again: **~20 days later** (Total: ~32 days from start)
- Review again: **~50 days later** (Total: ~82 days from start)
- Then continues with longer intervals: 125 days, 312 days, etc.

#### If You Struggle (Quality 0-2):
- Word resets to **1 day** to practice more
- Repeats the learning cycle

### Quality Rating Explanation

When you review a word, you rate how well you knew it:

- **Quality 5**: Perfect! I knew it instantly
- **Quality 4**: Good! Took slight effort to recall
- **Quality 3**: Acceptable - I got it but needed to think
- **Quality 2**: Difficult - I barely remembered
- **Quality 1**: Very hard - I almost forgot
- **Quality 0**: Complete failure - I didn't know it at all

**Passing grade: Quality 3+** (gets longer interval)
**Needs practice: Quality 0-2** (resets to 1 day)

### Ease Factor

The **Ease Factor** starts at 2.5 and adjusts based on your performance:
- Answer correctly (Q≥3): Ease factor increases → longer intervals
- Answer incorrectly (Q<3): Ease factor decreases → same interval
- **Minimum ease factor: 1.3** (prevents intervals getting too short)
- **Maximum ease factor: Unlimited** (can grow very large for easy words)

### Example Timeline (in days from initial learning)

| Review # | Interval | Cumulative Days | Quality Rating |
|----------|----------|-----------------|----------------|
| 1 | 1 day | 1 | Quality 4 |
| 2 | 3 days | 4 | Quality 4 |
| 3 | 8 days | 12 | Quality 4 |
| 4 | 20 days | 32 | Quality 4 |
| 5 | 50 days | 82 | Quality 4 |
| 6 | 125 days | 207 | Quality 4 |
| 7 | 312 days | 519 | Quality 4 |

## Part 2: Translation System & Multiple Answers

### How the Translation System Works

VocabLearn accepts **multiple correct Uzbek translations** for each English word. This is because:

1. **Uzbek has many synonyms** - One English word can have multiple valid Uzbek translations
2. **Uzbek has apostrophe variations** - `o'` can be written as `o'`, `ó`, or even `o`
3. **Uzbek has grammar variations** - Verbs can be conjugated differently

### Translation Structure in Data

Each word has this structure:
```typescript
{
  english: "afraid",
  uzbek: "qo'rqmoq",              // Primary translation
  answers: [                       // Alternative correct answers
    "qo'rqqan",
    "cho'chmoq",
    "qo'rqib ketmoq"
  ],
  sentence: "The woman was ___ of what she saw."
}
```

### Answer Matching Process

When you type an answer, the system:

1. **Normalizes apostrophes**: `o'rqmoq`, `orqmoq`, `órqmoq` → all treated as `orqmoq`
2. **Removes extra spaces**: Multiple spaces converted to single space
3. **Converts to lowercase**: `QORQMOQ`, `Qorqmoq`, `qorqmoq` → all match
4. **Compares** with all accepted answers (primary + alternatives)

### Accepted Variations for "Afraid"

Any of these answers will be marked **CORRECT**:
- `qo'rqmoq` (primary)
- `qo'rqqan` (past tense alternative)
- `cho'chmoq` (synonym)
- `qo'rqib ketmoq` (phrase variant)
- `qorqmoq` (without apostrophe)
- `QORQMOQ` (uppercase)
- `Qo'rqmoq` (mixed case)

### Example: Multiple Valid Translations

**English**: "angry"
**Primary**: `xunuk`
**Also correct**:
- `g'azablangan` (past participle - "angered")
- `jahli chiqqan` (idiom - "lost temper")
- `xafa` (short form - "upset")

All these are accepted as correct answers.

### Adding More Alternative Translations

To add more accepted answers to a word, simply add them to the `answers` array:

```typescript
{
  english: "beautiful",
  uzbek: "chiroyli",
  answers: [
    "go'zal",           // Common synonym
    "bezovta",          // Another synonym
    "go'zallik",        // Noun form
    "chiroylik",        // Variant spelling
    "saroyi to'rt",     // Poetic form
    "nozik"             // Delicate/beautiful
  ],
  sentence: "She wore a ___ blue dress."
}
```

## Part 3: How These Systems Work Together

### The Learning Journey

1. **Day 1**: You study Unit 1, learning 20 new words
   - Each word gets initial quality rating
   - Weak words (Quality 0-2) scheduled for 1 day review
   - Good words (Quality 3-5) scheduled for 1 day then 3 days

2. **Day 1 Evening**: Spaced repetition panel shows:
   - "Weak Words" = Words rated Quality 0-2
   - "Spaced Repetition" = Words due for review (1 day passed)

3. **Day 2**: You review those weak words
   - System accepts any alternative translation you type
   - If you get it right → goes to 3-day schedule
   - If you struggle → stays on 1-day schedule

4. **Day 4**: Next review comes up
   - Words you got right 3 days ago now due again
   - After this: 8-day interval

5. **Day 12**: Another review cycle
   - Then 20 days, then 50 days, then 125 days
   - Eventually only need review every ~1 year for mastery

### Performance Improvement

As your **ease factor increases**:
- Reviews get further apart
- More time between studying same word
- Less repetition needed for mastery
- Eventually only annual review

## Part 4: Translation Quality Checks

### Current Coverage: 400 Words

All 400 words have:
- ✓ Primary Uzbek translation
- ✓ 2-6 alternative accepted answers
- ✓ Example sentence context
- ✓ Normalized apostrophe handling

### Example: "Afraid" Coverage

**English**: afraid
**Covers these Uzbek variations**:
- `qo'rqmoq` (infinitive - to be afraid)
- `qo'rqqan` (past - was afraid)
- `cho'chmoq` (common synonym - to fear)
- `qo'rqib ketmoq` (extended form - became afraid)

**User can type**:
- Any of the above
- With or without apostrophe: `o'rqmoq`, `orqmoq`, `órqmoq`
- In any case: `QORQMOQ`, `Qorqmoq`, etc.
- With extra spaces

**System accepts**: ✓ All variations above

## Part 5: Algorithm Implementation Details

### SM-2 Formula

```
newEaseFactor = max(1.3, EF + (0.1 - (5-q)×(0.08+(5-q)×0.02)))
```

Where:
- `EF` = Current Ease Factor
- `q` = Quality rating (0-5)
- `1.3` = Minimum ease factor
- Result influences next interval

### Interval Calculation

```
if quality < 3:
  nextInterval = 1 day
  resetRepetitions = 0
else if repetitions == 1:
  nextInterval = 1 day
else if repetitions == 2:
  nextInterval = 3 days
else:
  nextInterval = round(previousInterval × newEaseFactor)
```

## Part 6: Current Status

✓ **Spaced Repetition**: Fully implemented with SM-2 algorithm
✓ **Multiple Translations**: All 400 words have 2-6 accepted answers
✓ **Apostrophe Normalization**: `o'`, `ó`, `o` all treated as same
✓ **Case Insensitive**: `QORQMOQ` = `qorqmoq`
✓ **Whitespace Handling**: Multiple spaces normalized
✓ **Smart Scheduling**: Reviews get further apart as mastery increases

## Getting Started

1. Start a game (Flashcards, Quiz, etc.)
2. Review how well you knew each word (Quality 0-5)
3. System schedules reviews based on performance
4. Type any accepted Uzbek variation - all correct answers accepted
5. Over weeks/months, spacing increases, mastery improves

The longer you use the system, the smarter it gets at scheduling your reviews!
