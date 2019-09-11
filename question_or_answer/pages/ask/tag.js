import Tag from "../components/ask/Tag";
import React, {Fragment} from 'react';
import '../index.scss';
import './ask.scss';

const TagPage = () => (
  <Fragment>
      <div className="content">
        <div className="grid-center">
          <h1>What type of question do you have?</h1>
          <p>We’ll help you find the best way to get your answer</p>
          <Tag />
        </div>
      </div>
  </Fragment>
)

export default TagPage;