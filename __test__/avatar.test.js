import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import createMockStore from 'redux-mock-store';

import shallowWithStore from './shallowWithStore';

Enzyme.configure({ adapter: new Adapter() });

describe('drop down menu view', () => {
  it('should should use correct langage as text', () => {
    const testState = {
      auth: {
        userId: 'defaultUserId'
      },
      language: 'zh-tw',
    };
    const store = createMockStore(testState);
    expect();
  });
});
