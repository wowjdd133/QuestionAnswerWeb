import Tag from "../components/ask/Tag";
import React, {Fragment} from 'react';
import '../index.scss';
import './ask.scss';

const TagPage = () => (
  <Fragment>
      <div className="grid-content">
        <div className="grid-content-center">
          <h1 className="fs-headline1 mb8">What languages, technologies, and/or frameworks is your question about?</h1>
          <p className="fs-body3 mb32">Tags help the right people find and answer your question.</p>
          <Tag />
        </div>
      </div>
  </Fragment>
)

export default TagPage;