import { observable, action } from 'mobx';

class answerStore {
  @observable.ref answer = [];
  @observable answerList = [];

  @action
  setAnswer = (answer, idx) => {
    this.answer.push({
      answer,
      idx
    });

    console.log(this.answer);
  }

  @action
  getAnswer = async (idx) => {
    const result = await this.answer.filter(answer => answer.idx === idx);

    this.answerList = result;
  }
}

export default answerStore;
