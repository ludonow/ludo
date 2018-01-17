import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import configureStore from 'redux-mock-store';

import shallowWithStore from './shallowWithStore';

import multiLanguage from '../static/multiLanguage';

import HeaderAvatarDropDownMenu from '../containers/HeaderAvatarDropDownMenu';

Enzyme.configure({ adapter: new Adapter() });

const mockStore = configureStore();

describe('drop down menu view', () => {
  it('should use correct langage as text', () => {
    const testState = {
      auth: {
        userId: 'defaultUserId'
      },
      multiLanguage: {
        language: 'zh-tw'
      }
    };
    const store = mockStore(testState);
    const component = shallowWithStore(<HeaderAvatarDropDownMenu />, store);
    const texts = component.dive().find('li a').map(node => node.text());
    expect(texts).toEqual(multiLanguage['zh-tw'].header.avatar.unAuthorizedDropDownMenuItems);
  });
});
