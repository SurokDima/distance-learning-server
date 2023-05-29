import { IUserModel } from '@/user/models/user.model';

export interface ICourseModel {
  id: string;
  name: string;
  authorId: string;
  assignments: AssignmentModel[];
}

export type ICourseWithAuthorModel = Omit<ICourseModel, 'authorId'> & { author: IUserModel };

export type AssignmentModel = IFlashcardsSetAssignmentModel | IQuizAssignmentModel;

export interface IAssignmentModelCommon {
  id: string;
  entityId: string;
}

export interface IFlashcardsSetAssignmentModel extends IAssignmentModelCommon {
  type: 'FLASHCARDS_SET';
}

export interface IQuizAssignmentModel extends IAssignmentModelCommon {
  type: 'QUIZ';
}
