import React, { useState, useEffect } from 'react';
import { observer, inject } from 'mobx-react'
import { useRouter } from 'next/router';

const answer = ({store}) => {
  const {questionStore, answerStore} = store;
  const router = useRouter();
  let { idx } = router.query;
  let [question, setQuestion] = useState({});

  useEffect(() =>{
    idx = parseInt(idx, 10);
    setQuestion(questionStore.findQuestion(idx));
    console.log(question);
  }, [question]);

  console.log(question);

  return (
    <>
      <h1>{question.title}</h1>
      <p>{question.description}</p>
    </>
  );
};

export default inject('store')(observer(answer));