// @flow
import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import withEither from '../../../hoc/withEither';

export const defaultAvatarSrc = '/static/default-avatar.png';

const AvatarIconWrapper = styled.div`
  img {
    height: 5vh;
  }
`;

const DefaultAvatarIcon = () => (
  <AvatarIconWrapper>
    <img alt="default-avatar" src={defaultAvatarSrc} />
  </AvatarIconWrapper>
);

type Props = {
  userPhotoUrl: string
};

const UserPhoto = ({ userPhotoUrl }: Props) => (
  <AvatarIconWrapper>
    <img alt="user" src={userPhotoUrl} />
  </AvatarIconWrapper>
);

const hasGotUserPhotoUrl = props => props.userPhotoUrl;

export const UnconnectedIcon = withEither(hasGotUserPhotoUrl, UserPhoto)(DefaultAvatarIcon);

const mapStateToProps = state => ({
  userPhotoUrl: state.auth.userPhotoUrl,
});

export default connect(mapStateToProps)(UnconnectedIcon);
