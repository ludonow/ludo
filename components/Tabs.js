import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const TabWrapper = styled.div`
  color: white;
`;

const TabsWrapper = styled.div`
`;

const Tabs = ({ tabTitles }) => (
  <TabsWrapper>
    {
      tabTitles.map((tabTitle, index) => (
        <TabWrapper key={`tab-${index}`}>
          {tabTitle}
        </TabWrapper>
      ))
    }
  </TabsWrapper>
);

Tabs.propTypes = {
  tabTitles: PropTypes.PropTypes.arrayOf(PropTypes.string).isRequired
};

export default Tabs;
