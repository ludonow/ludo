import React from 'react';

const withEither = (conditionalRenderingFn, EitherComponent) => BaseComponent => props => (
  conditionalRenderingFn(props)
    ? <EitherComponent />
    : <BaseComponent {...props} />
);

export default withEither;
