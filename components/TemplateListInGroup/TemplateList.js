// @flow
import React, { Component } from 'react';
import styled from 'styled-components';
import Router from 'next/router';

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
  position: relative;
  top: 80px;
  position: relative;
  width: 240px;
`;

type Props = {
  fetchSingleTemplateRequestAction: Func,
  templateList: array,
};

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
    const { templateList } = this.props;
    return (
      <Wrapper>
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
      </Wrapper>
    );
  }
}

export default TemplateList;
