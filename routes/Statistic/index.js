import React from 'react';
import styled from 'styled-components';
import DotInfo from './components/DotInfo';
import StatisticInfo from './components/StatisticInfo';
import ScatterPlotInfo from './components/ScatterPlotInfo';
import TemplateTitleContainer from './components/TemplateTitleContainer';

const Main = styled.div`
  display: inline-flex;
  justify-content: center;
  margin: 50px 0;
  width: 100%;
`;

const Statistic = () => (
  <div>
    <TemplateTitleContainer />
    <StatisticInfo />
    <Main>
      <ScatterPlotInfo />
      <DotInfo />
    </Main>
  </div>
);

export default Statistic;
