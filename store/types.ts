import { InsightTimeframe, MemoriesOptions } from '../types'

export interface MemoriesSlice {
  currentMemoriesOption: MemoriesOptions
  setCurrentMemoriesOption: (val: MemoriesOptions) => void
}

export interface InsightsSlice {
  currentInsightTimeframe: InsightTimeframe
  setCurrentInsightTimeframe: (val: InsightTimeframe) => void
}

export type AppStore = MemoriesSlice & InsightsSlice
