import {
  all,
  call,
  put,
  takeLatest,
} from 'redux-saga/effects';
import md5 from 'blueimp-md5';
import es6promise from 'es6-promise';
import axios from '../../../axios-config';

es6promise.polyfill();

// - Actions
export const FETCH_USER_INFO_REQUEST = 'FETCH_USER_INFO_REQUEST';
export const FETCH_USER_INFO_SUCCESS = 'FETCH_USER_INFO_SUCCESS';
export const FETCH_USER_INFO_FAIL = 'FETCH_USER_INFO_FAIL';
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
  isLoggingIn: false,
  photoUrl: 'defaultPhotoUrl',
  userId: 'defaultUserId',
};

// - Reducer
export const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case LOGIN_REQUEST:
    case FETCH_USER_INFO_REQUEST:
    case LOGOUT_REQUEST:
      return {
        ...state,
        isFetching: true,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        isFetching: false,
        isLoggedIn: true,
      };
    case LOGIN_FAIL:
      return {
        ...state,
        errorMessage: action.payload.message,
        isFetching: false,
      };
    case FETCH_USER_INFO_SUCCESS:
      return {
        ...state,
        isFetching: false,
        photoUrl: action.payload.photoUrl,
        userId: action.payload.userId,
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
        errorMessage: action.payload.message,
        isFetching: false,
      };
    default:
      return state;
  }
};

// - Action Creators
export const fetchUserInfoRequest = () => ({ type: FETCH_USER_INFO_REQUEST });
export const fetchUserInfoSuccess = ({
  photoUrl,
  userId,
}) => ({
  type: FETCH_USER_INFO_SUCCESS,
  payload: {
    photoUrl,
    userId,
  },
});
export const fetchUserInfoFail = ({ message }) => ({
  type: FETCH_USER_INFO_FAIL,
  payload: { message },
});

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

// - Api
export const fetchUserApi = ({ apiParam }) => (
  axios.get(apiParam)
);

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
      status,
    } = loginResponse.data;

    if (status !== '200') {
      throw new Error(message);
    }

    yield put(loginSuccess());
    yield put(fetchUserInfoRequest());
  } catch (error) {
    yield put(loginFail(error));
  }
}

export function* fetchUser() {
  try {
    const fetchUserRequestData = {
      apiParam: 'apis/user',
    };
    const fetchUserResponse = yield call(fetchUserApi, fetchUserRequestData);
    const {
      message,
      status,
      user,
    } = fetchUserResponse.data;
    const {
      photo,
      user_id,
    } = user;

    if (status !== '200') {
      throw new Error(message);
    }

    yield put(fetchUserInfoSuccess({
      photoUrl: photo,
      userId: user_id,
    }));
  } catch (error) {
    yield put(fetchUserInfoFail(error));
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

function* watchAuth() {
  yield all([
    yield takeLatest(FETCH_USER_INFO_REQUEST, fetchUser),
    yield takeLatest(LOGIN_REQUEST, login),
    yield takeLatest(LOGOUT_REQUEST, logout),
  ]);
}

export default watchAuth;
