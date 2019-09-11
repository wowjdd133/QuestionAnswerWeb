import React , {Fragment} from 'react';
import Description from '../components/ask/Description';
import {inject, observer} from 'mobx-react';
import '../index.scss';
import './ask.scss';

const DescriptionPage = ({store}) => {
  return (
    <Fragment>
      <div className="content">
        <div className="grid-center">
          <h1>Tell us more about your question</h1>
          <p>description</p>
          <Description store={store} />
        </div>
      </div>
    </Fragment>
  );
};

export default inject('store')(observer(DescriptionPage));