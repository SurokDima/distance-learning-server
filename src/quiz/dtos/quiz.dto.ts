export interface IQuizDto {
  id: string;
  name: string;
  questions: IQuestionDto[];
}

export type IQuestionDto = ISingleChoiceQuestionDto | IMultipleChoiceQuestionDto | IMapQuestionDto;

interface IQuestionDtoCommon {
  id: string;
  title: string;
}

export interface IChoiceQuestionDto extends IQuestionDtoCommon {
  options: {
    id: string;
    text: string;
  }[];
}

export interface ISingleChoiceQuestionDto extends IChoiceQuestionDto {
  type: 'SINGLE_CHOICE';
  correctAnswerId: string;
}

export interface IMultipleChoiceQuestionDto extends IChoiceQuestionDto {
  type: 'MULTIPLE_CHOICE';
  correctAnswerIds: string[];
}

export interface IMapQuestionDto extends IQuestionDtoCommon {
  type: 'MAP';
  rows: {
    id: string;
    title: string;
    correctAnswerId: string;
    options: {
      id: string;
      text: string;
    }[];
  };
}
