import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { AuthModule } from '@/auth/auth.module';
import { CourseModule } from '@/course/course.module';
import { FlashcardsSetModule } from '@/flashcards-set/flashcards-set.module';
import { QuizModule } from '@/quiz/quiz.module';
import { UserModule } from '@/user/user.module';

// TODO Add logging
@Module({
  imports: [
    FlashcardsSetModule,
    UserModule,
    CourseModule,
    QuizModule,
    AuthModule,
    ConfigModule.forRoot({ isGlobal: true }),
  ],
})
export class AppModule {}
