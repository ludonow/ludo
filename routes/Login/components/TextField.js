// @flow
import React from 'react';
import styled from 'styled-components';

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

type Props = {
  handleChange: func,
  id: string,
  placeholder: string,
  type: 'text' | 'password'
};

const TextField = ({
  handleChange,
  id,
  placeholder,
  type,
}: Props) => (
  <TextFieldWrapper>
    <StyledInput
      id={id}
      onChange={handleChange}
      placeholder={placeholder}
      type={type}
    />
  </TextFieldWrapper>
);

export default TextField;
