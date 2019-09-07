import React, {useState, Fragment} from 'react';
import { Editor } from '@tinymce/tinymce-react';
import {inject, observer} from 'mobx-react';

const Answer = () => {
  const [answer, setAnswer] = useState("");

  const handleEditorChange = (e) => {
    setAnswer(e.target.getContent());
    console.log(answer);
  }

  const handleAnswer = () => {
    //TODO
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
      <div className="editor-content">
        <h2>Your Answer</h2>
        <div dangerouslySetInnerHTML={{__html: answer}}>
        </div>
      </div>
      <button onClick={handleAnswer}></button>
      
    </Fragment>
  );
};

export default inject('store')(observer(Answer));