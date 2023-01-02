import { useNavigation } from '@react-navigation/native'
import { Pressable } from 'react-native'

import { RootStackScreenProps, RouteName } from '../../../types/routes'
import BackArrowIcon from '../../icons/back-arrow'
import PinIcon from '../../icons/pin'
import ReactionIcon from '../../icons/reaction'
import TimeIcon from '../../icons/time'
import { Row } from '../../row'

type navigationType =
  RootStackScreenProps<RouteName.MomentDetails>['navigation']

export const Header: React.FC<{ momentId: string }> = ({ momentId }) => {
  const nav = useNavigation<navigationType>()
  const onPressBack = () => {
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

  return (
    <Row className="justify-between items-center mb-10">
      <Pressable onPress={onPressBack} hitSlop={10}>
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
          <ReactionIcon className="text-secondary" />
        </Pressable>
      </Row>
    </Row>
  )
}
