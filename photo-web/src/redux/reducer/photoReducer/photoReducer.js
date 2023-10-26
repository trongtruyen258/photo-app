const initState = {
  listPhoto: [],
  photoSelected: {},
  themeDark: false,
};
export default function PhotoReducer(state = initState, action) {
  switch (action.type) {
    case "SET_PHOTOS":
      return { ...state, listPhoto: action.payload };

    case "SET_PHOTO_SELECTED":
      return { ...state, photoSelected: action.payload };

    case "SET_THEME_DARK":
      return { ...state, themeDark: action.payload };
    default:
      return state;
  }
}
