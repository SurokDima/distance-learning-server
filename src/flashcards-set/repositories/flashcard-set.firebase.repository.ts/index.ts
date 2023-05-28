import { Injectable } from '@nestjs/common';

import { BaseFirebaseRepository } from '@/core/BaseRepository';
import { IFlashcardsSetEntity } from '@/flashcards-set/entities/flashcards-set.entity';
import { IFlashcardsSetRepository } from '@/flashcards-set/interfaces';
import { IFlashcardsSetModel } from '@/flashcards-set/models/flashcards-set.model';
import { mapFlashcardsSetEntityToModel } from '@/flashcards-set/repositories/flashcard-set.firebase.repository.ts/mappers';

@Injectable()
export class FlashcardsSetFirebaseRepository extends BaseFirebaseRepository implements IFlashcardsSetRepository {
  public async getFlashcardsSetById(flashcardsSetId: string): Promise<IFlashcardsSetModel | null> {
    const doc = await this.collection.doc(flashcardsSetId).get();
    if (!doc.exists) return null;
    return mapFlashcardsSetEntityToModel(this.combineDocDataWithID<IFlashcardsSetEntity>(doc));
  }

  protected getCollectionName(): string {
    return 'flashcardsSet';
  }
}
