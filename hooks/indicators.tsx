import { useCallback } from 'react'

import { Indicator } from '../models'
import { useAddIndicatorToMoment, useMomentByIdSnapshot } from './moments'
import { useQuery, useRealm } from './realm-hooks'

export const useAllIndicators = () => {
  return useQuery(Indicator)
}

export const useCreateIndicatorOnMoment = (momentId: string) => {
  const realm = useRealm()
  const moment = useMomentByIdSnapshot(momentId)
  const addIndicator = useAddIndicatorToMoment()
  return useCallback(
    (title: string) => {
      if (!moment) return
      let indicator: Indicator
      realm.write(() => {
        indicator = new Indicator(realm, title)
      })
      addIndicator(indicator, moment)
    },
    [moment],
  )
}
