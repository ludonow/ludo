import React, { Component } from 'react';
import ReactDropDownMenu from 'react-dd-menu';
import styled from 'styled-components';

import DropDownMenu from '../../../containers/DropDownMenuContainer';
import Icon from './Icon';

const AvatarWrapper = styled.div`
  align-items: center;
  display: flex;
  position: relative;
  right: 0;
`;

const ButtonWrapper = styled.button`
  background-color: transparent;
  border: none;
  border-radius: 50%;
  margin: 0 10px;
  padding: 0;
`;

export class Avatar extends Component {
  constructor() {
    super();
    this.state = {
      isMenuOpen: false
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
      toggle: <ButtonWrapper onClick={this.toggle}><Icon /></ButtonWrapper>
    };

    return (
      <AvatarWrapper>
        <ReactDropDownMenu {...menuOptions}>
          <DropDownMenu />
        </ReactDropDownMenu>
      </AvatarWrapper>
    );
  }
}

export default Avatar;
