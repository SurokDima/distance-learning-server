import { Controller, Get, NotFoundException, Param } from '@nestjs/common';

import { GetByIdParams } from '@/common/dtos/get-by-id-param.dto';
import { ICourseDto } from '@/course/dtos/course.dto';
import { ICourseService } from '@/course/interfaces';
import { mapCourseWithAuthorModelToDto } from '@/course/mappers';
import { IUserDto } from '@/user/dtos/user.dto';
import { IUserService } from '@/user/interfaces';
import { mapUserModelToUserDto } from '@/user/mappers';

@Controller('users')
export class UserController {
  public constructor(private readonly userService: IUserService, private readonly courseService: ICourseService) {}

  @Get(':id')
  public async getUserById(@Param() { id }: GetByIdParams): Promise<IUserDto | null> {
    const userModel = await this.userService.getUserById(id);
    return userModel ? mapUserModelToUserDto(userModel) : null;
  }

  @Get(':id/courses')
  public async getUserCourses(@Param() { id }: GetByIdParams): Promise<ICourseDto[]> {
    const userModel = await this.userService.getUserById(id);
    if (!userModel) throw new NotFoundException('User is not found');
    const coursesModels = await this.courseService.getManyCoursesByIds(userModel.attendingCoursesIds);
    return coursesModels.map(mapCourseWithAuthorModelToDto);
  }
}
