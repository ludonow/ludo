import React from 'react';

export const withEither = (conditionalRenderingFn, EitherComponent) => BaseComponent => props => (
  conditionalRenderingFn(props)
    ? <EitherComponent />
    : <BaseComponent {...props} />
);

export const withCondition = conditionalRenderingFn => Component => props => (
  conditionalRenderingFn(props)
    ? null
    : <Component {...props} />
);
