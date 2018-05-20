// @flow
import React from 'react';
import styled from 'styled-components';
import { translate } from 'react-i18next';

const Wrapper = styled.div`
    font-size: 12px;
    margin-left: 15px;
    text-align: left;
`;

const groupTitles = [
  '',
  'personal data',
  '',
];

const GroupTitle = ({
  groupIndex,
  t,
}: Props) => (
  <Wrapper>
    {t(groupTitles[groupIndex])}
  </Wrapper>
);

export default translate(['layout'])(GroupTitle);
