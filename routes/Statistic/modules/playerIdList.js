// - Sagas
export function* fetchPlayerIdOfSingleTemplate(action) {
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
    yield all(put(fetchStatisticInfoOfSingleTemplate({ templateId: template_id })));
  } catch (error) {
    yield put(fetchSingleTemplateFail(error));
  }
}

function* watchFetchPlayerIdOfSingleTemplate() {
  yield all([
    yield takeLatest(FETCH_SINGLE_TEMPLATE_REQUEST, fetchPlayerIdOfSingleTemplate),
  ]);
}

export default watchFetchPlayerIdOfSingleTemplate;
