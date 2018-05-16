// @flow
import React from 'react';
import styled from 'styled-components';

import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import {
  getUserFromLocalCookie,
  getUserFromServerCookie,
} from '../utils/auth';
import withI18next from '../hocs/withI18next';
import { loginSuccess } from '../routes/Login/modules/auth';

const MainWrapper = styled.main`
  background-color: #ffc645;
  height: calc(100vh - 50px);
`;

function withLayout(Page) {
  class WrappedComponent extends React.Component {
    static getInitialProps(ctx) {
      const loggedUser = process.browser ? getUserFromLocalCookie() : getUserFromServerCookie(ctx.req);
      const pageProps = Page.getInitialProps && Page.getInitialProps(ctx);

      if (loggedUser) {
        ctx.store.dispatch(loginSuccess());
      }

      return {
        ...pageProps,
        loggedUser,
        currentUrl: ctx.pathname,
      };
    }

    constructor(props) {
      super(props);
      this.logout = this.logout.bind(this);
    }

    componentDidMount() {
      window.addEventListener('storage', this.logout, false);
    }

    componentWillUnmount() {
      window.removeEventListener('storage', this.logout, false);
    }

    logout(event) {
      if (event.key === 'logout') {
        Router.push(`/?logout=${event.newValue}`);
      }
    }

    render() {
      const { t } = this.props;
      return (
        <div>
          <Header />
          <Sidebar t={t} />
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
