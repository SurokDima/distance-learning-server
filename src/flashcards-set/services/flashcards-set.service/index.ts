import { Injectable } from '@nestjs/common';

import { IFlashcardsSetRepository, IFlashcardsSetService } from '@/flashcards-set/interfaces';
import { IFlashcardsSetWithUserModel } from '@/flashcards-set/models/flashcards-set.model';
import { IUserRepository } from '@/user/interfaces';

@Injectable()
export class FlashcardsSetService implements IFlashcardsSetService {
  public constructor(
    private readonly flashcardsSetRepo: IFlashcardsSetRepository,
    private readonly userRepo: IUserRepository,
  ) {}

  public async getFlashcardsSetById(id: string): Promise<IFlashcardsSetWithUserModel | null> {
    const flashcardsSet = await this.flashcardsSetRepo.getFlashcardsSetById(id);
    if (!flashcardsSet) return null;

    const { authorId, ...restFlashcardsSet } = flashcardsSet;
    const author = await this.userRepo.getOneUserById(authorId);

    if (!author) {
      throw new Error('Author not found');
    }

    return {
      ...restFlashcardsSet,
      author,
    };
  }
}
