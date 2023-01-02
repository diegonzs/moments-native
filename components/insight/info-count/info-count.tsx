import { commafy } from '../../../utils'
import { Column } from '../../column'
import { Typography } from '../../typography'

interface InfoCountProps {
  content: string
  count: number
  suffix?: string
  className?: string
}

export const InfoCount: React.FC<InfoCountProps> = ({
  content,
  count,
  suffix,
  className,
}) => {
  return (
    <Column className={className}>
      <Typography
        variant="caption"
        weight="600"
        className="text-primary-40 mb-1"
      >
        {content}
      </Typography>
      <Typography variant="subtitle" weight="600" className="text-primary">
        {commafy(count)} {suffix}
      </Typography>
    </Column>
  )
}
