// @flow
import React from 'react';
import styled from 'styled-components';

type Props = {
  toggle: Function,
}

const sidebarSrc = '/static/sidebar.png';

const ButtonWrapper = styled.div`
  img {
    cursor: pointer;
    width: 1.5vw;
  }
`;

const Button = ({ toggle }: Props) => (
  <ButtonWrapper onClick={toggle}>
    <img alt="sidebar-icon" src={sidebarSrc} />
  </ButtonWrapper>
);

export default Button;
