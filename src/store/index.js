import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import promise from "redux-promise";
import logger from "redux-logger";
import counter from "./reducers/counter";
import user from "./reducers/user";
import clientRequest from "@/client/request";
import severRequest from "@/sever/request";

const reducers = {
  counter,
  user,
};
const combinedReducers = combineReducers(reducers);

export function getClientStore() {
  const initialStore = window.context.state;
  return applyMiddleware(
    thunk.withExtraArgument(clientRequest),
    promise,
    logger
  )(createStore)(combinedReducers, initialStore);
}

export function getSeverStore() {
  return applyMiddleware(
    thunk.withExtraArgument(severRequest),
    promise,
    logger
  )(createStore)(combinedReducers);
}
