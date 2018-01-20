// @flow
import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import withEither from '../../../hoc/withEither';

export const defaultAvatarSrc = '/static/default-avatar.png';

type Props = {
  userPhotoUrl: string
};

const AvatarIconWrapper = styled.div`
  img {
    height: 30px;
  }
`;

const DefaultAvatarIcon = () => (
  <AvatarIconWrapper>
    <img alt="default-avatar" src={defaultAvatarSrc} />
  </AvatarIconWrapper>
);

const UserPhoto = ({ userPhotoUrl }: Props) => (
  <AvatarIconWrapper>
    <img alt="user" src={userPhotoUrl} />
  </AvatarIconWrapper>
);

const hasGotUserPhotoUrl = props => props.userPhotoUrl;

export const UnconnectedIcon = withEither(hasGotUserPhotoUrl, UserPhoto)(
  DefaultAvatarIcon,
);

const mapStateToProps = state => ({
  userPhotoUrl: state.auth.userPhotoUrl,
});

export default connect(mapStateToProps)(UnconnectedIcon);
