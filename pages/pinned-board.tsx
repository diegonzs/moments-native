import { useNavigation, useRoute } from '@react-navigation/native'
import { Pressable } from 'react-native'

import { CardList } from '../components/card-list'
import CloseIcon from '../components/icons/close'
import { Row } from '../components/row'
import { ScreenLayout } from '../components/screen-layout'
import { Typography } from '../components/typography'
import { useProcessById } from '../hooks/process'
import { RootStackScreenProps, RouteName } from '../types/routes'

type navigationType = RootStackScreenProps<RouteName.PinnedBoard>['navigation']
type routeType = RootStackScreenProps<RouteName.PinnedBoard>['route']

export const PinnedBoard = () => {
  const nav = useNavigation<navigationType>()
  const route = useRoute<routeType>()
  const process = useProcessById(route.params.id)
  const moments = process.moments.filter((moment) => moment.isPinnedProcess)
  const onPressClose = () => {
    if (nav.canGoBack) return nav.goBack()
    if (!route.params) {
      return nav.navigate(RouteName.Tabs, { screen: RouteName.Memories })
    }
    nav.navigate(RouteName.TypeDetails, route.params)
  }

  return (
    <ScreenLayout>
      <Row className="mb-4">
        <Pressable onPress={onPressClose} hitSlop={10}>
          <CloseIcon className="text-primary p-2" />
        </Pressable>
      </Row>
      <Typography variant="title" weight="700" className="text-primary mb-2">
        Pinned Board
      </Typography>
      <Typography variant="body" weight="600" className="text-primary-40 mb-8">
        {process.title}
      </Typography>
      <CardList moments={moments} />
    </ScreenLayout>
  )
}
