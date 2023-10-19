const initState = {
  listCategory: [],
};
export default function categoriesReducer(state = initState, action) {
  switch (action.type) {
    case "SET_CATEGORIES":
      return { ...state, listCategory: action.payload };

    default:
      return state;
  }
}
