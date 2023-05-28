import { Controller, Get, Param } from '@nestjs/common';

import { FlashcardsSetDto } from '@/flashcards-set/dtos/flashcards-set.dto';
import { GetFlashcardsSetByIdParams } from '@/flashcards-set/dtos/get-flashcards-set-params.dto';
import { IFlashcardsSetService } from '@/flashcards-set/interfaces';
import { mapFlashcardsSetModelToDto } from '@/flashcards-set/mappers';

@Controller('flashcardsSets')
export class FlashCardsSetsController {
  public constructor(private readonly flashcardsSetService: IFlashcardsSetService) {}

  @Get(':id')
  public async getFlashcardsSetById(@Param() { id }: GetFlashcardsSetByIdParams): Promise<FlashcardsSetDto | null> {
    const flashcardsSetModel = await this.flashcardsSetService.getFlashcardsSetById(id);
    return flashcardsSetModel ? mapFlashcardsSetModelToDto(flashcardsSetModel) : null;
  }
}
