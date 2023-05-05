import { cx } from 'classix'
import { useState } from 'react'

import { Chart } from '../components/chart'
import { Column } from '../components/column'
import { Dropdown, DropdownOptionProps } from '../components/dropdown'
import ChevronIcon from '../components/icons/chevron'
import { InfoCount } from '../components/insight/info-count'
import { Row } from '../components/row'
import { ScreenLayout } from '../components/screen-layout'
import { Typography } from '../components/typography'

const timeframeMap = {
  yesterday: 'Yesterday',
  today: 'Today',
  'this-week': 'This Week',
  'this-month': 'This Month',
  'this-year': 'This Year',
}

const TIMEFRAME_OPTIONS: DropdownOptionProps[] = Object.entries(
  timeframeMap,
).map(([value, label]) => ({ value, label }))

const mockInsightCount: {
  content: string
  count: number
  suffix?: string
}[][] = [
  [
    { content: 'Moments', count: 48 },
    { content: 'Images', count: 21 },
  ],
  [
    { content: 'Hashtags', count: 6 },
    { content: 'Audio lenght', count: 35.4, suffix: 'min' },
  ],
  [
    { content: 'Words', count: 43382 },
    { content: 'Video lenght', count: 1.2, suffix: 'h' },
  ],
]

export const Insights = () => {
  const [timeframeOption, setTimeframeOption] = useState(
    TIMEFRAME_OPTIONS[2].value,
  )
  return (
    <ScreenLayout>
      <Row className="justify-between items-center mb-6">
        <Typography variant="title" weight="700">
          Insights
        </Typography>
        <Dropdown options={TIMEFRAME_OPTIONS} onChange={setTimeframeOption}>
          <Row className="items-center">
            <ChevronIcon className="text-primary-60 mr-2" />
            <Typography variant="body" weight="400" className="text-primary-60">
              {timeframeMap[timeframeOption]}
            </Typography>
          </Row>
        </Dropdown>
      </Row>
      <Typography variant="body" weight="600" className="text-primary-60 mb-4">
        Tracked moments
      </Typography>
      <Row className="bg-background-nav rounded-[20px] px-5 py-4 justify-between mb-8">
        {mockInsightCount.map((countTuple, ti) => (
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
          <Typography variant="body" weight="600" className="text-primary mb-4">
            1. #Family
          </Typography>
          <Typography variant="body" weight="600" className="text-primary mb-4">
            2. #Sidehustling
          </Typography>
          <Typography variant="body" weight="600" className="text-primary">
            3. #Foodporn
          </Typography>
        </Column>
      </Column>
    </ScreenLayout>
  )
}
