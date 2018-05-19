// @flow
import React from 'react';
import styled from 'styled-components';
import { END } from 'redux-saga';
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import withI18next from '../hocs/withI18next';
import {
  fetchUserInfoRequest,
  getUserId,
} from '../routes/Auth/modules/user';
import {
  rootSaga,
  sagaMiddleware,
} from '../store/createStore';

const MainWrapper = styled.main`
  background-color: #ffc645;
  height: calc(100vh - 40px);
`;

function withLayout(Page) {
  class WrappedComponent extends React.Component {
    static async getInitialProps(ctx) {
      const {
        store,
      } = ctx;

      const rootTask = sagaMiddleware.run(rootSaga);
      if (!getUserId(store.getState())) {
        store.dispatch(fetchUserInfoRequest());
        store.dispatch(END);
        await rootTask.done.then(() => {
          console.log('root task done.');
        });
      }

      const pageProps = Page.getInitialProps && Page.getInitialProps(ctx);

      return {
        ...pageProps,
        initialState: store.getState(),
      };
    }

    render() {
      return (
        <div>
          <Header />
          <Navbar />
          <MainWrapper>
            <Page {...this.props} />
          </MainWrapper>
        </div>
      );
    }
  }

  return withI18next(['layout'])(WrappedComponent);
}

export default withLayout;
