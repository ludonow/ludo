// @flow
import React from 'react';
import styled from 'styled-components';
import { I18nextProvider } from 'react-i18next';
import startI18n from '../tools/startI18n';
import { getTranslation } from '../tools/translationHelpers';
import Header from '../components/Header';
import Navbar from '../components/Navbar';

const MainWrapper = styled.main`
  background-color: #ffc645;
  height: calc(100vh - 40px);
`;

const lang = 'zh-TW';

function withLayout(Page) {
  class WrappedComponent extends React.Component {
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
          <div>
            <Header />
            <Navbar />
            <MainWrapper>
              <Page />
            </MainWrapper>
          </div>
        </I18nextProvider>
      );
    }
  }

  return WrappedComponent;
}

export default withLayout;
