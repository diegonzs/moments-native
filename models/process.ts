import Realm from 'realm'

import { Moment } from './moment'

export class Process extends Realm.Object<Process> {
  _id: Realm.BSON.UUID = new Realm.BSON.UUID()
  title: string
  createdAt: Date = new Date()
  updatedAt: Date = new Date()
  isActive: boolean = true
  isCompleted: boolean = false
  moments: Realm.Types.LinkingObjects<Moment, 'processes'>

  static primaryKey = '_id'

  constructor(realm: Realm, title: string) {
    super(realm, { title })
  }
}

export type ProcessQuery = Realm.Results<Process & Realm.Object<unknown, never>>
