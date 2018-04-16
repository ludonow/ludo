import {
  applyMiddleware,
  combineReducers,
  createStore,
} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import {
  all,
  takeLatest,
} from 'redux-saga/effects';
import { reducer as formReducer } from 'redux-form';

import * as auth from '../routes/Login/modules/auth';
import * as language from './module/language';

const rootReducer = combineReducers({
  auth: auth.reducer,
  form: formReducer,
  multiLanguage: language.reducer,
});

const sagaMiddleware = createSagaMiddleware();

function* rootSaga() {
  yield all([
    yield takeLatest(auth.LOGIN_REQUEST, auth.login),
    yield takeLatest(auth.LOGOUT_REQUEST, auth.logout),
  ]);
}

const configureStore = (initialState = {}) => {
  const store = createStore(
    rootReducer,
    initialState,
    composeWithDevTools(applyMiddleware(sagaMiddleware)),
  );

  sagaMiddleware.run(rootSaga);
  return store;
};

export default configureStore;
