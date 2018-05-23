import {
  applyMiddleware,
  combineReducers,
  createStore,
} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import { all } from 'redux-saga/effects';
import watchAuth, { reducer as authReducer } from '../routes/Auth/modules/auth';
import watchFetchLudoListOfSingleTemplate, { reducer as ludoListOfSingleTemplateReducer } from '../routes/Statistic/modules/ludoList';
import watchFetchSingleTemplate, { reducer as singleTemplateReducer } from '../routes/Statistic/modules/singleTemplate';
import watchFetchStatisticInfoOfSingleTemplate, { reducer as statisticInfoListOfSingleTemplateReducer } from '../routes/Statistic/modules/statisticInfo';
import watchFetchUserInfo, { reducer as fetchUserInfoReducer } from '../routes/Auth/modules/user';
import watchTemplateList, { reducer as templateListReducer } from '../routes/Group/modules/myTemplateList';
import { reducer as navbarReducer } from '../routes/UI/modules/navbar';

const rootReducer = combineReducers({
  auth: authReducer,
  ludoListOfSingleTemplate: ludoListOfSingleTemplateReducer,
  singleTemplate: singleTemplateReducer,
  statisticInfoListOfSingleTemplate: statisticInfoListOfSingleTemplateReducer,
  templateList: templateListReducer,
  ui: combineReducers({
    navbar: navbarReducer,
  }),
  userInfo: fetchUserInfoReducer,
});

export const sagaMiddleware = createSagaMiddleware();

export function* rootSaga() {
  yield all([
    watchAuth(),
    watchFetchLudoListOfSingleTemplate(),
    watchFetchUserInfo(),
    watchFetchSingleTemplate(),
    watchFetchStatisticInfoOfSingleTemplate(),
    watchTemplateList(),
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
