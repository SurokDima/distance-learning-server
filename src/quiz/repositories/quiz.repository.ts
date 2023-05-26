import { Injectable } from '@nestjs/common';

import { BaseRepository } from '@/core/BaseRepository';

@Injectable()
export class QuizRepository extends BaseRepository {
  protected getCollectionName(): string {
    return 'quiz';
  }
}
