import { applyMiddleware, createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import { all, takeLatest } from 'redux-saga/effects';

import * as auth from './module/auth';
import * as header from './module/header';
import * as language from './module/language';

export const exampleInitialState = {
  auth: {
    isLoggingIn: false,
    photoUrl: '',
    userId: 'default'
  },
  language: 'zh-tw'
};

const rootReducer = combineReducers({
  auth: auth.reducer,
  header: header.reducer,
  language: language.reducer
});

const sagaMiddleware = createSagaMiddleware();

function* rootSaga() {
  yield all([
    yield takeLatest(auth.LOGIN_REQUEST, auth.login),
    yield takeLatest(auth.LOGOUT, auth.logout),
    yield takeLatest(header.TOGGLE_AVATAR_POP_UP_MENU, header.toggleAvatarPopUpMenu)
  ]);
}

const configureStore = (initialState = exampleInitialState) => {
  const store = createStore(
    rootReducer,
    initialState,
    composeWithDevTools(applyMiddleware(sagaMiddleware))
  );

  sagaMiddleware.run(rootSaga);
  return store;
};

export default configureStore;
