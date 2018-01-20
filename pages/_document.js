import React from 'react';
import Document, { Head, Main, NextScript } from 'next/document';
import { injectGlobal, ServerStyleSheet } from 'styled-components';

import resetJS from '../static/reset';

injectGlobal`
  ${resetJS}
`;

export default class MyDocument extends Document {
  static getInitialProps({ renderPage }) {
    const sheet = new ServerStyleSheet();
    const page = renderPage(App => props => sheet.collectStyles(<App {...props} />));
    const styleTags = sheet.getStyleElement();
    return { ...page, styleTags };
  }

  render() {
    return (
      <html lang="zh-TW">
        <Head>
          <title>Ludo</title>
          <meta charSet="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="og:title" content="LUDO Now 如荼生活" />
          <meta name="og:description" content="LUDO 是一種對生活的態度：生活遊戲化。 我們將提供一個平台網站讓生活中的困難點能被有趣地解決" />
          <meta name="og:type" content="website" />
          {this.props.styleTags}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
