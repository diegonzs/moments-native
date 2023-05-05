import { ReactElement } from 'react'
import { FlatList, Pressable, View } from 'react-native'

import { Row } from '../row'
import { Typography } from '../typography'

export interface OptionElementProps {
  id: string
  title: string
  icon: ReactElement
  action: () => void
}

interface OptionListProps {
  data: OptionElementProps[]
  cb?: () => void
}

const Option: React.FC<OptionElementProps> = ({ icon, title, action }) => {
  return (
    <Pressable onPress={action}>
      <Row className="items-center px-5 py-1">
        {icon}
        <Typography
          variant="body"
          weight="400"
          className="text-secondary-dark ml-6"
        >
          {title}
        </Typography>
      </Row>
    </Pressable>
  )
}

export const OptionList: React.FC<OptionListProps> = ({ data, cb }) => {
  return (
    <FlatList
      data={data}
      renderItem={({ item }) => (
        <Option
          {...item}
          action={() => {
            item.action()
            cb?.()
          }}
        />
      )}
      keyExtractor={(item) => item.id}
      ItemSeparatorComponent={() => <View className="h-5" />}
    />
  )
}
