import { Injectable } from '@nestjs/common';

import { BaseRepository } from '@/core/BaseRepository';

@Injectable()
export class FlashcardsSetRepository extends BaseRepository {
  protected getCollectionName(): string {
    return 'flashcardsSet';
  }
}
