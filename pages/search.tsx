import { useNavigation } from '@react-navigation/native'
import { useEffect, useRef, useState, Fragment } from 'react'
import { TextInput, Pressable, View } from 'react-native'

import { CardList } from '../components/card-list'
import { Column } from '../components/column'
import CloseIcon from '../components/icons/close'
import SearchIcon from '../components/icons/search'
import { Input } from '../components/input'
import { Row } from '../components/row'
import { RowTab } from '../components/row-tab'
import { ScreenLayout } from '../components/screen-layout'
import { TitleCount, TitleCountOnPressProps } from '../components/title-count'
import { Typography } from '../components/typography'
import { SearchOptions } from '../types'
import { RootStackScreenProps, RouteName } from '../types/routes'

type navigationType = RootStackScreenProps<RouteName.Search>['navigation']

const options: SearchOptions[] = [
  SearchOptions.Moments,
  SearchOptions.Process,
  SearchOptions.Tags,
  SearchOptions.Index,
]

const mockCountItems: { id: string; title: string; count: number }[] = [
  {
    id: '1',
    title: 'Financial Freedom',
    count: 4,
  },
  {
    id: '2',
    title: 'Getting a new job in tec...',
    count: 5,
  },
  {
    id: '3',
    title: 'Health',
    count: 154,
  },
  {
    id: '4',
    title: 'Move to NY',
    count: 1,
  },
]

export const SearachPage = () => {
  const [value, setValue] = useState<string>('')
  const [currentOption, setCurrentOption] = useState<string>(
    SearchOptions.Moments,
  )
  const inputRef = useRef<TextInput | null>(null)
  const nav = useNavigation<navigationType>()

  const onPressClose = () => {
    if (nav.canGoBack) return nav.goBack()
    nav.navigate(RouteName.Tabs, { screen: RouteName.Memories })
  }

  const onPressItem = ({ id, type }: TitleCountOnPressProps) => {
    nav.navigate(RouteName.TypeDetails, {
      id,
      type,
    })
  }

  const isMoments = currentOption === SearchOptions.Moments

  useEffect(() => {
    inputRef.current?.focus()
  }, [])

  return (
    <ScreenLayout>
      <Row className="mb-5">
        <Pressable onPress={onPressClose} hitSlop={10}>
          <CloseIcon className="text-primary p-2" />
        </Pressable>
      </Row>
      <Input
        inputRef={inputRef}
        value={value}
        onChangeText={setValue}
        Prefix={<SearchIcon className="text-primary mr-4" />}
      />
      {value && (
        <Column className="mt-6">
          <Typography
            variant="body"
            weight="600"
            className="text-primary-40 mb-6"
          >
            Results for "{value}"
          </Typography>
          <RowTab
            options={options}
            currentOption={currentOption}
            setCurrentOption={setCurrentOption}
          />
          {isMoments ? (
            <CardList />
          ) : (
            <>
              {mockCountItems.map((item) => (
                <Fragment key={item.title}>
                  <TitleCount
                    {...item}
                    type={currentOption}
                    onPress={onPressItem}
                  />
                  <View className="h-4" />
                </Fragment>
              ))}
            </>
          )}
        </Column>
      )}
    </ScreenLayout>
  )
}
