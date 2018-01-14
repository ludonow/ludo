import React from 'react';

import Header from '../components/Header/index';

const withApp = (Child) => {
  const WrappedComponent = props => (
    <div>
      <Header />
      <main>
        <Child {...props} />
      </main>
      <footer>
        <h1>Footer</h1>
      </footer>
    </div>
  );

  return WrappedComponent;
};

export default withApp;
