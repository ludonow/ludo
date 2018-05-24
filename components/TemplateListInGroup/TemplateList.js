// @flow
import React, { Component } from 'react';
import styled from 'styled-components';
import Router from 'next/router';
import IconList from './IconList';

const GroupTitle = styled.div`
  color: white;
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 10px;
`;

const ListItem = styled.li`
  align-items: center;
  background-color: #ffffff;
  border-radius: 23px;
  box-shadow: 0 1.5px 3px 0 rgba(0, 0, 0, 0.16);
  cursor: pointer;
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
  height: 85vh;
  position: relative;
  top: 30px;
  position: relative;
  width: 240px;
`;

type Props = {
  fetchSingleTemplateRequestAction: Func,
  // templateList: array,
};

const templateList = [
  {
    ludo_id: 'ludo_id',
    title: 'DIY月餅挑戰入門',
  },
  {
    ludo_id: 'ludo_id2',
    title: 'DIY月餅挑戰I',
  },
  {
    ludo_id: 'ludo_id3',
    title: 'DIY月餅挑戰II',
  },
  {
    ludo_id: 'ludo_id4',
    title: 'DIY月餅挑戰III',
  },
  {
    ludo_id: 'ludo_id5',
    title: 'DIY月餅挑戰IV',
  },
];

class TemplateList extends Component<Props> {
  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    const templateId = event.currentTarget.id;
    const { fetchSingleTemplateRequestAction } = this.props;
    fetchSingleTemplateRequestAction(templateId);
    Router.push(`/statistic?templateId=${templateId}`);
  }

  render() {
    // const { templateList } = this.props;
    return (
      <Wrapper>
        <GroupTitle>
          DIY月餅挑戰
        </GroupTitle>
        {
          templateList.map((templateInfo, index) => (
            <ListItem
              id={templateInfo.ludo_id}
              onClick={this.handleClick}
              key={`template-list-item-${index}`}
            >
              {templateInfo.title}
            </ListItem>
          ))
        }
        <IconList />
      </Wrapper>
    );
  }
}

export default TemplateList;
