import React from 'react';
import styled from 'styled-components';
import { translate } from 'react-i18next';
import ScatterPlot from './ScatterPlot';
import Button from '../../../components/Button';

const ButtonWrapper = styled.div`
  margin-top: 30px;
`;

const Wrapper = styled.div`
  margin: 0 50px;
`;

const ScatterPlotInfo = ({
  t,
}) => (
  <Wrapper>
    <ScatterPlot />
    <ButtonWrapper>
      <Button
        backgroundColor="#2fa0dd"
        label={t('select')}
      />
    </ButtonWrapper>
  </Wrapper>
);

export default translate(['statistic'])(ScatterPlotInfo);
