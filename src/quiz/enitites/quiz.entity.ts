export interface IQuizEntity {
  id: string;
  name: string;
  questions: IQuestionEntityCommon[];
}

export type IQuestionEntity = ISingleChoiceQuestionEntity | IMultipleChoiceQuestionEntity | IMapQuestionEntity;

interface IQuestionEntityCommon {
  id: string;
  title: string;
}

export interface IChoiceQuestionEntity extends IQuestionEntityCommon {
  options: {
    id: string;
    title: string;
  }[];
}

export interface ISingleChoiceQuestionEntity extends IChoiceQuestionEntity {
  type: 'SINGLE_CHOICE';
  correctAnswerId: string;
}

export interface IMultipleChoiceQuestionEntity extends IChoiceQuestionEntity {
  type: 'MULTIPLE_CHOICE';
  correctAnswerIds: string[];
}

export interface IMapQuestionEntity extends IQuestionEntityCommon {
  type: 'MAP';
  rows: {
    id: string;
    title: string;
    correctAnswerId: string;
    options: {
      id: string;
      title: string;
    }[];
  };
}

export interface IAnswerEntity {
  id: string;
  title: string;
}
