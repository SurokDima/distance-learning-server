import { Controller, Get, Param } from '@nestjs/common';

import { GetByIdParams } from '@/common/dtos/get-by-id-param.dto';
import { IQuizDto } from '@/quiz/dtos/quiz.dto';
import { IQuizService } from '@/quiz/interfaces';
import { mapQuizModelToDto } from '@/quiz/mappers';

@Controller('quizzes')
export class QuizController {
  public constructor(private readonly quizService: IQuizService) {}

  @Get(':id')
  public async getQuiz(@Param() { id }: GetByIdParams): Promise<IQuizDto | null> {
    const quizModel = await this.quizService.getQuizById(id);
    return quizModel ? mapQuizModelToDto(quizModel) : null;
  }
}
