import { useNavigation, useRoute } from '@react-navigation/native'
import { useEffect, useMemo, useState } from 'react'

import { AddTypeLayout, TypeContentProps } from '../components/add-type-layout'
import {
  useAddTagToMoment,
  useMomentById,
  useRemoveTagFromMoment,
} from '../hooks/moments'
import { useAllTags, useCreateTagOnMoment } from '../hooks/tags'
import { RootStackScreenProps, RouteName } from '../types/routes'

type navigationType = RootStackScreenProps<RouteName.AddTag>['navigation']
type routeType = RootStackScreenProps<RouteName.AddTag>['route']

const content: TypeContentProps = {
  placeholder: {
    empty: 'Insert a tag...',
    default: 'Select or insert a tag...',
  },
  title: 'Categorize moments',
  description: `Group moments by topics, e.g #food`,
  allActive: '',
  all: 'All tags',
  new: 'Create new tag',
}

export const AddTag = () => {
  const nav = useNavigation<navigationType>()
  const route = useRoute<routeType>()
  const [search, setSearch] = useState<string>('')
  const { momentId } = route.params
  const moment = useMomentById(momentId)

  const tags = useAllTags()
  const createTagOnMoment = useCreateTagOnMoment(momentId)
  const addTagToMoment = useAddTagToMoment()
  const removeTagFromMoment = useRemoveTagFromMoment()

  const tagsInMomentMap: Record<string, boolean> = moment?.hashtags.reduce(
    (acc, tags) => {
      acc[tags._id.toHexString()] = true
      return acc
    },
    {},
  )

  const filteredTags = tags.filter(
    (tag) =>
      !tagsInMomentMap[tag._id.toHexString()] &&
      tag.text.toLowerCase().includes(search.toLowerCase()),
  )

  const filteredTagsOnMoment = moment.hashtags.filter((tag) =>
    tag.text.toLowerCase().includes(search.toLowerCase()),
  )

  const showCreateTag = useMemo(() => {
    if (!search) return false
    return !tags.find(
      (process) => process.text.toLowerCase() === search.toLowerCase(),
    )
  }, [filteredTags, search])

  const onClosePress = () => {
    if (nav.canGoBack) return nav.goBack()
    return nav.navigate(RouteName.Tabs, { screen: RouteName.Home })
  }

  const handleRemovePress = (processId: string) => {
    if (!moment) return
    const tag = tags.find((tag) => tag._id.toHexString() === processId)
    removeTagFromMoment(tag, moment)
  }

  const handleCreatePress = () => {
    if (!moment) return
    createTagOnMoment(search)
    setSearch('')
  }

  const handleAddPress = (processId: string) => {
    if (!moment) return
    const tag = tags.find((tag) => tag._id.toHexString() === processId)
    addTagToMoment(tag, moment)
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
      showCreate={showCreateTag}
      filteredAll={filteredTags.map((process) => ({
        id: process._id.toHexString(),
        title: process.text,
      }))}
      filteredOnMoment={filteredTagsOnMoment.map((process) => ({
        id: process._id.toHexString(),
        title: process.text,
      }))}
    />
  )
}
