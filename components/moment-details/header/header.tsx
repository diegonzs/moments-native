import { useNavigation } from '@react-navigation/native'
import { Pressable } from 'react-native'

import { emotionToEmoji } from '../../../constants/emotions'
import { useMomentById } from '../../../hooks/moments'
import { RootStackScreenProps, RouteName } from '../../../types/routes'
import BackArrowIcon from '../../icons/back-arrow'
import PinIcon from '../../icons/pin'
import ReactionIcon from '../../icons/reaction'
import TimeIcon from '../../icons/time'
import { Row } from '../../row'
import { Typography } from '../../typography'

type navigationType =
  RootStackScreenProps<RouteName.MomentDetails>['navigation']

interface HeaderProps {
  momentId: string
  onBackPress?: () => void
}

export const Header: React.FC<HeaderProps> = ({ momentId, onBackPress }) => {
  const nav = useNavigation<navigationType>()
  const moment = useMomentById(momentId)

  const handleBackPress = () => {
    onBackPress?.()
    if (nav.canGoBack()) return nav.goBack()
    return nav.navigate(RouteName.Tabs, { screen: RouteName.Home })
  }

  const goToRememberMe = () => {
    nav.navigate(RouteName.RememberMe, { momentId })
  }
  const goToPinnedSelect = () => {
    nav.navigate(RouteName.PinnedSelect, { momentId })
  }
  const goToAddEmotion = () => {
    nav.navigate(RouteName.AddEmotion, { momentId })
  }

  const emotionEmoji = emotionToEmoji(moment?.emotion || '')

  return (
    <Row className="justify-between items-center mb-8">
      <Pressable onPress={handleBackPress} hitSlop={10}>
        <BackArrowIcon className="text-primary" />
      </Pressable>
      <Row className="items-center">
        <Pressable onPress={goToRememberMe} hitSlop={5}>
          <TimeIcon className="text-secondary mr-4" />
        </Pressable>
        <Pressable onPress={goToPinnedSelect} hitSlop={5}>
          <PinIcon className="text-secondary mr-4" />
        </Pressable>
        <Pressable onPress={goToAddEmotion} hitSlop={5}>
          {emotionEmoji ? (
            <Typography variant="title">{emotionEmoji}</Typography>
          ) : (
            <ReactionIcon className="text-secondary" />
          )}
        </Pressable>
      </Row>
    </Row>
  )
}
