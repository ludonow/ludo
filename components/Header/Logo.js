import React from 'react';
import Link from 'next/link';
import { IconWrapper } from './baseStyle';

const ludoLogoSrc = '/static/ludo-logo.png';
const LogoWrapper = IconWrapper.extend`
  img {
    width: 52px;
  }
`;

const Logo = () => (
  <LogoWrapper>
    <Link href="/index">
      <a>
        <img alt="logo" src={ludoLogoSrc} />
      </a>
    </Link>
  </LogoWrapper>
);

export default Logo;
