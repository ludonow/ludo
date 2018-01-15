import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import { UnconnectedMenu } from '../components/Header/Menu/Menu';

Enzyme.configure({ adapter: new Adapter() });

describe('header menu view', () => {
  it('should render menu icon', () => {
    const wrapper = shallow(<UnconnectedMenu />);
    expect(wrapper).toHaveLength(1);
  });
});
