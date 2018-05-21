import {
  all,
  call,
  put,
  select,
  takeLatest,
} from 'redux-saga/effects';
import axios from '../../../axios-config';
import { getUserId } from '../../Auth/modules/user';

// - Actions
export const FETCH_TEMPLATE_LIST_REQUEST = 'FETCH_TEMPLATE_LIST_REQUEST';
export const FETCH_TEMPLATE_LIST_SUCCESS = 'FETCH_TEMPLATE_LIST_SUCCESS';
export const FETCH_TEMPLATE_LIST_FAIL = 'FETCH_TEMPLATE_LIST_FAIL';

// - State
export const initialState = {
  errorMessage: '',
  isFetching: false,
  list: [],
};

// - Reducer
export const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case FETCH_TEMPLATE_LIST_REQUEST:
      return {
        ...state,
        isFetching: true,
      };
    case FETCH_TEMPLATE_LIST_SUCCESS:
      return {
        ...state,
        errorMessage: '',
        isFetching: false,
        list: action.payload.list,
      };
    case FETCH_TEMPLATE_LIST_FAIL:
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
export const fetchTemplateListRequest = () => ({ type: FETCH_TEMPLATE_LIST_REQUEST });
export const fetchTemplateListSuccess = ({ list }) => ({
  type: FETCH_TEMPLATE_LIST_SUCCESS,
  payload: { list },
});
export const fetchTemplateListFail = ({ message }) => ({
  type: FETCH_TEMPLATE_LIST_FAIL,
  payload: { message },
});

// - Selectors
export const getTemplateList = state => state.templateList.list;

// - Api
export const fetchTemplateListApi = ({ apiParam }) => (
  axios.get(apiParam)
);

// - Sagas
export function* fetchTemplateList() {
  try {
    const userId = yield select(getUserId);
    const requestData = {
      apiParam: `/apis/ludo?stage=0&user_id=${userId}`,
    };
    const ludoListResponse = yield call(fetchTemplateListApi, requestData);
    const {
      message,
      status,
      ludoList,
    } = ludoListResponse.data;

    const ludoListItems = ludoList.Items;

    if (status !== '200') {
      throw new Error(message);
    }

    yield put(fetchTemplateListSuccess({ list: ludoListItems }));
  } catch (error) {
    yield put(fetchTemplateListFail(error));
  }
}

function* watchTemplateList() {
  yield all([
    yield takeLatest(FETCH_TEMPLATE_LIST_REQUEST, fetchTemplateList),
  ]);
}

export default watchTemplateList;
