import { IUserModel } from '@/user/models/user.model';

export interface IFlashcardsSetModel {
  id: string;
  name: string;
  cards: ICardModel[];
  authorId: string;
}

export interface IFlashcardsSetWithUserModel {
  id: string;
  name: string;
  cards: ICardModel[];
  author: IUserModel;
}

export interface ICardModel {
  id: string;
  frontSide: string;
  backSide: string;
}
