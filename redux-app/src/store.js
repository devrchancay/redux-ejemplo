import { createStore, compose, applyMiddleware } from "redux";
import rootReducer from "./reducers";

import logger from "redux-logger";

const defaultState = {
  news: {
    data: null,
    loading: false
  }
};

const middlewares = [logger];

const enhacers = compose(
  applyMiddleware(...middlewares),
  window.devToolsExtension ? window.devToolsExtension() : f => f
);

const store = createStore(rootReducer, defaultState, enhacers);

export default store;
