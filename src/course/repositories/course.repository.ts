import { Injectable } from '@nestjs/common';

import { BaseFirebaseRepository } from '@/core/BaseRepository';

@Injectable()
export class CourseRepository extends BaseFirebaseRepository {
  protected getCollectionName(): string {
    return 'course';
  }
}
