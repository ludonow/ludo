import React from 'react';
import Router from 'next/router';
import {
  checkSecret,
  extractInfoFromHash,
  setToken,
} from '../../utils/auth';

export default class SignedIn extends React.Component {
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
