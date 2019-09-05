import React, {useState} from 'react';
import Router from 'next/router';

const Description = ({ store }) => {
  const [description, setDescription] = useState("");

  const putQuestion = () => {
    store.question.putQuestion(
      {
        tag: localStorage.getItem('tag'),
        title: localStorage.getItem('title'),
        description: description,
        view: 0,
        answers: 0,
      }
    )
  }

  const handleChange = e => {
    setDescription(e.target.value)
  };
  
  const handleDone = () => {
    putQuestion();
    Router.push('/');
  }

  const handleBack = () => {
    Router.back();
  }

  return (
    <div>
      <textarea onChange = {handleChange} className= "description-textarea" style={{ width: 300, height: 400}}>

      </textarea>
      <button onClick={handleBack}>Back</button>
      <button onClick={handleDone}>Done</button>
    </div>
  );
};

export default Description;