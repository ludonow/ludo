import React from 'react';
import styled from 'styled-components';
import Avatar from './Avatar';
import HamburgerIcon from './HamburgerIcon';
import Logo from './Logo';

const HeaderWrapper = styled.div`
  align-items: center;
  background-color: #717070;
  display: flex;
  height: 40px;
  position: relative;
`;

const Header = () => (
  <HeaderWrapper>
    <HamburgerIcon />
    <Logo />
    <Avatar />
  </HeaderWrapper>
);

export default Header;
