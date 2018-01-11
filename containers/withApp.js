import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as togglePopUpMenu from '../redux/module/togglePopUpMenu';

import Header from '../components/Header';

const withApp = (Child) => {
  class WrappedComponent extends Component {
    constructor(props) {
      super(props);
      this.handleAvatarPopUpMenuToggle = this.handleAvatarPopUpMenuToggle.bind(this);
    }

    handleAvatarPopUpMenuToggle(event) {
      event.preventDefault();
      this.props.toggleAvatarPopUpMenu();
    }

    render() {
      const { isShowingAvatarPopUpMenu } = this.props;
      return (
        <div>
          <Header
            handleAvatarPopUpMenuToggle={this.handleAvatarPopUpMenuToggle}
            isShowingAvatarPopUpMenu={isShowingAvatarPopUpMenu}
          />
          <main>
            <Child {...this.props} />
          </main>
          <footer>
            <h1>Footer</h1>
          </footer>
        </div>
      );
    }
  }

  const mapStateToProps = state => (state);

  const mapDispatchToProps = dispatch => ({
    toggleAvatarPopUpMenu: bindActionCreators(togglePopUpMenu.toggleAvatarPopUpMenu, dispatch)
  });

  return connect(mapStateToProps, mapDispatchToProps)(WrappedComponent);
};

export default withApp;
