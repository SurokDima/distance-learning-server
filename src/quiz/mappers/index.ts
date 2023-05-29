import { IQuizDto } from '@/quiz/dtos/quiz.dto';
import { IQuizModel } from '@/quiz/models/quiz.model';

export const mapQuizModelToDto = (quizModel: IQuizModel): IQuizDto => quizModel;
