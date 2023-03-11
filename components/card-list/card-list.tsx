import { Fragment } from 'react'
import { View } from 'react-native'

import { useQuery } from '../../hooks/realm-hooks'
import { Moment } from '../../models'
import { Card } from '../card'
import { Column } from '../column'
import { Row } from '../row'

export const CardList = () => {
  const moments = useQuery(Moment)
  const momentsLeft = moments.slice(0, moments.length / 2)
  const momentsRight = moments.slice(moments.length / 2, moments.length)

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
