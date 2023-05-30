import { Module, Provider, forwardRef } from '@nestjs/common';

import { CourseModule } from '@/course/course.module';
import { UserController } from '@/user/controllers/user.controller';
import { IUserRepository, IUserService } from '@/user/interfaces';
import { UserFirebaseRepository } from '@/user/repositories/user.firebase.repository';
import { UserService } from '@/user/services/user.service';

export const userRepoProvider: Provider = {
  provide: IUserRepository,
  useClass: UserFirebaseRepository,
};

export const userServiceProvider: Provider = {
  provide: IUserService,
  useClass: UserService,
};

@Module({
  imports: [forwardRef(() => CourseModule)],
  controllers: [UserController],
  providers: [userRepoProvider, userServiceProvider],
  exports: [userRepoProvider, userServiceProvider],
})
export class UserModule {}
