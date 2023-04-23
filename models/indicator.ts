import Realm from 'realm'

import { Moment } from './moment'

export class Indicator extends Realm.Object<Indicator> {
  _id: Realm.BSON.UUID = new Realm.BSON.UUID()
  title: string
  createdAt: Date = new Date()
  updatedAt: Date = new Date()
  moments: Realm.Types.LinkingObjects<Moment, 'indicator'>

  static primaryKey = '_id'

  constructor(realm: Realm, title: string) {
    super(realm, { title })
  }
}
