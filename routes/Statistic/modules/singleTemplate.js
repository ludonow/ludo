import {
  all,
  call,
  put,
  takeLatest,
} from 'redux-saga/effects';
import { getWithQuery } from '../../../tools/api';
import { fetchLudoListRequest } from './ludoList';

// - Actions
export const FETCH_SINGLE_TEMPLATE_REQUEST = 'FETCH_SINGLE_TEMPLATE_REQUEST';
export const FETCH_SINGLE_TEMPLATE_SUCCESS = 'FETCH_SINGLE_TEMPLATE_SUCCESS';
export const FETCH_SINGLE_TEMPLATE_FAIL = 'FETCH_SINGLE_TEMPLATE_FAIL';

// - State
export const initialState = {
  errorMessage: '',
  info: {},
  isFetching: false,
  ludoList: [],
};

// - Reducer
export const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case FETCH_SINGLE_TEMPLATE_REQUEST:
      return {
        ...state,
        isFetching: true,
      };
    case FETCH_SINGLE_TEMPLATE_SUCCESS:
      return {
        ...state,
        errorMessage: '',
        isFetching: false,
        info: action.payload.info,
      };
    case FETCH_SINGLE_TEMPLATE_FAIL:
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
export const fetchSingleTemplateRequest = templateId => ({
  type: FETCH_SINGLE_TEMPLATE_REQUEST,
  payload: { templateId },
});
export const fetchSingleTemplateSuccess = ({ info }) => ({
  type: FETCH_SINGLE_TEMPLATE_SUCCESS,
  payload: { info },
});
export const fetchSingleTemplateFail = ({ message }) => ({
  type: FETCH_SINGLE_TEMPLATE_FAIL,
  payload: { message },
});

// - Selectors
export const getTemplateInfo = state => state.singleTemplate.info;
export const getTemplateId = state => state.singleTemplate.id;

// - Sagas
export function* fetchSingleTemplate(action) {
  try {
    const { templateId } = action.payload;
    const query = `/apis/ludo/${templateId}`;
    const response = yield call(getWithQuery, query);
    const {
      ludo,
      message,
      status,
    } = response.data;

    if (status !== '200') {
      throw new Error(message);
    }

    const { template_id } = ludo;

    yield put(fetchSingleTemplateSuccess({ info: ludo }));
    yield put(fetchLudoListRequest(template_id));
  } catch (error) {
    yield put(fetchSingleTemplateFail(error));
  }
}

function* watchFetchSingleTemplate() {
  yield all([
    yield takeLatest(FETCH_SINGLE_TEMPLATE_REQUEST, fetchSingleTemplate),
  ]);
}

export default watchFetchSingleTemplate;
