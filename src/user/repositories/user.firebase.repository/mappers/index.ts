import { IQuery } from '@/common/interfaces';
import { IUserEntity } from '@/user/entities/user.entity';
import { IUserModel } from '@/user/models/user.model';

export const mapUserEntityToModel = (entity: IUserEntity): IUserModel => entity;
export const mapUserModelToEntity = (model: IUserModel): IUserEntity => model;

export const mapUserModelQueryToEntityQuery = (modelQuery: IQuery<IUserModel>): IQuery<IUserEntity> => modelQuery;
export const mapPartialModelToPartialEntity = (partialModel: Partial<IUserModel>): Partial<IUserEntity> => partialModel;
