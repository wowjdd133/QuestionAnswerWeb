import React, { useState, useEffect } from 'react';
import { observer, inject } from 'mobx-react'
import { useRouter } from 'next/router';
import Answer from './components/answer/Answer';

const answer = ({store}) => {
  const {questionStore, answerStore} = store;
  const router = useRouter();
  let [question, setQuestion] = useState({});
  let {questionIdx} = router.query;
  questionIdx = parseInt(questionIdx, 10);

  useEffect (() =>{//router.query is string , Need to parseInt
    const question = questionStore.findQuestion(questionIdx);
    setQuestion(question);
  }, []);

  return (
    <>
      <div className="content-question">
        <h1>{question.title}</h1>
        <p>{question.description}</p>
      </div>
      <div className="content-answer">
        <Answer idx={questionIdx}/>
      </div>
    </>
  );
};

export default inject('store')(observer(answer));