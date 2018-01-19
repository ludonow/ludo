// @flow
import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';

import multiLanguage from '../../../static/multiLanguage';

type Props = {
  language: string,
  userId: string
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

const DropDownMenu = ({ language, userId }: Props) => {
  const { avatar } = multiLanguage[language].header;

  const dropDownMenuItems = (userId !== 'defaultUserId') ?
    avatar.authorizedDropDownMenuItems :
    avatar.unAuthorizedDropDownMenuItems;
  const links = ['/login'];
  return (
    <DropDownMenuWrapper>
      {
        dropDownMenuItems.map((listItem, index) => (
          <Link
            href={links[index]}
            key={`avatar-drop-down-menu-${index}`}
          >
            <a>
              <li>
                {listItem}
              </li>
            </a>
          </Link>
        ))
      }
    </DropDownMenuWrapper>
  );
};

export default DropDownMenu;
