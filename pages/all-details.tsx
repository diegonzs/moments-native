import { useNavigation, useRoute } from '@react-navigation/native'
import { cx } from 'classix'
import { Pressable, View } from 'react-native'
import { FlatList } from 'react-native-gesture-handler'

import CloseIcon from '../components/icons/close'
import { Row } from '../components/row'
import { ScreenLayout } from '../components/screen-layout'
import { Typography } from '../components/typography'
import { emotionToEmoji } from '../constants/emotions'
import { useMomentById } from '../hooks/moments'
import { RootStackScreenProps, RouteName } from '../types/routes'

type navigationType = RootStackScreenProps<RouteName.AllDetails>['navigation']
type routeType = RootStackScreenProps<RouteName.AllDetails>['route']

const RowTitle: React.FC<{ title: string }> = ({ title }) => {
  return (
    <Typography
      variant="caption"
      className="w-[85px] text-primary mr-6"
      weight="500"
    >
      {title}
    </Typography>
  )
}

const RowAction: React.FC<{
  title: string
  onPress: () => void
  className?: string
}> = ({ title, onPress, className }) => {
  return (
    <Pressable onPress={onPress} hitSlop={10}>
      <Row className="h-[18px] items-center">
        <Typography
          className={cx('text-secondary', className)}
          variant="caption"
        >
          {title}
        </Typography>
      </Row>
    </Pressable>
  )
}

interface RowValueProps {
  title: string
  onPress?: () => void
}
const RowValue: React.FC<RowValueProps> = ({ title, onPress }) => {
  return (
    <Pressable onPress={onPress}>
      <Row className="px-1 py-0.5 bg-secondary-light rounded-[4px]">
        <Typography
          variant="caption"
          weight="500"
          className="text-background-nav"
        >
          {title}
        </Typography>
      </Row>
    </Pressable>
  )
}

interface RowListProps {
  title: string
  data: RowValueProps[] | string
  footer?: {
    label?: string
    onPress?: () => void
  }
}
const RowList: React.FC<RowListProps> = ({
  data,
  title,
  footer = {
    label: 'Add',
  },
}) => {
  return (
    <Row className="items-center">
      <RowTitle title={title} />
      {Array.isArray(data) && (
        <FlatList
          data={data}
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => <RowValue {...item} />}
          keyExtractor={({ title }) => title}
          ItemSeparatorComponent={() => <View className="w-2" />}
          ListFooterComponentStyle={{ marginLeft: data.length ? 12 : 0 }}
          ListFooterComponent={
            <RowAction title={footer.label || 'Add'} onPress={footer.onPress} />
          }
          horizontal
        />
      )}
      {typeof data === 'string' && (
        <Row className="items-center">
          <Typography className="text-primary mr-2" variant="caption">
            {data}
          </Typography>
          <RowAction title={footer.label} onPress={footer.onPress} />
        </Row>
      )}
    </Row>
  )
}

export const AllDetails: React.FC = () => {
  const nav = useNavigation<navigationType>()
  const route = useRoute<routeType>()
  const momentId = route.params.id
  const moment = useMomentById(momentId)
  const emotion = moment.emotion ? emotionToEmoji(moment.emotion) : ''
  const onPressBack = () => {
    if (nav.canGoBack) return nav.goBack()
    return nav.navigate(RouteName.Tabs, { screen: RouteName.Home })
  }
  const data: RowListProps[] = [
    {
      title: 'Processes',
      data: moment.processes.map((process) => ({ title: process.title })),
      footer: {
        label: 'Add',
        onPress: () =>
          nav.navigate(RouteName.AddProcess, {
            momentId,
          }),
      },
    },
    {
      title: 'Emotion',
      data: emotion,
      footer: {
        label: emotion ? 'Change' : 'Add',
        onPress: () => nav.navigate(RouteName.AddEmotion, { momentId }),
      },
    },
    {
      title: 'Tags',
      data: moment.hashtags.map((hashtag) => ({ title: hashtag.text })),
      footer: {
        label: 'Add',
        onPress: () =>
          nav.navigate(RouteName.AddTag, {
            momentId,
          }),
      },
    },
    {
      title: 'Index',
      data: moment.indicator?.title ? [{ title: moment.indicator.title }] : [],
      footer: {
        label: moment.indicator?._id ? 'Change' : 'Add',
        onPress: () =>
          nav.navigate(RouteName.AddIndicator, {
            momentId,
          }),
      },
    },
    {
      title: 'Pinned',
      data: [],
      footer: {
        label: 'Select',
        onPress: () =>
          nav.navigate(RouteName.PinnedSelect, {
            momentId,
          }),
      },
    },
    {
      title: 'Remember me',
      data: 'Disabled',
      footer: {
        label: 'Change',
        onPress: () => nav.navigate(RouteName.RememberMe, { momentId }),
      },
    },
    {
      title: 'Created',
      data: '1 Nov 2022, 02:34pm',
      footer: {
        label: 'Change',
      },
    },
  ]
  return (
    <ScreenLayout withScroll={false}>
      <Row className="mb-4">
        <Pressable onPress={onPressBack} hitSlop={10}>
          <CloseIcon className="text-primary" />
        </Pressable>
      </Row>
      <Typography variant="title" className="text-primary mb-8" weight="700">
        Details
      </Typography>
      <FlatList
        data={data}
        renderItem={({ item }) => <RowList {...item} />}
        ItemSeparatorComponent={() => <View className="h-4" />}
      />
    </ScreenLayout>
  )
}
