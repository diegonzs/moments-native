import create from 'zustand'

import { createInsightsSlice } from './insightsSlice'
import { createMemoriesSlice } from './memoriesSlice'
import { AppStore } from './types'

export const useAppStore = create<AppStore>()((...a) => ({
  ...createMemoriesSlice(...a),
  ...createInsightsSlice(...a),
}))
