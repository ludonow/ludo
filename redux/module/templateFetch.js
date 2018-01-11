import { all, call, put, takeLatest } from 'redux-saga/effects';
import es6promise from 'es6-promise';

import axios from '../../axios-config';

es6promise.polyfill();

// Actions
export const TEMPLATE_FETCH_REQUEST = 'TEMPLATE_REQUEST';
export const TEMPLATE_FETCH_SUCCESS = 'TEMPLATE_SUCCESS';
export const TEMPLATE_FETCH_FAIL = 'TEMPLATE_FAIL';

// Reducer
export const reducer = (state = {}, action = {}) => {
  switch (action.type) {
    case TEMPLATE_FETCH_REQUEST:
      return {
        ...state,
        loading: true
      };
    case TEMPLATE_FETCH_SUCCESS:
      return {
        ...state,
        logginIn: true,
        photo: action.userInfo.photoUrl,
        userId: action.userInfo.userId
      };
    case TEMPLATE_FETCH_FAIL:
      return {
        ...state,
        logginIn: true,
        photo: action.userInfo.photoUrl,
        userId: action.userInfo.userId
      };
    default:
      return state;
  }
};
