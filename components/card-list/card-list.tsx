import { View } from 'react-native'

import { Card } from '../card'
import { Column } from '../column'
import { Row } from '../row'

export const CardList = () => {
  return (
    <Row className="justify-between">
      <Column className="w-[48%]">
        <Card />
        <View className="h-3" />
        <Card />
        <View className="h-3" />
        <Card />
        <View className="h-3" />
        <Card />
      </Column>
      <Column className="w-[48%]">
        <Card />
        <View className="h-3" />
        <Card />
        <View className="h-3" />
        <Card />
        <View className="h-3" />
        <Card />
      </Column>
    </Row>
  )
}
