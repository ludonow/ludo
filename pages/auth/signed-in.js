import React from 'react';
import Router from 'next/router';
import withRedux from 'next-redux-wrapper';
import configureStore from '../../store/createStore';
import withLayout from '../../hocs/withLayout';
import {
  checkSecret,
  extractInfoFromHash,
  setToken,
} from '../../utils/auth';

class SignedIn extends React.Component {
  componentDidMount() {
    const {
      secret,
      token,
    } = extractInfoFromHash();
    if (!checkSecret(secret) || !token) {
      console.error('Something happened with the Sign In request');
    }
    setToken(token);
    Router.push('/');
  }

  render() {
    return null;
  }
}

const SignedInPage = withLayout(SignedIn);

export default withRedux(configureStore)(SignedInPage);
