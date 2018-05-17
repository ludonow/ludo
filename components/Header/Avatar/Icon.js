// @flow
import React from 'react';
import styled from 'styled-components';
import withEither from '../../../hocs/withEither';
import authenticatedUserAvatar from '../../../static/authenticated-user-avatar.svg';
import unAuthenticatedUserAvatar from '../../../static/unauthenticated-user-avatar.png';

const AvatarIconWrapper = styled.div`
  img {
    height: 24px;
  }
`;

const UnAuthenticatedUserAvatar = () => (
  <AvatarIconWrapper>
    <img alt="unauthenticated-user-avatar" src={unAuthenticatedUserAvatar} />
  </AvatarIconWrapper>
);

const DefaultAuthenticatedUserAvatar = () => (
  <AvatarIconWrapper>
    <img alt="authenticated-user-avatar" src={authenticatedUserAvatar} />
  </AvatarIconWrapper>
);

type Props = {
  userPhotoUrl: string
};

const UserAvatar = ({ userPhotoUrl }: Props) => (
  <AvatarIconWrapper>
    <img alt="user" src={userPhotoUrl} />
  </AvatarIconWrapper>
);

const isUsingDefaultAvatar = ({ userPhotoUrl }) => (userPhotoUrl === 'default');
const withPhotoCondition = withEither(isUsingDefaultAvatar, DefaultAuthenticatedUserAvatar);
const AuthenticatedAvatar = withPhotoCondition(UserAvatar);

const isAuthenticated = ({ isLoggedIn }) => (isLoggedIn);
const withAuthenticatedCondition = withEither(isAuthenticated, AuthenticatedAvatar);
const Icon = withAuthenticatedCondition(UnAuthenticatedUserAvatar);

export default Icon;
