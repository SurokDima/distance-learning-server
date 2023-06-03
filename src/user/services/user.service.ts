import { Injectable } from '@nestjs/common';

import { IUserRepository, IUserService } from '@/user/interfaces';
import { IUserModel } from '@/user/models/user.model';

@Injectable()
export class UserService implements IUserService {
  public constructor(private readonly userRepo: IUserRepository) {}

  public getUserById(id: string): Promise<IUserModel | null> {
    return this.userRepo.getOneUserById(id);
  }

  public getUserByAuth0Id(auth0Id: string): Promise<IUserModel | null> {
    return this.userRepo.getOneUserBy({
      auth0Id,
    });
  }
}
