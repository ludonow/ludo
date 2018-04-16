import {
  call,
  put,
} from 'redux-saga/effects';
import md5 from 'blueimp-md5';
import es6promise from 'es6-promise';

import axios from '../../../axios-config';

es6promise.polyfill();

// - Actions
export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAIL = 'LOGIN_FAIL';
export const LOGOUT_REQUEST = 'LOGOUT_REQUEST';
export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';
export const LOGOUT_FAIL = 'LOGOUT_FAIL';

// - State
export const initialState = {
  error: {},
  isLoggedIn: false,
  isLoggingIn: false,
  photoUrl: 'defaultPhotoUrl',
  userId: 'defaultUserId',
};

// - Reducer
export const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case LOGIN_REQUEST:
      return {
        ...state,
        isLoggingIn: true,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        isLoggedIn: true,
        isLoggingIn: false,
        photoUrl: action.payload.photoUrl,
        userId: action.payload.userId,
      };
    case LOGIN_FAIL:
      return {
        ...state,
        error: action.payload.error,
        isLoggingIn: false,
      };
    case LOGOUT_REQUEST:
      return {
        ...state,
        isLoggingIn: true,
      };
    case LOGOUT_SUCCESS:
      return {
        ...state,
        isLoggedIn: false,
        isLoggingIn: false,
        userId: null,
      };
    case LOGOUT_FAIL:
      return {
        ...state,
        error: action.payload.error,
        isLoggingIn: false,
      };
    default:
      return state;
  }
};

// - Action Creators
export const loginRequest = ({
  email,
  password,
}) => ({
  type: LOGIN_REQUEST,
  payload: {
    email,
    password,
  },
});

export const loginSuccess = ({
  photoUrl,
  userId,
}) => ({
  type: LOGIN_SUCCESS,
  payload: {
    photoUrl,
    userId,
  },
});

export const loginFail = error => ({
  type: LOGIN_FAIL,
  payload: { error },
});

export const logoutRequest = () => ({ type: LOGOUT_REQUEST });

export const logoutSuccess = () => ({ type: LOGOUT_SUCCESS });

export const logoutFail = error => ({
  type: LOGOUT_FAIL,
  payload: { error },
});

// - Api
export const loginApi = ({
  accountInfo,
  apiParam,
}) => (
  axios.post(apiParam, accountInfo)
);

export const logoutApi = ({ apiParam }) => (
  axios.post(apiParam)
);

// - Sagas
export function* login(action) {
  try {
    const {
      email,
      password,
    } = action.payload;
    const loginRequestData = {
      accountInfo: {
        email,
        password: md5(password),
      },
      apiParam: '/login',
    };
    const loginResponse = yield call(loginApi, loginRequestData);
    const {
      message,
      photoUrl,
      status,
      userId,
    } = loginResponse.data;

    if (status === '200') {
      yield put(loginSuccess({
        photoUrl,
        userId,
      }));
    } else {
      throw Error(message);
    }
  } catch (error) {
    yield put(loginFail(error));
  }
}

export function* logout() {
  try {
    const requestData = {
      apiParam: '/logout',
    };
    yield call(logoutApi, requestData);
    yield put(logoutSuccess());
  } catch (error) {
    yield put(logoutFail(error));
  }
}
