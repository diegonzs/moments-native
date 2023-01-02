import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import { TabBarIcon, TabBarLabel } from '../components/tab-bar'
import { Goals } from '../pages/goals'
import { Home } from '../pages/home'
import { Insights } from '../pages/insights'
import { Memories } from '../pages/memories'
import { Settings } from '../pages/settings'
import { RouteName, RouteTabParamList } from '../types/routes'

const Tab = createBottomTabNavigator<RouteTabParamList>()

export const AppTabs = () => {
  return (
    <Tab.Navigator
      initialRouteName={RouteName.Home}
      backBehavior="history"
      screenOptions={{
        tabBarLabelPosition: 'below-icon',
        headerShown: false,
      }}
    >
      <Tab.Screen
        name={RouteName.Home}
        component={Home}
        options={{
          tabBarLabel: ({ focused }) => (
            <TabBarLabel label="Home" focused={focused} />
          ),
          tabBarIcon: ({ focused }) => (
            <TabBarIcon route={RouteName.Home} focused={focused} />
          ),
        }}
      />
      <Tab.Screen
        name={RouteName.Memories}
        component={Memories}
        options={{
          tabBarLabel: ({ focused }) => (
            <TabBarLabel label="Memories" focused={focused} />
          ),
          tabBarIcon: ({ focused }) => (
            <TabBarIcon route={RouteName.Memories} focused={focused} />
          ),
        }}
      />
      <Tab.Screen
        name={RouteName.Insights}
        component={Insights}
        options={{
          tabBarLabel: ({ focused }) => (
            <TabBarLabel label="Insights" focused={focused} />
          ),
          tabBarIcon: ({ focused }) => (
            <TabBarIcon route={RouteName.Insights} focused={focused} />
          ),
        }}
      />
      <Tab.Screen
        name={RouteName.Goals}
        component={Goals}
        options={{
          tabBarLabel: ({ focused }) => (
            <TabBarLabel label="Goals" focused={focused} />
          ),
          tabBarIcon: ({ focused }) => (
            <TabBarIcon route={RouteName.Goals} focused={focused} />
          ),
        }}
      />
      <Tab.Screen
        name={RouteName.Settings}
        component={Settings}
        options={{
          tabBarLabel: ({ focused }) => (
            <TabBarLabel label="Settings" focused={focused} />
          ),
          tabBarIcon: ({ focused }) => (
            <TabBarIcon route={RouteName.Settings} focused={focused} />
          ),
        }}
      />
    </Tab.Navigator>
  )
}
