// @flow
import React, { Component } from 'react';
import styled from 'styled-components';

import withEither from '../../hoc/withEither';
import Button from './Button';
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

const conditionalRenderingFn = props => props.isMenuOpen;
const RenderedSidebar = withEither(conditionalRenderingFn, Menu)(Button);

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
    return (
      <SidebarWrapper>
        <Menu
          isMenuOpen={this.state.isMenuOpen}
          toggle={this.toggle}
        />
      </SidebarWrapper>
    );
  }
}

export default Sidebar;
