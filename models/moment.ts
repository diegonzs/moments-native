import Realm from 'realm'

import { Hashtag } from './hashtag'
import { Indicator } from './indicator'
import { Process } from './process'

export class Moment extends Realm.Object<Moment> {
  _id: Realm.BSON.UUID = new Realm.BSON.UUID()
  title: string = ''
  content: string = ''
  emotion?: string
  createdAt: Date = new Date()
  updatedAt: Date = new Date()
  processes: Realm.List<Process>
  hashtags: Realm.List<Hashtag>
  indicator?: Indicator
  isPinnedProcess: boolean = false
  isPinnedHome: boolean = false
  isRemindersEnabled: boolean = false

  static primaryKey = '_id'

  constructor(realm: Realm) {
    super(realm, {})
  }
}
