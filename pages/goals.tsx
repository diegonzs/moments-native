import { useNavigation } from '@react-navigation/native'
import { useState } from 'react'
import { FlatList, Pressable, View } from 'react-native'

import { Column } from '../components/column'
import { Dropdown } from '../components/dropdown'
import { GoalItem } from '../components/goal-item'
import ChevronIcon from '../components/icons/chevron'
import PlusIcon from '../components/icons/plus'
import { Row } from '../components/row'
import { ScreenLayout } from '../components/screen-layout'
import { Typography } from '../components/typography'
import { useAllGoals } from '../hooks/goals'
import { RootTabScreenProps, RouteName } from '../types/routes'

const yearOptions = [
  { label: '2021', value: '2021' },
  { label: '2022', value: '2022' },
  { label: '2023', value: '2023' },
]
type navigationType = RootTabScreenProps<RouteName.Goals>['navigation']
export const Goals = () => {
  const nav = useNavigation<navigationType>()
  const goals = useAllGoals()
  const [currentYear, setCurrentYear] = useState(
    new Date().getFullYear().toString(),
  )

  const goToCreateGoals = () => nav.navigate(RouteName.CreateGoal)

  return (
    <ScreenLayout withScroll={false}>
      <Row className="justify-between items-center mb-4">
        <Typography variant="title" weight="700" className="text-primary">
          Goals
        </Typography>
        <Pressable onPress={goToCreateGoals}>
          <PlusIcon className="text-primary p-2" />
        </Pressable>
      </Row>
      <Dropdown options={yearOptions} onChange={setCurrentYear}>
        <Row className="items-center mb-8">
          <ChevronIcon className="text-primary-60 mr-2" />
          <Typography variant="body" className="text-primary-60">
            {currentYear}
          </Typography>
        </Row>
      </Dropdown>
      <Column>
        <FlatList
          data={goals}
          keyExtractor={(goal) => goal._id.toHexString()}
          ItemSeparatorComponent={() => <View className="h-6" />}
          renderItem={({ item: goal }) => <GoalItem goal={goal} />}
        />
      </Column>
    </ScreenLayout>
  )
}
