import React from 'react';
import styled from 'styled-components';
import StatisticInfo from '../Statistic/components/StatisticInfo';
import TemplateListInGroup from '../../components/TemplateListInGroup';
import GroupTitleContainer from './components/GroupTitleContainer';
import BarChartPlotInfo from './components/BarChartPlotInfo';

const Wrapper = styled.div`
  display: inline-flex;
`;

const Group = () => (
  <Wrapper>
    <TemplateListInGroup />
    <div>
      <GroupTitleContainer />
      <StatisticInfo />
      <BarChartPlotInfo />
    </div>
  </Wrapper>
);

export default Group;
