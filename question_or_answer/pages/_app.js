import React, { Component } from 'react';
import Layout from "./components/Layout";
import stores from '../stores';
import { Provider } from 'mobx-react';
import Head from 'next/head';

export default class Index extends Component {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <Provider store={stores}>
        <Head>
          <style global jsx>
            {
              `
              html,body, #__next{
                height: 100%;
                width: 100%;
                margin: 0; 
              }
              `
            }
          </style>
        </Head>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Provider>
    );
  }
}
