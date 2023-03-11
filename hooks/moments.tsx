import { useCallback } from 'react'

import { Moment } from '../models'
import { useObject, useRealm } from './realm-hooks'

export const useMomentById = (id: string) => {
  const moment = useObject(Moment, new Realm.BSON.UUID(id))
  return moment
}

export const useAddEmotion = () => {
  const realm = useRealm()
  return useCallback((emotion: string, moment: Moment) => {
    realm.write(() => {
      moment.emotion = emotion
    })
  }, [])
}

export const useTogglePinnedHome = () => {
  const realm = useRealm()
  return useCallback((moment: Moment) => {
    realm.write(() => {
      moment.isPinnedHome = !moment.isPinnedHome
    })
  }, [])
}

export const useTogglePinnedProcess = () => {
  const realm = useRealm()
  return useCallback((moment: Moment) => {
    realm.write(() => {
      moment.isPinnedProcess = !moment.isPinnedProcess
    })
  }, [])
}
