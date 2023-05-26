import { Injectable } from '@nestjs/common';

import { BaseRepository } from '@/core/BaseRepository';

@Injectable()
export class UserRepository extends BaseRepository {
  protected getCollectionName(): string {
    return 'user';
  }
}
