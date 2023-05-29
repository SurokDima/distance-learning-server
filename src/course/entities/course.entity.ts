export interface ICourseEntity {
  id: string;
  name: string;
  authorId: string;
  assignments: AssignmentEntity[];
}

export interface IAssignmentEntityCommon {
  id: string;
  entityId: string;
}

export interface IFlashcardsSetAssignmentEntity extends IAssignmentEntityCommon {
  type: 'FLASHCARDS_SET';
}

export interface IQuizAssignmentEntity extends IAssignmentEntityCommon {
  type: 'QUIZ';
}

export type AssignmentEntity = IFlashcardsSetAssignmentEntity | IQuizAssignmentEntity;
