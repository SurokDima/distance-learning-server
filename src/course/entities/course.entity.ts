import { DocumentReference } from 'firebase-admin/firestore';

export interface ICourseEntity {
  id: string;
  name: string;
  author: DocumentReference;
  assignments: AssignmentEntity[];
}

export interface IAssignmentEntityCommon {
  id: string;
  entityRef: DocumentReference;
}

export interface IFlashcardsSetAssignmentEntity extends IAssignmentEntityCommon {
  type: 'FLASHCARDS_SET';
}

export interface IQuizAssignmentEntity extends IAssignmentEntityCommon {
  type: 'QUIZ';
}

export type AssignmentEntity = IFlashcardsSetAssignmentEntity | IQuizAssignmentEntity;
