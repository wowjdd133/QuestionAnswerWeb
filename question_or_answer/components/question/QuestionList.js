import React, {Fragment} from 'react';
import {inject, observer} from 'mobx-react';
import QuestionItem from './QuestionItem';

const QuestionList = ({store}) => {
  const QuestionList = store.question.questions.map((question, i) =>{
    console.log(question);
    console.log(i+"힝");
    return (<QuestionItem key={i} question={question.question}/>);
  });
  return (
    <Fragment>
      <div className="questionList">
        { QuestionList }
      </div>
    </Fragment>
  );
};

export default inject('store')(observer(QuestionList));