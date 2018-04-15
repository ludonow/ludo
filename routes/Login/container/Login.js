// @flow
import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { loginRequest } from '../modules/auth';
import TextField from '../components/TextField';

const LoginWrapper = styled.div`
  background: white;
  margin: 0 auto;
  padding: 30px 20px;
  text-align: center;
`;

type Props = {
  loginRequestAction: func,
};

class Login extends Component<Props> {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
    };
    this.handleEmailFieldChange = this.handleEmailFieldChange.bind(this);
    this.handlePasswordFieldChange = this.handlePasswordFieldChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleEmailFieldChange(event) {
    event.preventDefault();
    this.setState({ email: event.currentTarget.value });
  }

  handlePasswordFieldChange(event) {
    event.preventDefault();
    this.setState({ password: event.currentTarget.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    const {
      email,
      password,
    } = this.state;
    this.props.loginRequestAction(email, password);
  }

  render() {
    return (
      <LoginWrapper>
        title
        <TextField
          handleChange={this.handleEmailFieldChange}
          id="email"
          placeholder="email"
          type="text"
        />
        <TextField
          handleChange={this.handlePasswordFieldChange}
          id="password"
          placeholder="password"
          type="password"
        />
        <button onClick={this.handleSubmit}>
          登入
        </button>
      </LoginWrapper>
    );
  }
}

const mapStateToProps = store => ({
  isLoggedIn: store.auth.isLoggedIn,
});

const mapDispatchToProps = dispatch => ({
  loginRequestAction: (email, password) => {
    const accountInfo = {
      email,
      password,
    };
    dispatch(loginRequest(accountInfo));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
