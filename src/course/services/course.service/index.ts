import { Injectable } from '@nestjs/common';

import { ICourseRepository, ICourseService } from '@/course/interfaces';
import { ICourseWithAuthorModel } from '@/course/models/course.model';
import { IUserRepository } from '@/user/interfaces';

@Injectable()
export class CourseService implements ICourseService {
  public constructor(private readonly courseRepo: ICourseRepository, private readonly userRepo: IUserRepository) {}

  public async getCourseById(courseId: string): Promise<ICourseWithAuthorModel | null> {
    const course = await this.courseRepo.getOneCourseById(courseId);
    if (!course) return null;
    const { authorId, ...restCourse } = course;
    const author = await this.userRepo.getOneUserById(authorId);

    if (!author) {
      throw new Error('Author was not found');
    }

    return {
      ...restCourse,
      author,
    };
  }

  public async getManyCoursesByIds(ids: string[]): Promise<ICourseWithAuthorModel[]> {
    return Promise.all(
      ids.map(async (id) => {
        const course = await this.courseRepo.getOneCourseById(id);
        if (!course) throw new Error('Course was not found');

        const { authorId, ...restCourse } = course;
        const author = await this.userRepo.getOneUserById(authorId);

        if (!author) {
          throw new Error('Author was not found');
        }

        return {
          ...restCourse,
          author,
        };
      }),
    );
  }
}
