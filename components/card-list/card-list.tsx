import { Fragment } from 'react'
import { View } from 'react-native'

import { Moment } from '../../models'
import { Card } from '../card'
import { Column } from '../column'
import { Row } from '../row'

interface CardListProps {
  moments: Realm.Results<Moment & Realm.Object<unknown, never>>
}

export const CardList: React.FC<CardListProps> = ({ moments }) => {
  const momentsLeft = moments.slice(0, Math.round(moments.length / 2))
  const momentsRight = moments.slice(
    Math.round(moments.length / 2),
    moments.length,
  )

  return (
    <Row className="justify-between">
      <Column className="w-[48%]">
        {momentsLeft.map((moment) => (
          <Fragment key={moment._id.toHexString()}>
            <Card moment={moment} />
            <View className="h-3" />
          </Fragment>
        ))}
      </Column>
      <Column className="w-[48%]">
        {momentsRight.map((moment) => (
          <Fragment key={moment._id.toHexString()}>
            <Card moment={moment} />
            <View className="h-3" />
          </Fragment>
        ))}
      </Column>
    </Row>
  )
}
