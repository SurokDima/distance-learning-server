import { Injectable } from '@nestjs/common';

import { BaseFirebaseRepository } from '@/core/BaseRepository';

@Injectable()
export class QuizRepository extends BaseFirebaseRepository {
  protected getCollectionName(): string {
    return 'quiz';
  }
}
