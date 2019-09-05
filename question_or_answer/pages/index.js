import React, {Fragment} from 'react';
import Router from 'next/Router';
import QuestionList from '../components/question/QuestionList';

const Index = () => {
  
  const handleNext = () => {
    Router.push('/tag');
  }

  return (
    <Fragment>
      <button onClick={handleNext}>Ask Question</button>
      <h1>재미있는 코딩 놀이</h1>
      <QuestionList/>
    </Fragment>
  );
};

export default Index;