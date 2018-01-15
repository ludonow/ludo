import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { IconWrapper } from '../baseStyle';

import * as header from '../../../redux/module/header';

const MenuWrapper = IconWrapper.extend`
  position: relative;
  padding: 0 10px;
`;

export const UnconnectedMenu = ({ togglePopUpMenu }) => (
  <MenuWrapper onClick={togglePopUpMenu}>
    HeaderMenu
  </MenuWrapper>
);

const mapDispatchToProps = dispatch => ({
  togglePopUpMenu: bindActionCreators(header.toggleMenuPopUpMenu, dispatch)
});

export default connect(null, mapDispatchToProps)(UnconnectedMenu);
