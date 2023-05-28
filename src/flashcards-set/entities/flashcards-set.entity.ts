export interface IFlashcardsSetEntity {
  id: string;
  name: string;
  cards: ICardEntity[];
  authorId: string;
}

export interface ICardEntity {
  id: string;
  frontSide: string;
  backSide: string;
}
