import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import mainReducers from "../Reducers/index.js";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  mainReducers,
  composeEnhancers(applyMiddleware(thunk))
);

export default store;
