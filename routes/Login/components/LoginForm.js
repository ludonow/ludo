// @flow
import React from 'react';
import styled from 'styled-components';
import { Field } from 'redux-form';

const LoginWrapper = styled.div`
  background: white;
  margin: 0 auto;
  padding: 30px 20px;
  text-align: center;
`;

const renderField = ({
  input,
  label,
  type,
  meta: { touched, error, warning }
}) => (
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
  customSubmitHandler: func,
  handleSubmit: func,
  isSubmitting: boolean,
};

const LoginForm = ({
  customSubmitHandler,
  handleSubmit,
  isSubmitting,
}: Props) => (
  <LoginWrapper>
    <form onSubmit={handleSubmit(customSubmitHandler)}>
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
      <div>
        <button
          disabled={isSubmitting}
          type="submit"
        >
          Submit
        </button>
      </div>
    </form>
  </LoginWrapper>
);

export default LoginForm;
