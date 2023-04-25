import { useAllMoments } from '../../hooks/moments'
import { CardList } from '../card-list'

interface AllMomentsProps {
  search?: string
}

export const AllMoments: React.FC<AllMomentsProps> = ({ search = '' }) => {
  const moments = useAllMoments()
  const filteredMoments = moments.filtered('content CONTAINS[c] $0', search)
  return <CardList moments={filteredMoments} />
}
