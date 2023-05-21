import dayjs from 'dayjs'

import { InsightTimeframe } from '../types'

export const commafy = (num: number) => {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
}

export const wait = (num: number) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(true)
    }, num)
  })
}

export const countWords = (str: string) => {
  return str.split(/\s+/).length
}

export const getYestedayRange = () => {
  const yesterday = dayjs().subtract(1, 'day')
  const start = yesterday.startOf('day').toDate()
  const end = yesterday.endOf('day').toDate()
  return { start, end }
}

export const getTodayRange = () => {
  const today = dayjs()
  const start = today.startOf('day').toDate()
  const end = today.endOf('day').toDate()
  return { start, end }
}

export const getThisWeekRange = () => {
  const start = dayjs().startOf('week').toDate()
  const end = dayjs().endOf('week').toDate()
  return { start, end }
}

export const getThisMonthRange = () => {
  const start = dayjs().startOf('month').toDate()
  const end = dayjs().endOf('month').toDate()
  return { start, end }
}

export const getThisYearRange = () => {
  const start = dayjs().startOf('year').toDate()
  const end = dayjs().endOf('year').toDate()
  return { start, end }
}

export const getTimeframeRage = (timeframe: InsightTimeframe) => {
  switch (timeframe) {
    case InsightTimeframe.Yesterday:
      return getYestedayRange()
    case InsightTimeframe.Today:
      return getTodayRange()
    case InsightTimeframe.ThisWeek:
      return getThisWeekRange()
    case InsightTimeframe.ThisMonth:
      return getThisMonthRange()
    case InsightTimeframe.ThisYear:
      return getThisYearRange()
    default:
      return getTodayRange()
  }
}
