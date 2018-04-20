// @flow
import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import { translate } from 'react-i18next';
import withEither from '../../../hoc/withEither';

const StyleLessButton = styled.button`
  background-color: white;
  border: none;
  cursor: pointer;
  padding: 0;
`;

const DropDownMenuWrapper = styled.div`
  background-color: white;
  box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
  position: absolute;
  padding: 10px 0;
  right: 0;
  top: 100%;
  z-index: 1;

  a {
    color: black;
    text-decoration: none;
  }

  li {
    font-size: 0.8rem;
    padding: 10px 30px;
    width: max-content;

    &:hover {
      background-color: rgba(0, 0, 0, 0.3);
      color: white;
    }
  }
`;

type AuthenticatedButtonProps = {
  logoutRequestAction: Func,
  t: Func,
};

const AuthenticatedButton = ({
  logoutRequestAction,
  t,
}: AuthenticatedButtonProps) => (
  <StyleLessButton onClick={logoutRequestAction}>
    <li>
      {t('layout:logout')}
    </li>
  </StyleLessButton>
);

type UnAuthenticatedButtonProps = {
  t: Func,
};

const UnAuthenticatedButton = ({ t }: UnAuthenticatedButtonProps) => (
  <Link href="/login">
    <a>
      <li>
        {t('layout:login')}
      </li>
    </a>
  </Link>
);

const isLoggedInFn = ({ isLoggedIn }) => (isLoggedIn);
const AuthButton = withEither(isLoggedInFn, AuthenticatedButton)(UnAuthenticatedButton);

type Props = {
  logoutRequestAction: Func,
  isLoggedIn: boolean,
  t: Func,
};

const DropDownMenu = ({
  logoutRequestAction,
  isLoggedIn,
  t,
}: Props) => (
  <DropDownMenuWrapper>
    <AuthButton
      logoutRequestAction={logoutRequestAction}
      isLoggedIn={isLoggedIn}
      t={t}
    />
  </DropDownMenuWrapper>
);

export default translate(['layout'])(DropDownMenu);
