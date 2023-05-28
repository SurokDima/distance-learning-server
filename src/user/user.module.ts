import { Module } from '@nestjs/common';

import { UserController } from '@/user/controllers/user.controller';
import { IUserRepository, IUserService } from '@/user/interfaces';
import { UserFirebaseRepository } from '@/user/repositories/user.firebase.repository';
import { UserService } from '@/user/services/user.service';
@Module({
  controllers: [UserController],
  providers: [
    {
      provide: IUserRepository,
      useClass: UserFirebaseRepository,
    },
    {
      provide: IUserService,
      useClass: UserService,
    },
  ],
})
export class UserModule {}
