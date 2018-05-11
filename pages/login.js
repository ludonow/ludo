import React, { Component } from 'react';
import withRedux from 'next-redux-wrapper';
import { I18nextProvider } from 'react-i18next';
import startI18n from '../tools/startI18n';
import { getTranslation } from '../tools/translationHelpers';
import configureStore from '../store/createStore';
import withLayout from '../hocs/withLayout';
import Login from '../routes/Login';

const lang = 'zh_tw';

const LoginPage = withLayout(Login);

class LoginWithi18n extends Component {
  static async getInitialProps() {
    const translations = await getTranslation(
      lang,
      ['layout'],
      'http://localhost:8080/static/locales/',
    );

    return { translations };
  }

  constructor(props) {
    super(props);
    this.i18n = startI18n(props.translations, lang);
  }

  render() {
    return (
      <I18nextProvider i18n={this.i18n}>
        <LoginPage />
      </I18nextProvider>
    );
  }
}

export default withRedux(configureStore)(LoginWithi18n);
