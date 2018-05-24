import React from 'react';
import styled from 'styled-components';
import TemplateListInGroup from '../../components/TemplateListInGroup';
import Statistic from '../Statistic';

const Wrapper = styled.div`
  display: inline-flex;
`;

const StatisticInGroup = () => (
  <Wrapper>
    <TemplateListInGroup />
    <Statistic />
  </Wrapper>
);

export default StatisticInGroup;
