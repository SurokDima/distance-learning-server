import { UserDto } from '@/user/dtos/user.dto';

export class FlashcardsSetDto {
  public id: string;
  public name: string;
  public cards: CardDto[];
  public author: UserDto;
}

class CardDto {
  public id: string;
  public frontSide: string;
  public backSide: string;
}
