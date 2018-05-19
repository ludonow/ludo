import uuid from 'uuid';
import Auth0Lock from 'auth0-lock';
import { setSecret } from './auth';
import config from '../config.json';

const getLock = (options) => {
  return new Auth0Lock(config.AUTH0_CLIENT_ID, config.AUTH0_CLIENT_DOMAIN, options);
};

const getBaseUrl = () => `${window.location.protocol}//${window.location.host}`;

const getOptions = (container) => {
  const secret = uuid.v4();
  setSecret(secret);
  return {
    container,
    closable: false,
    auth: {
      responseType: 'token id_token',
      // redirectUrl: `https://api.ludonow.com/auth0-callback?redirect=${window.location.pathname.substring(1)}`,
      redirectUrl: 'https://api.ludonow.com/auth0-callback',
      params: {
        scope: 'openid profile email',
        state: secret,
      },
    },
    language: navigator.language || navigator.userLanguage,
  };
};

export const show = container => getLock(getOptions(container)).show();
export const logout = () => getLock().logout({ returnTo: getBaseUrl() });
