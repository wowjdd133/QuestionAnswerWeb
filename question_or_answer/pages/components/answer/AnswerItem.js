import React from 'react';

const AnswerItem = ({answer}) => {
  return (
    <div className="answer-item">
      <span dangerouslySetInnerHTML={{__html : answer.answer}}></span>
    </div>
  );
};

export default AnswerItem;