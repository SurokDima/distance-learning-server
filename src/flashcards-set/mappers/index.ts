import { FlashcardsSetDto } from '@/flashcards-set/dtos/flashcards-set.dto';
import { IFlashcardsSetWithUserModel } from '@/flashcards-set/models/flashcards-set.model';
import { mapUserModelToUserDto } from '@/user/mappers';

export const mapFlashcardsSetModelToDto = ({
  author,
  ...restFlashcardsSet
}: IFlashcardsSetWithUserModel): FlashcardsSetDto => ({
  ...restFlashcardsSet,
  author: mapUserModelToUserDto(author),
});
