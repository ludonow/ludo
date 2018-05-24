import React from 'react';
import styled from 'styled-components';
import BorderTop from './BorderTop';
import BonusTimeIcon from './BonusTimeIcon';
import Duration from './Duration';
import Title from './Title';
import ViewNumber from './ViewNumber';

const Wrapper = styled.div`
  align-items: center;
  background-color: white;
  border: 5px solid #838383;
  border-top: none;
  display: flex;
  flex-direction: column;
  width: 210px;
`;

const Card = () => (
  <Wrapper>
    <BorderTop />
    <BonusTimeIcon />
    <Title />
    <Duration />
    <ViewNumber />
  </Wrapper>
);

export default Card;
