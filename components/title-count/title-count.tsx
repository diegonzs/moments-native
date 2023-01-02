import { Pressable } from 'react-native'

import { Row } from '../row'
import { Typography } from '../typography'

export type TitleCountOnPressProps = {
  id: string
  type: string
}

interface TitleCountProps {
  id: string
  type: string
  count: number
  title: string
  onPress: (props: TitleCountOnPressProps) => void
}
export const TitleCount: React.FC<TitleCountProps> = ({
  id,
  type,
  count,
  title,
  onPress,
}) => {
  const onPressHandler = () => onPress({ id, type })
  return (
    <Pressable onPress={onPressHandler}>
      <Row className="justify-between items-center">
        <Typography variant="subtitle" weight="600" className="text-primary">
          {title}
        </Typography>
        <Typography variant="body" weight="400" className="text-primary-40">
          {count} {count > 1 ? 'moments' : 'moment'}
        </Typography>
      </Row>
    </Pressable>
  )
}
