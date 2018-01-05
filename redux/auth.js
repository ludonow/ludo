import { call, put, takeLatest } from 'redux-saga/effects';
import md5 from 'blueimp-md5';
import axios from '../axios-config';

// Actions
export const LOGIN = 'auth/LOGIN';
export const LOGIN_SUCCESS = 'auth/LOGIN_SUCCESS';
export const LOGIN_FAIL = 'auth/LOGIN_FAIL';
export const LOGOUT = 'auth/LOGOUT';
export const LOGOUT_SUCCESS = 'auth/LOGOUT_SUCCESS';
export const LOGOUT_FAIL = 'auth/LOGOUT_FAIL';

// Reducer
export default function reducer(state = {}, action = {}) {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        loading: true
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        logginIn: true,
        photo: action.userInfo.photoUrl,
        userId: action.userInfo.userId
      };
    case LOGIN_FAIL:
      return {
        ...state,
        loginError: action.error,
        logginIn: false
      };
    case LOGOUT:
      return {
        ...state,
        loading: true
      };
    case LOGOUT_SUCCESS:
      return {
        ...state,
        loggingIn: false,
        userId: null
      };
    case LOGOUT_FAIL:
      return {
        ...state,
        logoutError: action.error,
        loggingIn: false
      };
    default:
      return state;
  }
}

// Action Creators
export const fetchUserInfo = ({ apiParam, loginData }) => (
  axios.post(apiParam, loginData)
);

export const logOutApi = ({ apiParam }) => (
  axios.post(apiParam)
);

export function* login(loginData) {
  try {
    const requestData = {
      apiParam: '/login',
      loginData: {
        eMail: loginData.eMail,
        password: md5(loginData.password)
      }
    };
    const responseData = yield call(fetchUserInfo, requestData);
    yield put({ type: LOGIN_SUCCESS, responseData });
  } catch (error) {
    yield put({ type: LOGIN_FAIL, error });
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

export function* rootSaga() {
  yield [
    yield takeLatest(LOGIN, login),
    yield takeLatest(LOGOUT, logout)
  ];
}
