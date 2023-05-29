import { Controller, Get, Param } from '@nestjs/common';

import { GetByIdParams } from '@/common/dtos/get-by-id-param.dto';
import { ICourseDto } from '@/course/dtos/course.dto';
import { ICourseService } from '@/course/interfaces';
import { mapCourseWithAuthorModelToDto } from '@/course/mappers';

@Controller('courses')
export class CourseController {
  public constructor(private readonly courseService: ICourseService) {}

  @Get(':id')
  public async getCourse(@Param() { id }: GetByIdParams): Promise<ICourseDto | null> {
    const courseModel = await this.courseService.getCourseById(id);
    return courseModel ? mapCourseWithAuthorModelToDto(courseModel) : null;
  }
}
