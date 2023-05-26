export interface IQuizModel {
  id: string;
  name: string;
  questions: IQuestionEntityCommon[];
}

export type IQuestionModel = ISingleChoiceQuestionModel | IMultipleChoiceQuestionModel | IMapQuestionModel;

interface IQuestionEntityCommon {
  id: string;
  title: string;
}

export interface IChoiceQuestionModel extends IQuestionEntityCommon {
  options: {
    id: string;
    title: string;
  }[];
}

export interface ISingleChoiceQuestionModel extends IChoiceQuestionModel {
  type: 'SINGLE_CHOICE';
  correctAnswerId: string;
}

export interface IMultipleChoiceQuestionModel extends IChoiceQuestionModel {
  type: 'MULTIPLE_CHOICE';
  correctAnswerIds: string[];
}

export interface IMapQuestionModel extends IQuestionEntityCommon {
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
