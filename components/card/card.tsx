import { useNavigation } from '@react-navigation/native'
import dayjs from 'dayjs'
import { Pressable } from 'react-native'

import { Moment } from '../../models'
import { RootTabScreenProps, RouteName } from '../../types/routes'
import { Column } from '../column'
import { Row } from '../row'
import { Tag } from '../tag'
import { Typography } from '../typography'

type ScreenNavigationType = RootTabScreenProps<RouteName.Home>['navigation']

interface CardProps {
  moment: Moment
}

export const Card: React.FC<CardProps> = ({ moment }) => {
  const nav = useNavigation<ScreenNavigationType>()
  const id = moment._id.toHexString()
  const date = dayjs(moment.createdAt).format('D MMM').toUpperCase()
  const tags = moment.hashtags.slice(0, 2).map((tag) => tag.text)
  const content = `${moment.content.slice(0, 50).trimEnd()}${
    moment.content.length > 50 ? '...' : ''
  }`
  const goToDetailsMoment = () => {
    nav.navigate(RouteName.MomentDetails, { isEditMode: false, id })
  }

  return (
    <Pressable onPress={goToDetailsMoment}>
      <Column className="rounded-[20px] bg-background-nav p-4 items-start">
        <Typography
          weight="500"
          variant="caption"
          className="text-primary-40 mb-2"
        >
          {date}
        </Typography>
        <Row>
          {tags.map((tag) => (
            <Tag key={tag} content={tag} />
          ))}
        </Row>
        <Typography
          variant="content"
          weight="400"
          className="text-primary mt-2"
        >
          {content}
        </Typography>
      </Column>
    </Pressable>
  )
}
