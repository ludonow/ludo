// Actions
export const TOGGLE_AVATAR_POP_UP_MENU = 'TOGGLE_AVATAR_POP_UP_MENU';

// Action Creators
export const toggleAvatarPopUpMenu = () => ({
  type: TOGGLE_AVATAR_POP_UP_MENU
});

// Reducer
export const reducer = (state = {}, action = {}) => {
  switch (action.type) {
    case TOGGLE_AVATAR_POP_UP_MENU:
      return {
        ...state,
        header: {
          isShowingAvatarPopUpMenu: !state.header.isShowingAvatarPopUpMenu
        }
      };
    default:
      return state;
  }
};
