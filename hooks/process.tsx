import { useCallback } from 'react'

import { Process } from '../models'
import { useAddProcessToMoment, useMomentByIdSnapshot } from './moments'
import { useQuery, useRealm } from './realm-hooks'

export const useAllProcesses = () => {
  return useQuery(Process)
}

export const useCreateProcessOnMoment = (momentId: string) => {
  const realm = useRealm()
  const moment = useMomentByIdSnapshot(momentId)
  const addProcess = useAddProcessToMoment()
  return useCallback(
    (title: string) => {
      if (!moment) return
      let process: Process
      realm.write(() => {
        process = new Process(realm, title)
      })
      addProcess(process, moment)
    },
    [moment],
  )
}
