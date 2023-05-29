import { IUserDto } from '@/user/dtos/user.dto';

export interface ICourseDto {
  id: string;
  name: string;
  author: IUserDto;
  assignments: AssignmentDto[];
}

type AssignmentDto = IFlashcardsSetAssignmentDto | IQuizAssignmentDto;

export interface IAssignmentDtoCommon {
  id: string;
}

export interface IFlashcardsSetAssignmentDto extends IAssignmentDtoCommon {
  type: 'FLASHCARDS_SET';
  entityId: string;
}

export interface IQuizAssignmentDto extends IAssignmentDtoCommon {
  type: 'QUIZ';
  entityId: string;
}
