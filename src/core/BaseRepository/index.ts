import { v4 as uuid } from 'uuid';

import { database } from '@/database';

export abstract class BaseRepository {
  protected readonly collection: FirebaseFirestore.CollectionReference;

  public constructor() {
    this.collection = database.collection(this.getCollectionName());
  }

  protected generateUniqueId(): string {
    return uuid();
  }

  protected abstract getCollectionName(): string;
}
