import { Injectable } from '@nestjs/common';

import { IUserRepository } from '@/user/interfaces';
import { IUserModel } from '@/user/models/user.model';

@Injectable()
export class UserService {
  public constructor(private readonly userRepo: IUserRepository) {}

  public getUserById(id: string): Promise<IUserModel | null> {
    return this.userRepo.getOneUserById(id);
  }
}
