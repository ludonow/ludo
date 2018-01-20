import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Menu from '../components/Header/Menu';

Enzyme.configure({ adapter: new Adapter() });

describe('header menu view', () => {
  it('should render menu icon', () => {
    const wrapper = shallow(<Menu />);
    expect(wrapper).toHaveLength(1);
  });
});
