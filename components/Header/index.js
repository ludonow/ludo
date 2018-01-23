import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';

import { IconWrapper } from './baseStyle';
import Avatar from './Avatar';

const LudoLogoSrc = '/static/LudoLogo.png';

const HeaderWrapper = styled.div`
  background-color: #717070;
  display: flex;
  height: 9vh;
  position: relative;
`;

const LogoWrapper = IconWrapper.extend`
  padding-left: 3vw;

  img {
    height: 4vh;
    width: 7vw;
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
    <Logo />
    <Avatar />
  </HeaderWrapper>
);

export default Header;
