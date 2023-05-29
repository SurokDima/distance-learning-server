import { Controller, Get, Param } from '@nestjs/common';

import { GetByIdParams } from '@/common/dtos/get-by-id-param.dto';
import { IQuizDto } from '@/quiz/dtos/quiz.dto';
import { IQuizService } from '@/quiz/interfaces';

@Controller('quizzes')
export class QuizController {
  public constructor(private readonly quizService: IQuizService) {}

  @Get(':id')
  public getQuiz(@Param() { id }: GetByIdParams): Promise<IQuizDto | null> {
    return this.quizService.getQuizById(id);
  }
}
