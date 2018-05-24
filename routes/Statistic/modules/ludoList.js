import {
  all,
  call,
  put,
  takeLatest,
} from 'redux-saga/effects';
import { getWithQuery } from '../../../tools/api';
import { fetchStatisticInfoOfSingleTemplateRequest } from './statisticInfo';

// - Actions
export const FETCH_LUDO_LIST_REQUEST = 'FETCH_LUDO_LIST_REQUEST';
export const FETCH_LUDO_LIST_SUCCESS = 'FETCH_LUDO_LIST_SUCCESS';
export const FETCH_LUDO_LIST_FAIL = 'FETCH_LUDO_LIST_FAIL';

// - State
export const initialState = {
  errorMessage: '',
  isFetching: false,
  ludoList: [],
};

// - Reducer
export const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case FETCH_LUDO_LIST_REQUEST:
      return {
        ...state,
        isFetching: true,
      };
    case FETCH_LUDO_LIST_SUCCESS:
      return {
        ...state,
        errorMessage: '',
        isFetching: false,
        ludoList: action.payload.ludoList,
      };
    case FETCH_LUDO_LIST_FAIL:
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
export const fetchLudoListRequest = templateId => ({
  type: FETCH_LUDO_LIST_REQUEST,
  payload: { templateId },
});
export const fetchLudoListSuccess = ({ ludoList }) => ({
  type: FETCH_LUDO_LIST_SUCCESS,
  payload: { ludoList },
});
export const fetchLudoListFail = ({ message }) => ({
  type: FETCH_LUDO_LIST_FAIL,
  payload: { message },
});

// - Helper functions
function getUserIdListOfLudo({
  player_id,
  starter_id,
}) {
  return [
    player_id,
    starter_id,
  ];
}

// - Sagas
export function* fetchLudoListOfSingleTemplate(action) {
  try {
    const { templateId } = action.payload;
    const query = `/apis/ludo?stage=3&template_id=${templateId}`;
    const response = yield call(getWithQuery, query);
    const {
      ludoList,
      message,
      status,
    } = response.data;


    if (status !== '200') {
      throw new Error(message);
    }

    const list = ludoList.Items;

    const payloadList = list.reduce(
      (accumulator, ludoInfo) => {
        const starterPayload = {
          ludoId: ludoInfo.ludo_id,
          userId: ludoInfo.starter_id,
        };
        const playerPayload = {
          ludoId: ludoInfo.ludo_id,
          userId: ludoInfo.player_id,
        };
        return accumulator.concat([starterPayload, playerPayload]);
      },
      [],
    );

    yield all(payloadList.map(payload => put(fetchStatisticInfoOfSingleTemplateRequest({ payload }))));
    yield put(fetchLudoListSuccess({ ludoList: list }));
  } catch (error) {
    yield put(fetchLudoListFail(error));
  }
}

function* watchFetchLudoListOfSingleTemplate() {
  yield all([
    yield takeLatest(FETCH_LUDO_LIST_REQUEST, fetchLudoListOfSingleTemplate),
  ]);
}

export default watchFetchLudoListOfSingleTemplate;
