import React , {Fragment} from 'react';
import Description from '../components/ask/Description';
import {inject, observer} from 'mobx-react';
import '../index.scss';
import './ask.scss';

const DescriptionPage = ({store}) => {
  return (
    <Fragment>
      <div className="grid-content">
        <div className="grid-content-center">
          <h1 className="fs-headline1 mb8">Tell us more about your question</h1>
          <p className="fs-body3 mb32">Your description gives people the information they need to help you answer your question.</p>
          <Description store={store} />
        </div>
      </div>
    </Fragment>
  );
};

export default inject('store')(observer(DescriptionPage));