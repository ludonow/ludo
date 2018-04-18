import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Login from './LoginForm';

Enzyme.configure({ adapter: new Adapter() });

describe('LoginForm component', () => {
  const props = {
    errorMessage: '',
    handleSubmit: jest.fn(),
    loginRequestAction: jest.fn(),
    isSubmitting: false,
    pristine: false,
  };
  const renderedComponent = shallow(<Login {...props} />);

  it('should render email input field', () => {
    expect(renderedComponent.find('Field[type="email"]')).toHaveLength(1);
  });

  it('should render password input field', () => {
    expect(renderedComponent.find('Field[type="password"]')).toHaveLength(1);
  });
});
