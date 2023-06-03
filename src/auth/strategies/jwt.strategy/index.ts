import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PassportStrategy } from '@nestjs/passport';
import { passportJwtSecret } from 'jwks-rsa';
import { ExtractJwt, Strategy } from 'passport-jwt';

import { IUserService } from '@/user/interfaces';
import { IUserModel } from '@/user/models/user.model';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  public constructor(private readonly userService: IUserService, configService: ConfigService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      audience: configService.getOrThrow<string>('AUTH0_AUDIENCE'),
      issuer: configService.getOrThrow<string>('AUTH0_ISSUER'),
      algorithms: ['RS256'],
      secretOrKeyProvider: passportJwtSecret({
        cache: true,
        rateLimit: true,
        jwksRequestsPerMinute: 5,
        jwksUri: `https://${configService.getOrThrow<string>('AUTH0_DOMAIN')}/.well-known/jwks.json`,
      }),
    });
  }

  public async validate(payload: { sub: string }): Promise<IUserModel> {
    const user = await this.userService.getUserByAuth0Id(payload.sub);
    if (!user) throw new InternalServerErrorException('User not found');
    return user;
  }
}
