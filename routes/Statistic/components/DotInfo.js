import React from 'react';
import styled from 'styled-components';
import { translate } from 'react-i18next';
import Card from './Card';
import Button from '../../../components/Button';

const ButtonWrapper = styled.div`
  margin-top: 10px;
`;

const Wrapper = styled.div`
`;

const DotInfo = ({
  t,
}) => (
  <Wrapper>
    <Card />
    <ButtonWrapper>
      <Button
        backgroundColor="#2fa0dd"
        label={t('show reportList')}
      />
    </ButtonWrapper>
  </Wrapper>
);

export default translate(['statistic'])(DotInfo);
