import React, {Fragment} from 'react';
import {inject, observer} from 'mobx-react';
import QuestionItem from './QuestionItem';

const QuestionList = ({store}) => {
  const QuestionList = store.questionStore.questions.map((question) =>{
    return (<QuestionItem key={question.idx} question={question}/>);
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