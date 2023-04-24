import { useNavigation } from '@react-navigation/native'
import { cx } from 'classix'
import React from 'react'
import { Pressable, TouchableOpacity, View } from 'react-native'

import { Column } from '../../components/column'
import CalendarIcon from '../../components/icons/calendar'
import SearchIcon from '../../components/icons/search'
import {
  AllHashtags,
  AllIndicators,
  AllMoments,
  AllProcesses,
} from '../../components/memories-type'
import { Row } from '../../components/row'
import { ScreenLayout } from '../../components/screen-layout'
import { TitleCountOnPressProps } from '../../components/title-count'
import { Typography } from '../../components/typography'
import { useAppStore } from '../../store/useStore'
import { MemoriesOptions } from '../../types'
import { RootTabScreenProps, RouteName } from '../../types/routes'

const options: MemoriesOptions[] = [
  MemoriesOptions.All,
  MemoriesOptions.Process,
  MemoriesOptions.Tags,
  MemoriesOptions.Index,
]

type navigationType = RootTabScreenProps<RouteName.Memories>['navigation']

export const Memories = () => {
  const currentOption = useAppStore((state) => state.currentMemoriesOption)
  const nav = useNavigation<navigationType>()
  const setCurrentOption = useAppStore(
    (state) => state.setCurrentMemoriesOption,
  )
  const isCurrentOption = (option: MemoriesOptions) => option === currentOption
  const onPressSearch = () => nav.navigate(RouteName.Search)
  const onPressItem = ({ id, type }: TitleCountOnPressProps) => {
    nav.navigate(RouteName.TypeDetails, {
      id,
      type,
    })
  }

  return (
    <ScreenLayout>
      <Row className="justify-between items-center mb-8">
        <Typography variant="title" weight="700">
          Memories
        </Typography>
        <Row className="items-center">
          <CalendarIcon className="text-primary mr-4" />
          <Pressable onPress={onPressSearch}>
            <SearchIcon className="text-primary" />
          </Pressable>
        </Row>
      </Row>
      <Row className="justify-between mb-6">
        {options.map((option) => (
          <Column key={option} className="items-center">
            <TouchableOpacity onPress={() => setCurrentOption(option)}>
              <Typography
                variant="subtitle"
                weight="600"
                className={cx(
                  'mb-1',
                  isCurrentOption(option) ? 'text-primary' : 'text-primary-40',
                )}
              >
                {option}
              </Typography>
            </TouchableOpacity>
            {isCurrentOption(option) && (
              <View className="w-1 h-1 bg-secondary-light rounded-full" />
            )}
          </Column>
        ))}
      </Row>
      {currentOption === MemoriesOptions.All && <AllMoments />}
      {currentOption === MemoriesOptions.Process && (
        <AllProcesses onPressItem={onPressItem} />
      )}
      {currentOption === MemoriesOptions.Tags && (
        <AllHashtags onPressItem={onPressItem} />
      )}
      {currentOption === MemoriesOptions.Index && (
        <AllIndicators onPressItem={onPressItem} />
      )}
    </ScreenLayout>
  )
}
