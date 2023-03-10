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
  happy: 'đ',
  good: 'đ',
  amazing: 'đ¤Š',
  yummy: 'đ¤¤',
  awkward: 'đ',
  tired: 'đŠ',
  shocked: 'đĻ',
  bored: 'đĨą',
  confused: 'đ',
  focused: 'đ¤',
  disappointed: 'đ',
  down: 'âšī¸',
  stressed: 'đĒ',
  angry: 'đ ',
  disgusted: 'đ¤Ž',
  scared: 'đą',
  anxious: 'đ',
  sad: 'đ­',
  sick: 'đˇ',
  hurt: 'đ¤',
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
