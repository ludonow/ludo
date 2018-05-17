import {
  call,
  put,
} from 'redux-saga/effects';
import {
  CLEAR_USER_INFO,
  FETCH_USER_INFO_FAIL,
  FETCH_USER_INFO_REQUEST,
  FETCH_USER_INFO_SUCCESS,
  clearUserInfo,
  fetchUser,
  fetchUserApi,
  fetchUserInfoFail,
  fetchUserInfoRequest,
  fetchUserInfoSuccess,
  initialState,
  reducer,
} from './user';

// action creator
describe('user action creators', () => {
  it('dispatch clear user info action', () => {
    const actual = clearUserInfo();
    const expected = { type: CLEAR_USER_INFO };
    expect(actual).toEqual(expected);
  });

  it('dispatch fetch user fail action', () => {
    const error = {
      message: 'error message',
    };
    const actual = fetchUserInfoFail(error);
    const expected = {
      type: FETCH_USER_INFO_FAIL,
      payload: {
        message: error.message,
      },
    };
    expect(actual).toEqual(expected);
  });

  it('dispatch fetch user request action', () => {
    const actual = fetchUserInfoRequest();
    const expected = {
      type: FETCH_USER_INFO_REQUEST,
    };
    expect(actual).toEqual(expected);
  });

  it('dispatch fetch user success action', () => {
    const fakeUserInfo = {
      photoUrl: 'default',
      userId: 'userId',
    };
    const actual = fetchUserInfoSuccess(fakeUserInfo);
    const expected = {
      type: FETCH_USER_INFO_SUCCESS,
      payload: {
        photoUrl: fakeUserInfo.photoUrl,
        userId: fakeUserInfo.userId,
      },
    };
    expect(actual).toEqual(expected);
  });
});

// reducer
describe('user reducer', () => {
  it('Dispatch no action. Expect initial state', () => {
    const action = {};
    const actual = reducer(initialState, action);
    const expected = initialState;
    expect(actual).toEqual(expected);
  });

  it('Dispatch clear user info action. Expect initial state', () => {
    const action = clearUserInfo();
    const actual = reducer(initialState, action);
    const expected = {
      ...initialState,
      photoUrl: null,
      userId: null,
    };
    expect(actual).toEqual(expected);
  });

  it('Dispatch fetch user info fail action. Expect initial state', () => {
    const errorMessage = 'fetch user info error';
    const action = fetchUserInfoFail({ message: errorMessage });
    const actual = reducer(initialState, action);
    const expected = {
      ...initialState,
      errorMessage,
      isFetching: false,
    };
    expect(actual).toEqual(expected);
  });

  it('Dispatch fetch user info request action. Expect initial state', () => {
    const action = fetchUserInfoRequest();
    const actual = reducer(initialState, action);
    const expected = {
      ...initialState,
      isFetching: true,
    };
    expect(actual).toEqual(expected);
  });

  it('Dispatch fetch user info success action. Expect initial state', () => {
    const payload = {
      photoUrl: 'default',
      userId: 'userId',
    };
    const action = fetchUserInfoSuccess(payload);
    const actual = reducer(initialState, action);
    const expected = {
      ...initialState,
      isFetching: false,
      photoUrl: payload.photoUrl,
      userId: payload.userId,
    };
    expect(actual).toEqual(expected);
  });
});

// fetch user saga
describe('Successfully fetch user info flow', () => {
  const generator = fetchUser();

  it('Start fetch user info process. Expect calling fetch user info api', () => {
    const actual = generator.next();
    const requestInfo = { apiParam: '/apis/user' };
    const expected = call(fetchUserApi, requestInfo);
    expect(actual.value).not.toBeUndefined();
    expect(actual.value).toEqual(expected);
    expect(actual.done).toEqual(false);
  });

  it('Receive correct server response. Expect dispatch fetch user info success action with id and avatar photo url', () => {
    const fakeResponse = {
      data: {
        status: '200',
        user: {
          photo: 'default',
          user_id: 'userId',
        },
      },
    };
    const actual = generator.next(fakeResponse);
    const expected = put(fetchUserInfoSuccess({
      photoUrl: fakeResponse.data.user.photo,
      userId: fakeResponse.data.user.user_id,
    }));
    expect(actual.value).not.toBeUndefined();
    expect(actual.value).toEqual(expected);
    expect(actual.done).toEqual(false);
  });

  it('Expect being done', () => {
    const actual = generator.next();
    expect(actual.value).toBeUndefined();
    expect(actual.done).toEqual(true);
  });
});

describe('Fetch user info flow when server does not respond', () => {
  const generator = fetchUser();

  it('Start fetch user info process. Expect calling fetch user info api', () => {
    const actual = generator.next();
    const requestInfo = { apiParam: '/apis/user' };
    const expected = call(fetchUserApi, requestInfo);
    expect(actual.value).not.toBeUndefined();
    expect(actual.value).toEqual(expected);
    expect(actual.done).toEqual(false);
  });

  it('Receive wrong server response. Expect dispatch fetch user info fail action with error message', () => {
    const errorMessage = 'fetch user data fail';
    const actual = generator.throw({ message: errorMessage });
    const expected = put(fetchUserInfoFail({
      message: errorMessage,
    }));
    expect(actual.value).not.toBeUndefined();
    expect(actual.value).toEqual(expected);
    expect(actual.done).toEqual(false);
  });

  it('Expect being done', () => {
    const actual = generator.next();
    expect(actual.value).toBeUndefined();
    expect(actual.done).toEqual(true);
  });
});

describe('Fetch user info flow when server respond wrong error message', () => {
  const generator = fetchUser();

  it('Start fetch user info process. Expect calling fetch user info api', () => {
    const actual = generator.next();
    const requestInfo = { apiParam: '/apis/user' };
    const expected = call(fetchUserApi, requestInfo);
    expect(actual.value).not.toBeUndefined();
    expect(actual.value).toEqual(expected);
    expect(actual.done).toEqual(false);
  });

  it('Receive wrong server response. Expect dispatch fetch user info fail action with error message', () => {
    const fakeResponse = {
      data: {
        message: 'fetch user error',
        status: '400',
      },
    };
    const actual = generator.next(fakeResponse);
    const expected = put(fetchUserInfoFail({
      message: fakeResponse.data.message,
    }));
    expect(actual.value).not.toBeUndefined();
    expect(actual.value).toEqual(expected);
    expect(actual.done).toEqual(false);
  });

  it('Expect being done', () => {
    const actual = generator.next();
    expect(actual.value).toBeUndefined();
    expect(actual.done).toEqual(true);
  });
});
