import { observable, action } from 'mobx';

class answerStore {
  @observable answer = [];

  @action
  setAnswer = (answer) => {
    this.answer.push(answer);
  }
}

export default answerStore;
