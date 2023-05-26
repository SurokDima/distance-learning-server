import { Module } from '@nestjs/common';

import { CourseModule } from '@/course/course.module';
import { FlashcardsSetModule } from '@/flashcards-set/flashcards-set.module';
import { QuizModule } from '@/quiz/quiz.module';
import { UserModule } from '@/user/user.module';

@Module({
  imports: [FlashcardsSetModule, UserModule, CourseModule, QuizModule],
})
export class AppModule {}
