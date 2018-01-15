import { applyMiddleware, createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import { all, takeLatest } from 'redux-saga/effects';

import * as auth from './module/auth';
import * as header from './module/header';

export const exampleInitialState = {
  auth: {
    photoUrl: '',
    userId: null
  },
  header: {
    isShowingAvatarPopUpMenu: false,
    isShowingMenuPopUpMenu: false,
    listItems: ['登入']
  }
};

const rootReducer = combineReducers({
  auth: auth.reducer,
  header: header.reducer
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
