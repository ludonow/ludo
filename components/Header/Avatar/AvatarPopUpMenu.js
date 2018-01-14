import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

const PopUpMenuWrapper = styled.div`
  background-color: blue;
`;

export const PopUpMenu = ({ isShowingAvatarPopUpMenu }) => (
  <PopUpMenuWrapper>
    PopUpMenu
  </PopUpMenuWrapper>
);

const withNullAvatarPopUpMenu = BaseComponent => props => (
  !props.isShowingAvatarPopUpMenu
    ? <noscript />
    : <BaseComponent {...props} />
);

export const UnconnectedAvatarPopUpMenu = withNullAvatarPopUpMenu(PopUpMenu);

const mapStateToProps = state => ({
  isShowingAvatarPopUpMenu: state.header.isShowingAvatarPopUpMenu
});

const AvatarPopUpMenu = connect(mapStateToProps)(UnconnectedAvatarPopUpMenu);

export default AvatarPopUpMenu;
