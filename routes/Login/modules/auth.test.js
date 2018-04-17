import {
  call,
  put,
} from 'redux-saga/effects';
import md5 from 'blueimp-md5';
import {
  LOGIN_FAIL,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  initialState,
  login,
  loginApi,
  loginFail,
  loginRequest,
  loginSuccess,
  reducer,
} from './auth';
import testLogInData from '../../../testLogInData.data';

describe('auth action creators', () => {
  it('dispatch login request action', () => {
    const accountInfo = {
      email: 'email',
      password: 'password',
    };
    const actual = loginRequest(accountInfo);
    const expected = {
      type: LOGIN_REQUEST,
      payload: accountInfo,
    };
    expect(actual).toEqual(expected);
  });

  it('dispatch login success action', () => {
    const userInfo = {
      photoUrl: 'photoUrl',
      userId: 'userId',
    };
    const actual = loginSuccess(userInfo);
    const expected = {
      type: LOGIN_SUCCESS,
      payload: userInfo,
    };
    expect(actual).toEqual(expected);
  });

  it('dispatch login fail action', () => {
    const error = {
      message: 'error message',
    };
    const actual = loginFail(error);
    const expected = {
      type: LOGIN_FAIL,
      payload: {
        message: error.message,
      },
    };
    expect(actual).toEqual(expected);
  });
});

describe('auth reducers', () => {
  it('Dispatch login request action. Expect isLoggedIn being true', () => {
    const action = {
      type: LOGIN_REQUEST,
    };
    const actual = reducer(initialState, action);
    const expected = {
      ...initialState,
      isLoggingIn: true,
    };
    expect(actual).toEqual(expected);
  });

  it('Dispatch login success action. Expect auth flag change and userInfo update.', () => {
    const userInfo = {
      photoUrl: 'photoUrl',
      userId: 'userId',
    };
    const actual = reducer(initialState, loginSuccess(userInfo));
    const expected = {
      ...initialState,
      isLoggedIn: true,
      isLoggingIn: false,
      photoUrl: userInfo.photoUrl,
      userId: userInfo.userId,
    };
    expect(actual).toEqual(expected);
  });

  it('Dispatch login fail action. Expect auth flag change', () => {
    const error = {
      message: 'error message',
    };
    const actual = reducer(initialState, loginFail(error));
    const expected = {
      ...initialState,
      errorMessage: error.message,
      isLoggingIn: false,
    };
    expect(actual).toEqual(expected);
  });
});

describe('Successful login flow', () => {
  const action = {
    type: LOGIN_REQUEST,
    payload: {
      email: testLogInData.email,
      password: testLogInData.password,
    },
  };
  const generator = login(action);

  it('Start login request process. Call loginApi with correct account Info', () => {
    const actual = generator.next();
    const requestData = {
      accountInfo: {
        email: action.payload.email,
        password: md5(action.payload.password),
      },
      apiParam: '/login',
    };
    const expected = call(loginApi, requestData);
    expect(actual.value).not.toBeUndefined();
    expect(actual.value).toEqual(expected);
    expect(actual.done).toEqual(false);
  });

  it('Successfully calling loginApi and receive correct response status. Dispatch login success action with reponse data', () => {
    const photoUrl = 'photoUrl';
    const userId = 'userId';
    const fakeReponse = {
      data: {
        photoUrl,
        status: '200',
        userId,
      },
    };
    const actual = generator.next(fakeReponse);
    const expected = put(loginSuccess({
      photoUrl,
      userId,
    }));
    expect(actual.value).toEqual(expected);
    expect(actual.done).toEqual(false);
  });

  it('should be done', () => {
    const actual = generator.next();
    expect(actual.value).toBeUndefined();
    expect(actual.done).toEqual(true);
  });
});

describe('Login flow when server does not respond', () => {
  const action = {
    type: LOGIN_REQUEST,
    payload: {
      email: testLogInData.email,
      password: testLogInData.password,
    },
  };
  const generator = login(action);

  it('Start login request process. Call loginApi with correct account Info', () => {
    const actual = generator.next();
    const requestData = {
      accountInfo: {
        email: action.payload.email,
        password: md5(action.payload.password),
      },
      apiParam: '/login',
    };
    const expected = call(loginApi, requestData);
    expect(actual.value).not.toBeUndefined();
    expect(actual.value).toEqual(expected);
    expect(actual.done).toEqual(false);
  });

  it('Fail to call loginApi. Dispatch login fail action', () => {
    const errorMessage = 'login fail';
    const actual = generator.throw(errorMessage);
    const expected = put(loginFail(errorMessage));
    expect(actual.value).toEqual(expected);
    expect(actual.done).toEqual(false);
  });

  it('should be done', () => {
    const actual = generator.next();
    expect(actual.value).toBeUndefined();
    expect(actual.done).toEqual(true);
  });
});

describe('Login flow when user type wrong email or password', () => {
  const action = {
    type: LOGIN_REQUEST,
    payload: {
      email: testLogInData.email,
      password: testLogInData.password,
    },
  };
  const generator = login(action);

  it('Start login request process. Call loginApi with correct account Info', () => {
    const actual = generator.next();
    const requestData = {
      accountInfo: {
        email: action.payload.email,
        password: md5(action.payload.password),
      },
      apiParam: '/login',
    };
    const expected = call(loginApi, requestData);
    expect(actual.value).not.toBeUndefined();
    expect(actual.value).toEqual(expected);
    expect(actual.done).toEqual(false);
  });

  it('Successfully calling loginApi but receive incorrect response status. Dispatch login success action with reponse data', () => {
    const fakeReponse = {
      data: {
        status: '400',
        message: '信箱或密碼錯誤',
      },
    };
    const actual = generator.next(fakeReponse);
    const expected = put(loginFail({ message: fakeReponse.data.message }));
    expect(actual.value).toEqual(expected);
    expect(actual.done).toEqual(false);
  });

  it('should be done', () => {
    const actual = generator.next();
    expect(actual.value).toBeUndefined();
    expect(actual.done).toEqual(true);
  });
});
