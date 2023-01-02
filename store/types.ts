import { MemoriesOptions } from '../types'

export interface MemoriesSlice {
  currentMemoriesOption: MemoriesOptions
  setCurrentMemoriesOption: (val: MemoriesOptions) => void
}

export type AppStore = MemoriesSlice
