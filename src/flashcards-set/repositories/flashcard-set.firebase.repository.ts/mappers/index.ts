import { IFlashcardsSetEntity } from '@/flashcards-set/entities/flashcards-set.entity';
import { IFlashcardsSetModel } from '@/flashcards-set/models/flashcards-set.model';

export const mapFlashcardsSetEntityToModel = (flashcardsSetEntity: IFlashcardsSetEntity): IFlashcardsSetModel =>
  flashcardsSetEntity;
