export interface IQuizModel {
  id: string;
  name: string;
  questions: IQuestionModel[];
}

export type IQuestionModel = ISingleChoiceQuestionModel | IMultipleChoiceQuestionModel | IMapQuestionModel;

interface IQuestionModelCommon {
  id: string;
  title: string;
}

export interface IChoiceQuestionModel extends IQuestionModelCommon {
  options: {
    id: string;
    text: string;
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

export interface IMapQuestionModel extends IQuestionModelCommon {
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
