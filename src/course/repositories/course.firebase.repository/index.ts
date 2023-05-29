import { Injectable } from '@nestjs/common';

import { BaseFirebaseRepository } from '@/core/BaseRepository';
import { ICourseEntity } from '@/course/entities/course.entity';
import { ICourseRepository } from '@/course/interfaces';
import { ICourseModel } from '@/course/models/course.model';
import { mapCourseEntityToModel } from '@/course/repositories/course.firebase.repository/mappers';

@Injectable()
export class CourseFirebaseRepository extends BaseFirebaseRepository implements ICourseRepository {
  public async getOneCourseById(courseId: string): Promise<ICourseModel | null> {
    const doc = await this.collection.doc(courseId).get();
    if (!doc.exists) return null;
    return mapCourseEntityToModel(this.combineDocDataWithID<ICourseEntity>(doc));
  }

  protected getCollectionName(): string {
    return 'course';
  }
}
