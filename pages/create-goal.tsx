import { useNavigation } from '@react-navigation/native'
import { useEffect, useRef, useState } from 'react'
import { Pressable, TextInput } from 'react-native'

import CloseIcon from '../components/icons/close'
import { Input } from '../components/input'
import { Row } from '../components/row'
import { ScreenLayout } from '../components/screen-layout'
import { Typography } from '../components/typography'
import { RootStackScreenProps, RouteName } from '../types/routes'

type navigationType = RootStackScreenProps<RouteName.CreateGoal>['navigation']

export const CreateGoal = () => {
  const nav = useNavigation<navigationType>()
  const [search, setSearch] = useState<string>('')
  const inputRef = useRef<TextInput | null>()

  const onClosePress = () => {
    if (nav.canGoBack) return nav.goBack()
    return nav.navigate(RouteName.Tabs, { screen: RouteName.Goals })
  }

  useEffect(() => {
    inputRef.current?.focus()
  }, [])

  return (
    <ScreenLayout>
      <Row className="justify-between items-center mb-5">
        <Pressable onPress={onClosePress} hitSlop={10}>
          <CloseIcon className="text-primary" />
        </Pressable>
        <Pressable onPress={onClosePress}>
          <Typography variant="button" weight="400" className="text-primary-60">
            Create
          </Typography>
        </Pressable>
      </Row>
      <Input
        inputRef={inputRef}
        value={search}
        onChangeText={setSearch}
        placeholder="Introduce your goal..."
      />
      <Typography
        variant="body"
        weight="600"
        className="text-primary-60 mt-6 mb-2"
      >
        Set resolutions for your life
      </Typography>
      <Typography
        variant="body"
        weight="400"
        className="text-primary-40 leading-5"
      >
        {`Popular for new year's resolutions, but you don't need to wait for the next year to start with your dreams.`}
      </Typography>
    </ScreenLayout>
  )
}
