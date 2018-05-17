// @flow
import React, { Component } from 'react';
import styled from 'styled-components';

const HamburgerIconWrapper = styled.div`
  cursor: pointer;
  display: inline-block;
  position: relative;
  @media (min-width: 769px) {
    margin: 5px 15px 0 15px;
  }
  @media (max-width: 768px) {
    margin: 22px;
  }
  span {
    background: #cdcdcd;
    border-radius: 3px;
    display: block;
    height: 1px;
    position: relative;
    transform-origin: 4px 0px;
    transition: transform 0.5s cubic-bezier(0.77,0.2,0.05,1.0),
                background 0.5s cubic-bezier(0.77,0.2,0.05,1.0),
                opacity 0.55s ease;
    z-index: 1;
    @media (min-width: 769px) {
      margin-bottom: 5px;
      width: 15px;
    }
    @media (max-width: 768px) {
      margin-bottom: 10px;
      width: 40px;
    }
  }
`;

type Props = {
  handleNavbarToggle: func,
  isNavbarVisible: boolean,
};

class HamburgerIcon extends Component<Props> {
  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const {
      handleNavbarToggle,
      isNavbarVisible,
    } = this.props;
    handleNavbarToggle(!isNavbarVisible);
  }

  render() {
    return (
      <HamburgerIconWrapper onClick={this.handleClick}>
        <span />
        <span />
        <span />
      </HamburgerIconWrapper>
    );
  }
}

export default HamburgerIcon;
