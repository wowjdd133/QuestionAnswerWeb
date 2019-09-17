import React, { useState } from 'react';
import Router from 'next/router';

const Tag = () => {
  const [tag, setTag] = useState("");

  const handleChange = e => {
    console.log(e.target.value);
    setTag(e.target.value)
  };

  const handleNext = () => {
    handleSetItem();
    Router.push('/ask/title');
  }

  const handleSetItem = () => {
    localStorage.setItem('tag', tag);
  }
  return (
    <div className="mainbar">
      <div className="form">
        <label className="mb8">Tags</label>
        <input className="mb32 input-size" placeholder="e.g. python, javascript, react" type="text" onChange={handleChange} />
      </div>
      <div className="dis-grid jc-end z-back">
        <button className="mb32" onClick={handleNext}>Next</button>
      </div>
    </div>
  );
};

export default Tag;