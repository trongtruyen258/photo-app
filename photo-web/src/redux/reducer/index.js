import { combineReducers } from "redux";
import categoriesReducer from "./categoryReducer/categoryReducer";
import PhotoReducer from "./photoReducer/photoReducer";

const reducers = combineReducers({
  category: categoriesReducer,
  photo: PhotoReducer,
});
export default reducers;
