import React, {useState, Fragment} from 'react';
import Router from 'next/router';

const Description = ({ store }) => {
  const [description, setDescription] = useState("");

  console.log(store.questionStore.questionIdx+"엉?");

  const putQuestion = () => {
    store.questionStore.putQuestion(
      {
        idx: store.questionStore.questionIdx, 
        tag: localStorage.getItem('tag'),
        title: localStorage.getItem('title'),
        description: description,
        view: 0,
        answers: 0,
      }
    )
    store.questionStore.questionIdx++;
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
    <Fragment>
      <textarea onChange = {handleChange} className= "description-textarea" style={{ width: 300, height: 400}}>

      </textarea>
      <button onClick={handleBack}>Back</button>
      <button onClick={handleDone}>Done</button>
    </Fragment>
  );
};

export default Description;