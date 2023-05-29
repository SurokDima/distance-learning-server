import { IUserDto } from '@/user/dtos/user.dto';
import { IUserModel } from '@/user/models/user.model';

export const mapUserModelToUserDto = ({ password: _, ...restUser }: IUserModel): IUserDto => restUser;
