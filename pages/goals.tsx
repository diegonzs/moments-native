import { useNavigation } from '@react-navigation/native'
import { Pressable, View } from 'react-native'

import { Column } from '../components/column'
import { GoalItem } from '../components/goal-item'
import ChevronIcon from '../components/icons/chevron'
import PlusIcon from '../components/icons/plus'
import { Row } from '../components/row'
import { ScreenLayout } from '../components/screen-layout'
import { Typography } from '../components/typography'
import { RootTabScreenProps, RouteName } from '../types/routes'

type navigationType = RootTabScreenProps<RouteName.Goals>['navigation']

export const Goals = () => {
  const nav = useNavigation<navigationType>()
  const goToCreateGoals = () => nav.navigate(RouteName.CreateGoal)
  return (
    <ScreenLayout>
      <Row className="justify-between items-center mb-4">
        <Typography variant="title" weight="700" className="text-primary">
          Goals
        </Typography>
        <Pressable onPress={goToCreateGoals}>
          <PlusIcon className="text-primary p-2" />
        </Pressable>
      </Row>
      <Row className="items-center mb-8">
        <ChevronIcon className="text-primary-60 mr-2" />
        <Typography variant="body" className="text-primary-60">
          2022
        </Typography>
      </Row>
      <Column>
        <GoalItem content="Create personal brand" />
        <View className="h-6" />
        <GoalItem content="Learn 3D design" />
        <View className="h-6" />
        <GoalItem
          content="Learn video production"
          isCompleted
          date="24th November"
        />
        <View className="h-6" />
        <GoalItem content="Buy a new car" />
      </Column>
    </ScreenLayout>
  )
}
