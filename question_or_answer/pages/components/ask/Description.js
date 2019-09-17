import React, { useState, Fragment } from 'react';
import Router from 'next/router';

const Description = ({ store }) => {
  const [description, setDescription] = useState("");

  console.log(store.questionStore.questionIdx + "엉?");

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
    <div className="mainbar">
      <textarea onChange={handleChange} className="description-textarea" style={{ width: 600, height: 400 }}>

      </textarea>
      <div className="dis-grid jc-end z-back">
        <button onClick={handleBack}>Back</button>
        <button onClick={handleDone}>Done</button>
      </div>
    </div>
  );
};

export default Description;