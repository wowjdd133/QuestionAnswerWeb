import React, { useState, useEffect } from 'react';
import { observer, inject } from 'mobx-react'
import { useRouter } from 'next/router';
import Answer from './components/answer/Answer';

const answer = ({store}) => {
  const {questionStore, answerStore} = store;
  const router = useRouter();
  let [question, setQuestion] = useState({});

  useEffect (() =>{//router.query is string , Need to parseInt
    let {questionIdx} = router.query;
    questionIdx = parseInt(questionIdx, 10);
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
        <Answer idx={0}/>
      </div>
    </>
  );
};

export default inject('store')(observer(answer));