import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  background-color: #838383;
  border-bottom: 5px solid #838383;
  border-top: 5px solid #838383;
  color: white;
  font-size: 12px;
  font-weight: bold;
  padding: 5px 0;
  text-align: center;
  width: 100%;
`;

const BorderTop = () => (
  <Wrapper>
    已結束
  </Wrapper>
);

export default BorderTop;
