import { createRealmContext } from '@realm/react'

import { Goal } from './goal'
import { Hashtag } from './hashtag'
import { Indicator } from './indicator'
import { Moment } from './moment'
import { Process } from './process'

export * from './goal'
export * from './hashtag'
export * from './indicator'
export * from './moment'
export * from './process'

export const AppRealmContext = createRealmContext({
  schema: [Goal, Hashtag, Process, Indicator, Moment],
  deleteRealmIfMigrationNeeded: true,
})
