import { useNavigation, useRoute } from '@react-navigation/native'
import { useEffect, useMemo, useState } from 'react'

import { AddTypeLayout, TypeContentProps } from '../components/add-type-layout'
import {
  useAllIndicators,
  useCreateIndicatorOnMoment,
} from '../hooks/indicators'
import {
  useAddIndicatorToMoment,
  useMomentById,
  useRemoveIndicatorFromMoment,
} from '../hooks/moments'
import { RootStackScreenProps, RouteName } from '../types/routes'

type navigationType = RootStackScreenProps<RouteName.AddIndicator>['navigation']
type routeType = RootStackScreenProps<RouteName.AddIndicator>['route']

const content: TypeContentProps = {
  placeholder: {
    empty: 'Insert an index...',
    default: 'Select or insert an index...',
  },
  title: 'Highlight special moments in your life',
  description: `Special moments you want to remember, milestones, etc.`,
  allActive: '',
  all: 'All index',
  new: 'Create new index',
}

export const AddIndicator = () => {
  const nav = useNavigation<navigationType>()
  const route = useRoute<routeType>()
  const [search, setSearch] = useState<string>('')
  const { momentId } = route.params
  const moment = useMomentById(momentId)

  const indicators = useAllIndicators()
  const createIndicatorOnMoment = useCreateIndicatorOnMoment(momentId)
  const addIndicatorToMoment = useAddIndicatorToMoment()
  const removeIndicatorFromMoment = useRemoveIndicatorFromMoment()

  const filteredIndicators = indicators.filter(
    (indicator) =>
      indicator._id.toHexString() !== moment?.indicator?._id.toHexString() &&
      indicator.title.toLowerCase().includes(search.toLowerCase()),
  )

  const indicatorsOnMoment = useMemo(() => {
    if (!moment) return []
    return moment.indicator?._id ? [moment.indicator] : []
  }, [moment])

  const filteredIndicatorsOnMoment = indicatorsOnMoment.filter((indicator) =>
    indicator.title.toLowerCase().includes(search.toLowerCase()),
  )

  const showCreateIndicator = useMemo(() => {
    if (!search) return false
    return !indicators.find(
      (indicator) => indicator.title.toLowerCase() === search.toLowerCase(),
    )
  }, [filteredIndicators, search])

  const onClosePress = () => {
    if (nav.canGoBack) return nav.goBack()
    return nav.navigate(RouteName.Tabs, { screen: RouteName.Home })
  }

  const handleRemovePress = () => {
    if (!moment) return
    removeIndicatorFromMoment(moment)
  }

  const handleCreatePress = () => {
    if (!moment) return
    createIndicatorOnMoment(search)
    setSearch('')
  }

  const handleAddPress = (indicatorId: string) => {
    if (!moment) return
    const indicator = indicators.find(
      (indicator) => indicator._id.toHexString() === indicatorId,
    )
    addIndicatorToMoment(indicator, moment)
    setSearch('')
  }

  useEffect(() => {
    if (!momentId || !moment) {
      nav.navigate(RouteName.Tabs, { screen: RouteName.Home })
    }
  }, [momentId, moment, nav])

  if (!momentId || !moment) return

  return (
    <AddTypeLayout
      showAll
      content={content}
      onClosePress={onClosePress}
      search={search}
      onChangeText={setSearch}
      onAddPress={handleAddPress}
      onRemovePress={handleRemovePress}
      onCreatePress={handleCreatePress}
      showCreate={showCreateIndicator}
      filteredAll={filteredIndicators.map((indicator) => ({
        id: indicator._id.toHexString(),
        title: indicator.title,
      }))}
      filteredOnMoment={filteredIndicatorsOnMoment.map((indicator) => ({
        id: indicator._id.toHexString(),
        title: indicator.title,
      }))}
    />
  )
}
