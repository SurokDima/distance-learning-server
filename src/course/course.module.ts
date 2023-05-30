import { Module, Provider, forwardRef } from '@nestjs/common';

import { CourseController } from '@/course/controllers/course.controller';
import { ICourseRepository, ICourseService } from '@/course/interfaces';
import { CourseFirebaseRepository } from '@/course/repositories/course.firebase.repository';
import { CourseService } from '@/course/services/course.service';
import { UserModule } from '@/user/user.module';

export const courseRepositoryProvider: Provider = {
  provide: ICourseRepository,
  useClass: CourseFirebaseRepository,
};

export const courseServiceProvider: Provider = {
  provide: ICourseService,
  useClass: CourseService,
};

@Module({
  imports: [forwardRef(() => UserModule)],
  controllers: [CourseController],
  // TODO Check the proper way to export such providers
  providers: [courseRepositoryProvider, courseServiceProvider],
  exports: [courseRepositoryProvider, courseServiceProvider],
})
export class CourseModule {}
