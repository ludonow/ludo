// @flow
import React from 'react';

import { IconWrapper } from '../baseStyle';

type Props = {
  togglePopUpMenu: Function
};

const MenuWrapper = IconWrapper.extend`
  position: relative;
  padding: 0 10px;
`;

export default ({ togglePopUpMenu }: Props) => (
  <MenuWrapper onClick={togglePopUpMenu}>
    HeaderMenu
  </MenuWrapper>
);
