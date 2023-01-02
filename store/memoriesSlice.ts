import { StateCreator } from 'zustand'

import { MemoriesOptions } from '../types'
import { AppStore, MemoriesSlice } from './types'

export const createMemoriesSlice: StateCreator<
  AppStore,
  [],
  [],
  MemoriesSlice
> = (set) => ({
  currentMemoriesOption: MemoriesOptions.All,
  setCurrentMemoriesOption: (option) =>
    set(() => ({ currentMemoriesOption: option })),
})
