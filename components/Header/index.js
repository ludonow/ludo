import React from 'react';
import styled from 'styled-components';

import Avatar from './Avatar/index';

import { IconWrapper } from './baseStyle';

const LudoLogoSrc = '/static/LudoLogo.png';

const HeaderWrapper = styled.div`
  align-self: center;
  background-color: #717070;
  display: flex;
  height: 50px;
  position: relative;
`;

const LogoWrapper = IconWrapper.extend`
  align-self: center;
  margin: 0 auto;

  img {
    height: 25px;
  }
`;

const Logo = () => (
  <LogoWrapper>
    <img alt="logo" src={LudoLogoSrc} />
  </LogoWrapper>
);

const Menu = () => (
  <IconWrapper>
    MenuIcon
  </IconWrapper>
);

const Header = () => (
  <HeaderWrapper>
    <Menu />
    <Logo />
    <Avatar />
  </HeaderWrapper>
);

export default Header;
