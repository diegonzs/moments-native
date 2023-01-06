import { useNavigation } from '@react-navigation/native'
import { Pressable, View } from 'react-native'

import { CardList } from '../components/card-list'
import { List } from '../components/history/list'
import ChevronIcon from '../components/icons/chevron'
import PlusIcon from '../components/icons/plus'
import SearchIcon from '../components/icons/search'
import { Row } from '../components/row'
import { ScreenLayout } from '../components/screen-layout'
import { Typography } from '../components/typography'
import { RootTabScreenProps, RouteName } from '../types/routes'

type navigationType = RootTabScreenProps<RouteName.Home>['navigation']

export const Home = () => {
  const nav = useNavigation<navigationType>()
  const goToSearch = () => nav.navigate(RouteName.Search)
  const goToMomentDetails = () => {
    const generatedMomentId = '5'
    nav.navigate(RouteName.MomentDetails, {
      id: generatedMomentId,
      isEditMode: true,
    })
  }
  return (
    <ScreenLayout withPadding={false}>
      <Row className="items-center justify-between mb-6 px-5">
        <Row className="items-center">
          <Typography variant="title" weight="700" className="text-primary">
            2022
          </Typography>
          <ChevronIcon className="text-primary ml-2" />
        </Row>
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
          3 pinned
        </Typography>
      </Row>
      <View className="px-5">
        <CardList />
      </View>
    </ScreenLayout>
  )
}
