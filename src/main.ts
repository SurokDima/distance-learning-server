import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';

import { AppModule } from './app.module';

const bootstrap = async (): Promise<void> => {
  const app = await NestFactory.create(AppModule, { snapshot: true });
  app.enableCors({
    origin: 'http://localhost:5173',
  });
  app.useGlobalPipes(new ValidationPipe({ whitelist: true }));
  await app.listen(8000);
};

bootstrap().catch(console.error);
