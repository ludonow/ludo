import React from 'react';
import styled from 'styled-components';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as header from '../../../redux/module/header';

import Icon from './Icon';
import PopUpMenu from './PopUpMenu';

const AvatarWrapper = styled.div`
  align-items: center;
  display: flex;
  position: relative;
  right: 0;
`;

export const UnconnectedAvatar = ({ togglePopUpMenu }) => (
  <AvatarWrapper onClick={togglePopUpMenu}>
    <Icon />
    <PopUpMenu />
  </AvatarWrapper>
);

const mapDispatchToProps = dispatch => ({
  togglePopUpMenu: bindActionCreators(header.toggleAvatarPopUpMenu, dispatch)
});

export default connect(null, mapDispatchToProps)(UnconnectedAvatar);
