import { useCallback } from 'react'

import { Moment, Process } from '../models'
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

export const useUpdateMomentContent = () => {
  const realm = useRealm()
  return useCallback((moment: Moment, content: string) => {
    realm.write(() => {
      moment.content = content
    })
  }, [])
}

export const useAddProcess = () => {
  const realm = useRealm()
  return useCallback((process: Process, moment: Moment) => {
    realm.write(() => {
      moment.processes.push(process)
    })
  }, [])
}

export const useCreateMoment = () => {
  const realm = useRealm()
  return useCallback(() => {
    let moment: Moment & Realm.Object
    realm.write(() => {
      moment = realm.create<Moment>('Moment', {})
    })
    return moment
  }, [])
}

export const useDeleteMoment = () => {
  const realm = useRealm()
  return useCallback((moment: Moment) => {
    realm.write(() => {
      realm.delete(moment)
    })
  }, [])
}
