// @flow
import React from 'react';
import styled from 'styled-components';
import { Field } from 'redux-form';

const LoginWrapper = styled.form`
  background: white;
  margin: 0 auto;
  padding: 30px 20px;
  text-align: center;
`;

type renderFieldProps = {
  input: any,
  label: string,
  type: string,
  meta: {
    touched: boolean,
    error: string,
    warning: any,
  }
};

const renderField = ({
  input,
  label,
  type,
  meta: { touched, error, warning },
}: renderFieldProps) => (
  <div>
    <label htmlFor={label}>{label}</label>
    <div>
      <input
        {...input}
        placeholder={label}
        type={type}
      />
      {touched &&
        ((error && <span>{error}</span>) ||
          (warning && <span>{warning}</span>))}
    </div>
  </div>
);

type Props = {
  errorMessage: string,
  handleSubmit: func,
  invalid: boolean,
  isSubmitting: boolean,
  loginRequestAction: func,
  pristine: boolean,
};

const LoginForm = ({
  errorMessage,
  handleSubmit,
  invalid,
  isSubmitting,
  loginRequestAction,
  pristine,
}: Props) => (
  <LoginWrapper onSubmit={handleSubmit(loginRequestAction)}>
    <div>
      <Field
        component={renderField}
        label="email"
        name="email"
        type="email"
      />
      <Field
        component={renderField}
        label="password"
        name="password"
        type="password"
      />
    </div>
    {errorMessage && <strong>{errorMessage}</strong>}
    <div>
      <button
        disabled={pristine || invalid || isSubmitting}
        type="submit"
      >
        登入
      </button>
    </div>
  </LoginWrapper>
);

export default LoginForm;
