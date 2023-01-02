import { Row } from '../row'
import { Typography } from '../typography'

interface TagProps {
  content: string
}

export const Tag: React.FC<TagProps> = ({ content }) => {
  return (
    <Row className="py-1 px-2 bg-secondary-soft rounded-lg">
      <Typography variant="tag" weight="400" className="text-primary">
        {content}
      </Typography>
    </Row>
  )
}
