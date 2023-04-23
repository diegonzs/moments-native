import { useRef } from 'react'
import { FlatList, Pressable, TextInput, View } from 'react-native'

import { Column } from '../column'
import CloseIcon from '../icons/close'
import { Input } from '../input'
import { Row } from '../row'
import { ScreenLayout } from '../screen-layout'
import { Typography } from '../typography'

export type TypeElements = {
  id: string
  title: string
}

export type TypeContentProps = {
  placeholder: {
    empty: string
    default: string
  }
  title: string
  description: string
  allActive: string
  all: string
  new: string
}

interface AddTypeLayoutProps {
  search: string
  filteredOnMoment: TypeElements[]
  filteredAll: TypeElements[]
  content: TypeContentProps
  showCreate: boolean
  showAll?: boolean
  onChangeText: (value: string) => void
  onClosePress: () => void
  onAddPress: (id: string) => void
  onRemovePress: (id: string) => void
  onCreatePress: () => void
}

export const AddTypeLayout: React.FC<AddTypeLayoutProps> = ({
  search,
  filteredOnMoment,
  filteredAll,
  content,
  showCreate,
  showAll = false,
  onChangeText,
  onClosePress,
  onAddPress,
  onRemovePress,
  onCreatePress,
}) => {
  const inputRef = useRef<TextInput | null>()
  return (
    <ScreenLayout withScroll={false}>
      <Row className="justify-between items-center mb-5">
        <Pressable onPress={onClosePress} hitSlop={10}>
          <CloseIcon className="text-primary" />
        </Pressable>
      </Row>
      <Input
        inputRef={inputRef}
        value={search}
        onChangeText={onChangeText}
        placeholder={content.placeholder.default}
      />
      <Typography
        variant="body"
        weight="600"
        className="text-primary-60 mt-6 mb-2"
      >
        {content.title}
      </Typography>
      <Typography
        variant="body"
        weight="400"
        className="text-primary-40 leading-5 mb-8"
      >
        {content.description}
      </Typography>
      {!!filteredOnMoment.length && (
        <Column className="mb-8">
          <Typography
            variant="body"
            className="text-primary-60 mb-4"
            weight="600"
          >
            Selected
          </Typography>
          <FlatList
            scrollEnabled={false}
            data={filteredOnMoment}
            keyExtractor={(item) => item.id}
            ItemSeparatorComponent={() => <View className="h-4" />}
            renderItem={({ item: process }) => (
              <Row className="justify-between items-center">
                <Typography
                  variant="body"
                  weight="500"
                  className="text-primary"
                >
                  {process.title}
                </Typography>
                <Pressable onPress={() => onRemovePress(process.id)}>
                  <Typography variant="caption" className="text-delete">
                    Remove
                  </Typography>
                </Pressable>
              </Row>
            )}
          />
        </Column>
      )}
      {!!filteredAll.length && (
        <Column className="mb-4">
          <Typography
            variant="body"
            className="text-primary-60 mb-4"
            weight="600"
          >
            {showAll || search ? content.all : content.allActive}
          </Typography>
          <FlatList
            scrollEnabled={false}
            data={filteredAll}
            keyExtractor={(item) => item.id}
            ItemSeparatorComponent={() => <View className="h-4" />}
            renderItem={({ item }) => (
              <Pressable onPress={() => onAddPress(item.id)}>
                <Typography
                  variant="body"
                  weight="500"
                  className="text-primary"
                >
                  {item.title}
                </Typography>
              </Pressable>
            )}
          />
        </Column>
      )}
      {showCreate && (
        <Pressable onPress={onCreatePress}>
          <Typography
            variant="subtitle"
            className="text-secondary"
            weight="600"
          >
            {content.new} "{search}"
          </Typography>
        </Pressable>
      )}
    </ScreenLayout>
  )
}
