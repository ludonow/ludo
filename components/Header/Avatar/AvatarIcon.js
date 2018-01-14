import React from 'react';
import { connect } from 'react-redux';

import { IconWrapper } from '../baseStyle';

const defaultAvatarSrc = '/static/default-avatar.png';

const DefaultAvatarIconWrapper = IconWrapper.extend`
  background-color: green;
  padding: 10px;
`;

const UserPhotoWrapper = IconWrapper.extend`
  background-color: red;
  padding: 10px;
`;

const UserPhoto = ({ userPhotoUrl }) => (
  <UserPhotoWrapper>
    <img alt="user" src={userPhotoUrl} />
  </UserPhotoWrapper>
);

const DefaultAvatarIcon = () => (
  <DefaultAvatarIconWrapper>
    <img alt="default-avatar" src={defaultAvatarSrc} />
  </DefaultAvatarIconWrapper>
);

const withEither = (conditionalRenderingFn, EitherComponent) => BaseComponent => props => (
  conditionalRenderingFn(props)
    ? <EitherComponent />
    : <BaseComponent {...props} />
);

const hasGotUserPhotoUrl = props => props.userPhotoUrl;

export const UnconnectedAvatarIcon = withEither(hasGotUserPhotoUrl, UserPhoto)(
  DefaultAvatarIcon
);

const mapStateToProps = state => ({
  userPhotoUrl: state.auth.userPhotoUrl
});

const AvatarIcon = connect(
  mapStateToProps
)(UnconnectedAvatarIcon);

export default AvatarIcon;
