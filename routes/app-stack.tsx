import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { AddEmotion } from '../pages/add-emotion'
import { AddIndicator } from '../pages/add-indicator'
import { AddProcess } from '../pages/add-process'
import { AddTag } from '../pages/add-tags'
import { AllDetails } from '../pages/all-details'
import { CreateGoal } from '../pages/create-goal'
import { TypeDetails } from '../pages/memories/type-details'
import { MomentDetails } from '../pages/moment-details'
import { PinnedBoard } from '../pages/pinned-board'
import { PinnedSelect } from '../pages/pinned-select'
import { PromptSelect } from '../pages/prompt-select'
import { RememberMe } from '../pages/remember-me'
import { SearachPage } from '../pages/search'
import colors from '../theme/colors'
import { RouteName, RouteStackParamList } from '../types/routes'
import { AppTabs } from './app-tabs'

const Stack = createNativeStackNavigator<RouteStackParamList>()

export const AppStack = () => {
  return (
    <Stack.Navigator
      initialRouteName={RouteName.Tabs}
      screenOptions={{
        headerShown: false,
        contentStyle: { backgroundColor: colors.background.DEFAULT },
      }}
    >
      <Stack.Screen name={RouteName.Tabs} component={AppTabs} />
      <Stack.Screen name={RouteName.TypeDetails} component={TypeDetails} />
      <Stack.Screen name={RouteName.MomentDetails} component={MomentDetails} />
      <Stack.Group screenOptions={{ presentation: 'fullScreenModal' }}>
        <Stack.Screen name={RouteName.PinnedBoard} component={PinnedBoard} />
        <Stack.Screen name={RouteName.Search} component={SearachPage} />
        <Stack.Screen name={RouteName.CreateGoal} component={CreateGoal} />
        <Stack.Screen name={RouteName.AllDetails} component={AllDetails} />
        <Stack.Screen name={RouteName.AddProcess} component={AddProcess} />
        <Stack.Screen name={RouteName.AddTag} component={AddTag} />
        <Stack.Screen name={RouteName.AddIndicator} component={AddIndicator} />
        <Stack.Screen name={RouteName.RememberMe} component={RememberMe} />
        <Stack.Screen name={RouteName.PinnedSelect} component={PinnedSelect} />
        <Stack.Screen name={RouteName.PromptSelect} component={PromptSelect} />
        <Stack.Screen name={RouteName.AddEmotion} component={AddEmotion} />
      </Stack.Group>
    </Stack.Navigator>
  )
}
