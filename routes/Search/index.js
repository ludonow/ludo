// @flow
import React from 'react';
import styled from 'styled-components';

type Props = {
  id: string,
  placeholder: string,
  type: 'text' | 'password'
};

const SearchWrapper = styled.div`
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

const Search = () => (
  <SearchWrapper>
    搜尋你喜歡的事
    <TextField
      id="search"
      placeholder="搜尋"
      type="text"
    />
    <button>
      登入
    </button>
    <button>
      註冊
    </button>
  </SearchWrapper>
);

export default Search;
