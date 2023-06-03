import { Injectable } from '@nestjs/common';

import { BaseFirebaseRepository } from '@/common/core/BaseRepository';
import { IQuizEntity } from '@/quiz/enitites/quiz.entity';
import { IQuizRepository } from '@/quiz/interfaces';
import { IQuizModel } from '@/quiz/models/quiz.model';
import { mapQuizEntityToModel } from '@/quiz/repositories/quiz.firebase.repository/mappers';

@Injectable()
export class QuizFirebaseRepository extends BaseFirebaseRepository implements IQuizRepository {
  public async getOneQuizById(quizId: string): Promise<IQuizModel | null> {
    const doc = await this.collection.doc(quizId).get();
    if (!doc) return null;
    return mapQuizEntityToModel(this.combineDocDataWithID<IQuizEntity>(doc));
  }

  protected getCollectionName(): string {
    return 'quiz';
  }
}
