import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';

import { JwtStrategy } from '@/auth/strategies/jwt.strategy';
import { UserModule } from '@/user/user.module';

@Module({
  imports: [UserModule, PassportModule.register({})],
  providers: [JwtStrategy],
  exports: [PassportModule],
})
export class AuthModule {}
