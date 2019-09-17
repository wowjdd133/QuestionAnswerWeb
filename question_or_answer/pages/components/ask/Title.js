import React, {useState} from 'react';
import Router from 'next/router';

const Title = () => {
  const [title, setTitle] = useState("");

  const handleChange = e => {
    console.log(e.target.value);
    setTitle(e.target.value)
  };
  
  const handleNext = () => {
    handleSetItem();
    Router.push('/ask/description');
  }

  const handleBack = () => {
    Router.back();
  }

  const handleSetItem = () => {
    localStorage.setItem('title',title);
  }

  return (
    <div className="mainbar">
      <div className="form">
        <label className="mb8">Title</label>
        <input className="mb32 input-size" placeholder="what's your question?"type="text" onChange={handleChange}/>
      </div>
      <div className="dis-grid jc-end z-back">
        <button onClick={handleBack}>Back</button>
        <button onClick={handleNext}>Next</button>
      </div>
    </div>
  );
};

export default Title;