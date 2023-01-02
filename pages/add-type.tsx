import { useNavigation, useRoute } from '@react-navigation/native'
import { useEffect, useRef, useState } from 'react'
import { Pressable, TextInput } from 'react-native'

import CloseIcon from '../components/icons/close'
import { Input } from '../components/input'
import { Row } from '../components/row'
import { ScreenLayout } from '../components/screen-layout'
import { Typography } from '../components/typography'
import { GroupType } from '../types'
import { RootStackScreenProps, RouteName } from '../types/routes'

type navigationType = RootStackScreenProps<RouteName.AddType>['navigation']
type routeType = RootStackScreenProps<RouteName.AddType>['route']

type ContentProps = {
  placeholder: {
    empty: string
    default: string
  }
  title: string
  description: string
  allActive: string
  all: string
  new: string
}

const content: Record<string, ContentProps> = {
  [GroupType.Process]: {
    placeholder: {
      empty: 'Insert a process...',
      default: 'Select or insert a process...',
    },
    title: 'Give a purpose to your moments',
    description: `Don't track outcomes, focus if you are enjoying the process towards anything you are doing.`,
    allActive: 'All active processes',
    all: 'All processes',
    new: 'Create new process',
  },
  [GroupType.Tags]: {
    placeholder: {
      empty: 'Insert a tag...',
      default: 'Select or insert a tag...',
    },
    title: 'Categorize moments',
    description: `Group moments by topics, e.g #food`,
    allActive: '',
    all: 'All tags',
    new: 'Create new tag',
  },
  [GroupType.Index]: {
    placeholder: {
      empty: 'Insert an index...',
      default: 'Select or insert an index...',
    },
    title: 'Highlight special moments in your life',
    description: `Special moments you want to remember, milestones, etc.`,
    allActive: '',
    all: 'All index',
    new: 'Create new index',
  },
}

export const AddType = () => {
  const nav = useNavigation<navigationType>()
  const route = useRoute<routeType>()

  const [search, setSearch] = useState<string>('')
  const inputRef = useRef<TextInput | null>()

  const onClosePress = () => {
    if (nav.canGoBack) return nav.goBack()
    return nav.navigate(RouteName.Tabs, { screen: RouteName.Home })
  }

  useEffect(() => {
    inputRef.current?.focus()
  }, [])

  useEffect(() => {
    if (!route.params.momentId || !route.params.type) {
      nav.navigate(RouteName.Tabs, { screen: RouteName.Home })
    }
  }, [route, nav])

  if (!route.params.momentId || !route.params.type) return

  const { type } = route.params
  const contentType = content[type]
  return (
    <ScreenLayout>
      <Row className="justify-between items-center mb-5">
        <Pressable onPress={onClosePress} hitSlop={10}>
          <CloseIcon className="text-primary" />
        </Pressable>
      </Row>
      <Input
        inputRef={inputRef}
        value={search}
        onChangeText={setSearch}
        placeholder={contentType.placeholder.default}
      />
      <Typography
        variant="body"
        weight="600"
        className="text-primary-60 mt-6 mb-2"
      >
        {contentType.title}
      </Typography>
      <Typography
        variant="body"
        weight="400"
        className="text-primary-40 leading-5 mb-8"
      >
        {contentType.description}
      </Typography>
      {search && (
        <Typography variant="subtitle" className="text-secondary" weight="600">
          {contentType.new} "{search}"
        </Typography>
      )}
    </ScreenLayout>
  )
}
