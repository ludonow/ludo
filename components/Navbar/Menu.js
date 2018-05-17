// @flow
import React from 'react';
import styled from 'styled-components';
import { translate } from 'react-i18next';

type Props = {
  t: Function,
  toggle: Function,
}

const MenuWrapper = styled.div`
  color: white;

  li {
    border: 2px transparent solid;
    cursor: pointer;
    font-family: "Microsoft JhengHei";
    font-size: 0.9rem;
    font-weight: bold;
    margin: 5vh 0;
    padding: 0.4rem 1rem;
    text-align: center;

    &:hover {
      border: 2px white solid;
      border-radius: 1rem;
    }

    &:active {
      background-color: black;
    }
  }
`;

const Menu = ({
  t,
  toggle,
}: Props) => (
  <MenuWrapper
    onBlur={toggle}
    onMouseOut={toggle}
  >
    <ul>
      <li>{t('playground')}</li>
      <li>{t('template')}</li>
      <li>{t('reward')}</li>
      <li>{t('subscription')}</li>
      <li>{t('shop')}</li>
      <li>{t('data')}</li>
      <li>{t('setting')}</li>
    </ul>
  </MenuWrapper>
);

export default translate(['layout'])(Menu);
