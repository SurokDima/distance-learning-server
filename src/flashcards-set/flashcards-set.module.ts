import { Module, Provider } from '@nestjs/common';

import { FlashCardsSetsController } from '@/flashcards-set/controller/flashcards-set.controller';
import { IFlashcardsSetRepository, IFlashcardsSetService } from '@/flashcards-set/interfaces';
import { FlashcardsSetFirebaseRepository } from '@/flashcards-set/repositories/flashcard-set.firebase.repository.ts';
import { FlashcardsSetService } from '@/flashcards-set/services/flashcards-set.service';
import { UserModule } from '@/user/user.module';

const flashcardsSetRepoProvider: Provider = {
  provide: IFlashcardsSetRepository,
  useClass: FlashcardsSetFirebaseRepository,
};

const flashcardsSetServiceProvider = {
  provide: IFlashcardsSetService,
  useClass: FlashcardsSetService,
};

@Module({
  imports: [UserModule],
  controllers: [FlashCardsSetsController],
  providers: [flashcardsSetRepoProvider, flashcardsSetServiceProvider],
  exports: [flashcardsSetRepoProvider],
})
export class FlashcardsSetModule {}
