import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Assignment } from '@/assignment/entities/assignment.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Assignment])],
})
export class AssignmentModule {}
