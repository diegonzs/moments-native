import { useNavigation, useRoute } from '@react-navigation/native'
import { useEffect, useState } from 'react'
import { TextInput } from 'react-native'
import Markdown from 'react-native-markdown-display'

import { Column } from '../components/column'
import { Header } from '../components/moment-details'
import { Footer } from '../components/moment-details/footer'
import { ScreenLayout } from '../components/screen-layout'
import { useDebounce } from '../hooks'
import {
  useDeleteMoment,
  useMomentById,
  useUpdateMomentContent,
} from '../hooks/moments'
import colors from '../theme/colors'
import { RootStackScreenProps, RouteName } from '../types/routes'

type routeType = RootStackScreenProps<RouteName.MomentDetails>['route']
type navigationType =
  RootStackScreenProps<RouteName.MomentDetails>['navigation']

export const MomentDetails = () => {
  const route = useRoute<routeType>()
  const nav = useNavigation<navigationType>()
  const momentId = route.params.id
  const isEditMode = route.params.isEditMode
  const moment = useMomentById(momentId)
  const deleteMoment = useDeleteMoment()
  const updateMomentContent = useUpdateMomentContent()
  const [value, setValue] = useState<string>(moment.content ?? '')
  const debouncedContent = useDebounce<string>(value, 1000)

  useEffect(() => {
    if (moment.content !== debouncedContent) {
      updateMomentContent(moment, debouncedContent)
    }
  }, [debouncedContent])

  const onBackPress = () => {
    if (isEditMode && !value) {
      deleteMoment(moment)
    }
  }

  const onDeletePress = () => {
    deleteMoment(moment)
    return nav.navigate(RouteName.Tabs, { screen: RouteName.Home })
  }

  return (
    <>
      <ScreenLayout>
        <Header momentId={momentId} onBackPress={onBackPress} />
        <Column className="min-h-full">
          {isEditMode ? (
            <TextInput
              value={value}
              onChangeText={setValue}
              multiline
              style={{ fontSize: 16 }}
              className="flex-1"
              placeholder="Describe your moment..."
              placeholderTextColor={colors.placeholder}
              selectionColor={colors.placeholder}
            />
          ) : (
            <Markdown>{value}</Markdown>
          )}
        </Column>
      </ScreenLayout>
      <Footer
        momentId={momentId}
        isEditMode={isEditMode}
        onDeletePress={onDeletePress}
      />
    </>
  )
}
