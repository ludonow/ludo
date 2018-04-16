// @flow
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';
import { loginRequest } from '../modules/auth';
import LoginForm from '../components/LoginForm';

const validate = (values) => {
  const errors = {};
  if (!values.username) {
    errors.username = 'Required';
  } else if (values.username.length > 15) {
    errors.username = 'Must be 15 characters or less';
  }
  if (!values.email) {
    errors.email = 'Required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address';
  }

  return errors;
};

const ConnectedLoginForm = reduxForm({
  form: 'login',
  validate,
})(LoginForm);

type Props = {
  loginRequestAction: func,
};

class Login extends Component<Props> {
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(values) {
    this.props.loginRequestAction(values);
  }

  render() {
    return (
      <ConnectedLoginForm customSubmitHandler={this.handleSubmit} />
    );
  }
}

const mapStateToProps = store => ({
  isLoggedIn: store.auth.isLoggedIn,
});

const mapDispatchToProps = dispatch => ({
  loginRequestAction: (accountInfo) => {
    dispatch(loginRequest(accountInfo));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
