import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

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

const AvatarWrapper = IconWrapper.extend`
  position: absolute;
  right: 0;
`;

const PopUpMenu = styled.div`
  display: ${props => props.isShowingAvatarPopUpMenu ? 'block' : 'none'};
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

const Avatar = ({
  handleAvatarPopMenuToggle,
  isShowingAvatarPopUpMenu
}) => (
  <AvatarWrapper onClick={handleAvatarPopMenuToggle}>
    defaultAvatar
    <PopUpMenu isShowingAvatarPopUpMenu={isShowingAvatarPopUpMenu} >
      popupMenu
    </PopUpMenu>
  </AvatarWrapper>
);

Avatar.propTypes = {
  handleAvatarPopMenuToggle: PropTypes.func.isRequired,
  isShowingAvatarPopUpMenu: PropTypes.func.isRequired
};

const Header = ({
  handleAvatarPopMenuToggle,
  isShowingAvatarPopUpMenu
}) => (
  <HeaderWrapper>
    <Menu />
    <Logo />
    <Avatar
      handleAvatarPopMenuToggle={handleAvatarPopMenuToggle}
      isShowingAvatarPopUpMenu={isShowingAvatarPopUpMenu}
    />
  </HeaderWrapper>
);

Header.propTypes = {
  handleAvatarPopMenuToggle: PropTypes.func.isRequired,
  isShowingAvatarPopUpMenu: PropTypes.func.isRequired
};

export default Header;
