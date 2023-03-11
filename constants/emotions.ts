enum Emotion {
  happy = 'happy',
  good = 'good',
  amazing = 'amazing',
  yummy = 'yummy',
  awkward = 'awkward',
  tired = 'tired',
  shocked = 'shocked',
  bored = 'bored',
  confused = 'confused',
  focused = 'focused',
  disappointed = 'disappointed',
  down = 'down',
  stressed = 'stressed',
  angry = 'angry',
  disgusted = 'disgusted',
  scared = 'scared',
  anxious = 'anxious',
  sad = 'sad',
  sick = 'sick',
  hurt = 'hurt',
}

export interface EmotionProps {
  title: Emotion
  emoji: string
}

export const emotionsMap: Record<Emotion, string> = {
  happy: '😄',
  good: '😏',
  amazing: '🤩',
  yummy: '🤤',
  awkward: '😅',
  tired: '😩',
  shocked: '😦',
  bored: '🥱',
  confused: '😕',
  focused: '🤔',
  disappointed: '😔',
  down: '☹️',
  stressed: '😪',
  angry: '😠',
  disgusted: '🤮',
  scared: '😱',
  anxious: '😓',
  sad: '😭',
  sick: '😷',
  hurt: '🤕',
}

export const emotionToEmoji = (emotion: string): string => {
  return emotionsMap[emotion as Emotion]
}

const createEmotions = (emotions: Emotion[]): EmotionProps[] => {
  return emotions.map((emotion) => ({
    title: emotion,
    emoji: emotionsMap[emotion],
  }))
}

export const happyEmotions: EmotionProps[] = createEmotions([
  Emotion.happy,
  Emotion.good,
  Emotion.amazing,
  Emotion.yummy,
])

export const sadEmotions: EmotionProps[] = createEmotions([
  Emotion.awkward,
  Emotion.tired,
  Emotion.shocked,
  Emotion.bored,
  Emotion.confused,
  Emotion.focused,
  Emotion.disappointed,
  Emotion.down,
  Emotion.stressed,
  Emotion.angry,
  Emotion.disgusted,
  Emotion.scared,
  Emotion.anxious,
  Emotion.sad,
  Emotion.sick,
  Emotion.hurt,
])
