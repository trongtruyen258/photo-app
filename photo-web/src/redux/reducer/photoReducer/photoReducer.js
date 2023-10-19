const initState = {
  listPhoto: [],
  photoSelected: {},
};
export default function PhotoReducer(state = initState, action) {
  switch (action.type) {
    case "SET_PHOTOS":
      return { ...state, listPhoto: action.payload };

    case "SET_PHOTO_SELECTED":
      return { ...state, photoSelected: action.payload };
    default:
      return state;
  }
}
