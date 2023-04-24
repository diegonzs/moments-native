import { BottomTabScreenProps } from '@react-navigation/bottom-tabs'
import {
  CompositeScreenProps,
  NavigatorScreenParams,
} from '@react-navigation/native'
import type { NativeStackScreenProps } from '@react-navigation/native-stack'

export enum RouteName {
  Tabs = 'Tabs',
  Home = 'Home',
  Memories = 'Memories',
  Insights = 'Insights',
  Goals = 'Goals',
  Settings = 'Settings',
  TypeDetails = 'TypeDetails',
  PinnedBoard = 'PinnedBoard',
  Search = 'Search',
  CreateGoal = 'CreateGoal',
  MomentDetails = 'MomentDetails',
  AllDetails = 'AllDetails',
  AddType = 'AddType',
  AddProcess = 'AddProcess',
  AddTag = 'AddTag',
  AddIndicator = 'AddIndicator',
  RememberMe = 'RememberMe',
  PinnedSelect = 'PinnedSelect',
  PromptSelect = 'PromptSelect',
  AddEmotion = 'AddEmotion',
}

export type RouteTabParamList = {
  [RouteName.Home]: undefined
  [RouteName.Memories]: undefined
  [RouteName.Insights]: undefined
  [RouteName.Goals]: undefined
  [RouteName.Settings]: undefined
}

export type RouteStackParamList = {
  [RouteName.Tabs]: NavigatorScreenParams<RouteTabParamList>
  [RouteName.Search]: undefined
  [RouteName.CreateGoal]: undefined
  [RouteName.MomentDetails]: {
    id: string
    isEditMode: boolean
  }
  [RouteName.AllDetails]: {
    id: string
  }
  [RouteName.RememberMe]: {
    momentId: string
  }
  [RouteName.AddEmotion]: {
    momentId: string
  }
  [RouteName.PinnedSelect]: {
    momentId: string
  }
  [RouteName.PromptSelect]: {
    momentId: string
  }
  [RouteName.AddProcess]: {
    momentId: string
  }
  [RouteName.AddTag]: {
    momentId: string
  }
  [RouteName.AddIndicator]: {
    momentId: string
  }
  [RouteName.TypeDetails]: {
    type: string
    id: string
  }
  [RouteName.PinnedBoard]: {
    type: string
    id: string
  }
}

export type RootStackScreenProps<T extends keyof RouteStackParamList> =
  NativeStackScreenProps<RouteStackParamList, T>

export type RootTabScreenProps<T extends keyof RouteTabParamList> =
  CompositeScreenProps<
    BottomTabScreenProps<RouteTabParamList, T>,
    RootStackScreenProps<keyof RouteStackParamList>
  >
