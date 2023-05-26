import { IUserModel } from '@/user/models/user.model';

export interface IFlashcardsSetModel {
  id: string;
  name: string;
  cards: ICardModel[];
  author: IUserModel;
}

export interface ICardModel {
  id: string;
  answer: string;
  question: string;
}
