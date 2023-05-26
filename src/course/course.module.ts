import { Module } from '@nestjs/common';

import { CourseRepository } from '@/course/repositories/course.repository';

@Module({
  providers: [CourseRepository],
})
export class CourseModule {}
