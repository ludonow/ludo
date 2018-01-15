import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import { UnconnectedAvatar } from '../components/Header/Avatar/index';
import { defaultAvatarSrc, UnconnectedAvatarIcon } from '../components/Header/Avatar/AvatarIcon';
import { UnconnectedAvatarPopUpMenu, PopUpMenu } from '../components/Header/Avatar/AvatarPopUpMenu';

import * as header from '../redux/module/header';

Enzyme.configure({ adapter: new Adapter() });

// Component
describe('header avatar click event', () => {
  it('should trigger click event correctly', () => {
    const props = {
      toggleAvatarPopUpMenu: jest.fn()
    };
    const wrapper = shallow(<UnconnectedAvatar {...props} />);
    expect(props.toggleAvatarPopUpMenu).not.toHaveBeenCalled();
    wrapper.simulate('click');
    expect(props.toggleAvatarPopUpMenu).toHaveBeenCalledTimes(1);
    wrapper.simulate('click');
    expect(props.toggleAvatarPopUpMenu).toHaveBeenCalledTimes(2);
  });
});

describe('header avatar icon view', () => {
  it('should show avatar default icon', () => {
    const props = {
      userPhotoUrl: null
    };
    const wrapper = shallow(<UnconnectedAvatarIcon {...props} />);
    expect(wrapper.dive().find('img').prop('alt')).toEqual('default-avatar');
    expect(wrapper.dive().find('img').prop('src')).toEqual(defaultAvatarSrc);
  });

  it('should show photo of user when userPhotoUrl has value', () => {
    const props = {
      userPhotoUrl: 'http://placehold.it/600/92c952'
    };
    const wrapper = shallow(<UnconnectedAvatarIcon {...props} />);
    expect(wrapper.dive().find('img').prop('alt')).toEqual('user');
  });
});

describe('header avatar pop up menu view', () => {
  it('should not show avatar pop up menu by default', () => {
    const props = {
      isShowingAvatarPopUpMenu: false
    };
    const wrapper = shallow(<UnconnectedAvatarPopUpMenu {...props} />);
    expect(wrapper.find('noscript').exists()).toEqual(true);
  });

  it('should show avatar pop up menu when the prop isShowingAvatarPopUpMenu is true', () => {
    const props = {
      isShowingAvatarPopUpMenu: true
    };
    const wrapper = shallow(<UnconnectedAvatarPopUpMenu {...props} />);
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
  const initialState = {
    isShowingAvatarPopUpMenu: false
  };

  it('should return initial state', () => {
    expect(header.reducer(undefined, {})).toEqual(initialState);
  });

  it('should return avatar pop up menu open state', () => {
    const actions = {
      type: header.TOGGLE_AVATAR_POP_UP_MENU
    };
    expect(header.reducer(initialState, actions)).toEqual({
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
    expect(header.reducer(initialState, actions)).toEqual({
      isShowingAvatarPopUpMenu: false
    });
  });
});
