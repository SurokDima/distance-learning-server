import { Module } from '@nestjs/common';

import { AssignmentModule } from '@/assignment/assignment.module';
import { CourseModule } from '@/course/course.module';
import { DatabaseModule } from '@/database/database.module';
import { FlashcardsSetModule } from '@/flashcardsSet/flashcardsSet.module';
import { UserModule } from '@/user/user.module';

@Module({
  imports: [DatabaseModule, UserModule, CourseModule, FlashcardsSetModule, AssignmentModule],
})
export class AppModule {}
