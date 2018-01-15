import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import { withCondition } from '../../hoc/hoc';

const PopUpMenuWrapper = styled.div`
`;

export const PopUpMenu = ({ isShowingAvatarPopUpMenu, listItems }) => (
  <PopUpMenuWrapper>
    <ul>
      {
        listItems.map(listItem => <li>{listItem}</li>)
      }
    </ul>
  </PopUpMenuWrapper>
);

const conditionFn = props => !props.isShowingAvatarPopUpMenu;

export const UnconnectedPopUpMenu = withCondition(conditionFn)(PopUpMenu);

const mapStateToProps = state => ({
  isShowingAvatarPopUpMenu: state.header.isShowingAvatarPopUpMenu,
  listItems: state.header.listItems
});

export default connect(mapStateToProps)(UnconnectedPopUpMenu);
