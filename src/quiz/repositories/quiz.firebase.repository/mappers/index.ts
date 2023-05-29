import { IQuizEntity } from '@/quiz/enitites/quiz.entity';
import { IQuizModel } from '@/quiz/models/quiz.model';

export const mapQuizEntityToModel = (quizEntity: IQuizEntity): IQuizModel => quizEntity;
