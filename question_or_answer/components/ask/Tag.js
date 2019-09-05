import React, {useState} from 'react';
import Router from 'next/router';

const Tag = () => {
  const [tag, setTag] = useState("");

  const handleChange = e => {
    console.log(e.target.value);
    setTag(e.target.value)
  };
  
  const handleNext = () => {
    handleSetItem();
    Router.push('/title');
  }

  const handleSetItem = () => {
    localStorage.setItem('tag',tag);
  }
  return (
    <div>
      <input placeholder="e.g. python, javascript, react"type="text" onChange={handleChange}/>
      <button onClick={handleNext}>Next</button>
    </div>
  );
};

export default Tag;