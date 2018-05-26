import React from 'react';
import styled from 'styled-components';
import { translate } from 'react-i18next';
import BarChartPlot from './BarChartPlot';
import Button from '../../../components/Button';

const ButtonWrapper = styled.div`
  margin-top: 30px;
`;

const Wrapper = styled.div`
  margin: 0 50px;
`;

const BarChartPlotInfo = ({
  t,
}) => (
  <Wrapper>
    <BarChartPlot />
    <ButtonWrapper>
      <Button
        backgroundColor="#2fa0dd"
        label={t('suggestion')}
      />
    </ButtonWrapper>
  </Wrapper>
);

export default translate(['group'])(BarChartPlotInfo);
