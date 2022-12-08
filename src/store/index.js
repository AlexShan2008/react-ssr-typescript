import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import promise from "redux-promise";
import logger from "redux-logger";
import counter from "./reducers/counter";

export function getStore() {
  const reducers = {
    counter,
  };

  const combinedReducers = combineReducers(reducers);
  const store = applyMiddleware(thunk, promise, logger)(createStore)(
    combinedReducers
  );

  return store;
}