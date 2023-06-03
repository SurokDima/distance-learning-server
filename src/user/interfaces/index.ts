import { IQuery, WithoutID } from '@/common/interfaces';
import { IUserModel } from '@/user/models/user.model';

export abstract class IUserRepository {
  public abstract getOneUserById(userId: string): Promise<IUserModel | null>;
  public abstract getOneUserBy(modelQuery: IQuery<WithoutID<IUserModel>>): Promise<IUserModel | null>;
  public abstract getManyUsersBy(modelQuery: IQuery<WithoutID<IUserModel>>): Promise<IUserModel[]>;
  public abstract updateUserById(userId: string, updateModelData: Partial<IUserModel>): Promise<void>;
}

export abstract class IUserService {
  public abstract getUserById(id: string): Promise<IUserModel | null>;
  public abstract getUserByAuth0Id(auth0Id: string): Promise<IUserModel | null>;
}
