import { actionTypes } from './actions';

export const exampleInitialState = {
  error: false,
  placeholderData: null
};

function reducer(state = exampleInitialState, action) {
  switch (action.type) {
    case actionTypes.FAILURE:
      return {
        ...state,
        ...{ error: action.error }
      };

    case actionTypes.LOAD_DATA_SUCCESS:
      return {
        ...state,
        ...{ placeholderData: action.data }
      };

    default:
      return state;
  }
}

export default reducer;
