import {
  all,
  call,
  put,
  takeLatest,
} from 'redux-saga/effects';
import md5 from 'blueimp-md5';
import Router from 'next/router';
import axios from '../../../axios-config';
import {
  clearUserInfo,
  fetchUserInfoRequest,
} from './user';

// - Actions
export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAIL = 'LOGIN_FAIL';
export const LOGOUT_REQUEST = 'LOGOUT_REQUEST';
export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';
export const LOGOUT_FAIL = 'LOGOUT_FAIL';

// - State
export const initialState = {
  errorMessage: '',
  isFetching: false,
  isLoggedIn: false,
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
        errorMessage: '',
        isFetching: false,
        isLoggedIn: true,
      };
    case LOGIN_FAIL:
      return {
        ...state,
        errorMessage: action.payload.message,
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
        errorMessage: '',
        isFetching: false,
        isLoggedIn: false,
      };
    case LOGOUT_FAIL:
      return {
        ...state,
        errorMessage: action.payload.message,
        isFetching: false,
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
export const loginSuccess = () => ({ type: LOGIN_SUCCESS });
export const loginFail = ({ message }) => ({
  type: LOGIN_FAIL,
  payload: { message },
});

export const logoutRequest = () => ({ type: LOGOUT_REQUEST });
export const logoutSuccess = () => ({ type: LOGOUT_SUCCESS });
export const logoutFail = ({ message }) => ({
  type: LOGOUT_FAIL,
  payload: { message },
});

// - Selectors
export const getLoginErrorMessage = state => state.auth.errorMessage;
export const getLoginButtonSubmittingStatus = state => state.auth.isFetching;

// - Api
export const loginApi = ({
  accountInfo,
  apiParam,
}) => (
  axios.post(apiParam, accountInfo)
);

export const logoutApi = ({ apiParam }) => (
  axios.get(apiParam)
);

export const routeToIndex = () => {
  Router.push('/');
};

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
      status,
    } = loginResponse.data;

    if (status !== '200') {
      throw new Error(message);
    }

    yield put(loginSuccess());
    yield put(fetchUserInfoRequest());
    yield call(routeToIndex);
  } catch (error) {
    yield put(loginFail(error));
  }
}

export function* logout() {
  try {
    const requestData = {
      apiParam: '/logout',
    };
    const logoutResponse = yield call(logoutApi, requestData);
    const {
      message,
      status,
    } = logoutResponse.data;

    if (status !== '200') {
      throw new Error(message);
    }

    yield put(logoutSuccess());
    yield put(clearUserInfo());
  } catch (error) {
    yield put(logoutFail(error));
  }
}

function* watchAuth() {
  yield all([
    yield takeLatest(LOGIN_REQUEST, login),
    yield takeLatest(LOGOUT_REQUEST, logout),
  ]);
}

export default watchAuth;
