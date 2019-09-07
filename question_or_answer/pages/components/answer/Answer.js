import React, {useState, Fragment} from 'react';

const Answer = () => {
  const [answer, setAnswer] = useState("");
  
  const handlechange = e => {
    setAnswer(e.target.value);
  };

  const handleAnswer = () => {
    //TODO
  }

  return (
    <Fragment>
      <textarea onChange={handlechange} className="answer-textarea">
        
      </textarea>
      <button onClick={handleAnswer}></button> 
    </Fragment>
  );
};

export default Answer;