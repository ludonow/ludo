import {
  call,
  put,
} from 'redux-saga/effects';
import md5 from 'blueimp-md5';
import {
  LOGIN_REQEUST,
  login,
  loginApi,
  loginFail,
  loginSuccess,
} from './auth';
import testLogInData from '../../../testLogInData.data';

describe('login flow', () => {
  const action = {
    type: LOGIN_REQEUST,
    payload: {
      email: testLogInData.email,
      password: testLogInData.password,
    },
  };
  const generator = login(action);

  it('Start login request process. Call loginApi', () => {
    const actual = generator.next();
    const requestData = {
      apiParam: '/login',
      loginData: {
        email: action.payload.email,
        password: md5(action.payload.password),
      },
    };
    const expected = call(loginApi, requestData);
    expect(actual.value).not.toBeUndefined();
    expect(actual.value).toEqual(expected);
    expect(actual.done).toEqual(false);
  });

  it('Successfully calling loginApi. Dispatch login success action with reponse data', () => {
    const photoUrl = 'photoUrl';
    const userId = 'userId';
    const fakeReponse = {
      photoUrl,
      userId,
    };
    const actual = generator.next();
    const expected = put(loginSuccess(fakeReponse));
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
