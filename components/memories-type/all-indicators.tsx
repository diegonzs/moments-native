import { useQuery } from '../../hooks/realm-hooks'
import { IndicatorQuery, Indicator } from '../../models'
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
}
export const AllIndicators: React.FC<AllIndicatorsProps> = ({
  onPressItem,
}) => {
  const indicators = useQuery(Indicator)
  const formattedIndicators = formatIndicator(indicators)
  return (
    <>
      {formattedIndicators.map((indicator) => (
        <TitleCount
          key={indicator.id}
          id={indicator.id}
          type={MemoriesOptions.Index}
          title={indicator.title}
          count={indicator.count}
          onPress={onPressItem}
        />
      ))}
    </>
  )
}
