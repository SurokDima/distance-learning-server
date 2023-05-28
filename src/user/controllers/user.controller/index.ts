import { Controller, Get, Param } from '@nestjs/common';

import { mapUserModelToUserDto } from '@/user/controllers/user.controller/mappers';
import { GetUserByIdParams } from '@/user/dtos/get-user-params.dto';
import { UserDto } from '@/user/dtos/user.dto';
import { IUserService } from '@/user/interfaces';

@Controller('users')
export class UserController {
  public constructor(private readonly userService: IUserService) {}

  @Get(':id')
  public async getUserById(@Param() { id }: GetUserByIdParams): Promise<UserDto | null> {
    const userModel = await this.userService.getUserById(id);
    return userModel ? mapUserModelToUserDto(userModel) : null;
  }
}
