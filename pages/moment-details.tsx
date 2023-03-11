import { useNavigation, useRoute } from '@react-navigation/native'
import { useEffect, useState } from 'react'
import { TextInput } from 'react-native'
import Markdown from 'react-native-markdown-display'

import { Column } from '../components/column'
import { Header } from '../components/moment-details'
import { Footer } from '../components/moment-details/footer'
import { ScreenLayout } from '../components/screen-layout'
import { useDebounce } from '../hooks'
import { useMomentById } from '../hooks/moments'
import { useRealm } from '../hooks/realm-hooks'
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
  const realm = useRealm()
  const moment = useMomentById(momentId)
  const [value, setValue] = useState<string>(moment.content ?? '')
  const debouncedContent = useDebounce<string>(value, 1000)

  useEffect(() => {
    if (moment.content !== debouncedContent) {
      realm.write(() => {
        moment.content = debouncedContent
      })
    }
  }, [debouncedContent])

  const deleteMoment = () => {
    realm.write(() => {
      realm.delete(moment)
    })
  }

  const onBackPress = () => {
    if (isEditMode && !value) {
      deleteMoment()
    }
  }

  const onDeletePress = () => {
    deleteMoment()
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
