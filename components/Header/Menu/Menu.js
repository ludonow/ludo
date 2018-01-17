import React from 'react';

import { IconWrapper } from '../baseStyle';

const MenuWrapper = IconWrapper.extend`
  position: relative;
  padding: 0 10px;
`;

export default ({ togglePopUpMenu }) => (
  <MenuWrapper onClick={togglePopUpMenu}>
    HeaderMenu
  </MenuWrapper>
);
