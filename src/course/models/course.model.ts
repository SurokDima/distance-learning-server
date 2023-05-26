import { IFlashcardsSetModel } from '@/flashcards-set/models/flashcards-set.model';
import { IQuizModel } from '@/quiz/models/quiz.model';
import { IUserModel } from '@/user/models/user.model';

export interface ICourseModel {
  id: string;
  name: string;
  author: IUserModel;
  assignments: AssignmentModel[];
}

type AssignmentModel = IFlashcardsSetAssignmentModel | IQuizAssignmentModel;

export interface IAssignmentModelCommon {
  id: string;
}

export interface IFlashcardsSetAssignmentModel extends IAssignmentModelCommon {
  type: 'FLASHCARDS_SET';
  entity: IFlashcardsSetModel;
}

export interface IQuizAssignmentModel extends IAssignmentModelCommon {
  type: 'QUIZ';
  entity: IQuizModel;
}
