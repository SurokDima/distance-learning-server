import { IsString, IsUUID } from 'class-validator';

export class UserDto {
  @IsUUID()
  public id: string;

  @IsString()
  public firstName: string;

  @IsString()
  public lastName: string;

  @IsString()
  public email: string;
}
