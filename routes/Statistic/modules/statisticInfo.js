import {
  all,
  call,
  put,
  takeEvery,
} from 'redux-saga/effects';
import { getWithQuery } from '../../../tools/api';

// - Actions
export const FETCH_STATISTIC_INFO_OF_SINGLE_TEMPLATE_REQUEST = 'FETCH_STATISTIC_INFO_OF_SINGLE_TEMPLATE_REQUEST';
export const FETCH_STATISTIC_INFO_OF_SINGLE_TEMPLATE_SUCCESS = 'FETCH_STATISTIC_INFO_OF_SINGLE_TEMPLATE_SUCCESS';
export const FETCH_STATISTIC_INFO_OF_SINGLE_TEMPLATE_FAIL = 'FETCH_STATISTIC_INFO_OF_SINGLE_TEMPLATE_FAIL';

// - State
export const initialState = {
  errorMessage: '',
  isFetching: false,
  list: [],
};

// - Reducer
export const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case FETCH_STATISTIC_INFO_OF_SINGLE_TEMPLATE_REQUEST:
      return {
        ...state,
        isFetching: true,
      };
    case FETCH_STATISTIC_INFO_OF_SINGLE_TEMPLATE_SUCCESS:
      return {
        ...state,
        errorMessage: '',
        isFetching: false,
        list: [...state.list, action.payload.info],
      };
    case FETCH_STATISTIC_INFO_OF_SINGLE_TEMPLATE_FAIL:
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
export const fetchStatisticInfoOfSingleTemplateRequest = ({ payload }) => ({
  type: FETCH_STATISTIC_INFO_OF_SINGLE_TEMPLATE_REQUEST,
  payload,
});
export const fetchStatisticInfoOfSingleTemplateSuccess = ({ info }) => ({
  type: FETCH_STATISTIC_INFO_OF_SINGLE_TEMPLATE_SUCCESS,
  payload: { info },
});
export const fetchStatisticInfoOfSingleTemplateFail = ({ message }) => ({
  type: FETCH_STATISTIC_INFO_OF_SINGLE_TEMPLATE_FAIL,
  payload: { message },
});

// - Sagas
export function* fetchStatisticInfoOfSingleTemplate(action) {
  try {
    const {
      ludoId,
      userId,
    } = action.payload;
    const query = `/apis/ludo/${ludoId}/statistic/${userId}`;
    const response = yield call(getWithQuery, query);
    const {
      data,
      message,
      status,
    } = response.data;

    if (status !== 200) {
      throw new Error(message);
    }

    yield put(fetchStatisticInfoOfSingleTemplateSuccess({ info: data }));
  } catch (error) {
    yield put(fetchStatisticInfoOfSingleTemplateFail(error));
  }
}

function* watchFetchStatisticInfoOfSingleTemplate() {
  yield all([
    yield takeEvery(FETCH_STATISTIC_INFO_OF_SINGLE_TEMPLATE_REQUEST, fetchStatisticInfoOfSingleTemplate),
  ]);
}

export default watchFetchStatisticInfoOfSingleTemplate;
