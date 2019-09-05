import React , {Fragment} from 'react';
import Title from '../components/ask/Title';

const TitlePage = () => {
  return (
    <Fragment>
      <h1>What's your question title?</h1>
      <p>Your title helps people quickly understand what your question is about so they can answer it.</p>
      <p className="input-title">Title</p>
      <Title/>
    </Fragment>
  )
}

export default TitlePage;