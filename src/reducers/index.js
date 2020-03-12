import { combineReducers } from "redux";
import searchResultsReducer from "./searchResults";

export default combineReducers({
  results: searchResultsReducer
});
