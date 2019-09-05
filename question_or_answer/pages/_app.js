import React, { Component, Fragment } from 'react';
import { connect } from 'mobx-react';
import Layout from "../components/Layout";
import stores from '../stores';
import { Provider } from 'mobx-react';

export default class Index extends Component {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <Fragment>
        <Provider store={stores}>
          <Layout>
            <Component {...pageProps}/>
          </Layout>
        </Provider>
      </Fragment>
    );
  }
}
