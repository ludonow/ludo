// @flow
import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import { translate } from 'react-i18next';

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

const menuList = [
  { href: '/auth/sign-in', text: 'layout:login', anonymousOnly: true },
  { href: '/auth/sign-off', text: 'layout:logout', authRequired: true }
];

function getAllowedMenu(isAuthenticated) {
  if (!isAuthenticated) {
    return menuList.filter(list => !list.authRequired);
  }

  return menuList.filter(list => !list.anonymousOnly);
}

type Props = {
  isAuthenticated: boolean,
  t: Func,
};

const DropDownMenu = ({
  isAuthenticated,
  t,
}: Props) => (
  <DropDownMenuWrapper>
    {
      getAllowedMenu(isAuthenticated).map((list, index) => (
        <Link
          href={list.href}
          key={`header-menu-${index}`}
        >
          <a>
            <li>
              {t(list.text)}
            </li>
          </a>
        </Link>
      ))
    }
  </DropDownMenuWrapper>
);

export default translate(['layout'])(DropDownMenu);
