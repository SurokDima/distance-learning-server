import { Injectable } from '@nestjs/common';

import { BaseFirebaseRepository } from '@/core/BaseRepository';

@Injectable()
export class FlashcardsSetRepository extends BaseFirebaseRepository {
  protected getCollectionName(): string {
    return 'flashcardsSet';
  }
}
