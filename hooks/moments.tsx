import { useCallback } from 'react'

import { Moment, Process, Hashtag, Indicator } from '../models'
import { InsightTimeframe } from '../types'
import { getTimeframeRage } from '../utils'
import { useObject, useQuery, useRealm } from './realm-hooks'

export const useAllMoments = () => {
  return useQuery(Moment)
}

export const useAllMomentsByTimeframe = (timeframe: InsightTimeframe) => {
  const realm = useRealm()
  const { start, end } = getTimeframeRage(timeframe)
  return realm
    .objects<Moment>('Moment')
    .filtered('createdAt >= $0 && createdAt <= $1', start, end)
}

export const useMomentById = (id: string) => {
  return useObject(Moment, new Realm.BSON.UUID(id))
}

export const useMomentByIdSnapshot = (id: string) => {
  const realm = useRealm()
  const moment = realm.objectForPrimaryKey<Moment>(
    'Moment',
    new Realm.BSON.UUID(id),
  )
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

// Processes
export const useAddProcessToMoment = () => {
  const realm = useRealm()
  return useCallback((process: Process, moment: Moment) => {
    realm.write(() => {
      if (moment.processes.findIndex((p) => p._id === process._id) !== -1)
        return
      moment.processes.push(process)
    })
  }, [])
}

export const useRemoveProcessFromMoment = () => {
  const realm = useRealm()
  return useCallback((process: Process, moment: Moment) => {
    realm.write(() => {
      moment.processes.splice(moment.processes.indexOf(process), 1)
    })
  }, [])
}

// Tags
export const useAddTagToMoment = () => {
  const realm = useRealm()
  return useCallback((tag: Hashtag, moment: Moment) => {
    realm.write(() => {
      if (moment.hashtags.findIndex((t) => t._id === tag._id) !== -1) return
      moment.hashtags.push(tag)
    })
  }, [])
}

export const useRemoveTagFromMoment = () => {
  const realm = useRealm()
  return useCallback((tag: Hashtag, moment: Moment) => {
    realm.write(() => {
      moment.hashtags.splice(moment.hashtags.indexOf(tag), 1)
    })
  }, [])
}

// Indicators
export const useAddIndicatorToMoment = () => {
  const realm = useRealm()
  return useCallback((indicator: Indicator, moment: Moment) => {
    realm.write(() => {
      moment.indicator = indicator
    })
  }, [])
}

export const useRemoveIndicatorFromMoment = () => {
  const realm = useRealm()
  return useCallback((moment: Moment) => {
    realm.write(() => {
      moment.indicator = null
    })
  }, [])
}
