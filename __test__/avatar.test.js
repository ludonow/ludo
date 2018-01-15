import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import { UnconnectedAvatar } from '../components/Header/Avatar/Avatar';
import { defaultAvatarSrc, UnconnectedIcon } from '../components/Header/Avatar/Icon';
import { UnconnectedPopUpMenu, PopUpMenu } from '../components/Header/Avatar/PopUpMenu';

import * as header from '../redux/module/header';

Enzyme.configure({ adapter: new Adapter() });

// Component
describe('header avatar click event', () => {
  it('should trigger click event correctly', () => {
    const props = {
      togglePopUpMenu: jest.fn()
    };
    const wrapper = shallow(<UnconnectedAvatar {...props} />);
    expect(props.togglePopUpMenu).not.toHaveBeenCalled();
    wrapper.simulate('click');
    expect(props.togglePopUpMenu).toHaveBeenCalledTimes(1);
    wrapper.simulate('click');
    expect(props.togglePopUpMenu).toHaveBeenCalledTimes(2);
  });
});

describe('header avatar icon view', () => {
  it('should show avatar default icon', () => {
    const props = {
      userPhotoUrl: null
    };
    const wrapper = shallow(<UnconnectedIcon {...props} />);
    expect(wrapper.dive().find('img').prop('alt')).toEqual('default-avatar');
    expect(wrapper.dive().find('img').prop('src')).toEqual(defaultAvatarSrc);
  });

  it('should show photo of user when userPhotoUrl has value', () => {
    const props = {
      userPhotoUrl: 'http://placehold.it/600/92c952'
    };
    const wrapper = shallow(<UnconnectedIcon {...props} />);
    expect(wrapper.dive().find('img').prop('alt')).toEqual('user');
  });
});

describe('header avatar pop up menu view', () => {
  it('should not show avatar pop up menu by default', () => {
    const props = {
      isShowingAvatarPopUpMenu: false
    };
    const wrapper = shallow(<UnconnectedPopUpMenu {...props} />);
    expect(wrapper.type()).toEqual(null);
  });

  it('should show avatar pop up menu when the prop isShowingAvatarPopUpMenu is true', () => {
    const props = {
      isShowingAvatarPopUpMenu: true
    };
    const wrapper = shallow(<UnconnectedPopUpMenu {...props} />);
    expect(wrapper.find(PopUpMenu).exists()).toEqual(true);
  });
});

describe('actions', () => {
  it('should create an action to toggle avatar pop up menu', () => {
    const expectedAction = {
      type: header.TOGGLE_AVATAR_POP_UP_MENU
    };
    expect(header.toggleAvatarPopUpMenu()).toEqual(expectedAction);
  });
});

describe('avatar reducers', () => {
  it('should return initial state', () => {
    expect(header.reducer(undefined, {})).toEqual(header.initialState);
  });

  it('should return avatar pop up menu open state', () => {
    const actions = {
      type: header.TOGGLE_AVATAR_POP_UP_MENU
    };
    expect(header.reducer(header.initialState, actions)).toEqual({
      ...header.initialState,
      isShowingAvatarPopUpMenu: true
    });
  });

  it('should return avatar pop up menu close state', () => {
    const actions = [
      {
        type: header.TOGGLE_AVATAR_POP_UP_MENU
      },
      {
        type: header.TOGGLE_AVATAR_POP_UP_MENU
      }
    ];
    expect(header.reducer(header.initialState, actions)).toEqual({
      ...header.initialState,
      isShowingAvatarPopUpMenu: false
    });
  });
});
