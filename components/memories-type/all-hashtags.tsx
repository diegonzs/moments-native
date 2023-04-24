import { useQuery } from '../../hooks/realm-hooks'
import { Hashtag, HashtagQuery } from '../../models'
import { MemoriesOptions } from '../../types'
import {
  TitleCountProps,
  TitleCountOnPressProps,
  TitleCount,
} from '../title-count'

const formatHashtags = (
  indicators: HashtagQuery,
): Pick<TitleCountProps, 'id' | 'title' | 'count'>[] => {
  return indicators.map((indicator) => ({
    id: indicator._id.toHexString(),
    title: indicator.text,
    count: indicator.moments.length,
  }))
}

interface allHashtagsProps {
  onPressItem: (props: TitleCountOnPressProps) => void
}

export const AllHashtags: React.FC<allHashtagsProps> = ({ onPressItem }) => {
  const hashtags = useQuery(Hashtag)
  const formattedHashtags = formatHashtags(hashtags)
  return (
    <>
      {formattedHashtags.map((hashtag) => (
        <TitleCount
          key={hashtag.id}
          type={MemoriesOptions.Tags}
          onPress={onPressItem}
          {...hashtag}
        />
      ))}
    </>
  )
}
