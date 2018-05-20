// - Actions
export const TOGGLE_NAVBAR = 'TOGGLE_NAVBAR';

// - State
export const initialState = {
  isNavbarVisible: false,
};

// - Reducer
export const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case TOGGLE_NAVBAR:
      return {
        ...state,
        isNavbarVisible: !state.isNavbarVisible,
      };
    default:
      return state;
  }
};

// - Action Creators
export const toggleNavbar = () => ({ type: TOGGLE_NAVBAR });

// - Selectors
export const getIsNavbarVisible = state => state.ui.navbar.isNavbarVisible;
