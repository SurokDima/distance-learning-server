import { v4 as uuid } from 'uuid';

import { database } from '@/database';

export abstract class BaseFirebaseRepository {
  protected readonly database = database;
  protected readonly collection: FirebaseFirestore.CollectionReference;

  public constructor() {
    this.collection = database.collection(this.getCollectionName());
  }

  protected generateUniqueId(): string {
    return uuid();
  }

  protected convertEntityQuery<T>(query: Partial<T>): FirebaseFirestore.Query {
    return Object.entries(query).reduce((collection, [key, value]) => {
      return collection.where(key, '==', value);
    }, this.collection);
  }

  protected combineDocDataWithID<T>(
    doc: FirebaseFirestore.QueryDocumentSnapshot | FirebaseFirestore.DocumentSnapshot,
  ): T {
    return { id: doc.id, ...doc.data() } as T;
  }

  protected abstract getCollectionName(): string;
}
