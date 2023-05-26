import { Module } from '@nestjs/common';

import { FlashcardsSetRepository } from '@/flashcards-set/repositories/flashcards-set.repository';

@Module({
  controllers: [],
  providers: [FlashcardsSetRepository],
})
export class FlashcardsSetModule {}
