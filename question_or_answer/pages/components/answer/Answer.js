import React, {useState} from 'react';
import { Editor } from '@tinymce/tinymce-react';
import {inject, observer} from 'mobx-react';
import AnswerItem from './AnswerItem';

const Answer = ({store,idx}) => {
  const {answerStore} = store;
  const [answer, setAnswer] = useState("");
  
  const answerList = answerStore.answerList.map((answer) => {
    return <AnswerItem key={answer.idx} answer={answer}/>
  });

  const handleEditorChange = (e) => {
    setAnswer(e.target.getContent());
    console.log(answer);
  }

  const handleAnswer = () => {
    console.log(idx);
    answerStore.setAnswer(answer,idx);
    answerStore.getAnswer(idx);
  }

  return (
    <>
      <div className="answer-content">
        {answerList}
      </div>
      <Editor
        init={{
          plugins: 'link image code',
          toolbar: 'undo redo | bold italic | alignleft aligncenter alignright | code'
        }}
        onChange={handleEditorChange}>
      </Editor>
      <div className="answer-content">
        <h2>Your Answer</h2>
        <div dangerouslySetInnerHTML={{__html: answer}}>
        </div>
      </div>
      <button onClick={handleAnswer}>Post Your Answer</button>
      
    </>
  );
};

export default inject('store')(observer(Answer));