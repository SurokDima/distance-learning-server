import { Injectable } from '@nestjs/common';

import { BaseRepository } from '@/core/BaseRepository';

@Injectable()
export class CourseRepository extends BaseRepository {
  protected getCollectionName(): string {
    return 'course';
  }
}
