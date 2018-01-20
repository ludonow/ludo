import React from 'react';
import styled from 'styled-components';

import Header from '../components/Header';

const MainWrapper = styled.main`
  background-color: #ffc645;
  height: calc(100vh - 50px);
`;

const withApp = (Child) => {
  const WrappedComponent = props => (
    <div>
      <Header />
      <MainWrapper>
        <Child {...props} />
      </MainWrapper>
    </div>
  );

  return WrappedComponent;
};

export default withApp;
