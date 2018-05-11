import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';

const Content = styled.p`
  font-size: 30px;
  font-weight: 200;
  line-height: 40px;
  color: #e74c3c;
`;
const ContentLink = styled.a`
  color: #e74c3c;
  padding-bottom: 2px;
  border-bottom: 1px solid #c0392b;
  text-decoration: none;
  font-weight: 400;
  line-height: 30px;
  transition: border-bottom .2s;
  &:hover {
    border-bottom-color: #e74c3c;
  }
`;

const NotAuthorized = () => (
  <div>
    <Content>
      <Link href="/auth/sign-in">
        <ContentLink>登入</ContentLink>
      </Link>
      後瀏覽此頁面
    </Content>
  </div>
);

export default NotAuthorized;
