import { useAllTags } from '../../hooks/tags'
import { HashtagQuery } from '../../models'
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
  search?: string
}

export const AllHashtags: React.FC<allHashtagsProps> = ({
  onPressItem,
  search = '',
}) => {
  const hashtags = useAllTags()
  const filteredHashtags = hashtags.filtered('text CONTAINS[c] $0', search)
  const formattedHashtags = formatHashtags(filteredHashtags)
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
