import { useAllIndicators } from '../../hooks/indicators'
import { IndicatorQuery } from '../../models'
import { MemoriesOptions } from '../../types'
import {
  TitleCountProps,
  TitleCountOnPressProps,
  TitleCount,
} from '../title-count'

const formatIndicator = (
  indicators: IndicatorQuery,
): Pick<TitleCountProps, 'id' | 'title' | 'count'>[] => {
  return indicators.map((indicator) => ({
    id: indicator._id.toHexString(),
    title: indicator.title,
    count: indicator.moments.length,
  }))
}

interface AllIndicatorsProps {
  onPressItem: (props: TitleCountOnPressProps) => void
  search?: string
}
export const AllIndicators: React.FC<AllIndicatorsProps> = ({
  onPressItem,
  search = '',
}) => {
  const indicators = useAllIndicators()
  const filteredIndicators = indicators.filtered('title CONTAINS[c] $0', search)
  const formattedIndicators = formatIndicator(filteredIndicators)
  return (
    <>
      {formattedIndicators.map((indicator) => (
        <TitleCount
          key={indicator.id}
          type={MemoriesOptions.Index}
          onPress={onPressItem}
          {...indicator}
        />
      ))}
    </>
  )
}
