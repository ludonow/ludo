import React from 'react';

const withEither = (conditionalRenderingFn, EitherComponent) => BaseComponent => props => (
  conditionalRenderingFn(props)
    ? <EitherComponent {...props} />
    : <BaseComponent {...props} />
);

export default withEither;
