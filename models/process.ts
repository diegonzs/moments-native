import Realm from 'realm'

import { Moment } from './moment'

export class Process extends Realm.Object<Process> {
  _id: Realm.BSON.UUID = new Realm.BSON.UUID()
  title: string
  createdAt: Date = new Date()
  updatedAt: Date = new Date()
  isActive: boolean = true
  isCompleted: boolean = false
  moments: Realm.Results<Moment>

  static primaryKey = '_id'

  constructor(realm: Realm, title: string) {
    super(realm, { title })
  }
}
