import { useNavigation, useRoute } from '@react-navigation/native'
import { useEffect, useState } from 'react'
import { Pressable, Text, View } from 'react-native'

import { Column } from '../components/column'
import CloseIcon from '../components/icons/close'
import SearchIcon from '../components/icons/search'
import { Input } from '../components/input'
import { Row } from '../components/row'
import { ScreenLayout } from '../components/screen-layout'
import { Typography } from '../components/typography'
import { happyEmotions, sadEmotions } from '../constants/emotions'
import { useAddEmotion, useMomentById } from '../hooks/moments'
import { RootStackScreenProps, RouteName } from '../types/routes'

type navigationType = RootStackScreenProps<RouteName.AddEmotion>['navigation']
type routeType = RootStackScreenProps<RouteName.AddEmotion>['route']

interface EmotionProps {
  title: string
  emoji: string
  onPress: (title: string) => void
}

const Emotion: React.FC<EmotionProps> = ({ emoji, title, onPress }) => {
  const handlePress = () => onPress(title)
  return (
    <Pressable onPress={handlePress} hitSlop={10}>
      <Column className="items-center mb-5" style={{ width: 87 }}>
        <Text style={{ fontSize: 30, marginBottom: 12 }}>{emoji}</Text>
        <Typography
          variant="caption"
          weight="500"
          className="text-primary-light"
        >
          {title}
        </Typography>
      </Column>
    </Pressable>
  )
}

export const AddEmotion = () => {
  const nav = useNavigation<navigationType>()
  const route = useRoute<routeType>()
  const momentId = route.params.momentId

  const moment = useMomentById(momentId)
  const addEmotion = useAddEmotion()

  const [search, setSearch] = useState<string>('')

  const onPressBack = () => {
    if (nav.canGoBack) return nav.goBack()
    nav.navigate(RouteName.AllDetails, { id: momentId })
  }

  const handleAddEmotion = (emotion: string) => {
    if (!moment) return
    addEmotion(emotion, moment)
    onPressBack()
  }

  useEffect(() => {
    if (!momentId || !moment) {
      nav.navigate(RouteName.Tabs, { screen: RouteName.Home })
    }
  }, [])

  const filteredHappyEmotions = happyEmotions.filter((emotion) =>
    emotion.title.includes(search.trim().toLowerCase()),
  )
  const filterSadEmotions = sadEmotions.filter((emotion) =>
    emotion.title.includes(search.trim().toLowerCase()),
  )

  if (!momentId || !moment) return

  return (
    <ScreenLayout>
      <Row className="mb-4">
        <Pressable onPress={onPressBack} hitSlop={10}>
          <CloseIcon className="text-primary mb-" />
        </Pressable>
      </Row>
      <Typography variant="subtitle" weight="600" className="text-primary mb-8">
        How are you feeling?
      </Typography>
      <View className="mb-6">
        <Input
          value={search}
          onChangeText={setSearch}
          placeholder="Search emotion..."
          Prefix={<SearchIcon className="text-primary mr-4" />}
        />
      </View>
      <Column className="mb-8">
        <Typography
          variant="body"
          className="mb-2 text-primary-60"
          weight="600"
        >
          Happy
        </Typography>
        <Row className="flex-wrap">
          {filteredHappyEmotions.map((emotion) => (
            <Emotion
              key={emotion.title}
              onPress={handleAddEmotion}
              {...emotion}
            />
          ))}
        </Row>
      </Column>
      <Column className="mb-8">
        <Typography
          variant="body"
          className="mb-2 text-primary-60"
          weight="600"
        >
          Sad
        </Typography>
        <Row className="flex-wrap">
          {filterSadEmotions.map((emotion) => (
            <Emotion
              key={emotion.title}
              onPress={handleAddEmotion}
              {...emotion}
            />
          ))}
        </Row>
      </Column>
    </ScreenLayout>
  )
}
