import { DocumentReference } from 'firebase-admin/firestore';

export interface IFlashcardsSetEntity {
  id: string;
  name: string;
  cards: ICardEntity[];
  author: DocumentReference;
}

export interface ICardEntity {
  id: string;
  answer: string;
  question: string;
}
