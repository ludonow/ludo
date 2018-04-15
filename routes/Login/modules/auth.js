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

// - Action Creators
export const loginRequest = loginData => ({
  type: LOGIN_REQUEST,
  payload: { loginData },
});

export const loginSuccess = userInfo => ({
  type: LOGIN_SUCCESS,
  payload: { userInfo },
});

export const loginFail = error => ({
  type: LOGIN_FAIL,
  payload: { error },
});

// - State
export const initialState = {
  error: {},
  isFetching: false,
  isLoggedIn: false,
  photoUrl: 'defaultPhotoUrl',
  userId: 'defaultUserId',
};

// - Reducer
export const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case LOGIN_REQUEST:
      return {
        ...state,
        isFetching: true,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        isFetching: false,
        isLoggedIn: true,
        photoUrl: action.payload.userInfo.photoUrl,
        userId: action.payload.userInfo.userId,
      };
    case LOGIN_FAIL:
      return {
        ...state,
        error: action.payload.error,
        isFetching: false,
      };
    case LOGOUT_REQUEST:
      return {
        ...state,
        isFetching: true,
      };
    case LOGOUT_SUCCESS:
      return {
        ...state,
        isFetching: false,
        isLoggedIn: false,
        userId: null,
      };
    case LOGOUT_FAIL:
      return {
        ...state,
        error: action.payload.error,
        isFetching: false,
      };
    default:
      return state;
  }
};

// - Api
export const loginApi = ({ apiParam, loginData }) => (
  axios.post(apiParam, loginData)
);

export const logOutApi = ({ apiParam }) => (
  axios.post(apiParam)
);

// Saga
export function* login(action) {
  try {
    const {
      email,
      password,
    } = action.payload;
    const loginRequestData = {
      apiParam: '/login',
      loginData: {
        email,
        password: md5(password),
      },
    };
    const loginResponse = yield call(loginApi, loginRequestData);
    yield put(loginSuccess(loginResponse));
  } catch (error) {
    yield put(loginFail(error));
  }
}

export function* logout() {
  try {
    const requestData = {
      apiParam: '/logout',
    };
    yield call(logOutApi, requestData);
    yield put({ type: LOGOUT_SUCCESS, userId: null });
  } catch (error) {
    yield put({ type: LOGOUT_FAIL, error });
  }
}
