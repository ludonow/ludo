// @flow
import React from 'react';
import styled from 'styled-components';
import { translate } from 'react-i18next';
import Link from 'next/link';
import { StyledAnchor } from '../../baseStyle';

const selectedStyle = 'background-color: black; border: 1px white solid; border-radius: 1rem;';

const ListItem = styled.li`
  border: 1px transparent solid;
  cursor: pointer;
  margin: 15px 0;
  padding: 2px 0;
  ${props => props.selected ? selectedStyle : ''}
  &:active {
    background-color: black;
  }
  &:hover {
    border: 1px white solid;
    border-radius: 1rem;
  }
`;

type Props = {
  groupIndex: number,
  menuList: array,
  t: Function,
};

const Menu = ({
  groupIndex,
  menuList,
  t,
}: Props) => (
  <div>
    {
      menuList.map((item, itemIndex) => (
        <Link
          href={item.url}
          passHref
          key={`navbar-menu-${groupIndex}-${itemIndex}`}
        >
          <StyledAnchor>
            <ListItem>
              {t(item.label)}
            </ListItem>
          </StyledAnchor>
        </Link>
      ))
    }
  </div>
);

export default translate(['layout'])(Menu);
