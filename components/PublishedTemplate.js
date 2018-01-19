import React from 'react';
import styled from 'styled-components';

import NavBar from './NavBar';
import Tabs from './Tabs';

const tabTitles = ['我的模板', '模板引用'];

const PublishedTemplateWrapper = styled.div`
  background-color: #ffc645;
`;

const PublishedTemplate = () => (
  <PublishedTemplateWrapper>
    <Tabs tabTitles={tabTitles} />
    <NavBar />
  </PublishedTemplateWrapper>
);

export default PublishedTemplate;
