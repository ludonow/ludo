// @flow
import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import { translate } from 'react-i18next';

type Props = {
  t: Function,
  userId: string,
};

const DropDownMenuWrapper = styled.div`
  background-color: white;
  box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
  position: absolute;
  padding: 10px 0;
  right: 0;
  top: 100%;

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

const DropDownMenu = ({ t, userId }: Props) => (
  <DropDownMenuWrapper>
    {
      userId === 'defaultUserId' ?
        <Link href="/login">
          <a>
            <li>
              {t('layout:login')}
            </li>
          </a>
        </Link>
      :
        <Link href="/logout">
          <a>
            <li>
              {t('layout:logout')}
            </li>
          </a>
        </Link>
    }
  </DropDownMenuWrapper>
);

export default translate(['layout'])(DropDownMenu);
