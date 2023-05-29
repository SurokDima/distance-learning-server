import { ICourseModel, ICourseWithAuthorModel } from '@/course/models/course.model';

export abstract class ICourseRepository {
  public abstract getOneCourseById(courseId: string): Promise<ICourseModel | null>;
}

export abstract class ICourseService {
  public abstract getCourseById(courseId: string): Promise<ICourseWithAuthorModel | null>;
}
