import Realm from 'realm'

export class hashtag extends Realm.Object {
  _id: Realm.BSON.UUID = new Realm.BSON.UUID()
  text: string
  createdAt: Date = new Date()
  updatedAt: Date = new Date()

  static primaryKey = '_id'

  constructor(realm: Realm, text: string) {
    super(realm, { text })
  }
}
