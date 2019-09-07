import { observable, action} from 'mobx';

class QuestionStore {
  @observable questionIdx = 0;
  @observable.shallow questions = [];

  @action
  putQuestion = (question) => {
    this.questions.push(question);//this.questions.question.tag로 해야하는 불편함이 있음.
    this.idx++;
  }

  findQuestion = (idx) => {
    let question = {};
    this.questions.forEach(q=> {
      if (q.idx === idx) {
        question =  q;
      }
    });

    console.log(question);

    return question;
  }
}

export default QuestionStore;
