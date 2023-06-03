import { Controller, Get, NotFoundException, Param, Request, UseGuards } from '@nestjs/common';

import { JwtAuthGuard } from '@/auth/guards/jwt-auth.guard';
import { GetByIdParams } from '@/common/dtos/get-by-id-param.dto';
import { ICourseDto } from '@/course/dtos/course.dto';
import { ICourseService } from '@/course/interfaces';
import { mapCourseWithAuthorModelToDto } from '@/course/mappers';
import { IUserDto } from '@/user/dtos/user.dto';
import { IUserService } from '@/user/interfaces';
import { mapUserModelToUserDto } from '@/user/mappers';
import { IUserModel } from '@/user/models/user.model';

@Controller('users')
export class UserController {
  public constructor(private readonly userService: IUserService, private readonly courseService: ICourseService) {}

  @UseGuards(JwtAuthGuard)
  @Get('me')
  public getMe(@Request() req: { user: IUserModel }): IUserDto | null {
    return mapUserModelToUserDto(req.user);
  }

  @UseGuards(JwtAuthGuard)
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
