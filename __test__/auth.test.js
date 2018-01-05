import { call, put } from 'redux-saga/effects';
import md5 from 'blueimp-md5';

import * as auth from '../redux/auth';
import testLogInData from '../testLogInData.data';

const loginSuccess = userInfo => ({ type: auth.LOGIN_SUCCESS, userInfo });
const loginFail = error => ({ type: auth.LOGIN_FAIL, error });

describe('login', () => {
  const generator = auth.login(testLogInData);

  it('should get user data', () => {
    const actual = generator.next();
    const requestData = {
      apiParam: '/login',
      loginData: {
        eMail: testLogInData.eMail,
        password: md5(testLogInData.password)
      }
    };
    const expected = call(auth.fetchUserInfo, requestData);
    expect(actual.value).not.toBeUndefined();
    expect(actual.value).toEqual(expected);
    expect(actual.done).toEqual(false);
  });

  it('and then trigger login success action', () => {
    const actual = generator.next();
    const expected = put(loginSuccess());
    expect(actual.value).toEqual(expected);
    expect(actual.done).toEqual(false);
  });

  it('should call loginFail when error occurs', () => {
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
