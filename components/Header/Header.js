import React from 'react';
import styled from 'styled-components';

import MenuIcon from 'material-ui/svg-icons/navigation/menu';
import PersonIcon from 'material-ui/svg-icons/social/person';
import { white } from 'material-ui/styles/colors';

const LudoLogoSrc = '/static/LudoLogo.png';

const HeaderWrapper = styled.div`
  align-self: center;
  background-color: #717070;
  display: flex;
  height: 50px;
  position: relative;
`;

const IconWrapper = styled.div`
  align-self: center;
  display: inline-flex;
  padding: 0 20px;
`;

const LogoWrapper = IconWrapper.extend`
  align-self: center;
  margin: 0 auto;

  img {
    height: 25px;
  }
`;

const ProfileWrapper = IconWrapper.extend`
  position: absolute;
  right: 0;
`;

const Logo = () => (
  <LogoWrapper>
    <img alt="logo" src={LudoLogoSrc} />
  </LogoWrapper>
);

const Menu = () => (
  <IconWrapper>
    <MenuIcon color={white} />
  </IconWrapper>
);

const Profile = () => (
  <ProfileWrapper>
    <PersonIcon color={white} />
  </ProfileWrapper>
);

export default () => (
  <HeaderWrapper>
    <Menu />
    <Logo />
    <Profile />
  </HeaderWrapper>
);
