import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';

import * as auth from './module/auth';
import * as togglePopUpMenu from './module/togglePopUpMenu';

const exampleInitialState = {
  auth: {
    photoUrl: '',
    userId: null
  },
  header: {
    isShowingAvatarPopUpMenu: false,
    isShowingMenuPopUpMenu: false
  }
};

const rootReducer = (state = exampleInitialState, action) => ({
  auth: auth.reducer(state.auth, action),
  togglePopUpMenu: togglePopUpMenu.reducer(state.header, action)
});

const sagaMiddleware = createSagaMiddleware();

const configureStore = (initialState = exampleInitialState) => {
  const store = createStore(
    rootReducer,
    initialState,
    composeWithDevTools(applyMiddleware(sagaMiddleware))
  );

  sagaMiddleware.run(auth.rootSaga);
  return store;
};

export default configureStore;
