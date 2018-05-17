import {
  applyMiddleware,
  combineReducers,
  createStore,
} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import { all } from 'redux-saga/effects';
import { reducer as formReducer } from 'redux-form';
import watchAuth, { reducer as authReducer } from '../routes/Auth/modules/auth';
import watchFetchUserInfo, { reducer as fetchUserInfoReducer } from '../routes/Auth/modules/user';

const rootReducer = combineReducers({
  auth: authReducer,
  form: formReducer,
  userInfo: fetchUserInfoReducer,
});

const sagaMiddleware = createSagaMiddleware();

function* rootSaga() {
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

  sagaMiddleware.run(rootSaga);
  return store;
};

export default configureStore;
