import React, { Component } from 'react';
import styled from 'styled-components';
import Link from 'next/link';

import multiLanguage from '../../../static/multiLanguage';

const DropDownMenuWrapper = styled.div`
  background-color: white;
  box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
  position: absolute;
  padding: 10px 0;
  right: 0;
  top: 100%;

  li {
    font-size: 0.8rem;
    padding: 10px 30px;
    width: max-content;

    &:hover {
      background-color: rgba(0, 0, 0, 0.1);
    }
  }
`;

const DropDownMenu = ({ language, userId }) => {
  const { avatar } = multiLanguage[language].header;

  const isLoggedIn = !(userId === 'default');

  const dropDownMenuItems = isLoggedIn ?
    avatar.authorizedDropDownMenuItems :
    avatar.unAuthorizedDropDownMenuItems;
  return (
    <DropDownMenuWrapper>
      {
        dropDownMenuItems.map((listItem, index) => (
          <li key={`avatar-drop-down-menu-${index}`}>
            <Link href="/login">
              <a>
                {listItem}
              </a>
            </Link>
          </li>
        ))
      }
    </DropDownMenuWrapper>
  );
};

export default DropDownMenu;
