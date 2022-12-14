import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import promise from "redux-promise";
import logger from "redux-logger";
import counter from "./reducers/counter";
import user from "./reducers/user";
import auth from "./reducers/auth";
import clientRequest from "@/client/request";
import severRequest from "@/sever/request";
import { createBrowserHistory, createMemoryHistory } from "history";
import { createReduxHistoryContext } from "redux-first-history";

export function getClientStore() {
  const initialStore = window.context.state;

  const { createReduxHistory, routerMiddleware, routerReducer } =
    createReduxHistoryContext({
      history: createBrowserHistory(),
      //other options if needed
    });
  const reducers = {
    counter,
    user,
    auth,
    router: routerReducer,
  };

  const combinedReducers = combineReducers(reducers);
  const store = applyMiddleware(
    thunk.withExtraArgument(clientRequest),
    promise,
    routerMiddleware,
    logger
  )(createStore)(combinedReducers, initialStore);

  const history = createReduxHistory(store);

  return {
    history,
    store,
  };
}

export function getSeverStore(req) {
  const { createReduxHistory, routerMiddleware, routerReducer } =
    createReduxHistoryContext({
      history: createMemoryHistory(),
      //other options if needed
    });

  const reducers = {
    counter,
    user,
    auth,
    router: routerReducer,
  };

  const combinedReducers = combineReducers(reducers);

  const store = applyMiddleware(
    thunk.withExtraArgument(severRequest(req)),
    promise,
    routerMiddleware,
    logger
  )(createStore)(combinedReducers);

  const history = createReduxHistory(store);

  return {
    history,
    store,
  };
}
