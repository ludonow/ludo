import React, { Component } from 'react';
import withRedux from 'next-redux-wrapper';
import { I18nextProvider } from 'react-i18next';

import startI18n from '../tools/startI18n';
import { getTranslation } from '../tools/translationHelpers';
import configureStore from '../store/createStore';
import withApp from '../hoc/withApp';
import Search from '../routes/Search';

const lang = 'zh_tw';

const Page = withApp(Search);

class Homepage extends Component {
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
        <Page />
      </I18nextProvider>
    );
  }
}

export default withRedux(configureStore)(Homepage);
