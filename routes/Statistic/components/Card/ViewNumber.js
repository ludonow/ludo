import React from 'react';
import styled from 'styled-components';

const eyeIconSrc = './static/eye.svg';

const Icon = styled.img`
  height: 15px;
  width: 15px;
`;
const Number = styled.span`
  font-size: 12px;
`;
const Wrapper = styled.div`
  align-items: center;
  bottom: 5px;
  justify-content: flex-end;
  display: flex;
  position: relative;
  right: 5px;
  width: 100%;
`;

const ViewNumber = () => (
  <Wrapper>
    <Icon src={eyeIconSrc} />
    <Number>
      34
    </Number>
  </Wrapper>
);

export default ViewNumber;


