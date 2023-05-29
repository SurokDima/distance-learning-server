import { Module, Provider } from '@nestjs/common';

import { QuizController } from '@/quiz/controllers/quiz.controlller';
import { IQuizRepository, IQuizService } from '@/quiz/interfaces';
import { QuizFirebaseRepository } from '@/quiz/repositories/quiz.firebase.repository';
import { QuizService } from '@/quiz/services/quiz.service';

const quizRepositoryProvider: Provider = {
  provide: IQuizRepository,
  useClass: QuizFirebaseRepository,
};

const quizServiceProvider: Provider = {
  provide: IQuizService,
  useClass: QuizService,
};

@Module({
  controllers: [QuizController],
  providers: [quizRepositoryProvider, quizServiceProvider],
  exports: [quizServiceProvider, quizRepositoryProvider],
})
export class QuizModule {}
