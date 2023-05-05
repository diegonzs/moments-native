import { useNavigation } from '@react-navigation/native'
import { useState } from 'react'
import { Pressable, View } from 'react-native'

import { CardList } from '../components/card-list'
import { Dropdown } from '../components/dropdown'
import { List } from '../components/history/list'
import ChevronIcon from '../components/icons/chevron'
import PlusIcon from '../components/icons/plus'
import SearchIcon from '../components/icons/search'
import { Row } from '../components/row'
import { ScreenLayout } from '../components/screen-layout'
import { Typography } from '../components/typography'
import { useAllMoments, useCreateMoment } from '../hooks/moments'
import { RootTabScreenProps, RouteName } from '../types/routes'

type navigationType = RootTabScreenProps<RouteName.Home>['navigation']
const yearOptions = [
  { label: '2021', value: '2021' },
  { label: '2022', value: '2022' },
  { label: '2023', value: '2023' },
]
export const Home = () => {
  const nav = useNavigation<navigationType>()
  const [currentYear, setCurrentYear] = useState(
    new Date().getFullYear().toString(),
  )
  const goToSearch = () => nav.navigate(RouteName.Search)
  const createMoment = useCreateMoment()
  const moments = useAllMoments()
  const filteredMoments = moments.filtered('isPinnedHome == true')

  const goToMomentDetails = () => {
    const moment = createMoment()
    nav.navigate(RouteName.MomentDetails, {
      id: moment._id.toHexString(),
      isEditMode: true,
    })
  }

  return (
    <ScreenLayout withPadding={false}>
      <Row className="items-center justify-between mb-6 px-5">
        <Dropdown options={yearOptions} onChange={setCurrentYear}>
          <Row className="items-center">
            <Typography variant="title" weight="700" className="text-primary">
              {currentYear}
            </Typography>
            <ChevronIcon className="text-primary ml-2" />
          </Row>
        </Dropdown>
        <Row className="items-center">
          <Pressable onPress={goToMomentDetails}>
            <PlusIcon className="text-primary mr-4" />
          </Pressable>
          <Pressable onPress={goToSearch}>
            <SearchIcon className="text-primary" />
          </Pressable>
        </Row>
      </Row>
      <View className="pl-5">
        <List />
      </View>
      <Row className="justify-between items-center mt-8 mb-3 px-5">
        <Typography
          className="text-black opacity-40"
          variant="body"
          weight="600"
        >
          Keep in mind
        </Typography>
        <Typography
          className="text-black opacity-40"
          variant="caption"
          weight="400"
        >
          {filteredMoments.length} pinned
        </Typography>
      </Row>
      <View className="px-5">
        <CardList moments={filteredMoments} />
      </View>
    </ScreenLayout>
  )
}
