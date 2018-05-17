import React from 'react';
import Link from 'next/link';
import { IconWrapper } from './baseStyle';

const LudoLogoSrc = '/static/LudoLogo.png';
const LogoWrapper = IconWrapper.extend`
  img {
    width: 52px;
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

export default Logo;
