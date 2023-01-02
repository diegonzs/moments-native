import { useRoute } from '@react-navigation/native'
import { useState } from 'react'
import { TextInput } from 'react-native'
import Markdown from 'react-native-markdown-display'

import { Column } from '../components/column'
import { Header } from '../components/moment-details'
import { Footer } from '../components/moment-details/footer'
import { ScreenLayout } from '../components/screen-layout'
import colors from '../theme/colors'
import { RootStackScreenProps, RouteName } from '../types/routes'

type routeType = RootStackScreenProps<RouteName.MomentDetails>['route']

const mockMoments: Record<string, { content: string }> = {
  '1': {
    content: '# Hello world',
  },
  '5': {
    content: '',
  },
}

export const MomentDetails = () => {
  const route = useRoute<routeType>()
  const momentId = route.params.id
  const isEditMode = route.params.isEditMode

  const [value, setValue] = useState<string>(
    mockMoments[momentId]?.content ?? '',
  )

  return (
    <>
      <ScreenLayout>
        <Header momentId={momentId} />
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
      <Footer momentId={momentId} isEditMode={isEditMode} />
    </>
  )
}
