// @flow
import React, { Component } from 'react';
import styled from 'styled-components';

import Menu from './Menu';

type Props = {};

type State = {
  isMenuOpen: boolean
};

const SidebarWrapper = styled.aside`
  align-items: center;
  display: flex;
  height: 100vh;
  margin: 0 1vw;
  position: fixed;
  right: 0;
`;

class Sidebar extends Component<Props, State> {
  constructor() {
    super();
    this.state = {
      isMenuOpen: false,
    };
    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({ isMenuOpen: !this.state.isMenuOpen });
  }

  render() {
    const { t } = this.props;
    return (
      <SidebarWrapper>
        <Menu
          isMenuOpen={this.state.isMenuOpen}
          t={t}
          toggle={this.toggle}
        />
      </SidebarWrapper>
    );
  }
}

export default Sidebar;
