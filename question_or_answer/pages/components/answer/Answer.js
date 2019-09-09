import React, {useState, Fragment} from 'react';
import { Editor } from '@tinymce/tinymce-react';
import {inject, observer} from 'mobx-react';

const Answer = ({store,idx}) => {
  const [answer, setAnswer] = useState("");
  const {questionStore, answerStore} = store;
  console.log('idx: '+idx);

  const handleEditorChange = (e) => {
    setAnswer(e.target.getContent());
    console.log(answer);
  }

  const handleAnswer = () => {
    answerStore.setAnswer(answer,idx);
    console.log(answerStore.answer);
  }

  return (
    <Fragment>
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
      
    </Fragment>
  );
};

export default inject('store')(observer(Answer));