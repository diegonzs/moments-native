import { Row } from '../../row'
import { Typography } from '../../typography'

interface OptionProps {
  icon: string
  content: string
}

export const Option: React.FC<OptionProps> = ({ icon, content }) => {
  return (
    <Row className="items-center px-6 py-4 bg-background-nav rounded-xl">
      <Typography variant="title" className="mr-5">
        {icon}
      </Typography>
      <Typography variant="body" weight="600">
        {content}
      </Typography>
    </Row>
  )
}
