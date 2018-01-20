// @flow
import React from 'react';
import styled from 'styled-components';

type Props = {
  id: string,
  placeholder: string,
  type: 'text' | 'password'
};

const LoginWrapper = styled.div`
  background: white;
  margin: 0 auto;
  padding: 30px 20px;
  text-align: center;
`;

const StyledInput = styled.input`
  border: none;
  display: block;

  &:focus {
    background: transparent;
    border-bottom: 1px solid black;
    caret-color: #ffc645;
    outline: 0;
  }
`;

const TextFieldWrapper = styled.div`
  margin: 10px auto;
`;

const TextField = ({
  id,
  placeholder,
  type,
}: Props) => (
  <TextFieldWrapper>
    <StyledInput
      id={id}
      placeholder={placeholder}
      type={type}
    />
  </TextFieldWrapper>
);

const Login = () => (
  <LoginWrapper>
    title
    <TextField
      id="email"
      placeholder=""
      type="text"
    />
    <TextField
      id="password"
      placeholder=""
      type="password"
    />
    <button>
      fb
    </button>
  </LoginWrapper>
);

export default Login;
