import React, { Component } from 'react';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Head from '../components/Head';
import Header from '../components/Header/Header';
import NavBar from '../components/NavBar';
import Tabs from '../components/Tabs';

// Make sure react-tap-event-plugin only gets injected once
// Needed for material-ui
if (!process.tapEventInjected) {
  injectTapEventPlugin();
  process.tapEventInjected = true;
}

const tabTitles = ['我的模板', '模板引用'];

const MainWrapper = styled.div`
  background-color: #ffc645;
`;

class Index extends Component {
  static getInitialProps({ req }) {
    // Ensures material-ui renders the correct css prefixes server-side
    let userAgent;
    if (process.browser) {
      userAgent = navigator.userAgent;
    } else {
      userAgent = req.headers['user-agent'];
    }

    return { userAgent };
  }

  render() {
    const { userAgent } = this.props;
    return (
      <MuiThemeProvider muiTheme={getMuiTheme({ userAgent })}>
        <div>
          <Head />
          <Header />
          <MainWrapper>
            <Tabs tabTitles={tabTitles} />
            <NavBar />
          </MainWrapper>
        </div>
      </MuiThemeProvider>
    );
  }
}

Index.propTypes = {
  userAgent: PropTypes.string.isRequired
};

export default Index;
