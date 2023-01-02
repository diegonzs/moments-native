import { useNavigation, useRoute } from '@react-navigation/native'
import { useEffect } from 'react'
import { Pressable, View } from 'react-native'

import CloseIcon from '../components/icons/close'
import { Row } from '../components/row'
import { ScreenLayout } from '../components/screen-layout'
import { SwitchOption } from '../components/switch-option'
import { Typography } from '../components/typography'
import { RootStackScreenProps, RouteName } from '../types/routes'

type navigationType = RootStackScreenProps<RouteName.PinnedSelect>['navigation']
type routeType = RootStackScreenProps<RouteName.PinnedSelect>['route']

export const PinnedSelect = () => {
  const nav = useNavigation<navigationType>()
  const route = useRoute<routeType>()

  const onPressBack = () => {
    if (nav.canGoBack) return nav.goBack()
    nav.navigate(RouteName.AllDetails, { id: route.params.momentId })
  }

  useEffect(() => {
    if (!route.params.momentId) {
      nav.navigate(RouteName.Tabs, { screen: RouteName.Home })
    }
  }, [])

  if (!route.params.momentId) return

  return (
    <ScreenLayout>
      <Row className="mb-4">
        <Pressable onPress={onPressBack} hitSlop={10}>
          <CloseIcon className="text-primary mb-" />
        </Pressable>
      </Row>
      <Typography variant="title" weight="700" className="text-primary mb-8">
        Pin moment
      </Typography>
      <SwitchOption
        title="Pin to home"
        description="Stick this moment to the initial section"
      />
      <View className="h-5" />
      <SwitchOption
        title="Pin to process"
        description="Stick this moment in the process board"
        isDisabled
      />
    </ScreenLayout>
  )
}
