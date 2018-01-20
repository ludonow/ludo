import React from 'react';

const withCondition = conditionalRenderingFn => Component => props => (
  conditionalRenderingFn(props)
    ? null
    : <Component {...props} />
);

export default withCondition;
