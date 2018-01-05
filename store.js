import nextReduxSaga from 'next-redux-saga';
import withRedux from 'next-redux-wrapper';
import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';

import * as auth from './redux/auth';

const exampleInitialState = {
  userInfo: {
    photoUrl: '',
    userId: null
  }
};

const rootReducer = (state = exampleInitialState, action) => (
  {
    auth: auth.reducer(state, action)
  }
);

const sagaMiddleware = createSagaMiddleware();

const configureStore = (initialState = exampleInitialState) => {
  const store = createStore(
    rootReducer,
    initialState,
    composeWithDevTools(applyMiddleware(sagaMiddleware))
  );

  store.sagaTask = sagaMiddleware.run(auth.rootSaga);
  return store;
};

const withReduxSaga = BaseComponent => (
  withRedux(configureStore)(nextReduxSaga(BaseComponent))
);

export default withReduxSaga;
