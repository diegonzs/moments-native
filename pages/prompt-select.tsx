import { useNavigation, useRoute } from '@react-navigation/native'
import { cx } from 'classix'
import { useEffect } from 'react'
import { Pressable, View } from 'react-native'

import CloseIcon from '../components/icons/close'
import { Row } from '../components/row'
import { ScreenLayout } from '../components/screen-layout'
import { Typography } from '../components/typography'
import { RootStackScreenProps, RouteName } from '../types/routes'

type navigationType = RootStackScreenProps<RouteName.PromptSelect>['navigation']
type routeType = RootStackScreenProps<RouteName.PromptSelect>['route']

const morningValues = [
  { id: '1', title: 'What did you dreamt?' },
  { id: '2', title: 'What are you grateful?' },
  { id: '4', title: 'What did you dreamt?' },
  { id: '6', title: 'What are you grateful?' },
  { id: '7', title: 'What did you dreamt?' },
  { id: '9', title: 'What are you grateful?' },
]
const nightValues = [
  { id: '23', title: 'What did you dreamt?' },
  { id: '6546', title: 'What are you grateful?' },
  { id: '23esf', title: 'What did you dreamt?' },
  { id: '6546sdfhg', title: 'What are you grateful?' },
  { id: '23jfgh', title: 'What did you dreamt?' },
  { id: '6546asdas', title: 'What are you grateful?' },
]

const PromptSectionTitle: React.FC<{ title: string }> = ({ title }) => {
  return (
    <Typography variant="body" weight="600" className="text-primary-60 mb-4">
      {title}
    </Typography>
  )
}

const PromptRowValue: React.FC<{ title: string; isLast: boolean }> = ({
  title,
  isLast,
}) => {
  return (
    <Typography
      variant="subtitle"
      weight="500"
      className={cx('text-primary', !isLast && 'mb-4')}
    >
      {title}
    </Typography>
  )
}

export const PromptSelect = () => {
  const nav = useNavigation<navigationType>()
  const route = useRoute<routeType>()

  const onPressBack = () => {
    if (nav.canGoBack) return nav.goBack()
    nav.navigate(RouteName.Tabs, { screen: RouteName.Home })
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
        Prompts
      </Typography>
      <PromptSectionTitle title="Morning" />
      {morningValues.map((val, i) => (
        <PromptRowValue
          key={val.id}
          {...val}
          isLast={morningValues.length - 1 === i}
        />
      ))}
      <View className="h-8" />
      <PromptSectionTitle title="Night" />
      {nightValues.map((val, i) => (
        <PromptRowValue
          key={val.id}
          {...val}
          isLast={morningValues.length - 1 === i}
        />
      ))}
    </ScreenLayout>
  )
}
