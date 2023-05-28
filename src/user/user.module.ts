import { Module, Provider } from '@nestjs/common';

import { UserController } from '@/user/controllers/user.controller';
import { IUserRepository, IUserService } from '@/user/interfaces';
import { UserFirebaseRepository } from '@/user/repositories/user.firebase.repository';
import { UserService } from '@/user/services/user.service';

const userRepoProvider: Provider = {
  provide: IUserRepository,
  useClass: UserFirebaseRepository,
};

const userServiceProvider: Provider = {
  provide: IUserService,
  useClass: UserService,
};

@Module({
  controllers: [UserController],
  providers: [userRepoProvider, userServiceProvider],
  exports: [userRepoProvider],
})
export class UserModule {}
