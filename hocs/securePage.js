import React from 'react';
import PropTypes from 'prop-types';
import NotAuthorized from '../components/NotAuthorized';
import withLayout from './withLayout';

const securePageHoc = Page => class SecurePage extends React.Component {
  static propTypes = {
    isAuthenticated: PropTypes.bool.isRequired,
  }

  static getInitialProps(ctx) {
    return Page.getInitialProps && Page.getInitialProps(ctx);
  }

  render() {
    const { isAuthenticated } = this.props;
    return isAuthenticated ? <Page {...this.props} /> : <NotAuthorized />;
  }
};

export default Page => withLayout(securePageHoc(Page));
