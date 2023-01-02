import create from 'zustand'

import { createMemoriesSlice } from './memoriesSlice'
import { AppStore } from './types'

export const useAppStore = create<AppStore>()((...a) => ({
  ...createMemoriesSlice(...a),
}))
