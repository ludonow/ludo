import React from 'react';
import styled from 'styled-components';

import NavBar from './NavBar';
import Tabs from './Tabs';

const tabTitles = ['我的模板', '模板引用'];

const MainWrapper = styled.div`
  background-color: #ffc645;
`;

const Main = () => (
  <MainWrapper>
    <Tabs tabTitles={tabTitles} />
    <NavBar />
  </MainWrapper>
);

export default Main;
