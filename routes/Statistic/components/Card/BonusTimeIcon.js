import React from 'react';
import styled from 'styled-components';

const bonusTimeIconSrc = './static/sun.svg';

const Icon = styled.img`
  width: 100px;
`;

const Wrapper = styled.div`
  margin: 30px 0;
`;

const BonusTimeIcon = () => (
  <Wrapper>
    <Icon
      alt="bonus-time"
      src={bonusTimeIconSrc}
    />
  </Wrapper>
);

export default BonusTimeIcon;
