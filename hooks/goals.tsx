import { useCallback } from 'react'

import { Goal } from '../models'
import { useQuery, useRealm } from './realm-hooks'

export const useAllGoals = () => {
  return useQuery(Goal)
}

export const useCreateGoal = () => {
  const realm = useRealm()
  return useCallback((title: string) => {
    realm.write(() => {
      return new Goal(realm, { title })
    })
  }, [])
}

export const useToggleCompleted = (goal: Goal) => {
  const realm = useRealm()
  return useCallback(() => {
    realm.write(() => {
      goal.isCompleted = !goal.isCompleted
      if (goal.isCompleted) {
        goal.completedAt = new Date()
      }
    })
  }, [])
}

export const useDeleteGoal = (goal: Goal) => {
  const realm = useRealm()
  return useCallback(() => {
    realm.write(() => {
      realm.delete(goal)
    })
  }, [])
}
