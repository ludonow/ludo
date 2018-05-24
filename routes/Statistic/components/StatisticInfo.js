// @flow
import React, { Component } from 'react';
import styled from 'styled-components';
import { translate } from 'react-i18next';

const Item = styled.div`
  align-items: center;
  border-right: 1px solid white;
  display: inline-flex;
  padding: 0 20px;
`;

const Number = styled.span`
  align-items: center;
  display: flex;
  font-size: 40px;
  justify-content: center;
  padding: 0 15px;
`;

const Label = styled.span`
  align-items: center;
  background-color: ${props => props.color ? props.color : 'white'};
  display: flex;
  font-size: 14px;
  height: 20px;
  justify-content: center;
  padding: 2px 12px;
  width: 70px;
`;

const Unit = styled.span`
  align-items: center;
  display: flex;
  font-size: 14px;
  justify-content: center;
`;

const Wrapper = styled.div`
  color: white;
  font-size: 30px;
  margin: 30px 0 0 240px;
  text-align: center;
`;

type Props = {
  // fetchSingleTemplateRequestAction: Func,
  // templateInfo: object,
};

class StatisticInfo extends Component<Props> {
  componentDidMount() {
    // const { fetchSingleTemplateRequestAction } = this.props;
    // const viewingTemplateId = window.location.search.split('templateId=')[1];
    // fetchSingleTemplateRequestAction(viewingTemplateId);
  }

  render() {
    const { t } = this.props;
    return (
      <Wrapper>
        <Item>
          <Label color="#45b27b">{t('participants')}</Label>
          <Number>132</Number>
          <Unit>人</Unit>
        </Item>
        <Item>
          <Label color="#eb5b5b">{t('complete rate')}</Label>
          <Number>86</Number>
          <Unit>%</Unit>
        </Item>
        <Item>
          <Label color="#5b9deb">{t('action interval')}</Label>
          <Number>0.76</Number>
          <Unit>天</Unit>
        </Item>
      </Wrapper>
    );
  }
}

export default translate(['statistic'])(StatisticInfo);
