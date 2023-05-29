import { Controller, Get, Param } from '@nestjs/common';

import { GetByIdParams } from '@/common/dtos/get-by-id-param.dto';
import { IUserDto } from '@/user/dtos/user.dto';
import { IUserService } from '@/user/interfaces';
import { mapUserModelToUserDto } from '@/user/mappers';

@Controller('users')
export class UserController {
  public constructor(private readonly userService: IUserService) {}

  @Get(':id')
  public async getUserById(@Param() { id }: GetByIdParams): Promise<IUserDto | null> {
    const userModel = await this.userService.getUserById(id);
    return userModel ? mapUserModelToUserDto(userModel) : null;
  }
}
