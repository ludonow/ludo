// @flow
import React from 'react';
import styled from 'styled-components';
import HeaderLeft from '../Header/HeaderLeft';
import GroupTitle from './GroupTitle';
import Menu from './Menu';

const Modal = styled.div`
  background-color: rgba(0, 0, 0, 0.5);
  display: ${props => props.isNavbarVisible ? 'block' : 'none'};
  height: 100vh;
  position: fixed;
  top: 40px;
  width: 100%;
  z-index: 3;
`;

const NavbarWrapper = styled.aside`
  background-color: #374867;
  color: white;
  height: 100vh;
  position: fixed;
  top: 0;
  width: 10vw;
`;

const GroupWrapper = styled.ul`
  font-size: 14px;
  margin: 40px auto;
  text-align: center;
`;

const groupListOfMenuList = [
  [
    {
      isConnectedToUserId: false,
      isSameDomain: false,
      label: 'playground',
      url: 'https://beta.ludonow.com/cardList',
    },
    {
      isConnectedToUserId: false,
      isSameDomain: false,
      label: 'templates',
      url: 'https://beta.ludonow.com/cardList?stage=0',
    },
    {
      isConnectedToUserId: false,
      isSameDomain: false,
      label: 'new game',
      url: 'https://beta.ludonow.com/create',
    },
  ],
  [
    {
      isConnectedToUserId: true,
      isSameDomain: false,
      label: 'ready cards',
      title: 'personal data',
      url: 'https://beta.ludonow.com/myCardList?stage=1&user_id=',
    },
    {
      isConnectedToUserId: true,
      isSameDomain: false,
      label: 'playing cards',
      title: 'personal data',
      url: 'https://beta.ludonow.com/myCardList?stage=2&user_id=',
    },
    {
      isConnectedToUserId: true,
      isSameDomain: false,
      label: 'ended cards',
      title: 'personal data',
      url: 'https://beta.ludonow.com/myCardList?stage=3&user_id=',
    },
    {
      isConnectedToUserId: true,
      isSameDomain: false,
      label: 'my templates',
      title: 'personal data',
      url: 'https://beta.ludonow.com/myCardList?stage=0&user_id=',
    },
  ],
  [
    {
      isConnectedToUserId: false,
      isSameDomain: false,
      label: 'tutorial',
      url: 'https://beta.ludonow.com/tutorial',
    },
    {
      isConnectedToUserId: false,
      isSameDomain: false,
      label: 'bind messenger bot',
      url: 'https://beta.ludonow.com/bind',
    },
    {
      isConnectedToUserId: false,
      isSameDomain: false,
      label: 'contact us',
      url: 'https://m.me/ludonow?ref=%E5%B0%88%E4%BA%BA%E6%9C%8D%E5%8B%99',
    },
  ]
];

type Props = {
  isNavbarVisible: boolean,
};

const Navbar = ({
  isNavbarVisible,
}: Props) => (
  <Modal isNavbarVisible={isNavbarVisible}>
    <NavbarWrapper>
      <HeaderLeft />
      {
        groupListOfMenuList.map((menuList, groupIndex) => (
          <GroupWrapper key={`navbar-group-${groupIndex}`} >
            <GroupTitle groupIndex={groupIndex} />
            <Menu
              groupIndex={groupIndex}
              menuList={menuList}
            />
          </GroupWrapper>
        ))
      }
    </NavbarWrapper>
  </Modal>
);

export default Navbar;
