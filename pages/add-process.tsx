import { useNavigation, useRoute } from '@react-navigation/native'
import { useEffect, useMemo, useState } from 'react'

import { AddTypeLayout, TypeContentProps } from '../components/add-type-layout'
import {
  useAddProcessToMoment,
  useMomentById,
  useRemoveProcessFromMoment,
} from '../hooks/moments'
import { useAllProcesses, useCreateProcessOnMoment } from '../hooks/process'
import { RootStackScreenProps, RouteName } from '../types/routes'

type navigationType = RootStackScreenProps<RouteName.AddProcess>['navigation']
type routeType = RootStackScreenProps<RouteName.AddProcess>['route']

const content: TypeContentProps = {
  placeholder: {
    empty: 'Insert a process...',
    default: 'Select or insert a process...',
  },
  title: 'Give a purpose to your moments',
  description: `Don't track outcomes, focus if you are enjoying the process towards anything you are doing.`,
  allActive: 'All active processes',
  all: 'All processes',
  new: 'Create new process',
}

export const AddProcess = () => {
  const nav = useNavigation<navigationType>()
  const route = useRoute<routeType>()
  const [search, setSearch] = useState<string>('')
  const { momentId } = route.params
  const moment = useMomentById(momentId)
  const processes = useAllProcesses()
  const createProcessOnMoment = useCreateProcessOnMoment(momentId)
  const addProcessToMoment = useAddProcessToMoment()
  const removeProcessFromMoment = useRemoveProcessFromMoment()

  const processInMomentMap: Record<string, boolean> = moment?.processes.reduce(
    (acc, process) => {
      acc[process._id.toHexString()] = true
      return acc
    },
    {},
  )

  const filteredProcesses = processes.filter(
    (process) =>
      process.isActive &&
      !processInMomentMap[process._id.toHexString()] &&
      process.title.toLowerCase().includes(search.toLowerCase()),
  )

  const filteredProcessesOnMoment = moment.processes.filter((process) =>
    process.title.toLowerCase().includes(search.toLowerCase()),
  )

  const showCreateProcess = useMemo(() => {
    if (!search) return false
    return !processes.find(
      (process) => process.title.toLowerCase() === search.toLowerCase(),
    )
  }, [filteredProcesses, search])

  const onClosePress = () => {
    if (nav.canGoBack) return nav.goBack()
    return nav.navigate(RouteName.Tabs, { screen: RouteName.Home })
  }

  const handleRemovePress = (processId: string) => {
    if (!moment) return
    const process = processes.find(
      (process) => process._id.toHexString() === processId,
    )
    removeProcessFromMoment(process, moment)
  }

  const handleCreatePress = () => {
    if (!moment) return
    createProcessOnMoment(search)
    setSearch('')
  }

  const handleAddPress = (processId: string) => {
    if (!moment) return
    const process = processes.find(
      (process) => process._id.toHexString() === processId,
    )
    addProcessToMoment(process, moment)
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
      filteredAll={filteredProcesses.map((process) => ({
        id: process._id.toHexString(),
        title: process.title,
      }))}
      filteredOnMoment={filteredProcessesOnMoment.map((process) => ({
        id: process._id.toHexString(),
        title: process.title,
      }))}
      content={content}
      onClosePress={onClosePress}
      search={search}
      onChangeText={setSearch}
      onAddPress={handleAddPress}
      onRemovePress={handleRemovePress}
      onCreatePress={handleCreatePress}
      showCreate={showCreateProcess}
    />
  )
}
