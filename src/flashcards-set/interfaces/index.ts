import { IFlashcardsSetModel, IFlashcardsSetWithUserModel } from '@/flashcards-set/models/flashcards-set.model';

export abstract class IFlashcardsSetRepository {
  public abstract getFlashcardsSetById(flashcardsSetId: string): Promise<IFlashcardsSetModel | null>;
}

export abstract class IFlashcardsSetService {
  public abstract getFlashcardsSetById(id: string): Promise<IFlashcardsSetWithUserModel | null>;
}
