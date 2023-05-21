import { StateCreator } from 'zustand'

import { InsightTimeframe } from '../types'
import { AppStore, InsightsSlice } from './types'

export const createInsightsSlice: StateCreator<
  AppStore,
  [],
  [],
  InsightsSlice
> = (set) => ({
  currentInsightTimeframe: InsightTimeframe.Today,
  setCurrentInsightTimeframe: (value) =>
    set(() => ({ currentInsightTimeframe: value })),
})
