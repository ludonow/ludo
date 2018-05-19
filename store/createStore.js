import {
  applyMiddleware,
  combineReducers,
  createStore,
} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import { all } from 'redux-saga/effects';
import watchAuth, { reducer as authReducer } from '../routes/Auth/modules/auth';
import watchFetchUserInfo, { reducer as fetchUserInfoReducer } from '../routes/Auth/modules/user';

const rootReducer = combineReducers({
  auth: authReducer,
  userInfo: fetchUserInfoReducer,
});

export const sagaMiddleware = createSagaMiddleware();

export function* rootSaga() {
  yield all([
    watchAuth(),
    watchFetchUserInfo(),
  ]);
}

const configureStore = (initialState = {}) => {
  const store = createStore(
    rootReducer,
    initialState,
    composeWithDevTools(applyMiddleware(sagaMiddleware)),
  );

  /**
   * next-redux-saga depends on `runSagaTask` and `sagaTask` being attached to the store.
   *
   *   `runSagaTask` is used to rerun the rootSaga on the client when in sync mode (default)
   *   `sagaTask` is used to await the rootSaga task before sending results to the client
   *
   */

  store.runSagaTask = () => {
    store.sagaTask = sagaMiddleware.run(rootSaga);
  };

  // run the rootSaga initially
  store.runSagaTask();
  return store;
};

export default configureStore;
