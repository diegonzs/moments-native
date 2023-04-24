import { useQuery } from '../../hooks/realm-hooks'
import { Moment } from '../../models'
import { CardList } from '../card-list'

export const AllMoments = () => {
  const moments = useQuery(Moment)
  return <CardList moments={moments} />
}
