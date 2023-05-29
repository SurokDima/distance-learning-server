import { IQuizModel } from '@/quiz/models/quiz.model';

export abstract class IQuizRepository {
  public abstract getOneQuizById(quizId: string): Promise<IQuizModel | null>;
}

export abstract class IQuizService {
  public abstract getQuizById(quizId: string): Promise<IQuizModel | null>;
}
