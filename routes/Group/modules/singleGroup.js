import {
  all,
  call,
  put,
  takeLatest,
} from 'redux-saga/effects';
import { getWithQuery } from '../../../tools/api';

// - Actions
export const FETCH_SINGLE_GROUP_REQUEST = 'FETCH_SINGLE_GROUP_REQUEST';
export const FETCH_SINGLE_GROUP_SUCCESS = 'FETCH_SINGLE_GROUP_SUCCESS';
export const FETCH_SINGLE_GROUP_FAIL = 'FETCH_SINGLE_GROUP_FAIL';

// - State
export const initialState = {
  errorMessage: '',
  info: {
    title: 'DIY月餅挑戰',
  },
  isFetching: false,
  templateList: [],
};

// - Reducer
export const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case FETCH_SINGLE_GROUP_REQUEST:
      return {
        ...state,
        isFetching: true,
      };
    case FETCH_SINGLE_GROUP_SUCCESS:
      return {
        ...state,
        errorMessage: '',
        isFetching: false,
        info: action.payload.info,
      };
    case FETCH_SINGLE_GROUP_FAIL:
      return {
        ...state,
        errorMessage: action.payload.message,
        isFetching: false,
      };
    default:
      return state;
  }
};

// - Action Creators
export const fetchSingleGroupRequest = groupId => ({
  type: FETCH_SINGLE_GROUP_REQUEST,
  payload: { groupId },
});
export const fetchSingleGroupSuccess = ({ info }) => ({
  type: FETCH_SINGLE_GROUP_SUCCESS,
  payload: { info },
});
export const fetchSingleGroupFail = ({ message }) => ({
  type: FETCH_SINGLE_GROUP_FAIL,
  payload: { message },
});

// - Selectors
export const getGroupInfo = state => state.singleGroup.info;
export const getGroupId = state => state.singleGroup.id;

// - Sagas
export function* fetchSingleGroup(action) {
  try {
    const { groupId } = action.payload;
    const query = `/apis/ludo/${groupId}`;
    const response = yield call(getWithQuery, query);
    const {
      // info,
      message,
      status,
    } = response.data;

    if (status !== '200') {
      throw new Error(message);
    }

    // yield put(fetchSingleGroupRequest({ info }));
  } catch (error) {
    yield put(fetchSingleGroupFail(error));
  }
}

function* watchFetchSingleGroup() {
  yield all([
    yield takeLatest(FETCH_SINGLE_GROUP_REQUEST, fetchSingleGroup),
  ]);
}

export default watchFetchSingleGroup;
