import React , {Fragment} from 'react';
import Title from '../components/ask/Title';
import '../index.scss';
import './ask.scss';

const TitlePage = () => {
  return (
    <Fragment>
      <div className="grid-content">
        <div className="grid-content-center">
          <h1>What's your question title?</h1>
          <p>Your title helps people quickly understand what your question is about so they can answer it.</p>
          <p className="input-title">Title</p>
          <Title />  
        </div>
      </div>
    </Fragment>
  )
}

export default TitlePage;