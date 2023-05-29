import { Injectable } from '@nestjs/common';

import { IQuizRepository, IQuizService } from '@/quiz/interfaces';
import { IQuizModel } from '@/quiz/models/quiz.model';

@Injectable()
export class QuizService implements IQuizService {
  public constructor(private readonly quizRepo: IQuizRepository) {}

  public getQuizById(quizId: string): Promise<IQuizModel | null> {
    return this.quizRepo.getOneQuizById(quizId);
  }
}
