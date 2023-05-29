import { IUserDto } from '@/user/dtos/user.dto';

export interface IFlashcardsSetDto {
  id: string;
  name: string;
  cards: ICardDto[];
  author: IUserDto;
}

export interface ICardDto {
  id: string;
  frontSide: string;
  backSide: string;
}
