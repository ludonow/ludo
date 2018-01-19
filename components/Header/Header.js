import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';

import { IconWrapper } from './baseStyle';

import Avatar from './Avatar/Avatar';
import Menu from './Menu/Menu';

const LudoLogoSrc = '/static/LudoLogo.png';

const HeaderWrapper = styled.div`
  background-color: #717070;
  display: flex;
  height: 50px;
  position: relative;
`;

const LogoWrapper = IconWrapper.extend`
  margin: 0 auto;
  padding: 0 20px;

  img {
    height: 25px;
  }
`;

const Logo = () => (
  <LogoWrapper>
    <Link href="/index">
      <a>
        <img alt="logo" src={LudoLogoSrc} />
      </a>
    </Link>
  </LogoWrapper>
);

const Header = () => (
  <HeaderWrapper>
    <Menu />
    <Logo />
    <Avatar />
  </HeaderWrapper>
);

export default Header;
