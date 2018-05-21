// @flow
import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';

const ListItem = styled.li`
  align-items: center;
  background-color: #ffffff;
  border-radius: 23px;
  box-shadow: 0 1.5px 3px 0 rgba(0, 0, 0, 0.16);
  display: flex;
  font-size: 12px;
  font-weight: bold;
  height: 30px;
  justify-content: center;
  margin: 2px 0;
  opacity: 0.85;
  text-align: center;
  width: 150px;
`;

const Wrapper = styled.ul`
  align-items: center;
  border-right: 5px rgba(255, 255, 255, 0.2) solid;
  display: flex;
  flex-direction: column;
  position: relative;
  top: 40px;
  position: relative;
  width: 240px;
`;

type Props = {
  templateList: array,
};

const TemplateList = ({
  templateList,
}: Props) => (
  <Wrapper>
    {
      templateList.map((template, index) => (
        <Link
          href={`/statistic?templateId=${template.ludo_id}`}
          key={`template-list-item-${index}`}
        >
          <ListItem>
            {template.title}
          </ListItem>
        </Link>
      ))
    }
  </Wrapper>
);

export default TemplateList;
