import { Module } from '@nestjs/common';

import { QuizRepository } from '@/quiz/repositories/quiz.repository';

@Module({
  providers: [QuizRepository],
})
export class QuizModule {}
