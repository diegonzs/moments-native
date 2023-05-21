import { useNavigation } from '@react-navigation/native'
import { cx } from 'classix'
import { useMemo } from 'react'
import { Pressable } from 'react-native'

import { Chart } from '../components/chart'
import { Column } from '../components/column'
import { Dropdown, DropdownOptionProps } from '../components/dropdown'
import ChevronIcon from '../components/icons/chevron'
import { InfoCount } from '../components/insight/info-count'
import { Row } from '../components/row'
import { ScreenLayout } from '../components/screen-layout'
import { Typography } from '../components/typography'
import { useAllMomentsByTimeframe } from '../hooks/moments'
import { useAppStore } from '../store/useStore'
import { InsightTimeframe, MemoriesOptions } from '../types'
import { RootTabScreenProps, RouteName } from '../types/routes'
import { countWords, getTimeframeRage } from '../utils'

const timeframeMap = {
  [InsightTimeframe.Yesterday]: 'Yesterday',
  [InsightTimeframe.Today]: 'Today',
  [InsightTimeframe.ThisWeek]: 'This Week',
  [InsightTimeframe.ThisMonth]: 'This Month',
  [InsightTimeframe.ThisYear]: 'This Year',
}

const TIMEFRAME_OPTIONS: DropdownOptionProps[] = Object.entries(
  timeframeMap,
).map(([value, label]) => ({ value, label }))

type InsightCountProps = {
  content: string
  count: number
  suffix?: string
}

type navigationType = RootTabScreenProps<RouteName.Insights>['navigation']

export const Insights = () => {
  const nav = useNavigation<navigationType>()
  const timeframeOption = useAppStore((state) => state.currentInsightTimeframe)
  const { start, end } = getTimeframeRage(timeframeOption)
  const setTimeframeOption = useAppStore(
    (state) => state.setCurrentInsightTimeframe,
  )

  const moments = useAllMomentsByTimeframe(timeframeOption)
  const insightsData = useMemo<InsightCountProps[][]>(() => {
    const momentsCount = moments.length
    // const imagesCount = moments.reduce(
    //   (acc, curr) => acc + curr.images.length,
    //   0,
    // )
    const hashtagsCount = moments.reduce(
      (acc, curr) => acc + curr.hashtags.length,
      0,
    )

    const wordsCount = moments.reduce(
      (acc, curr) => acc + countWords(curr.content),
      0,
    )

    return [
      [
        { content: 'Moments', count: momentsCount },
        // { content: 'Images', count: imagesCount },
      ],
      [
        { content: 'Hashtags', count: hashtagsCount },
        // { content: 'Audio lenght', count: audioLength, suffix: 'min' },
      ],
      [
        { content: 'Words', count: wordsCount },
        // { content: 'Video lenght', count: videoLength, suffix: 'h' },
      ],
    ]
  }, [moments])

  const mostUsedHashtags = useMemo(() => {
    const hashtags = moments.reduce((acc, curr) => {
      curr.hashtags.forEach((hashtag) => {
        if (acc[hashtag._id.toHexString()]) {
          acc[hashtag._id.toHexString()] = {
            ...acc[hashtag._id.toHexString()],
            count: acc[hashtag._id.toHexString()].count + 1,
          }
        } else {
          acc[hashtag._id.toHexString()] = {
            count: 1,
            text: hashtag.text,
          }
        }
      })
      return acc
    }, {} as Record<string, { count: number; text: string }>)
    return Object.entries(hashtags)
      .sort((a, b) => b[1].count - a[1].count)
      .map(([id, { count, text }]) => ({ id, count, text }))
  }, [moments])

  const handleTimeframeChange = (value: string) => {
    setTimeframeOption(value as InsightTimeframe)
  }

  const handleHashtagPress = (hashtagId: string) => {
    nav.navigate(RouteName.TypeDetails, {
      id: hashtagId,
      type: MemoriesOptions.Tags,
      start: start.toString(),
      end: end.toString(),
    })
  }

  return (
    <ScreenLayout>
      <Row className="justify-between items-center mb-6">
        <Typography variant="title" weight="700">
          Insights
        </Typography>
        <Dropdown options={TIMEFRAME_OPTIONS} onChange={handleTimeframeChange}>
          <Row className="items-center">
            <ChevronIcon className="text-primary-60 mr-2" />
            <Typography variant="body" weight="400" className="text-primary-60">
              {timeframeMap[timeframeOption]}
            </Typography>
          </Row>
        </Dropdown>
      </Row>
      {moments.length === 0 ? (
        <Typography variant="body" weight="400" className="text-primary-60">
          No moments tracked yet
        </Typography>
      ) : (
        <>
          <Typography
            variant="body"
            weight="600"
            className="text-primary-60 mb-4"
          >
            Tracked moments
          </Typography>
          <Row className="bg-background-nav rounded-[20px] px-5 py-4 justify-between mb-8">
            {insightsData.map((countTuple, ti) => (
              <Column key={ti}>
                {countTuple.map((count, i) => (
                  <InfoCount
                    key={count.content}
                    className={cx(countTuple.length - 1 !== i && 'mb-4')}
                    {...count}
                  />
                ))}
              </Column>
            ))}
          </Row>
          <Chart />
          <Column className="mt-8">
            <Typography
              variant="body"
              weight="600"
              className="text-primary-60 mb-4"
            >
              Most used hashtags
            </Typography>
            <Column>
              {mostUsedHashtags.map(({ id, count, text }, index) => (
                <Pressable onPress={() => handleHashtagPress(id)} key={id}>
                  <Typography
                    variant="body"
                    weight="600"
                    className="text-primary mb-4"
                  >
                    {index + 1}. {`#${text}`}
                  </Typography>
                </Pressable>
              ))}
            </Column>
          </Column>
        </>
      )}
    </ScreenLayout>
  )
}
