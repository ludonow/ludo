// @flow
import React, { Component } from 'react';
import ReactDropDownMenu from 'react-dd-menu';
import styled from 'styled-components';

import DropDownMenuContainer from './DropDownMenuContainer';
import ConnectedIcon from './IconContainer';

type Props = {};

type State = {
  isMenuOpen: boolean
};

const AvatarWrapper = styled.div`
  align-items: center;
  display: flex;
  height: 100%;
  position: absolute;
  right: 0;
`;

const ButtonWrapper = styled.button`
  background-color: transparent;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  margin: 0 1vw;
  padding: 0;
`;

class Avatar extends Component<Props, State> {
  constructor() {
    super();
    this.state = {
      isMenuOpen: false,
    };
    this.close = this.close.bind(this);
    this.toggle = this.toggle.bind(this);
  }

  close() {
    this.setState({ isMenuOpen: false });
  }

  toggle() {
    this.setState({ isMenuOpen: !this.state.isMenuOpen });
  }

  render() {
    const menuOptions = {
      align: 'right',
      close: this.close,
      closeOnInsideClick: false,
      isOpen: this.state.isMenuOpen,
      toggle: <ButtonWrapper onClick={this.toggle}><ConnectedIcon /></ButtonWrapper>,
    };

    return (
      <AvatarWrapper>
        <ReactDropDownMenu {...menuOptions}>
          <DropDownMenuContainer />
        </ReactDropDownMenu>
      </AvatarWrapper>
    );
  }
}

export default Avatar;
