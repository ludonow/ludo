export const initialState = {
  isShowingAvatarPopUpMenu: false,
  isShowingMenuPopUpMenu: false,
  listItems: ['登入']
};

// Actions
export const TOGGLE_AVATAR_POP_UP_MENU = 'TOGGLE_AVATAR_POP_UP_MENU';
export const TOGGLE_MENU_POP_UP_MENU = 'TOGGLE_MENU_POP_UP_MENU';

// Action Creators
export const toggleAvatarPopUpMenu = () => ({
  type: TOGGLE_AVATAR_POP_UP_MENU
});

export const toggleMenuPopUpMenu = () => ({
  type: TOGGLE_MENU_POP_UP_MENU
});

// Reducer
export const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case TOGGLE_AVATAR_POP_UP_MENU:
      return {
        ...state,
        isShowingAvatarPopUpMenu: !state.isShowingAvatarPopUpMenu
      };
    case TOGGLE_MENU_POP_UP_MENU:
      return {
        ...state,
        isShowingMenuPopUpMenu: !state.isShowingMenuPopUpMenu
      };
    default:
      return state;
  }
};
