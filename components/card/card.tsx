import { useNavigation } from '@react-navigation/native'
import { Pressable } from 'react-native'

import { RootTabScreenProps, RouteName } from '../../types/routes'
import { Column } from '../column'
import { Tag } from '../tag'
import { Typography } from '../typography'

type ScreenNavigationType = RootTabScreenProps<RouteName.Home>['navigation']

export const Card: React.FC = () => {
  const nav = useNavigation<ScreenNavigationType>()
  const goToDetailsMoment = () => {
    nav.navigate(RouteName.MomentDetails, { isEditMode: false, id: '1' })
  }
  return (
    <Pressable onPress={goToDetailsMoment}>
      <Column className="rounded-[20px] bg-background-nav p-4 items-start">
        <Typography
          weight="500"
          variant="caption"
          className="text-primary-40 mb-2"
        >
          20 APR
        </Typography>
        <Tag content="Phrases" />
        <Typography
          variant="content"
          weight="400"
          className="text-primary mt-2"
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis et
          cursus blandit nibh...
        </Typography>
      </Column>
    </Pressable>
  )
}
