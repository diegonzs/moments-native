import { useCallback } from 'react'

import { Hashtag } from '../models'
import { useAddTagToMoment, useMomentByIdSnapshot } from './moments'
import { useObject, useQuery, useRealm } from './realm-hooks'

export const useAllTags = () => {
  return useQuery(Hashtag)
}

export const useTagById = (id: string) => {
  return useObject(Hashtag, new Realm.BSON.UUID(id))
}

export const useCreateTagOnMoment = (momentId: string) => {
  const realm = useRealm()
  const moment = useMomentByIdSnapshot(momentId)
  const addTag = useAddTagToMoment()
  return useCallback(
    (title: string) => {
      if (!moment) return
      let tag: Hashtag
      realm.write(() => {
        tag = new Hashtag(realm, title)
      })
      addTag(tag, moment)
    },
    [moment],
  )
}
