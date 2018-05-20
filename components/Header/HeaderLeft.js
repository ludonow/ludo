import React from 'react';
import styled from 'styled-components';

import HamburgerIconContainer from './HamburgerIconContainer';
import Logo from './Logo';

const HeaderLeftWrapper = styled.div`
    align-items: center;
    display: inline-flex;
    height: 40px;
    justify-content: space-between;
`;

const HeaderLeft = () => (
  <HeaderLeftWrapper>
    <HamburgerIconContainer />
    <Logo />
  </HeaderLeftWrapper>
);

export default HeaderLeft;
