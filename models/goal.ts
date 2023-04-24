import Realm from 'realm'

export class Goal extends Realm.Object<Goal> {
  _id: Realm.BSON.UUID = new Realm.BSON.UUID()
  title: string
  createdAt: Date = new Date()
  updatedAt: Date = new Date()
  completedAt?: Date
  isCompleted: boolean = false

  static primaryKey = '_id'

  constructor(realm: Realm, props: { title: string }) {
    super(realm, { title: props.title })
  }
}

export type GoalQuery = Realm.Results<Goal & Realm.Object<unknown, never>>
