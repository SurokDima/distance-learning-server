import { ValidationPipe } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';

import { AppModule } from './app.module';
const bootstrap = async (): Promise<void> => {
  const app = await NestFactory.create(AppModule, { snapshot: true });
  const configService = app.get<ConfigService>(ConfigService);

  app.enableCors({
    origin: configService.getOrThrow<string>('CORS_ORIGIN'),
  });

  app.useGlobalPipes(new ValidationPipe({ whitelist: true }));
  await app.listen(configService.getOrThrow<string>('PORT'));
};

bootstrap().catch(console.error);
