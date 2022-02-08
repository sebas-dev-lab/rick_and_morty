// Reducer
import { combineReducers } from "redux";

// Import reducers
import characterReducers from "./character.reducers";
import localReducers from "./location.reducers";

const mainReducers = combineReducers({
  character: characterReducers,
  local: localReducers,
});

export default mainReducers;
