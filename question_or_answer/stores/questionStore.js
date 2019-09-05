import { observable, action} from 'mobx';

class QuestionStore {
  @observable questions = [];

  @action
  putQuestion = (question) => {
    this.questions.push({question});//this.questions.question.tag로 해야하는 불편함이 있음.
  }
}

export default QuestionStore;
