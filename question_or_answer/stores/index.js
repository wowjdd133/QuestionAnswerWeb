import QuestionStore from './questionStore';
import AnswerStore from './answerStore';

const stores = {
  questionStore: new QuestionStore(),
  answerStore: new AnswerStore()
};

export default stores;
