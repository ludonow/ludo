import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as header from '../../../redux/module/header';

import AvatarIcon from './AvatarIcon';
import AvatarPopUpMenu from './AvatarPopUpMenu';

import { IconWrapper } from '../baseStyle';

const AvatarWrapper = IconWrapper.extend`
  position: absolute;
  right: 0;
`;

export const UnconnectedAvatar = ({ toggleAvatarPopUpMenu }) => (
  <AvatarWrapper onClick={toggleAvatarPopUpMenu}>
    <AvatarIcon />
    <AvatarPopUpMenu />
  </AvatarWrapper>
);

const mapDispatchToProps = dispatch => ({
  toggleAvatarPopUpMenu: bindActionCreators(header.toggleAvatarPopUpMenu, dispatch)
});

const Avatar = connect(
  null,
  mapDispatchToProps
)(UnconnectedAvatar);

export default Avatar;
