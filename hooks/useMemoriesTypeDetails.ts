import { Moment } from '../models'
import { MemoriesOptions } from '../types'
import { useIndicatorById } from './indicators'
import { useProcessById } from './process'
import { useTagById } from './tags'

interface UseMemoriesTypeDetails {
  type: string
  id: string
}

interface UseMemoriesTypeDetailsReturn {
  title: string
  moments: Realm.Results<Moment>
}

export const useMemoriesTypeDetails = ({
  type,
  id,
}: UseMemoriesTypeDetails): UseMemoriesTypeDetailsReturn => {
  const process = useProcessById(id)
  const hashtag = useTagById(id)
  const indicator = useIndicatorById(id)
  switch (type) {
    case MemoriesOptions.Process:
      return {
        title: process?.title ?? '',
        moments: (process?.moments ?? []) as Realm.Results<Moment>,
      }
    case MemoriesOptions.Tags:
      return {
        title: hashtag?.text ?? '',
        moments: (hashtag?.moments ?? []) as Realm.Results<Moment>,
      }
    case MemoriesOptions.Index:
      return {
        title: indicator?.title ?? '',
        moments: (indicator?.moments ?? []) as Realm.Results<Moment>,
      }
    default:
      return null
  }
}
