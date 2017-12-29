import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import Header from '../components/Header/Header';

test('header style works', () => {
  const component = renderer.create(<Header />);
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
