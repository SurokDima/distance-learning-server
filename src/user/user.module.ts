import { Module } from '@nestjs/common';

import { UserRepository } from '@/user/repositories/user.repository';

@Module({
  providers: [UserRepository],
})
export class UserModule {}
