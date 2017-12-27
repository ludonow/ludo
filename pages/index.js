import React from 'react';
import styled from 'styled-components';

import Header from '../components/Header/Header';
import NavBar from '../components/NavBar';
import Tabs from '../components/Tabs';

const tabTitles = ['我的模板', '模板引用'];

const MainWrapper = styled.div`
  background-color: #ffc645;
`;

const Index = () => (
  <div>
    <Header />
    <MainWrapper>
      <Tabs tabTitles={tabTitles} />
      <NavBar />
    </MainWrapper>
  </div>
);

export default Index;
