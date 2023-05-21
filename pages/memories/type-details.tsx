import { useNavigation, useRoute } from '@react-navigation/native'
import dayjs from 'dayjs'
import { useMemo } from 'react'
import { Pressable } from 'react-native'

import { CardList } from '../../components/card-list'
import BackArrowIcon from '../../components/icons/back-arrow'
import EditIcon from '../../components/icons/edit'
import PinIcon from '../../components/icons/pin'
import { Row } from '../../components/row'
import { ScreenLayout } from '../../components/screen-layout'
import { Typography } from '../../components/typography'
import { useMemoriesTypeDetails } from '../../hooks/useMemoriesTypeDetails'
import { MemoriesOptions } from '../../types'
import { RootStackScreenProps, RouteName } from '../../types/routes'

type navigationType = RootStackScreenProps<RouteName.TypeDetails>['navigation']
type routeType = RootStackScreenProps<RouteName.TypeDetails>['route']

export const TypeDetails = () => {
  const nav = useNavigation<navigationType>()
  const route = useRoute<routeType>()
  const { start, end } = route.params
  const details = useMemoriesTypeDetails({
    type: route.params.type,
    id: route.params.id,
  })
  const onPressBackIcon = () => {
    if (nav.canGoBack()) return nav.goBack()
    nav.navigate(RouteName.Tabs, { screen: RouteName.Memories })
  }
  const onPressPin = () => {
    if (!route.params) return
    nav.navigate(RouteName.PinnedBoard, route.params)
  }
  const isProcess = route.params.type === MemoriesOptions.Process

  const filteredMoments = useMemo(() => {
    if (!start || !end) return details.moments
    const startDate = dayjs(start)
    const endDate = dayjs(end)
    if (!dayjs(startDate).isValid() || !dayjs(endDate).isValid()) {
      return details.moments
    }
    return details.moments.filtered(
      'createdAt >= $0 && createdAt <= $1',
      startDate.toDate(),
      endDate.toDate(),
    )
  }, [details, start, end])

  return (
    <ScreenLayout>
      <Row className="justify-between items-center mb-2">
        <Pressable onPress={onPressBackIcon}>
          <BackArrowIcon className="text-primary p-2" />
        </Pressable>
        <Row className="items-center">
          {isProcess && (
            <Pressable onPress={onPressPin}>
              <PinIcon className="mr-4 text-primary" />
            </Pressable>
          )}
          <EditIcon className="text-primary" />
        </Row>
      </Row>
      <Typography variant="title" weight="700" className="text-primary mb-2">
        {details.title}
      </Typography>
      <Typography variant="body" weight="600" className="text-primary-40 mb-6">
        {filteredMoments.length} moments
      </Typography>
      <CardList moments={filteredMoments} />
    </ScreenLayout>
  )
}
