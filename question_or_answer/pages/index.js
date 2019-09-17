import React, {Fragment} from 'react';
import Router from 'next/Router';
import QuestionList from './components/question/QuestionList';

const Index = () => {
  
  const handleNext = () => {
    Router.push('/ask/tag');
  }

  return (
    <Fragment>
      <div className="content column">
        <div className="grid">
          <h1 className="grid-title">재미있는 코딩 놀이</h1>
          <button className="grid-button" onClick={handleNext}>Ask Question</button>
        </div>
        <QuestionList/>
      </div>
    </Fragment>
  );
};

export default Index;