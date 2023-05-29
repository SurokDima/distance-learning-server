import { Controller, Get, Param } from '@nestjs/common';

import { GetByIdParams } from '@/common/dtos/get-by-id-param.dto';
import { IFlashcardsSetDto } from '@/flashcards-set/dtos/flashcards-set.dto';
import { IFlashcardsSetService } from '@/flashcards-set/interfaces';
import { mapFlashcardsSetModelToDto } from '@/flashcards-set/mappers';

@Controller('flashcardsSets')
export class FlashCardsSetsController {
  public constructor(private readonly flashcardsSetService: IFlashcardsSetService) {}

  @Get(':id')
  public async getFlashcardsSetById(@Param() { id }: GetByIdParams): Promise<IFlashcardsSetDto | null> {
    const flashcardsSetModel = await this.flashcardsSetService.getFlashcardsSetById(id);
    return flashcardsSetModel ? mapFlashcardsSetModelToDto(flashcardsSetModel) : null;
  }
}
