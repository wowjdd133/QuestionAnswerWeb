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
    Router.push('/description');
  }

  const handleBack = () => {
    Router.back();
  }

  const handleSetItem = () => {
    localStorage.setItem('title',title);
  }

  return (
    <div>
      <input placeholder="what's your question?"type="text" onChange={handleChange}/>
      <button onClick={handleBack}>Back</button>
      <button onClick={handleNext}>Next</button>
    </div>
  );
};

export default Title;