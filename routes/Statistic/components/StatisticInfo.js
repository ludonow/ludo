// @flow
import React, { Component } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  color: white;
  font-size: 30px;
  margin-left: 240px;
  text-align: center;
`;

type Props = {
  fetchSingleTemplateRequestAction: Func,
  templateInfo: object,
};

class StatisticInfo extends Component<Props> {
  componentDidMount() {
    const { fetchSingleTemplateRequestAction } = this.props;
    const viewingTemplateId = window.location.search.split('templateId=')[1];
    fetchSingleTemplateRequestAction(viewingTemplateId);
  }

  render() {
    const { templateInfo } = this.props;
    return (
      <Wrapper>
        {templateInfo.title}
      </Wrapper>
    );
  }
}

export default StatisticInfo;
