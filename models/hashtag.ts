import Realm from 'realm'

import { Moment } from './moment'

export class Hashtag extends Realm.Object {
  _id: Realm.BSON.UUID = new Realm.BSON.UUID()
  text: string
  createdAt: Date = new Date()
  updatedAt: Date = new Date()
  moments: Realm.Types.LinkingObjects<Moment, 'hashtags'>

  static primaryKey = '_id'

  constructor(realm: Realm, text: string) {
    super(realm, { text })
  }
}

export type HashtagQuery = Realm.Results<Hashtag & Realm.Object<unknown, never>>
