import React , {Fragment} from 'react';
import Description from '../components/ask/Description';
import {inject, observer} from 'mobx-react';

const DescriptionPage = ({store}) => {
  return (
    <Fragment>
      <h1>Tell us more about your question</h1>
      <p>description</p>
      <Description store={store}/>
    </Fragment>
  );
};

export default inject('store')(observer(DescriptionPage));