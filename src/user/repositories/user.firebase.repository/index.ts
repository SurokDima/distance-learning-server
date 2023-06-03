import { Injectable } from '@nestjs/common';

import { BaseFirebaseRepository } from '@/common/core/BaseRepository';
import { IQuery, WithoutID } from '@/common/interfaces';
import { IUserEntity } from '@/user/entities/user.entity';
import { IUserRepository } from '@/user/interfaces';
import { IUserModel } from '@/user/models/user.model';
import {
  mapPartialModelToPartialEntity,
  mapUserEntityToModel,
  mapUserModelQueryToEntityQuery,
} from '@/user/repositories/user.firebase.repository/mappers';

@Injectable()
export class UserFirebaseRepository extends BaseFirebaseRepository implements IUserRepository {
  public async getOneUserById(userId: string): Promise<IUserModel | null> {
    const doc = await this.collection.doc(userId).get();
    if (!doc.exists) return null;
    return mapUserEntityToModel(this.combineDocDataWithID<IUserEntity>(doc));
  }

  public async getOneUserBy(modelQuery: IQuery<WithoutID<IUserModel>>): Promise<IUserModel | null> {
    const entityQuery = mapUserModelQueryToEntityQuery(modelQuery);
    const databaseQuery = this.convertEntityQuery(entityQuery);
    const snapshot = await databaseQuery.get();
    if (snapshot.empty) return null;
    return mapUserEntityToModel(this.combineDocDataWithID<IUserEntity>(snapshot.docs[0]));
  }

  public async getManyUsersBy(modelQuery: IQuery<WithoutID<IUserModel>>): Promise<IUserModel[]> {
    const entityQuery = mapUserModelQueryToEntityQuery(modelQuery);
    const databaseQuery = this.convertEntityQuery(entityQuery);
    const snapshot = await databaseQuery.get();
    return snapshot.docs.map((doc) => mapUserEntityToModel(this.combineDocDataWithID<IUserEntity>(doc)));
  }

  public async updateUserById(userId: string, updateModelData: Partial<IUserModel>): Promise<void> {
    const updateEntityData = mapPartialModelToPartialEntity(updateModelData);
    await this.collection.doc(userId).update(updateEntityData);
  }

  protected getCollectionName(): string {
    return 'user';
  }
}
